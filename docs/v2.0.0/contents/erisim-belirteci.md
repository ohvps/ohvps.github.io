# 	Güçlü Kimlik Doğrulama <!-- omit in toc -->
<!--
- [Yetkilendirme Kodu API](#yetkilendirme-kodu)
- [Erişim Belirteci API](#erisim-belirteci)

-->

ÖHK'nın YÖS uygulamasından HHS uygulamasına yönlendirilmesi ile başlanan güçlü kimlik doğrulama süreci,<br> Oauth 2.0 standartları gereği öncelikle yetkod değerinin YÖS'e iletilmesi ile başlar ve erişim belirtecinin alınması sonucunda başarı ile sonuçlanmış olur.


#  Güçlü Kimlik Doğrulama için Erişim Adresleri (Endpoints)

**Etki Alanı (Scope) =“hesap_bilgisi”  "odeme_emri"**  
|No  |Kaynak |HTTP işlemi|Erişim Adresi |Zorunlu (Z)/ İsteğe Bağlı(İ)|Yetkilendirme Türü |İmzalama |Parametre |İstem Nesnesi |Yanıt Nesnesi |
| --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| 1 |yetkilendirme-kodu |GET |/yetkilendirme-kodu | Z |İstemci Kimlik Bilgileri |İmzalı Yanıt | |  | yetkilendirmeKodu |
| 2 |erisim-belirteci |POST |/erisim-belirteci| Z |İstemci Kimlik Bilgileri |İmzalı İstek ve Yanıt | | ErisimBelirteciIstegi  | ErisimBelirteci |

## Yetkilendirme Kodu API

**GET /yetkilendirme-kodu**


Ayrık GKD sürecinde kullanılacak olan Yetkilendirme Kodu API'nin  HHS tarafından sunulması gerekmektedir. 

Ayrık GKD akışında; HHS, YÖS'ün olay dinleme servisine "AYRIK_GKD_BASARILI" olay tipi ile olay bildirimi yapar. Böylece ÖHK'nın kendi sistemine başarı ile login olduğunu ve yetKod değerinin ÖHK ile ilişkilendirildiğinin bilgisini YÖS'e iletmiş olur. <br>
HHS olay bildirimi için retry policy süreçleri kapsamında 1 dakikada 3 kez deneme yapabilir. YÖS'e olay bildirimi yapılmamış ise, kendisine gelmeyen olay bildirimi için yetkod'un geçerli olduğu 5 dakika boyunca yetkilendirme-kodu endpointi ile sorgulama yaparak yetkod değerini alabilir.  

YÖS, "ODEME_EMRI_RIZASI" kaynağı için bildirim yapıldı ise; GET /yetkilendirme-kodu endpointi ile yetkod sorgusu yapılır.  
Örnek çağrım : 
**GET /yetkilendirme-kodu?rizaNo=123&rizaTip=O**

YÖS, "ILERI_TARIHLI_ODEME_EMRI_RIZASI" kaynağı için bildirim yapıldı ise; GET /yetkilendirme-kodu endpointi ile yetkod sorgusu yapılır.  
Örnek çağrım : 
**GET /yetkilendirme-kodu?rizaNo=123&rizaTip=I**

YÖS, "DUZENLI_TEKRARLI_ODEME_EMRI_RIZASI" kaynağı için bildirim yapıldı ise; GET /yetkilendirme-kodu endpointi ile yetkod sorgusu yapılır.  
Örnek çağrım : 
**GET /yetkilendirme-kodu?rizaNo=123&rizaTip=D**

YÖS, "HESAP_BILGISI_RIZASI" kaynağı için bildirim yapıldı ise; GET /yetkilendirme-kodu endpointi ile yetkod sorgusu yapılır.   
Örnek çağrım : 
**GET /yetkilendirme-kodu?rizaNo=123&rizaTip=H**

**İSTEK:**

YÖS, rıza numarasını ve isteğin ÖBH ya da HBH olmasına göre değişen rıza tipini parametre olarak istek talebine ekler. Rıza tipinin alabileceği değerler **TR.OHVPS.DataCode.RizaTip** sıralı veri tiplerinde belirtilmiştir.

HHS'nin, yetkilendirme yöntemi "Ayrık Gkd" ise  rıza numarası ile yetki kodu değerini dönmesi beklenmektedir. Yönlendirmeli GKD için bu endpoint "yetKod" değerini dönmemelidir. Yönlendirmeli GKD’ye ait bir rıza no ile yetkilendirme kodu API kullanılarak yet_kod alınmak istendiğinde HHS tarafından **TR.OHVPS.Resource.NotFound** hatası verilmelidir.

**YANIT:**  

HHS yanıt nesnesi içerisinde, ÖHK'ya ait yetki kodunu, rıza no ve rıza durumu ile birlikte YÖS'e iletir. 

|Alan Adı |JSON Alan Adı	|Format:Veri modeli İsmi	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | 
| Yetkilendirme Kodu | yetkilendirmeKodu | AN1..128 | Z | Rıza nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı | 
| > Yetki Kodu | yetKod | AN1..255 | Z | GKD sürecinde üretilen yetkilendirme kodudur. Tek kullanımlık olup, aynı yetKod ile birden fazla token alınamaz. yetKod Parametresinin yaşam ömrü 5 dakika olmalıdır.  | 
| > RızaNo | rizaNo | AN1..128 | Z | Rıza nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı | 
| > Rıza Durumu |	rizaDrm	| AN1 |	Z |	**TR.OHVPS.DataCode.RizaDurumu** sıralı veri tipini değerlerinden birini alır. |

Ayrık GKD sürecinde, yetkod değerini alan YÖS; erişim belirteci API ile GKD sürecini tamamlar.

## Erişim Belirteci API

**POST /erisim-belirteci** 


**İSTEK:**

YÖS erisim-belirteci erişim adresini 2 amaçla kullanır:   

1.	Bir önceki adımdan aldığı rizaNo, rizaTip (ödeme emri başlatma hizmetinde “O”, hesap bilgisi hizmetinde “H”, ileri tarihli ödeme emri başlatma hizmetinde "I") ve GKD sonrası dönülen yetKod bilgilerini kullanarak HHS nezdinde ErisimBelirteci nesnesi oluşturmak üzere istekte bulunur. YÖS’ün istekte bulunabilmesi için GKD adımının başarılı bir şekilde tamamlanması rizaDrm bilgisinin ‘yetkilendirildi’ olması gerekir. Erişim Belirteci nesnesi ile rızası nesnesi (Ödeme Emri Rızası, Hesap Bilgisi Rızası veya İleri Tarihli Ödeme Emri Rızası) arasındaki ilişki rıza numarası üzerinden sağlanır.  

2.	Aldığı erişim belirtecinin Geçerlilik Süresinin dolduğu durumda, yenileme belirteci karşılığında yeni bir erişim belirteci alması gerekmektedir.  


POST /erisim-belirteci isteğinin (REQUEST) gövdesinde (BODY)  “ErisimBelirteciIstegi” nesnesi (Tablo-23) kullanılır. İstek başarıyla sonuçlanırsa HHS kaynak sunucusunda “ErisimBelirteci” nesnesi (Tablo 24) oluşturulur veya (Yenileme Belirteci için) güncellenir. Rıza durumu “Yetki Kullanıldı” olarak güncellenir.

Erişim Belirteci POST işlemi sonucunda HTTP 200 dönülmesi gerekmektedir. 


**“ErisimBelirteciIstegi” nesnesi**

|Alan Adı |JSON Alan Adı	|Format:Veri modeli İsmi	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | 
| RızaNo | rizaNo | AN1..128 | Z | Rıza nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı | 
| Rıza Tipi | rizaTip | AN1 | Z | **O,H,I,D (TR.OHVPS.DataCode.RizaTip)** | 
| Yetki Tipi | yetTip | AN1..50 | Z | “yet_kod” yada “yenileme_belirteci” değerini alabilir. **(TR.OHVPS.DataCode.YetTip)** | 
| Yetki Kodu | yetKod | AN1..255 | K | GKD işleminden dönen yetkilendirme kodudur. Tek kullanımlık olup, aynı yetKod ile birden fazla token alınamaz. yetKod Parametresinin yaşam ömrü 5 dakika olmalıdır.<br>yetTip = “yet_kod” ise zorunludur. | 
| Yenilenme Belirteci | yenilemeBelirteci | AN1..4096   | K | Erişim belirtecinin yenilenmesi amacıyla kullanılır.<br>yetTip = “yenileme_belirteci” ise kullanımı zorunludur. | 


**BAŞARILI YANIT:**


POST işleminin RESPONSE gövdesini (BODY) oluşturan “erisimBelirteci” nesnesinde bulunan erişim belirteci değeri ödeme emrinin başlatılması esnasında kullanılır.


**"ErisimBelirteci" nesnesi**

|Alan Adı |JSON Alan Adı	|Format:Veri modeli İsmi	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | 
| Erişim Belirteci | erisimBelirteci | AN1..4096 | Z | Yetkilendirme Kodu karşılığında HHS tarafından dönülen ve sonraki hesap bilgisi ve ödeme emri servislerine erişimde kullanılan bilgidir.<br>[Bölüm 3.6 Karakter Kodlama](temel-prensipler.html#_3-6-karakter-kodlama)  bölümünde açıklanan karakter formatında gönderilmesi beklenmektedir. Yenileme belirteci ile birden fazla erişim belirteci alınması durumunda verilen tüm erişim belirteçlerinin süreleri bitene kadar geçerli olmalıdır.  | 
| Geçerlilik Süresi | gecerlilikSuresi | N1..9 | Z | Erişim Belirtecini saniye cinsinden geçerlilik süresidir.<br> Erişim belirteci geçerli olduğu son tarih ;<br>Hesap Bilgisi Rızası için en fazla 30 gün en az ise 1 gün olmalıdır.  Erişimin Geçerli Olduğu Son Tarih(erisimIzniSonTrh); Erişim Belirteci Geçerlilik Süresi'nden küçük ise Erişimin Geçerli Olduğu Son Tarih değeri ile sınırlıdır.<br>Ödeme Emri Rızası ,İleri Tarihli Ödeme Emri Rızası ve Düzenli Tekrarlı Ödeme Emri Rızası için 5 dakika olmalıdır. | 
| Yenileme Belirteci | yenilemeBelirteci | AN1..4096 | Z | Erişim belirtecinin yenilenmesi amacıyla kullanılır.<br> [Bölüm 3.6 Karakter Kodlama](temel-prensipler.html#_3-6-karakter-kodlama) bölümünde açıklanan karakter formatında gönderilmesi beklenmektedir. **Yenileme Belirteci ile Erişim Belirteci isteği yapıldığında HHS'nin döndüğü yanıt içerisindeki yenilemeBelirteci değerini kesinlikle değiştirmemesi gerekmektedir.Yenileme belirteci rıza süresi boyunca güncellenmemelidir.** | 
| Yenileme Belirteci Geçerlik Süresi | yenilemeBelirteciGecerlilikSuresi | N1..9 | Z | Yenileme belirtecinin saniye cinsinden geçerlilik süresidir.<br>Yenileme belirtecinin geçerli olduğu son tarih ;<br>Hesap Bilgisi için Erişimin Geçerli Olduğu Son Tarih ile sınırlı olmalıdır.<br>Bu tarih geldiği zaman Hesap Bilgisi Rıza Durumunu ”Yetki Sonlandırıldı” statüsüne çekilmesi gerekir.<br>Ödeme Başlatma için Rıza Oluşturma Zamanından 15 gün sonrası olmalıdır.<br><br>15 gün süresi sorgulama servislerinin çağrımını destekleyecek şekilde uzun tutulmuştur.<br>Ödeme emri 5 dakika içinde gerçekleştirilmelidir. Gerçekleşmediğinde 4.2.8 bölümünde aktarılan rıza statü güncellemesi yapılmalıdır. <br><br>Yenileme belirteci geçerlilik süresi, İleri Tarihli Ödeme Emri Başlatma için talimatın gerçekleşeceği zamandan 15 gün sonrası olmalıdır. Talimat gerçekleştikten sonrası için 15 gün süreyle sorgulama servislerinin çağrımını destekleyecek şekilde uzun tutulmuştur.<br><br>Yenileme belirteci geçerlilik süresi, Düzenli Tekrarlı Ödeme Emri Başlatma için talimatın gerçekleşeceği **son ödeme günü** zamanından 5 gün sonrası olmalıdır. Son talimat gerçekleştikten sonrası için 5 gün süreyle sorgulama servislerinin çağrımını destekleyecek şekilde uzun tutulmuştur.|

erisim-belirteci erisim noktasından elde edilen erisimBelirteci, ilişkilendirildiği nesne veya işlem için gönderilen POST isteği başlığında x-access-token alanında iletilir.

Yenilenme Belirteci (refreshToken) kullanılarak Erişim Belirteci (accessToken) alındığında, dönen yanıttaki Yenileme Belirteci Geçerlik Süresi (yenilemeBelirteciGecerlilikSuresi) geçen süre eksiltilerek, kalan zamanın saniye cinsinden hesaplanmasıyla iletilmelidir.


Erişim Belirteci API çağrımı sırasında rıza durumları kontrol edilmelidir. Bu kontrollerin nasıl yapılması gerektiği 4-Rıza Durumları bölümünde aktarılmıştır.


Yenileme belirteci karşılığında yeni bir erişim belirteci alınması sırasında HHS'nin döndüğü hata yanıtında httpCode = 401 ve errorCode = "TR.OHVPS.Connection.InvalidToken" gelirse YÖS önce rızanın durumu sorgulamalıdır. <br>
    Eğer geçerli bir rıza ise; HHS veya YÖS tarafında bir sorun olduğu anlaşılmalıdır. Sistem tarafından hata üretilmeli ve sorun incelenmelidir.<br>
    Eğer geçerli bir rıza değil ise YÖS tarafındaki rıza durumu güncellenmelidir.<br>