## EK-1: İstek/Cevap Mesajlarında Kullanılacak Nesne Yapıları

Açık Bankacılık simülatör uygulaması üzerinde swagger dökümanlarının güncel sürümlerine erişim sağlanabilir. 

## EK-2: Sıralı Veri Türleri

| Kod | Açıklama |
| --- | --- |
| TR.OHVPS.DataCode.BrcAlc | İşlemin hesabı borçlandırdığı ya da alacaklandırdığı bilgisidir.<br>B : Borç<br>A : Alacak |
| TR.OHVPS.DataCode.EvetHayir | E : Evet<br>H : Hayır |
| TR.OHVPS.DataCode.GkdTur | GKD yapılmasını gerekli bulduğu durumda HHS, YÖS’ün belirlediği yöntemi dikkate alarak kendi belirlediği GKD yöntemini bildirir:<br>Y: Yönlendirmeli GKD<br>A: Ayrık GKD |
| TR.OHVPS.DataCode.HHSDurumu | A : Açık. Üretim Ortamında HHS’nin aktif bir şekilde hizmet vermesi durumu.<br> Y : Yaygınlaştırma. Üretim Ortamında HHS’nin kendisi tarafından tanımlanmış kısıtlı ÖHK’ya hizmet vermesi durumu. <br>  G : Geçici Hizmet Veremiyor. HHS servislerinde teknik bir sorun olması nedeniyle HHS’nin hizmet verememesi durumu. <br>K: Kapalı. HHS’nin hizmet vermeme durumu. |
| TR.OHVPS.DataCode.HHSYOSSrlmKrtr | ‘kod’ : Kod<br>‘unv’ : Unvan |
| TR.OHVPS.DataCode.HspDrm | Hesabın durumunu belirtir:<br>AKTIF<br>PASIF<br>KAPALI|
| TR.OHVPS.DataCode.HspTip | Hesap çeşidini belirtir:<br>VADESIZ<br>VADELI<br>KREDILI_MEVDUAT_HESABI<br>POS<br>CEK<br>YATIRIM |
| TR.OHVPS.DataCode.HspTur | Hesabın bireysel veya ticari nitelikte olduğunu belirtir:<br>B: Bireysel<br>T: Ticari |
| TR.OHVPS.DataCode.IslemAmaci | Ödemenin Amacına yönelik olarak aşağıdaki değerlerden birini alır:<br>01: Konut Kirası Ödemesi<br>02: İş yeri Kirası Ödemesi<br>03: Diğer Kira Ödemesi<br>04: E-Ticaret Ödemesi: Elektronik ticaret işlem amaçlı aktarımlar<br>05: Çalışan Ödemesi: Maaş, harcırah, prim gibi çalışan ödemeleri<br>06: Ticari ödeme: Ticari işletmelerin birbirlerine, kendi hesaplarına veya müşterilerine ödemeleri, borç, ithalat, ihracat, şirket satın alma, vb. kapsamında ödemeler<br>07: Bireysel Ödeme: Özel amaçlı (aile bireylerine, hediye, bağış, borç, alışveriş vs.) ödemeler<br>08: Yatırım: Mevduat, menkul kıymet, döviz, gayrı menkul, taşıt, varlık alımı, temettü ödeme, tahsilat vb. gibi yatırım amaçlı ödemeler<br>09: Finansal: Kredi, depo, repo, türev, finansal varlık alım/satımı vb. ödemeler<br>10: Eğitim ödemesi<br>11: Aidat ödemesi<br>12: Diğer |
| TR.OHVPS.DataCode.IslemTuru | Hesap hareketleri (işlemler) sorgusunda dönülen İşlem Türü (islTur) parametresi aşağıdaki değerlerden birini alabilir:<br>HAVALE<br>EFT<br>FAST<br>PARA_YATIRMA<br>PARA_CEKME<br>YABANCI_PARA_HAVALE<br>YATIRIM_HESABINA_AKTARIM<br>YATIRIM_HESABINDAN_AKTARIM<br>KURUM_FATURA_ODEMESI<br>CEK<br>SENET<br>SIGORTA_ODEMESI<br>UCRET_KOMISYON_FAIZ<br>SGK_ODEMESI<br>VERGI_ODEMESI<br>DOVIZ_ALIM<br>DOVIZ_SATIM<br>KREDI_ODEMESI<br>KREDI_KULLANIM<br>KK_ODEMESI<br>KK_NAKIT_AVANS<br>SANS_OYUNU<br>UYE_ISYERI_ISLEMLERI<br>HGS_OGS_ISLEMLERI<br>DOGRUDAN_BORCLANDIRMA_SISTEMI<br>DIGER<br>|
| TR.OHVPS.DataCode.IzinTur | 01: Temel Hesap Bilgisi<br>02: Ayrıntılı Hesap Bilgisi<br>03: Bakiye Bilgisi<br>04: Temel İşlem (Hesap Hareketleri) Bilgisi<br>05: Ayrıntılı İşlem Bilgisi<br>06: Anlık Bakiye Bildirimi|
| TR.OHVPS.DataCode.KareKodAksTur | Karekod Akış Türü Karekod ödemesinin hangi akışla gerçekleştirildiğini gösterir.<br> 01: FAST katılımcısından dinamik doğrulamalı hizmet alınan işyeri ödemesi<br>02: FAST katılımcısından statik doğrulamalı işyeri ödemesi<br>03: Kişiden kişiye ödemeler |
| TR.OHVPS.DataCode.KaynakTip | HESAP_BILGISI_RIZASI<br> ODEME_EMRI_RIZASI <br> ODEME_EMRI <br> ILERI_TARIHLI_ODEME_EMRI_RIZASI <br> ILERI_TARIHLI_ODEME_EMRI <br> DUZENLI_ODEME_EMRI_RIZASI <br> BAKIYE <br>  COKLU_ISLEM_TALEBI <br>  HHS <br>  YOS |
| TR.OHVPS.DataCode.KimlikTur | Kod, Tip, Format<br>K , TCKN , N11<br>M , MNO , AN1..30 (HHS’ye özel bireysel veya kurum müşteri numarası)<br>Y , YKN , N11<br>P , PNO , AN7..9 |
| TR.OHVPS.DataCode.KolasHspTur | Hesabın bireysel veya ticari nitelikte olduğunu belirtir:<br>B: Bireysel<br>T: Ticari |
| TR.OHVPS.DataCode.KolasTur | Müşterinin sorgulama istediği Kolay Adres Tipi değeridir. Alabileceği değerler BKM “Kolay Adresleme Sistemi Uygulama Kuralları” belgesinde tanımlıdır:<br>T: Telefon Numarası<br>E: E-Posta<br>K: TCKN<br>V: VKN<br>Y: YKN<br>P: Pasaport Numarası |
| TR.OHVPS.DataCode.KurumKimlikTur | Kod, Tip, Format<br>K , TCKN , N11<br>M , MNO , AN1..30 (HHS’ye özel bireysel veya kurum müşteri numarası)<br>V , VKN , AN10|
| TR.OHVPS.DataCode.LogoArkaPlan | B :  Logoların arka planının beyaz olması (Erkek Logo) <br> K : Logoların arka planının renkli/koyu olması (Dişi Logo) |
| TR.OHVPS.DataCode.LogoFormat | SVG :  Logonun svg formatında olmasını ifade eder. Logonun 1:2 oranında olması gerekmektedir. <br> PNG : Logonun png formatında olmasını ifade eder. Logonun 500 X 1000 px olması gerekmektedir.|
| TR.OHVPS.DataCode.LogoTur | FULL_LOGO   : Yazı ve ikon şekillerin bir arada olduğu logo <br> ICON_LOGO : İkon şekillerin olduğu ( Sadece görsel olan-yazısız ) logo |
| TR.OHVPS.DataCode.OdemeAmaci | Ödemenin Amacına yönelik olarak aşağıdaki değerlerden birini alır:<br>01: Konut Kirası Ödemesi<br>02: İş yeri Kirası Ödemesi<br>03: Diğer Kira Ödemesi<br>04: E-Ticaret Ödemesi: Elektronik ticaret işlem amaçlı aktarımlar<br>05: Çalışan Ödemesi: Maaş, harcırah, prim gibi çalışan ödemeleri<br>06: Ticari ödeme: Ticari işletmelerin birbirlerine, kendi hesaplarına veya müşterilerine ödemeleri, borç, ithalat, ihracat, şirket satın alma, vb. kapsamında ödemeler<br>07: Bireysel Ödeme: Özel amaçlı (aile bireylerine, hediye, bağış, borç, alışveriş vs.) ödemeler<br>08: Yatırım: Mevduat, menkul kıymet, döviz, gayrı menkul, taşıt, varlık alımı, temettü ödeme, tahsilat vb. gibi yatırım amaçlı ödemeler<br>09: Finansal: Kredi, depo, repo, türev, finansal varlık alım/satımı vb. ödemeler<br>10: Eğitim ödemesi<br>11: Aidat ödemesi |
| TR.OHVPS.DataCode.OdemeDurumu | Ödemenin durumunu gösterir. Alabileceği değerler:<br>01: Gerçekleşti (Ödeme ilgili ödeme sistemine iletildi ve alıcı hesabına ulaştı.) <br>02: Gönderildi (Ödeme ilgili ödeme sistemine iletildi ancak alıcı hesabına ulaştığına dair teyit alınmadı.)İşlemin son durumunun teyidi için YÖS sorgulama yapmalıdır.<br>03- Gerçekleşmedi (Ödemenin ilgili ödeme sistemine işletiminde veya işlenmesi sırasında hata, zaman aşımı, sistemin gün sonu işlemlerine başlaması vb. durum oluştu ve ödeme gereçeklemedi veya iade edildi.)<br>04- Onayda bekliyor (Ödeme emri veya ileri tarihli ödeme emri alındı. Çoklu onay akışının tamamlanması bekleniyor.)<br>05- Ödeme Bekleniyor ( Ödeme Sistemine gönderilmeden önceki statüdür.)<br>06- Kısmen Gerçekleşti ( İleri tarihli ödeme talimatlarında kısmi ödeme yapılan işlemler için geçerli statüdür.)<br>07- İptal Edildi ( Ödeme sistemine gönderilemden önce müşteri ya da herhangi bir sebepten iptal edilen durumlarda kullanılabilir.)
| TR.OHVPS.DataCode.OdemeKaynak | I: İnternet bankacılığından gönderilen ödemelerde kullanılır.<br>A: Otomatik para makineleri (ATM) ile gönderilen ödemelerde kullanılır.<br>T: Telefon bankacılığı ile gönderilen ödemelerde kullanılır.<br>K: Kiosklar aracılığıyla gönderilen ödemelerde kullanılır.<br>S: Şubeden girilen ödemelerde kullanılır.<br>M: Mobil uygulamadan gönderilen ödemelerde kullanılır.<br>D: Yukarıdakiler dışındaki ödeme kaynaklarından gönderilen ödemelerde kullanılır.<br> O: Açık bankacılık aracılığı ile gönderilen ödemelerde kullanılır.<br> |
| TR.OHVPS.DataCode.OdemeSistemi | İşlemin yönlendirildiği Ödeme Sistemine göre aşağıdaki değerlerden birini alabilir:<br>H: Havale<br>F: FAST<br>E: EFT (PÖS)<br>değerlerinden birini alabilir.|
| TR.OHVPS.DataCode.OhkTur | B: Bireysel <br>K: Kurumsal |
| TR.OHVPS.DataCode.OhkTanimTip |  TCKN: TCKN &nbsp; (ohkTanimDeger N11 olarak gönderilmelidir.)<br> MNO:  &nbsp; &nbsp;   HHS’ye özel bireysel veya kurum müşteri numarası (OHKTanimDeger AN1..30 olarak gönderilmelidir. )<br>  YKN:  &nbsp; &nbsp; Yabancı Kimlik Numarası (OHKTanimDeger N11 olarak gönderilmelidir.)  <br> PNO:  &nbsp; &nbsp; Pasaport numarsı (ohkTanimDeger AN7..9 olarak gönderilmelidir.)  <br> GSM:  &nbsp; &nbsp;  Cep telefonu numarası (ohkTanimDeger N10 olarak gönderilmelidir.) <br> IBAN:  &nbsp; IBAN numarası (OHKTanimDeger AN26 olarak gönderilmelidir.) |
| TR.OHVPS.DataCode.OlayTip | KAYNAK_GUNCELLENDI <br>AYRIK_GKD_BASARILI<br>AYRIK_GKD_BASARISIZ<br>HHS_YOS_GUNCELLENDI|
| TR.OHVPS.DataCode.YOSDurumu | A : Açık. Üretim Ortamında YÖS’ün aktif bir şekilde hizmet vermesi durumu.<br>  G : Geçici Hizmet Veremiyor. YÖS servislerinde teknik bir sorun olması nedeniyle YÖS'ün hizmet verememesi durumu. <br> K: Kapalı. YÖS'ün hizmet vermeme durumu. |
| TR.OHVPS.DataCode.PSUInitiated | ‘E’ : Evet<br> ‘H’ : Hayır <br> ‘O’ : Olay Bildirim|
| TR.OHVPS.DataCode.RizaDurumu | B: Yetki Bekleniyor<br>Y: Yetkilendirildi<br>K: Yetki Kullanıldı<br>E: Yetki Ödeme Emrine/Talimata Dönüştü<br>S: Yetki Sonlandırıldı<br>I :Yetki Iptal |
| TR.OHVPS.DataCode.RizaIptDtyKod | ‘01’ :Yeni Rıza Talebi ile İptal<br>‘02’ :Kullanıcı İsteği ile HHS üzerinden İptal<br>‘03’ :Kullanıcı İsteği ile YÖS üzerinden İptal<br>‘04’ :Süre Aşımı : Yetki Bekleniyor<br>‘05’ :Süre Aşımı : Yetkilendirildi<br>‘06’ :Süre Aşımı : Yetki Ödemeye Dönüşmedi<br>‘07’ :GKD iptali : Aynı rıza no ile mükerrer çağrımı<br>‘08’ :GKD iptali : Rızano ile TCKN uyuşmaması<br>‘09’ :GKD iptali : Uygun ürünü bulunmuyor<br>‘10’ :GKD iptali : HHS Açık Bankacılık kanalı işleme kapalı<br>’11’ :GKD iptali : Hesap Yetki Sorunu<br>‘12’ :GKD iptali : ÖHK HHS kontrollerini aşamadı<br>‘13’ :GKD iptali : ÖHK isteği ile GKD’den vazgeçildi<br>‘14’ :GKD iptali : Fraud Şüphesi<br>‘99’ :GKD iptali : Diğer<br>|
| TR.OHVPS.DataCode.RizaTip | H: Hesap Bilgisi Rızası<br>O: Ödeme Emri Rızası<br> I: İleri Tarihli Ödeme Emri Rızası<br>D: Düzenli Ödeme Emri Rızası |
| TR.OHVPS.DataCode.SrlmYon | ‘A’: Azalan değerle sıralama<br>‘Y’: Artan değerle sıralama |
| TR.OHVPS.DataCode.VarYok | 0 : Kayıt Yok <br> 1 : Kayıt Var |
| TR.OHVPS.DataCode.YetTip | Alabileceği değerlere göre hangi belirtecin döneceğine karar verilir.<br>yet_kod<br>yenileme_belirteci |
| TR.OHVPS.DataCode.ZmnAralik | 0 : Kayıt Yok <br>1 : 0-2 saat<br>2 : 2 saat 1 dakika-24 saat<br> 3 : 1-3 gün <br> 4 : 4-15 gün	<br> 5 : 16 gün ve üstü |
| TR.OHVPS.DataCode.HizmetTipi | 01:  Ayrık GKD <br>02 : İleri Tarihli Ödeme<br>03 : Düzenli Ödeme|
| TR.OHVPS.DataCode.OdemePeriyodu | G:  Günlük <br>H : Haftalık<br>A : Aylık<br>D : Diğer|






