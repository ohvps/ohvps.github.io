# 7.	İleri Tarihli Ödeme Emri Başlatma Hizmeti

Ödeme hizmeti kullanıcısının ileri bir tarihte gerçekleşmesini istediği ödeme emirlerinde bu hizmeti kullanabilir. Ödemenin Havale / PÖS / FAST ödeme sistemlerinden hangisi ile gerçekleşeceğine, ödeme günü geldiğinde HHS karar verir. 

İleri tarihli ödeme hizmetini online bankacılık sistemlerinde sunan HHS'lerin, ÖHVPS üzerinden bu hizmetleri sunması zorunludur. Mevcutta online kanallarından bu hizmeti sundukları müşteri segmentine (bireysel,kurumsal vb.), ÖHVPS üzerinden hizmet sunmaya devam etmeleri gerekmektedir. YÖS, bireysel müşteri özelinde ileri tarihli ödeme hizmeti vermeyen HHS'ye ileri tarihli bir ödeme emri rızası isteği yapması durumunda HHS tarafından **TR.OHVPS.Business.IndividualCustomerNotSupported"** hatası , kurumsal müşteri özelinde ileri tarihli ödeme emri rızası isteği yapıldığında HHS tarafından **TR.OHVPS.Business.CorporateCustomerNotSupported** hatası verilmelidir.

 HHS'ler ileri tarihli ödeme emri hizmetini sunuş bilgilerini HHS API aracılığı ile yayınlayacaklardır. YÖS, ileri tarihli ödeme hizmeti başlatabileceği HHS'lerin listesini HHS API'de yer alan "hizmetTipi":"02" parametresi ile alabilir. YÖS, ileri tarihli ödeme hizmeti sunmayan HHS'ye ileri tarihli bir ödeme emri rızası isteği yapması durumunda HHS tarafından **TR.OHVPS.Business.ScheduledPaymentNotSupported** hatası iletilmelidir.

 İleri tarihli ödeme emri hizmetinde TRY dışındaki yabancı para birimleri için HHS tarafından destek verilmemesi durumunda **TR.OHVPS.Business.InvalidCurrencyCode** hataası verilmelidir.

İleri tarihli ödeme emri güncelleme hizmeti YÖS üzerinden yapılamayacaktır. ÖHK aktif olan düzenli ödeme talimat rızasını iptal ederek, yeniden oluşturabilecektir.

HHS üzerinden ilgili güncelleme hizmeti sağlanabilir. İleri tarihli talimat içerisinde yapılan güncelleme sonucunda olay bildirim ile YÖS'e bildirim sağlanacaktır. HHS üzerinden güncelleme yapılırken talimat tarihine dair ileri bir tarihe güncelleme adımı olmamalıdır. Sadece ilk oluşturulan talimat tarihinden öncesi olacak şekilde güncelleme yapılmasına izin verilmelidir.


 
İleri Tarili Ödeme Emri Başlatma Hizmeti 5 temel akışdan oluşur:  

0.	**İleri Tarihli Ödeme Emri Rıza Başlatma İsteğinin tetiklenmesi:** ÖHK ÖBHS mobil uygulama ya da websitesinden ileri tarihli ödeme emrini başlatır. 
1.	**İleri Tarihli Ödeme Emri Rıza Hazırlanması:** ÖBHS, “İleri Tarihli Ödeme Emri Başlatma” işlemi için izin oluşturulması isteğini HHS’ye iletir. 
2.	**İleri Tarihli Ödeme Emri Rızasının Yetkilendirilmesi:** HHS, gerekli gördüğü durumlarda ÖHK’yı GKD ile doğrular ve ileri tarihli ödeme emri rızasına erişim için erişim belirteci tanımlanmasını temin eder.
3.	**İleri Tarihli Ödeme Emrinin Başlatılması:** ÖBHS, “ileri tarihli ödeme emri”ni HHS’ye iletir.
4.	**İleri Tarihli Ödeme Emri Rıza Durumu, İleri Tarihli Ödeme Emri Durumu, İleri Tarihli Ödeme Emri Detayı Sorguları:** ÖBHS, İleri Tarihli Ödeme Emri Rıza Durumu, İleri Tarihli Ödeme Emri Durumu, İleri Tarihli Ödeme Emri Detayı bilgilerini isteğe bağlı olarak sorgulayabilir.

Nezdinde ödeme hesabı bulunduran hesap hizmeti sağlayıcılar(Banka, EPK, Ödeme Kuruluşları)  müşterilerine ait hesapları hesap referansı ya da hesap numarası üzerinden takip etmektedir. YÖS'lerin hem HBH hem de ÖBH servisleri için hesap referansı veya hesap numarası üzerinden işlem yapılabileceğini bilmeleri, sistemlerini API dokümanında belirtilen akışlara göre uyumlandırmaları ve müşteri bilgilendirmesini(önyüzlerinde hesap no ve hesap referansı ayrımını gözeterek) buna paralel yapmaları beklenmektedir. 

YÖS'ler gönderen hesap seçimini aşağıdaki yöntemlerden biri ya da birkaçı ile sağlayabilirler:
- YÖS, müşterisinin ödeme hesabını HHS ekranından seçtirebilir.
- YÖS, müşterisinden Hesap Bilgisi rızası alır. Rıza aldığı hesaplar üzerinden hesap referansı aracılığı ile ileri tarihli ödeme emri başlatabilir. 
- YÖS, müşterisinin ödeme hesabını elle girmesine olanak tanıyabilir. IBAN'ı olmayan HHS'ler ileri tarihli ödeme emri rızası adımında **TR.OHVPS.Business.IBANNotSupported** hatasını vermelidir. IBAN'ı olan HHS'lerin bu akışı desteklemesi zorunludur.
- YÖS; müşterisinin hesap referansını elle girmesini sağlayabilir. Hesap Referansı bilgisi ile başlatılan ileri tarihli ödeme emri işlemlerinde HHS seçimi zorunludur.

 Ödeme Sistemine doğrudan katılımcı olmayan HHS'ler, müşterilerine IBAN sunmadıkları için, YÖS'ler hesap referansı ile ödeme başlatabilirler. Bunların dışındaki HHS'lerin, gönderen IBAN veya hesap referansı ile ödeme akışını desteklemesi zorunludur.
 

## İleri Tarihli Ödeme Emri Başlatma Hizmeti için Erişim Adresleri (Endpoints)

İleri Tarihli Ödeme Emri Başlatma Hizmeti İçin Erişim Adreslerinin Etki Alanı (Scope) = “odeme_emri” olarak belirtilmelidir. Ödeme Emri Hizmeti ile aynı etki alanı(scope) kullanılmaktadır.

**Tablo : İleri Tarihli Ödeme Emri Başlatma Hizmeti İçin Erişim Adresleri**  

| No | Kaynak|HTTP işlemi |Erişim Adresi |Zorunlu / İsteğe Bağlı |Yetkilendirme Türü |İmzalama|İstem Nesnesi |Yanıt Nesnesi |
| --- |--- |--- |--- |--- |--- |--- |--- |--- |
| 1|ileri-tarihli-odeme-emri-rizasi|POST |/ileri-tarihli-odeme-emri-rizasi |Z |İstemci Kimlik Bilgileri |İmzalı İstek ve Yanıt |IleriTarihliOdemeEmriRizasiIstegi |IleriTarihliOdemeEmriRizasi |
| 2|erisim-belirteci (GKD için)|POST | /erisim-belirteci |Z |İstemci Kimlik Bilgileri |İmzalı İstek ve Yanıt |ErisimBelirteciIstegi |ErisimBelirteci |
| 3 |ileri-tarihli-odeme-emri-rizasi |GET | /ileri-tarihli-odeme-emri-rizasi/{rizaNo} |Z |İstemci Kimlik Bilgileri  |İmzalı Yanıt |- |IleriTarihliOdemeEmriRizaYaniti |
| 4 |ileri-tarihli-odeme-emri |POST | /ileri-tarihli-odeme-emri |Z |İstemci Kimlik Bilgileri & Yetkilendirme Kodu (GKD) |İmzalı İstek ve Yanıt |IleriTarihliOdemeEmriIstegi |IleriTarihliOdemeEmri |
| 5 |ileri-tarihli-odeme-emri |GET | /ileri-tarihli-odeme-emri/{odmEmriNo}|Z |İstemci Kimlik Bilgileri & Yetkilendirme Kodu (GKD) |İmzalı Yanıt |- |IleriTarihliOdemeEmri |
| 6 |ileri-tarihli-odeme-emri-rizasi-iptal |DELETE | /ileri-tarihli-odeme-emri-rizasi/{rizaNo}|Z |İstemci Kimlik Bilgileri | - |- |- |

## 7.1.	ADIM 0 - İleri Tarihli Ödeme Emri Rızası Başlatma Isteği

- 	ÖHK, ÖBHS uygulamasında (web arayüzü/mobil uygulama) ileri tarihli ödeme emri rızası sürecini başlatır.
-  Gönderen hesap detaylarının bu aşamada belirtilmesi zorunlu değildir.


## 7.2.	ADIM 1 - İleri Tarihli Ödeme Emri Rızasının Hazırlanması

<img src="./images/IleriTarihliOdemeEmriRizasi.png" width="75%" >  

**Şekil : İleri Tarihli Ödeme Emri Rızasının Hazırlanması**  

- ÖBHS, ödeme hizmeti kullanıcı hesabının bulunduğu HHS’ye bağlanarak ileri tarihli ödeme emri rıza kaynağının oluşturulmasını (ileriTarihliOdemeEmriRizasi) sağlar.   

- POST isteği TLS protokolü tesis edilen iletişim katmanı üzerinden gerçekleştirilir. TLS için nitelikli sertifikalar kullanılır.  

- POST isteğinin başlığındaki alanlar ve istemcinin sertifikasındaki özel alanlar kullanılarak istemcinin yetkilendirilmesi sağlanır:
  - İstekte bulunan ÖBHS yetkilendirilmiş olduğu geçit tarafından kontrol edilir. 
  - İstekte bulunan yetkilendirilmiş ödeme hizmeti sağlayıcısı ÖBHS rolüne sahipliği geçit tarafından kontrol edilir.
  - HHS tarafından, istek başlığındaki x-aspsp-code ile katilimciBlg içerisinde yer alan hhsKod değeri ile aynı olduğunu kontrol edilir. Farklı olması durumunda **“TR.OHVPS.Connection.InvalidASPSP”** hatası dönülür. 
- POST başarılı olursa, HHS, ileri tarihli ödeme emri için içeride rıza olup olmamasına bakılmaksızın yeni bir rıza tanımlayıcısı RizaNo içeren ileriTarihliOdemeEmriRizasi  yanıt olarak döner.
- 1 ÖHK'nın 1 YÖS için 1HHS'de istediği kadar rızası olabilir.
- HHS tarafında RizaDurumu değişkeninin durumu “Yetki Bekleniyor” olarak güncellenir.
- YÖS’ün doğrulama ekranı olarak ÖHK’ya açacağı URL adresini de ilgili rıza numarasına göre oluşturur. Burada 2 farklı yöntemle URL oluşturabilir.

  - **Statik URL** :   
  HHS’nin base pathi/alt-dizin/{rızaNo}  
  Örnek hhsYonAdr : https://xbank.com.tr/ohvps/cb54834e36f742d09af3d534ece3352a  
Bu adres için ilgili doğrulama sayfası önden hazırlanmalı ve ÖHK’nın doğrulama sayfasına erişimi için yayınlanmış olmalıdır (publish edilmelidir).
  - **Dinamik URL**:  
HHS’nin base pathi/alt-dizin/GKD Karşılama Ekranı?rizano={rızano}  
Örnek: https://xbank.com.tr/ohvps/gkd?rizano=cb54834e36f742d09af3d534ece3352a

**POST /ileri-tarihli-odeme-emri-rizasi**

İSTEK:

