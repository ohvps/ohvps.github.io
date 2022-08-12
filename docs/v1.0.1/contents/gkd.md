# 5.	Güçlü Kimlik Doğrulama  
Müşteri için güçlü kimlik doğrulama, ÖHK’nın (müşterinin) kimliğinin doğrulamada kullanılan ve bir bileşenin ele geçirilmesinin diğer bileşenin güvenliğini tehlikeye atmayacağı en az iki bileşenden oluşan, bu iki bileşenin de müşterinin “bildiği”, “sahip olduğu” veya “biyometrik bir karakteristiği olan” bileşen sınıflarından farklı ikisine ait olacak şekilde seçildiği yöntemi tanımlar.  

Ödeme ve Elektronik Para Kuruluşlarının Bilgi Sistemleri ile Ödeme Hizmeti Sağlayıcılarının Ödeme Hizmetleri Alanındaki Veri Paylaşım Servislerine İlişkin Tebliğ uyarınca hesap bilgisi hizmetinde müşterinin onayının alınması esnasında ve ödeme emri başlatma hizmetinde her bir ödeme emri başlatma işleminde **HHS tarafından müşteriye güçlü kimlik doğrulama (GKD) uygulanması esastır.** Buna göre:  

1.	Hesap bilgisi hizmetinde ÖHK’nın onayının alınması esnasında **Tebliğin 26 ncı maddesinin 1 inci fıkrası uyarınca** HHS tarafından ÖHK’ya GKD uygulanır.
2.	Ödeme emri başlatma hizmetinde, **Tebliğin 26 ncı maddesinin 2 nci fıkrası uyarınca** HHS tarafından ÖHK’ya güçlü kimlik doğrulama uygulanır ve işlem doğrulama kodu ile ÖHK’nın onayı alınır.
3.	Ödeme emri başlatma hizmetinde, **Tebliğin 26 ncı maddesinin 3 nci fıkrası uyarınca** HHS tarafından ÖHK’ya güçlü kimlik doğrulama uygulanmasına ilişkin istisna veya ilave güvenlik önlemleri işbu API İlke ve Kuralları belgesinde tanımlanır.
4.	HHS, güçlü kimlik doğrulama sürecinde ÖHK’nin sahip olduğu bileşen sınıfı olarak SMS OTP ya da SMS ile işlem doğrulama kodu kullanabilir.
5.	HHS, aşağıdaki hallerde veya **Tebliğin 10 uncu maddesinin ikinci fıkrasında** belirtilen risk değerlendirmesi sonucuna göre tek bileşen ile kimlik doğrulama yapabilir.  

     - Ödemenin göndereni ve alıcısının aynı olması,
     - Daha önce tanımlanmış güvenli alıcılar listesine ödeme yapılması, 
     - ÖHK’nin talimatına istinaden gerçekleştirilen düzenli bir ödeme olması.
6.	Tek bileşen ile kimlik doğrulama yapılan bu işlemlerle ilgili olarak gerçekleştirilen işlemin müşteri tarafından yapıldığını ispat etme yükümlülüğü HHS’ye ait olur.
7.	İşlem Doğrulamada **Tebliğin 3 üncü maddesinin birinci fıkrası ğğ bendindeki** işlem bilgisi tanımına uygun olarak aşağıdaki bilgiler ile **Tebliğin 3 üncü maddesinin birinci fıkrası hh bendinde** tanımlanan işleme özel üretilmiş işlem doğrulama kodu birlikte kullanılır.  

     - **Alıcı Unvan (Kolas akışında maskeli olarak)** (ödeme emri başlatma hizmeti)
     - Tutar (ödeme emri başlatma hizmeti)
     - Referans bilgisi (8 karakterden küçük ise alanın tüm değeri, büyük ise ilk 4 ve son 4 hanesi)   

    İşleme ait yukarıdaki bilgilerden en az biri değiştiği zaman **Tebliğin 3 üncü maddesinin birinci fıkrası hh bendinde** belirtildiği gibi yeni bir işlem doğrulama kodu üretilecek şekilde akış kurgulanmalıdır.  

8.	İşlem doğrulama kodunun gönderilmesinden HHS sorumludur. HHS, **Tebliğin 10 uncu maddesinin ikinci fıkrasında** belirtilen risk değerlendirmesi sonucuna göre işlem doğrulama kodu kullanmaksızın ÖHK’nın onayını alabilir. İşlem doğrulama kodu kullanılmayan işlemlerle ilgili olarak gerçekleştirilen işlemin ÖHK tarafından yapıldığını ispat etme yükümlülüğü HHS’ye aittir.  