## EK-3: İstemci Sertifikalarının Tanım ve Yönetimi

Tüm katılımcıların GEÇİT'e erişebilmesi için, BKM tarafından yapılan istemci sertifika doğrulamasından geçmesi gerekmektedir. İstemci sertifikası üretilmeden önce katılımcıların CSR üretme akışını tamamlaması gerekmektedir.
  

OpenSSL ile CSR (Certificate Signing Request) Oluşturma   
Aşağıdaki komut ile 2048-bit RSA private key ve CSR oluşturulur.  
openssl req -new -newkey rsa:2048 -nodes -keyout PRIVATEKEY.key -out CSR.csr  

CSR ile ilgili detay bilgilerin girişinde;   
Common Name (CN) olarak 4 karakterli hhsKod ya da yosKod değeri ile,  
diğer alanlar için de kurum bilgileriniz ile giriş yapılır.   

Tüm bilgilerin girilmesinden sonra oluşan private key dosyası kurumunuzda saklanır. 
CSR dosyası ise istemci sertifika üretmek üzere kullanılır. Bu aşamada takip edilmesi gereken adımlar şu şekildedir: 

Katılımcıların, TRIP ortamı üzerinden, BKM Tarafından yetki verilmiş kullanıcılarının görebileceği "İstemci Sertifika Talebi" menü adımına giriş yapmaları beklenir. Açılan ekranda,"CSR Dosyası Yükleme" alanı içerisine, katılımcının üretmiş olduğu csr dosyası yüklenir. Yaklaşık 1 dakika içerisinde kuruma özel olarak üretilmiş olan client sertifikası indirilmeye hazır hale gelecektir. "İndir" butonu ile client sertifika indirilir. İstemci tarafında web isteğinin ilgili sertifika ile ilişkilendirilerek oluşturulması gerekmektedir.


