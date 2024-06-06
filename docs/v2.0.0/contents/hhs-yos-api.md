# HHS ve YÖS API

HHS API, HHS’lerin detay bilgilerini sunan servistir. Bu servis ile aşağıdaki istek/yanıt yapıları ile ihtiyaç duyulabilecek ilgili bilgiler temin edilebilir. HHS API için “hhs_read” scope bilgisi kullanılır.   

Production ortamında HHS / YOS API içerisinde sisteme dahil olmuş, sertifikasyonu başarı ile tamamlamış paydaşlar listelenecektir. HHS tarafından desteklenen API sürümleri listelenecektir.   

YÖS’ler HHS API’sini sorgulayabilir ancak YÖS API’sini sorgulayamazlar.  
Benzer şekilde HHS’ler YÖS API’sini sorgulayabilir, HHS API’sini sorgulayamazlar.  


## HHS API 

**GET /hhs/{hhsKod}**

İşlem Sorgu Örneği =  /hhs  &#8680;  bu sorgu yöntemi ile tüm HHS’lerin dizi şeklinde verileri listelenir.  
İşlem Sorgu Örneği =  /hhs/2001   &#8680; bu sorgu yöntemi ile gönderilmiş olan hhsKodu’na ait bilgiler listelenir. Ya da “404 Not Found” hatası alır.  
HHS ve YÖS API Tablo 20’deki istek parametrelerine göre sorgulanabilir.  
İşlem Sorgu Örneği (Belirli Bir Hesap) =  /hhs?srlmKrtr=kod&srlmYon=A

**Tablo 20: HHS ve YÖS API Sorgulama İsteği Sorgu Parametreleri**

|Alan Adı |Parametre Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|HHS tarafından yapılması gereken kontrol ve işlemler|
| --- | --- | --- | --- | --- | --- |
|Sıralama Kriteri	|srlmKrtr	|AN3..50|	İ	|Cevapta dönülecek işlemlerin sıralama kriterini belirtir. Alabileceği değerler: {“kod”, “unv”}	|Bu veri gönderildiği durumda, HHS işlemler listesini bu kritere göre sıralayarak gönderir. Gönderilmediğinde, sıralama kriteri “unv” olarak belirlenmelidir.|
|Sıralama Yönü	|srlmYon|	AN1|	İ	|Cevapta dönülecek işlemlerin sıralama yönünü belirtir. Alabileceği değerler: A: Azalan değerle sıralama Y: Artan değerle sıralama {“A”,”Y”}|	Bu veri gönderildiği durumda, HHS işlemler listesini bu yöne göre sıralayarak gönderir. Gönderilmediğinde, HHS sıralama yönünü Azalan olarak belirler.|  