9.	ÖHVPS API standartı kapsamında iki adet Güçlü Kimlik Doğrulama (GKD) yöntemi kullanılacaktır:   

     - Yönlendirmeli (Redirect) GKD Yöntemi 
     - Ayrık (Decoupled) GKD Yöntemi  

10.	HHS asgari olarak tarayıcı tabanlı Yönlendirmeli GKD yöntemini desteklemek zorundadır.
11.	Çerçeve sözleşme kapsamında olmayan tek seferlik ödeme işlemleri sadece Yönlendirmeli GKD yöntemi ile gerçekleştirilebilir.


## 5.1.	Yönlendirmeli Güçlü Kimlik Doğrulama

Yönlendirmeli GKD Yönteminde, müşteri kimlik doğrulama için YÖS tarafından HHS arayüzüne yönlendirilir.   

Müşteri HHS’ye (uygulama veya web arayüzü vasıtasıyla) yönlendirildikten sonra müşterinin güçlü kimlik doğrulaması adım adım ve doğrudan HHS ile müşteri arasında yürütülür. GKD’nin tamamlanmasından sonra müşteri tekrar YÖS uygulamasına yönlendirilir.  

Yönlendirmeli GKD Yöntemi için üst düzey örnek iş akışı aşağıdaki adımlardan oluşur: 

1.	YÖS, GKD için HHS tarafından tanımlanan arayüze (tarayıcı ya da uygulama) yönlendirme yapar.
2.	Müşteri, YÖS arayüzünden ayrılır, yönlendirildiği HHS arayüzü üzerinde kimlik doğrulama işlemlerini gerçekleştirir.
3.	GKD tamamlandıktan sonra müşteri, YÖS arayüzüne tekrar yönlendirilir ve işlem sonucu görüntülenir.

Yönlendirmeli GKD için temel gereklilikler şunlardır:  

- Ödeme hizmeti (hesap bilgisi veya ödeme emri başlatma hizmeti) tarayıcı ya da uygulama tabanlı bir şekilde sunulabilir. Bu nedenle, **YÖS ve HHS’lerin Yönlendirmeli GKD için asgari olarak tarayıcı tabanlı yönlendirme akışını desteklemeleri gerekmektedir.**
- **Çerçeve sözleşme (ÇS) kapsamında olmayan tek seferlik ödeme işlemleri sadece Yönlendirmeli GKD yöntemi ile gerçekleştirilebilir.**  

**Tarayıcı Tabanlı Yönlendirme**  

HHS’nin web arayüzüne,   
- HHS’nin mobil uygulamasının olmadığı,  
- ÖHK’nın ödeme hizmetini (hesap bilgisi veya ödeme emri başlatma hizmeti) sunduğu mobil cihazda HHS uygulamasının yüklü olmadığı,  
durumlarda yönlendirme yapılır.  

YÖS’ün mobil uygulaması varsa mobil cihazda uygulamadan tarayıcıya, YÖS’ün mobil uygulaması yoksa ödeme hizmetinin sunduğu cihazda (Kişisel Bilgisayar veya Mobil Cihaz) tarayıcı üzerinden yönlendirme yapılır.  

**Uygulama Tabanlı Yönlendirme**  

ÖHK’nın ödeme hizmetini (hesap bilgisi veya ödeme emri başlatma hizmeti) YÖS’ün mobil uygulaması ile kullanıyorsa, aynı mobil cihazda HHS’nin mobil uygulamasının yüklenmiş olması durumunda, ÖHK doğrulamasının HHS mobil uygulaması tarafından yapılması için uygulama tabanlı yönlendirme yapılır. Böylece ÖHK, ödeme hizmetine erişim için HHS’nin mobil kanalına erişim sırasında kullandığı doğrulama yöntemini ile doğrulanabilir.  

**Tablo 5: Yönlendirmeli Güçlü Kimlik Doğrulama Kanalları**  

|Doğrulama Yöntemi |YÖS Olası Ortam |HHS Olası Ortam |
| --- | --- | --- | 
| **Tarayıcı Tabanlı Yönlendirme** | Kişisel Bilgisayar (masaüstü, dizüstü)/Mobil Cihaz | Kişisel Bilgisayar (masaüstü, dizüstü) / Mobil Cihaz | 
| **Uygulama Tabanlı Yönlendirme** | Mobil Cihaz | Mobil Cihaz | 