Uzun dönemli olarak hazırlanacak olan sertifikalar sertifikasyon ve üretim ortamlarında kullanılacaktır. Sertifikaların işlevselliği ve geçerliliği bu aşamalarda sınanacaktır. 

GEÇİT'in test ve üretim ortamları ayrımında istemci sertifikaları, HHS Listeleme API erişimleri ve Sertifikasyon bağlantıları Şekil 15-HHS/YÖS API Mimarisi Diagramında resmedilmiştir.


## EK-4: Sunucu Sertifikaları

Sunucu sertifikalarının endpoint bilgisini (Fqdn) içerecek ve global bir Certification Authority tarafından imzalanmış olarak sunulması gerekmektedir. 
Örneğin; entegrasyon formu içerinde yer alan URL bilgisinin (test.xbank.com.tr) sertifika içerisinde tanımlı olması ve bu sertifikanın global bir CA örneğin Verisign tarafından imzalanmış olarak sunulması gerekmektedir.

Hizmet sağlayıcı olan HHS'ler tarafından sunucu sertifikaları uygulanmalıdır.


## EK-5: Mesaj İmzalama Akışı

Dijital imzalama yapısı, ÖHVPS API’de gerçekleştirilen işlemlerin ve taşınan verilerin bütünlük ve inkâr edilemezliğini sağlamak amacıyla kurgulanmıştır.  İmzaların kaynak bazında hangi istek ve yanıtlara uygulandığı belirlidir.

