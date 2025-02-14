# 6.	Ödeme Emri Başlatma Hizmeti

Ödeme emri başlatma işlemi havale, FAST ya da PÖS ödemesiyle sonuçlanabilir. Ödeme işleminin amacı kişiden kişiye para transferi, e-ticaret ödemesi gibi farklı ödeme türleri olabilir. Ödemenin amacına göre ÖBHS’nin ileteceği veri setinde farklılaşmalar olabilir.
 
Ödeme Emri Başlatma Hizmeti 5 temel akışdan oluşur:  

0.	**Ödeme Emri Başlatma İsteğinin tetiklenmesi:** ÖHK ÖBHS mobil uygulama ya da websitesinden ödeme emrini başlatır. 
1.	**Ödeme Emri Rıza Hazırlanması:** ÖBHS, “Ödeme Emri Başlatma” işlemi için izin oluşturulması isteğini HHS’ye iletir. 
2.	**Ödeme Emri Rızasının Yetkilendirilmesi:** HHS, gerekli gördüğü durumlarda ÖHK’yı GKD ile doğrular ve ödeme emri rızasına erişim için erişim belirteci tanımlanmasını temin eder.
3.	**Ödeme Emrinin Başlatılması:** ÖBHS, “ödeme emri”ni HHS’ye iletir.
4.	**Ödeme Emri Rıza Durumu, Ödeme Emri Durumu, Ödeme Emri Detayı Sorguları:** ÖBHS, Ödeme Emri Rıza Durumu, Ödeme Emri Durumu, Ödeme Emri Detayı bilgilerini isteğe bağlı olarak sorgulayabilir.

Nezdinde ödeme hesabı bulunduran hesap hizmeti sağlayıcılar(Banka, EPK, Ödeme Kuruluşları)  müşterilerine ait hesapları hesap referansı ya da hesap numarası üzerinden takip etmektedir. YÖS'lerin hem HBH hem de ÖBH servisleri için hesap referansı veya hesap numarası üzerinden işlem yapılabileceğini bilmeleri, sistemlerini API dokümanında belirtilen akışlara göre uyumlandırmaları ve müşteri bilgilendirmesini(önyüzlerinde hesap no ve hesap referansı ayrımını gözeterek) buna paralel yapmaları beklenmektedir. 

YÖS'ler gönderen hesap seçimini aşağıdaki yöntemlerden biri ya da birkaçı ile sağlayabilirler:
- YÖS, müşterisinin ödeme hesabını HHS ekranından seçtirebilir.
- YÖS, müşterisinden Hesap Bilgisi rızası alır. Rıza aldığı hesaplar üzerinden hesap referansı aracılığı ile ödeme emri başlatabilir. 
- YÖS, müşterisinin ödeme hesabını elle girmesine olanak tanıyabilir. IBAN'ı olmayan HHS'ler ödeme emri rızası adımında **TR.OHVPS.Business.IBANNotSupported** hatasını vermelidir. IBAN'ı olan HHS'lerin bu akışı desteklemesi zorunludur.
- YÖS; müşterisinin hesap referansını elle girmesini sağlayabilir. Hesap Referansı bilgisi ile başlatılan ödeme emri işlemlerinde HHS seçimi zorunludur.

 Ödeme Sistemine doğrudan katılımcı olmayan HHS'ler, müşterilerine IBAN sunmadıkları için, YÖS'ler hesap referansı ile ödeme başlatabilirler. Bunların dışındaki HHS'lerin, gönderen IBAN veya hesap referansı ile ödeme akışını desteklemesi zorunludur.

![Odeme Emri Baslatma Hizmeti Ust Düzey İş Akışı](./images/OdmemeEmriBaslatmaHizmetiUstDuzeyIsAkisi.png)

**Şekil 4: Ödeme Emri Başlatma Hizmeti Üst Düzey İş Akışı**


### Ödeme Emri Başlatma Hizmeti için Erişim Adresleri (Endpoints)

Ödeme Emri Başlatma Hizmeti İçin Erişim Adreslerinin Etki Alanı (Scope) = “odeme_emri” olarak belirtilmelidir.

**Tablo 6: Ödeme Emri Başlatma Hizmeti İçin Erişim Adresleri**  

| No | Kaynak|HTTP işlemi |Erişim Adresi |Zorunlu / İsteğe Bağlı |Yetkilendirme Türü |İmzalama|İstem Nesnesi |Yanıt Nesnesi |
| --- |--- |--- |--- |--- |--- |--- |--- |--- |
| 1|odeme-emri-rizasi|POST |/odeme-emri-rizasi |Z |İstemci Kimlik Bilgileri |İmzalı İstek ve Yanıt |OdemeEmriRizasiIstegi |OdemeEmriRizasi |
| 2|erisim-belirteci (GKD için)|POST | /erisim-belirteci |Z |İstemci Kimlik Bilgileri |İmzalı İstek ve Yanıt |ErisimBelirteciIstegi |ErisimBelirteci |
| 2.1 |odeme-emri-rizasi |GET | /odeme-emri-rizasi/{rizaNo} |Z |İstemci Kimlik Bilgileri  |İmzalı Yanıt |- |OdemeEmriRizaYaniti |
| 3 |odeme-emri |POST | /odeme-emri |Z |İstemci Kimlik Bilgileri & Yetkilendirme Kodu (GKD) |İmzalı İstek ve Yanıt |OdemeEmriIstegi |OdemeEmri |
| 3.1 |odeme-emri |GET | /odeme-emri/{odemeEmriNo}|Z |İstemci Kimlik Bilgileri & Yetkilendirme Kodu (GKD) |İmzalı Yanıt |- |OdemeEmri |

## 6.1.	ADIM 0 - Ödeme Emri Başlatma Isteği

- 	ÖHK, ÖBHS uygulamasında (web arayüzü/mobil uygulama) ödeme emri başlatma işlemine onay verir.
-  Gönderen hesap detaylarının bu aşamada belirtilmesi zorunlu değildir.


## 6.2.	ADIM 1 - Ödeme Emri Rızasının Hazırlanması

<img src="./images/OdemeEmriRizasininHazirlanmasi.png" width="75%" >  

**Şekil 5: Ödeme Emri Rızasının Hazırlanması**  

- ÖBHS, ödeme hizmeti kullanıcı hesabının bulunduğu HHS’ye bağlanarak ödeme emri rıza kaynağının oluşturulmasını (odemeEmriRizasi) sağlar.   

- POST isteği TLS protokolü tesis edilen iletişim katmanı üzerinden gerçekleştirilir. TLS için nitelikli sertifikalar kullanılır.  

- POST isteğinin başlığındaki alanlar ve istemcinin sertifikasındaki özel alanlar kullanılarak istemcinin yetkilendirilmesi sağlanır:
  - İstekte bulunan ÖBHS yetkilendirilmiş mi?
  - İstekte bulunan yetkilendirilmiş ödeme hizmeti sağlayıcısı ÖBHS rolüne sahip mi?
  - İstekte bulunulan HHS kodu doğru mu?
- POST başarılı olursa, HHS, ödeme emri için içeride rıza olup olmamasına bakılmaksızın yeni bir rıza tanımlayıcısı RizaNo içeren odemeEmriRizasi  yanıt olarak döner.
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

**POST /odeme-emri-rizasi**

İSTEK:

ÖBHS, bu API erişim adresinden HHS’ye yeni bir OdemeEmriRizasi oluşturulması için istekte bulunur:  
- ÖBHS, ödeme emri başlatma isteği olduğunu HHS’ye bildirir.  
- ÖBHS, ÖHK’nın, ÖBHS arayüzünden verdiği rızanın (“Ön Onay”) bir kopyasının HHS nezdinde müşteri tarafından onaylanması için HHS’ye gönderilmesini sağlar.  
- HHS; istek mesajında yer alan alanların ÖHVPS API İlke ve Kuralları dökümanında belirtilen şartları sağlayacak şekilde zorunluluk, uzunluk ve içerik kontrollerini yapar. (Zorunlu)  
- HHS; YÖS API ile alınan ÖBHS bilgilerinin içerisinde yer alan yönlendirme adresleri ile ödeme emri rızası nesnesi request mesajında paylaşılan adreslerin uyumlu olup olmadığının kontrollerini yapar. (Zorunlu)  
- HHS; kimlik bilgileri nesnesinde eğer kimlik bilgileri iletilmiş ise; bu veri ile ÖHK’nın HHS müşterisi olup olmadığının kontrollerini yapar. Bu kontrol hem bireysel hem de kurumsal ÖHK’lar için yapılmalıdır.  (Koşullu Zorunlu)  
- HHS kimlik bilgisi ile gönderen unvanının uyumlu olduğunun kontrol eder. HHS'ler EFT/FAST işlemlerinde kabul ettikleri kontrol kriterleri ile işleme izin verebilirler. (Zorunlu)  
- Gönderen Hesap Numarası ile ilgili Tablo7’de belirtilen kontroller yapılmalıdır. (Zorunlu)  
- HHS, ödeme için benzersiz “RizaNo” ile “OdemeEmriRizasi” nesnesi oluşturur ve ÖBHS’ye döner.  
- HHS, OdemeEmriRizasi oluşturduğu anda durumunu “Yetki Bekleniyor” olarak düzenler.  
Bu aşamada ÖHK’nın HHS tarafından tanımlanmış ve isteğin veri alanında gönderen hesaba (borçlandırılacak hesaba) ilişkin bir bilgisinin olması gerekmez.  
Hesap bakiye kontrolünün rıza aşamasında yapılmaması gerekmektedir. Çünkü ÖHK ödeme emri gerçekleşene kadar hesabına para eklemesi yapabilir.   

**POST /odeme-emri-rizasi** isteğinin (REQUEST) gövdesinde (BODY)  “odemeEmriRizasiIstegi” nesnesi (Tablo-7) kullanılır. İstek başarıyla sonuçlanırsa HHS kaynak sunucusunda “odemeEmriRizasi” (Tablo-8) nesnesi oluşturulur.

