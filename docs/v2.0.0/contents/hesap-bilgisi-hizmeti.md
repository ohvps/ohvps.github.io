# 9.	Hesap Bilgisi Hizmeti <!-- omit in toc -->
<!--
- [Genel Bilgiler](#genel-bilgiler)
- [Hesap Bilgisi Hizmeti İçin Erişim Adresleri](#hesap-bilgisi-hizmeti-icin-erisim-adresleri)
- [ADIM 0: ÖHK Talebi](#adim-0-ohk-talebi)
- [ADIM 1: ÖHK Rızasının Hazırlanması](#adim-1-ohk-rızasının-hazırlanması)  
  - [Başarılı İstek](#basarılı-istek)
  - [Başarılı Yanıt](#basarılı-yanıt)
  - [İzinler](#izinler)
- [ADIM 2: ÖHK Rızasının Tesisi](#adim-2-ohk-rızasının-tesisi)
  - [ADIM 2.1: Hesap Bilgisi Rızasının Sorgulanması](#adim-2-1-hesap-bilgisi-rızasının-sorgulanması)
  - [ADIM 2.2: Hesap Bilgisi Rızasının İptali](#adim-2-2-hesap-bilgisi-rızasının-iptali)
- [ADIM 3: Hesap Bilgilerinin Alınması](#adim-3-hesap-bilgilerinin-alınması)  
- [ADIM 3.1 ve 3.2: Hesap Bilgilerinin Sorgulanması](#adim-3-1-ve-3-2-hesap-bilgilerinin-sorgulanması)
- [ADIM 3.3 ve 3.4: Hesap Bakiyesinin Sorgulanması](#adim-3-3-ve-3-4-hesap-bakiyesinin-sorgulanması)
- [ADIM 3.5 ve 3.6: İşlemlerin Sorgulanması](#adim-3-5-ve-3-6-islemlerin-sorgulanması)
-->

## Genel Bilgiler

[**Bu dokümanda belirtilen "Hesap Bilgisi Hizmeti" ibaresi hem hesap hem de kart rıza süreçlerini kapsamaktadır.**]()


Hesap bilgisi sorgulama için HBHS tarafından müşteri rızası tesisinin HHS tamamlanmış olması gerekir. Müşteri rızası tesisi tamamlandıktan sonra, HBHS sorgulamak istediği hesaba ait verileri ilgili erişim adresi üzerinden sorgular.


<!---
![Şekil 10: Hesap Bilgisi Hizmeti Üst Düzey Akışı ](./images/HesapBilgisiHizmetiUstDuzeyAkisi.png)
-->

<img src="./images/HesapBilgisiHizmetiUstDuzeyAkisiv2.png" width="50%" >


Şekil 10: Hesap Bilgisi Hizmeti Üst Düzey Akışı

Şekil-10’da sunulan hesap bilgisi hizmeti 5 temel akıştan oluşur:

**0.	Müşterinin hesap bilgilerine erişim için talepte bulunması:** ÖHK ÖBHS mobil uygulama ya da web sitesinden hesap bilgilerine erişim işlemini başlatır. 

**1.	Hesap Bilgisi müşteri rızasının hazırlanması:**

HBHS, “hesap/kart bilgilerine erişim” için müşteri rızası tesisi amacıyla HHS’deki hesap bilgisi rızası erişim adresine bir POST isteğinde bulunur ve bir hesap bilgisi rızası nesnesi oluşturur. HHS hesap bilgisi rızası nesnesi için biricik tanımlayacı döner (RızaNo). Hesap bilgisi rızası, müşterinin HBHS’nin hesap/kart bilgilerine erişim izin verdiği alanları için 9.1 ADIM 1: Hesap Bilgisi Rızasının Hazırlanması başlığında incelenebilir.


**2.	Hesap bilgisi hizmeti müşteri rızasının tesisi:** 

HHS, Hesap Bilgisi Rızası servisi ile ÖHK özelinde “Yetki bekleniyor” statüsünde bir rıza nesnesi hazırlar. HHS, GKD’nin başarıyla tamamlanması sonrasında hesap bilgisi rızası nesnesinin yetkilendirildiğini belirtmek için Rıza Durumunu “Rıza Yetkilendirildi” olarak günceller. Nesne yetkilendirildikten sonra HHS nesne ile bir erişim belirteci (access token) ilişkilendirir, Rıza Durumunu “Yetki Kullanıldı” yapar ve bu belirteci HBHS’ye geri döner.  Böylece müşteri rıza tesisi sağlanmış olur.

Hesap bilgisi rızasına ilişkin temel ilkeler şunlardır:

- 1 ÖHK'nın 1 YÖS için 1HHS'de Yetki Bekleniyor, Yetkilendirildi, Yetki Kullanıldı statüsünde 1 rızası olabilir. 
- Müşteri rızasının ayrıntıları ÖHK ile HBHS arasında belirlenir. Bu nedenle müşteri rızasının ayrıntıları HHS ekranında değiştirilmemelidir. 
- ÖHK, hesap ve kart erişim izni ayrıntılarını yalnızca bir bütün olarak yetkilendirebilir veya geri alabilir.
- Müşteri rızası tesisi esnasında, müşteri HHS arayüzünde erişim için yetkilendirecek hesapları ve kartları seçer. 
- Ödeme Sistemine doğrudan katılımcı olmayan HHS'ler, müşterilerine IBAN hizmeti sunmayabildikleri için hesap referansı ile akışlarını kurgulayabilirler. YÖS önyüzlerinde yapılan bilgilendirmelerde, IBAN harici hesap referansı ile işlem yapılabilmesine dikkat edilmelidir.  

**2.1	Hesap bilgisi rızasının sorgulanması:** Müşteri rızası **GET/hesap-bilgisi-rizasi/{RizaNo}** çağrısı yapılarak sorgulanır.

**2.2	Hesap bilgisi müşteri rızasının iptali:** Müşteri rızası **DELETE/hesap-bilgisi-rizasi/{RizaNo}** çağrısı yapılarak iptal edilir.

**3.1	Hesap bilgilerinin alınması:** Hesap bilgileri ilgili kaynağa (hesaplar, bakiye, işlemler) GET isteği yapılarak gerçekleştirilir. HBHS, müşteri rızasının tesisinden sonrasında (geçerli bir erişim belirticine sahip olduğunda) öncelikle **GET/hesaplar** çağrısı yapacaktır.

Nezdinde ödeme hesabı bulunduran hesap hizmeti sağlayıcılar(Banka, EPK, Ödeme Kuruluşları) müşterilerine ait hesapları hesap referansı ya da hesap numarası üzerinden takip etmektedir. YÖS'lerin HBH servisleri için hesap referansı veya hesap numarası üzerinden işlem yapılabileceğini bilmeleri, sistemlerini API dokümanında belirtilen akışlara göre uyumlandırmaları ve müşteri bilgilendirmesini (önyüzlerinde hesap no ve hesap referansı ayrımını gözeterek) buna paralel yapmaları beklenmektedir.  

**4.	Kart bilgilerinin alınması:**  Kart bilgileri ilgili kaynağa (kartlar, kart detayı, kart hareketleri) GET isteği yapılarak gerçekleştirilir. HBHS, müşteri rızasının tesisinden sonrasında (geçerli bir erişim belirticine sahip olduğunda) öncelikle **GET/kartlar** çağrısı yapacaktır.

## Hesap Bilgisi Hizmeti İçin Erişim Adresleri

**Etki Alanı (Scope) =“hesap_bilgisi”**

|No  |Kaynak |HTTP işlemi|Erişim Adresi |Zorunlu / İsteğe Bağlı|Yetkilendirme Türü |İmzalama |Parametre |İstem Nesnesi |Yanıt Nesnesi |
| --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| 1 |hesap-bilgisi-rizasi |POST |/hesap-bilgisi-rizasi | Z |İstemci Kimlik Bilgileri |İmzalı İstek ve Yanıt | |HesapBilgisiRizasiIstegi | HesapBilgisiRizasi|
| 2 |erisim-belirteci  (GKD için) |POST |/erisim-belirteci | Z |İstemci Kimlik Bilgileri |İmzalı İstek ve Yanıt | |ErisimBelirteciIstegi | ErisimBelirteci|
| 2.1 |hesap-bilgisi-rizasi |GET |/hesap-bilgisi-rizasi/{RizaNo} | Z |İstemci Kimlik Bilgileri |İmzalı Yanıt | | | HesapBilgisiRizasi|
| 2.2 |hesap-bilgisi-rizasi |DELETE |/hesap-bilgisi-rizasi/{RizaNo} | Z |İstemci Kimlik Bilgileri |  | | | |
| 3.1 |hesaplar |GET |/hesaplar | Z |İstemci Kimlik Bilgileri ve Yetkilendirme Kodu (GKD) |  | Sayfalama | |HesapBilgileri(birden çok hesap) |
| 3.2 |hesaplar |GET |/hesaplar/{hspRef} | Z |İstemci Kimlik Bilgileri ve Yetkilendirme Kodu (GKD) |  |  | |HesapBilgileri(tek  hesap) |
| 3.3 |bakiye  |GET |/hesaplar/{hspRef}/bakiye | Z |İstemci Kimlik Bilgileri ve Yetkilendirme Kodu (GKD) |  |  | |BakiyeBilgileri(tek  hesap) |
| 3.4 |bakiye  |GET |/bakiye | Z |İstemci Kimlik Bilgileri ve Yetkilendirme Kodu (GKD) |  |Sayfalama  | |BakiyeBilgileri(birden çok hesap) |
| 3.5 |islemler  |GET |/hesaplar/{hspRef}/işlemler | Z |İstemci Kimlik Bilgileri ve Yetkilendirme Kodu (GKD) |  |Sayfalama Filtreleme  | |IslemBilgileri (tek hesap) |
| 4 | kartlar |GET |/kartlar | Z |İstemci Kimlik Bilgileri ve Yetkilendirme Kodu (GKD) | |Sayfalama Filtreleme |  | KartBilgileri(birden çok kart)|
| 4.1 | kartlar |GET |/kartlar/{kartRef} | Z |İstemci Kimlik Bilgileri ve Yetkilendirme Kodu (GKD) | |Sayfalama Filtreleme |  | KartBilgileri(tek kart)|
| 4.2 | kart-detay |GET |/kartlar/{kartRef}/kart-detay | Z |İstemci Kimlik Bilgileri ve Yetkilendirme Kodu (GKD) | |  Filtreleme| | KartDetayBilgileri|
| 4.3 | kart-hareketleri |GET |/kartlar/{kartRef}/kart-hareketleri | Z |İstemci Kimlik Bilgileri ve Yetkilendirme Kodu (GKD) | | Sayfalama Filtreleme | | KartHareketleri|

**Tablo 11: Hesap/Kart Bilgisi Hizmeti İçin Erişim Adresleri**


## ADIM 0: ÖHK'nın hesap/kart bilgilerine erişim için talepte bulunması:

ÖHK, HBHS uygulamasında (web arayüzü/mobil uygulama) hesap/kart bilgilerine erişim için talepte bulunur.


## 9.1 ADIM 1: Hesap Bilgisi Rızasının Hazırlanması 

**Bu dokümanda belirtilen hesap bilgisi hizmeti ibaresi hem hesap hem de kart rıza süreçlerini kapsamaktadır.**


Bu API çağrısı HBHS'nin HHS'de yeni bir “HesapBilgisiRizasi” nesnesi oluşturmasını ve nesneye erişmek için benzersiz bir rıza numarası ({rizaNo}) dönülmesini sağlar. 

API çağrısının başarıyla sonuçlanması için HBHS'nin istemci kimlik bilgileri yetkisi kullanması yeterlidir. 
Başarıyla oluşturulan hesap bilgisi rıza kaynağının rıza durumu “Yetki Bekleniyor” olarak düzenlenir.
ÖHK daha önce aldığı rızaya ilişkin erişim tarihleri, izin türlerini ve hesap bilgilerini güncellemek isterse, HBHS önce HHS nezdindeki rızayı iptal etmeli ve sonrasında yeni bir rıza talebinde bulunmalıdır. 
<!---
![Şekil 11: Hesap Bilgisi Müşteri Rızasının Hazırlanması](./images/HesapBilgisiMusteriRizasininHazirlanmasi.png)
-->
<img src="./images/HesapBilgisiMusteriRizasininHazirlanmasiv2.png" width="80%" >

**Şekil 11: Hesap/Kart Bilgisi Müşteri Rızasının Hazırlanması**

- POST /hesap-bilgisi-rizasi isteğinin (REQUEST) gövdesinde (BODY)  “HesapBilgisiRizasıIstegi” nesnesi (Tablo-12) kullanılır. İstek başarıyla sonuçlanırsa HHS kaynak sunucusunda “HesapBilgisiRizasi” (Tablo-13) nesnesi oluşturulur.


### **POST /hesap-bilgisi-rizasi**<br>

<br>**Bu dokümanda belirtilen hesap bilgisi rızası ibaresi hem hesap hem de kart rıza süreçlerini kapsamaktadır.**

### Başarılı İstek:

İSTEK:

HBHS, bu API erişim adresinden HHS’ye yeni bir HesapBilgisiRizasi oluşturulması için istekte bulunur:
-	HBHS, ÖHK’nın hesap/kart bilgilerine yönelik rıza başlatma isteği olduğunu HHS’ye bildirir. YÖS'ler sürüm 2.0 için Hesap Bilgisi Rızası isteği gönderdiğinde HHS'nin ÖHK'yı yönlendireceği mobil uygulama içerisinde sürüm 2.0 değişikliklerini içeren, kart bilgilerinin seçimini yapacakları sürümün yüklü olmaması durumunda HHS'ler tarafından **TR.OHVPS.Business.CustomerMobileApplicationHasOlderVersion** hatası verilebilir. 
-	HBHS, ÖHK’nın, HBHS arayüzünden verdiği rızanın (“Ön Onay”) bir kopyasının HHS nezdinde müşteri tarafından onaylanması için HHS’ye gönderilmesini sağlar.
-	HHS; istek mesajında yer alan alanların API dökümanında belirtilen şartları sağlayacak şekilde zorunluluk ve uzunluk kontrollerini yapar.(Zorunlu) Kontrollere istinaden hata oluşması durumunda **”TR.OHVPS.Resource.InvalidFormat”** hata kodu iletilmeli ve fieldErrors dolu olacak şekilde hatalı alanı belirten detaylı açıklama gönderilmelidir. InvalidFormat hata kodlarında fieldErrors içeriği gönderilmeli ve anlaşılır açıklama ile message, messageTr alanları doldurulması zorunludur.  
-	HHS, hhsKod’un kendisine ait olduğunu ve istek başlığındaki x-aspsp-code değeri ile aynı olduğunu kontrol eder. Farklı olması durumunda **”TR.OHVPS.Connection.InvalidASPSP”** hatası dönülür.
- HHS, yosKod’un geçerli bir Ödeme Hizmeti Sağlayıcısı Kodu olduğunu ve istek başlığındaki x-tpp-code değeri ile aynı olduğunu kontrol eder. Farklı olması durumunda **”TR.OHVPS.Connection.InvalidTPP”** hatası dönülür.
-	HHS; YÖS API ile alınan temel adres bilgilerinde yer alan yönlendirme adresleri ile hesap bilgisi rızası nesnesi içerisinde yer alan YÖS  adreslerin uyumlu olup olmadığının kontrollerini yapar. (Zorunlu) Kontrollere istinaden hata oluşması durumunda **”TR.OHVPS.Business.TPPRedirectionAddressMismatch”** hatası dönülür.
-	HHS; kimlik bilgileri nesnesinde iletilen kimlik bilgileri ile ÖHK’nın HHS müşterisi olup olmadığının kontrollerini yapar. Bu kontrol hem bireysel hem de kurumsal ÖHK’lar için yapılmalıdır.(Zorunlu) Kontrollere istinaden hata oluşması durumunda **”TR.OHVPS.Business.CustomerNotFound”** hatası dönülür. Kurumsal müşteri ile başlatılan rızada yer alan müşteri bilgisinin karşı kurumda Kurumsal müşteri değil; bireysel müşteri olduğu durumda “TR.OHVPS.Business.BusinessCustomerMismatch” hatası dönülür.
- Bir ÖHK'nın 1 YÖS için aktif tek bir rızası olabilir. ÖHK’nın  “Yetkilendirildi” ve “Yetki Kullanıldı” statüsünde rızası varken yeni bir rıza isteği gönderdiğinde HHS tarafından **TR.OHVPS.Business.ConsentAlreadyExists** hatası dönülür. **Güncelleme isteği göndermesi durumunda ise işletilmesi gereken akışlar “Rıza Durumları” başlığından kontrol edilmelidir.**
- Hesap bilgi hizmeti rıza isteğinde bulunan ÖHK’nın “Açık Bankacılık Kanal Yetki” tanımı yok ise **”TR.OHVPS.Business.OpenBankingChannelClosed”** hatası dönülür. HHS insiyatifinde olup HHS bu kontrolü GKD sonrası gerçekleştirebilir.
- Hesap bilgi hizmeti rıza isteğinde 01 ya da 07 izin türü olmak zorundadır. HHS tarafından izin türü içerisinde 01 ya da 07 varlık durumu kontrol edilir. Olmaması durumunda **"TR.OHVPS.Business.IncorrectPermissionType”** hatası dönülür.
- Hesap bilgi hizmeti rıza isteğinde 01 izin türü bulunmuyor ise 02, 03, 04, 05 ya da 06 izin türü olmamalıdır. 01 izin türü bulunmadığında 02, 03, 04, 05 ya da 06 izin türlerinden biri ya da birkaçı gönderildiğinde **"TR.OHVPS.Business.IncorrectPermissionType”** hatası dönülür.
- Hesap bilgi hizmeti rıza isteğinde 07 izin türü bulunmuyor ise 08 ya da 09 izin türü olmamalıdır. 07 izin türü bulunmadığında 08 ya da 09 izin türlerinden biri ya da ikisi gönderildiğinde **"TR.OHVPS.Business.IncorrectPermissionType”** hatası dönülür.
- ÖHK, HHS'de olacak bakiye değişikliklerinden anlık haberdar olmak istiyor ise 06-Anlık Bakiye Bildirimi izin türü seçimi ile rıza başlatması gereklidir. 03-Bakiye Bilgisi izin türü ile birlikte seçilmesi gereklidir. 06 izin türü seçilip 03 izin türü seçilmediği durumda **”TR.OHVPS.Business.IncorrectPermissionType”** hatası dönülür.
-	İzin türü “06: Anlık Bakiye Bildirimi” seçilmiş ise HHS, YÖS'ün KAYNAK_GUNCELLENDI olay tipinde olay aboneliğinin varlığını kontrol eder. Olay abonelik kaydı bulunmuyor ise **”TR.OHVPS.Business.EventSubscriptionNotFound”** hatası dönülür.
- Hesap bilgi hizmeti rıza isteğinde bulunan ÖHK’nın izin verecek hesap ya da kartı yok ise **”TR.OHVPS.Business.ProductNotSuitable”** hatası dönülür. İki üründen biri var ise başarılı yanıt dönülür. HHS insiyatifinde olup HHS bu kontrolü GKD sonrası gerçekleştirebilir.
- Erişimin Geçerli Olduğu Son Tarih bilgisi müşteri bağımsız alabileceği minimum değer : Rıza tarihi + 1 gündür. Maksimum rıza süresi bireysel müşteriler için 6 ay, Kurumsal/Tüzel müşteriler için 12 ay olacaktır. Bireysel müşteriler için 6 aydan fazla, kurumsal müşteriler için ise 12 aydan fazla iletildiği durumda **”TR.OHVPS.Resource.InvalidFormat”** hatası dönülür. 
- İzin türü “Temel işlem Bilgisi” ve/veya “Ayrıntılı İşlem Bilgisi” seçilmiş ise; İşlem Sorgulama Başlangıç Zamanı, hesap bilgisi rızası verilmesinden **geçmişe** dönük en fazla 12 ay olabilmektedir. 12 aydan fazla gönderilmesi durumunda **”TR.OHVPS.Resource.InvalidFormat”** hatası dönülür. 
- İzin türü “Temel işlem Bilgisi” ve/veya “Ayrıntılı İşlem Bilgisi” seçilmiş ise; İşlem Sorgulama Başlangıç Zamanı, hesap bilgisi rızası verilmesinden **geleceğe** dönük en fazla 12 ay sonrası olabilmektedir. 12 aydan fazla gönderilmesi durumunda **”TR.OHVPS.Resource.InvalidFormat”** hatası dönülür. 
- Ayrık GKD desteklemeyen HHS'ye Ayrık GKD yöntemiyle rıza başlatma isteği yapılması durumunda HHS tarafından **”TR.OHVPS.Business.DecoupledAuthenticationNotSupported”** hatası dönülür. YÖS ilgili işlemi “Yönlendirmeli” akışa çekip süreci ilerletebilir. 
- HHS "gkd" nesnesi için alan kontrollerini gerçekleştirir. "yetYntm" = "A" gönderilmiş ise "ayrikGkd" nesnesinin dolu gönderilmesi zorunludur. Gönderilmemesi durumunda HHS tarafından **”TR.OHVPS.Resource.InvalidFormat”** hatası dönülür.
- Ayrık GKD ile başlatılan hesap bilgi hizmeti rıza isteğinde HHS, YÖS’ün AYRIK_GKD_BASARILI ve AYRIK_GKD_BASARISIZ olay tipleri için olay aboneliğinin varlığını kontrol eder. YÖS iki olay tipine de abone olmak zorundadır. Eğer olay aboneliği yoksa HHS tarafından **”TR.OHVPS.Business.EventSubscriptionNotFound”** hatası dönülür. 
- ÖHK'ya ait kimlik verisi(kmlk.kmlkVrs) ile ayrık GKD içerisinde yer alan OHK Tanım Değer alanı (ayrikGkd.ohkTanimDeger) birebir aynı olmalıdır. Aynı olmadığı durumda HHS tarafından **”TR.OHVPS.Business.CustomerInfoMismatch”** hatası dönülür. 
- HHS tarafında ÖHK'nın mobil uygulaması bulunmaması durumu tespit edilebildiği durumda Ayrık GKD ile başlatılan rıza akışlarında hata mesajı vermelidir. HHS tarafından **”TR.OHVPS.Business.CustomerMobileApplicationNotFound”** hatası dönülür. YÖS ilgili işlemi “Yönlendirmeli” akışa çekip süreci ilerletebilir. 

Yukarıdaki kontroller tamamlandıktan sonra HHS, benzersiz “RizaNo” ile “HesapBilgisiRizasi” nesnesi oluşturur ve HBHS’ye döner.

HHS, HesapBilgisiRizasi oluşturduğu anda durumunu “Yetki Bekleniyor” olarak düzenler.


**Tablo 12: “HesapBilgisiRizasiIstegi” nesnesi**
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|HHS tarafından yapılması gereken kontrol ve işlemler|
| --- | --- | --- | --- | --- | --- |
| Önceki Rıza No | oncekiRizaNo | AN1..128 | K | HesapBilgisiRızasiIstegi nesnesinin güncelleme sebebiyle oluşturulması esnasında ÖHK'nın güncelleme yapmak istediği mevcut rıza no bilgisi. Rıza güncelleme yapılmak istendiğinde gönderilmesi zorunludur. | 
| Katılımcı Bilgisi | katilimciBlg |Kompleks:KatilimciBilgisi | Z | Katılımcılara atanmış kod bilgileridir. |  |
| >Hesap Hizmeti Sağlayıcısı Kodu | hhsKod | AN4 | Z | İsteğin iletildiği Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu) |	HHS, hhsKod’un kendisine ait olduğunu ve istek başlığındaki x-aspsp-code değeri ile aynı olduğunu kontrol eder. Hata durumunda TR.OHVPS.Connection.InvalidASPSP hata kodunu döner. |
|> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu | yosKod | AN4 | Z | İsteği gönderen Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur | HHS, yosKod’un geçerli bir Ödeme Hizmeti Sağlayıcısı Kodu olduğunu ve istek başlığındaki x-tpp-code değeri ile aynı olduğunu kontrol eder.  Hata durumunda TR.OHVPS.Connection.InvalidTPP hata kodunu döner. |
| GKD | gkd | Kompleks:Gkd | Z |  |  |
| >Yetkilendirme Yöntemi | yetYntm | AN1 | İ |TR.OHVPS.DataCode.GkdTur sıralı veri türü değerlerinden birini alır.  <br>Yetkilendirme yöntemi, HBHS tarafından belirtilmeyebilir. | HHS, HBHS’nin belirlediği yöntemi dikkate alarak süreci ilgili akışa uygun olarak devam ettirir. Desteklemediği yöntem için (örn: Ayrık GKD) ayrıca hata mesajı verilmelidir. |
| > Yönlenme Adresi | yonAdr | AN1..1024 | K | Yönlendirmeli güçlü kimlik doğrulama için zorunlu.<br> YÖS’ün ileteceği adrestir.<br>  Durum kodu(drmKod), yönlendirme adresine parametre olarak eklenmelidir.  | HHS, müşteri uygulama / tarayıcısını bu alanda belirtilen adrese yönlendirir. |
| > Ayrık GKD	| ayrikGkd  | Kompleks:AyrikGkd  | K   | Ayrık güçlü kimlik doğrulama için zorunlu.  | yetYntm = A gönderilmiş ise ayrikGkd nesnesinin dolu gönderilmesi zorunludur. <br><br> HHS, YÖS'ün AYRIK_GKD_BASARILI ve AYRIK_GKD_BASARISIZ olay tipleri için olay aboneliğinin varlığını kontrol eder. [Bknz: Ayrık GKD](gkd.html#_5-2-ayr%C4%B1k-guclu-kimlik-dogrulama)  |
| >> OHK Tanım Tip	| ohkTanimTip  | AN8  | K   | ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım tipleridir. **TR.OHVPS.DataCode.OHKTanimTip** sıralı veri tiplerinden birini alır. |  |
| >> OHK Tanım Değer	| ohkTanimDeger  | AN1..30  | K   |ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım değeridir. ohkTanimTip'i ile uyumlu değerdir.|  |
| Kimlik | kmlk | Kompleks:Kimlik | Z |  |  |
| > Kimlik Türü | kmlkTur | AN1 | Z | TR.OHVPS.DataCode.KimlikTur sıralı veri türü değerlerinden birini alır. <br> Kurum adına yapılan(ticari) işlemlerde kurum kullanıcısının bilgisi iletilmelidir. |  |
| > Kimlik Verisi | kmlkVrs | AN1..30 | Z | HHS nezdinde kullanıcı doğrulamasında kullanılan tanımlayıcıdır. <br> TR.OHVPS.DataCode.KimlikTur değerine göre uzunluk ve formatı değişir. <br> Kurum adına yapılan(ticari) işlemlerde kurum kullanıcısının bilgisi iletilmelidir. |  |
| > Kurum Kimlik Türü | krmKmlkTur | AN1 | K | ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik türüdür. <br>TR.OHVPS.DataCode.KurumKimlikTur sıralı veri türü değerlerinden birini alır. |  |
| > Kurum Kimlik Verisi | krmKmlkVrs | AN1..30 | K | ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik verisidir. <br>TR.OHVPS.DataCode.KurumKimlikTur değerine göre uzunluk ve formatı değişir. |  |
| > Ödeme Hizmeti Kullanıcısı Türü | ohkTur | AN1 | Z | TR.OHVPS.DataCode.OhkTur sıralı veri türü değerlerinden birini alır (B: Bireysel, K:Kurumsal) |  |
| Hesap/Kart Bilgisi | hspBlg | Kompleks: HesapBilgisi | Z |  |  |
| >İzin Bilgisi | iznBlg | Kompleks: IzinBilgisi | Z |  |  |
| >> İzin Türü | iznTur | Array[AN2] | Z | ÖHK tarafından HHS önyüzünde belirlenen izin tipleridir. Bir istekte birden fazla değer bulunabilir, TR.OHVPS.DataCode.IzinTur sıralı veri türü değerlerinden birini alır.  |  |
| >> Erişimin Geçerli Olduğu Son Tarih |erisimIzniSonTrh | ISODateTime | Z | Hesap bilgisi rızasının geçerli olduğu son tarih. <br> Müşteri YÖS ekranından bu değeri belirleyebilir. Bireysel müşteriler için rıza süresi 6 ay, Kurumsal/Tüzel müşteriler için 12 ay olacaktır.<br> <br> Bireysel Müşteriler için varsayılan değer : Rıza verilen tarih + 6 ay <br> Kurumsal Müşteriler için varsayılan değer : Rıza verilen tarih + 12 ay<br> Bireysel Müşteriler için alabileceği maksimum değer : Rıza tarihi + 6 ay <br>Kurumsal Müşteriler için alabileceği maksimum değer : Rıza tarihi + 12 ay <br>  Müşteri bağımsız alabileceği minimum değer : Rıza tarihi + 1 gün <br><br> **Örneğin** 04/02/2023’de minimum 05/02/2023 seçilebilir. Bu durumda yeni günün başlangıç saati 00:00:00 olduğu kabul edildiği için; erisimIzniSonTrh değeri 2023-02-06T00:00:00+03:00 olmalıdır. **HHS rıza onay ekranlarında YÖS'ten iletilen erişim izni son tarihi yeni günün başlangıç saati olarak iletildiğinden ÖHK'ya gösterilecek tarih erişim izninin biteceği gün olarak gösterilmelidir.** Örneğe istinaden; ÖHK YÖS’de 05/02/2023 seçmiş ise HHS rıza onay ekranında 06/02/2023 görmemeli, bu iki tarihin aynı, yani 05/02/2023 olacak şekilde gösterilmesi gerekmektedir.   <br><br> **Örnek rıza oluş zamanı** : 2023-02-04T21:20:20+03:00 <br> **1 günlük rıza verildiğinde erisimIzniSonTrh değeri:**   2023-02-06T00:00:00+03:00 (26 saat 40 sakikalık rıza vermiş oluyor.) <br> **7 günlük rıza verildiğinde erisimIzniSonTrh değeri:** 2023-02-12T00:00:00+03:00 <br> **1 aylık rıza verildiğinde erisimIzniSonTrh değeri :**  2023-03-05-T00:00:00+03:00  | Bu alanda bir değer bulunmadığı durumda HHS hata dönmelidir. |
| >> İşlem Sorgulama Başlangıç Zamanı | hesapIslemBslZmn | ISODateTime | K | Hesap bilgisi rızası verilmesinden geçmişe dönük en fazla 12 ay olabilir, daha eski olmaması gerekir. <br> Varsayılan değeri rıza verilen tarih (işlem zamanı) – 12 aydır. <br> ÖHK bu alana bir değer girişi sağlamış ise zaman bilgisi üretilirken ekrandan girilen tarihe 00:00:00 zaman bilgisi eklenmelidir. ÖHK değer girişi sağlamamış ise ÖBHS varsayılan değerlerle bu alanı doldurarak, HHS’ye iletir. <br> Minimum tarihi : Rızanın veriliş tarihi  - 12 ay  <br> Maksimum tarih: Rızanın veriliş tarihi +  12 ay  <br> İzin türü “Temel işlem Bilgisi” ve/veya “Ayrıntılı İşlem Bilgisi” seçildiğinde bu alanların doldurulması zorunludur.<br> İzin türü “Temel işlem Bilgisi” ve/veya “Ayrıntılı İşlem Bilgisi” seçilmemiş ise gönderilmemelidir.  |ÖHK tarafından izin türü “Temel işlem Bilgisi” ve/veya “Ayrıntılı İşlem Bilgisi” seçilmemiş ve  İşlem Sorgulama Başlangıç Zamanı ÖBHS tarafından dolu olarak gönderilmiş ise HHS tarafından işlemin devamına izin verilmez.<br>İzin türü “Temel işlem Bilgisi” ve/veya “Ayrıntılı İşlem Bilgisi” seçilmiş ise; HHS bu alanın alabileceği minimum ve maksimum değerlerin sınırlar içerisinde olduğunu kontrol eder. |
| >> İşlem Sorgulama Bitiş Zamanı | hesapIslemBtsZmn | ISODateTime | K | Hesap bilgisi rızası verilmesinden geleceğe dönük en fazla 12 ay sonrası olabilir, daha ileri bir tarih olmaması gerekir. <br> Varsayılan değeri: Rıza verilen tarih + 12 aydır.<br>ÖHK bu alana bir değer girişi sağlamış ise girdiği tarihe 1 gün eklenir ve yeni günün ilk saati kabul edilen 00:00:00 saat bilgisini ekler.<br> ÖHK bu alana bir değer girişi sağlamamış ise ÖBHS varsayılan değerlerle bu alanı doldurarak, HHS’ye iletir.<br> Minimum tarihi : Rızanın veriliş tarihi  – 12 ay<br> Maksimum tarihi :  Rızanın veriliş tarihi + 12 ay <br> İzin türü “Temel işlem Bilgisi” ve/veya “Ayrıntılı İşlem Bilgisi” seçildiğinde bu alanların doldurulması zorunludur.<br> İzin türü “Temel işlem Bilgisi” ve/veya “Ayrıntılı İşlem Bilgisi” seçilmemiş ise gönderilmemelidir. Eğer dolu gönderilirse HHS tarafından uygun hata mesajı iletilmelidir. | ÖHK tarafından izin türü “Temel işlem Bilgisi” ve/veya “Ayrıntılı İşlem Bilgisi” seçilmemiş ve İşlem Sorgulama Bitiş Zamanı ÖBHS tarafından dolu olarak gönderilmiş ise HHS tarafından işlemin devamına izin verilmez. <br> İzin türü “Temel işlem Bilgisi” ve/veya “Ayrıntılı İşlem Bilgisi” seçilmiş ise; HHS bu alanın alabileceği minimum ve maksimum değerlerin sınırlar içerisinde olduğunu kontrol eder. |


					
### Başarılı Yanıt:

**Tablo 13: HesapBilgisiRizasi nesnesi**

|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | 
| Önceki Rıza No | oncekiRizaNo | AN1..128 | K | HesapBilgisiRızasiIstegi nesnesinin güncelleme sebebiyle oluşturulması esnasında ÖHK'nın güncelleme yapmak istediği mevcut rıza no bilgisi. Rıza güncelleme yapılmak istendiğinde gönderilmesi zorunludur. İstekte gönderilen değer aynı şekilde yanıtta dönülmelidir.| 
| Riza Bilgileri | rzBlg | Kompleks: RizaBilgileri | Z |  | 
| > Rıza No | rizaNo | AN1..128 | Z | HesapBilgisiRızasi nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı | 
| > Oluşturma Zamanı | olusZmn | ISODateTime | Z | HesapBilgisiRızası nesnesinin oluşturulma zamanı | 
| > Güncellenme Zamanı|	gnclZmn	| ISODateTime	| Z	| HesapBilgisiRızası nesnesinin güncellenme zamanı |
|> Rıza Durumu |	rizaDrm	| AN1 |	Z |	TR.OHVPS.DataCode.RizaDurumu sıralı veri tipini değerlerinden birini alır. Örn; hesap bilgi rızasının tesisine dair ilk istek mesajına dönüşte “B: Yetki Bekleniyor” değerini alması beklenir.|
|> Rıza Iptal Detay Kodu |	rizaIptDtyKod |	AN2 |	K |	Rıza durumunun iptal olduğu durumda zorunludur.|
|Kimlik|	kmlk|	Kompleks:Kimlik|	Z| |
|> Kimlik Türü | kmlkTur |AN1| Z| TR.OHVPS.DataCode.KimlikTur sıralı veri türü değerlerinden birini alır.|
|> Kimlik Verisi	|kmlkVrs|	AN1..30|	Z	|HHS nezdinde kullanıcı doğrulamasında kullanılan tanımlayıcıdır. TR.OHVPS.DataCode.KimlikTur değerine göre uzunluk ve formatı değişir.|
|> Kurum Kimlik Türü|	krmKmlkTur|	AN1|	K|	ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik türüdür.<br> TR.OHVPS.DataCode.KurumKimlikTur sıralı veri türü değerlerinden birini alır.|
|> Kurum Kimlik Verisi|	krmKmlkVrs|	AN1..30|	K	|ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik verisidir.<br> TR.OHVPS.DataCode.KurumKimlikTur değerine göre uzunluk ve formatı değişir.|
|> Ödeme Hizmeti Kullanıcısı Türü	|ohkTur	|AN1	|Z	|TR.OHVPS.DataCode.OhkTur sıralı veri türü değerlerinden birini alır (B: Bireysel, K:Kurumsal)|
|Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.|
|>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|İsteğin iletildiği Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)|
|> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	|İsteği gönderen Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.|
|GKD|	gkd	|Kompleks:Gkd	|Z	||
|> Yetkilendirme Yöntemi|	yetYntm	|AN1	|Z|	HHS, HBHS’nin belirlediği yöntemi dikkate alarak süreci ilgili akışa uygun olarak devam ettirir. Desteklemediği yöntem için (örn: Ayrık GKD) ayrıca hata mesajı verilmelidir.<br> TR.OHVPS.DataCode.GkdTur sıralı veri türü değerlerinden birini alır.|
|> Yönlenme Adresi|	yonAdr|	AN1..1024|	K	|HHS, müşteri uygulama / tarayıcısını yönlendirmeli akışta bu alanda belirtilen YÖS adresine yönlendirir.|
|> Ayrık GKD	| ayrikGkd  | Kompleks:AyrikGkd  | K   | Ayrık güçlü kimlik doğrulama için zorunlu.  | yetYntm = A gönderilmiş ise ayrikGkd nesnesinin dolu gönderilmesi zorunludur. yetYntm = Y için bu nesne iletilmemelidir. |
|>> OHK Tanım Tip	| ohkTanimTip  | AN8  | K   | ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım tipleridir. İstek içerisindeki veri değiştirilmeden iletilir. |  
| >> OHK Tanım Değer	| ohkTanimDeger  | AN1..30  | K   |ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım değeridir. ohkTanimTip'i ile uyumlu değerdir.  İstek içerisindeki veri değiştirilmeden iletilir.|   
|> HHS Yönlenme Adresi |	hhsYonAdr	|AN1..1024|	K| Yönlendirmeli akış türünde	GKD doğrulama bilgilerinin girilebilmesi için uygulamadan açılacak yönlendirme sayfasının adresi. Ayrık GKD akışında bu alan dönülmemelidir. |
|> Yetkilendirme Tamamlanma Zamanı |	yetTmmZmn	|ISODateTime	|Z	|Yetkilendirme akışının tamamlanması gereken son zamanı gösterir.  HHS tarafından maksimum 5 dk içinde işlem tamamlanacak şekil zaman damgası oluşturulur. Zaman aşımı olduğunda HHS’nin GKD’ye izin vermeyecek şekilde hata mesajı vermesi gerekmektedir.<br>Rıza durumu Yetkilendirildi statüsüne geçene kadarki süredir.|
|Hesap/Kart Bilgisi|	hspBlg|	Kompleks: HesapBilgisi|	Z| |
|> İzin Bilgisi|	iznBlg|	Kompleks: IzinBilgisi|	Z| |
|>> İzin Türü|	iznTur|	Array[AN2]|	Z|	ÖHK tarafından HBHS önyüzünde belirlenen izin tipleridir. Bir istekte birden fazla değer bulunabilir, TR.OHVPS.DataCode.IzinTur sıralı veri türü değerlerinden birini alır.|
|>> Erişimin Geçerli Olduğu Son Tarih	|erisimIzniSonTrh	|ISODateTime|	Z	|Hesap bilgisi rızasının geçerli olduğu son tarih|
|>> İşlem Sorgulama Başlangıç Zamanı|	hesapIslemBslZmn|	ISODateTime	|K|	Hesap hareketlerinin sorgunabileceği başlangıç zamanı. İzin türü “Temel işlem Bilgisi” ve/veya “Ayrıntılı İşlem Bilgisi” seçildiğinde bu alanların doldurulması zorunludur. |
|>> İşlem Sorgulama Bitiş Zamanı|	hesapIslemBtsZmn	|ISODateTime|	K|	Hesap hareketlerinin sorgunabileceği bitiş zamanı. İzin türü “Temel işlem Bilgisi” ve/veya “Ayrıntılı İşlem Bilgisi” seçildiğinde bu alanların doldurulması zorunludur.|
|> Ayrıntı Bilgi|	ayrBlg|	Kompleks: AyrintiBilgi|	İ| |
|> ÖHK Mesaj Alanı|	ohkMsj|	AN1..200|	İ	|HHS’nin ÖHK’ya göstermek üzere ilettiği mesaj.|

## İzinler

Bir hesap bilgisi rızası kaynağı çağrısına yanıt olarak döndürülen verileri sınırlamak için izin kodları kullanılır.

**Hesap ve karta dair tüm bilgiler hesap bilgisi rızası altında alınacaktır. İzin türleri hesap ve karta göre ayrışmaktadır.**

-	Temel Hesap Bilgisi 
-	Ayrıntılı Hesap Bilgisi 
-	Bakiye Bilgisi 
-	Temel İşlem (Hesap Hareketleri) Bilgisi 
-	Ayrıntılı İşlem Bilgisi
- Anlık Bakiye Bildirimi
- Temel Kart Bilgisi
- Detaylı Kart Bilgisi
- Ayrıntılı Kart İşlem Bilgisi

ÖHK’ya sunulacak seçimler ve kuralları aşağıdaki gibi olmalıdır.

| Seçim | Kural | 
| --- | --- |  
| Temel Hesap Bilgisi | 	ÖHK seçim yapabilir. Temel Kart Bilgisi seçilmediyse bu izin türünün seçimi zorunludur.  |  
| Ayrıntılı Hesap Bilgisi	 | ÖHK seçim yapabilir. | 
| Bakiye Bilgisi | ÖHK seçim yapabilir. |
| Temel İşlem (Hesap Hareketleri)  Bilgisi  | ÖHK seçim yapabilir. |  
| Ayrıntılı İşlem Bilgisi	 | ÖHK seçim yapabilir. Ayrıntılı İşlem Bilgisi seçimi Temel İşlem Bilgisi seçimini kapsar. (Ayrıntılı İşlem bilgisi seçildiğinde Temel İşlem Bilgisi de seçili olmalıdır.)|  
| Anlık Bakiye Bildirimi  | Bakiye Bilgisi izin türü ile birlikte seçilmesi gereklidir. ÖHK, HHS'de olacak bakiye değişikliklerinden anlık haberdar olmak istiyor ise bu izin türü seçimi ile rıza başlatması gereklidir.|  
| Temel Kart Bilgisi | 	ÖHK seçim yapabilir. Temel Hesap Bilgisi seçilmediyse bu izin türünün seçimi zorunludur.  |  
| Detaylı Kart Bilgisi | ÖHK seçim yapabilir.   |  
| Ayrıntılı Kart İşlem Bilgisi | ÖHK seçim yapabilir. |  


Aşağıdaki durumlarda, izin kombinasyonlarına izin verilmez. HHS, bu hesap erişim onaylarını 400 (Hatalı İstek) yanıt koduyla reddetmelidir:

- İzin dizisinin herhangi bir izin türü içermemesi durumu,
- İzin dizisinde HHS tarafından desteklenmeyen bir izin kodunun yer alması durumu
 

## 9.2 ADIM 2: Hesap Bilgisi Hizmeti Rızasının Tesisi
<!--
![Şekil 12: Hesap Bilgisi Müşteri Rızasının Tesisi](./images/HesapBilgisiMusteriRizasininTesisi.png)
-->
<img src="./images/HesapBilgisiMusteriRizasininTesisiv2.png" width="80%" >

**Şekil 12: Hesap Bilgisi ÖHK Rızasının Tesisi**

Rıza tesisinin başarıyla sonuçlanması için HBHS'nin istemci kimlik bilgileri yetkisi kullanması ve ardından müşterinin HHS tarafından yönlendirmeli veya ayrık GKD ile doğrulanması gerekir. HHS'de oluşturulan ve rıza durumu “Yetki Bekleniyor” olan bir hesap bilgisi rızası, GKD sonrası “Yetkilendirildi” statüsüne güncellenir. HBHS, erişim sağlayacağı hesapları ve kartları hesap bilgisi rızasının tesisinden önce seçer.

-	Yönlendirmeli doğrulama akışında, HBHS ÖHK’yı HHS’ye yönlendirir. 
    - HBHS tarafından yönlendirme, bir önceki adımdaki RizaNo’yu içerir. 
    - 	HHS, ÖHK için GKD sürecini işletir.

          ÖHK’yı doğrularsa,

          - ÖHK HBHS üzerinden işlem yapılmasına izin vereceği hesap/kart seçimini yapar. HBHS üzerinden ÖHK’nın verdiği izin bilgilerini ve erişim izninin başlangıç/bitiş tarihi bilgilerini, HHS'ler bilgilendirme amaçlı ÖHK’ya gösterir. 
          - Rıza güncelleme akışı ile başlatılan rıza isteklerinde mevcut rıza içerisinde seçili olan hesap/kart bilgileri ÖHK'ya HHS ekranlarında aynı şekilde seçili olarak getirilmelidir. ÖHK'lar mevcut rıza içerisinde izin vermiş olduğu hesap/kart bilgilerini seçili olarak görüntüleyip yeni rıza için izin vermek istediği hesap/kartların seçimini güncelleyebilmelidir.
          - HHS hesap bilgisi rıza kaynağının durumunu “Yetkilendirildi” olarak günceller. 
          - HHS, ÖHK’yı “olumlu yönlendirme akışı” ile HBHS tarafından tanımlanan yönlendirme adresine yönlendirir:  

                yonAdr?rizaDrm=Y&yetKod=xx&rizaNo=yy&rizaTip=H&drmKod=zzz


        ÖHK’yı doğrulayamazsa,
        - HHS, hesap bilgisi rıza kaynağının durumunu “Yetki İptal” olarak günceller. 
        - HHS, ÖHK’yı “olumsuz yönlendirme akışı” ile HBHS tarafından tanımlanan yönlendirme adresine yönlendirir:  
        
              yonAdr?rizaDrm=I &rizaNo=yy&rizaTip=H&rizaIptDtyKod=11&drmKod=zzz

-	Ayrık doğrulama akışında, HHS, ÖHK’nın hesap bilgisi hizmetini başlattığı uygulamadan farklı olabilecek bir “doğrulama” uygulamasında işlemi doğrulamasını ister.   

    - Ayrık akış HBHS’nin farklı bir kanal kullanarak yetkilendirme isteği göndermesiyle başlatılır. 
    - 	Bu yetkilendirme isteği, yetkilendirilecek hesap bilgisi rızasının eşleştirileceği ÖHK’nın bulunması için ilgili veriyi taşır. 
    -  HHS, ödeme hizmeti kullanıcısını doğrular.
    - ÖHK verdiği izin tipi dahilinde bilgileri paylaşılacak olan hesapları seçer. Rıza güncelleme akışı ile başlatılan isteklerde ÖHK mevcutta vermiş olduğu hesap ve kartları seçili olarak görüntüler. İlgili seçimler üzerinde güncelleme sağlayarak onay verir.
    -	HHS, hesap bilgisi rıza kaynağının durumunu “Yetkilendirildi” olarak günceller.   

Başarılı GKD sonrasında (rizaDrm=’Y’) ilgili rıza nesnesi için (belirli bir rizaNo) yetkilendirme kodunun (yetKod) alınmasının ardından erişim belirteci erişim adresine POST çağrısı yapılarak yetkilendirme kodu karşılığında erişim belirteci ve yenileme belirteci alınır. POST /erişim-belirteci erişim noktası EK-3’te açıklanmıştır.  

Erişim belirteci alındıktan sonra; HHS,  hesap bilgisi rızasının durumunu “Yetki Kullanıldı” olarak günceller. Rıza tesisi sağlanmış olur.

## 9.3 ADIM 2.1: Hesap Bilgisi Rızasının Sorgulanması 

**GET /hesap-bilgisi-rizasi/{rizaNo}**  

ÖHK, HHS üzerinden rıza iptali yapmış olabilir veya ÖHK’nın verdiği rıza süresi dolmuş olabilir.  Bu durumlarda HBHS, rıza alma akışına başlamadan önce, daha önce oluşturulmuş bir HesapBilgisiRizasi kaynağının durumunu, isteğe bağlı olarak alabilir.  

- YÖS sadece kendi uygulaması üzerinden verilmiş hesap bilgi rızasını sorgulayabilir. YÖS'e ait olmayan bir rıza ile sorgulama yapıldığında HHS tarafından **"TR.OHVPS.Resource.NotFound"** hatası dönülür.
- YÖS'e ait rıza sorgulama yapılırken ilgili rıza kaydı bulunamaz ise **”TR.OHVPS.Resource.NotFound”** hatası dönülür.

Servis başarılı yanıtında Tablo 13’de belirtilen “HesapBilgisiRizasi” nesnesini dönmektedir.

Durum  
HesapBilgisiRizasi kaynağı için kullanılabilecek durum göstergeleri şu şekildedir:  
-	Yetki Bekleniyor
-	Yetkilendirildi
-	Yetki Kullanıldı	
-	Yetki Sonlandırıldı
-	Yetki İptal

- Hesap bilgisi rızası sonlandırıldı ve iptal statüsünde olan rıza'ların güncellenme zamanından(gnclZmn) 6 ay sonrasına kadar sorgulanabilir olması beklenmektedir. HHS'ler ilgili süre sonrasında yapılacak rıza sorgularına **"TR.OHVPS.Resource.NotFound"** uyarısı verebilir. YÖS'ler tarafından iptal ve sonlandırıldı statüsünde olan rızalar için sorgulama yapmamalıdır.

## 9.4 ADIM 2.2: Hesap Bilgisi Rızasının İptali

<br>
<img src="./images/HesapBilgisiMusteriRizasininGeriAlinmasiv2.png" width="80%" >
<br>

**Şekil 13: Hesap Bilgisi Müşteri Rızasının Geri Alınması**  


**DELETE /hesap-bilgisi-rizasi/{RizaNo}**  

DELETE /hesap-bilgisi-rizasi çağrısı, bir HBHS'nin önceden oluşturulmuş bir hesap erişim rızasını (yetkili olsun veya olmasın) silmesine izin verir. Müşteri, rızasını HHS üzerinden iptal etmek yerine, HBHS üzerinden bu rızasını kaldırmak isteyebilir.  
Bu API çağrısı, müşterinin HBHS üzerinden hesap bilgisi rızasını iptal etmesine ve HHS nezdindeki hesap bilgisi rızası nesnesinin silinmesini sağlar.  

- Erişim belirteci kontrolü yapılır. Geçerli bir erişim belirteci yok ise HHS tarafından **”TR.OHVPS.Connection.InvalidToken”** hatası dönülür.
- İstek başlığında yer alan X-Access-Token ile ilişkili rıza, silinen rizaNo bilgisi ile aynı olup olmadığı kontrol edilir. Farklı olması durumunda **"TR.OHVPS.Resource.NotFound"** hatası dönülür.
- Rıza İptali API'sinde ilgili rıza kaydı bulunamaz ise **”TR.OHVPS.Resource.NotFound”** hatası dönülür.
- Rıza durumu Yetki Sonlandırıldı - S veya Yetki İptal - I ise **"TR.OHVPS.Resource.ConsentRevoked"** hatası dönülür.

Müşterinin HBHS’nin veri erişim iznini iptal etmesi durumunda HBHS, HHS’de mevcut olan HesapBilgisiRizasi kaynağını pratik olarak mümkün olan en kısa sürede silmelidir. Bu ise, ilgili kaynağa   
**DELETE /hesap-bilgisi-rizasi/{RizaNo}**  
çağrısı aracılığı ile yerine getirilir. HBHS ayrıca, sisteminden Hesap/Kart Erişim İzni kaynaklarını da temizlemelidir.  
Söz konusu silme işlemi, kayıtların statüsünün pasife çekilmesi ile gerçekleştirilmelidir. Söz konusu kayıtlar, denetim izlerinin oluşturulması ve saklanmasına ilişkin ikincil düzenleme hükümleri kapsamında güvenli şekilde tutulmalıdır.  
Servis istek parametresi olarak sadece path’de iletilen Rıza No bilgisine ihtiyaç duymaktadır.   
ÖHK rızası başarı ile silindiğinde HTTP 204 response kodu ile işlem sonucu iletilir. Rıza tipi “I” yani “Yetki İptal” olarak güncellenir ve gnclZmn zaman damgası vurularak güncellenir.  
ÖHK ile rıza iptali sırasında kurulacak iletişimde (e-posta, sms gibi) aşağıdaki alanların iletilmesi tavsiye edilmektedir:   
YÖS Adı, HHS adı, Rıza Oluşturma Zamanı, Servis Tipi Bilgisi (HBHS)  
<!--
![Şekil 13: Hesap Bilgisi Müşteri Rızasının Geri Alınması](./images/HesapBilgisiMusteriRizasininGeriAlinmasi.png)  
-->


## 9.5 ADIM 3: Hesap Bilgilerinin Alınması  
<br>   

<!-- ![Şekil 14: Hesap Bilgilerinin Alınması](./images/HesapBilgilerininAlinmasi.png)   -->

<img src="./images/HesapBilgilerininAlinmasi.png" width="80%" >  

**Şekil 14: Hesap Bilgilerinin Alınması**   

İSTEK:  
Müşteri rızası tesis edilmiş kullanıcı için HBHS API erişim adresinden HHS’ye erişilebilir hesap bilgilerini GET isteği ile sorgular: 

- Parametrede yer alan değerlerin doğru gönderildiği kontrol edilir. Hatalı gönderilmesi durumunda HHS tarafından **”TR.OHVPS.Resource.InvalidFormat”** hatası dönülür. Parametrede yer alan değerler gönderilmediği durumda parametredeki varsayılan değerler ile hesap bilgileri dönülür. Varsayılan değerler Tablo 14'de belirtilmiştir.
- Erişim belirteci kontrolü yapılır. Geçerli bir erişim belirteci yok ise HHS tarafından **”TR.OHVPS.Connection.InvalidToken”** hatası dönülür.
- /hesaplar/{hspRef} ile yapılan istekte; 
  - İstek başlığında yer alan X-Access-Token ile ilişkili rızada, izin verilen hspRef'ler için, hesap bilgisi sorgulanan hspRefe ait rıza ile aynı olup olmadığı kontrol edilir. Farklı olması durumunda **"TR.OHVPS.Resource.NotFound"** hatası dönülür.
  - İlgili hspRef bulunamaz **”TR.OHVPS.Resource.NotFound”** hatası dönülür.
- Rıza durumu kontrol edilir. 
  - RizaDurumu B: Yetki Bekleniyor ya da Y: Yetkilendirildi ise **“TR.OHVPS.Resource.ConsentMismatch”** hatası dönülür. 
  - YÖS'ün; Rıza İptal - I ya da Yetki Sonlandırıldı - S rıza durumlarında hesap bilgileri servisini çağırmaması beklenir. Bu rıza durumları ile yapılmış çağrılar olduğunda HHS tarafından **”TR.OHVPS.Resource.ConsentRevoked”** hatası dönülür.
  - RizaDurumu “Yetki Kullanıldı” ise kontrollere devam edilir.
- HHS tarafından ÖHK’nın “01: Temel Hesap Bilgisi” izin türüne sahipliği kontrol edilir. 01 izin türüne sahip değil ise **”TR.OHVPS.Business.PermissionTypeNotSupported”** hatası dönülür.

Yukarıdaki kontroller tamamlandıktan sonra HHS, "HesapBilgileri" nesnesini oluşturur ve HBHS’ye döner.
- Hesap bilgisi rızası alınmış ve erişim izni devam eden hesaplar içerisinden herhangi bir hesabın kapatılması ya da pasife alınması durumunda YÖS tarafından yapılan hesap isteğine HHS tarafından hesap bilgisi dönülmelidir.
Kapalı hesap için TR.OHVPS.DataCode.HspDrm veri türünden KAPALI değeri ile, pasif hesap için TR.OHVPS.DataCode.HspDrm veri türünden PASIF değeri ile dönülmelidir. 


## 9.6 ADIM 3.1 ve 3.2: Hesap Bilgilerinin Sorgulanması

**GET /hesaplar ve GET /hesaplar/{hspRef}**

Bu erişim noktalarından tüm hesapların veya belirli bir hesabın bilgileri sorgulanır. Hesap bilgisi için daha önce tanımlanmış izin türüne göre (Temel Hesap Bilgisi veya Detaylı Hesap Bilgisi) yanıtında dönülen HesapBilgileri nesnesinin içeriği değişir. Tablo 15’te HesapBilgileri nesnesinin içeriği verilmiştir.  


Hesap Bilgisi Sorgu Örneği (Tüm Hesaplar) =  /hesaplar  
Hesap Bilgisi Sorgu Örneği (Belirli Bir Hesap) =  /hesaplar/{hspRef}  
İşlem Sorgu Örneği (Belirli Bir Hesap) =  /hesaplar?
syfKytSayi=25&
syfNo=1&
srlmKrtr= hspRef &
srlmYon=A  

 
**Tablo 14: Hesap Bilgileri Sorgulama İsteği Sorgu Parametreleri**
|Alan Adı |Parametre Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|HHS tarafından yapılması gereken kontrol ve işlemler|
| --- | --- | --- | --- | --- | --- |
| Sayfa Başına İstenen Kayıt Sayısı | syfKytSayi | N3 | İ | Sayfa başına istenen kayıt sayısı. Bu alanda iletilen değer 100’den büyük olamaz.  | Bu veri gönderildiği durumda, HHS listesini bu sayı kadar gruplandırarak gönderir. Bu veri gönderilmediğinde sayfadaki kayıt sayısı 100 olarak kullanılır. |
| İstenen Sayfa Numarası | syfNo | N3 | İ | Cevapta dönecek sayfa numarası 1’den başlayarak artan değerlerle iletilmelidir. | Bu veri gönderildiği durumda, HHS işlemler listesini bu sayfadaki kayıtları gönderir. Gönderilmediğinde, HHS ilk sayfadaki kayıtları gönderir.  |
| Sıralama Kriteri | srlmKrtr | AN3..50 | İ | Cevapta dönülecek kayıtların sıralama kriterini belirtir. Alabileceği değerler: { “hspRef”} | Bu veri gönderildiği durumda, HHS listesini bu kritere göre sıralayarak gönderir. Gönderilmediğinde, HHS sıralama kriterini hspRef olarak belirler. |
| Sıralama Yönü | srlmYon | AN1 | İ | Cevapta dönülecek işlemlerin sıralama yönünü belirtir. Alabileceği değerler:  A: Azalan değerle sıralama Y: Artan değerle sıralama {“A”,”Y”} | Bu veri gönderildiği durumda, HHS listesini bu yöne göre sıralayarak gönderir. Gönderilmediğinde, HHS sıralama yönünü Azalan olarak belirler. |


**Tablo 15: “HesapBilgileri” nesnesi**  
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | 
| Rıza No | rizaNo | AN1..128 | Z | HesapBilgisiRızası nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı | 
| Hesap Temel | hspTml | Kompleks: HesapTemel | Z | Temel Hesap Bilgileri (Temel Hesap Bilgisi varsayılan izin türü olduğundan Hesap Temel nesnesi zorunlu olarak yanıtta bulunur) | 
| > Hesap Referansı  | hspRef | AN5..40 | Z | HHS tarafından hesap için atanan biricik tanımlıyıcıdır (uuid). YÖS bazında farklılaşması gerekmez. Bir hesap (IBAN) tek bir hspRef'e karşılık gelmelidir, benzer şekilde bir hspRef tek bir IBAN'a karşılık gelmelidir. Aynı hesap için alınan tüm rızalarda hesap referans bilgisinin değişmemesi gerekmektedir.| 
| > Hesap Numarası | hspNo | AN26 | K | Eğer varsa ödeme hesabına ait IBAN bilgisi | 
| > Hesap Sahibi Ünvanı | hspShb | AN3..140 | Z | Hesap sahibi ya da hesap sahiplerinin ad-soyadı, ticari ünvanı | 
| > Şube Adı | subeAdi | AN3..50 | K | Eğer varsa ödeme hesabının bağlı olduğu şubenin adı | 
| > Kısa Ad | kisaAd | AN3..50 | K | Eğer hesap sahibi hesaba ait bir ad tanımladıysa, tanımlanan hesap adı | 
| > Para Birimi | prBrm | AN3 | Z | Para Birimi. | 
| > Hesap Türü | hspTur | AN1 | Z | Hesabın türü (bireysel veya ticari). TR.OHVPS.DataCode.HspTur sırali veri değerlerinden birini alır. | 
| > Hesap Tipi | hspTip | AN1..32 | Z | Hesabın tipi (VADESİZ, KREDİLİ vb.).TR.OHVPS.DataCode.HspTip sıralı veri değerlerinden birini alır. | 
| >Hesap Ürün Adı | hspUrunAdi | AN1..140 | İ | HHS tarafından atanmış olan ürün adı bilgisidir. HBHS tarafından ÖHK’ya gösterilmesi kullanım kolaylığı sağlayacaktır. | 
| > Hesap Durumu | hspDrm | AN5..50 | Z | Hesabın durumunu belirtir. TR.OHVPS.DataCode.HspDrm sıralı veri türlerinden birini alır.  | 
| Hesap Detay |hspDty | Kompleks: HesapDetay | K | Detay Hesap Bilgileri (Temel Hesap Bilgisine ek olarak Detay Hesap Bilgisi izin türü de seçilmişse Hesap Detay nesnesi koşullu olarak yanıtta bulunur) | 
|> Açılış Tarihi| hspAclsTrh |	ISODateTime	| Z	| Belirtilen hesabın açılış tarihi.|  

## 9.7 ADIM 3.3 ve 3.4: Hesap Bakiyesinin Sorgulanması  

**GET /bakiye ve GET /hesaplar/{hspRef}/bakiye**  
Bu erişim noktalarından tüm hesapların veya belirli bir hesabın bakiyesi sorgulanır.   İstek çağrısına dönülen “BakiyeBilgileri” nesnesi Tablo 17’de verilmiştir. 

- Erişim belirteci kontrolü yapılır. Geçerli bir erişim belirteci yok ise HHS tarafından **”TR.OHVPS.Connection.InvalidToken”** hatası dönülür.
- /hesaplar/{hspRef}/bakiye ile yapılan istekte; 
  - İstek başlığında yer alan X-Access-Token ile ilişkili rızada, izin verilen hspRef'ler için, bakiye sorgusundaki hspRefe ait rıza ile aynı olup olmadığı kontrol edilir. Farklı olması durumunda **"TR.OHVPS.Resource.NotFound"** hatası dönülür.
  - İlgili hspRef bulunamaz **”TR.OHVPS.Resource.NotFound”** hatası dönülür.
- Rıza durumu kontrol edilir. 
  - RizaDurumu B: Yetki Bekleniyor ya da Y: Yetkilendirildi ise **“TR.OHVPS.Resource.ConsentMismatch”** hatası dönülür. 
  - YÖS'ün; Rıza İptal - I ya da Yetki Sonlandırıldı - S rıza durumlarında hesap bakiye servisini çağırmaması beklenir. Bu rıza durumları ile yapılmış çağrılar olduğunda HHS tarafından **”TR.OHVPS.Resource.ConsentRevoked”** hatası dönülür.
  - RizaDurumu “Yetki Kullanıldı” ise kontrollere devam edilir.
- Hesap Bakiye Sorgulanması yapılırken HHS tarafından ÖHK’nın “03: Bakiye Bilgisi” izin türü sahipliği kontrol edilir. 03 izin türüne sahip değil ise **”TR.OHVPS.Business.PermissionTypeNotSupported”** hatası dönülür.

Yukarıdaki kontroller tamamlandıktan sonra HHS, "BakiyeBilgileri" nesnesini oluşturur ve HBHS’ye döner.
- Hesap Bilgisi Rızası alınmış ve erişim izni devam eden hesaplar içerisinde yer alan hesaplardan kapatılmış ya da pasif duruma alınmış olan hesaplar için bakiye isteği yapıldığında HHS tarafından bakiye bilgisi dönülmelidir.

Hesap bakiyelerinin gösterilmesi sırasında aşağıda verilen örnekler gözönünde bulundurulmalıdır.  

Örnek 1 : ÖHK **Hesap Bakiye Tutarı** 0 TL, **Kredili Mevduat Hesabı Bakiyesi** 3000 TL. ÖHK 1000 TL para çıkışı gerçekleştirdi. Bakiye API'si yanıtı içerisinde iletilen **Kredi Dahil Göstergesi** 0 değerini içeriyorsa, **Hesap Bakiye Tutarı** -1000 TL, **Kredili Mevduat Hesabı Bakiyesi** 3000 TL olmalıdır.


Örnek 2 : ÖHK **Hesap Bakiye Tutarı** 0 TL, **Kredili Mevduat Hesabı Bakiyesi** 3000 TL. ÖHK 1000 TL para çıkışı gerçekleştirdi. Bakiye API'si yanıtı içerisinde iletilen **Kredi Dahil Göstergesi** 1 değerini içeriyorsa, **Hesap Bakiye Tutarı** 2000 TL, **Kredili Mevduat Hesabı Bakiyesi** 3000 TL olmalıdır.

Örnek 3 : ÖHK **Hesap Bakiye Tutarı** 1000 TL, **Kredili Mevduat Hesabı Bakiyesi** 3000 TL. ÖHK 1000 TL para çıkışı gerçekleştirdi. Bakiye API'si yanıtı içerisinde iletilen **Kredi Dahil Göstergesi** 0 değerini içeriyorsa, **Hesap Bakiye Tutarı** 0 TL, **Kredili Mevduat Hesabı Bakiyesi** 3000 TL olmalıdır.

Örnek 4 : ÖHK **Hesap Bakiye Tutarı** 1000 TL, **Kredili Mevduat Hesabı Bakiyesi** 3000 TL. ÖHK 1000 TL para çıkışı gerçekleştirdi. Bakiye API'si yanıtı içerisinde iletilen **Kredi Dahil Göstergesi** 1 değerini içeriyorsa, **Hesap Bakiye Tutarı** 3000 TL, **Kredili Mevduat Hesabı Bakiyesi** 3000 TL olmalıdır.

İşlem Sorgu Örneği (Belirli Bir Hesap)=  /bakiye?
syfKytSayi=25&
syfNo=1&
srlmKrtr= hspRef &
srlmYon=A  

**Tablo 16: “BakiyeBilgileri” Sorgulama İsteği Sorgu Parametreleri**  

|Alan Adı |Parametre Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|HHS tarafından yapılması gereken kontrol ve işlemler|
| --- | --- | --- | --- | --- | --- |
| Sayfa Başına İstenen Kayıt Sayısı | syfKytSayi | N3 | İ | Sayfa başına istenen kayıt sayısı. Bu alanda iletilen değer 100’den büyük olamaz.  | Bu veri gönderildiği durumda, HHS listesini bu sayı kadar gruplandırarak gönderir. Bu veri gönderilmediğinde sayfadaki kayıt sayısı 100 olarak kullanılır. |
| İstenen Sayfa Numarasi | syfNo | N3 | İ | Cevapta dönecek sayfa numarası 1’den başlayarak artan değerlerle iletilmelidir. | Bu veri gönderildiği durumda, HHS işlemler listesini bu sayfadaki kayıtları gönderir. Gönderilmediğinde, HHS ilk sayfadaki kayıtları gönderir.  |
| Sıralama Kriteri | srlmKrtr | AN3..50 | İ | Cevapta dönülecek kayıtların sıralama kriterini belirtir. Alabileceği değerler: { “hspRef”} | Bu veri gönderildiği durumda, HHS listesini bu kritere göre sıralayarak gönderir. Gönderilmediğinde, HHS sıralama kriterini hspRef olarak belirler. |
| Sıralama Yönü | srlmYon | AN1 | İ | Cevapta dönülecek işlemlerin sıralama yönünü belirtir. Alabileceği değerler:  A: Azalan değerle sıralama Y: Artan değerle sıralama {“A”,”Y”} | Bu veri gönderildiği durumda, HHS listesini bu yöne göre sıralayarak gönderir. Gönderilmediğinde, HHS sıralama yönünü Azalan olarak belirler. |

**Tablo 17: “BakiyeBilgileri” nesnesi**  
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | 
|Hesap Referansı|	hspRef|	AN5..40	|Z|	HHS tarafından hesap için atanan biricik tanımlıyıcıdır (uuid). YÖS bazında farklılaşması gerekmez. Bir hesap (IBAN) tek bir hspRef'e karşılık gelmelidir, benzer şekilde bir hspRef tek bir IBAN'a karşılık gelmelidir. Aynı hesap için alınan tüm rızalarda hesap referans bilgisinin değişmemesi gerekmektedir.|
| Bakiye|	bky	|Kompleks:Bakiye|	Z	||
|> Hesap Bakiye Tutarı	|bkyTtr	| AN1..25 |	Z	|Hesabın bakiyesi. Bloke tutar düşülmeden iletilmelidir. <br> Tutar alanı regex patterni şu şekildedir:  '^-?\d{1,18}$\|^-?\d{1,18}\\.\d{1,5}$'  |
|> Blokeli Tutar	|blkTtr	| AN1..24 |	K	|Varsa hesapta blokeli tutar bilgisi.   <br> Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$' |
|> Para Birimi|	prBrm|	AN3	|Z|	Para birimi. |
|> Bakiye İletilme Zamanı	|bkyZmn|	ISODateTime	|Z|	Bakiyenin iletildiği zaman bilgisi.|
|> KrediliHesap|	krdHsp|	Kompleks: KrediliHesap|	K	||
|>> Kredili Mevduat Hesabı Bakiyesi	|kulKrdTtr	|AN1..24|	Z	|Kredili mevduat tutarı. Kredili bir hesap ise zorunlu. <br> Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$'|
|>> Kredi Dahil Göstergesi|	krdDhlGstr	|AN1|	Z	|Kredili bir hesap ise zorunlu. Bakiye tutarının kredi tutarı dahil edilerek ya da edilmeden iletildiğini gösterir. <br> 0: Kredi tutarı dahil edilmeden bakiye bilgisi iletilmesi durumu <br> 1: Kredi tutarı dahil edilerek bakiye bilgisi iletilmesi durumu|  

## 9.8 ADIM 3.5 ve 3.6: İşlemlerin Sorgulanması  

**GET /hesaplar/{hspRef}/islemler**  

Servis başarılı yanıtında Tablo 19’da belirtilen "IslemBilgileri" nesnesini dönmektedir.

- Belirli bir hesaba ilişkin işlem bilgileri Tablo 18’deki istek parametrelerine göre sorgulanır. Parametrede yer alan değerlerin doğru gönderildiği kontrol edilir. Hatalı gönderilmesi durumunda **”TR.OHVPS.Resource.InvalidFormat”** hatası dönülür.
- Erişim belirteci kontrolü yapılır. Geçerli bir erişim belirteci yok ise HHS tarafından **”TR.OHVPS.Connection.InvalidToken”** hatası dönülür.
- İstek başlığında yer alan X-Access-Token ile ilişkili rızada, izin verilen hspRef'ler için, işlemler sorgusundaki hspRefe ait rıza ile aynı olup olmadığı kontrol edilir. Farklı olması durumunda **"TR.OHVPS.Resource.NotFound"** hatası dönülür.
- İlgili hspRef bulunamaz **”TR.OHVPS.Resource.NotFound”** hatası dönülür.
- Rıza durumu kontrol edilir. 
  - RizaDurumu B: Yetki Bekleniyor ya da Y: Yetkilendirildi ise **“TR.OHVPS.Resource.ConsentMismatch”** hatası dönülür. 
  - YÖS'ün; Rıza İptal - I ya da Yetki Sonlandırıldı - S rıza durumlarında işlemler servisini çağırmaması beklenir. Bu rıza durumları ile yapılmış çağrılar olduğunda HHS tarafından **”TR.OHVPS.Resource.ConsentRevoked”** hatası dönülür.
  - RizaDurumu “Yetki Kullanıldı” ise kontrollere devam edilir.
- HHS tarafından ÖHK’nın “04: Temel İşlem (Hesap Hareketleri) Bilgisi” veya "05: Ayrıntılı İşlem Bilgisi" izin türüne sahipliği kontrol edilir. 04 veya 05 izin türüne sahip değil ise **”TR.OHVPS.Business.PermissionTypeNotSupported”**  hatası dönülür.

Hesap Bilgisi Rızası alınmış ve erişim izni devam eden hesaplar içerisinde yer alan hesaplardan kapatılmış ya da pasif duruma alınmış olan hesaplar için işlemler isteği yapıldığında HHS tarafından işlemler bilgisi dönülmelidir.   
İşlem bilgisi için daha önce tanımlanmış izin türüne göre yanıtta dönen IslemBilgileri nesnesinin (Temel İşlem Bilgisi veya Temel İşlem Bilgisi ve Detaylı İşlem Bilgisi) içeriği değişir.   
İşlemler servisi hem ÖHK’nın talebi ile YÖS uygulaması üzerinden çağrılabileceği gibi, YÖS’ün ÖHK’sız başlatabileceği otomatik çağrıları ile de yanıt dönebilmektedir.   
HHS, işlemin sistemsel yapılıp yapılmadığını, istek parametreleri içerisinde yer alan PSU-Initiated parametresi ile anlar. Bu parametre “E” ise ÖHK’lı, “H” ise sistemsel yapılmış bir sorgu anlamına gelmektedir. 
ÖHK’nın başlattığı sorgular için HHS tarafından belirlenen üst rate limitler dahilinde çağrım yapılabilir.  
YÖS, otomatik yapacağı sorgularda;  
- Bireysel ÖHK’lar için hesap bazında günde en fazla 4 adet başarı ile sonuçlanan sorgulama yapabilir. 4 adetten fazla yapılması durumunda **”TR.OHVPS.Connection.ExceededRate”** hatası dönülür.
- Kurumsal ÖHK’lar için hesap bazında saatte en fazla 12 adet başarı ile sonuçlanan sorgulama yapabilir. 12 adetten fazla yapılması durumunda **”TR.OHVPS.Connection.ExceededRate”** hatası dönülür.

HHS, tutacağı sayaç bilgisi ile bu sayıları kontrol ederek daha fazla sorgulama yapılmasına izin vermeyebilir. 

Aynı istek parametreleri ile yapılan sorgu sonucunda dönecek toplam kayıt sayısı 100’ü aştığında, sayfalama yöntemi ile HHS’nin cevap dönmesi beklenmektedir.  Her bir sayfa için işlemler servisi tekrar çağrılsa da, bu çağrım HHS’nin tuttuğu sayaç değerini arttırmaz. HHS’nin tutacağı sayaçın kontrol parametreleri YÖS kodu, hesap numarası ya da referansı olmalıdır. Sayfa no parametresi varsa ve 1'den büyük ise işlem sayacını arttırmamalıdır.

ÖHK’nın YÖS uygulaması üzerinden tetiklediği işlemlerde ise;
bireysel ÖHK’lar  için en fazla 1 aylık,
kurumsal ÖHK’lar için ise en fazla 1 haftalık bir pencere aralığında sorgulama yapılabilir. Belirtilen tarih aralığından farklı değer ile sorgulama yapıldığında **”TR.OHVPS.Business.InvalidStartEndTime”** hatası dönülür.

YÖS, otomatik yapacağı sorgularda hem bireysel hem de kurumsal ÖHK’lar için 24 saatlik bir pencere aralığında sorgulama yapabilir. Belirtilen tarih aralığından farklı değer ile sorgulama yapıldığında **”TR.OHVPS.Business.InvalidStartEndTime”** hatası dönülür. 

Yeni günün başlangıç saatinin 00:00:00 olduğu kabul edilmiştir. 

**Sorgu örnekleri aşağıdaki gibidir: <br>**

**1 günlük İşlem Sorgu Örneği (Belirli Bir Hesap)**=  /hesaplar/{hspRef}/islemler?
hesapIslemBslTrh=2020-06-01T00:00:00+03:00&
hesapIslemBtsTrh=2020-06-02T00:00:00+03:00&
minIslTtr=0&
mksIslTtr=100000&
brcAlc=A&
syfKytSayi=25&
syfNo=1&
srlmKrtr= islGrckZaman &
srlmYon=A
<br>
<br>
**1 haftalık İşlem Sorgu Örneği (Belirli Bir Hesap)**=  /hesaplar/{hspRef}/islemler?
hesapIslemBslTrh=2020-06-01T00:00:00+03:00&
hesapIslemBtsTrh=2020-06-08T00:00:00+03:00&
minIslTtr=0&
mksIslTtr=100000&
brcAlc=A&
syfKytSayi=25&
syfNo=1&
srlmKrtr= islGrckZaman &
srlmYon=A
<br>
<br>
**1 Aylık İşlem Sorgu Örneği (Belirli Bir Hesap)**=  /hesaplar/{hspRef}/islemler?
hesapIslemBslTrh=2020-02-01T00:00:00+03:00&
hesapIslemBtsTrh=2020-03-01T00:00:00+03:00&
minIslTtr=0&
mksIslTtr=100000&
brcAlc=A&
syfKytSayi=25&
syfNo=1&
srlmKrtr= islGrckZaman &
srlmYon=A
<br><br>
**1 Aylık İşlem Sorgu Örneği (Belirli Bir Hesap)**=  /hesaplar/{hspRef}/islemler?
hesapIslemBslTrh=2020-01-31T00:00:00+03:00&
hesapIslemBtsTrh=2020-02-28T00:00:00+03:00&
minIslTtr=0&
mksIslTtr=100000&
brcAlc=A&
syfKytSayi=25&
syfNo=1&
srlmKrtr= islGrckZaman &
srlmYon=A
<br><br>
**1 Aylık İşlem Sorgu Örneği (Belirli Bir Hesap)**=  /hesaplar/{hspRef}/islemler?
hesapIslemBslTrh=2020-02-28T00:00:00+03:00&
hesapIslemBtsTrh=2020-03-28T00:00:00+03:00&
minIslTtr=0&
mksIslTtr=100000&
brcAlc=A&
syfKytSayi=25&
syfNo=1&
srlmKrtr= islGrckZaman &
srlmYon=A
<br><br>
**24 saatlik pencerede yapacağı sistemsel sorgu örneği (Son sorgusunun üzerine 24 saat eklenmesi)** = 
/hesaplar/{hspRef}/islemler?
hesapIslemBslTrh=2020-06-01T14:10:08+03:00&
hesapIslemBtsTrh=2020-06-02T14:10:08+03:00&
minIslTtr=0&
mksIslTtr=100000&
brcAlc=A&
syfKytSayi=25&
syfNo=1&
srlmKrtr= islGrckZaman &
srlmYon=A
<br><br>
**Önyüzden alınan sorgu parametreleri ile oluşturulan sorgu örneği (Örnek sorgu tarih aralığı 20.02.2023- 25.02.2023 arasındadır)** = 
/hesaplar/{hspRef}/islemler?
hesapIslemBslTrh=2023-02-20T00:00:00+03:00&
hesapIslemBtsTrh=2023-02-26T00:00:00+03:00&
minIslTtr=0&
mksIslTtr=100000&
brcAlc=A&
syfKytSayi=25&
syfNo=1&
srlmKrtr= islGrckZaman &
srlmYon=A
<br><br>
**Tablo 18: İşlem Listesi Sorgulama İsteği Sorgu Parametreleri**  

|Alan Adı |Parametre Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|HHS tarafından yapılması gereken kontrol ve işlemler|
| --- | --- | --- | --- | --- | --- |
|İşlem Sorgulama Başlangıç Zamanı	|hesapIslemBslTrh	|ISODateTime|	Z	|Sorgulanacak işlemlerin başlangıç tarihi.|	HHS işlemler listesi dönüşünü bu kritere göre filtreleyerek iletmek zorundadır.<br><br>ÖHK tarafından tetiklenen sorgularda;hesapIslemBslTrh ve hesapIslemBtsTrh arası fark bireysel ÖHK’lar için en fazla 1 ay,kurumsal ÖHK’lar için ise en fazla 1 hafta olabilir.<br><br>YÖS tarafından sistemsel yapılan sorgulamalarda hem bireysel, hem de kurumsal ÖHK’lar için;son 24 saat sorgulanabilir. Bu yüzden hesapIslemBtsTrh-24 saat’ten daha uzun bir aralık sorgulanamaz olmalıdır.<br><br>İstek başlığında yer alan PSU-Initiated alanı “E” ise ÖHK’lı, “H” ise sistemsel yapılmış bir sorgu anlamına gelmektedir.|
|İşlem Sorgulama Bitiş Zamanı|	hesapIslemBtsTrh	|ISODateTime|	Z	|Sorgulanacak işlemlerin bitiş tarihi.|	HHS işlemler listesi dönüşünü bu kritere göre filtreleyerek iletmek zorundadır.<br>YÖS tarafından sistemsel yapılan sorgulamalarda hem bireysel, hem de kurumsal ÖHK’lar için;İleri vadeli işlem emirleri dahil olmadığı için (Sürüm 1.0.2 kapsamında); İşlem Sorgulama Bitiş Zamanı, her zaman, sorgulama zaman damgasını iletecek şekilde (datetime (now)) iletilebilir. |
|En Düşük İşlem Tutarı|	minIslTtr	|AN1..24	|İ	|Sorgulanacak işlemlerin alabileceği en düşük işlem tutarı. <br>  <br> Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$' |	Bu veri gönderildiği durumda HHS işlemler listesi dönüşünü bu kritere göre filtreleyerek iletmek zorundadır.|
|En Yüksek İşlem Tutarı	|mksIslTtr|	AN1..24|	İ|	Sorgulanacak işlemlerin alabileceği en yüksek işlem tutarı.  <br> Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$'  |	Bu veri gönderildiği durumda HHS işlemler listesi dönüşünü bu kritere göre filtreleyerek iletmek zorundadır.|
|Borç Alacak Göstergesi	|brcAlc	|AN1|	İ|	TR.OHVPS.DataCode.BrcAlc sıralı veri tipi değerlerinden birini alır. Sorgulanacak işlemlerin borç / alacak kriteri B: Hesaba borç yaratan işlem.A: Hesaba alacak yaratan işlem.{“B”,”A”}	|Bu veri gönderildiği durumda HHS işlemler listesi dönüşünü bu kritere göre filtreleyerek iletmek zorundadır.|
|Sayfa Başına İstenen Kayıt Sayısı|	syfKytSayi|	N3|	İ	|Sayfa başına istenen kayıt sayısı. Bu alanda iletilen değer 100’den büyük olamaz. |Bu veri gönderildiği durumda, HHS işlemler listesini bu sayı kadar gruplandırarak gönderir. Bu veri gönderilmediğinde sayfadaki kayıt sayısı 100 olarak kullanılır. |
|İstenen Sayfa Numarasi|	syfNo|	N3|	İ	|Cevapta dönecek sayfa numarası 1’den başlayarak artan değerlerle iletilmelidir.|	Bu veri gönderildiği durumda, HHS işlemler listesini bu sayfadaki kayıtları gönderir. Gönderilmediğinde, HHS ilk sayfadaki kayıtları gönderir. |
|Sıralama Kriteri	|srlmKrtr	|AN3..50|	İ	|Cevapta dönülecek işlemlerin sıralama kriterini belirtir. Alabileceği değerler: {“islGrckZaman”}	|Bu veri gönderildiği durumda, HHS işlemler listesini bu kritere göre sıralayarak gönderir. Gönderilmediğinde, HHS sıralama kriterini islGrckZaman olarak belirler.|
|Sıralama Yönü	|srlmYon|	AN1|	İ	|Cevapta dönülecek işlemlerin sıralama yönünü belirtir. Alabileceği değerler: A: Azalan değerle sıralama Y: Artan değerle sıralama {“A”,”Y”}|	Bu veri gönderildiği durumda, HHS işlemler listesini bu yöne göre sıralayarak gönderir. Gönderilmediğinde, HHS sıralama yönünü Azalan olarak belirler.|  

**Tablo 19: “IslemBilgileri” nesnesi**

|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | 
 |Hesap Referans Numarası	|hspRef	|AN5..40|	Z	|HHS tarafından hesap için atanan biricik tanımlıyıcıdır (uuid). YÖS bazında farklılaşması gerekmez. Bir hesap (IBAN) tek bir hspRef'e karşılık gelmelidir, benzer şekilde bir hspRef tek bir IBAN'a karşılık gelmelidir. Aynı hesap için alınan tüm rızalarda hesap referans bilgisinin değişmemesi gerekmektedir.|
 |Islemler	|isller	|Kompleks:Islem[Array]|	K	|Hesaba ilişkin hareketler varsa İşlemler nesnesi dizisi olarak dönülür. İşlemler nesnesi Temel İşlem Bilgileri ve Detay İşlem Bilgileri nesnesinden meydana gelir. İzin türü varsayılan olarak Temel İşlem Bilgilerini içerir. Detay İşlem Bilgileri izin türü de seçildi ise Temel İşlem Bilgilerine ek olarak Detay İşlem Bilgileri de gönderilir.|
|> Temel İşlem Bilgileri|	islTml	|Kompleks:IslemTemel|	Z	|Temel İşlem Bilgileri varsayılan olarak dönülür. |
|>> İşlem Numarası	|islNo|	AN3..50|	Z|	Hesap hareketinin oluşturulması sırasında atanan ve borç (veya alacak) hareketini tekilleştiren HHS bazında tekil tanımlayıcıdır. Bu değer tek başına tekil olabileceği gibi birden fazla değerin bir araya getirilmesiyle de tekilliği sağlanmış olabilir. Bu değerin en azından hesap numarası (hesNo) bazında tekil olması beklenir. Genellikle kullanılan örnekleri; Instance_Id, Transaction_Id, Transaction_Num, Transaction_TimeStamp,dekont numarası|
|>> İşlem Referans Numarası	|refNo|	AN3..50	|Z|	İşlemi uçtan uca tanımlayan tekil tanımlayıcıdır. Borç ve alacak hareketinden oluşan bir veya birden fazla işlemler bütünü için atanmış olan ve bu bütünü tekilleştiren (bir biri ile ilişkisini tutan) değerdir.Bu değer hem YÖS’ten gelen değer olabilir (ödeme işlemlerinde kullanılan kkodRef ya da refBlg alanı) hem de HHS içinde takip edilmek için üretilmiş bir değer olabilir. HHS sisteminde 2 değerin de bulunması durumunda;refNo alanını doldurmak için, HHS’nin YÖS’ten gelen değere öncelik vermesi beklenmektedir. YÖS’ten gelen veri örneği: Sipariş Numarası, Fatura Numarası, Karekod Referansı vb. HHS’te üretilen veri örneği: Masraflı havale işleminde hem havale işleminin hem de masraf işleminin aynı referans numarasına sahip olması da örnek olarak gösterilebilir.|
|>> İşlem Tutarı |	islTtr|	AN1..24|	Z	|İşlem tutarı.  <br> Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$'|
|>> Güncel Bakiye Tutarı |	gnclBky|	AN1..25|	Z	|İşlem sonrası güncel bakiye bilgisi tutarı.  <br> Tutar alanı regex patterni şu şekildedir: '```^[\-\+]?\d{1,18}$|^[\-\+]?\d{1,18}\.\d{1,5}$```'|
|>> Para Birimi	|prBrm|	AN3|	Z|	Para birimi.|
|>> İşlem Gerçekleşme Zamanı|	islGrckZaman|	ISODateTime|	Z|	İşlemin gerçekleşme zamanı.|
|>> İşlem Kanalı|	kanal|	AN1|	Z	|TR.OHVPS.DataCode.OdemeKaynak sıralı veri türü değerlerinden birini alır.|
|>> Borçlandırma Alacaklandırma Göstergesi|	brcAlc|	AN1|	Z|	TR.OHVPS.DataCode.BrcAlc sıralı veri türü değerlerinden birini alır. İşlemin hesabı borç ya da alacaklandırdığı bilgisidir. |
|>> İşlem Türü	|islTur	|AN3..50|	Z|	HHS’nin işleme ait ilişkilendirdiği işlem türü değeri. TR.OHVPS.DataCode.IslemTuru sıralı veri türü değerlerinden birini alır.|
|>> İşlem Amacı	|islAmc	|AN2|	Z	|TR.OHVPS.DataCode.IslemAmaci sırali veri değerlerinden birini alır.<br><br>Karekod akışında, FAST Karekod Veri Organizasyonundaki 62-08: alanında tanımlı Ödeme Amacı verisi kullanılır.|
|>> Ödeme Sistemi No	|odmStmNo	|AN10..50 |	K|	Ödeme başarılı başlatıldıysa, ödemenin başlatıldığı sistemdeki referans numarası. Gerektiğinde ilgili ödeme sisteminde/HHS’de söz konusu ödemeye karşılık gelen mesajla bağlantı kurmada kullanılır. <br> Ödeme Hizmeti kullanıcısına işlemin takibi için gösterilebilir. <br>İşlemin yönlendirildiği ödeme sistemi FAST ya da PÖS ise sistemdeki ilgili mesajın Tarih, GönderenKatilimKodu ve SorguNumarasi değerlerinin birleşiminden oluşur. Bu 3 alan mevcutta kullanıldığı formatta aralarına dikey çizgi (Unicode U+2223) işareti koyularak, birleştirmeli ve iletilmelidir. Örn : Tarih\|GönderenKatilimKodu\|SorguNumarasi  <br>Ödeme Havale/Virman işlemi ise HHS’nin üretmiş olduğu havale/virman numarasını içerir. Buradaki format da Tarih\|GönderenKatilimKodu\|Havale-virman numarası şeklinde olmalıdır.<br>Havale/FAST/PÖS  ödeme yöntemleri için tarih alanı yyyy-aa-gg formatında 10 karakter olarak iletilmelidir.|
|> Detay İşlem Bilgileri|	islDty|	Kompleks: IslemDetay|	K	|Detay İşlem Bilgileri dizi olarak gönderilmelidir. |
|>> İşlem Açıklaması|	islAcklm|	AN1..200|	Z|	HHS tarafından atanan işlem açıklaması. HHS kendi işlem hareketlerine yansıttığı açıklamayı buraya yansıtmalıdır.  HHS'ler tüm hesap hareketlerini YÖS'ler ile paylaşmakla yükümlü olup, hassas veri içeren(örn: faiz, komisyon bilgisi içeren vb.) işlem hareketleri de bu kapsamda değerlendirilerek işlem açıklamasının maskeli olarak iletilmesi sağlanır. Kelimelerin ilk 3 hanesi maskeli olacak şekilde, ancak sakıncalı bulunan kelimeler varsa; (örn: faiz, komiyon vb.) kelimelerin tamamı maskeli olacak şekilde gösterilebilir.|
|>> Karşı Taraf	|krsTrf	|Kompleks:  KarsiTaraf	|K|	Kullanımı işlem bazında değişmektedir. Örnek: FAST işleminde karşı taraf alıcının bilgileridir. Vergi ödemesinde kurum IBAN bilgisi müşteriye gösterilemeyebileceğinden bu alanın boş gelmesi HHS insiyatifindedir.|
|>>> Karşı Maskeli IBAN	|krsMskIBAN	|AN26	|K	|İlgili hesap hareketinin karşı tarafının maskeli IBAN bilgisi.|
|>>> Karşı Ünvan|	krsUnvan	|AN3..140|	K	|İlgili hesap hareketinin karşı tarafının ad-soyad ya da ticari ünvan bilgisi. Ünvan bilgisi maskelenmeden iletilmelidir.|
|>>> Karşı Taraf Kimlik Bilgisi|	krsKimlikVrs	|AN1..11|	İ	|HHS sorumluluğunda YÖS ile paylaşılan Karşı Taraf Kimlik Bilgisi(Kimlik/Kurum Kimlik - TCKN/VKN)|

## 9.9 ADIM 4: Kart Bilgilerinin Sorgulanması 

<img src="./images/KartBilgilerininAlinmasiv2.png" width="80%" >   

**GET /kartlar ve GET /kartlar/{kartRef}**

Bu erişim noktalarından tüm kartların veya belirli bir kartın bilgileri sorgulanır ve kart listesi elde edilir. İlgili sorgu için 07 izin türünün verilmesi yeterlidir. HHS ekranlarında kart seçimi yapılırken sadece aktif/açık statüde olan kartlar listelenecek ve ÖHK'ya seçtirilecektir. Kartın ilgili kanalda listelenme yetkisi bulunmuyorsa ÖHVPS kapsamında listelenmeyebilir. Listelendiği durumda; asıl kart sahibi ile sanal/ek kart sahiplerinin aynı kişi olduğu düşünüldüğünde HHS ekranlarında kart seçimi yapılarak rıza verilirken asıl kart seçilmeden ilgili asıl karta bağlı sanal ve ek kartların ayrıca seçilerek rıza verilmesine izin verilmemelidir. HHS mevcut kanallarında ek ve sanal kart hareketlerini asıl karttan ayırt etmeden müşterisine gösteriyor ise asıl kart seçimi ile birlikte asıl karta bağlı sanal ve/veya ek kart seçimini zorunlu kılmalıdır. Asıl kart hamili dışında bir kişi için ek kart çıkartıldığı durumda ek kart sahibi HHS'de asıl kartı görmeyecek olduğundan sadece kendisine çıkartılan ek kartı listelenecek ve seçerek rıza vermesi sağlanacaktır. Ek kart hamilinin asıl kart hamilinden farklı olduğu durumda asıl karta ait bir ırza olmasa da ek karta rıza verilebilir. 

Her durumda onay ekranında rıza verilen tüm kartların listesini ÖHK'ya göstermesi zorunludur.

YÖS tarafından başlatılan rıza isteklerinde hesap ve kart izin türlerinin seçili olması durumunda HHS ekranlarında hem hesapların hem de kartların listelenmesi sağlanacaktır. Ancak hesap ya da kart bilgilerinden en az birinin seçilmesi yeterlidir. Hem hesap hem kart bilgisi için seçim yapılması zorunluluğu bulunmamaktadır.

- Parametrede yer alan değerlerin doğru gönderildiği kontrol edilir. Hatalı gönderilmesi durumunda HHS tarafından **”TR.OHVPS.Resource.InvalidFormat”** hatası dönülür. Parametrede yer alan değerler gönderilmediği durumda parametredeki varsayılan değerler ile kart bilgileri dönülür. Varsayılan değerler Tablo 20'de belirtilmiştir.
- Erişim belirteci kontrolü yapılır. Geçerli bir erişim belirteci yok ise HHS tarafından **”TR.OHVPS.Connection.InvalidToken”** hatası dönülür.
- Rıza durumu kontrol edilir. 
  - RizaDurumu B: Yetki Bekleniyor ya da Y: Yetkilendirildi ise **“TR.OHVPS.Resource.ConsentMismatch”** hatası dönülür. 
  - YÖS'ün; Rıza İptal - I ya da Yetki Sonlandırıldı - S rıza durumlarında kartlar servisini çağırmaması beklenir. Bu rıza durumları ile yapılmış çağrılar olduğunda HHS tarafından **”TR.OHVPS.Resource.ConsentRevoked”** hatası dönülür.
  - RizaDurumu “Yetki Kullanıldı” ise kontrollere devam edilir.
- İlgili rıza numarasının “07: Temel Kart Bilgisi” izin türüne sahipliği kontrol edilir. 07 izin türüne sahip değil ise **”TR.OHVPS.Business.PermissionTypeNotSupported”** hatası dönülür. 

Yukarıdaki kontroller tamamlandıktan sonra HHS tarafından istek başlığında yer alan X-Access-Token ile ilişkili rıza içerisindeki kart bilgileri dönülür. Kart bilgileri için KartBilgileri nesnesinin içeriği Tablo 21'de verilmiştir.

Kart Bilgisi Sorgu Örneği (Tüm Kartlar) = /kartlar?syfKytSayi=25&syfNo=1?kartTipi=K
Kart Bilgisi Sorgu Örneği (Belirli Bir Kart) = /kartlar/{kartRef}

Kapalı banka ve ön ödemeli kart tipleri YÖS'ler tarafından ÖHK'ya gösterilmeyecektir. Kapalı kredi kart tipi için borç/taksit bilgisi veya artı bakiye olması durumunda ÖHK'ya gösterilecektir. Borç ,artı limit gibi durumlar olması halinde kart detay veya hareket servisine istek atıldığında başarılı yanıt dönülmesi beklenmektedir. Kart detay veya hareket için ilgili izin türleri verilmediği durumda(kart izin türleri içerisinde sadece 07 izin türüne rıza verildiği durumda)  kart detay ve hareket sorgulaması yapılamayacağından kapalı olan kartlar YÖS tarafından hiç listelenmemelidir. 

HHS'nin rıza 
HHS'de açık/aktif statüde yer alan kartlar seçilip rıza tahsis edildikten sonra kartın statüsünün pasif olması durumunda HHS tarafından mevcut kanallarında gösterilen bilgiler kart liste, detay ve hareket sorgulamalarında dönülmelidir. HHS'de kart seçimi yapıp rıza tahsis edildikten sonra ilgili kartın gösterimi özelinde HHS'de kısıtlama getirilmesi durumları için örnekler aşağıda detaylandırılmıştır.

- Rıza içerisinde sadece kart olması durumunda ilgili rızanın 09 iptal detay kodu ile iptal edilmesi sağlanacaktır.
- Rıza içerisinde ilgili kartın dışında hesap/kart olması durumunda rıza iptal edilmeyecektir. İlgili kart haricinde kart listesinde farklı bir kart yoksa kart listesi, sorgulandığında **TR.OHVPS.Resource.RestrictedChannelAccess** hata kodu dönülecektir.



**Tablo 20: Kart Bilgileri Sorgulama İsteği Sorgu Parametreleri**
|Alan Adı |Parametre Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|HHS tarafından yapılması gereken kontrol ve işlemler|
| --- | --- | --- | --- | --- | --- |
|Sayfa Başına İstenen Kayıt Sayısı|	syfKytSayi|	N3|	İ	|Sayfa başına istenen kayıt sayısı. Bu alanda iletilen değer 100’den büyük olamaz. |Bu veri gönderildiği durumda, HHS işlemler listesini bu sayı kadar gruplandırarak gönderir. Bu veri gönderilmediğinde sayfadaki kayıt sayısı 100 olarak kullanılır. |
|İstenen Sayfa Numarasi|	syfNo|	N3|	İ	|Cevapta dönecek sayfa numarası 1’den başlayarak artan değerlerle iletilmelidir.|	Bu veri gönderildiği durumda, HHS işlemler listesini bu sayfadaki kayıtları gönderir. Gönderilmediğinde, HHS ilk sayfadaki kayıtları gönderir. |
|Kart Tipi|	kartTipi|	AN1|	İ	|Kart tipleri özelinde Banka, Kredi ve Ön Ödemeli kartların ayrıca soruglanması sağlanır. |Bu veri gönderildiği durumda, HHS kart tipine uygun olarak kart bilgilerini döner. |
**Tablo 21: “KartBilgileri” nesnesi**  
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- |
| Rıza No | rizaNo | AN1..128 | Z | HesapBilgisiRızasi nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı | 
| Kart Referans Numarası | kartRef | AN5..40 | Z | HHS tarafından her bir kart için atanan biricik değerdir (uuid). Bir kart tek bir kartRef'e karşılık gelmelidir, benzer şekilde bir kartRef tek bir karta karşılık gelmelidir. Aynı kart için alınan tüm rızalarda kart referans bilgisinin değişmemesi gerekmektedir. |
| Kart Numarası | kartNo | AN15..16 | Z | Karta ait numara maskeli olarak iletilmelidir. Maskeleme kuralı kart'ın ilk 6 ve son 4 hanesi açık olarak görünecek şekilde maskelenmelidir. Sanal kart bilgisi için de ilgili numara maskeli olarak iletilmelidir. Örn: 123456******5678 |
| Asıl Kart Numarası | asilKartNo | AN15..16 | K | Asıl kartlar için ilgili alan iletilmemelidir. Sanal ve ek kartlar için bağlı oldukları asıl kart numaraları iletilmelidir. Ek karta ait sanal kart için asıl kart numarası olarak ek kart numarası iletilmelidir. Kart numarası maskeli iletilmelidir. |
| Kart Tipi | kartTipi | AN1 | Z | Kartın tipini belirten değerdir. Kart tipleri olarak alabileceği değerler **TR.OHVPS.DataCode.KartTip** sıralı veri türlerinden biridir. |
| Alt Kart Tipi| altKartTipi | AN1| Z | Kart Tipleri altında yer alan alt kart tipleridir. Alt kart tipleri olarak alabileceği değerler **TR.OHVPS.DataCode.AltKartTip** sıralı veri türlerinden biridir.<br> Asıl banka kartı, sanal banka kartı, ek kredi kartı, asıl kredi kartı gibi tüm kart tiplerini ayrıştırmak için asıl ve alt kart tipleri kullanılmaktadır. |
|Kart Formu | kartFormu | AN1 | Z | Kartın fiziksel ve dijital olduğunu belirten değerdir. Alabileceği değerler **TR.OHVPS.DataCode.KartFormu** sıralı veri türlerinden biridir.|
| Kart Türü | kartTuru | AN1 | Z | Kartın tipinin bireysel ya da ticari olmasına yönelik olan değerdir. <br>**B:Bireysel, T:Ticari** |
| Kart Statüsü | kartStatu | AN1 | Z | **TR.OHVPS.DataCode.KartStatu** sıralı veri türü değerlerinden birini alır.<br> Kart statüsü için güncelleme yapılamayacak durumda ise iptal statüsü olarak değerlendirilmelidir. Kart statüsü güncellenebilir durumda ise açık ve pasif olarak değerlendirilmelidir. |
| Kart Sahibi Ad/Soyad | kartSahibi | AN3..140 | Z | Kart sahibi ya da kart sahiplerinin ad-soyadı. |
| Kart Ticari Unvan|kartTicariUnvan| AN3..140 | K | Kart türü ticari ise ilgili alanda ticari unvan iletilmesi zorunludur.  |
| Kart Ürün Adı | kartUrunAdi | AN3..140 | Z | Kart bilgilerinin ürün adı. Örn : TROY Business Kart |
| Ekstre Türleri | ekstreTurleri | Kompleks:EkstreTurleri | Z |İlgili karta ait ekstre türleri(TRY, USD, EUR, GBP) dizi içerisinde iletilmelidir. Yurtdışı ekstre olan kartlar için TRY haricinde de değer dönülmesi gerekmektedir. Ekstre olmadığı halde banka kartı gibi kart tiplerinde TRY olarak iletilmesi gerekmektedir. |
| Kart Rumuz | kartRumuz | AN3..140 | İ | Kart için rumuz bilgisi var ise gönderilebilir. |
| Kart Şeması | kartSema | AN1 | Z | **TR.OHVPS.DataCode.KartSema** sıralı veri türü değerlerinden birini alır. |

## 9.10 ADIM 4.1: Kart Detay Bilgilerinin Sorgulanması  

**GET /kartlar/{kartRef}/kart-detay**

KartBilgileri nesnesi ile elde edilen kart listesinde yer alan kartların detayı sorgulanır. Detay ile birlikte KartDetayBilgileri nesnesinin içeriği Tablo 23'de verilmiştir. 

- Parametrede yer alan ekstreTuru bilgisi Ekstre Türleri haricinde uygun olmayan bir değer gönderildiğinde **”TR.OHVPS.Business.InvalidCurrencyCode”** hatası dönülür. Bu alan gönderilmiyorsa TRY olarak değerlendirilmelidir.
- Erişim belirteci kontrolü yapılır. Geçerli bir erişim belirteci yok ise HHS tarafından **”TR.OHVPS.Connection.InvalidToken”** hatası dönülür.
- İstek başlığında yer alan X-Access-Token ile ilişkili rızada, izin verilen kartRef'ler için, kart detay bilgileri sorgulanan kartRefe ait rıza ile aynı olup olmadığı kontrol edilir. Farklı olması durumunda **"TR.OHVPS.Resource.NotFound"** hatası dönülür.
- İlgili kartRef bulunamaz **”TR.OHVPS.Resource.NotFound”** hatası dönülür. 
- Rıza durumu kontrol edilir. 
  - B: Yetki Bekleniyor ya da Y: Yetkilendirildi ise **“TR.OHVPS.Resource.ConsentMismatch”** hatası dönülür. 
  - I: Rıza İptal ya da S: Yetki Sonlandırıldı ise **”TR.OHVPS.Resource.ConsentRevoked”** hatası dönülür.
  - RizaDurumu “K: Yetki Kullanıldı” ise kontrollere devam edilir.
- İlgili rıza numarasının “08: Detaylı Kart Bilgisi” izin türüne sahipliği kontrol edilir. 08 izin türüne sahip değil ise **”TR.OHVPS.Business.PermissionTypeNotSupported"”** hatası dönülür. 
- **Alt kart tipi Sanal Kart olanlar için detay bilgisi görüntülenmeyecektir.** Sanal kart özelinde detay bilgi sorgulaması yapılması durumunda HHS tarafından **"TR.OHVPS.Business.CardTypeNotSupported"** hatası dönülür.
- Kart tipi olarak; kapalı statüsünde olan banka ve ön ödemeli kartlar için detay sorgulaması yapılamayacaktır. Kart tipi kredi kartı olup kapalı statüsünde olan ve  borcu olmayan bir  kart için de kart detay sorgulaması yapılamayacaktır. Detay sorgulaması yapılamayacak bir kart tipi için HHS'ler tarafından **"TR.OHVPS.Business.InvalidCardStatus"** hatası dönülür.
- Rıza içerisinde kanal görüntüleme yetkisi kapatılan kart için detay bilgisi sorgulandığında **TR.OHVPS.Resource.RestrictedChannelAccess** hata kodu dönülecektir.
- İlk kredi kartı oluşan ÖHK'lar henüz ekstre oluşmadığı sebebiyle tarih ve borç bilgileri de oluşmamış olabilir. Bu sebeple ilgili tutar bilgileri sıfır olacak şekilde dönülmelidir. Tarih bilgileri ise varsayılan tarih bilgisi olarak dönülebilir.(Örn:01/01/1900) Bu şekilde gelen bir tarih bilgisi YÖS'ler tarafından ÖHK'ya boş olarak gösterilebilir. 

Yukarıdaki kontroller tamamlandıktan sonra HHS tarafından **“KartDetayBilgileri”** nesnesi dönülür.

HHS'ler kart tipi kredi kartı ise ve karta ait borç/taksit tutar bilgisi bulunuyorsa KartDetayBilgileri nesnesi için başarılı yanıt dönmek zorundadır. Borç bilgisi için tutarlar eksi(-) olacak şekilde iletilmesi beklenmektedir.

Kart Detay Bilgisi Sorgu Örneği (Tek Bir Kart) = /kartlar/{kartRef}/kart-detay

Parametre içeren Kart Detay Bilgisi Sorgu Örneği (Tek Bir Kart) =  /kartlar/{kartRef}/kart-detay?ekstreTuru=USD



**Tablo 22: Kart Bilgileri Sorgulama İsteği Sorgu Parametreleri**

|Alan Adı |Parametre Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|HHS tarafından yapılması gereken kontrol ve işlemler|
| --- | --- | --- | --- | --- | --- |
|Ekstre Türü	|ekstreTuru	|AN3|	K |Kart bilgileri yanıtında dönülen ekstre türleri değerlerini almaktadır. Para birimine uygun olarak kart detay bilgileri sorgulanmaktadır. Ekstre parametresi TRY,USD,EUR,GBP olarak gönderilebilir. Bu alan gönderilmiyorsa TRY değerlendirilmelidir. İlgili para birimine özel ekstre içindeki harcama değeri dönülecektir. | Ekstre türleri haricinde uygun olmayan bir değer gönderildiğinde hata verilmelidir. |

**Tablo 23: “KartDetayBilgileri” nesnesi**  
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|Kart Tiplerine İstinaden Detaylı Açıklama	|
| --- | --- | --- | --- | --- | --- |
| Rıza No | rizaNo | AN1..128 | Z | HesapBilgisiRızasi nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı |
| Kart Referans Numarası | kartRef | AN5..40 | Z| HHS tarafından her bir kart için atanan biricik değerdir (uuid). Bir kart tek bir kartRef'e karşılık gelmelidir, benzer şekilde bir kartRef tek bir karta karşılık gelmelidir. Aynı kart için alınan tüm rızalarda kart referans bilgisinin değişmemesi gerekmektedir. ||
| Ekstre Türü | ekstreTuru |AN3 | Z| Ekstre türü TRY,USD,EUR,GBP olarak gönderilebilir. İstek paremetresinde iletilen değer ile aynı değer olmalıdır.  ||
| Toplam Kart Limiti | toplamLimit | Kompleks:ToplamLimit	 | K| Karta ait toplam TL limit bilgisi | Kart tipi kredi kartı ve ön ödemeli kart olanlar için ilgili alanın dönülmesi zorunludur. Kart tipi banka olan kartlar için ilgili alan dönülmemelidir. Ön ödemeli kartlarda, bağlı bulundukları bir hesap olsa bile, sadece üzerlerine yüklenen tutarın gösterilmesi gerekmektedir.|
| > Tutar  | tutar   | AN1..24   | Z |  Tutar Bilgisi. Limit tutarı için regex patterni şu şekildedir: '```^\d{1,18}$|^\d{1,18}\.\d{1,5}$```' ||
| > Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi |  
| Kullanılabilir Kart Limiti | kullanilabilirLimit | Kompleks:KullanılabilirLimit | K| Karta ait kullanılabilir TL limit bilgisi | Kart tipi banka olan kartlar için ilgili alan dönülmemelidir.|
| > Tutar  | tutar   | AN1..24   | Z |  Tutar Bilgisi. Limit tutarı için regex patterni şu şekildedir: '``` ^\d{1,18}$|^\d{1,18}\.\d{1,5}$```' ||
| > Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi | 
| Dönem İçi Hareket Toplamı | donemIciHareketToplami	 | Kompleks:DonemIciHareketToplami | Z | Dönem içi hareket toplamı ve kalan ekstre borcunun toplamı dönülmelidir.  |Kart tipi kredi kartı olanlar için ilgili döneme ait hareketlerin toplam tutar bilgisidir. Kart tipi banka ve ön ödemeli kartlar için ilgili dönem içerisinde ay başından itibaren yapılan hareketlerin toplam tutar bilgisi iletilmelidir. |
| > Tutar  | tutar   | AN1..24   | Z |  Tutar Bilgisi.  Tutar için regex patterni şu şekildedir: '```^[\-\+]?\d{1,18}$|^[\-\+]?\d{1,18}\.\d{1,5}$```'|
| > Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi | 
| Ekstre Borcu | ekstreBorcu | Kompleks:EkstreBorcu | K | İlgili ekstre türüne uygun olarak ekstre borcu iletilmelidir.  |Kart tipi kredi kartı olanlar için ilgili alanın dönülmesi koşulludur. Ek kredi kartı için ilgili alan varsa dönülmelidir . Kart tipi banka ve ön ödemeli kart olan kartlar için ilgili alan dönülmemelidir.|
| > Tutar  | tutar   | AN1..24   | Z |  Borç tutarı için regex patterni şu şekildedir: '```^[\-\+]?\d{1,18}$|^[\-\+]?\d{1,18}\.\d{1,5}$```'|
| > Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi | 
| Kalan Ekstre Borcu | kalanEkstreBorcu |  Kompleks:KalanEkstreBorcu |K | İlgili ekstre türüne uygun olarak kalan ekstre borcu iletilmelidir.  |Kart tipi kredi kartı olanlar için ilgili alanın dönülmesi koşulludur. Alt kart tipi ; Asıl ve Dijital kredi kartı için ilgili alanın dönülmesi zorunludur. Ek kredi kartı için ilgili alan varsa dönülmelidir. Kart tipi banka ve ön ödemeli kart olan kartlar için ilgili alan dönülmemelidir.|
| > Tutar  | tutar   | AN1..24   | Z |  Borç tutarı için regex patterni şu şekildedir: '```^[\-\+]?\d{1,18}$|^[\-\+]?\d{1,18}\.\d{1,5}$```'|
| > Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi | 
| Asgari Ödeme Tutarı | asgariOdemeTutari |Kompleks:AsgariOdemeTutari  |K | İlgili ekstre türüne uygun olarak ekstreye ait asgari ödeme tutarı iletilmelidir.  |Kart tipi kredi kartı olanlar için ilgili alanın dönülmesi koşulludur. Alt kart tipi ; Asıl ve Dijital kredi kartı için ilgili alanın dönülmesi zorunludur. Ek kredi kartı için ilgili alan varsa dönülmelidir. Kart tipi banka ve ön ödemeli kart olan kartlar için ilgili alan dönülmemelidir.|
| > Tutar  | tutar   | AN1..24   | Z | Ödeme tutarı için regex patterni şu şekildedir: '``` ^\d{1,18}$|^\d{1,18}\.\d{1,5}$```'|
| > Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi | 
|Kalan Asgari Ödeme Tutarı | kalanAsgariOdemeTutari |Kompleks:KalanAsgariOdemeTutari |K | İlgili ekstre türüne uygun olarak ekstreye ait kalan asgari ödeme tutarı iletilmelidir. |Kart tipi kredi kartı olanlar için ilgili alanın dönülmesi koşulludur. Alt kart tipi ; Asıl ve Dijital kredi kartı için ilgili alanın dönülmesi zorunludur. Ek kredi kartı için ilgili alan varsa dönülmelidir. Kart tipi banka ve ön ödemeli kart olan kartlar için ilgili alan dönülmemelidir.|
| > Tutar  | tutar   | AN1..24   | Z |  Ödeme tutarı için regex patterni şu şekildedir: '``` ^\d{1,18}$|^\d{1,18}\.\d{1,5}$```'|
| > Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi | 
| Hesap Kesim Tarihi | hesapKesimTarihi | ISODate | Z| Karta ait hesap kesim tarihi iletilmelidir. Tarih formatında iletilmelidir. Örn : 2024-12-23 | Kart tipi kredi kartı olanlar için hesap kesim tarihi iletilmelidir. Ek kart için asıl kartın hesap kesim tarihi dönülmelidir. Kart tipi banka ve ön ödemeli kart olan kartlar için sorgulama yapılan ayın son takvim günü dönülmelidir.|
|Sonraki Hesap Kesim Tarihi | sonrakiHesapKesimTarihi | ISODate | Z| Karta ait sonraki hesap kesim tarihi iletilmelidir. Tarih formatında iletilmelidir. Örn : 2024-11-23 | Kart tipi kredi kartı olanlar için sonraki hesap kesim tarihi iletilmelidir. Ek kart için asıl kartın sonraki hesap kesim tarihi dönülmelidir. Kart tipi banka ve ön ödemeli kart olan kartlar için sorgulama yapılan aydan bir sonraki ayın son takvim günü dönülmelidir|
| Son Ödeme Tarihi | sonOdemeTarihi | ISODate | K|Kart borcunun ödeneceği son ödeme tarih bilgisi dönülmelidir. Örn : 2024-12-02 |Kart tipi kredi kartı olanlar için ilgili alan dönülmesi zorunludur. Ek kart için asıl kartın son ödeme tarih bilgisi dönülmelidir. Kart tipi banka ve ön ödemeli kart olan kartlar için ilgili alan dönülmemelidir.|
| Sonraki Son Ödeme Tarihi | sonrakiSonOdemeTarihi | ISODate | K|Bir sonraki döneme ait kart borcunun son ödeme tarih bilgisi dönülmelidir. Örn : 2025-01-04 |Kart tipi kredi kartı olanlar için ilgili alan dönülmesi zorunludur. Ek kart için asıl kartın sonraki son ödeme tarih bilgisi dönülmelidir. Kart tipi banka ve ön ödemeli kart olan kartlar için ilgili alan dönülmemelidir.|
| Puan Bilgisi | puanBilgisi | Kompleks:PuanBilgisi | | | |
| > Puan Değeri | puanDegeri | AN1..24 | K | Kart için mevcutta yer alan puan değeri varsa iletilmelidir. HHS özelinde puan değeri puan tipine göre birim olarak tutuluyorsa ilgili değer iletilmelidir. Örn: 100 Plus puan bilgisi varsa puan değeri alanında 100 iletilmelidir. | Tüm kart tipleri için puan bilgisi varsa dönülmelidir. |
| > Puan Tipi | puanTipi | AN1..50 | K | Puan Tipi olarak HHS özelinde bir puanTipi varsa o bilgi iletilmelidir. Örn: 100 Plus puan bilgisi varsa puan tipi alanında Plus değeri iletilmelidir.  |  Tüm kart tipleri için puan bilgisi varsa dönülmelidir. |
| Nakit Çekim Limiti | nakitCekimLimiti | Kompleks:NakitCekimLimiti |K | Karta ait nakit çekim limit değeri iletilmelidir.   | Kart tipi kredi kartı olanlar için ilgili alan dönülmesi zorunludur. Kart tipi banka ve ön ödemeli kart olan kartlar için ilgili alan dönülmemelidir.  |
| > Tutar  | tutar   | AN1..24   | Z |  Limit tutarı için regex patterni şu şekildedir: '``` ^\d{1,18}$|^\d{1,18}\.\d{1,5}$```'|
| > Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi | 
|Kullanılabilir Nakit Çekim Limiti | kullanilabilirNakitCekimLimiti | Kompleks:KullanilabilirNakitCekimLimiti |K | Karta ait kullanılabilir nakit çekim limit değeri iletilmelidir.  | Kart tipi kredi kartı olanlar için ilgili alan dönülmesi zorunludur. Kart tipi banka ve ön ödemeli kart olan kartlar için ilgili alan dönülmemelidir. |
| > Tutar  | tutar   | AN1..24   | Z |  Limit tutarı için regex patterni şu şekildedir: '``` ^\d{1,18}$|^\d{1,18}\.\d{1,5}$```'|
| > Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi | 
| Kalan Toplam Taksit Tutarı | kalanToplamTaksitTutari |  Kompleks:KalanToplamTaksitTutari |K | Karta ait tüm kalan taksitlerin toplam değeri iletilmelidir.  | Kart tipi kredi kartı olanlar için ilgili alan dönülmesi zorunludur. Kart tipi banka ve ön ödemeli kart olan kartlar için ilgili alan dönülmemelidir.  |
| > Tutar  | tutar   | AN1..24   | Z |  Taksit tutarı için regex patterni şu şekildedir: '``` ^\d{1,18}$|^\d{1,18}\.\d{1,5}$```'|
| > Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi | 
| Dönem Taksit Tutar Bilgisi | donemTaksitTutarBilgisi | Kompleks:DonemTaksitTutarBilgisi |K |Kart Tipi kredi kartı olanlar için taksit bilgisi varsa taksit içeren dönemlerin dizi halinde iletilmesi zorunludur. | |
| > Dönem Değeri | donemDegeri | N3 | Z |Taksitli işlemler dönülmesi sebebiyle dönem değeri minimum 1 olacak şekilde dönülmelidir. | 
| > Dönem Taksit Tutarı | donemTaksitTutari |  Kompleks:DonemTaksitTutari |Z | İlgili dönem değeri içerisindeki toplam taksit tutar bilgisi iletilmelidir.  |  |
| >> Tutar  | tutar   | AN1..24   | Z |  Taksit tutarı için regex patterni şu şekildedir: '``` ^\d{1,18}$|^\d{1,18}\.\d{1,5}$```'|
| >> Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi | 
## 9.11 ADIM 4.2: Kart Hareket Bilgilerinin Sorgulanması  

**GET /kartlar/{kartRef}/kart-hareketleri**

KartBilgileri nesnesi ile elde edilen kart listesinde yer alan kartların işlem/hareket bilgileri sorgulanır. Kart hareketleri için "KartHareketleri" nesnesinin içeriği Tablo 25'de verilmiştir. 

- Bir karta ilişkin işlem bilgileri Tablo 24’deki istek parametrelerine göre sorgulanır. Parametrede yer alan değerlerin doğru gönderildiği kontrol edilir. Hatalı gönderilmesi durumunda HHS tarafından **”TR.OHVPS.Resource.InvalidFormat”** hatası dönülür. Parametrede yer alan isteğe bağlı alanlar gönderilmediği durumda parametredeki varsayılan değerler ile kart hareketleri dönülür.
- Parametrede yer alan ekstreTuru bilgisi Ekstre Türleri haricinde uygun olmayan bir değer gönderildiğinde **”TR.OHVPS.Business.InvalidCurrencyCode”** hatası dönülür. Bu alan gönderilmiyorsa TRY olarak değerlendirilmelidir.
- Erişim belirteci kontrolü yapılır. Geçerli bir erişim belirteci yok ise HHS tarafından **”TR.OHVPS.Connection.InvalidToken”** hatası dönülür.
- İstek başlığında yer alan X-Access-Token ile ilişkili rızada, izin verilen kartRef'ler için, kart hareket bilgileri sorgusunda yer alan kartRefe ait rıza ile aynı olup olmadığı kontrol edilir. Farklı olması durumunda **"TR.OHVPS.Resource.NotFound"** hatası dönülür. 
- İlgili kartRef bulunamaz ise **”TR.OHVPS.Resource.NotFound”** hatası dönülür.
- Rıza durumu kontrol edilir. 
  - B: Yetki Bekleniyor ya da Y: Yetkilendirildi ise **“TR.OHVPS.Resource.ConsentMismatch”** hatası dönülür. 
  - I: Rıza İptal ya da S: Yetki Sonlandırıldı ise **”TR.OHVPS.Resource.ConsentRevoked”** hatası dönülür.
  - RizaDurumu “K: Yetki Kullanıldı” ise kontrollere devam edilir.
- Kart Hareket Bilgilerinin Sorgulanması yapılırken HHS tarafından ÖHK’nın “09:  Ayrıntılı Kart İşlem Bilgisi” izin türüne sahipliği kontrol edilir. 09 izin türüne sahip değil ise **”TR.OHVPS.Business.PermissionTypeNotSupported”** hatası dönülür. 
- Kart tipi olarak; kapalı statüsünde olan banka ve ön ödemeli kartlar için hareket sorgulaması yapılamayacaktır. Kart tipi kredi kartı olup kapalı statüsünde olan ve borcu olmayan bir kart için de kart hareket sorgulaması yapılamayacaktır. Hareket sorgulaması yapılamayacak bir kart tipi için HHS'ler tarafından **"TR.OHVPS.Business.InvalidCardStatus"** hatası dönülmelidir.
- -Rıza içerisinde kanal görüntüleme yetkisi kapatılan kart için hareket bilgisi sorgulandığında **TR.OHVPS.Resource.RestrictedChannelAccess** hata kodu dönülecektir.
- Kapalı statüsünde olan kart tipleri için geçmişe dönük hareket sorgulaması yapılamayacaktır. Örneğin; Kredi Kartı için -12 ile 18 arası olan dönem değeri kapalı olan kredi kartı için 0 ile 18 arasında yapılabilecektir. Tüm kart tipleri için belirtilen parametrede yer alan dönem değerinin uygun gönderilmediği durumda **”TR.OHVPS.Business.InvalidPeriodValue”** hatası dönülür.

Yukarıdaki kontroller tamamlandıktan sonra HHS tarafından "KartHareketleri" nesnesi dönülür.
- HHS'ler kart tipi kredi kartı ise ve karta ait borç/taksit tutar bilgisi bulunuyorsa KartHareketleri nesnesi için başarılı yanıt dönmek zorundadır.
- Kart tipi Banka Kartı olanlarda dönem içi olarak sorgulama yapılan aya ait ilgili banka kartı ile yapılan kart hareketleri görüntülenecektir. (Banka kartı ile yapılan Para Çekme/Yatırma, banka kartı ile yapılan POS'tan Alışveriş vb.). Banka kartında dönem değerinin "-1" gönderilmesi durumunda bir önceki aya ait kart hareketleri görüntülenecektir.
- Kart hareketleri yanıtında hareket bilgileri işlem tarihinine göre sıralı olarak iletilmelidir. İşlem tarihi en güncel tarihten geriye dönük olacak şekilde listelenmelidir.
- Kart hareketlerinde ekstre türleri dışında yapılan bir işlem varsa hangi ekstre türüne dahil edilerek gösteriliyorsa gönderilmelidir. 
  - Örn: 100 JPY'lik bir harcama işlemi TRY biriminde çevirilip 23 TRY olarak TRY ekstre türünde gösteriliyorsa ilgili işlem için işlem tutarı 23 TRY, orijinal işlem tutarı ise 100 JPY olarak değerlendirilmelidir.


**Tablo 24: Kart Hareket Bilgileri Sorgulama İsteği Sorgu Parametreleri**
|Alan Adı |Parametre Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|HHS tarafından yapılması gereken kontrol ve işlemler|
| --- | --- | --- | --- | --- | --- |
|Dönem Değeri | donemDegeri | N3 | Z | Kart hareketlerinin sorgulanacağı döneme ait değerdir.<br><br> Dönem içi : 0<br>Geçmiş Ay/Ekstre : -1 ile -12 arası<br>Taksit : 1 ile 18 arası <br>Provizyon : 99<br><br> Kart tipine göre alabileceği dönem değerleri ise ;<br><br> Banka Kartı : 0 ve -1<br>Kredi Kartı : -12 ile 18 arası ve 99 (Sanal alt kart tipi hariç diğer tüm alt kart tiplerinde bu değerler geçerlidir.) <br>Alt kart tipi sanal kart tipinde ise alabileceği değerler 0 ve 99'dur.<br>Ön Ödemeli Kart : 0 ve -1  | Kapalı statüsünde olan kart tipleri için geçmişe dönük hareket sorgulaması yapılamayacaktır. Örneğin; Kredi Kartı için -12 ile 18 arası olan dönem değeri kapalı olan kredi kartı için 0 ile 18 arasında yapılabilecektir.<br><br> Tüm kart tipleri için belirtilen dönem değerinin uygun gönderilmediği durumda hata verilmelidir. |
|Ekstre Turu | ekstreTuru | AN3 | K | Kart bilgileri yanıtında dönülen ekstre türleri değerlerini almaktadır. Para birimine uygun olarak kart detay bilgileri sorgulanmaktadır. Ekstre parametresi TRY,USD,EUR,GBP olarak gönderilebilir. Bu alan gönderilmiyorsa TRY değerlendirilmelidir. İlgili para birimine özel ekstre içindeki harcama değeri dönülecektir. | Ekstre türleri haricinde uygun olmayan bir değer gönderildiğinde hata verilmelidir. |
|Sayfa Başına İstenen Kayıt Sayısı|	syfKytSayi|	N3|	İ	|Sayfa başına istenen kayıt sayısı. Bu alanda iletilen değer 100’den büyük olamaz. |Bu veri gönderildiği durumda, HHS işlemler listesini bu sayı kadar gruplandırarak gönderir. Bu veri gönderilmediğinde sayfadaki kayıt sayısı 100 olarak kullanılır. |
|İstenen Sayfa Numarasi|	syfNo|	N3|	İ	|Cevapta dönecek sayfa numarası 1’den başlayarak artan değerlerle iletilmelidir.|	Bu veri gönderildiği durumda, HHS işlemler listesini bu sayfadaki kayıtları gönderir. Gönderilmediğinde, HHS ilk sayfadaki kayıtları gönderir. |
|Borç Alacak Göstergesi	|brcAlc	|AN1|	İ|	TR.OHVPS.DataCode.BrcAlc sıralı veri tipi değerlerinden birini alır. Sorgulanacak işlemlerin borç / alacak kriteri B: Karta borç yaratan işlem.A: Karta alacak yaratan işlem. N: Finansal olmayan işlem {“B”,”A”,”N”}	|Bu veri gönderildiği durumda HHS işlemler listesi dönüşünü bu kritere göre filtreleyerek iletmek zorundadır.|
|Sıralama Yönü	|srlmYon|	AN1|	İ	|Cevapta dönülecek işlemlerin sıralama yönünü belirtir. Alabileceği değerler: A: Azalan değerle sıralama Y: Artan değerle sıralama {“A”,”Y”}|	Bu veri gönderildiği durumda, HHS kart hareketlerini **sıralama kriteri işlem tarihi** olacak şekilde ilgili yöne uygun olarak sıralayarak gönderir. Gönderilmediğinde, HHS sıralama yönünü Azalan olarak belirler.|  

**Tablo 25: “KartHareketleri” nesnesi**  
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|Kart Tiplerine İstinaden Detaylı Açıklama	|
| --- | --- | --- | --- | --- | --- | 
| Kart Referans Numarası | kartRef | AN5..40 | Z| HHS tarafından her bir kart için atanan biricik değerdir (uuid). Bir kart tek bir kartRef'e karşılık gelmelidir, benzer şekilde bir kartRef tek bir karta karşılık gelmelidir. Aynı kart için alınan tüm rızalarda kart referans bilgisinin değişmemesi gerekmektedir. ||
| Dönem Değeri | donemDegeri | N3 | Z|Kart hareketlerinin sorgulanacağı döneme ait değerdir.  ||
| Dönem Başlangıç Tarihi | donemBaslangicTarihi |ISODate | Z|Sorgulama yapılan ekstre dönemine göre ilgili döneme ait başlangıç tarih bilgisidir. Kart tipi kredi kartı olanlar için ilgili döneme ait başlangıç tarihi iletilmelidir. Kart tipi banka kartı ve ön ödemeli kart olanlar için sorgulama yapılan ayın başlangıç tarihi iletilmelidir.  ||
| Dönem Bitiş Tarihi | donemBitisTarihi |ISODate | Z|Sorgulama yapılan ekstre dönemine göre ilgili döneme ait bitiş tarih bilgisidir. Kart tipi kredi kartı olanlar için ilgili döneme ait bitiş tarihi iletilmelidir. Kart tipi banka kartı ve ön ödemeli kart olanlar için sorgulama yapılan ayın bitiş tarihi iletilmelidir.  ||
| Ekstre Türü | ekstreTuru |AN3 | Z| Ekstre türü TRY,USD,EUR,GBP olarak gönderilebilir. İstek paremetresinde iletilen değer ile aynı değer olmalıdır.  ||
| Ekstre Borcu | ekstreBorcu |Kompleks:EkstreBorcu | K|  Sorgulama yapılan geçmiş döneme için ekstre türüne uygun olarak ekstre borcu iletilmelidir.  |Kart tipi kredi kartı olanlar için sadece geçmiş dönem değerine istinaden ilgili alan iletilmelidir.|
| > Tutar  | tutar   | AN1..24   | Z |  Borç tutarı için regex patterni şu şekildedir: '```^[\-\+]?\d{1,18}$|^[\-\+]?\d{1,18}\.\d{1,5}$```'|
| > Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi | 
| Asgari Ödeme Tutarı | asgariOdemeTutari |Kompleks:AsgariOdemeTutari	 | K| İlgili geçmiş dönem için ekstre türüne uygun olarak ekstreye ait asgari ödeme tutarı iletilmelidir.  |Kart tipi kredi kartı olanlar için sadece geçmiş dönem değerine istinaden ilgili alan iletilmelidir.|
| > Tutar  | tutar   | AN1..24   | Z | Ödeme tutarı için regex patterni şu şekildedir: '``` ^\d{1,18}$|^\d{1,18}\.\d{1,5}$```'|
| > Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi |
| Dönem Taksit Tutarı | donemTaksitTutari |Kompleks:DonemTaksitTutari	 | K|  İstek parametresinde iletilen ilgili dönem değeri içerisindeki toplam taksit tutar bilgisi iletilmelidir.  |Kart tipi kredi kartı olanlar için taksit bilgisi varsa ilgili alan iletilmelidir.|
| > Tutar  | tutar   | AN1..24   | Z | Dönem taksit tutarı için regex patterni şu şekildedir: '``` ^\d{1,18}$|^\d{1,18}\.\d{1,5}$```'|
| > Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi | 
| Hesap Kesim Tarihi | hesapKesimTarihi |ISODate | K|  Karta ait sorgulanan döneme ait hesap kesim tarihi iletilmelidir. Tarih formatında iletilmelidir. Örn : 2024-11-23  |Kart tipi kredi kartı olanlar için sadece geçmiş dönem değerine istinaden ilgili alan iletilmelidir. |
| Son Ödeme Tarihi | sonOdemeTarihi |ISODate | K|  Karta ait sorgulanan dönem için son ödeme tarih bilgisi dönülmelidir. Örn : 2024-12-02  | Kart tipi kredi kartı olanlar için sadece geçmiş dönem değerine istinaden ilgili alan iletilmelidir.|
| Hareket Bilgileri | hareketBilgileri |Kompleks Alan: HareketBilgileri | K| Dizi halinde liste olacaktır.  ||
|> İşlem Numarası	|islemNo|	AN3..50|	Z|	Kart hareketinin oluşturulması sırasında atanan ve borç (veya alacak) hareketini tekilleştiren HHS bazında tekil tanımlayıcıdır. Bu değer tek başına tekil olabileceği gibi birden fazla değerin bir araya getirilmesiyle de tekilliği sağlanmış olabilir. Bu değerin en azından kart referans numarası bazında tekil olması beklenir. Genellikle kullanılan örnekleri; Instance_Id, Transaction_Id, Transaction_Num, Transaction_TimeStamp|
|> İşlem Tutarı | islemTutari |Kompleks:IslemTutari | Z|Yapılan işleme ait tutar bilgisi. Taksitli bir işlem ise ilgili dönemdeki taksit tutarı iletilecektir. ÖHK, HHS'de ilgili dönem sorguladığında hangi tutarı görüntülüyorsa ilgili tutar dönülecektir. İşleme ait sadece puan bilgisiyle kazanım, kullanım, iade veya iptal varsa ve tutar bilgisi yoksa ilgili tutar değeri sıfır gönderilmelidir. Puana dair değerler ise PuanBilgileri alanı içerisinde gönderilmelidir.  ||
| >> Tutar  | tutar   | AN1..24   | Z |  İşlem tutarı için regex patterni şu şekildedir: '``` ^\d{1,18}$|^\d{1,18}\.\d{1,5}$```'|
| >> Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi. Ekstre türü ile aynı olması gerekmektedir. | 
|> Orijinal İşlem Tutarı | orijinalIslemTutari |Kompleks:OrijinalIslemTutari | K|Ekstre türü dışında yapılan işleme ait tutar bilgisi. Örneğin; ekstre türü TRY gönderildiği durumda işlem 100 JPY ise işlem tutarı alanında 100 değeri iletilmelidir. ||
| >> Tutar  | tutar   | AN1..24   | Z |   İşlem tutarı için regex patterni şu şekildedir: '``` ^\d{1,18}$|^\d{1,18}\.\d{1,5}$```' |
| >> Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi. Örneğin; 100 JPY ise işlem tutar para birimi alanında JPY değeri iletilmelidir. | 
|> İşlem Tarihi | islemTarihi |ISODateTime | Z| İşlemin gerçekleştiği zaman bilgisi  ||
|> Borç Alacak Göstergesi | borcAlacak |AN1 | Z| TR.OHVPS.DataCode.BrcAlc sıralı veri tipi değerlerinden birini alır. Sorgulanacak işlemlerin borç / alacak kriteri B: Karta borç yaratan işlem.A: Karta alacak yaratan işlem. N: Finansal olmayan işlem {“B”,”A”,”N”}  ||
|> İşlem Açıklaması | islemAciklamasi |AN1..200 | Z| Alışveriş işlemi olması durumunda işyeri adını içeren açıklama, diğer işlemler için mevcut işlem açıklaması iletilir. HHS'ler tüm kart hareketlerini YÖS'ler ile paylaşmakla yükümlü olup, hassas veri içeren(örn: faiz, komisyon bilgisi içeren vb.) işlem hareketleri de bu kapsamda değerlendirilerek işlem açıklamasının maskeli olarak iletilmesi sağlanır. Kelimelerin ilk 3 hanesi maskeli olacak şekilde, ancak sakıncalı bulunan kelimeler varsa; (örn: faiz, komiyon vb.) kelimelerin tamamı maskeli olacak şekilde gösterilebilir.   ||
|> İşlem Puan Bilgileri | islemPuanBilgileri |Kompleks: IslemPuanBilgileri | K| İlgili işlem sonrası kazanılan veya kullanılan bir puan değeri varsa iletilmesi gerekmektedir. | İlgili alanda koşula uygun olarak değer dönülecekse; kart tipi kredi, banka ve ön ödemeli kartı olanlar için dönülmesi zorunludur.|
|>> İşlem Puanı | islemPuani |AN1..24 | K| İşleme dair kazanılan veya kullanılan puan değeri iletilmelidir. Örn: 100 Plus kazanılmış bir işlem için 100 değeri iletilmelidir. | |
|>> İşlem Puan Birimi | islemPuanBirimi |AN1..50 | K| İşleme dair kazanılan veya kullanılan puan birimi iletilmelidir. Örn: 100 Plus kazanılmış bir işlem için Plus değeri iletilmelidir. | |
|>> İşlem Puan Durumu | islemPuanDurumu |AN2 | K|İlgili işlem sonucunda puan bilgisinin bir kazanım, kullanım, iade ve iptal durumlarına yönelik değer iletilmelidir. TR.OHVPS.DataCode.IslemPuanDurumu değerlerinden birini alır.<br>01: Puan Kazanımı<br>02: Puan Kullanımı<br>03: Puan İade<br>04: Puan İptal | |
|> Toplam Taksit Tutarı | toplamTaksitTutari |Kompleks:ToplamTaksitTutari | K| İlgili işlem taksitli bir işlem ise o işleme ait toplam taksit tutarı iletilmelidir. İlgili işlem tek çekim bir işlem ise o işlemde ilgili alan iletilmemelidir.  | Kart tipi kredi kartı olanlar için ilgili alan dönülmesi zorunludur. Kart tipi banka ve ön ödemeli kart olan kartlar için ilgili alan dönülmemelidir.|
| >> Tutar  | tutar   | AN1..24   | Z | Taksit Tutar Bilgisi|
| >> Para Birimi 	| paraBirimi   |  AN3  | Z | Para Birimi |
|> Toplam Taksit Sayısı | toplamTaksitSayisi |N2 | K| İlgili işlem taksitli bir işlem ise o işleme ait toplam taksit sayısı iletilmelidir. İlgili işlem tek çekim bir işlem ise o işlemde ilgili alan iletilmemelidir.  | Kart tipi kredi kartı olanlar için ilgili alan dönülmesi zorunludur. Kart tipi banka ve ön ödemeli kart olan kartlar için ilgili alan dönülmemelidir.|
|> İlgili Taksit Dönemi | taksitDonemi |N2 | K| Taksitli işlem olması durumunda işleme ait ilgili taksit dönem bilgisi. Örneğin: 3 taksitli bir işlemde 2. taksit yansımışsa 2 olarak gönderilmelidir.  | Kart tipi kredi kartı olanlar için ilgili alan dönülmesi zorunludur. Kart tipi banka ve ön ödemeli kart olan kartlar için ilgili alan dönülmemelidir.|
|> Satıcı Kategori Kodu | saticiKategoriKodu |AN4 | K| Satıcı Kategori Kodu(MCC) varsa iletilmesi zorunludur. Alışveriş işlemlerinde gönderimi zorunludur.  | İlgili alanda koşula uygun olarak değer dönülecekse; kart tipi kredi ve banka kartı olanlar için dönülmesi zorunludur.|