API yalnızca TLS'ye dayanırsa, dijital kayıtları ve inkâr edilemezlik kanıtlarını tutmak zor olur. Bu nedenle, TLS'ye dayanmayan bir inkâr edilemezlik çözümü olarak API isteğinin HTTP başlığında bir JWS kullanılarak sağlanabilir.

HTTP isteğinin gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir. İsteğin kendinize geldiği durumda body üzerinde hiç bir değişikliğe tabi tutmadan (serialize/deserialize, minify, trim, vb yapmadan) doğrulama yapmanız gerekmektedir. Aynı şekilde isteğin kendinizden çıktığı aşamada da response body üzerinde hiç bir değişikliğe tabi tutmadan (serialize/deserialize, minify, trim, vb yapmadan) mesaj imzalama yapılmalıdır.

Bu kapsamda imzalama akışı aşağıdaki gibi olmalıdır:

-	HHS ve YÖS öncelikle özel ve açık anahtarlarını oluşturmalıdır. Bu anahtarları oluşturmak için aşağıda “openssl” kullanılarak oluşturma örneği paylaşılmıştır. Bu anahtarlardan özel olan anahtar mesajı imzalamak için kullanılacak olup, açık anahtar ise mesajı doğrulamak amacıyla mesajın alıcısı tarafından kullanılacaktır.