**Tek Seferlik Ödeme**  
Tek seferlik ödeme akışı YÖS'ten HHS'ye giden istekte, gönderen kimlik bilgilerinin olmadığı durumda gerçekleşir. Gönderen kimlik bilgisi olmadığında, KOLAS sorgusu yapılamayacağından ötürü, HHS tarafından TR.OHVPS.Business.InvalidContent hatası dönülmelidir.  ÖHK'nın YÖS'ün müşterisi olmadığı durumda tek seferlik ödeme başlatılabilir.  
Tek seferlik ödeme akışı hem işyeri ödemelerinde hem de kişiden kişiye para transferlerinde kullanılabilen bir akıştır. İşyeri tarafından başlatılan tek seferlik ödeme işlemlerinde katılımcılar gönderen ÖHK'dan ücret alınamaz.
<br>Tek seferlik ödeme akışı sadece bireysel müşteriler için kullanılabilir.   
Tek seferlik ödeme akışında hem yönlendirmeli hem de ayrık GKD akışı ile müşteri yetkilendirmesi sağlanabilir.  

Aşağıdaki senaryolar tek seferlik ödemeye örnek olarak gösterilebilir.  

İşyeri Ödemesi akışı örneği: Bir e-ticaret sitesinde, üye olmadan alışveriş yapılması ve ödemenin YÖS tarafından kimlik bilgisi olmadan başlatılması  
Kişiden kişiye para transferi akışı örneği: QR veya diğer yöntemler ile alıcı bilgilerinin gönderici ile paylaşılması ve YÖS üzerinden gönderici bilgileri olmadan alıcıya para transferi yapılması için rıza verilmesi

#### **BAŞARILI İSTEK:**

**Tablo 7: “OdemeEmriRizasiIstegi” nesnesi**  