ÖBHS, bu API erişim adresinden HHS’ye yeni bir IleriTarihliOdemeEmriRizasi oluşturulması için istekte bulunur:  
- ÖBHS, ileri tarihli ödeme emri başlatma isteği olduğunu HHS’ye bildirir.  
- ÖBHS, ÖHK’nın, ÖBHS arayüzünden verdiği rızanın (“Ön Onay”) bir kopyasının HHS nezdinde müşteri tarafından onaylanması için HHS’ye gönderilmesini sağlar.  
- HHS'ler ileri tarihli ödeme emri hizmetini sunuş bilgilerini HHS API aracılığı ile yayınlayacaklardır. YÖS, ileri tarihli ödeme hizmeti başlatabileceği HHS'lerin listesini HHS API'de yer alan "hizmetTipi":"02" parametresi ile alabilir. YÖS, ileri tarihli ödeme hizmeti sunmayan HHS'ye ileri tarihli bir ödeme emri rızası isteği yapması durumunda HHS tarafından **TR.OHVPS.Business.ScheduledPaymentNotSupported** hatası iletilmelidir.
- HHS; istek mesajında yer alan alanların ÖHVPS API İlke ve Kuralları dökümanında belirtilen şartları sağlayacak şekilde zorunluluk, uzunluk ve içerik kontrollerini yapar. (Zorunlu) Kontrollere istinaden hata oluşması durumunda **"TR.OHVPS.Resource.InvalidFormat"** hata kodu iletilmeli ve fieldErrors dolu olacak şekilde hatalı alanı belirten detaylı açıklama gönderilmelidir. InvalidFormat hata kodlarında fieldErrors içeriği gönderilmeli ve anlaşılır açıklama ile message, messageTr alanları doldurulması zorunludur.
- HHS, hhsKod’un kendisine ait olduğunu ve istek başlığındaki x-aspsp-code değeri ile aynı olduğunu kontrol eder. Farklı olması durumunda **”TR.OHVPS.Connection.InvalidASPSP”** hatası dönülür.
- HHS, yosKod’un geçerli bir Ödeme Hizmeti Sağlayıcısı Kodu olduğunu ve istek başlığındaki x-tpp-code değeri ile aynı olduğunu kontrol eder. Farklı olması durumunda **”TR.OHVPS.Connection.InvalidTPP”** hatası dönülür.
- HHS, bireysel müşteri özelinde ileri tarihli ödeme hizmetini kendi kanallarında sunmuyor ise HHS'ye ileri tarihli bir ödeme emri rızası isteği yapması durumunda HHS tarafından **"TR.OHVPS.Business.IndividualCustomerNotSupported"** hatası , 
kurumsal müşteri özelinde ileri tarihli ödeme emri rızası isteği yapıldığında HHS tarafından **"TR.OHVPS.Business.CorporateCustomerNotSupported"** hatası dönülür.
- HHS; YÖS API ile alınan ÖBHS bilgilerinin içerisinde yer alan yönlendirme adresleri ile ileri tarihli ödeme emri rızası nesnesi request mesajında paylaşılan adreslerin uyumlu olup olmadığının kontrollerini yapar. (Zorunlu) Kontrollere istinaden hata oluşması durumunda **"TR.OHVPS.Business.TPPRedirectionAddressMismatch"** hatası dönülür. 
- HHS; kimlik bilgileri nesnesinde yer alan kimlik bilgisi ile ÖHK’nın HHS müşterisi olup olmadığının kontrollerini yapar. Bu kontrol hem bireysel hem de kurumsal ÖHK’lar için yapılmalıdır.  (Koşullu Zorunlu) Kontrollere istinaden hata oluşması durumunda **"TR.OHVPS.Business.CustomerNotFound"** hatası dönülür. 
- İleri Tarihli Ödeme Emri Başlatma Hizmeti rıza isteğinde bulunan ÖHK’nın “Açık Bankacılık Kanal Yetki” tanımı yok ise **"TR.OHVPS.Business.OpenBankingChannelClosed"** hatası dönülür. HHS insiyatifinde olup HHS bu kontrolü GKD sonrası gerçekleştirebilir.
- İleri tarihli ödeme emri rızasında alıcı hesap bilgileri Karekod ya da Kolas ile belirlenebilir. HHS online kanallarında ileri tarihli ödeme hizmetini Karekod ve Kolas aracılığı ile kabul ediyorsa, ÖHVPS servisleri ile de kabul etmek zorundadır. YÖS tarafından ileri tarihli ödeme emri rızası isteği içerisinde alıcı bilgisi için karekod ya da kolas kompleks alanları yer alması durumunda , destek vermeyen HHS'ler tarafından **TR.OHVPS.Business.RecipientAccountTypeNotSupported** hatası dönülür.
- HHS "gkd" nesnesi için alan kontrollerini gerçekleştirir. "yetYntm" = "A" gönderilmiş ise "ayrikGkd" nesnesinin dolu gönderilmesi zorunludur. Gönderilmemesi durumunda HHS tarafından **"TR.OHVPS.Resource.InvalidFormat"** hatası dönülür.
- Ayrık GKD desteklemeyen HHS'ye Ayrık GKD yöntemiyle rıza başlatma isteği yapılması durumunda HHS tarafından **"TR.OHVPS.Business.DecoupledAuthenticationNotSupported"** hatası dönülür. YÖS ilgili işlemi “Yönlendirmeli” akışa çekip süreci ilerletebilir. 
- Ayrık GKD ile başlatılan rıza akışlarında HHS, YÖS'ün AYRIK_GKD_BASARILI ve AYRIK_GKD_BASARISIZ olay tipleri için olay aboneliğinin varlığını kontrol eder. YÖS iki olay tipine de abone olmak zorundadır. Eğer olay aboneliği yoksa HHS tarafından **"TR.OHVPS.Business.EventSubscriptionNotFound"** hatası dönülür.
- Rıza başlatma akışı içerisinde kimlik bilgisinin, ÖHK'ya ait kimlik verisi(kmlk.kmlkVrs) ile ayrık GKD içerisinde yer alan OHK Tanım Değer alanı (ayrikGkd.ohkTanimDeger) birebir aynı olmalıdır. Aynı olmadığı durumda HHS tarafından **"TR.OHVPS.Business.CustomerInfoMismatch"** hatası dönülür. 
- HHS tarafında ÖHK'nın mobil uygulaması bulunmaması durumu tespit edilebildiği durumda Ayrık GKD ile başlatılan rıza akışlarında HHS tarafından **"TR.OHVPS.Business.CustomerMobileApplicationNotFound"** hatası dönülür. YÖS ilgili işlemi “Yönlendirmeli” akışa çekip süreci ilerletebilir. 
- HHS kimlik bilgisi ile gönderen ünvanının uyumlu olduğunu kontrol eder. HHS'ler EFT/FAST işlemlerinde kabul ettikleri kontrol kriterleri ile işleme izin verebilirler. (Zorunlu) Kontrollere istinaden hata oluşması durumunda **"TR.OHVPS.Business.IncorrectSenderTitle"** hatası dönülür. 
- Gönderen Hesap Numarası ÖBHS tarafından iletildiği durumda; 
  - IBAN’ın doğruluğu (kontrol basamağı doğrulaması) kontrol edilir. Kontrollere istinaden hata oluşması durumunda  **"TR.OHVPS.Business.InvalidAccount"** hatası dönülür. 
  - IBAN içerisindeki HHS kodunun istek başlığındaki HHS kodu ile aynı olduğu (hesabın HHS’ye aitliğinin kontrolü) kontrol edilir. Kontrollere istinaden hata oluşması durumunda  **"TR.OHVPS.Business.AccountCodeMismatch"** hatası dönülür.
  - Hesap numarasının ÖHK’ya ait olduğu kontrol edilir.Kontrollere istinaden hata oluşması durumunda  **"TR.OHVPS.Business.CustomerAccountMismatch"** hatası dönülür.
  - HHS’ye özel ödeme izni verilmeyen farklı statülerin bulunması durumu kontrol edilir. (İlgili hesabın para transfer işlemine yetkisi olmaması) Kontrollere istinaden hata oluşması durumunda  **"TR.OHVPS.Business.AccountUnauthorized"** hatası dönülür.
  - HHS’de gönderen hesabın aktifliği kontrol edilir. Kontrollere istinaden hata oluşması durumunda  **"TR.OHVPS.Business.AccountInactive"** hatası dönülür.
- Gönderen Hesap Numarası için, Hesap Referansı kullanılıyorsa Hesap Numarası kullanılmayabilir. Hesap referansı ile ileri tarihli ödeme emri rızası başlatılacak ise HHS hesap referansı değeri ile ilişkilendirilmiş mevcut bir hesap bilgisi rızası var mı kontrol etmelidir. Eğer aktif bir rızası yok ise **"TR.OHVPS.Business.ActiveConsentNotFound"** hatası dönülür.
- Talimat tarihi, talimat verilen günün tarihinden minimum 1 gün sonrası, maksimum ise 1 yıl sonrası olacak şekilde seçilebilir. Belirtilen tarih aralığı dışında ÖBHS tarafından talimat tarihi iletilmesi durumunda HHS tarafından **"TR.OHVPS.Business.InvalidOrderDateRange"** hatası dönülür.
- Talimati tarih bilgisi için ödeme gününün iş gününe gelmediği ve HHS'nin FAST/Havale ile anlık ödeme başlatamadığı durumda,  HHS tarafıdan **"TR.OHVPS.Business.OrderDateNotWorkDay"** hata mesajı ile işlemi kesmelidir. YÖS, ÖHK'ya tarih bilgisini güncelletebilir ya da kendisi otomatik atama yapabilir. Sonrasında tekrar rıza talebinde bulunmalıdır.
- Alıcı ve gönderen hesabın aynı olması durumunda **“TR.OHVPS.Business.SenderRecipientSame”** hatası dönmesi beklenmektedir. Bu hata HHS insiyatifindedir.
-	Müşterinin kendi hesapları arasında talimat veremeyeceği durumların kontrolü için **“TR.OHVPS.Business.SameAccountTransferRestricted”** hatası dönmesi beklenmektedir. Bu hata HHS insiyatifindedir.


Yukarıdaki kontroller tamamlandıktan sonra HHS, ödeme için benzersiz “RizaNo” ile “IleriTarihliOdemeEmriRizasi” nesnesi oluşturur ve ÖBHS’ye döner.

HHS, IleriTarihliOdemeEmriRizasi oluşturduğu anda durumunu “Yetki Bekleniyor” olarak düzenler. 
 
Hesap bakiye kontrolünün rıza aşamasında yapılmaması gerekmektedir. Çünkü ÖHK ileri tarihli ödeme emri gerçekleşene kadar hesabına para eklemesi yapabilir.   

#### **BAŞARILI İSTEK:**

**Tablo : “IleriTarihliOdemeEmriRizasiIstegi” nesnesi**  