Özel anahtarın oluşturulması. private.pem => Özel anahtar <br>
**```openssl genrsa -out private.pem 2048```**<br><br>

Özel anahtardan açık anahtarın oluşturulması. public_key.pem => Açık anahtar (BKM ile paylaşılacak açık anahtar)<br>
**```openssl rsa -in private.pem -pubout -outform PEM -out public_key.pem```**<br><br>

Opsiyonel olarak özel anahtarın PCKS8 formatına çevrilmesi (Java açısından PCKS8 formatında olma ihtiyacı nedeniyle). private_key.pem => Özel anahtarın formatlanmış hali. <br>
**```openssl pkcs8 -topk8 -inform PEM -in private.pem -out private_key.pem –nocrypt```**<br><br>

- Açık ve Özel anahtarlar oluşturulduktan sonra Açık Anahtar BKM ile paylaşılır. BKM bu açık anahtarı diğer katılımcıların ulaşabilmesi ve alabilmesi için bir Anahtar Deposu yaklaşımı ile bünyesinde tutar. İlgili anahtarı iletebilmek ve alabilmek için kullanılacak HHS/YOS API ye erişim detayları EK-6 bölümünde detaylı olarak paylaşılmıştır.  Eğer kurumun ilgili anahtar çiftinin yenilenme durumu söz konusu ise yenilemenin hemen ardından açık anahtar yeni bir imzalama yapılmadan önce mutlaka BKM ile paylaşılmalıdır.