| Alan Adı | JSON Alan Adı |Format: Veri modeli İsmi  |Zorunlu / Koşullu / İsteğe bağlı |Açıklama |HHS tarafından ödeme emri rızası oluşturulması sırasında yapılması gereken kontrol ve işlemler |
| --- |--- |--- |--- |--- |--- |
| **Katılımcı Bilgisi** | katilimciBlg | Kompleks:KatilimciBilgisi | Z | Katılımcılara atanmış kod bilgileridir. | |
| **>Hesap Hizmeti Sağlayıcısı Kodu** | hhsKod  | AN4  | Z  |  İsteğin iletildiği Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu) | HHS, hhsKod’un kendisine ait olduğunu ve istek başlığındaki x-aspsp-code değeri ile aynı olduğunu kontrol eder. <br>Hata durumunda **TR.OHVPS.Connection.InvalidASPSP** hata kodunu döner.  |
| **> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu** | yosKod		  | AN4  | Z  | İsteği gönderen Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.  | HHS, yosKod’un geçerli bir Ödeme Hizmeti Sağlayıcısı Kodu olduğunu ve istek başlığındaki x-tpp-code değeri ile aynı olduğunu kontrol eder. Hata durumunda **TR.OHVPS.Connection.InvalidTPP** hata kodunu döner. |
| **GKD** | gkd  |  Kompleks:Gkd | Z   |   |  |
| **> Yetkilendirme Yöntemi**	| yetYntm  | AN1  |  İ | **TR.OHVPS.DataCode.GkdTur** sıralı veri türü değerlerinden birini alır. Yetkilendirme yöntemi, ÖBHS tarafından belirtilmeyebilir.  | HHS, HBHS’nin belirlediği yöntemi dikkate alarak süreci ilgili akışa uygun olarak devam ettirir. Desteklemediği yöntem için (örn: Ayrık GKD) ayrıca hata mesajı verilmelidir. |
| **> Yönlenme Adresi** | yonAdr  |  AN1..1024 | K  | Yönlendirmeli güçlü kimlik doğrulama için zorunlu.<br> YÖS’ün ileteceği adrestir.<br> Durum kodu(drmKod), yönlendirme adresine parametre olarak eklenmelidir.| HHS, müşteri uygulama / tarayıcısını bu alanda belirtilen adrese yönlendirir. |
| **> Ayrık GKD**	| ayrikGkd  | Kompleks:AyrikGkd  | K   | Ayrık güçlü kimlik doğrulama için zorunlu.  | yetYntm = A gönderilmiş ise ayrikGkd nesnesinin dolu gönderilmesi zorunludur. <br><br> HHS, YÖS'ün AYRIK_GKD_BASARILI ve AYRIK_GKD_BASARISIZ olay tipleri için olay aboneliğinin varlığını kontrol eder. [Bknz: Ayrık GKD](gkd.html#_5-2-ayr%C4%B1k-guclu-kimlik-dogrulama)  |
| **>> OHK Tanım Tip**	| ohkTanimTip  | AN8  | K   | ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım tipleridir. **TR.OHVPS.DataCode.ohkTanimTip** sıralı veri tiplerinden birini alır. |  |
| **>> OHK Tanım Değer**	| ohkTanimDeger  | AN1..30  | K   |ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım değeridir. ohkTanimTip'i ile uyumlu değerdir.|  |
| **Ödeme Başlatma** | odmBsltm  | Kompleks: OdemeBaslatma  | Z   |   |  |
| **> Kimlik** | kmlk  | Kompleks:Kimlik  | Z   |   |  |
| **>> Kimlik Türü** | kmlkTur  | AN1| K | **TR.OHVPS.DataCode.KimlikTur** sıralı veri türü değerlerinden birini alır.| Çerçeve sözleşme kapsamındaki ödemelerde kullanımı zorunludur.<br>HHS geçerli bir Kimlik Numarası Türü olduğunu kontrol eder.<br>Kurum adına yapılan (ticari) ödemelerde, kurum adına işlem yapan kullanıcının kimlik türünün bu alanda gönderilmesi zorunludur. |
| **>> Kimlik Verisi** | kmlkVrs   | AN1..30 |K  | HHS nezdinde kullanıcı doğrulamasında kullanılan tanımlayıcıdır.<br>**TR.OHVPS.DataCode.KimlikTur** değerine göre uzunluk ve formatı değişir.| Çerçeve sözleşme kapsamındaki ödemelerde kullanımı zorunludur.<br>HHS, ÖBHS tarafından iletilmesi durumunda Kimlik Verisi üzeriden çapraz kontroller uygulamalı ve Kimlik Verisini temel alarak GKD gerçekleştirmelidir.<br> Pasaport numarasına ilişkin kontroller HHS'nin halihazırda kullandığı veri, akış ve tabi olduğu diğer düzenlemelerdeki işleyiş ile aynı şekilde ele alınmalıdır.<br> Kurum adına yapılan (ticari) ödemelerde, kurum adına işlem yapan kullanıcının kimlik türünün bu alanda gönderilmesi zorunludur. |
| **>> Kurum Kimlik Türü** | krmKmlkTur   |   AN1 |K  | Kurum adına yapılan ödemelerde ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik türüdür.<br>**TR.OHVPS.DataCode.KurumKimlikTur** sıralı veri türü değerlerinden birini alır.  | Kurum adına yapılan (ticari) ödemelerde kullanımı zorunludur.<br> HHS geçerli bir Kurum Kimlik Numarası Türü olduğunu kontrol eder. |
| **>> Kurum Kimlik Verisi**	| krmKmlkVrs |  AN1..30  |K  | Kurum adına yapılan ödemelerde ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik verisidir.<br> **TR.OHVPS.DataCode.KurumKimlikTur** değerine göre uzunluk ve formatı değişir.  |Kurum adına yapılan (ticari) ödemelerde kullanımı zorunludur.<br> HHS, ÖBHS tarafından iletilmesi durumunda Kurum Kimlik Verisi üzeriden çapraz kontroller uygulamalıdır. |
| **>> Ödeme Hizmeti Kullanıcısı Türü** |  ohkTur  | AN1   | Z |**TR.OHVPS.DataCode.OhkTur** sıralı veri türü değerlerinden birini alır **(B: Bireysel, K:Kurumsal)**| Kurum adına yapılan ödemelerde K değerini alır. Kurum Kimlik Türü ve Kurum Kimlik Verisi alanlarının girilmiş olduğu çapraz olarak kontrol edilir. |
| **> İşlem Tutarı** |  islTtr  | Kompleks:Tutar   | Z |   |  |
| **>> Para Birimi** 	| prBrm   |  AN3  | Z | Para Birimi.<br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **53: (Para Birimi)** alanında tanımlı Para Birimi verisi kullanılır.  | HHS geçerli bir para birimi olduğu kontrol eder. |
| **>> Tutar**  | ttr   | AN1..24   | Z |  ÖBHS'nin ön yüzde kullanıcıdan teyit aldığı tutar. <br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **54: (Tutar)** alanında tanımlı Tutar verisi kullanılır. <br> Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$'|  |
| **> Gönderen** | gon   |  Kompleks:Hesap  | İ |   |  |
| **>> Unvan**	| unv   | AN3..140  | K  | Gönderenin unvanıdır.<br> HHS, bu bilgiyi ÖBHS sisteminden gelen veri yerine FAST’a iletirken kendi sisteminden alabilir.<br> Tek seferlik ödeme dışında YÖS'ün gönderen unvanını göndermesi zorunludur.|HHS’nin bu veri ile kendi sistemlerindeki verinin farklı olması ve Kimlik Numarası ile eşleşmemesi durumunda ödeme emri başlatma isteği reddedilir.<br> ÖBHS verisi ile HHS verisinin farklılaşması durumunun ise risk değerlendirme sistemlerine girdi olarak kullanması tavsiye edilir.|
| **>> Hesap Numarası** |  hspNo  |  AN26  | İ | ÖBHS'nin ön yüzünden daha önce kayıt altına alınmış hesaplar arasından seçtirdiği veya müşteriye girdiği IBAN’dır.<br> ÖBHS tarafından iletilmediği durumda, gönderen hesap bilgisini müşteri tarafından HHS’nin dijital kanalında GKD sonrasında seçilebilir. Bu amaçla ÖBHS arayüzünde HHS seçtirilmelidir.<br> Hesap Referansı kullanılıyorsa Hesap Numarası kullanılmayabilir. Hesap referansı ile ödeme emri rızası başlatılacak ise HHS hesap referansı değeri ile ilişkilendirilmiş mevcut bir hesap bilgisi rızası var mı kontrol etmelidir. Eğer aktif bir rızası yok ise **TR.OHVPS.Business.InvalidContent** hatası verilmelidir. <br> Ödeme Sistemine doğrudan katılımcı olmayan ÖHS'ler müşterilerine IBAN sunmadıkları için hspRef üzerinden ödeme başlatabilirler. Bu durumda hesap numarası boş olacaktır. | ÖBHS tarafından iletildiği durumda; IBAN içerisindeki HHS kodunun istek başlığındaki HHS kodu ile aynı olduğu (hesabın HHS’ye aitliğinin kontrolü), IBAN’ın doğruluğu (kontrol basamağı doğrulaması), Hesap numarasının ÖHK’ya ait olduğu, HHS’ye özel ödeme izni verilmeyen farklı statülerin bulunması durumu kontrol edilir.<br> Kontrol başarısız olduğunda **TR.OHVPS.Business. InvalidAccount** hatası YÖS’e iletilir. |
|**>> Hesap Referansı** | hspRef   |  AN5..40  | İ | HHS tarafından hesap için atanan biricik tanımlıyıcıdır (uuid).<br>YÖS bazında farklılaşması gerekmez.<br> ÖBHS’nin aynı zamanda HBHS olduğu durumda müşteri rızası tesis edilmiş bir hesabın referansı üzerinden de ödeme başaltılabilir.<br> Hesap Numarası kullanılıyorsa Hesap Referansı kullanılmayabilir. <br> Ödeme Sistemine doğrudan katılımcı olmayan HHS'ler müşterilerine IBAN sunmadıkları için hspRef üzerinden ödeme başlatabilirler. Bu durumda hesap numarası boş olacaktır.   | HspRef'e bağlı IBAN değiştiğinde yeni IBAN'ın da ilgili HspRef ile ilişkilendirilmesi beklenmektedir. Bu durumda, HBHS, HspRef ile sorguya geldiğinde HHS'nin yeni IBAN ve hesap hareketlerini dönebilmesi mümkün olacaktır. HspRef’in, IBAN değiştiğinde değiştirilmemesi tavsiye edilmektedir.|
| **> Alıcı** |  alc  |  	Kompleks:Hesap  | Z |   |  |
| **>> Unvan** | unv | AN3..140 | K  | **Kolay Adres Sistemi** kullanılmıyorsa zorunludur.<br> Alıcının unvanıdır. ÖBHS ekranlarından girişi yapılabileceği gibi ÖBHS’nin kayıtlı alıcılarından yapılan seçimle de doldurup gönderebildiği bilgi olabilir.<br> FAST-TR Karekod Veri Organizasyonunda;<br> İşyeri tarafından sunulan uzun karekod yapısının **59:** alanında tanımlı İşyeri adı alanıdır, Kişiden Kişiye Ödeme Karekod Yapısının **07:** alanında tanımlı <br> **Ödeme Alıcısının Adı ve Soyadı** alanıdır. <br><br>FAST-TR Karekod dışındaki iş yeri ödemelerinde; yine Unvan alanında işyeri adı bilgisi gönderilmelidir.|  |
| **>> Hesap Numarası**	|hspNo | AN26 | K | **Alıcının Hesap Numarası (IBAN)** alanıdır.<br> **Kolay Adres Sistemi** kullanılmıyorsa zorunludur.<br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **30-01:** alanında tanımlı İş Yeri IBAN verisi kullanılır.<br> Alıcının birden fazla hesabının kullanılabilir olduğu durumlarda (özellikle işyeri ödemelerinde HHS nezdindeki hesap (on-us havale akışı) tercih edilmelidir. | HHS (Gönderen Katılımcı) tarafından IBAN doğrulaması (kontrol basamağı doğrulaması) yapılır.  |
| **>> Kolay Adres** | kolas   | Kompleks:Kolas  | K  |   | Tek seferlik ödemelerde ( kimlik bilgileri boş iletildiğinde) KOLAS nesnesi dolu iletiliyorsa; HHS tarafından TR.OHVPS.Business.InvalidContent hatası dönülmelidir |
| **>>> Kolas Türü**  |  kolasTur   |  AN1   | Z  |  **TR.OHVPS.DataCode.KolasTur** sıralı veri türü değerlerinden birini alır.<br> Alıcı Hesap Numarası girilmediyse kullanımı zorunludur ve **Kolay Adres Tipi** alanıyla birlikte kullanılır. | HHS (Gönderen FAST katılımcısı) tarafından KOLAS Servisine yapılan sorguda girdi olarak kullanılır. |
| **>>> Kolas Değeri**  |  kolasDgr   |  AN7..50   |  Z | Müşterinin eklediği, HHS (FAST katılımcısı) tarafından doğrulanmış Kolay Adres değeridir. Alabileceği değerler BKM “Kolay Adresleme Sistemi Uygulama Kuralları” belgesinde tanımlıdır.<br> Hesap Numarası girilmediyse kullanımı zorunludur ve **Kolay Adres Tipi** alanıyla birlikte kullanılır.  | HHS (Gönderen FAST katılımcısı) tarafından KOLAS Servisine yapılan sorguda girdi olarak kullanılır.  |
| **> Karekod**  | kkod | Kompleks:Karekod   |  	K   |      |  |
| **>> Akış Türü** |   aksTur  |  AN2   |  Z | **TR.OHVPS.DataCode.KareKodAksTur** sıralı veri değerlerinden birini alır. Kolay Adresi Sistemi ile birlikte kullanılmaz.  |  |
| **>> Referansı** | kkodRef   | AN1..12    | K  |  **Karekod referans numarasını** gösterir.<br>Okunan karekodda referans değeri varsa kullanılması zorunludur.<br> Karekod ilke ve kurallar belgesinde tanımlandığı şekilde kullanılması gerekmektedir.<br> Kolay Adresi Sistemi ile birlikte kullanılmaz. |  |
| **>> Üretici Kodu**	  |  kkodUrtcKod   |   AN4  |Z   | Karekod üreticisinin kodu.<br> Ödeme Hizmeti Sağlayıcıları ve TCMB tarafından uygun görülen ödeme sistemi işleticisi TR Karekod üretebilmek için BKM’ye kayıt başvurusu yaparak karekod üretici kodu alabileceklerdir. Bankalar EFT kodlarını kullanacak olup ayrıca kayıt yaptırmalarına gerek bulunmamaktadır. 4 haneden kısa değerlerin sol tarafı ’0’ karakteri ile tamamlanmalıdır.  |  |
| **> Ödeme Ayrıntıları**	| odmAyr |  Kompleks: OdemeAyrintilari | Z  |   |  |
| **>> Ödeme Kaynağı** |odmKynk   |  AN1   |Z   |  Ödemenin başlatıldığı kaynağı belirtir. **TR.OHVPS.DataCode.OdemeKaynak** sıralı veri veri değerlerinden “O” değeri atanarak iletilmelidir. “O” değeri “Açık bankacılık aracılığı ile gönderilen ödemelerde kullanılır.” anlamını taşımaktadır.  | HHS, YÖS'ün API deseninde "O" kodunu ilettiğini kontrol eder. |
| **>> Ödeme Amacı** |  odmAmc   |   AN2  | Z  |  **TR.OHVPS.DataCode.OdemeAmaci** sıralı veri değerlerinden birini alır. Karekod akışında, FAST Karekod Veri Organizasyonundaki 62-08: alanında tanımlı Ödeme Amacı verisi kullanılır. | HHS geçerli bir Ödeme Amacı kodu olduğunu kontrol eder. |
| **>> Referans Bilgisi**	|  refBlg   |  AN1..140   | K  |  Ödemeye özel **Referans Bilgisi** alanıdır. Karekod işlemi değil ise zorunludur.<br> -	Kişiden kişiye fon aktarımlarında: Gün içerisinde ÖHK özelinde, her işleme özel biricik olarak oluşturulan referans bilgisidir. <br>Karekod P2P akışı için referans bilgisi (Karekod referans numarası değil, işleme özel üretilecek referans bilgisidir.) YÖS tarafından atanacaktır. <br> -	E-ticaret işlemlerinde sipariş/takip numarası/müşteri/abone numarası<br> -	İşyeri Ödemesi Karekod akışında, FAST Karekod Veri Organizasyonundaki<br> -	62-01: alanında tanımlı Fatura Numarası <br> -	62-06: alanında tanımlı Müşteri Numarası <br> verilerinden biri kullanılır. | YÖS bu değeri ÖHK’yı HHS’ye yönlendirmeden önceki ekranda göstermeli, ve HHS bu değeri GKD için kullandığı önyüzünde “işlem doğrulama kodunun” bir unsuru olarak yine ÖHK’ya göstermelidir.  |
| **>> Açıklama**	|  odmAcklm   | AN1..200    | İ  | ÖBHS’nin ÖHK’dan aldığı ya da kendisinin atadığı işlem açıklaması bilgisi. <br>FAST/PÖS sistemi üzerinden yapılan ödemeler için açıklama bilgisi girilirse boşluk karakteri girilerek geçilemez. En az bir alfasayısal karakter girilmesi zorunludur.<br>  |  |
| **İşyeri Ödeme Bilgileri**	|  isyOdmBlg   | Kompleks:IsyeriOdemeBilgileri  | K  |  İşyeri ödemelerinde kullanılabilecek alanlardır. Karekodlu işyeri ödemesi akışında bu alanlar dolu geldiği için isteğe bağlı olarak gönderilebilir. isyOdmBlg alanlarının en az birinin dolu olması durumunda istekte yer alır.<br> İşyeri Ödeme Bilgileri, YÖS uygulama önyüzünde ÖHK’nın bildiği ve girişi yapılması beklenen bir bilgi olmamalıdır. YÖS tarafından sistemsel olarak doldurulması gereklidir.  | |
| **> İşyeri Kategori Kodu** |   isyKtgKod  | AN4    |K   | İşlemin, ISO 18245:2003 uyumlu İşyeri Kategori Kodudur (Merchant Category Code, MCC). Ödeme Amacı = ‘06’ ya da ‘04’ olan ödeme işlemleri için doldurulabilir. <br>4 karakterden küçük değerlerin başına 0 eklenerek iletilmesi gereklidir. |  |
| **> Alt İşyeri Kategori Kodu** |   altIsyKtgKod  |   AN4  | K  | İşlem alt işyerinden gerçekleştiriliyorsa, ISO 18245:2003 uyumlu İşyeri Kategori Kodudur (Merchant Category Code, MCC).<br>4 karakterden küçük değerlerin başına 0 eklenerek iletilmesi gereklidir. |  |
| **>Üye İş Yeri Tekil Kimlik** |  genelUyeIsyeriNo   |  AN8   |  K |  İşyeri kayıt sisteminde kayıtlı İşyeri için BKM tarafından üretilmiş olan genel işyeri numarasıdır (GlobalMerchantId) 8 haneden küçük gönderiminde başa ‘0’ eklenmelidir. Örnek değer ‘01630618’ |  |
  


#### **BAŞARILI YANIT:**  

POST işleminin RESPONSE gövdesini (BODY) oluşturan “OdemeEmriRizasi” nesnesi Tablo-8’deki parametrelerden oluşur:  


**Tablo 8: “OdemeEmriRizasi” nesnesi**  


| Alan Adı | JSON Alan Adı |Format: Veri modeli İsmi  |Zorunlu / Koşullu / İsteğe bağlı |Açıklama |
| --- |--- |--- |--- |--- |
|  **Riza Bilgileri**	| rzBlg | Kompleks: RizaBilgileri | Z |  |
| **> Rıza No**|rizaNo  | 	AN1..128 | Z  | OdemeEmriRızasi nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı |
| **> Oluşturma Zamanı** | olusZmn | ISODateTime | Z | OdemeEmriRizasi nesnesinin oluşturulma zamanı |
| **> Güncellenme Zamanı** | gnclZmn | ISODateTime |  Z | OdemeEmriRizasi nesnesinin güncellenme zamanı |
| **> Rıza Durumu** | rizaDrm | AN1 |  Z | **TR.OHVPS.DataCode.RizaDurumu** sıralı veri tipini değerlerinden birini alır. |
| **> Rıza Iptal Detay Kodu**| rizaIptDtyKod | AN2 | K  | **Rıza durumunun iptal olduğu durumda zorunludur. Alabileceği değerler 4. Bölümde detaylandırılmıştır.** |
| **Katılımcı Bilgisi** | katilimciBlg | Kompleks:KatilimciBilgisi | Z | Katılımcılara atanmış kod bilgileridir. |  
| **>Hesap Hizmeti Sağlayıcısı Kodu** | hhsKod  | AN4  | Z  |  İsteğin iletildiği Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu) | 
| **> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu** | yosKod		  | AN4  | Z  | İsteği gönderen Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.  | 
| **GKD** | gkd  |  Kompleks:Gkd | Z   |   |  
| **> Yetkilendirme Yöntemi**	| yetYntm  | AN1  |  Z | **TR.OHVPS.DataCode.GkdTur** sıralı veri türü değerlerinden birini alır.  HHS, ÖBHS’nin belirlediği yöntemi dikkate alarak kendi belirlediği yöntemi kullanır.  |  
| **> Yönlenme Adresi** | yonAdr  |  AN1..1024 | K  | Yönlendirmeli güçlü kimlik doğrulama için zorunlu. HHS, müşteri uygulama / tarayıcısını yönlendirmeli akışta bu alanda belirtilen YÖS adresine yönlendirir.
<br>   |
| **> Ayrık GKD**	| ayrikGkd  | Kompleks:AyrikGkd  | K   | Ayrık güçlü kimlik doğrulama için zorunlu.  | yetYntm = A gönderilmiş ise ayrikGkd nesnesinin dolu gönderilmesi zorunludur. yetYntm = Y için bu nesne iletilmemelidir. |
| **>> OHK Tanım Tip**	| ohkTanimTip  | AN8  | K   | ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım tipleridir. İstek içerisindeki veri değiştirilmeden iletilir. |  
| **>> OHK Tanım Değer**	| ohkTanimDeger  | AN1..30  | K   |ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım değeridir. ohkTanimTip'i ile uyumlu değerdir.  İstek içerisindeki veri değiştirilmeden iletilir.|  
| **> HHS Yönlenme Adresi**	| hhsYonAdr  |  AN1..1024 | K  | Yönlendirmeli akış türünde GKD doğrulama bilgilerinin girilebilmesi için uygulamadan açılacak yönlendirme sayfasının adresi. Ayrık GKD akışında bu alan dönülmemelidir.
| **> Yetkilendirme Tamamlanma Zamanı**	| yetTmmZmn  |  ISODateTime | Z  | Yetkilendirme akışının tamamlanması gereken son zamanı gösterir. <br> HHS tarafından maksimum 5 dk içinde işlem tamamlanacak şekil zaman damgası oluşturulur. Zaman aşımı olduğunda HHS’nin GKD’ye izin vermeyecek şekilde hata mesajı vermesi gerekmektedir.<br> Rıza durumu Yetkilendirildi statüsüne geçene kadarki süredir.|
| **Ödeme Başlatma** | odmBsltm  | Kompleks: OdemeBaslatma  | Z   |   |  
| **> Kimlik** | kmlk  | Kompleks:Kimlik  | Z   |   |  
| **>> Kimlik Türü** | kmlkTur  | AN1| K | **TR.OHVPS.DataCode.KimlikTur** sıralı veri türü değerlerinden birini alır.| 
| **>> Kimlik Verisi** | kmlkVrs   | AN1..30 |K  | HHS nezdinde kullanıcı doğrulamasında kullanılan tanımlayıcıdır.<br>**TR.OHVPS.DataCode.KimlikTur** değerine göre uzunluk ve formatı değişir.| 
| **>> Kurum Kimlik Türü** | krmKmlkTur   |   AN1 |K  | Kurum adına yapılan ödemelerde ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik türüdür.<br>**TR.OHVPS.DataCode.KurumKimlikTur** sıralı veri türü değerlerinden birini alır.  | 
| **>> Kurum Kimlik Verisi**	| krmKmlkVrs |  AN1..30  |K  | Kurum adına yapılan ödemelerde ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik verisidir.<br> **TR.OHVPS.DataCode.KurumKimlikTur** değerine göre uzunluk ve formatı değişir.  |
| **>> Ödeme Hizmeti Kullanıcısı Türü** |ohkTur| AN1| Z |**TR.OHVPS.DataCode.OhkTur** sıralı veri türü değerlerinden birini alır **(B: Bireysel, K:Kurumsal)**| 
| **> İşlem Tutarı** |  islTtr  | Kompleks:Tutar   | Z |   |  
| **>> Para Birimi** 	| prBrm   |  AN3  | Z | Para Birimi.<br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **53: (Para Birimi)** alanında tanımlı Para Birimi verisi kullanılır. |  
| **>> Tutar**  | ttr   | AN1..24   | Z |  ÖBHS'nin ön yüzde kullanıcıdan teyit aldığı tutar. <br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **54: (Tutar)** alanında tanımlı Tutar verisi kullanılır. <br> Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$' |
| **> Gönderen** | gon   |  Kompleks:Hesap  | İ |   |
| **>> Unvan**	| unv   | AN3..140  | K  | Gönderenin unvanıdır.<br> HHS, bu bilgiyi ÖBHS sisteminden gelen veri yerine FAST’a iletirken kendi sisteminden alabilir. <br> Tek seferlik ödeme dışında YÖS'ün gönderen unvanını göndermesi zorunludur.|
| **>> Hesap Numarası** |  hspNo  |  AN26  | İ | ÖBHS'nin ön yüzünden daha önce kayıt altına alınmış hesaplar arasından seçtirdiği veya müşteriye girdiği IBAN’dır.<br> ÖBHS tarafından iletilmediği durumda, gönderen hesap bilgisini müşteri tarafından HHS’nin dijital kanalında GKD sonrasında seçilebilir. Bu amaçla ÖBHS arayüzünde HHS seçtirilmelidir.<br> **GKD sonrası HHS ekranında seçilen Hesap Numarası POST işleminin yanıtında dönülemez ancak isteğe bağlı GET sorgusu ile dönülebilir.** <br> Hesap Referansı kullanılıyorsa Hesap Numarası kullanılmayabilir. <br> Ödeme Sistemine doğrudan katılımcı olmayan ÖHS'ler müşterilerine IBAN sunmadıkları için hspRef üzerinden ödeme başlatabilirler. Bu durumda hesap numarası boş olacaktır.  |
|**>> Hesap Referansı** | hspRef |  AN5..40  | İ | HHS tarafından hesap için atanan biricik tanımlıyıcıdır (uuid).<br>YÖS bazında farklılaşması gerekmez.<br> ÖBHS’nin aynı zamanda HBHS olduğu durumda müşteri rızası tesis edilmiş bir hesabın referansı üzerinden de ödeme başaltılabilir.<br> **GKD sonrası HHS ekranında seçilen Hesap Referansı POST işleminin yanıtında dönülemez ancak isteğe bağlı GET sorgusu ile dönülebilir.** <br> Hesap Numarası kullanılıyorsa Hesap Referansı kullanılmayabilir.  <br> Ödeme Sistemine doğrudan katılımcı olmayan ÖHS'ler müşterilerine IBAN sunmadıkları için hspRef üzerinden ödeme başlatabilirler. Bu durumda hesap numarası boş olacaktır.  |
| **> Alıcı** |  alc  |  	Kompleks:Hesap  | Z | |
| **>> Unvan** | unv | AN3..140 | Z  | Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen adres kaydı yaptırmış olan alıcının maskeli ad-soyadı veya maskeli ticari unvan bilgisidir.<br>Kolas’tan dönen “account owner” alanı kullanılmalıdır.<br>Kolay adres değil ise ÖBHS tarafından istek mesajında iletilen unvan bilgisidir. |
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
| **>> Ödeme Sistemi**	|  odmStm   | AN1    | Z  | **TR.OHVPS.DataCode.OdemeSistemi** sıralı veri değerlerinden birini alır. |
| **>> Beklenen Ödeme Zamanı**	|  bekOdmZmn   | ISODateTime   | K  | İşlemin yönlendirildiği ödeme sistemi PÖS ise ve PÖS işlem saatleri dışında ise işlemin yapılabileceği ilk zaman bilgisidir. Bu alan ileri vadeli ödemeler için düşünülmüştür. İlk fazda doldurulmasına gerek olmadığı düşünülmektedir.|
| **İşyeri Ödeme Bilgileri**	|  isyOdmBlg   | Kompleks:IsyeriOdemeBilgileri  | K  |  İşyeri ödemelerinde kullanılabilecek alanlardır. Karekodlu işyeri ödemesi akışında bu alanlar dolu geldiği için isteğe bağlı olarak gönderilebilir. isyOdmBlg alanlarının en az birinin dolu olması durumunda yanıtta yer alır.  |
| **> İşyeri Kategori Kodu** |   isyKtgKod  | AN4    | K   | İşlemin, ISO 18245:2003 uyumlu İşyeri Kategori Kodudur (Merchant Category Code, MCC). Ödeme Amacı = ‘06’ ya da ‘04’ olan ödeme işlemleri için doldurulabilir.  |
| **> Alt İşyeri Kategori Kodu** |   altIsyKtgKod  |   AN4  | K  | İşlem alt işyerinden gerçekleştiriliyorsa, ISO 18245:2003 uyumlu İşyeri Kategori Kodudur (Merchant Category Code, MCC).  |
| **>Üye İş Yeri Tekil Kimlik** |  genelUyeIsyeriNo   |  AN8   |  K |  İşyeri kayıt sisteminde kayıtlı İşyeri için BKM tarafından üretilmiş olan genel işyeri numarasıdır (GlobalMerchantId) 8 haneden küçük gönderiminde başa ‘0’ eklenmelidir. Örnek değer ‘01630618’   |  

  