## 5.2.	Ayrık Güçlü Kimlik Doğrulama 

Ayrık GKD Yöntemi iş akışı, Yönlendirmeli GKD Yönteminin işlem akışına benzer. Fark, HHS'nin, çevrimiçi arayüzünden bağımsız olan herhangi bir uygulama veya cihaz aracılığıyla ödeme işlemi ayrıntılarını içeren bir anlık bildirim (push notification) göndererek müşteriden kimlik doğrulaması istemesidir. Ayrık GKD Yöntemine dayalı bir işlem için (çok basitleştirilmiş) üst düzey örnek bilgi akışı şu şekildedir:
1.	Müşteri, YÖS arayüzünde işlemini başlatır.
2.	YÖS, talebini müşteriye ait TCKN, VKN, YKN gibi tekil tanımlayıcı kimlik numarası bilgisi içerecek şekilde HHS’ye iletilir.
3.	HHS tekil tanımlayıcı bilgisini kullanarak farklı bir cihaz veya uygulama üzerinden müşteriye anlık bildirim gönderir ve doğrulama yapılmasını sağlar. Bu şekilde HHS kendi mobil uygulamasına erişim için kullanılan doğrulama yöntemini aynen kullanabilecektir.
4.	YÖS, herhangi bir yere yönlendirme yapmadan işlemin sonucunu bekler, müşteri YÖS arayüzünden ayrılmaz (arayüz aynı kalır).
5.	Kimlik doğrulama sonrası, YÖS arayüzünde işlem sonucu görüntülenir.

## 5.3.	Yönlendirme/Bildirim Adresleri ve Durum Kodu Parametresi  

CSRF Ataklarından korunmak için ve YÖS uygulamasının bir önceki durumunu restore edebilmesi için; YÖS tarafından iletilen yönlendirme ve bildirim adreslerine , Oauth2 standartlarındaki state parametresine eşdeğer,  **durum kodu (drmKod)** parametresinin eklenmesi gerekmektedir. Durum kodu parametresi YÖS tarafından üretilen, tekil ve kolay tahmin edilemeyen bir değer olmalıdır. Rıza isteği gönderimi aşamasında oluşturulmalıdır. YÖS uygulamasında uygun bir yerde saklanmalıdır (cookie, session, local storage gibi) .   

Durum kodu, rıza isteğindeki yönlendirme adresine parametre olarak eklenir.  GKD süreci sonrasında yetki kodu ile birlikte bu bilgi, HHS tarafından YÖS’e iletilir. YÖS sakladığı değer ile parametre olarak gelen değerin eşitliğini kontrol eder. Aynı ise erişim belirteci almak üzere akışı ilerletir. Farklı ise işlemi keser. 

## 5.4	Healthcheck API  

**GET /health**

HHS’lerin sunacağı bu servis, düzenli olarak BKM tarafından çağırılarak servislerin ayakta olup olmadıklarının kontrolünün sağlanması planlanmaktadır.

Başarılı yanıtta Http 200 kodu dönülmelidir.  
Başarılı Yanıt:


|Alan Adı |JSON Alan Adı |Format |Koşullu  / İsteğe Bağlı|Açıklama|
| --- | --- | --- | --- |--- |
| status | status | AN2..20 | Z |“UP”, “DOWN” değerlerini alabilir.|


## 5.5  Güçlü Kimlik Doğrulama Kontrolleri 

ÖHK, GKD için HHS uygulamasına yönlendirildiğinde, HHS’nin çeşitli kontroller yaparak işlemin doğruluğunu teyit etmesi gerekmektedir. Yapılması gereken kontrollere ait temel senaryolar aşağıdaki tabloda belirtilmiştir. Bu senaryolar baz alınarak HHS’ler tarafından zenginleştirilebilir.   

Zorunlu olarak belirtilen hata durumlarının HHS’ler tarafından gerçeklenmesini ve uygun hata kodlarının YÖS’e iletilmesi; ileride oluşabilecek mutabakatlaşma sorunlarını ortadan kaldırabilecek, yapılacak raporlamalar kapsamında sistem ve süreç iyileştirmelerine katkı sağlayacak, son kullanıcı açısından da alınan hataya yönelik bilgilendirici içerik sağlayacaktır.  

Hata açıklamaları; hata koduna uygun ya da uyumlu olmak kaydıyla, HHS ve YÖS tarafından farklı şekillerde sunulabilir.  