- İmzalı mesajı açacak olan kurum mesajı imzalayan kurumun açık anahtarını her sorguda yeniden almak durumunda değildir. Belirli periyodlarda kendi ortamındaki anahtarı yenileyerek sistemi işletebilir. Ancak imzalayan kurum anahtar çifti yenilemesi yaptığında BKM ile açık anahtarını paylaşsa dahi imzalı mesajı doğrulayacak taraf eski açık anahtar ile doğrulama yapmaya çalıştığı için hata alacaktır. Bu ilk hata durumunda hızlıca BKM üzerinden yeni anahtarı alıp mesajı tekrar doğrulamayı denemelidir. Eğer yine hata alıyor ise doğrulama işlemini hata statüsüne almalıdır. Bu sebeple anahtar yenileyen kurum yeni açık anahtarını yeni bir mesaj imzalama yapmadan önce mutlaka BKM ile paylaşmalıdır.

- PSU-Fraud-Check alanı için de JWT formatında çıktı hazırlanması beklenmektedir. Örnek bir PSU-Fraud-Check payload değeri aşağıdaki gibidir;



    {"AnomalyFlag": "0",   
    "LastPasswordChangeFlag": "1",   
    "FirstLoginFlag": "1",   
    "DeviceFirstLoginFlag": "1",   
    "BlacklistFlag": "0",  
    "MalwareFlag": "0",   
    "UnsafeAccountFlag": "0",   
    "exp": 1663424479,   
    "iat": 1663338079,   
    "iss": "[https://apigw.bkm.com.tr|https://apigw.bkm.com.tr/]" }
 
### İmzalama Kuralları (YÖS)
Bir YÖS üzerinden başlayan akış örnek olarak paylaşılmıştır.
- YÖS, mesaj imzalama gerektiren her API isteğinin HTTP gövdesini (request body) kendi özel anahtarı ile şifreleyerek imza bilgisini oluşturur.  
- Ardından bu imza verisini, göndereceği mesajın istek başlığında yer alan X-JWS-Signature alanında göndermelidir.  
- X-JWS-Signature alanında gönderilecek olan bilgi aşağıdaki yöntem ile oluşturulmalıdır.  

     1.	Bu alana yazılacak olan bilgi JWT formatında oluşturulmalıdır.
     2.	Bir JWT, header-payload-signature alanlarından oluşmaktadır. 

        - Header alanında JWT’yi imzalamak için kullanılacak algoritma belirtilmelidir.  Standartlar kapsamında RS256 kullanılacaktır.
        - Payload kısmında özel olarak oluşturulacak olan “body” claim alanına istek gövdesi (request body) verisinin SHA256 hash değeri karşılığı yazılmalıdır.
        - JSON payload oluşturulurken RFC 7519 baz alınmalıdır. "iss" (Issuer) Claim, "exp" (Expiration Time) Claim, "iat" (Issued At) Claim, “body” Claim alanlarının gönderilmesi zorunludur.[^RFC7519]  
        a.	"iss" (Issuer) Claim : Kurumunuza özel bilgidir.  
        b.	"exp" (Expiration Time) Claim: Saniye cinsinden (Unix time) imzanın son geçerli olduğu tarih. Bu tarih  mevcut sunucu saatinizden 60 dakika sonra olacak şekilde kullanılmalıdır.  
        c.	"iat" (Issued At) Claim : Saniye cinsinden (Unix time) imzanın oluşturulduğu tarih. Bu tarih  mevcut sunucu saatinizden 5 dakika önce olacak şekilde kullanılmalıdır.    
        d.	“body” Claim : istek gövdesi (request body) verisinin SHA256 hash değeri karşılığı.  
        - Signature alanında da özel anahtar ile imzalanmış olan imza içeriği yer alacaktır.



        **X-JWS-Signature:**  JWS imzasını içeren üstbilgi. Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için belirtilmiştir.

        **Örnek X-JWS-Signature Payload Değeri**	  


        {  
        "iss": "https://apigw.bkm.com.tr",   
        "exp": 1646832405,  
        "iat": 1646746005,  
        "body": "c543072f97a761a1d891dc81acc380bc1e6f61ca6541bd93ebfdece338457922"  
        }  