## 6.3.	ADIM 2- Ödeme Emri Rızasının Yetkilendirilmesi

<img src="./images/OdemeEmriRizasininYetkilendirilmesi.png" width="75%" >  

**Şekil 6: Ödeme Emri Rızasının Yetkilendirilmesi**  

ÖBHS, ÖHK’nın ödeme emrini yetkilendirmesi isteğini iletir. Ödeme emrinin yetkilendirilmesi, HHS tarafından gerçekleştirilen Yönlendirme veya Ayrık GKD yöntemiyle yapılır.
- **Yönlendirmeli doğrulama akışında**, ÖBHS ÖHK’yı HHS’ye yönlendirir. 
  - ÖBHS tarafından yönlendirme, bir önceki adımdaki RizaNo’yu içerir. 
  - Yönlendirmenin RizaNo’yu içermesi sayesinde, HHS hangi ödeme emriyle ilişkili olarak yönlendirme yapıldığını ilişkilendirebilir.
  -	HHS, ÖHK için GKD sürecini işletir.  

  ÖHK’yı doğrularsa,
    1. 	ÖHK -bir önceki adımda seçmediyse- borçlu hesabını seçer. 
    2. 	HHS, ödeme emri rıza kaynağının durumunu “Yetkilendirildi” olarak günceller. 
    3. HHS, ÖHK’yı “olumlu yönlendirme akışı” ile ÖBHS tarafından tanımlanan yönlendirme adresine yönlendirir:  