| Alan Adı | JSON Alan Adı |Format: Veri modeli İsmi  |Zorunlu / Koşullu / İsteğe bağlı |Açıklama |HHS tarafından ileri tarihli ödeme emri rızası oluşturulması sırasında yapılması gereken kontrol ve işlemler |
| --- |--- |--- |--- |--- |--- |
| **Katılımcı Bilgisi** | katilimciBlg | Kompleks:KatilimciBilgisi | Z | Katılımcılara atanmış kod bilgileridir. | |
| **>Hesap Hizmeti Sağlayıcısı Kodu** | hhsKod  | AN4  | Z  |  İsteğin iletildiği Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu) | HHS, hhsKod’un kendisine ait olduğunu ve istek başlığındaki x-aspsp-code değeri ile aynı olduğunu kontrol eder. |
| **> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu** | yosKod		  | AN4  | Z  | İsteği gönderen Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.  | HHS, yosKod’un geçerli bir Ödeme Hizmeti Sağlayıcısı Kodu olduğunu ve istek başlığındaki x-tpp-code değeri ile aynı olduğunu kontrol eder. |
| **GKD** | gkd  |  Kompleks:Gkd | Z   |   |  |
| **> Yetkilendirme Yöntemi**	| yetYntm  | AN1  |  İ | **TR.OHVPS.DataCode.GkdTur** sıralı veri türü değerlerinden birini alır. Yetkilendirme yöntemi, ÖBHS tarafından belirtilmeyebilir.  | HHS, HBHS’nin belirlediği yöntemi dikkate alarak süreci ilgili akışa uygun olarak devam ettirir. Desteklemediği yöntem için (örn: Ayrık GKD) ayrıca hata mesajı verilmelidir. |
| **> Yönlenme Adresi** | yonAdr  |  AN1..1024 | K  | Yönlendirmeli güçlü kimlik doğrulama için zorunlu.<br> YÖS’ün ileteceği adrestir.<br> Durum kodu(drmKod), yönlendirme adresine parametre olarak eklenmelidir.| HHS, müşteri uygulama / tarayıcısını bu alanda belirtilen adrese yönlendirir. |
| **> Ayrık GKD**	| ayrikGkd  | Kompleks:AyrikGkd  | K   | Ayrık güçlü kimlik doğrulama için zorunlu.  | yetYntm = A gönderilmiş ise ayrikGkd nesnesinin dolu gönderilmesi zorunludur. <br><br> HHS, YÖS'ün AYRIK_GKD_BASARILI ve AYRIK_GKD_BASARISIZ olay tipleri için olay aboneliğinin varlığını kontrol eder. [Bknz: Ayrık GKD](gkd.html#_5-2-ayr%C4%B1k-guclu-kimlik-dogrulama)  |
| **>> OHK Tanım Tip**	| ohkTanimTip  | AN8  | K   | ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım tipleridir. **TR.OHVPS.DataCode.ohkTanimTip** sıralı veri tiplerinden birini alır. |  |
| **>> OHK Tanım Değer**	| ohkTanimDeger  | AN1..30  | K   |ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım değeridir. ohkTanimTip'i ile uyumlu değerdir.|  |
| **Ödeme Başlatma** | odmBsltm  | Kompleks: OdemeBaslatma  | Z   |   |  |
| **> Kimlik** | kmlk  | Kompleks:Kimlik  | Z   |   |  |
| **>> Kimlik Türü** | kmlkTur  | AN1| Z | **TR.OHVPS.DataCode.KimlikTur** sıralı veri türü değerlerinden birini alır.| Çerçeve sözleşme kapsamındaki ödemelerde kullanımı zorunludur.<br>HHS geçerli bir Kimlik Numarası Türü olduğunu kontrol eder.<br>Kurum adına yapılan (ticari) ödemelerde, kurum adına işlem yapan kullanıcının kimlik türünün bu alanda gönderilmesi zorunludur. |
| **>> Kimlik Verisi** | kmlkVrs   | AN1..30 |Z  | HHS nezdinde kullanıcı doğrulamasında kullanılan tanımlayıcıdır.<br>**TR.OHVPS.DataCode.KimlikTur** değerine göre uzunluk ve formatı değişir.| Çerçeve sözleşme kapsamındaki ödemelerde kullanımı zorunludur.<br>HHS, ÖBHS tarafından iletilmesi durumunda Kimlik Verisi üzeriden çapraz kontroller uygulamalı ve Kimlik Verisini temel alarak GKD gerçekleştirmelidir.<br> Pasaport numarasına ilişkin kontroller HHS'nin halihazırda kullandığı veri, akış ve tabi olduğu diğer düzenlemelerdeki işleyiş ile aynı şekilde ele alınmalıdır.<br> Kurum adına yapılan (ticari) ödemelerde, kurum adına işlem yapan kullanıcının kimlik türünün bu alanda gönderilmesi zorunludur. |
| **>> Kurum Kimlik Türü** | krmKmlkTur   |   AN1 |Z  | Kurum adına yapılan ödemelerde ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik türüdür.<br>**TR.OHVPS.DataCode.KurumKimlikTur** sıralı veri türü değerlerinden birini alır.  | Kurum adına yapılan (ticari) ödemelerde kullanımı zorunludur.<br> HHS geçerli bir Kurum Kimlik Numarası Türü olduğunu kontrol eder. |
| **>> Kurum Kimlik Verisi**	| krmKmlkVrs |  AN1..30  |Z  | Kurum adına yapılan ödemelerde ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik verisidir.<br> **TR.OHVPS.DataCode.KurumKimlikTur** değerine göre uzunluk ve formatı değişir.  |Kurum adına yapılan (ticari) ödemelerde kullanımı zorunludur.<br> HHS, ÖBHS tarafından iletilmesi durumunda Kurum Kimlik Verisi üzeriden çapraz kontroller uygulamalıdır. |
| **>> Ödeme Hizmeti Kullanıcısı Türü** |  ohkTur  | AN1   | Z |**TR.OHVPS.DataCode.OhkTur** sıralı veri türü değerlerinden birini alır **(B: Bireysel, K:Kurumsal)**| Kurum adına yapılan ödemelerde K değerini alır. Kurum Kimlik Türü ve Kurum Kimlik Verisi alanlarının girilmiş olduğu çapraz olarak kontrol edilir. |
| **> İşlem Tutarı** |  islTtr  | Kompleks:Tutar   | Z |   |  |
| **>> Para Birimi** 	| prBrm   |  AN3  | Z | Para Birimi.<br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **53: (Para Birimi)** alanında tanımlı Para Birimi verisi kullanılır.  | HHS geçerli bir para birimi olduğu kontrol eder. |
| **>> Tutar**  | ttr   | AN1..24   | Z |  ÖBHS'nin ön yüzde kullanıcıdan teyit aldığı tutar. <br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **54: (Tutar)** alanında tanımlı Tutar verisi kullanılır. <br> Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$'|  |
| **> Gönderen** | gon   |  Kompleks:Hesap  | Z |   |  |
| **>> Ünvan**	| unv   | AN3..140  | Z | Gönderenin ünvanıdır.<br> HHS, bu bilgiyi ÖBHS sisteminden gelen veri yerine FAST’a iletirken kendi sisteminden alabilir.<br> |HHS’nin bu veri ile kendi sistemlerindeki verinin farklı olması ve Kimlik Numarası ile eşleşmemesi durumunda ileri tarihli ödeme emri başlatma isteği reddedilir.<br> ÖBHS verisi ile HHS verisinin farklılaşması durumunun ise risk değerlendirme sistemlerine girdi olarak kullanması tavsiye edilir.|
| **>> Hesap Numarası** |  hspNo  |  AN26  | İ | ÖBHS'nin ön yüzünden daha önce kayıt altına alınmış hesaplar arasından seçtirdiği veya müşteriye girdiği IBAN’dır.<br> ÖBHS tarafından iletilmediği durumda, gönderen hesap bilgisini müşteri tarafından HHS’nin dijital kanalında GKD sonrasında seçilebilir. Bu amaçla ÖBHS arayüzünde HHS seçtirilmelidir.<br> Hesap Referansı kullanılıyorsa Hesap Numarası kullanılmayabilir. Hesap referansı ile ileri tarihli ödeme emri rızası başlatılacak ise HHS hesap referansı değeri ile ilişkilendirilmiş mevcut bir hesap bilgisi rızası var mı kontrol etmelidir. <br> Ödeme Sistemine doğrudan katılımcı olmayan ÖHS'ler müşterilerine IBAN sunmadıkları için hspRef üzerinden ödeme başlatabilirler. Bu durumda hesap numarası boş olacaktır. | ÖBHS tarafından iletildiği durumda; IBAN içerisindeki HHS kodunun istek başlığındaki HHS kodu ile aynı olduğu (hesabın HHS’ye aitliğinin kontrolü), IBAN’ın doğruluğu (kontrol basamağı doğrulaması), Hesap numarasının ÖHK’ya ait olduğu, HHS’ye özel ödeme izni verilmeyen farklı statülerin bulunması durumu kontrol edilir. |
|**>> Hesap Referansı** | hspRef   |  AN5..40  | İ | HHS tarafından hesap için atanan biricik tanımlıyıcıdır (uuid).<br>YÖS bazında farklılaşması gerekmez.<br> ÖBHS’nin aynı zamanda HBHS olduğu durumda müşteri rızası tesis edilmiş bir hesabın referansı üzerinden de ödeme başaltılabilir.<br> Hesap Numarası kullanılıyorsa Hesap Referansı kullanılmayabilir. <br> Ödeme Sistemine doğrudan katılımcı olmayan HHS'ler müşterilerine IBAN sunmadıkları için hspRef üzerinden ödeme başlatabilirler. Bu durumda hesap numarası boş olacaktır.   | HspRef'e bağlı IBAN değiştiğinde yeni IBAN'ın da ilgili HspRef ile ilişkilendirilmesi beklenmektedir. Bu durumda, HBHS, HspRef ile sorguya geldiğinde HHS'nin yeni IBAN ve hesap hareketlerini dönebilmesi mümkün olacaktır. HspRef’in, IBAN değiştiğinde değiştirilmemesi tavsiye edilmektedir.|
| **> Alıcı** |  alc  |  	Kompleks:Hesap  | Z |   |  |
| **>> Ünvan** | unv | AN3..140 | K  | **Kolay Adres Sistemi** kullanılmıyorsa zorunludur.<br> Alıcının ünvanıdır. ÖBHS ekranlarından girişi yapılabileceği gibi ÖBHS’nin kayıtlı alıcılarından yapılan seçimle de doldurup gönderebildiği bilgi olabilir.<br> FAST-TR Karekod Veri Organizasyonunda;<br> İşyeri tarafından sunulan uzun karekod yapısının **59:** alanında tanımlı İşyeri adı alanıdır, Kişiden Kişiye Ödeme Karekod Yapısının **07:** alanında tanımlı <br> **Ödeme Alıcısının Adı ve Soyadı** alanıdır. |  |
| **>> Hesap Numarası**	|hspNo | AN26 | K | **Alıcının Hesap Numarası (IBAN)** alanıdır.<br> **Kolay Adres Sistemi** kullanılmıyorsa zorunludur.<br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **30-01:** alanında tanımlı İş Yeri IBAN verisi kullanılır.<br> Alıcının birden fazla hesabının kullanılabilir olduğu durumlarda (özellikle işyeri ödemelerinde HHS nezdindeki hesap (on-us havale akışı) tercih edilmelidir. | HHS (Gönderen Katılımcı) tarafından IBAN doğrulaması (kontrol basamağı doğrulaması) yapılır.  |
| **>> Kolay Adres** | kolas   | Kompleks:Kolas  | K  | Talimatın gerçekleşeceği ana kadar KOLAS tanımınında değişiklik olabileceği için,  KOLAS ile yapılan ileri tarihli işlemler, talimatın verildiği anda çözülen IBAN'a yapılacaktır.   | Kolas ile ileri tarihli ödeme emri hizmeti desteklenmiyorsa; HHS tarafından hata dönülmelidir. |
| **>>> Kolas Türü**  |  kolasTur   |  AN1   | Z  |  **TR.OHVPS.DataCode.KolasTur** sıralı veri türü değerlerinden birini alır.<br> Alıcı Hesap Numarası girilmediyse kullanımı zorunludur ve **Kolay Adres Tipi** alanıyla birlikte kullanılır. | HHS (Gönderen FAST katılımcısı) tarafından KOLAS Servisine yapılan sorguda girdi olarak kullanılır. |
| **>>> Kolas Değeri**  |  kolasDgr   |  AN7..50   |  Z | Müşterinin eklediği, HHS (FAST katılımcısı) tarafından doğrulanmış Kolay Adres değeridir. Alabileceği değerler BKM “Kolay Adresleme Sistemi Uygulama Kuralları” belgesinde tanımlıdır.<br> Hesap Numarası girilmediyse kullanımı zorunludur ve **Kolay Adres Tipi** alanıyla birlikte kullanılır.  | HHS (Gönderen FAST katılımcısı) tarafından KOLAS Servisine yapılan sorguda girdi olarak kullanılır.  |
| **> Karekod**  | kkod | Kompleks:Karekod   |  	K   |  Karekod ile yapılan ileri tarihli işlemler, talimatın verildiği anda çözülen IBAN'a yapılacaktır.    |Karekod ile ileri tarihli ödeme emri hizmeti desteklenmiyorsa; HHS tarafından hata dönülmelidir.  |
| **>> Akış Türü** |   aksTur  |  AN2   |  Z | **TR.OHVPS.DataCode.KareKodAksTur** sıralı veri değerlerinden birini alır. Kolay Adresi Sistemi ile birlikte kullanılmaz.  |  |
| **>> Referansı** | kkodRef   | AN1..12    | K  |  **Karekod referans numarasını** gösterir.<br>Okunan karekodda referans değeri varsa kullanılması zorunludur.<br> Karekod ilke ve kurallar belgesinde tanımlandığı şekilde kullanılması gerekmektedir.<br> Kolay Adresi Sistemi ile birlikte kullanılmaz. |  |
| **>> Üretici Kodu**	  |  kkodUrtcKod   |   AN4  |Z   | Karekod üreticisinin kodu.<br> Ödeme Hizmeti Sağlayıcıları ve TCMB tarafından uygun görülen ödeme sistemi işleticisi TR Karekod üretebilmek için BKM’ye kayıt başvurusu yaparak karekod üretici kodu alabileceklerdir. Bankalar EFT kodlarını kullanacak olup ayrıca kayıt yaptırmalarına gerek bulunmamaktadır. 4 haneden kısa değerlerin sol tarafı ’0’ karakteri ile tamamlanmalıdır.  |  |
| **> Ödeme Ayrıntıları**	| odmAyr |  Kompleks: OdemeAyrintilari | Z  |   |  |
| **>> Ödeme Kaynağı** |odmKynk   |  AN1   |Z   |  Ödemenin başlatıldığı kaynağı belirtir. **TR.OHVPS.DataCode.OdemeKaynak** sıralı veri veri değerlerinden “O” değeri atanarak iletilmelidir. “O” değeri “Açık bankacılık aracılığı ile gönderilen ödemelerde kullanılır.” anlamını taşımaktadır.  | HHS, YÖS'ün API deseninde "O" kodunu ilettiğini kontrol eder. |
| **>> Ödeme Amacı** |  odmAmc   |   AN2  | Z  |  **TR.OHVPS.DataCode.OdemeAmaci** sıralı veri değerlerinden birini alır. Karekod akışında, FAST Karekod Veri Organizasyonundaki 62-08: alanında tanımlı Ödeme Amacı verisi kullanılır. | HHS geçerli bir Ödeme Amacı kodu olduğunu kontrol eder. |
| **>> Referans Bilgisi**	|  refBlg   |  AN1..140   | K  |  Ödemeye özel **Referans Bilgisi** alanıdır. Karekod işlemi değil ise zorunludur.<br> -	Kişiden kişiye fon aktarımlarında: Gün içerisinde ÖHK özelinde, her işleme özel biricik olarak oluşturulan referans bilgisidir. <br>Karekod P2P akışı için referans bilgisi (Karekod referans numarası değil, işleme özel üretilecek referans bilgisidir.) YÖS tarafından atanacaktır. <br> -	E-ticaret işlemlerinde sipariş/takip numarası/müşteri/abone numarası<br> -	İşyeri Ödemesi Karekod akışında, FAST Karekod Veri Organizasyonundaki<br> -	62-01: alanında tanımlı Fatura Numarası <br> -	62-06: alanında tanımlı Müşteri Numarası <br> verilerinden biri kullanılır. | YÖS bu değeri ÖHK’yı HHS’ye yönlendirmeden önceki ekranda göstermeli, ve HHS bu değeri GKD için kullandığı önyüzünde “işlem doğrulama kodunun” bir unsuru olarak yine ÖHK’ya göstermelidir.  |
| **>> Açıklama**	|  odmAcklm   | AN1..200    | İ  | ÖBHS’nin ÖHK’dan aldığı ya da kendisinin atadığı işlem açıklaması bilgisi. <br>FAST/PÖS sistemi üzerinden yapılan ödemeler için açıklama bilgisi girilirse boşluk karakteri girilerek geçilemez. En az bir alfasayısal karakter girilmesi zorunludur.<br>  |  |
| **>> Talimat Tarihi**	|  tlmtTrh   | ISODate  | Z  | ÖHK tarafından talep edilen, ödeme gerçekleşme zamanıdır.| Talimat verilen günün tarihinden minimum 1 gün sonrası,maksimum ise 1 yıl sonrası olacak şekilde seçilebilir. |
  


#### **BAŞARILI YANIT:**  

POST işleminin RESPONSE gövdesini (BODY) oluşturan “IleriTarihliOdemeEmriRizasi” nesnesi Tablo’da parametrelerden oluşur:  


**Tablo : “IleriTarihliOdemeEmriRizasi” nesnesi**  


| Alan Adı | JSON Alan Adı |Format: Veri modeli İsmi  |Zorunlu / Koşullu / İsteğe bağlı |Açıklama |
| --- |--- |--- |--- |--- |
|  **Riza Bilgileri**	| rzBlg | Kompleks: RizaBilgileri | Z |  |
| **> Rıza No**|rizaNo  | 	AN1..128 | Z  | IleriTarihliOdemeEmriRızasi nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı |
| **> Oluşturma Zamanı** | olusZmn | ISODateTime | Z | IleriTarihliOdemeEmriRizasi nesnesinin oluşturulma zamanı |
| **> Güncellenme Zamanı** | gnclZmn | ISODateTime |  Z | IleriTarihliOdemeEmriRizasi nesnesinin güncellenme zamanı |
| **> Rıza Durumu** | rizaDrm | AN1 |  Z | **TR.OHVPS.DataCode.RizaDurumu** sıralı veri tipini değerlerinden birini alır. |
| **> Rıza Iptal Detay Kodu**| rizaIptDtyKod | AN2 | K  | **Rıza durumunun iptal olduğu durumda zorunludur. Alabileceği değerler 4. Bölümde detaylandırılmıştır.** |
| **Katılımcı Bilgisi** | katilimciBlg | Kompleks:KatilimciBilgisi | Z | Katılımcılara atanmış kod bilgileridir. |  
| **>Hesap Hizmeti Sağlayıcısı Kodu** | hhsKod  | AN4  | Z  |  İsteğin iletildiği Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu) | 
| **> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu** | yosKod		  | AN4  | Z  | İsteği gönderen Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.  | 
| **GKD** | gkd  |  Kompleks:Gkd | Z   |   |  
| **> Yetkilendirme Yöntemi**	| yetYntm  | AN1  |  Z | **TR.OHVPS.DataCode.GkdTur** sıralı veri türü değerlerinden birini alır.  HHS, ÖBHS’nin belirlediği yöntemi dikkate alarak kendi belirlediği yöntemi kullanır.  |  
| **> Yönlenme Adresi** | yonAdr  |  AN1..1024 | K  | Yönlendirmeli güçlü kimlik doğrulama için zorunlu. HHS, müşteri uygulama / tarayıcısını yönlendirmeli akışta bu alanda belirtilen YÖS adresine yönlendirir.
| **> Ayrık GKD**	| ayrikGkd  | Kompleks:AyrikGkd  | K   | Ayrık güçlü kimlik doğrulama için zorunlu.  | yetYntm = A gönderilmiş ise ayrikGkd nesnesinin dolu gönderilmesi zorunludur. yetYntm = Y için bu nesne iletilmemelidir. |
| **>> OHK Tanım Tip**	| ohkTanimTip  | AN8  | K   | ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım tipleridir. İstek içerisindeki veri değiştirilmeden iletilir. |  
| **>> OHK Tanım Değer**	| ohkTanimDeger  | AN1..30  | K   |ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım değeridir. ohkTanimTip'i ile uyumlu değerdir.  İstek içerisindeki veri değiştirilmeden iletilir.|  
| **> HHS Yönlenme Adresi**	| hhsYonAdr  |  AN1..1024 | K  | Yönlendirmeli akış türünde GKD doğrulama bilgilerinin girilebilmesi için uygulamadan açılacak yönlendirme sayfasının adresi. Ayrık GKD akışında bu alan dönülmemelidir.
| **> Yetkilendirme Tamamlanma Zamanı**	| yetTmmZmn  |  ISODateTime | Z  | Yetkilendirme akışının tamamlanması gereken son zamanı gösterir. <br> HHS tarafından maksimum 5 dk içinde işlem tamamlanacak şekil zaman damgası oluşturulur. Zaman aşımı olduğunda HHS’nin GKD’ye izin vermeyecek şekilde hata mesajı vermesi gerekmektedir.<br> Rıza durumu Yetkilendirildi statüsüne geçene kadarki süredir.|
| **Ödeme Başlatma** | odmBsltm  | Kompleks: OdemeBaslatma  | Z   |   |  
| **> Kimlik** | kmlk  | Kompleks:Kimlik  | Z   |   |  
| **>> Kimlik Türü** | kmlkTur  | AN1| Z | **TR.OHVPS.DataCode.KimlikTur** sıralı veri türü değerlerinden birini alır.| 
| **>> Kimlik Verisi** | kmlkVrs   | AN1..30 |Z  | HHS nezdinde kullanıcı doğrulamasında kullanılan tanımlayıcıdır.<br>**TR.OHVPS.DataCode.KimlikTur** değerine göre uzunluk ve formatı değişir.| 
| **>> Kurum Kimlik Türü** | krmKmlkTur   |   AN1 |Z  | Kurum adına yapılan ödemelerde ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik türüdür.<br>**TR.OHVPS.DataCode.KurumKimlikTur** sıralı veri türü değerlerinden birini alır.  | 
| **>> Kurum Kimlik Verisi**	| krmKmlkVrs |  AN1..30  |Z  | Kurum adına yapılan ödemelerde ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik verisidir.<br> **TR.OHVPS.DataCode.KurumKimlikTur** değerine göre uzunluk ve formatı değişir.  |
| **>> Ödeme Hizmeti Kullanıcısı Türü** |ohkTur| AN1| Z |**TR.OHVPS.DataCode.OhkTur** sıralı veri türü değerlerinden birini alır **(B: Bireysel, K:Kurumsal)**| 
| **> İşlem Tutarı** |  islTtr  | Kompleks:Tutar   | Z |   |  
| **>> Para Birimi** 	| prBrm   |  AN3  | Z | Para Birimi.<br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **53: (Para Birimi)** alanında tanımlı Para Birimi verisi kullanılır. |  
| **>> Tutar**  | ttr   | AN1..24   | Z |  ÖBHS'nin ön yüzde kullanıcıdan teyit aldığı tutar. <br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **54: (Tutar)** alanında tanımlı Tutar verisi kullanılır. <br> Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$' |
| **> Gönderen** | gon   |  Kompleks:Hesap  | Z |   |
| **>> Ünvan**	| unv   | AN3..140  | Z  | Gönderenin ünvanıdır.<br> HHS, bu bilgiyi ÖBHS sisteminden gelen veri yerine FAST’a iletirken kendi sisteminden alabilir. <br> Tek seferlik ödeme dışında YÖS'ün gönderen ünvanını göndermesi zorunludur.|
| **>> Hesap Numarası** |  hspNo  |  AN26  | İ | ÖBHS'nin ön yüzünden daha önce kayıt altına alınmış hesaplar arasından seçtirdiği veya müşteriye girdiği IBAN’dır.<br> ÖBHS tarafından iletilmediği durumda, gönderen hesap bilgisini müşteri tarafından HHS’nin dijital kanalında GKD sonrasında seçilebilir. Bu amaçla ÖBHS arayüzünde HHS seçtirilmelidir.<br> **GKD sonrası HHS ekranında seçilen Hesap Numarası POST işleminin yanıtında dönülemez ancak isteğe bağlı GET sorgusu ile dönülebilir.** <br> Hesap Referansı kullanılıyorsa Hesap Numarası kullanılmayabilir. <br> Ödeme Sistemine doğrudan katılımcı olmayan ÖHS'ler müşterilerine IBAN sunmadıkları için hspRef üzerinden ödeme başlatabilirler. Bu durumda hesap numarası boş olacaktır.  |
|**>> Hesap Referansı** | hspRef |  AN5..40  | İ | HHS tarafından hesap için atanan biricik tanımlıyıcıdır (uuid).<br>YÖS bazında farklılaşması gerekmez.<br> ÖBHS’nin aynı zamanda HBHS olduğu durumda müşteri rızası tesis edilmiş bir hesabın referansı üzerinden de ödeme başaltılabilir.<br> **GKD sonrası HHS ekranında seçilen Hesap Referansı POST işleminin yanıtında dönülemez ancak isteğe bağlı GET sorgusu ile dönülebilir.** <br> Hesap Numarası kullanılıyorsa Hesap Referansı kullanılmayabilir.  <br> Ödeme Sistemine doğrudan katılımcı olmayan ÖHS'ler müşterilerine IBAN sunmadıkları için hspRef üzerinden ödeme başlatabilirler. Bu durumda hesap numarası boş olacaktır.  |
| **> Alıcı** |  alc  |  	Kompleks:Hesap  | Z | |
| **>> Ünvan** | unv | AN3..140 | Z  | Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen adres kaydı yaptırmış olan alıcının maskeli ad-soyadı veya maskeli ticari ünvan bilgisidir.<br>Kolas’tan dönen “account owner” alanı kullanılmalıdır.<br>Kolay adres değil ise ÖBHS tarafından istek mesajında iletilen ünvan bilgisidir. |
| **>> Hesap Numarası**	|hspNo | AN26 | Z | ÖBHS tarafından istek mesajında iletilip doğrulanan veya Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen alıcı maskeli IBAN bilgisidir. |
| **>> Kolay Adres** | kolas   | Kompleks:Kolas  | K  |  |
| **>>> Kolas Türü**  |  kolasTur   |  AN1   | Z  |  **TR.OHVPS.DataCode.KolasTur** sıralı veri türü değerlerinden birini alır.<br> Alıcı Hesap Numarası girilmediyse kullanımı zorunludur ve **Kolay Adres Tipi** alanıyla birlikte kullanılır. |  
| **>>> Kolas Değeri**  |  kolasDgr   |  AN7..50   |  Z | Müşterinin eklediği, HHS (FAST katılımcısı) tarafından doğrulanmış Kolay Adres değeridir. Alabileceği değerler BKM “Kolay Adresleme Sistemi Uygulama Kuralları” belgesinde tanımlıdır.<br> Hesap Numarası girilmediyse kullanımı zorunludur ve **Kolay Adres Tipi** alanıyla birlikte kullanılır.  |  
| **>>> Kolas Referans Numarası**  |  kolasRefNo   |  N12   |  Z | Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen, BKM Kolay Adresleme Sistemi Uygulama Kuralları’nda tanımlı KOLAS tarafından ilgili sorguya özel olarak üretilmiş referans numarasıdır.|  
| **>>> Kolas Hesap Türü**  |  kolasHspTur   |  AN1   |  Z |Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen, BKM Kolay Adresleme Sistemi Uygulama Kuralları’nda tanımlı hesap türü bilgisidir:<br> **TR.OHVPS.DataCode.KolasHspTur** sıralı veri değerlerinden birini alır.|  
| **> Karekod**  | kkod | Kompleks:Karekod   |  	K   |  |
| **>> Akış Türü** |   aksTur  |  AN2   |  Z | **TR.OHVPS.DataCode.KareKodAksTur** sıralı veri değerlerinden birini alır. Kolay Adresi Sistemi ile birlikte kullanılmaz. |
| **>> Referansı** | kkodRef   | AN1..12    | K  |  **Karekod referans numarasını** gösterir. |
| **>> Üretici Kodu**	  |  kkodUrtcKod   |   AN4  |Z   | Karekod üreticisinin kodu.<br> Ödeme Hizmeti Sağlayıcıları ve TCMB tarafından uygun görülen ödeme sistemi işleticisi TR Karekod üretebilmek için BKM’ye kayıt başvurusu yaparak karekod üretici kodu alabileceklerdir. Bankalar EFT kodlarını kullanacak olup ayrıca kayıt yaptırmalarına gerek bulunmamaktadır. 4 haneden kısa değerlerin sol tarafı ’0’ karakteri ile tamamlanmalıdır.|
| **> Ödeme Ayrıntıları**	| odmAyr |  Kompleks: OdemeAyrintilari | Z    |  |
| **>> Ödeme Kaynağı** |odmKynk   |  AN1   |Z   |  Ödemenin başlatıldığı kaynağı belirtir. **TR.OHVPS.DataCode.OdemeKaynak** sıralı veri değerlerinden “O” değerini alır. “O” değeri “Açık bankacılık aracılığı ile gönderilen ödemelerde kullanılır.” anlamını taşımaktadır.  |  
| **>> Ödeme Amacı** |  odmAmc   |   AN2  | Z  |  **TR.OHVPS.DataCode.OdemeAmaci** sıralı veri değerlerinden birini alır. Karekod akışında, FAST Karekod Veri Organizasyonundaki 62-08: alanında tanımlı Ödeme Amacı verisi kullanılır. |  
| **>> Referans Bilgisi**	|  refBlg   |  AN1..140   | K  |  Ödemeye özel **Referans Bilgisi** alanıdır. Karekod işlemi değil ise zorunludur.<br> -	Kişiden kişiye fon aktarımlarda: Gün içerisinde ÖHK özelinde, her işleme özel biricik olarak oluşturulan referans bilgisidir.<br> Karekod P2P akışı için referans bilgisi (Karekod referans numarası değil, işleme özel üretilecek referans bilgisidir.) YÖS tarafından atanacaktır.<br> -	E-ticaret işlemlerinde sipariş/takip numarası/müşteri/abone numarası<br> - İşyeri Ödemesi Karekod akışında, FAST Karekod Veri Organizasyonundaki<br> -	62-01: alanında tanımlı Fatura Numarası <br> -	62-06: alanında tanımlı Müşteri Numarası <br> verilerinden biri kullanılır. |  
| **>> Açıklama**	|  odmAcklm   | AN1..200    | İ  | ÖBHS’nin ÖHK’dan aldığı ya da kendisinin atadığı işlem açıklaması bilgisi. <br>FAST/PÖS sistemi üzerinden yapılan ödemeler için açıklama bilgisi girilirse boşluk karakteri girilerek geçilemez. En az bir alfasayısal karakter girilmesi zorunludur.|
| **>> ÖHK Mesaj Alanı**	|  ohkMsj   | AN1..200    | İ  | HHS’nin ÖHK’ya göstermek üzere ilettiği mesaj.|
| **>> Talimat Tarihi**	|  tlmtTrh   | ISODate  | Z  | ÖHK tarafından talep edilen, ödeme gerçekleşme zamanıdır. Talimat verilen günün tarihinden minimum 1 gün sonrası,maksimum ise 1 yıl sonrası olacak şekilde seçilebilir. Belirtilen tarih aralığı dışında ÖBHS tarafından talimat tarihi iletilmesi durumunda HHS tarafından **TR.OHVPS.Business.InvalidOrderDateRange** hatası verilmelidir.| |


  