**Tablo 21: HHS Bilgileri Sorgulama Yanıtı “Hhs” nesnesi**
|Alan Adı |Parametre Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | 
| hhs kodu | kod | AN4 | Z |HHS nin kod bilgisi | 
| hhs unvanı | unv | AN3..140 | Z |HHS nin unvan bilgisi | 
| hhs markası | marka | AN1..140 | Z | ÖHK'nın kolaylıkla algılayabileceği kısa unvan bilgisi. HHS tarafından belirlenecektir. | 
| Açık anahtar | acikAnahtar | AN1..1024 | Z | HHS’nin mesaj imzalama için paylaştığı açık anahtar | 
| HHS Api Bilgileri | apiBilgileri | Kompleks: HhsApiBilgi[Array][0..N] | Z |Desteklenen Api ve sürüm bilgileri dönülecektir. | 
| > api | api | AN1..20 | Z | Api İsmi Örnek :obh, hbh,gkd | 
| > surum | surum | AN1..10 | Z | Api Sürüm Kodu Örnek: s1.0, s1.0, s2.0 | 
| HHS Hizmet Bilgileri | hizmetBilgileri | Kompleks: HhsHizmetBilgi[Array][0..N] | Z |Desteklenen hizmet ve sürüm bilgileri dönülecektir. |
| > hizmetTipi | hizmetTipi | AN1..20 | Z | Hizmet Tipi bilgileri.TR.OHVPS.DataCode.HizmetTipi sıralı veri türü değerlerinden birini alır.| 
| > surum | surum | AN1..10 | Z | Api Sürüm Kodu Örnek: s1.0, s1.1, s2.0 | 
| Logo Bilgileri | logoBilgileri | Kompleks: LogoBilgisi [Array][1..N] | Z | HHS'ye ait logo bilgileri.| 
| > logoTur | logoTur | AN3..50 | Z | Logonun türünü belirler.<br>TR.OHVPS.DataCode.LogoTur sıralı veri türü değerlerlerinden birini alır. | 
| > logoAdr | logoAdr | AN1..255 | Z | HHS tarafında tutulan ve YÖS'lerle paylaşılacak olan url adres bilgisidir. <br>Örnek: https://via.placeholder.com/150?text=0001 | 
| > logoArkaPlan | logoArkaPlan | AN1 | Z | TR.OHVPS.DataCode.LogoArkaPlan sıralı veri türü değerlerlerinden birini alır. | 
| > logoFormat | logoFormat | AN3 | Z | TR.OHVPS.DataCode.LogoFormat sıralı veri türü değerlerlerinden birini alır. | 
| Durum | durum | AN1 | Z |HHS'nin durum bilgisidir.<br> TR.OHVPS.DataCode.HHSDurumu sıralı veri tipinde alabileceği değerler belirtilmiştir.| 

HHS API'de; Açık, Yaygınlaştırma, Geçici Hizmet Veremiyor, Kapalı durumlarındaki HHS'ler listelenecektir. <br>
Sertifikasyon onayı alan HHS'ler, üretim ortamına geçişte "Yaygınlaştırma" durumuna sahip olabilir.  HHS'nin, hangi YÖS'ler ile "Yaygınlaştırma" kontrollerini yapacağı, HHS yönetiminde olacaktır. Böylece Üretim Ortamında HHS’nin kendisi tarafından tanımlanmış kısıtlı ÖHK’ya hizmet vermesi ve servislerini test etmesi sağlanabilir olacaktır. HHS'ler kendi kurum kontrollerini yapana kadar, "Yaygınlaştırma" durumunda kalabilirler. HHS'nin BKM'ye yapacağı talep ile, HHS "Yaygınlaştırma" durumundan "Açık" durumuna geçebilecektir.<br>

Aşağıdaki durumlarda HHS'nin statüsü Geçici Kapalı olarak güncellenebilecektir: 

 - HHS'nin talebi ile uzun süreli (minimum 1 saati aşan) yaşanan teknik sorunlarda G statüsüne alınabilecektir. G statüsüne alınma talebinin HHS tarafından ohvps@bkm.com.tr ye mail atarak iletilmesi beklenmektedir. 
 - İlgili resmi kurumlardan gelen talep üzerine HHS G statüsüne alınabilir.

 YÖS'ler hem A hem G statüsünde olan HHS'leri listeleyebilir. Ancak YÖS uygulamasında G statüsünde olan bir HHS müşteri tarafından seçilirse müşteriye gerekli hata mesajının verilmesi ve ilgili HHS'ye istek atılmaması sağlanmalıdır.
 
Hem YOS hem de HHS API için geçerli olacak; logo gönderiminde dikkat edilmesi gerekenler şu şekilde tariflenmiştir:   