```
yonAdr?rizaDrm=Y&yetKod=xx&rizaNo=yy&rizaTip=O&drmKod=zzz
```  

  ÖHK’yı doğrulayamazsa,  
    1. HHS, ödeme emri rıza kaynağının durumunu “Yetki İptal” olarak günceller.   
    2. HHS, ÖHK’yı “olumsuz yönlendirme akışı” ile ÖBHS tarafından tanımlanan yönlendirme adresine yönlendirir:  
    


```
yonAdr?rizaDrm=I&rizaNo=yy&rizaTip=O&drmKod=zzz
```  

HHS tarafında oluşabilecek bir hata durumunun YÖS’e aktarılması gerektiği durumlar olabilir. Bu durumda yonlendirme adresinde hata kodu parametresi zorunlu olarak iletilmelidir.  
Hata açıklamalarının neler olabileceği ve YÖS’ün kendi uygulamasında bu hatayı ne şekilde göstereceği aşağıda tariflenmiştir. 

```
yonAdr?rizaDrm=I&rizaNo=yy&rizaTip=O&rizaIptDtyKod=11&drmKod=zzz
```  


URL’de iletilen “Rıza İptal Detay Kodu” Rıza durumları bölümünde (4. Bölüm) belirtilen hata kodları ile aynı olacak şekilde tasarlanmıştır. GKD sırasında yapılması gereken kontroller 5.3 bölümünde detaylandırılmıştır.


- **Ayrık doğrulama akışında**, HHS, ÖHK’nın ödeme emrini başlattığı uygulamadan farklı olabilecek bir “doğrulama” uygulamasında işlemi doğrulamasını ister. 
  - Ayrık akış ÖBHS’nin farklı bir kanal kullanarak yetkilendirme isteği göndermesiyle başlatılır. 
  - Bu yetkilendirme isteği, yetkilendirilecek ödeme emri rızasının eşleştirileceği ÖHK’nın bulunması için ilgili veriyi taşır. 
  - HHS, ÖHK’yı doğrular.
  - ÖHK -bir önceki adımda seçmediyse- borçlandırılacak hesabını seçer. 
  - HHS, ödeme emri rıza kaynağının durumunu “Yetkilendirildi” olarak günceller. 

Başarılı GKD sonrasında (rizaDrm=’Y’) ilgili rıza nesnesi için (belirli bir rizaNo) yetkilendirme kodunun (yetKod) alınmasının ardından erişim belirteci erişim adresine POST çağrısı yapılarak yetkilendirme kodu karşılığında erişim belirteci ve yenileme belirteci alınır. POST /erişim-belirteci erişim noktası EK-3’te açıklanmıştır.  

Erişim belirteci alındıktan sonra; HHS, ödeme emri rıza kaynağının durumunu “Yetki Kullanıldı” olarak günceller.

## 6.4.	ADIM 2.1 – Ödeme Emri Rızasının Sorgulanması (isteğe bağlı)

<img src="./images/OdemeEmriRizasininSorgulanmasi.png" width="75%" >  

**Şekil 7: “odemeEmriRizasi” nesnesinin sorgulanması (isteğe bağlı)**  

GKD işleminin başarıyla tamamlanıp Ödeme Emri Rızasının yetkilendirilmesi esnasında, gönderen hesap seçiminin HHS ekranında yapıldığı durumlar olabilir. Bu durumlarda ödeme emri isteğinde gönderen hesap bilgileri alanının zorunlu olması nedeniyle, **OdemeEmriRizasi** nesnesi sorgulanarak gönderen hesap bilgileri (hesap numarası ve/veya hesap referansı) alınmalıdır. HHS, “**ADIM 2 -Ödeme Emri Rızasının Yetkilendirilmesi**” akışında ÖHK’nın hesapları arasında seçim yapmasını ve seçilen hesap bilgisinin **OdemeEmriRizasi** nesnesine işler.  

**GET /odeme-emri-rizasi/{RizaNo}**  

ÖBHS, mevcut durumunu kontrol etmek için, oluşturulan bir **OdemeEmriRizasi** kaynağının durumunu isteğe bağlı olarak alabilir.

**Durum**  

**OdemeEmriRizasi** kaynağı için kullanılabilecek durum göstergeleri şu şekildedir:
- Yetki Bekleniyor
- Yetkilendirildi
- Yetki Kullanıldı
- Yetki Ödeme Emrine Dönüştü
- Yetki Sonlandırıldı
- Yetki İptal

Ödeme Emri Rızası sonlandırıldı ve iptal statüsünde olan rıza'ların güncellenme zamanından(gnclZmn) 6 ay sonrasına kadar sorgulanabilir olması beklenmektedir. HHS'ler ilgili süre sonrasında yapılacak rıza sorgularına TR.OHVPS.Resource.NotFound uyarısı verebilir. YÖS'ler tarafından iptal ve sonlandırıldı statüsünde olan rızalar için sorgulama yapmamalıdır.

Ödeme emri rıza durum değişiklikleri 4.2 bölümünde detaylandırılmıştır.  

**BAŞARILI YANIT:**

**GET /odeme-emri-rizasi/{RizaNo}** yanıtının (RESPONSE) gövdesinde (BODY)  “OdemeEmriRizasiİstegi” nesnesi kullanılır. İstek başarıyla sonuçlanırsa HHS kaynak sunucusunda Tablo-8’de yer alan parametreleri içeren “OdemeEmriRizasi” oluşturulur.  

Gönderen Hesap Bilgisinin, ADIM 2 (Ödeme Emri Rızasının Yetkilendirilmesi) sonrasında HHS ekranından seçildiği akışta “OdemeEmriRizasi” nesnesi güncellenir ve ÖBHS **GET /odeme-emri-rizasi/{RizaNo}** isteği yaparak güncel gönderen hesap bilgisi bilgisini de içeren “OdemeEmriRizasi” nesnesini çekmelidir.

Çerçeve sözleşme kapsamında olmayan tek seferlik ödeme işlemlerinde, Kimlik Türü ve Kimlik Verisi bilgilerinin ödeme emri rızası sırasında gönderimi zorunlu değildir. Başarılı GKD sonrası, yani erişim belirteci alındığında, ödeme emri oluşmadan önce, YÖS’ün ödeme emri rızasını sorgulayarak bu bilgileri alması ve ödeme emrini oluştururken Kimlik Türü, Kimlik Verisi ve Gönderen Unvan alanlarını dolu olarak göndermesi beklenmektedir.  Ancak rıza durumu “Yetki Bekleniyor - B”, “Yetkilendirildi - Y” ve “Yetki İptal - I” statülerinde ise, ödeme emri rızası sorgulamasında, HHS’nin Kimlik Türü ve Kimlik Verisi bilgisini YÖS ile paylaşmaması gerekmektedir. 


## 6.5.	ADIM 3- Ödeme Emrinin Oluşturulması

<img src="./images/OdemeEmrininOlusturulmasi.png" width="75%" >  

**Şekil 8: Ödeme Emrinin Oluşturulması**  

**POST /odeme-emri**

- ÖHK’nın Güçlü Kimlik Doğrulama ile işlemi yetkilendirmesi sonrasında, ÖBHS OdemeEmri kaynağını oluşturur. 
- Ödeme emri (OdemeEmri) uygun ödeme kaynağına POST isteği yapılarak başlatılır. 
  - POST HHS tarafından işlenir: RizaDurumu “Yetki Kullanıldı” ise işleme başlanır.
  - POST /odeme-emri-rizasi ile POST /odeme-emri isteklerinde istek alanların aynı olması beklenmektedir. HHS tarafından kontrolü sağlanmalıdır.POST verisindeki Gönderen Hesap Numarası ve Alıcı Hesap Numarasının aynı bankaya aitse HAVALE değilse FAST veya PÖS iş akışına geçilir.
  - POST verisinin modele göre kontrolü yapılır (alan kontrolleri)
  -	POST verisinin mantıksal kontrolleri yapılır (IBAN kontrolü, çapraz alan kontroller)
  -	OdemeEmriDurumu “Gerçekleşti” / “Gönderildi” / “Gerçekleşmedi” olarak güncellenir. 
- POST başarılı olursa, içerisinde OdemeEmriNo ve OdemeEmriDurumu değişkenleri de bulunan OdemeEmri nesnesi ÖBHS’ye döner ve RizaDurumu değişkenin değeri “Yetki Ödeme Emrine Dönüştü” olarak güncellenir.

**BAŞARILI İSTEK:**  


**Tablo 9: “OdemeEmriIstegi” nesnesi**  