## 7.3.	ADIM 2- İleri Tarihli Ödeme Emri Rızasının Yetkilendirilmesi

<img src="./images/IleriTarihliOdemeEmriRizasininYetkilendirilmesi.png" width="75%" >  

**Şekil : İleri Tarihli Ödeme Emri Rızasının Yetkilendirilmesi**  

ÖBHS, ÖHK’nın ileri tarihli ödeme emrini yetkilendirmesi isteğini iletir. Ödeme emrinin yetkilendirilmesi, HHS tarafından gerçekleştirilen Yönlendirme veya Ayrık GKD yöntemiyle yapılır.
- **Yönlendirmeli doğrulama akışında**, ÖBHS ÖHK’yı HHS’ye yönlendirir. 
  - ÖBHS tarafından yönlendirme, bir önceki adımdaki RizaNo’yu içerir. 
  - Yönlendirmenin RizaNo’yu içermesi sayesinde, HHS hangi ödeme emriyle ilişkili olarak yönlendirme yapıldığını ilişkilendirebilir.
  -	HHS, ÖHK için GKD sürecini işletir.  

  ÖHK’yı doğrularsa,
    1. 	ÖHK -bir önceki adımda seçmediyse- borçlu hesabını seçer. 
    2. 	HHS, ileri tarihli ödeme emri rıza kaynağının durumunu “Yetkilendirildi” olarak günceller. 
    3. HHS, ÖHK’yı “olumlu yönlendirme akışı” ile ÖBHS tarafından tanımlanan yönlendirme adresine yönlendirir:  