- YÖS, isteği gönderir. Sadece mesajın bütünlüğünü ve doğruluğunu teyit amacı ile istek gövdesi (request body) SHA256 hash değeri imzalanarak X-JWS-Signature alanında bu imza iletilir. İsteğin gövde (request body) kısmı açık ve şifresiz olarak gönderilmektedir.
- HHS, isteği alır, talebi gerçekleştirmeden önce aldığı API isteklerinin imzasını doğrulamalıdır. X-JWS-Signature alanındaki JWT aşağıdaki adımlarla doğrulanmalıdır.
    1. 	Header kısmındaki algoritmanin RS256 olduğu kontrol edilir.   
    2. 	Gönderen kurumun açık anahtarı ile JWT verify (doğrulama) işlemi yapılır.
    3. 	Yukarıdaki işlemlerin doğruluğunun ardından JWT’nin payload kısmındaki “body” claim alanındaki bilginin, isteğin gövde verisinin SHA256 hash değerlerinin aynı olduğu kontrol edilir. 
    4. Örnek checksum değeri <br> "a64b19f95eeb1fb0a0a3e2dbbc6e3d8472c52184d4543417ddc6d156fc5c5571" veya <br> "A64B19F95EEB1FB0A0A3E2DBBC6E3D8472C52184D4543417DDC6D156FC5C5571" şeklinde olabilir. İki hali de aynı değere sahiptir. Kontrollerde buna dikkat edilmesi gerekmektedir. 

- Yukarıdaki işlemler ile doğruluğu teyit edilmiş olan isteğin talebi gerçekleştirir.
- Eğer istek doğrulanamıyor ise gönderen kurumun açık ve özel anahtar çifti yenilenmiş olabilir.
- BKM HHS API  üzerinden ilgili kurumun bilgilerini (kurum kodu vs) kullanarak kurumun detay bilgileri çeker ve kendi ortamında yeniler.
- Ardından imzayı tekrar açık anahtar ile doğrulayarak kontroller gerçekleştirilir. (Eğer halen doğrulama işlemi başarısız ise bu istek için hata akışı çalıştırılır. **TR.OHVPS.Resource.InvalidSignature** kodu ile hata üretilebilir.)
- İmza bilgisinin beklendiği (x-jws-signature) servislerde, bu bilginin iletilmediği durumlarda **TR.OHVPS.Resource.MissingSignature** hatası üretilebilir.
- HHS isteği işledikten sonra cevabı oluştururken de yukarıdaki akışlar ile göndereceği cevabı imzalamalıdır.
 
- İstek yanıt gövdesinin SHA256 checksum değeri için hexadecimal çıktı kullanılacaktır. Oluşacak çıktının 64 karakter olması beklenmektedir. Kontrol için "^[A-Fa-f0-9]{64}$" RegEx tarifini kullanabilirsiniz.
   
Örnek bir gövde:  