| Alan Adı | JSON Alan Adı |Format: Veri modeli İsmi  |Zorunlu / Koşullu / İsteğe bağlı |Açıklama |HHS tarafından ödeme emri oluşturulması sırasında yapılması gereken kontrol ve işlemler|FAST A01 PÖS M01 mesaj mapping| 
| --- |--- |--- |--- |--- |--- |--- |
| **Riza Bilgileri**	| rzBlg | Kompleks: RizaBilgileri | Z |  | | |
| **> Rıza No**|rizaNo  | 	AN1..128 | Z  | OdemeEmriRızasi nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı | | |
| **> Oluşturma Zamanı** | olusZmn | ISODateTime | Z | OdemeEmriRizasi nesnesinin oluşturulma zamanı | | |
| **> Rıza Durumu** | rizaDrm | AN1 |  Z | **TR.OHVPS.DataCode.RizaDurumu** sıralı veri tipini değerlerinden birini alır. | | |
| **Katılımcı Bilgisi** | katilimciBlg | Kompleks:KatilimciBilgisi | Z | Katılımcılara atanmış kod bilgileridir. |   | |
| **>Hesap Hizmeti Sağlayıcısı Kodu** | hhsKod  | AN4  | Z  |  İsteğin iletildiği Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu) | HHS, hhsKod’un kendisine ait olduğunu ve istek başlığındaki x-aspsp-code değeri ile aynı olduğunu kontrol eder.<br> Hata durumunda **TR.OHVPS.Connection.InvalidASPSP** hata kodunu döner. |Gönderen katılımcı kodu (yani bankanın FAST/PÖS’teki Katılımcı kodu) |
| **> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu** | yosKod		  | AN4  | Z  | İsteği gönderen Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.  |HHS, yosKod’un geçerli bir Ödeme Hizmeti Sağlayıcısı Kodu olduğunu ve istek başlığındaki x-tpp-code değeri ile aynı olduğunu kontrol eder.<br> Hata durumunda **TR.OHVPS.Connection.InvalidTPP** hata kodunu döner.| **YosKod** |
| **GKD** | gkd  |  Kompleks:Gkd | Z   |   |   | |
| **>Yetkilendirme Yöntemi**	| yetYntm  | AN1  |  Z | **TR.OHVPS.DataCode.GkdTur** sıralı veri türü değerlerinden birini alır.   |   | 
| **>Yönlendirme Adresi** | yonAdr  |  AN1..1024 | K  | Yönlendirmeli güçlü kimlik doğrulama için zorunludur. HHS, müşteri uygulama / tarayıcısını yönlendirmeli akışta bu alanda belirtilen YÖS adresine yönlendirir.
 | | |