```
yonAdr?rizaDrm=Y&yetKod=xx&rizaNo=yy&rizaTip=I&drmKod=zzz
```  

  ÖHK’yı doğrulayamazsa,  
    1. HHS, ileri tarihli ödeme emri rıza kaynağının durumunu “Yetki İptal” olarak günceller.   
    2. HHS, ÖHK’yı “olumsuz yönlendirme akışı” ile ÖBHS tarafından tanımlanan yönlendirme adresine yönlendirir:  
    


```
yonAdr?rizaDrm=I&rizaNo=yy&rizaTip=I&drmKod=zzz
```  

HHS tarafında oluşabilecek bir hata durumunun YÖS’e aktarılması gerektiği durumlar olabilir. Bu durumda yonlendirme adresinde hata kodu parametresi zorunlu olarak iletilmelidir.  
Hata açıklamalarının neler olabileceği ve YÖS’ün kendi uygulamasında bu hatayı ne şekilde göstereceği aşağıda tariflenmiştir. 

```
yonAdr?rizaDrm=I&rizaNo=yy&rizaTip=I&rizaIptDtyKod=11&drmKod=zzz
```  


URL’de iletilen “Rıza İptal Detay Kodu” Rıza durumları bölümünde (4. Bölüm) belirtilen hata kodları ile aynı olacak şekilde tasarlanmıştır. GKD sırasında yapılması gereken kontroller 5.3 bölümünde detaylandırılmıştır.


- **Ayrık doğrulama akışında**, HHS, ÖHK’nın ileri tarihli ödeme emri rızasını başlattığı uygulamadan farklı olabilecek bir “doğrulama” uygulamasında işlemi doğrulamasını ister. 
  - Ayrık akış ÖBHS’nin farklı bir kanal kullanarak yetkilendirme isteği göndermesiyle başlatılır. 
  - Bu yetkilendirme isteği, yetkilendirilecek ödeme emri rızasının eşleştirileceği ÖHK’nın bulunması için ilgili veriyi taşır. 
  - HHS, ÖHK’yı doğrular.
  - ÖHK, bir önceki adımda seçmediyse- borçlandırılacak hesabını seçer. 
  - HHS, ileri tarihli ödeme emri rıza kaynağının durumunu “Yetkilendirildi” olarak günceller. 

Başarılı GKD sonrasında (rizaDrm=’Y’) ilgili rıza nesnesi için (belirli bir rizaNo) yetkilendirme kodunun (yetKod) alınmasının ardından erişim belirteci erişim adresine POST çağrısı yapılarak yetkilendirme kodu karşılığında erişim belirteci ve yenileme belirteci alınır. POST /erişim-belirteci erişim noktası EK-3’te açıklanmıştır.  

Erişim belirteci alındıktan sonra; HHS, ileri tarihli ödeme emri rıza kaynağının durumunu “Yetki Kullanıldı” olarak günceller.

## 7.4.	ADIM 2.1 – İleri Tarihli Ödeme Emri Rızasının Sorgulanması (isteğe bağlı)

<img src="./images/IleriTarihliOdemeEmriRizasininSorgulanmasi.png" width="75%" >  

**Şekil 7: “IleriTarihliOdemeEmriRizasi” nesnesinin sorgulanması (isteğe bağlı)**  

GKD işleminin başarıyla tamamlanıp İleri Tarihli Ödeme Emri Rızasının yetkilendirilmesi esnasında, gönderen hesap seçiminin HHS ekranında yapıldığı durumlar olabilir. Bu durumlarda ileri tarihli ödeme emri isteğinde gönderen hesap bilgileri alanının zorunlu olması nedeniyle, **IleriTarihliOdemeEmriRizasi** nesnesi sorgulanarak gönderen hesap bilgileri (hesap numarası ve/veya hesap referansı) alınmalıdır. HHS, “**ADIM 2 -Ileri Tarihli Ödeme Emri Rızasının Yetkilendirilmesi**” akışında ÖHK’nın hesapları arasında seçim yapmasını ve seçilen hesap bilgisinin **IleriTarihliOdemeEmriRizasi** nesnesine işler.  

- Sorgulama yapılan İleri Tarihli Ödeme Emri HHS tarafında bulunmuyor ise **"TR.OHVPS.Resource.NotFound"** hatası dönülür.   

**GET /ileri-tarihli-odeme-emri-rizasi/{RizaNo}**  

ÖBHS, mevcut durumunu kontrol etmek için, oluşturulan bir **IleriTarihliOdemeEmriRizasi** kaynağının durumunu isteğe bağlı olarak alabilir.

**Durum**  

**IleriTarihliOdemeEmriRizasi** kaynağı için kullanılabilecek durum göstergeleri şu şekildedir:
- Yetki Bekleniyor
- Yetkilendirildi
- Yetki Kullanıldı
- Yetki Ödeme Emrine/Talimata Dönüştü
- Yetki Sonlandırıldı
- Yetki İptal

İleri Tarihli Ödeme emri rıza durum değişiklikleri 4.2 bölümünde detaylandırılmıştır.  

**BAŞARILI YANIT:**

**GET /ileri-tarihli-odeme-emri-rizasi/{rizaNo}** yanıtının (RESPONSE) gövdesinde (BODY)  “IleriTarihliOdemeEmriRizasiİstegi” nesnesi kullanılır. İstek başarıyla sonuçlanırsa HHS kaynak sunucusunda “IleriTarihliOdemeEmriRizasi” nesnesi oluşturulur.  

Gönderen Hesap Bilgisinin, ADIM 2 (İleri Tarihli Ödeme Emri Rızasının Yetkilendirilmesi) sonrasında HHS ekranından seçildiği akışta “IleriTarihliOdemeEmriRizasi” nesnesi güncellenir ve ÖBHS **GET /ileri-tarihli-odeme-emri-rizasi/{rizaNo}** isteği yaparak güncel gönderen hesap bilgisi bilgisini de içeren “IleriTarihliOdemeEmriRizasi” nesnesini çekmelidir.
 

## 7.5.	ADIM 3- İleri Tarihli Ödeme Emrinin Oluşturulması

<img src="./images/IleriTarihliOdemeEmrininOlusturulmasi.png" width="75%" >  

**Şekil 8: İleri Tarihli Ödeme Emrinin Oluşturulması**  

**POST /ileri-tarihli-odeme-emri**

ÖHK’nın Güçlü Kimlik Doğrulama ile işlemi yetkilendirmesi sonrasında, ÖBHS OdemeEmri kaynağını oluşturur. 

İleri Tarihli Ödeme emri (IleriTarihliOdemeEmri) uygun ödeme kaynağına POST isteği yapılarak başlatılır. 

- Erişim Belirteci kontrolü yapılır. Geçerli bir Erişim Belirteci yok ise **"TR.OHVPS.Connection.InvalidToken"** hatası dönülür. 
- HHS; istek mesajında yer alan alanların ÖHVPS API İlke ve Kuralları dökümanında belirtilen şartları sağlayacak şekilde zorunluluk, uzunluk ve içerik kontrollerini yapar. (Zorunlu) Kontrollere istinaden hata oluşması durumunda **"TR.OHVPS.Resource.InvalidFormat"** hatası dönülür.
-	HHS, hhsKod’un kendisine ait olduğunu ve istek başlığındaki x-aspsp-code değeri ile aynı olduğunu kontrol eder. Farklı olması durumunda **”TR.OHVPS.Connection.InvalidASPSP”** hatası dönülür.
- HHS, yosKod’un geçerli bir Ödeme Hizmeti Sağlayıcısı Kodu olduğunu ve istek başlığındaki x-tpp-code değeri ile aynı olduğunu kontrol eder. Farklı olması durumunda **”TR.OHVPS.Connection.InvalidTPP”** hatası dönülür.
- Rıza durumu kontrol edilir. 
  - B: Yetki Bekleniyor, Y: Yetkilendirildi  ya da E: Yetki Ödeme Emrine Dönüştü ise **“TR.OHVPS.Resource.ConsentMismatch”** hatası dönülür. 
  - I: Rıza İptal ya da S: Yetki Sonlandırıldı ise **”TR.OHVPS.Resource.ConsentRevoked”** hatası dönülür.
  - RizaDurumu “K: Yetki Kullanıldı” ise kontrollere devam edilir.
- POST /ileri-tarihli-odeme-emri-rizasi ile POST /ileri-tarihli-odeme-emri isteklerinde istek alanların aynı olması beklenmektedir. HHS tarafından kontrolü sağlanmalıdır. İleri Tarihli Ödeme Emri rızasında gönderilen değerlerden farklı bir değer gönderildiği durumda **“TR.OHVPS.Business.FieldMismatch”** hatası dönülür. 

Yukarıdaki kontroller tamamlandıktan sonra, içerisinde odmEmriNo ve odmDrm değişkenleri de bulunan IleriTarihliOdemeEmri nesnesi ÖBHS’ye döner ve RizaDurumu değişkenin değeri “Yetki Ödeme Emrine/Talimata Dönüştü” olarak güncellenir.
- POST verisindeki Gönderen Hesap Numarası ve Alıcı Hesap Numarasının aynı bankaya aitse HAVALE değilse FAST veya PÖS iş akışına geçilir.



**BAŞARILI İSTEK:**  


**Tablo 9: “IleriTarihliOdemeEmriIstegi” nesnesi**  