1.	Logoların ham dosya yerine kurumun yayınlayacağı bir URL üzerinden sunulması gerekmektedir. (Örn: logoURL = https://kurumadi.com.tr/logo.png) Logo BKM tarafında host edilmeyecektir.
2. Logo url’in public erişilebilir url olması gereklidir.
3. Logo, yatayda veya dikeyde taşma paysız tam oturacak, sınır boyutlarını geçmeyecek ve ortalanmış yerleşime sahip olmalıdır.
4. YÖS uygulamasında gösterim esnasında logoların hızlı yüklenmesi ve düşük veri tüketmesi açısından; logo boyutu 250 KB’ın altında olmalıdır.
5. HHS ve YÖS’lerin tüm logo türlerini (8 farklı tipte logoyu) zorunlu olarak dönmesi beklenmektedir. 
6. Circle logo kullanılması gerektiğinde ICON_LOGO logo türü kullanılmalıdır.
7. Logolarını güncellemek isteyen kurumların en az 3 iş günü öncesinde BKM’ye bu değişikliği GEÇİT Test/Üretim Ortamı Entegrasyon formu ile bildirmesi gereklidir.  BKM de katılımcılara HHS/YÖS API aracılığı ile güncel logonun çekilmesi gerektiğine dair bilgilendirme yapar.
8. Logoları anlık çeken katılımcıların, herhangi bir teknik nedenden dolayı güncel logoyu alamadığı durum olabilir. Bu durumda sistemlerine kaydetmiş olduğu kuruma ait ikon logoyu göstermesi gereklidir.
9. HHS ve YÖS’ler API aracılığı ile almış oldukları logoların formatı üzerinde değişiklik (kare, yuvarlak hale getirip resize etmek gibi) yapabilirler. Ancak logonun görsel ve yazılarını etkileyecek bir  değişiklik yapmamalıdırlar. 
10. YÖS/HHS mobil uygulamasındaki dark mode ve light mode kullanımlarında, hangi logonun kullanılacağına uygulama sahibi karar verecektir. 
  


## YOS API  

YÖS API, YÖS statüsundeki kurumların detay bilgilerini sunan servistir. Bu servis ile aşağıdaki istek/yanıt yapıları ile ihtiyaç duyulabilecek ilgili bilgiler temin edilebilir. YÖS API için “yos_read” scope bilgisi kullanılır.   

YÖS API yanıtında, listelenen yönlendirme ve bildirim adresleri bulunmaktadır. HHS, işlem anında iletilen yonAdr ya da bldrAdr alanlarında gönderilen adreslere yetKod değerini iletmelidir. YÖS API içerisinde yer alan adresleri, rıza isteğinde gönderilen adreslerin doğruluğunu kontrol etme amacıyla kullanılmalıdır. Bu nedenle YÖS API içerisinde listelenen adreslerin hostname seviyesinde yer alması yeterlidir.

YÖS API içerisinde yer alan YÖS rol bilgileri ve aktiflik/pasiflik durumları birbiriyle ilişkili değildir.  

YÖS'ün sahip olduğu öbhs,hbhs rolleri için herhangi bir fraud ya da teknik sebeplerden ötürü geçici süreyle geri alınabilir.  

YÖS'lerin hizmet verememesi durumunda rollerinin geri alınması yapılmayacaktır. YÖS rolleri sadece ilgili resmi kurumlardan gelen talep üzerine alınabilecektir.


YÖS aktifliğini korurken problem çözülene kadar geçici olarak alınan roller(öbhs,hbhs) tekrardan aktif hale getirilir.   

**GET /yos/{yosKod}**  


İşlem Sorgu Örneği =  /yos  &#8680;  bu sorgu yöntemi ile tüm YÖS'lerin dizi şeklinde verileri listelenir.

İşlem Sorgu Örneği =  /yos/2501  &#8680;  bu sorgu yöntemi ile gönderilmiş olan yosKodu’na ait bilgiler listelenir ya da “404 Not Found” hatası alır.
YÖS API Tablo 20’deki istek parametrelerine göre sorgulanabilir.
İşlem Sorgu Örneği (Belirli Bir Hesap)=  /yos?srlmKrtr=kod&srlmYon=A


**Tablo 22: YOS Bilgileri Sorgulama Yanıtı “Yos” nesnesi**
|Alan Adı |Parametre Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | --- |
| Yös kodu | kod | AN4 | Z |YÖS'ün kod bilgisi | 
| Yös unvanı | unv | AN3..140 | Z |YÖS unvan bilgisi | 
| Yös markası | marka | AN1..140 | Z | ÖHK'nın kolaylıkla algılayabileceği kısa unvan bilgisi. YÖS tarafından belirlenecektir. | 
| YÖS rolleri | roller | Array[AN4] | Z | YÖS’un rollerini belirten değer. Örnek: [ "obhs", "hbhs" ]<br> - obhs - Ödeme Bilgisi Hizmet Sağlayıcı Rolü<br> - hbhs - Hesap Bilgisi Hizmet Sağlayıcı Rolü |
| Adresler | adresler |Kompleks:Adres[Array] [1..N]	 | Z | --- |
| > Yetkilendirme Yöntemi | yetYntm | AN1 | Z | TR.OHVPS.DataCode.GkdTur sıralı veri türü değerlerlerinden birini alır.<br>Adres detaylarının hangi GKD türüne ait olduğunu belirtir. |
| > Adres Detayları | adresDetaylari | adresDetaylari	Kompleks: AdresDetayi[Array] [1..N] | Z |   |
| >> Temel Adres | tmlAdr | AN1..1024 | Z | yetYntm değeri “Y” olarak iletildiğinde Yönlendirmeli GKD sürecinde HHS’nin YOS’e authorizasyon kodunu hangi url e göndereceği bilgisini tutar.<br>yetYntm değeri “A” olarak iletildiğinde Ayrık GKD sürecinde HHS’nin YOS’e authorizasyon kodunu hangi url e göndereceği bilgisini tutar.<br>Riza isteklerinde bu değer ile uyumluluğu kontrol edilmelidir.<br>Örnek: https://example.com<br>https://example2.com/path<br>deepLink://example/test<br>deepLink://example2/test |
| >> Açıklama | aciklama | AN1..1024 | İ | YÖS’ün gönderdiği adrese yönelik vermek istediği açıklama<br>Örnek: WEB bireysel , WEB kurumsal  , APP |
| Açık anahtar | acikAnahtar | AN1..1024 | Z | YÖS’ün mesaj imzalama için paylaştığı açık anahtar | 
| YÖS Api Bilgileri | apiBilgileri | Kompleks: YosApiBilgi[Array][0..N] | Z |Desteklenen Api ve sürüm bilgileri dönülecektir. | 
| > api | api | AN1..20 | Z | Api İsmi Örnek :ods | 
| > surum | surum | AN1..10 | Z | Api Sürüm Kodu Örnek: s1.0, s2.0 s1.0 | 
| Logo Bilgileri | logoBilgileri | Kompleks: LogoBilgisi [Array][1..N] | Z | YOS’e ait logo bilgileri.| 
| > logoTur | logoTur | AN3..50 | Z | Logonun türünü belirler.<br>TR.OHVPS.DataCode.LogoTur sıralı veri türü değerlerlerinden birini alır. | 
| > logoAdr | logoAdr | AN1..255 | Z | YÖS tarafında tutulan ve HHS’lerle paylaşılacak olan url adres bilgisidir. <br>Örnek: https://via.placeholder.com/150?text=0001 | 
| > logoArkaPlan | logoArkaPlan | AN1 | Z | TR.OHVPS.DataCode.LogoArkaPlan sıralı veri türü değerlerlerinden birini alır. | 
| > logoFormat | logoFormat | AN3 | Z | TR.OHVPS.DataCode.LogoFormat sıralı veri türü değerlerlerinden birini alır. | 
| Durum | durum | AN1 | Z |YÖS'ün durum bilgisidir.<br> TR.OHVPS.DataCode.YOSDurumu sıralı veri tipinde alabileceği değerler belirtilmiştir.| 