| **>Ayrık GKD**	| ayrikGkd  | Kompleks:AyrikGkd  | K   | Ayrık güçlü kimlik doğrulama için zorunlu.  | yetYntm = A gönderilmiş ise ayrikGkd nesnesinin dolu gönderilmesi zorunludur. yetYntm = Y için bu nesne iletilmemelidir. |
| **>>OHK Tanım Tip**	| ohkTanimTip  | AN8  | K   | ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım tipleridir. İstek içerisindeki veri değiştirilmeden iletilir. |  
| **>>OHK Tanım Değer**	| ohkTanimDeger  | AN1..30  | K   |ÖHK'nın HHS uygulaması tarafından tanınmasını sağlayacak tanım değeridir. ohkTanimTip'i ile uyumlu değerdir.  İstek içerisindeki veri değiştirilmeden iletilir.|  
| **>HHS Yönlenme Adresi**	| hhsYonAdr  |  AN1..1024 | K  | Yönlendirmeli akış türünde GKD doğrulama bilgilerinin girilebilmesi için uygulamadan açılacak yönlendirme sayfasının adresi. Ayrık GKD akışında bu alan dönülmemelidir. | | |
| **>Yetkilendirme Tamamlanma Zamanı**	| yetTmmZmn  |  ISODateTime | Z  | Yetkilendirme akışının tamamlanması gereken son zamanı gösterir. <br> Rıza durumu Yetkilendirildi statüsüne geçene kadarki süredir.| | |
| **Ödeme Başlatma** | odmBsltm  | Kompleks: OdemeBaslatma  | Z   |   |   | |
| **> Kimlik** | kmlk  | Kompleks:Kimlik  | Z   |   |   | |
| **>> Kimlik Türü** | kmlkTur  | AN1| Z | **TR.OHVPS.DataCode.KimlikTur** sıralı veri türü değerlerinden birini alır.| Çerçeve sözleşme kapsamındaki ödemelerde kullanımı zorunludur.<br>Ödeme Emri Rizası Nesnesindeki Kimlik Numarası Türü verisi ile aynı olmalıdır.<br>Kurum adına yapılan (ticari) ödemelerde, kurum adına işlem yapan kullanıcının kimlik türünün bu alanda gönderilmesi zorunludur. | |
| **>> Kimlik Verisi** | kmlkVrs   | AN1..30 |Z  | HHS nezdinde kullanıcı doğrulamasında kullanılan tanımlayıcıdır.<br>**TR.OHVPS.DataCode.KimlikTur** değerine göre uzunluk ve formatı değişir.| Çerçeve sözleşme kapsamındaki ödemelerde kullanımı zorunludur.<br>HHS, ÖBHS tarafından iletilmesi durumunda Kimlik Verisi üzeriden çapraz kontroller uygulamalı ve Kimlik Verisini temel alarak GKD gerçekleştirmelidir.<br>Ödeme Emri Rizası Nesnesindeki Kimlik Numarası verisi ile aynı olmalıdır.<br>Gerçek kişi tarafından yapılan ödemelerde,<br>1. HHS, Gönderen Adı ve Gönderen Hesap Numarasını ödeme emri isteğinde (Havale/FAST/PÖS) gönderir.<br>- Gönderen Adı ve diğer tüm müşteri bilgileri, Kimlik Numarası üzerinden elde edillir.<br>Pasaport numarasına ilişkin kontroller HHS'nin halihazırda kullandığı veri, akış ve tabi olduğu diğer düzenlemelerdeki işleyiş ile aynı şekilde ele alınmalıdır.<br>Kurum adına yapılan (ticari) ödemelerde, kurum adına işlem yapan kullanıcının kimlik verisi bu alanda gönderilebilmesi zorunludur. | **GonKimN / Psp** |
| **>> Kurum Kimlik Türü** | krmKmlkTur   |   AN1 |K  | Kurum adına yapılan ödemelerde ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik türüdür.<br>**TR.OHVPS.DataCode.KurumKimlikTur** sıralı veri türü değerlerinden birini alır.  | Kurum adına yapılan (ticari) ödemelerde kullanımı zorunludur.<br>Ödeme Emri Rizası Nesnesindeki Kurum Kimlik Türü verisi ile aynı olmalıdır. | |
| **>> Kurum Kimlik Verisi**	| krmKmlkVrs |  AN1..30  |K  | Kurum adına yapılan ödemelerde ÖHK’nın altında tanımlı olduğu tüzel kişilik için kullanılan kurum kimlik verisidir.<br> **TR.OHVPS.DataCode.KurumKimlikTur** değerine göre uzunluk ve formatı değişir.  |Kurum adına yapılan (ticari) ödemelerde kullanımı zorunludur.<br>Ödeme Emri Rizası Nesnesindeki Kurum Kimlik Verisi ile aynı olmalıdır. |**GonKimN / VKN** |
| **>> Ödeme Hizmeti Kullanıcısı Türü** |ohkTur| AN1| Z |**TR.OHVPS.DataCode.OhkTur** sıralı veri türü değerlerinden birini alır **(B: Bireysel, K:Kurumsal)**|Kurum adına yapılan ödemelerde K değerini alır. Kurum Kimlik Türü ve Kurum Kimlik Verisi alanlarının giilmiş olduğu çapraz olarak kontrol edilir.<br> Ödeme Emri Rizası Nesnesindeki ÖHK Türü ile aynı olmalıdır. | |
| **> İşlem Tutarı** |  islTtr  | Kompleks:Tutar   | Z |   |   | |
| **>> Para Birimi** 	| prBrm   |  AN3  | Z | Para Birimi.<br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **53: (Para Birimi)** alanında tanımlı Para Birimi verisi kullanılır.  | Ödeme Emri Rizası Nesnesindeki Para Birimi verisi ile aynı olmalıdır.  | |
| **>> Tutar**  | ttr   | AN1..24   | Z |  ÖBHS'nin ön yüzde kullanıcıdan teyit aldığı tutar. <br> Karekod akışında, FAST Karekod Veri Organizasyonundaki **54: (Tutar)** alanında tanımlı Tutar verisi kullanılır. <br> Tutar alanı regex patterni şu şekildedir: '^\d{1,18}$\|^\d{1,18}\\.\d{1,5}$' |Ödeme Emri Rizası Nesnesindeki İşlem Tutarı verisi ile aynı olmalıdır.<br>HHS işlem tutarı ödeme mesajında (Havale/FAST/PÖS) aynen taşınmak durumundadır. |**Ttr** |
| **> Gönderen** | gon   |  Kompleks:Hesap  | Z |   | | |
| **>> Unvan**	| unv   | AN3..140  | Z  | Gönderen kişinin ad soyad ya da ticari unvan bilgisi.<br>| HHS ve ÖBHS verisi tutarlı olmalıdır.<br> ÖBHS verisi ile HHS verisinin farklılaşması durumunun ise risk değerlendirme sistemlerine girdi olarak kullanması tavsiye edilir.| **GonAd** |
| **>> Hesap Numarası** |  hspNo  |  AN26  | K | ÖBHS'nin ön yüzünden seçtirdiği/kullanıcıya girdiği IBAN<br>Hesap numarası ya da Hesap Referansı alanlarından en az birinin dolu olarak gelmesi gerekmektedir.|Ödeme Emri Rizası Yanıtı Nesnesindeki Gönderen Hesap Numarası verisi ile aynı olmalıdır. |**GonHesN** |
|**>> Hesap Referansı** | hspRef |  AN5..40  | K |ÖBHS’nin aynı zamanda HBHS olduğu durumda müşteri rızası tesis edilmiş bir hesabın referansı üzerinden de ödeme başlatılabilir.<br>GKD sonrası HHS ekranında seçilen Hesap Referansı POST işleminin yanıtında dönülemez ancak isteğe bağlı GET sorgusu ile dönülebilir.<br>Hesap Numarası kullanılıyorsa Hesap Referansı kullanılmayabilir. <br> Ödeme Sistemine doğrudan katılımcı olmayan ÖHS'ler müşterilerine IBAN sunmadıkları için hspRef üzerinden ödeme başlatabilirler. Bu durumda hesap numarası boş olacaktır.  | | |
| **> Alıcı** |  alc  |  	Kompleks:Hesap  | Z | | | |
| **>> Unvan** | unv | AN3..140 | Z  | Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen adres kaydı yaptırmış olan alıcının maskeli ad-soyadı veya maskeli ticari unvan bilgisidir.<br>Kolay adres değil ise ÖBHS tarafından istek mesajında iletilen unvan bilgisidir. |YÖS’ten alıcı ad soyad bilgisi geliyorsa ve HHS'nin kontrolünden başarılı bir şekilde geçti ise HHS'nin tekrar alıcı ad soyad bilgisi için giriş yaptırmasına gerek bulunmamaktadır.  |**AlAd** |
| **>> Hesap Numarası**	|hspNo | AN26 | Z | Alıcının Hesap Numarası alanıdır (IBAN).<br>Kolay Adres  sorgusunda dönülen adres kaydı yaptırmış olan alıcının maskeli IBAN bilgisidir.<br>Kolay adres değil ise ÖBHS tarafından istek mesajında iletilen IBAN bilgisidir. Karekod akışında, FAST Karekod Veri Organizasyonundaki 30-01: alanında tanımlı İş Yeri IBAN verisi kullanılır.|Ödeme Emri Rizası Yanıtı Nesnesindeki Alıcı Hesap Numarası verisi ile aynı olmalıdır.<br> Kontroller başarıyla sonuçlanırsa, bilgi FAST/PÖS AlHesN alanına doğrudan aktarır ve FAST/PÖS Alan Katılımcı Kodu (AlKK) olarak Alıcı HHS Kodu kullanılır.<br> KOLAS sorgusu sonucunda ödeme emrinde iletilen maskeli bilgi ile HHS’nin kendi ödeme emri rızası isteğinde tuttuğu KOLAS sorgusundan dönülen bilgi maskelenerek karşılaştırılır. Eğer aynı değilse uygun hata kodu dönülerek işlem sonlandırılır. |**AlHesN** |
| **>> Kolay Adres** | kolas   | Kompleks:Kolas  | K  |  | | |
| **>>> Kolas Türü**  |  kolasTur   |  AN1   | Z  |  Müşterinin sorgulamak istediği Kolay Adres Tipi değeridir. <br>**TR.OHVPS.DataCode.KolasTur** sıralı veri türü değerlerinden birini alır.<br> Alıcı Hesap Numarası girilmediyse kullanımı zorunludur ve **Kolay Adres Tipi** alanıyla birlikte kullanılır. |  Ödeme Emri Rizası Yanıtı Nesnesindeki Kolay Adres Tipi verisi ile aynı olmalıdır. | |
| **>>> Kolas Değeri**  |  kolasDgr   |  AN7..50   |  Z | Müşterinin eklediği, HHS (FAST katılımcısı) tarafından doğrulanmış Kolay Adres değeridir. Alabileceği değerler BKM “Kolay Adresleme Sistemi Uygulama Kuralları” belgesinde tanımlıdır.<br> Alıcı Hesap Numarası girilmediyse kullanımı zorunludur ve **Kolay Adres Tipi** alanıyla birlikte kullanılır.  |  Ödeme Emri Rizası Yanıtı Nesnesindeki Kolay Adres Değeri verisi ile aynı olmalıdır. | **FAST (KolasRef)**|
| **>>> Kolas Referans Numarası**  |  kolasRefNo   |  N12   |  Z |Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen, BKM Kolay Adresleme Sistemi Uygulama Kuralları’nda tanımlı KOLAS tarafından ilgili sorguya özel olarak üretilmiş referans numarasıdır.|   | **KolasRef ( hem FAST hem de PÖS için aynı)**|
| **>>> Kolas Hesap Türü**  |  kolasHspTur   |  AN1   |  Z |Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen, BKM Kolay Adresleme Sistemi Uygulama Kuralları’nda tanımlı hesap türü bilgisidir:<br> **TR.OHVPS.DataCode.KolasHspTur** sıralı veri değerlerinden birini alır.|   | |
| **> Karekod**  | kkod | Kompleks:Karekod   |  	K   |  | | |
| **>> Akış Türü** |   aksTur  |  AN2   |  Z | Karekod Akış Türü Karekod ödemesinin hangi akışla gerçekleştirildiğini gösterir.<br> Kolay Adresi Sistemi ile birlikte kullanılmaz.<br> 01: FAST katılımcısından dinamik doğrulama hizmeti alınan işyeri ödemesi<br> 02: FAST katılımcısından statik doğrulama hizmeti alınan işyeri ödemesi<br>03: Kişiden kişiye ödemeler|Ödeme Emri Rizası Nesnesindeki Kare Kod Akış Türü verisi ile aynı olmalıdır. | **FAST: KrkdAksTur** |
| **>> Referansı** | kkodRef   | AN1..12    | K  |  Karekod referans numarasını gösterir.<br> Okunan karekodda referans değeri varsa kullanılması zorunludur.<br>Kolay Adresi Sistemi ile birlikte kullanılmaz. |Ödeme Emri Rizası Nesnesindeki Karekod Referansı verisi ile aynı olmalıdır.<br> Çevrimiçi doğrulama hizmeti alınmayan statik karekodlar için Referans numarasının bulunmadığı durumlarda HHS tarafından “NONREF” ifadesi girilir.<br> |**FAST: Karekod Referansı (KrkdRef)** |
| **>> Üretici Kodu**	  |  kkodUrtcKod   |   AN4  |Z   | Karekod üreticisinin kodu.<br> Ödeme Hizmeti Sağlayıcıları ve TCMB tarafından uygun görülen ödeme sistemi işleticisi TR Karekod üretebilmek için BKM’ye kayıt başvurusu yaparak karekod üretici kodu alabileceklerdir. Bankalar EFT kodlarını kullanacak olup ayrıca kayıt yaptırmalarına gerek bulunmamaktadır. 4 haneden kısa değerlerin sol tarafı ’0’ karakteri ile tamamlanmalıdır.| | |
| **> Ödeme Ayrıntıları**	| odmAyr |  Kompleks: OdemeAyrintilari | Z    |  | | |
| **>> Ödeme Kaynağı** |odmKynk   |  AN1   |Z   |  Ödemenin başlatıldığı kaynağı belirtir. **TR.OHVPS.DataCode.OdemeKaynak** sıralı veri değerlerinden “O” değeri atanarak iletilmelidir. “O” değeri “Açık bankacılık aracılığı ile gönderilen ödemelerde kullanılır.” anlamını taşımaktadır.  |Ödeme Emri Rizası Nesnesindeki Ödeme Kaynağı verisi ile aynı olmalıdır.<br>HHS tarafından ödeme mesajında (FAST/PÖS) aynen taşınmak durumundadır. | **FAST/PÖS: OdmKynk**|
| **>> Ödeme Amacı** |  odmAmc   |   AN2  | Z  |  **TR.OHVPS.DataCode.OdemeAmaci** sıralı veri değerlerinden birini alır.  | Ödeme Emri Rizası Nesnesindeki Ödeme Amacı verisi ile aynı olmalıdır.<br>HHS tarafından ödeme mesajında (FAST/PÖS) aynen taşınmak durumundadır.  |**FAST (OdmAmc)/PÖS(OdmAmaci)** |
| **>> Referans Bilgisi**	|  refBlg   |  AN1..140   | K  |  Ödemeye özel **Referans Bilgisi** alanıdır. Karekod işlemi değil ise zorunludur.<br> -	Kişiden kişiye fon aktarımlarda: Gün içerisinde ÖHK özelinde, her işleme özel biricik olarak oluşturulan referans bilgisidir.<br> Karekod P2P akışı için referans bilgisi (Karekod referans numarası değil, işleme özel üretilecek referans bilgisidir.) YÖS tarafından atanacaktır.<br> -	E-ticaret işlemlerinde sipariş/takip numarası/müşteri/abone numarası<br> -İşyeri Ödemesi Karekod akışında, FAST Karekod Veri Organizasyonundaki<br> -	62-01: alanında tanımlı Fatura Numarası <br> -	62-06: alanında tanımlı Müşteri Numarası <br> verilerinden biri kullanılır. |  Ödeme Emri Rizası Nesnesindeki Referans Bilgisi verisi ile aynı olmalıdır. |**RefBlg (Hem FAST hem de PÖS için aynı)** |
| **>> Açıklama**	|  odmAcklm   | AN1..200    | İ  | ÖBHS’nin ÖHK’dan aldığı ya da kendisinin atadığı işlem açıklaması bilgisi. <br>FAST/PÖS sistemi üzerinden yapılan ödemeler için açıklama bilgisi girilirse boşluk karakteri girilerek geçilemez. En az bir alfasayısal karakter girilmesi zorunludur.| | **FAST/PÖS Acklm**|
| **>> ÖHK Mesaj Alanı**	|  ohkMsj   | AN1..200    | İ  | HHS’nin ÖHK’ya göstermek üzere ilettiği mesaj.| | |
| **>> Ödeme Sistemi**	|  odmStm   | AN1    | Z  | **TR.OHVPS.DataCode.OdemeSistemi** sıralı veri değerlerinden birini alır. |Ödeme Emri Rizası Nesnesindeki Ödeme Sistemi verisi ile aynı olmalıdır. | |
| **>> Beklenen Ödeme Zamanı**	|  bekOdmZmn   | ISODateTime   | K  | İşlemin yönlendirildiği ödeme sistemi PÖS ise ve PÖS işlem saatleri dışında ise işlemin yapılabileceği ilk zaman bilgisi| | |
| **İşyeri Ödeme Bilgileri**	|  isyOdmBlg   | Kompleks:IsyeriOdemeBilgileri  | K  |  İşyeri ödemelerinde kullanılabilecek alanlardır. Karekodlu işyeri ödemesi akışında bu alanlar dolu geldiği için isteğe bağlı olarak gönderilebilir. isyOdmBlg alanlarının en az birinin dolu olması durumunda istekte yer alır. <br>İşyeri Ödeme Bilgileri, YÖS uygulama önyüzünde ÖHK’nın bildiği ve girişi yapılması beklenen bir bilgi olmamalıdır. YÖS tarafından sistemsel olarak doldurulması gereklidir. | | |
| **> İşyeri Kategori Kodu** |   isyKtgKod  | AN4    | K   | İşlemin, ISO 18245:2003 uyumlu İşyeri Kategori Kodudur (Merchant Category Code, MCC). Ödeme Amacı = ‘06’ ya da ‘04’ olan ödeme işlemleri için doldurulabilir.<br>4 karakterden küçük değerlerin başına 0 eklenerek iletilmesi gereklidir.  | | |
| **> Alt İşyeri Kategori Kodu** |   altIsyKtgKod  |   AN4  | K  | İşlem alt işyerinden gerçekleştiriliyorsa, ISO 18245:2003 uyumlu İşyeri Kategori Kodudur (Merchant Category Code, MCC).<br>4 karakterden küçük değerlerin başına 0 eklenerek iletilmesi gereklidir.  | | |
| **>Üye İş Yeri Tekil Kimlik** |  genelUyeIsyeriNo   |  AN8   |  K |  İşyeri kayıt sisteminde kayıtlı İşyeri için BKM tarafından üretilmiş olan genel işyeri numarasıdır (GlobalMerchantId) 8 haneden küçük gönderiminde başa ‘0’ eklenmelidir. Örnek değer ‘01630618’   |   | |

  
**BAŞARILI YANIT:**  