| Alan Adı | JSON Alan Adı |Format: Veri modeli İsmi  |Zorunlu / Koşullu / İsteğe bağlı |Açıklama |HHS tarafından ileri tarihli ödeme emri oluşturulması sırasında yapılması gereken kontrol ve işlemler|FAST A01 PÖS M01 mesaj mapping| 
| --- |--- |--- |--- |--- |--- |--- |
| **Riza Bilgileri**	| rzBlg | Kompleks: RizaBilgileri | Z |  | | |
| **> Rıza No**|rizaNo  | 	AN1..128 | Z  | OdemeEmriRızasi nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı | | |
| **> Oluşturma Zamanı** | olusZmn | ISODateTime | Z | OdemeEmriRizasi nesnesinin oluşturulma zamanı | | |
| **> Rıza Durumu** | rizaDrm | AN1 |  Z | **TR.OHVPS.DataCode.RizaDurumu** sıralı veri tipini değerlerinden birini alır. | | |
| **Katılımcı Bilgisi** | katilimciBlg | Kompleks:KatilimciBilgisi | Z | Katılımcılara atanmış kod bilgileridir. |   | |
| **>Hesap Hizmeti Sağlayıcısı Kodu** | hhsKod  | AN4  | Z  |  İsteğin iletildiği Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu) | HHS, hhsKod’un kendisine ait olduğunu ve istek başlığındaki x-aspsp-code değeri ile aynı olduğunu kontrol eder. |Gönderen katılımcı kodu (yani bankanın FAST/PÖS’teki Katılımcı kodu) |
| **> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu** | yosKod		  | AN4  | Z  | İsteği gönderen Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.  |HHS, yosKod’un geçerli bir Ödeme Hizmeti Sağlayıcısı Kodu olduğunu ve istek başlığındaki x-tpp-code değeri ile aynı olduğunu kontrol eder.| **YosKod** |
| **GKD** | gkd  |  Kompleks:Gkd | Z   |   |   | |
| **>Yetkilendirme Yöntemi**	| yetYntm  | AN1  |  Z | **TR.OHVPS.DataCode.GkdTur** sıralı veri türü değerlerinden birini alır.   |   | 
| **>Yönlendirme Adresi** | yonAdr  |  AN1..1024 | K  | Yönlendirmeli güçlü kimlik doğrulama için zorunludur. HHS, müşteri uygulama / tarayıcısını yönlendirmeli akışta bu alanda belirtilen YÖS adresine yönlendirir.| 
| **>Ayrık GKD**	| ayrikGkd  | Kompleks:AyrikGkd  | K   | Ayrık güçlü kimlik doğrulama için zorunlu.  | yetYntm = A gönderilmiş ise ayrikGkd nesnesinin dolu gönderilmesi zorunludur. yetYntm = Y için bu nesne iletilmemelidir. |
| **>>OHK Tanım Tip**	| ohkTanimTip  | AN8  | K   | ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım tipleridir. İstek içerisindeki veri değiştirilmeden iletilir. |  
| **>>OHK Tanım Değer**	| ohkTanimDeger  | AN1..30  | K   |ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım değeridir. ohkTanimTip'i ile uyumlu değerdir.  İstek içerisindeki veri değiştirilmeden iletilir.|  
| **>HHS Yönlenme Adresi**	| hhsYonAdr  |  AN1..1024 | K  | Yönlendirmeli akış türünde GKD doğrulama bilgilerinin girilebilmesi için uygulamadan açılacak yönlendirme sayfasının adresi. Ayrık GKD akışında bu alan dönülmemelidir. | | |
| **>Yetkilendirme Tamamlanma Zamanı**	| yetTmmZmn  |  ISODateTime | Z  | Yetkilendirme akışının tamamlanması gereken son zamanı gösterir. <br> Rıza durumu Yetkilendirildi statüsüne geçene kadarki süredir.| | |
| **Ödeme Başlatma** | odmBsltm  | Kompleks: OdemeBaslatma  | Z   |   |   | |
| **> Kimlik** | kmlk  | Kompleks:Kimlik  | Z   |   |   | |
| **>> Kimlik Türü** | kmlkTur  | AN1| Z | **TR.OHVPS.DataCode.KimlikTur** sıralı veri türü değerlerinden birini alır.| Çerçeve sözleşme kapsamındaki ödemelerde kullanımı zorunludur.<br>İleri Tarihli Ödeme Emri Rizası Nesnesindeki Kimlik Numarası Türü verisi ile aynı olmalıdır.<br>Kurum adına yapılan (ticari) ödemelerde, kurum adına işlem yapan kullanıcının kimlik türünün bu alanda gönderilmesi zorunludur. | |
| **>> Kimlik Verisi** | kmlkVrs   | AN1..30 |Z  | HHS nezdinde kullanıcı doğrulamasında kullanılan tanımlayıcıdır.<br>**TR.OHVPS.DataCode.KimlikTur** değerine göre uzunluk ve formatı değişir.| Çerçeve sözleşme kapsamındaki ödemelerde kullanımı zorunludur.<br>HHS, ÖBHS tarafından iletilmesi durumunda Kimlik Verisi üzeriden çapraz kontroller uygulamalı ve Kimlik Verisini temel alarak GKD gerçekleştirmelidir.<br>İleri Tarihli Ödeme Emri Rizası Nesnesindeki Kimlik Numarası verisi ile aynı olmalıdır.<br>Gerçek kişi tarafından yapılan ödemelerde,<br>1. HHS, Gönderen Adı ve Gönderen Hesap Numarasını ileri tarihli ödeme emri isteğinde (Havale/FAST/PÖS) gönderir.<br>- Gönderen Adı ve diğer tüm müşteri bilgileri, Kimlik Numarası üzerinden elde edillir.<br>Pasaport numarasına ilişkin kontroller HHS'nin halihazırda kullandığı veri, akış ve tabi olduğu diğer düzenlemelerdeki işleyiş ile aynı şekilde ele alınmalıdır.<br>Kurum adına yapılan (ticari) ödemelerde, kurum adına işlem yapan kullanıcının kimlik verisi bu alanda gönderilebilmesi zorunludur. | **GonKimN / Psp** |
| **>> Kurum Kimlik Türü** | krmKmlkTur   |   AN1 |K  | Kurum adına yapılan ödemelerde ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik türüdür.<br>**TR.OHVPS.DataCode.KurumKimlikTur** sıralı veri türü değerlerinden birini alır.  | Kurum adına yapılan (ticari) ödemelerde kullanımı zorunludur.<br>İleri Tarihli Ödeme Emri Rizası Nesnesindeki Kurum Kimlik Türü verisi ile aynı olmalıdır. | |
| **>> Kurum Kimlik Verisi**	| krmKmlkVrs |  AN1..30  |K  | Kurum adına yapılan ödemelerde ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik verisidir.<br> **TR.OHVPS.DataCode.KurumKimlikTur** değerine göre uzunluk ve formatı değişir.  |Kurum adına yapılan (ticari) ödemelerde kullanımı zorunludur.<br>İleri Tarihli Ödeme Emri Rizası Nesnesindeki Kurum Kimlik Verisi ile aynı olmalıdır. |**GonKimN / VKN** |
| **>> Ödeme Hizmeti Kullanıcısı Türü** |ohkTur| AN1| Z |**TR.OHVPS.DataCode.OhkTur** sıralı veri türü değerlerinden birini alır **(B: Bireysel, K:Kurumsal)**|Kurum adına yapılan ödemelerde K değerini alır. Kurum Kimlik Türü ve Kurum Kimlik Verisi alanlarının giilmiş olduğu çapraz olarak kontrol edilir.<br> İleri Tarihli Ödeme Emri Rizası Nesnesindeki ÖHK Türü ile aynı olmalıdır. | |
| **> İşlem Tutarı** |  islTtr  | Kompleks:Tutar   | Z |   |   | |
| **>> Para Birimi** 	| prBrm   |  AN3  | Z | Para Birimi.<br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **53: (Para Birimi)** alanında tanımlı Para Birimi verisi kullanılır.  | İleri Tarihli Ödeme Emri Rizası Nesnesindeki Para Birimi verisi ile aynı olmalıdır.  | |
| **>> Tutar**  | ttr   | AN1..24   | Z |  ÖBHS'nin ön yüzde kullanıcıdan teyit aldığı tutar. <br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **54: (Tutar)** alanında tanımlı Tutar verisi kullanılır. <br> Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$' |İleri Tarihli Ödeme Emri Rizası Nesnesindeki İşlem Tutarı verisi ile aynı olmalıdır.<br>HHS işlem tutarı ödeme mesajında (Havale/FAST/PÖS) aynen taşınmak durumundadır. |**Ttr** |
| **> Gönderen** | gon   |  Kompleks:Hesap  | Z |   | | |
| **>> Ünvan**	| unv   | AN3..140  | Z  | Gönderen kişinin ad soyad ya da ticari ünvan bilgisi.<br>| HHS ve ÖBHS verisi tutarlı olmalıdır.<br> ÖBHS verisi ile HHS verisinin farklılaşması durumunun ise risk değerlendirme sistemlerine girdi olarak kullanması tavsiye edilir.| **GonAd** |
| **>> Hesap Numarası** |  hspNo  |  AN26  | K | ÖBHS'nin ön yüzünden seçtirdiği/kullanıcıya girdiği IBAN<br>Hesap numarası ya da Hesap Referansı alanlarından en az birinin dolu olarak gelmesi gerekmektedir.|İleri Tarihli Ödeme Emri Rizası Yanıtı Nesnesindeki Gönderen Hesap Numarası verisi ile aynı olmalıdır. |**GonHesN** |
|**>> Hesap Referansı** | hspRef |  AN5..40  | K |ÖBHS’nin aynı zamanda HBHS olduğu durumda müşteri rızası tesis edilmiş bir hesabın referansı üzerinden de ödeme başlatılabilir.<br>GKD sonrası HHS ekranında seçilen Hesap Referansı POST işleminin yanıtında dönülemez ancak isteğe bağlı GET sorgusu ile dönülebilir.<br>Hesap Numarası kullanılıyorsa Hesap Referansı kullanılmayabilir. <br> Ödeme Sistemine doğrudan katılımcı olmayan ÖHS'ler müşterilerine IBAN sunmadıkları için hspRef üzerinden ödeme başlatabilirler. Bu durumda hesap numarası boş olacaktır.  | | |
| **> Alıcı** |  alc  |  	Kompleks:Hesap  | Z | | | |
| **>> Ünvan** | unv | AN3..140 | Z  | Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen adres kaydı yaptırmış olan alıcının maskeli ad-soyadı veya maskeli ticari ünvan bilgisidir.<br>Kolay adres değil ise ÖBHS tarafından istek mesajında iletilen ünvan bilgisidir. |YÖS’ten alıcı ad soyad bilgisi geliyorsa ve HHS'nin kontrolünden başarılı bir şekilde geçti ise HHS'nin tekrar alıcı ad soyad bilgisi için giriş yaptırmasına gerek bulunmamaktadır.  |**AlAd** |
| **>> Hesap Numarası**	|hspNo | AN26 | Z | Alıcının Hesap Numarası alanıdır (IBAN).<br>Kolay Adres  sorgusunda dönülen adres kaydı yaptırmış olan alıcının maskeli IBAN bilgisidir.<br>Kolay adres değil ise ÖBHS tarafından istek mesajında iletilen IBAN bilgisidir. Karekod akışında, FAST Karekod Veri Organizasyonundaki 30-01: alanında tanımlı İş Yeri IBAN verisi kullanılır.|İleri Tarihli Ödeme Emri Rizası Yanıtı Nesnesindeki Alıcı Hesap Numarası verisi ile aynı olmalıdır.<br> Kontroller başarıyla sonuçlanırsa, bilgi FAST/PÖS AlHesN alanına doğrudan aktarır ve FAST/PÖS Alan Katılımcı Kodu (AlKK) olarak Alıcı HHS Kodu kullanılır.<br> KOLAS sorgusu sonucunda ileri tarihli ödeme emrinde iletilen maskeli bilgi ile HHS’nin kendi ileri tarihli ödeme emri rızası isteğinde tuttuğu KOLAS sorgusundan dönülen bilgi maskelenerek karşılaştırılır. Eğer aynı değilse uygun hata kodu dönülerek işlem sonlandırılır. |**AlHesN** |
| **>> Kolay Adres** | kolas   | Kompleks:Kolas  | K  |  | | |
| **>>> Kolas Türü**  |  kolasTur   |  AN1   | Z  |  Müşterinin sorgulamak istediği Kolay Adres Tipi değeridir. <br>**TR.OHVPS.DataCode.KolasTur** sıralı veri türü değerlerinden birini alır.<br> Alıcı Hesap Numarası girilmediyse kullanımı zorunludur ve **Kolay Adres Tipi** alanıyla birlikte kullanılır. | İleri Tarihli Ödeme Emri Rizası Yanıtı Nesnesindeki Kolay Adres Tipi verisi ile aynı olmalıdır. | |
| **>>> Kolas Değeri**  |  kolasDgr   |  AN7..50   |  Z | Müşterinin eklediği, HHS (FAST katılımcısı) tarafından doğrulanmış Kolay Adres değeridir. Alabileceği değerler BKM “Kolay Adresleme Sistemi Uygulama Kuralları” belgesinde tanımlıdır.<br> Alıcı Hesap Numarası girilmediyse kullanımı zorunludur ve **Kolay Adres Tipi** alanıyla birlikte kullanılır.  | İleri Tarihli Ödeme Emri Rizası Yanıtı Nesnesindeki Kolay Adres Değeri verisi ile aynı olmalıdır. | **FAST (KolasRef)**|
| **>>> Kolas Referans Numarası**  |  kolasRefNo   |  N12   |  Z |Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen, BKM Kolay Adresleme Sistemi Uygulama Kuralları’nda tanımlı KOLAS tarafından ilgili sorguya özel olarak üretilmiş referans numarasıdır.|   | **KolasRef ( hem FAST hem de PÖS için aynı)**|
| **>>> Kolas Hesap Türü**  |  kolasHspTur   |  AN1   |  Z |Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen, BKM Kolay Adresleme Sistemi Uygulama Kuralları’nda tanımlı hesap türü bilgisidir:<br> **TR.OHVPS.DataCode.KolasHspTur** sıralı veri değerlerinden birini alır.|   | |
| **> Karekod**  | kkod | Kompleks:Karekod   |  	K   |  | | |
| **>> Akış Türü** |   aksTur  |  AN2   |  Z | Karekod Akış Türü Karekod ödemesinin hangi akışla gerçekleştirildiğini gösterir.<br> Kolay Adresi Sistemi ile birlikte kullanılmaz.<br> 01: FAST katılımcısından dinamik doğrulama hizmeti alınan işyeri ödemesi<br> 02: FAST katılımcısından statik doğrulama hizmeti alınan işyeri ödemesi<br>03: Kişiden kişiye ödemeler|İleri Tarihli Ödeme Emri Rizası Nesnesindeki Kare Kod Akış Türü verisi ile aynı olmalıdır. | **FAST: KrkdAksTur** |
| **>> Referansı** | kkodRef   | AN1..12    | K  |  Karekod referans numarasını gösterir.<br> Okunan karekodda referans değeri varsa kullanılması zorunludur.<br>Kolay Adresi Sistemi ile birlikte kullanılmaz. |İleri Tarihli Ödeme Emri Rizası Nesnesindeki Karekod Referansı verisi ile aynı olmalıdır.<br> Çevrimiçi doğrulama hizmeti alınmayan statik karekodlar için Referans numarasının bulunmadığı durumlarda HHS tarafından “NONREF” ifadesi girilir.<br> |**FAST: Karekod Referansı (KrkdRef)** |
| **>> Üretici Kodu**	  |  kkodUrtcKod   |   AN4  |Z   | Karekod üreticisinin kodu.<br> Ödeme Hizmeti Sağlayıcıları ve TCMB tarafından uygun görülen ödeme sistemi işleticisi TR Karekod üretebilmek için BKM’ye kayıt başvurusu yaparak karekod üretici kodu alabileceklerdir. Bankalar EFT kodlarını kullanacak olup ayrıca kayıt yaptırmalarına gerek bulunmamaktadır. 4 haneden kısa değerlerin sol tarafı ’0’ karakteri ile tamamlanmalıdır.| | |
| **> Ödeme Ayrıntıları**	| odmAyr |  Kompleks: OdemeAyrintilari | Z    |  | | |
| **>> Ödeme Kaynağı** |odmKynk   |  AN1   |Z   |  Ödemenin başlatıldığı kaynağı belirtir. **TR.OHVPS.DataCode.OdemeKaynak** sıralı veri değerlerinden “O” değeri atanarak iletilmelidir. “O” değeri “Açık bankacılık aracılığı ile gönderilen ödemelerde kullanılır.” anlamını taşımaktadır.  |İleri Tarihli Ödeme Emri Rizası Nesnesindeki Ödeme Kaynağı verisi ile aynı olmalıdır.<br>HHS tarafından ödeme mesajında (FAST/PÖS) aynen taşınmak durumundadır. | **FAST/PÖS: OdmKynk**|
| **>> Ödeme Amacı** |  odmAmc   |   AN2  | Z  |  **TR.OHVPS.DataCode.OdemeAmaci** sıralı veri değerlerinden birini alır.  |İleri Tarihli Ödeme Emri Rizası Nesnesindeki Ödeme Amacı verisi ile aynı olmalıdır.<br>HHS tarafından ödeme mesajında (FAST/PÖS) aynen taşınmak durumundadır.  |**FAST (OdmAmc)/PÖS(OdmAmaci)** |
| **>> Referans Bilgisi**	|  refBlg   |  AN1..140   | K  |  Ödemeye özel **Referans Bilgisi** alanıdır. Karekod işlemi değil ise zorunludur.<br> -	Kişiden kişiye fon aktarımlarda: Gün içerisinde ÖHK özelinde, her işleme özel biricik olarak oluşturulan referans bilgisidir.<br> Karekod P2P akışı için referans bilgisi (Karekod referans numarası değil, işleme özel üretilecek referans bilgisidir.) YÖS tarafından atanacaktır.<br> -	E-ticaret işlemlerinde sipariş/takip numarası/müşteri/abone numarası<br> -İşyeri Ödemesi Karekod akışında, FAST Karekod Veri Organizasyonundaki<br> -	62-01: alanında tanımlı Fatura Numarası <br> -	62-06: alanında tanımlı Müşteri Numarası <br> verilerinden biri kullanılır. | İleri Tarihli Ödeme Emri Rizası Nesnesindeki Referans Bilgisi verisi ile aynı olmalıdır. |**RefBlg (Hem FAST hem de PÖS için aynı)** |
| **>> Açıklama**	|  odmAcklm   | AN1..200    | İ  | ÖBHS’nin ÖHK’dan aldığı ya da kendisinin atadığı işlem açıklaması bilgisi. <br>FAST/PÖS sistemi üzerinden yapılan ödemeler için açıklama bilgisi girilirse boşluk karakteri girilerek geçilemez. En az bir alfasayısal karakter girilmesi zorunludur.| | **FAST/PÖS Acklm**|
| **>> ÖHK Mesaj Alanı**	|  ohkMsj   | AN1..200    | İ  | HHS’nin ÖHK’ya göstermek üzere ilettiği mesaj.| | |
| **>> Talimat Tarihi**	|  tlmtTrh   | ISODate  | Z  | ÖHK tarafından talep edilen, ödeme gerçekleşme zamanıdır. Talimat verilen günün tarihinden minimum 1 gün sonrası,maksimum ise 1 yıl sonrası olacak şekilde seçilebilir.| |


  
**BAŞARILI YANIT:**  