```
{"katilimciBlg":{"hhsKod":"8000","yosKod":"8000"},"gkd":{"yetYntm":"Y","yonAdr":"https://boss-test.bkm.com.tr/boss/ab/yosSimulator/8000?drmKod=6021de9f-55e7-454a-94be-2044866b22e1"},"kmlk":{"kmlkTur":"M","kmlkVrs":"123456","ohkTur":"B"},"hspBlg":{"iznBlg":{"iznTur":["01","02","03","04","05"],"erisimIzniSonTrh":"2022-10-12T23:59:59+03:00","hesapIslemBslZmn":"2021-10-10T00:00:00+03:00","hesapIslemBtsZmn":"2023-10-10T23:59:59+03:00"}}}
```
 
Bu gövdenin checksum'ı: 
```
a64b19f95eeb1fb0a0a3e2dbbc6e3d8472c52184d4543417ddc6d156fc5c5571
```
 
Bu checksum'ın iletildiği x-jws-signature başlık değeri:
```
eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaWd3LmJrbS5jb20udHIiLCJleHAiOjE2NjU0NzU1NjIsImlhdCI6MTY2NTM4OTE2MiwiYm9keSI6ImE2NGIxOWY5NWVlYjFmYjBhMGEzZTJkYmJjNmUzZDg0NzJjNTIxODRkNDU0MzQxN2RkYzZkMTU2ZmM1YzU1NzEifQ.Q65PI_1fTEzzBMirvmJvXgVX3orhhZ4_UqujtGdHkU7me-1ymIjvPrzy3kfyER1pedFb7HDCBuPvYoqjX8eUnpiiZsxfzCiEa0McIhoFeUOggq-O8VihItp8bLr2DWwQ9JHN1-WXB2mL31KAKFAL1VY9-DXuAdT-RfE_SLYsl2ycmNy4ti4XvfDvvlE56ZsieFZ727VuwR8wi7F0kKDc6UhjaMF9xcUeAM1fxX-bmcOaOo1NZGC0vvgjNZKz_OJrN-q8VhWYnQPiJ7wY7S9IG8bHIkBImKSVf8LuOEvl8u0BZzADLH1iOBd9x2l1plyI_NLPTrnOqhWhKlljkkJBCg
```
 
Eğer PSU-Fraud-Check için başlık gönderilecekse, yine JWT formatında imza üretilmelidir. Örnek bir psu-fraud-check başlık değeri:

```
eyJhbGciOiJSUzI1NiJ9.eyJBbm9tYWx5RmxhZyI6IjAiLCJMYXN0UGFzc3dvcmRDaGFuZ2VGbGFnIjoiMSIsIkZpcnN0TG9naW5GbGFnIjoiMSIsIkRldmljZUZpcnN0TG9naW5GbGFnIjoiMSIsIkJsYWNrbGlzdEZsYWciOiIwIiwiTWFsd2FyZUZsYWciOiIwIiwiVW5zYWZlQWNjb3VudEZsYWciOiIwIiwiZXhwIjoxNjY1NDc1NTU2LCJpYXQiOjE2NjUzODkxNTYsImlzcyI6Imh0dHBzOi8vYXBpZ3cuYmttLmNvbS50ciJ9.DhUh_nsXDuNIrvsQ3KOhOXdVcJg6fTDVW8K1oea8kLtmb7n-_hJHY3mWX5zzobu-Vh2VvFzIxPhHtol6gLHFktmIMiQ9TDHb_mRZFXgJB4ToNfqc3Fy9mi5bS8By2IYi1HxDaCStstaZDaunzXfHCtqybfZXyk6teDrf-iIf6lqX9Keo7GZO-Y7mP7C13-c_QwyNKrZK4TZwUQbecRqXYn1DcEHM7kukQHTar_hKBWkXPmNpScY0J2rKksr4ejR1uLhdQm-Pdwoe9y6qrNEB79vMLBkRNtbuV0vc1GYHp_YKkzBKBI_58uuB2GD9877CsrcRnHMQb88xpxiPKh6-ew
```


[^RFC7519]:  https://datatracker.ietf.org/doc/html/rfc7519#section-4 


## EK-6: HHS/YÖS API Mimarisi


HHS/YÖS API Uygulama Mimarisinde Test ve Üretim ortamlarında aşağıdaki alanda yer almaktadır.  

<img src="./images/HhsYosApiMimarisiv2.png" width="50%" >


Şekil 15: HHS/YÖS API Mimarisi  