POST işleminin RESPONSE gövdesini (BODY) oluşturan “OdemeEmri” nesnesi Tablo-10’daki parametrelerden oluşur:

**Tablo 10: “OdemeEmri” nesnesi**  


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
| **> Ödeme Emri Numarası** | odmEmriNo  | AN1..128  | Z   |  odemeEmri nesnesinin UID'sidir. OdemeEmrine İlişkin sorgular bu ID üzerinden yapılır. |  
| **> Ödeme Emri Zaman** | odmEmriZmn  | ISODateTime  | Z   | odemeEmri nesnesinin oluşturulma zamanıdır.|  
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
| **> Gönderen** | gon   |  Kompleks:Hesap  | Z |   | 
| **>> Unvan**	| unv   | AN3..140  | Z  | Gönderen kişinin ad soyad ya da ticari unvan bilgisi.| 
| **>> Hesap Numarası** |  hspNo  |  AN26  | K | ÖBHS tarafından iletilip doğrulanan veya HHS ekranında seçilen Gönderen Hesap Numarası dönülür.|
|**>> Hesap Referansı** | hspRef |  AN5..40  | K |HHS tarafından hesap için atanan biricik tanımlıyıcıdır (uuid)<br> YÖS bazında farklılaşması gerekmez.<br>ÖBHS’nin aynı zamanda HBHS olduğu durumda müşteri rızası tesis edilmiş bir hesabın referansı üzerinden de ödeme başaltılabilir.<br>GKD sonrası HHS ekranında seçilen Hesap Referansı POST işleminin yanıtında dönülemez ancak isteğe bağlı GET sorgusu ile dönülebilir.<br>Hesap Numarası kullanılıyorsa Hesap Referansı kullanılmayabilir.<br> Ödeme Sistemine doğrudan katılımcı olmayan ÖHS'ler müşterilerine IBAN sunmadıkları için hspRef üzerinden ödeme başlatabilirler. Bu durumda hesap numarası boş olacaktır.  | 
| **> Alıcı** |  alc  |  	Kompleks:Hesap  | Z | | 
| **>> Unvan** | unv | AN3..140 | Z  | Kolay Adres Alıcı Sorgusunda başarılı sorgu sonucunda dönülen adres kaydı yaptırmış olan alıcının maskeli ad-soyadı veya maskeli ticari unvan bilgisidir. Kolas’tan dönen “account owner” alanı kullanılmalıdır.<br>Kolay adres değil ise ÖBHS tarafından istek mesajında iletilen unvan bilgisidir. |
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
| **>> Ödeme Durumu** |odmDrm   |  AN2   |Z   |  **TR.OHVPS.DataCode.OdemeDurumu** sıralı veri değerlerinden birini alır.  <br> <br> Ödeme Durumu alanı ile ilgili olarak HHS’ler tarafından YÖS’lere  OdemeEmri servisi yanıtında 02:Gönderildi, 04:Onayda Bekliyor,05:İşleme Alındı yanıtları gönderilebilir.<br> <br>**05:İşleme Alındı** durumu YÖS tarafından müşteriye gösterilmeyen bir koddur. Bu kod dönüldüğünde YÖS uygulamasında ÖHK’ya ödeme durumu **02:Gönderildi** olarak gösterilir. İşlemin son durumunun teyidi için YÖS ödeme emri sorgulaması yapmalıdır.<br> <br>**02:Gönderildi** durumu oluştuktan sonra YÖS tarafından ödeme emri sorgulaması yapılarak ödeme durumunun güncel değeri öğrenilir. Güncel değerler **01:Gerçekleşti,03:Gerçekleşmedi** durumları olabilir.|
| **>> Ödeme Amacı** |  odmAmc   |   AN2  | Z  |  **TR.OHVPS.DataCode.OdemeAmaci** sıralı veri değerlerinden birini alır.  | 
| **>> Referans Bilgisi**	|  refBlg   |  AN1..140   | K  |  Ödemeye özel **Referans Bilgisi** alanıdır. Karekod işlemi değil ise zorunludur.<br> -	Kişiden kişiye fon aktarımlarda: Gün içerisinde ÖHK özelinde, her işleme özel biricik olarak oluşturulan referans bilgisidir.<br> Karekod P2P akışı için referans bilgisi (Karekod referans numarası değil, işleme özel üretilecek referans bilgisidir.) YÖS tarafından atanacaktır.<br> -	E-ticaret işlemlerinde sipariş/takip numarası/müşteri/abone numarası<br> - İşyeri Ödemesi Karekod akışında, FAST Karekod Veri Organizasyonundaki<br> -	62-01: alanında tanımlı Fatura Numarası <br> -	62-06: alanında tanımlı Müşteri Numarası <br> verilerinden biri kullanılır. | 
| **>> Açıklama**	|  odmAcklm   | AN1..200    | İ  | ÖBHS’nin ÖHK’dan aldığı ya da kendisinin atadığı işlem açıklaması bilgisi. <br>FAST/PÖS sistemi üzerinden yapılan ödemeler için açıklama bilgisi girilirse boşluk karakteri girilerek geçilemez. En az bir alfasayısal karakter girilmesi zorunludur.|
| **>> ÖHK Mesaj Alanı**	|  ohkMsj   | AN1..200    | İ  | HHS’nin ÖHK’ya göstermek üzere ilettiği mesaj.|
| **>> Ödeme Sistemi**	|  odmStm   | AN1    | Z  | **TR.OHVPS.DataCode.OdemeSistemi** sıralı veri değerlerinden birini alır. |
| **>> Ödeme Sistem Numarası**	|  odmStmNo   | AN10..50    | K  | Ödeme başarılı başlatıldıysa, ödemenin başlatıldığı sistemdeki referans numarası. Gerektiğinde ilgili ödeme sisteminde/HHS’de söz konusu ödemeye karşılık gelen mesajla bağlantı kurmada kullanılır. <br> Ödeme Hizmeti kullanıcısına işlemin takibi için gösterilebilir. <br>İşlemin yönlendirildiği ödeme sistemi FAST ya da PÖS ise sistemdeki ilgili mesajın Tarih, GönderenKatilimKodu ve SorguNumarasi değerlerinin birleşiminden oluşur. Bu 3 alan mevcutta kullanıldığı formatta aralarına dikey çizgi (Unicode U+2223) işareti koyularak, birleştirmeli ve iletilmelidir. Örn : Tarih\|GönderenKatilimKodu\|SorguNumarasi  <br>Ödeme Havale/Virman işlemi ise HHS’nin üretmiş olduğu havale/virman numarasını içerir. Buradaki format da Tarih\|GönderenKatilimKodu\|Havale-virman numarası şeklinde olmalıdır.<br>Havale/FAST/PÖS  ödeme yöntemleri için tarih alanı yyyy-aa-gg formatında 10 karakter olarak iletilmelidir. |
| **>> Beklenen Ödeme Zamanı**	|  bekOdmZmn   | ISODateTime   | K  | İşlemin yönlendirildiği ödeme sistemi PÖS ise ve PÖS işlem saatleri dışında ise işlemin yapılabileceği ilk zaman bilgisi|
| **İşyeri Ödeme Bilgileri**	|  isyOdmBlg   | Kompleks:IsyeriOdemeBilgileri  | K  |  İşyeri ödemelerinde kullanılabilecek alanlardır. Karekodlu işyeri ödemesi akışında bu alanlar dolu geldiği için isteğe bağlı olarak gönderilebilir. isyOdmBlg alanlarının en az birinin dolu olması durumunda yanıtta yer alır.  | 
| **> İşyeri Kategori Kodu** |   isyKtgKod  | AN4    |K   | İşlemin, ISO 18245:2003 uyumlu İşyeri Kategori Kodudur (Merchant Category Code, MCC). Ödeme Amacı = ‘06’ ya da ‘04’ olan ödeme işlemleri için doldurulabilir.  | 
| **> Alt İşyeri Kategori Kodu** |   altIsyKtgKod  |   AN4  | K  | İşlem alt işyerinden gerçekleştiriliyorsa, ISO 18245:2003 uyumlu İşyeri Kategori Kodudur (Merchant Category Code, MCC).  | 
| **>Üye İş Yeri Tekil Kimlik** |  genelUyeIsyeriNo   |  AN8   |  K |  İşyeri kayıt sisteminde kayıtlı İşyeri için BKM tarafından üretilmiş olan genel işyeri numarasıdır (GlobalMerchantId) 8 haneden küçük gönderiminde başa ‘0’ eklenmelidir. Örnek değer ‘01630618’   |  




## 6.6.	ADIM 3.1- Ödeme Emri Sorgusu (İsteğe bağlı) 

<img src="./images/OdemeEmriSorgulanmasi.png" width="75%" >  

**Şekil 9: Ödeme Emri Sorgusu**  

### GET /odeme-emri/{odemeEmriNo}  

ÖBHS, bu erişim adresi aracılığıyla ödeme emrini sorgulayabilir. 

**BAŞARILI YANIT:**

GET /odeme-emri/{odemeEmriNo} yanıtının (RESPONSE) gövdesinde (BODY)  “OdemeEmri” nesnesi bulunur. İstek başarıyla sonuçlanırsa HHS kaynak sunucusunda Tablo-10’da yer alan parametreleri içeren “OdemeEmri” nesnesi döner.