POST işleminin RESPONSE gövdesini (BODY) oluşturan “IleriTarihliOdemeEmri” nesnesi Tablo-10’daki parametrelerden oluşur:

**Tablo 10: “IleriTarihliOdemeEmri” nesnesi**  


| Alan Adı | JSON Alan Adı |Format: Veri modeli İsmi  |Zorunlu / Koşullu / İsteğe bağlı |Açıklama |
| --- |--- |--- |--- |--- |
| **Riza Bilgileri**	| rzBlg | Kompleks: RizaBilgileri | Z |  |
| **> Rıza No**|rizaNo  | 	AN1..128 | Z  | OdemeEmriRızasi nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı | 
| **> Oluşturma Zamanı** | olusZmn | ISODateTime | Z | OdemeEmriRizasi nesnesinin oluşturulma zamanıdır. | 
| **> Rıza Durumu** | rizaDrm | AN1 |  Z | **TR.OHVPS.DataCode.RizaDurumu** sıralı veri tipini değerlerinden birini alır. | 
| **Katılımcı Bilgisi** | katilimciBlg | Kompleks:KatilimciBilgisi | Z | Katılımcılara atanmış kod bilgileridir. |   
| **>Hesap Hizmeti Sağlayıcısı Kodu** | hhsKod  | AN4  | Z  |  İsteğin iletildiği Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu) | 
| **> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu** | yosKod		  | AN4  | Z  | İsteği gönderen Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.  |
| **GKD** | gkd  |  Kompleks:Gkd | Z   |   |   
| **> Yetkilendirme Yöntemi**	| yetYntm  | AN1  |  Z | **TR.OHVPS.DataCode.GkdTur** sıralı veri türü değerlerinden birini alır.   | 
| **> Yönlenme Adresi** | yonAdr  |  AN1..1024 | Z  | Yönlendirmeli güçlü kimlik doğrulama için zorunlu. HHS, müşteri uygulama / tarayıcısını yönlendirmeli akışta bu alanda belirtilen YÖS adresine yönlendirir. | 
| **> Ayrık GKD**	| ayrikGkd  | Kompleks:AyrikGkd  | K   | Ayrık güçlü kimlik doğrulama için zorunlu.  | yetYntm = A gönderilmiş ise ayrikGkd nesnesinin dolu gönderilmesi zorunludur. yetYntm = Y için bu nesne iletilmemelidir. |
| **>> OHK Tanım Tip**	| ohkTanimTip  | AN8  | K   | ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım tipleridir. İstek içerisindeki veri değiştirilmeden iletilir. |  
| **>> OHK Tanım Değer**	| ohkTanimDeger  | AN1..30  | K   |ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım değeridir. ohkTanimTip'i ile uyumlu değerdir.  İstek içerisindeki veri değiştirilmeden iletilir.|  
| **> HHS Yönlenme Adresi**	| hhsYonAdr  |  AN1..1024 | K  | Yönlendirmeli akış türünde GKD doğrulama bilgilerinin girilebilmesi için uygulamadan açılacak yönlendirme sayfasının adresi. Ayrık GKD akışında bu alan dönülmemelidir.   |
| **> Yetkilendirme Tamamlanma Zamanı**	| yetTmmZmn  |  ISODateTime | Z  | Yetkilendirme akışının tamamlanması gereken son zamanı gösterir. <br> Rıza durumu Yetkilendirildi statüsüne geçene kadarki süredir.| 
| **Emir Bilgileri** | emrBlg  | Kompleks: EmirBilgileri  | Z   |   |  
| **> Ödeme Emri Numarası** | odmEmriNo  | AN1..128  | Z   |  IleriTarihliOdemeEmri nesnesinin UID'sidir. IleriTarihliOdemeEmri İlişkin sorgular bu ID üzerinden yapılır. |  
| **> Ödeme Emri Zaman** | odmEmriZmn  | ISODateTime  | Z   | IleriTarihliOdemeEmri nesnesinin oluşturulduğu zaman bilgisi.|  
| **Ödeme Başlatma** | odmBsltm  | Kompleks: OdemeBaslatma  | Z   |   |  
| **> Kimlik** | kmlk  | Kompleks:Kimlik  | Z   |   |  
| **>> Kimlik Türü** | kmlkTur  | AN1| Z | **TR.OHVPS.DataCode.KimlikTur** sıralı veri türü değerlerinden birini alır.| 
| **>> Kimlik Verisi** | kmlkVrs   | AN1..30 |Z  | HHS nezdinde kullanıcı doğrulamasında kullanılan tanımlayıcıdır.<br>**TR.OHVPS.DataCode.KimlikTur** değerine göre uzunluk ve formatı değişir.|
| **>> Kurum Kimlik Türü** | krmKmlkTur   |   AN1 |K  | Kurum adına yapılan ödemelerde ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik türüdür.<br>**TR.OHVPS.DataCode.KurumKimlikTur** sıralı veri türü değerlerinden birini alır.  | 
| **>> Kurum Kimlik Verisi**	| krmKmlkVrs |  AN1..30  |K  | Kurum adına yapılan ödemelerde ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik verisidir.<br> **TR.OHVPS.DataCode.KurumKimlikTur** değerine göre uzunluk ve formatı değişir.  |
| **>> Ödeme Hizmeti Kullanıcısı Türü** |ohkTur| AN1| Z |**TR.OHVPS.DataCode.OhkTur** sıralı veri türü değerlerinden birini alır **(B: Bireysel, K:Kurumsal)**|
| **> İşlem Tutarı** |  islTtr  | Kompleks:Tutar   | Z |   |  
| **>> Para Birimi** 	| prBrm   |  AN3  | Z | Para Birimi.<br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **53: (Para Birimi)** alanında tanımlı Para Birimi verisi kullanılır.  | 
| **>> Tutar**  | ttr   | AN1..24   | Z |  ÖBHS'nin ön yüzde kullanıcıdan teyit aldığı tutar. <br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **54: (Tutar)** alanında tanımlı Tutar verisi kullanılır.  <br> Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$' |
| **> Gerçekleşen İşlem Tutarı** |  grckIslTtr  | Kompleks:GerceklesenTutar   | K | odmDrm:01 ,02 ve 06 olduğu durumda gönderilmesi zorunludur. Ödeme durumu 01 ve 02 durumlarında gerçekleştirilen tutarın tamamı bu alanda iletilmelidir. Ödeme durumu: 06 olan kısmi ödeme işlemlerinde ise gerçekleşen tutar bilgisi iletilmelidir.   |  
| **>> Para Birimi** 	| prBrm   |  AN3  | Z | Para Birimi.<br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **53: (Para Birimi)** alanında tanımlı Para Birimi verisi kullanılır.  | 
| **>> Tutar**  | ttr   | AN1..24   | Z |  Talimat gerçekleştiğinde ödeme yapılan tutar bilgisi. <br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **54: (Tutar)** alanında tanımlı Tutar verisi kullanılır.  <br> Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$' |
| **> Gönderen** | gon   |  Kompleks:Hesap  | Z |   | 
| **>> Ünvan**	| unv   | AN3..140  | Z  | Gönderen kişinin ad soyad ya da ticari ünvan bilgisi.| 
| **>> Hesap Numarası** |  hspNo  |  AN26  | K | ÖBHS tarafından iletilip doğrulanan veya HHS ekranında seçilen Gönderen Hesap Numarası dönülür.|
|**>> Hesap Referansı** | hspRef |  AN5..40  | K |HHS tarafından hesap için atanan biricik tanımlıyıcıdır (uuid)<br> YÖS bazında farklılaşması gerekmez.<br>ÖBHS’nin aynı zamanda HBHS olduğu durumda müşteri rızası tesis edilmiş bir hesabın referansı üzerinden de ödeme başaltılabilir.<br>GKD sonrası HHS ekranında seçilen Hesap Referansı POST işleminin yanıtında dönülemez ancak isteğe bağlı GET sorgusu ile dönülebilir.<br>Hesap Numarası kullanılıyorsa Hesap Referansı kullanılmayabilir.<br> Ödeme Sistemine doğrudan katılımcı olmayan ÖHS'ler müşterilerine IBAN sunmadıkları için hspRef üzerinden ödeme başlatabilirler. Bu durumda hesap numarası boş olacaktır.  | 
| **> Alıcı** |  alc  |  	Kompleks:Hesap  | Z | | 
| **>> Ünvan** | unv | AN3..140 | Z  | Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen adres kaydı yaptırmış olan alıcının maskeli ad-soyadı veya maskeli ticari ünvan bilgisidir. Kolas’tan dönen “account owner” alanı kullanılmalıdır.<br>Kolay adres değil ise ÖBHS tarafından istek mesajında iletilen ünvan bilgisidir. |
| **>> Hesap Numarası**	|hspNo | AN26 | Z | Alıcının Hesap Numarası alanıdır (IBAN).<br>Kolay Adres  sorgusunda dönülen adres kaydı yaptırmış olan alıcının maskeli IBAN bilgisidir.<br>Kolay adres değil ise ÖBHS tarafından istek mesajında iletilen IBAN bilgisidir. Karekod akışında, FAST Karekod Veri Organizasyonundaki 30-01: alanında tanımlı İş Yeri IBAN verisi kullanılır.|
| **>> Kolay Adres** | kolas   | Kompleks:Kolas  | K  |  | 
| **>>> Kolas Türü**  |  kolasTur   |  AN1   | Z  |  Müşterinin sorgulamak istediği Kolay Adres Tipi değeridir. <br>**TR.OHVPS.DataCode.KolasTur** sıralı veri türü değerlerinden birini alır.<br> Alıcı Hesap Numarası girilmediyse kullanımı zorunludur ve **Kolay Adres Tipi** alanıyla birlikte kullanılır. | 
| **>>> Kolas Değeri**  |  kolasDgr   |  AN7..50   |  Z | Müşterinin eklediği, HHS (FAST katılımcısı) tarafından doğrulanmış Kolay Adres değeridir. Alabileceği değerler BKM “Kolay Adresleme Sistemi Uygulama Kuralları” belgesinde tanımlıdır.<br> Alıcı Hesap Numarası girilmediyse kullanımı zorunludur ve **Kolay Adres Tipi** alanıyla birlikte kullanılır.  |  
| **>>> Kolas Referans Numarası**  |  kolasRefNo   |  N12   |  Z |Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen, BKM Kolay Adresleme Sistemi Uygulama Kuralları’nda tanımlı KOLAS tarafından ilgili sorguya özel olarak üretilmiş referans numarasıdır.| 
| **>>> Kolas Hesap Türü**  |  kolasHspTur   |  AN1   |  Z |Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen, BKM Kolay Adresleme Sistemi Uygulama Kuralları’nda tanımlı hesap türü bilgisidir:<br> **TR.OHVPS.DataCode.KolasHspTur** sıralı veri değerlerinden birini alır.| 
| **> Karekod**  | kkod | Kompleks:Karekod   |  	K   |  | 
| **>> Akış Türü** |   aksTur  |  AN2   |  Z | Karekod Akış Türü Karekod ödemesinin hangi akışla gerçekleştirildiğini gösterir.<br> Kolay Adresi Sistemi ile birlikte kullanılmaz.<br> 01: FAST katılımcısından dinamik doğrulama hizmeti alınan işyeri ödemesi<br> 02: FAST katılımcısından statik doğrulama hizmeti alınan işyeri ödemesi<br>03: Kişiden kişiye ödemeler|
| **>> Referansı** | kkodRef   | AN1..12    | K  |  Karekod referans numarasını gösterir.<br> Okunan karekodda referans değeri varsa kullanılması zorunludur.<br>Kolay Adresi Sistemi ile birlikte kullanılmaz. |
| **>> Üretici Kodu**	  |  kkodUrtcKod   |   AN4  |Z   | Karekod üreticisinin kodu.<br> Ödeme Hizmeti Sağlayıcıları ve TCMB tarafından uygun görülen ödeme sistemi işleticisi TR Karekod üretebilmek için BKM’ye kayıt başvurusu yaparak karekod üretici kodu alabileceklerdir. Bankalar EFT kodlarını kullanacak olup ayrıca kayıt yaptırmalarına gerek bulunmamaktadır. 4 haneden kısa değerlerin sol tarafı ’0’ karakteri ile tamamlanmalıdır.|
| **> Ödeme Ayrıntıları**	| odmAyr |  Kompleks: OdemeAyrintilari | Z    |  |
| **>> Ödeme Kaynağı** |odmKynk   |  AN1   |Z   |  Ödemenin başlatıldığı kaynağı belirtir. **TR.OHVPS.DataCode.OdemeKaynak** sıralı veri değerlerinden “O”  değerini alır. “O” değeri “Açık bankacılık aracılığı ile gönderilen ödemelerde kullanılır.” anlamını taşımaktadır.  |
| **>> Ödeme Durumu** |odmDrm   |  AN2   |Z   |  **TR.OHVPS.DataCode.OdemeDurumu** sıralı veri değerlerinden birini alır.  <br> <br> Ödeme Durumu alanı ile ilgili olarak HHS’ler tarafından YÖS’lere  IleriTarihliOdemeEmri servisi yanıtında  04:Onayda Bekliyor, 05:Ödeme Bekleniyor yanıtları gönderilebilir.<br><br>**04:Onayda Bekliyor** ve **05:Ödeme Bekleniyor** durumları oluştuktan sonra YÖS tarafından ileri tarihli ödeme emri sorgulaması yapılarak ödeme durumunun güncel değeri öğrenilir. Güncel değerler **01:Gerçekleşti,03:Gerçekleşmedi**,**06:Kısmen Gerçekleşti** ve **07:İptal Edildi** durumları olabilir.|
| **>> Ödeme Amacı** |  odmAmc   |   AN2  | Z  |  **TR.OHVPS.DataCode.OdemeAmaci** sıralı veri değerlerinden birini alır.  | 
| **>> Referans Bilgisi**	|  refBlg   |  AN1..140   | K  |  Ödemeye özel **Referans Bilgisi** alanıdır. Karekod işlemi değil ise zorunludur.<br> -	Kişiden kişiye fon aktarımlarda: Gün içerisinde ÖHK özelinde, her işleme özel biricik olarak oluşturulan referans bilgisidir.<br> Karekod P2P akışı için referans bilgisi (Karekod referans numarası değil, işleme özel üretilecek referans bilgisidir.) YÖS tarafından atanacaktır.<br> -	E-ticaret işlemlerinde sipariş/takip numarası/müşteri/abone numarası<br> - İşyeri Ödemesi Karekod akışında, FAST Karekod Veri Organizasyonundaki<br> -	62-01: alanında tanımlı Fatura Numarası <br> -	62-06: alanında tanımlı Müşteri Numarası <br> verilerinden biri kullanılır. | 
| **>> Açıklama**	|  odmAcklm   | AN1..200    | İ  | ÖBHS’nin ÖHK’dan aldığı ya da kendisinin atadığı işlem açıklaması bilgisi. <br>FAST/PÖS sistemi üzerinden yapılan ödemeler için açıklama bilgisi girilirse boşluk karakteri girilerek geçilemez. En az bir alfasayısal karakter girilmesi zorunludur.|
| **>> ÖHK Mesaj Alanı**	|  ohkMsj   | AN1..200    | İ  | HHS’nin ÖHK’ya göstermek üzere ilettiği mesaj.|
| **>> Ödeme Sistemi**	|  odmStm   | AN1    | K  | **TR.OHVPS.DataCode.OdemeSistemi** sıralı veri değerlerinden birini alır. odmDrm:01, 02 ve 06 olduğu durumda gönderilmesi zorunludur. |
| **>> Ödeme Sistem Numarası**	|  odmStmNo   | AN10..50    | K  | Ödeme başarılı başlatıldıysa, ödemenin başlatıldığı sistemdeki referans numarası. Gerektiğinde ilgili ödeme sisteminde/HHS’de söz konusu ödemeye karşılık gelen mesajla bağlantı kurmada kullanılır. <br> Ödeme Hizmeti kullanıcısına işlemin takibi için gösterilebilir. <br>İşlemin yönlendirildiği ödeme sistemi FAST ya da PÖS ise sistemdeki ilgili mesajın Tarih, GönderenKatilimKodu ve SorguNumarasi değerlerinin birleşiminden oluşur. Bu 3 alan mevcutta kullanıldığı formatta aralarına dikey çizgi (Unicode U+2223) işareti koyularak, birleştirmeli ve iletilmelidir. Örn : Tarih\|GönderenKatilimKodu\|SorguNumarasi  <br>Ödeme Havale/Virman işlemi ise HHS’nin üretmiş olduğu havale/virman numarasını içerir. Buradaki format da Tarih\|GönderenKatilimKodu\|Havale-virman numarası şeklinde olmalıdır.<br>Havale/FAST/PÖS  ödeme yöntemleri için tarih alanı yyyy-aa-gg formatında 10 karakter olarak iletilmelidir. odmDrm:01, 02 ve 06 olduğu durumda gönderilmesi zorunludur. |
| **>> Talimat Tarihi**	|  tlmtTrh   | ISODate  | Z  | ÖHK tarafından talep edilen, ödeme gerçekleşme zamanıdır. Talimat verilen günün tarihinden minimum 1 gün sonrası,maksimum ise 1 yıl sonrası olacak şekilde seçilebilir.| |
| **>> Gerçekleşen Ödeme Zamanı** |  grckOdmZmn  | ISODateTime  | K | Gerçekleşen ödeme işlemine ait zaman bilgisi. odmDrm:01, 02 ve 06 olduğu durumda gönderilmesi zorunludur.  |  


