# POST /erisim-belirteci


**İSTEK:**

YÖS erisim-belirteci erişim adresini 2 amaçla kullanır:   

1.	Bir önceki adımdan aldığı rizaNo, rizaTip (ödeme emri başlatma hizmetinde “O”, hesap bilgisi hizmetinde “H”) ve GKD sonrası dönülen yetKod bilgilerini kullanarak HHS nezdinde ErisimBelirteci nesnesi oluşturmak üzere istekte bulunur. YÖS’ün istekte bulunabilmesi için GKD adımının başarılı bir şekilde tamamlanması rizaDrm bilgisinin ‘yetkilendirildi’ olması gerekir. Erişim Belirteci nesnesi ile rızası nesnesi (Ödeme Emri Rızası veya Hesap Bilgisi Rızası) arasındaki ilişki rıza numarası üzerinden sağlanır.  

2.	Aldığı erişim belirtecinin Geçerlilik Süresinin dolduğu durumda, yenileme belirteci karşılığında yeni bir erişim belirteci alması gerekmektedir.  


POST /erisim-belirteci isteğinin (REQUEST) gövdesinde (BODY)  “ErisimBelirteciIstegi” nesnesi (Tablo-23) kullanılır. İstek başarıyla sonuçlanırsa HHS kaynak sunucusunda “ErisimBelirteci” nesnesi (Tablo 24) oluşturulur veya (Yenileme Belirteci için) güncellenir. Rıza durumu “Yetki Kullanıldı” olarak güncellenir.

Erişim Belirteci POST işlemi sonucunda HTTP 200 dönülmesi gerekmektedir. 


**Tablo 23: “ErisimBelirteciIstegi” nesnesi**

|Alan Adı |JSON Alan Adı	|Format:Veri modeli İsmi	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | 
| RızaNo | rizaNo | AN1..128 | Z | Rıza nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı | 
| Rıza Tipi | rizaTip | AN1 | Z | **O veya H (TR.OHVPS.DataCode.RizaTip)** | 
| Yetki Tipi | yetTip | AN1..50 | Z | “yet_kod” yada “yenileme_belirteci” değerini alabilir. **(TR.OHVPS.DataCode.YetTip)** | 
| Yetki Kodu | yetKod | AN1..255 | K | GKD işleminden dönen yetkilendirme kodudur. Tek kullanımlık olup, aynı yetKod ile birden fazla token alınamaz. yetKod Parametresinin yaşam ömrü 5 dakika olmalıdır.<br>yetTip = “yet_kod” ise zorunludur. | 
| Yenilenme Belirteci | yenilemeBelirteci | AN1..4096   | K | Erişim belirtecinin yenilenmesi amacıyla kullanılır.<br>yetTip = “yenileme_belirteci” ise kullanımı zorunludur. | 


**BAŞARILI YANIT:**


POST işleminin RESPONSE gövdesini (BODY) oluşturan “erisimBelirteci” nesnesinde (Tablo-19) bulunan erişim belirteci değeri ödeme emrinin başlatılması esnasında kullanılır.


**Tablo 24: "ErisimBelirteci" nesnesi**

|Alan Adı |JSON Alan Adı	|Format:Veri modeli İsmi	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | 
| Erişim Belirteci | erisimBelirteci | AN1..4096 | Z | Yetkilendirme Kodu karşılığında HHS tarafından dönülen ve sonraki hesap bilgisi ve ödeme emri servislerine erişimde kullanılan bilgidir.  | 
| Geçerlilik Süresi | gecerlilikSuresi | N1..9 | Z | Erişim Belirtecini saniye cinsinden geçerlilik süresidir.<br> Erişim belirteci geçerli olduğu son tarih ;<br>Hesap Bilgisi Rızası için en fazla 30 gün olmalıdır. Erişimin Geçerli Olduğu Son Tarih(erisimIzniSonTrh); Erişim Belirteci Geçerlilik Süresi'nden küçük ise Erişimin Geçerli Olduğu Son Tarih değeri ile sınırlıdır.<br>Ödeme Başlatma Rızası için 5 dakika olmalıdır. | 
| Yenileme Belirteci | yenilemeBelirteci | AN1..4096 | Z | Erişim belirtecinin yenilenmesi amacıyla kullanılır. | 
| Yenileme Belirteci Geçerlik Süresi | yenilemeBelirteciGecerlilikSuresi | N1..9 | Z | Yenileme belirtecinin saniye cinsinden geçerlilik süresidir.<br>Yenileme belirtecinin geçerli olduğu son tarih ;<br>Hesap Bilgisi için Erişimin Geçerli Olduğu Son Tarih ile sınırlı olmalıdır.<br>Bu tarih geldiği zaman Hesap Bilgisi Rıza Durumunu ”Yetki Sonlandırıldı” statüsüne çekilmesi gerekir.<br>Ödeme Başlatma için Rıza Oluşturma Zamanından 15 gün sonrası olmalıdır.<br><br>15 gün süresi sorgulama servislerinin çağrımını destekleyecek şekilde uzun tutulmuştur. İleri vadeli işlemler bu kapsamda değildir. <br>Ödeme emri 5 dakika içinde gerçekleştirilmelidir. Gerçekleşmediğinde 4.2.8 bölümünde aktarılan rıza statü güncellemesi yapılmalıdır. | 

erisim-belirteci erisim noktasından elde edilen erisimBelirteci, ilişkilendirildiği nesne veya işlem için gönderilen POST isteği başlığında x-access-token alanında iletilir.

Yenilenme Belirteci (refreshToken) kullanılarak Erişim Belirteci (accessToken) alındığında, dönen yanıttaki Yenileme Belirteci Geçerlik Süresi (yenilemeBelirteciGecerlilikSuresi) geçen süre eksiltilerek, kalan zamanın saniye cinsinden hesaplanmasıyla iletilmelidir.

Yenileme Belirteci ile Erişim Belirteci güncellendiğinde, HHS'den dönen yenilemeBelirteci değeri değişebilir, YÖS bu güncel anahtarı saklamalı ve sonraki erisimBelirteci isteğini yenilenmiş olan yenilemeBelirteci ile yapmalıdır.


Erişim Belirteci API çağrımı sırasında rıza durumları kontrol edilmelidir. Bu kontrollerin nasıl yapılması gerektiği 4-Rıza Durumları bölümünde aktarılmıştır.

Yenileme belirteci karşılığında yeni bir erişim belirteci alınması sırasında hata alınması durumunda, HHS'nin döndüğü hata yanıtında httpCode = 401 ve errorCode = "TR.OHVPS.Connection.InvalidToken" geldiği durumda, YÖS tarafından HHS'ye ilgili rıza için sistemsel olarak iptal isteği gönderilmelidir.