**GKD Sırasında yapılması gereken kontroller**

| Rıza İptal Detay Kodu  | HHS hata açıklaması* | Yös ekranında listelenecek örnek mesaj metni* | Örnek Senaryo | Zorunlu / Opsiyonel |
| --- | --- | --- | --- |--- |
| 07 | Rıza durumunun "Yetkilendirildi" , "Yetki Kullanıldı" olduğu durum | Yetki Hatası | ÖHK, **GKD işlemi tamamlandıktan sonra** YÖS ekranında ileri- geri yaparak ya da ÖHK'nın yönlendirme adresini kopyalayarak tarayıcıya yapıştırması ile tekrar HHS'ye yönlendirir. Bu durumda HHS bu hata mesajını iletir. | Zorunlu |
| 08 | Rızano ile kimlik bilgileri uyuşmazlığı. | İşleminiz gerçekleştirilememiştir. | YÖS tarafından başlatılan rıza içerisinde yer alan kimlik bilgisi (TCKN) ile HHS'de GKD yapılan ÖHK'nın bilgilerinin uyuşmadığı durumda |Zorunlu|
| 09 | ÖHK'nın HHS'de ilgili ürününün olmadığı durum (hesap/kart) | Gösterilebilecek hesap/kart bulunamamıştır. | ÖHK'nın uygun statülü hesabının olmadığı durumda | Zorunlu |
| 10 | Açık bankacılık kanalınız işleme kapalıdır. | Açık bankacılık kanalınız işleme kapalıdır. | Açık bankacılığı ayrı bir kanal olarak tanımlamış HHS'lerde, ÖHK'nın işlemlerini AB kanalına kapatması durumunda  | Opsiyonel |
| 11 | Kullanıcının HHS'deki hesaplarında yeterli yetkisinin olmama durumu | Yetkiniz bulunmamaktadır. | 1- Kurumsal firma kullanıcılarının hesaplar üzerinde işlem yetkisinin olmaması durumunda 2- Bireysel ortak hesaplarda hesap kısıtı bulunuyorsa (para çıkışına izin verilmediği durum) | Zorunlu |
| 12 | ÖHK'nın ilgili HHS müşterisi olmadığı durum | Yetkiniz bulunmamaktadır. | Tek seferlik ödemelerde rıza isteğinde ÖHK kimlik bilgileri bulunmamaktadır. Diğer akışlarda rıza isteğinde müşteri olma kontrolü yapılabilir. | Zorunlu |
| 13 | HHS’nin ÖHK için yaptığı kontrollerin başarısız olduğu durum | Yetkiniz bulunmamaktadır | HHS'nin, ÖHK için iç sistemlerinde yaptığı kontrollerin başarısız olması. Örneğin: Müşterinin henüz bankacılık hizmet sözleşmesi gibi Internet şubesi üzerinde işlem yapmasını engelleyen eksikleri olması durumunda veya kurumsal kullanıcıda vekalet süresinin dolması/eksik doküman olması durumunda kanal üzerinde işlem yapamadığı durum | Zorunlu |
| 14 | Başarısız GKD | Yetkiniz bulunmamaktadır | 1-ÖHK'nın GKD için gerekli 2FA bilgilerini sağlayamaması <br> 2- HHS risk algısına göre 12 nolu hata kodunu dönmek yerine 14 nolu hata kodunu da YÖS’e dönebilir. | Zorunlu |
| 15 | ÖHK isteği ile GKD’den vazgeçildiği durum (Ör: HHS ekranında yer alan VAZGEÇ butonuna basmış olabilir. ) | Müşteri işlemden vazgeçmiştir. | 1- HHS ekranında yer alan VAZGEÇ butonuna basılması durumu (Hem ÖHK login olmadan önce hem de GKD sonrası (rıza verme öncesi) VAZGEÇ butonu olabilir.) <br>2-Müşteri Banka login ekranında herhangi bir aksiyon almadan beklemiştir ve HHS GKD zaman aşımı süresi 5 dakikadan kısadır.  | Zorunlu |
| 16 | Diğer | İşleminiz gerçekleştirilememiştir. | - | Opsiyonel |


GKD sırasında iletilen rıza no eğer HHS’nin sisteminde bulunamazsa durumu güncellenecek bir rıza no da olmayacaktır. HHS kendi önyüzünde bu duruma uygun bir mesaj gösterebilir. YÖS’e de Diğer hata kodu ile bu durumu iletebilir. 