## 7.6.	ADIM 3.1- İleri Tarihli Ödeme Emri Sorgusu (İsteğe bağlı) 

<img src="./images/IleriTarihliOdemeEmriSorgulanmasi.png" width="75%" >  

**Şekil 9: İleri Tarihli Ödeme Emri Sorgusu**  

**GET /ileri-tarihli-odeme-emri/{odmEmriNo}**  

ÖBHS, bu erişim adresi aracılığıyla ileri tarihli ödeme emrini sorgulayabilir. Maksimum ödemenin gerçekleşeceği günün 15 gün sonrasına kadar sorgulama yapılabilir. Sonrasında yapılacak sorgulamalarda erişim belirtecinin yetki süresi sonlandığı için HHS **"TR.OHVPS.Resource.ConsentRevoked"** hatasını dönmelidir.
İptal edilmiş talimatın bilgileri sorgulanmak istendiğinde de yine **"TR.OHVPS.Resource.ConsentRevoked"** hatası verilmelidir.

YÖS sadece kendi uygulaması üzerinden verilmiş ileri tarihli ödemeleri sorgulayabilir. Erişim izni olmayan bir ödeme emri numarası ile sorgulama yaptığında HHS'den **"TR.OHVPS.Resource.NotFound"** hatasını alır.

Kısmi ödemelerde, kısmen gerçekleşen ödeme tutarı, "gerçekleşen işlem tutarı"(grckIslTtr) alanında gönderilirken, gönderilmesi talep edilen tutar alanı(rıza başlatma isteğinde ki tutar) da "işlem tutarı"(islTtr) alanında gönderilmeye devam edilmelidir. 

Gerçekleşen işlem tutarı ve para birimi, ödeme gerçekleşme zamanı alanları, ödeme gününden itibaren dolu olarak gelir. 

**BAŞARILI YANIT:**

GET /ileri-tarihli-odeme-emri/{odmEmriNo} yanıtının (RESPONSE) gövdesinde (BODY)  “IleriTarihliOdemeEmri” nesnesi bulunur. İstek başarıyla sonuçlanırsa HHS kaynak sunucusunda Tablo-10’da yer alan parametreleri içeren “IleriTarihliOdemeEmri” nesnesi döner.

## 7.7.	ADIM 4- İleri Tarihli Ödeme Emri Rıza İptali

<img src="./images/IleriTarihliOdemeEmriRizasiIptal.png" width="75%" >

**Şekil 10: İleri Tarihli Ödeme Emri Rızası İptali** 

**DELETE /ileri-tarihli-odeme-emri-rizasi/{rizaNo}**

ÖBHS, bu erişim adresi aracılığıyla ileri tarihli ödeme emri rızasını iptal edebilir. 

DELETE /ileri-tarihli-odeme-emri-rizasi çağrısı, bir ÖBHS'nin önceden oluşturulmuş bir ileri tarihli ödeme emri rızasını silmesine izin verir. Müşteri, rızasını HHS üzerinden iptal etmek yerine, ÖBHS üzerinden bu rızasını kaldırmak isteyebilir.

- Erişim belirteci kontrolü yapılır. Geçerli bir erişim belirteci yok ise HHS tarafından **”TR.OHVPS.Connection.InvalidToken”** hatası dönülür.
- İstek başlığında yer alan X-Access-Token ile ilişkili rıza, silinen rizaNo bilgisi ile aynı olup olmadığı kontrol edilir. Farklı olması durumunda **"TR.OHVPS.Resource.NotFound"** hatası dönülür.
- İptal edilmek istenen İleri Tarihli Ödeme Emri Rızası HHS tarafında bulunmuyor ise **”TR.OHVPS.ResourceNotFound”** hatası dönülür.
- Rıza durumu Yetki Sonlandırıldı - S veya Yetki İptal - I ise **"TR.OHVPS.Resource.ConsentRevoked"** hatası dönülür.
- İptal edilmek istenen İleri Tarihli Ödeme Emri Rızası’nın ödeme durumu 04 ya da 05 değil ise **”TR.OHVPS.Business.TransactionCompleted”** hatası dönülür.

Yukarıda kontroller başarıyla tamamlandıktan sonra sırasıyla aşağıdaki işlemler yapılır.
- odmDrm değeri 04 ve 05 olan kayıtlar 07 durum kodu ile güncellenmelidir.
- İlişkili ileri tarihli ödeme emri talimatı iptal edilmelidir. 
- Rıza iptal edilmelidir.


Bu API çağrısı, müşterinin ÖBHS üzerinden ileri tarihli ödeme emri rızasını iptal etmesine ve HHS nezdindeki ileri tarihli ödeme emri rızası nesnesinin silinmesini sağlar.
Müşterinin ÖBHS’nin veri erişim iznini iptal etmesi durumunda ÖBHS, HHS’de mevcut olan IleriTarihliOdemeEmriRizasi'na dair rıza ve talimat bilgilerini pratik olarak mümkün olan en kısa sürede silmelidir. Bu ise, ilgili kaynağa
DELETE /ileri-tarihli-odeme-emri-rizasi/{RizaNo}
çağrısı aracılığı ile yerine getirilir.

Servis istek parametresi olarak sadece path’de iletilen Rıza No bilgisine ihtiyaç duymaktadır.
ÖHK rızası YÖS üzerinden başarı ile silindiğinde HTTP 204 response kodu ile işlem sonucu iletilir. Rıza tipi “I” yani “Yetki İptal” ve durum kodu "03" olarak güncellenir ve gnclZmn zaman damgası vurularak güncellenir.
ÖHK ile rıza iptali sırasında kurulacak iletişimde (e-posta, sms gibi) aşağıdaki alanların iletilmesi tavsiye edilmektedir:
YÖS Adı, HHS adı, Rıza Oluşturma Zamanı, Servis Tipi Bilgisi (ÖBHS)


