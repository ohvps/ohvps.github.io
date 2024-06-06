(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{754:function(e,i,r){"use strict";r.r(i);var a=r(15),l=Object(a.a)({},(function(){var e=this,i=e._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"hhs-ve-yos-api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#hhs-ve-yos-api"}},[e._v("#")]),e._v(" HHS ve YÖS API")]),e._v(" "),i("p",[e._v("HHS API, HHS’lerin detay bilgilerini sunan servistir. Bu servis ile aşağıdaki istek/yanıt yapıları ile ihtiyaç duyulabilecek ilgili bilgiler temin edilebilir. HHS API için “hhs_read” scope bilgisi kullanılır.")]),e._v(" "),i("p",[e._v("Production ortamında HHS / YOS API içerisinde sisteme dahil olmuş, sertifikasyonu başarı ile tamamlamış paydaşlar listelenecektir. HHS tarafından desteklenen API sürümleri listelenecektir.")]),e._v(" "),i("p",[e._v("YÖS’ler HHS API’sini sorgulayabilir ancak YÖS API’sini sorgulayamazlar."),i("br"),e._v("\nBenzer şekilde HHS’ler YÖS API’sini sorgulayabilir, HHS API’sini sorgulayamazlar.")]),e._v(" "),i("h2",{attrs:{id:"hhs-api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#hhs-api"}},[e._v("#")]),e._v(" HHS API")]),e._v(" "),i("p",[i("strong",[e._v("GET /hhs/{hhsKod}")])]),e._v(" "),i("p",[e._v("İşlem Sorgu Örneği =  /hhs  ⇨  bu sorgu yöntemi ile tüm HHS’lerin dizi şeklinde verileri listelenir."),i("br"),e._v("\nİşlem Sorgu Örneği =  /hhs/2001   ⇨ bu sorgu yöntemi ile gönderilmiş olan hhsKodu’na ait bilgiler listelenir. Ya da “404 Not Found” hatası alır."),i("br"),e._v("\nHHS ve YÖS API Tablo 20’deki istek parametrelerine göre sorgulanabilir."),i("br"),e._v("\nİşlem Sorgu Örneği (Belirli Bir Hesap) =  /hhs?srlmKrtr=kod&srlmYon=A")]),e._v(" "),i("p",[i("strong",[e._v("Tablo 20: HHS ve YÖS API Sorgulama İsteği Sorgu Parametreleri")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Alan Adı")]),e._v(" "),i("th",[e._v("Parametre Adı")]),e._v(" "),i("th",[e._v("Format")]),e._v(" "),i("th",[e._v("Zorunlu / Koşullu /  İsteğe bağlı")]),e._v(" "),i("th",[e._v("Açıklama")]),e._v(" "),i("th",[e._v("HHS tarafından yapılması gereken kontrol ve işlemler")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Sıralama Kriteri")]),e._v(" "),i("td",[e._v("srlmKrtr")]),e._v(" "),i("td",[e._v("AN3..50")]),e._v(" "),i("td",[e._v("İ")]),e._v(" "),i("td",[e._v("Cevapta dönülecek işlemlerin sıralama kriterini belirtir. Alabileceği değerler: {“kod”, “unv”}")]),e._v(" "),i("td",[e._v("Bu veri gönderildiği durumda, HHS işlemler listesini bu kritere göre sıralayarak gönderir. Gönderilmediğinde, sıralama kriteri “unv” olarak belirlenmelidir.")])]),e._v(" "),i("tr",[i("td",[e._v("Sıralama Yönü")]),e._v(" "),i("td",[e._v("srlmYon")]),e._v(" "),i("td",[e._v("AN1")]),e._v(" "),i("td",[e._v("İ")]),e._v(" "),i("td",[e._v("Cevapta dönülecek işlemlerin sıralama yönünü belirtir. Alabileceği değerler: A: Azalan değerle sıralama Y: Artan değerle sıralama {“A”,”Y”}")]),e._v(" "),i("td",[e._v("Bu veri gönderildiği durumda, HHS işlemler listesini bu yöne göre sıralayarak gönderir. Gönderilmediğinde, HHS sıralama yönünü Azalan olarak belirler.")])])])]),e._v(" "),i("p",[i("strong",[e._v("Tablo 21: HHS Bilgileri Sorgulama Yanıtı “Hhs” nesnesi")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Alan Adı")]),e._v(" "),i("th",[e._v("Parametre Adı")]),e._v(" "),i("th",[e._v("Format")]),e._v(" "),i("th",[e._v("Zorunlu / Koşullu /  İsteğe bağlı")]),e._v(" "),i("th",[e._v("Açıklama")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("hhs kodu")]),e._v(" "),i("td",[e._v("kod")]),e._v(" "),i("td",[e._v("AN4")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("HHS nin kod bilgisi")])]),e._v(" "),i("tr",[i("td",[e._v("hhs unvanı")]),e._v(" "),i("td",[e._v("unv")]),e._v(" "),i("td",[e._v("AN3..140")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("HHS nin unvan bilgisi")])]),e._v(" "),i("tr",[i("td",[e._v("hhs markası")]),e._v(" "),i("td",[e._v("marka")]),e._v(" "),i("td",[e._v("AN1..140")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("ÖHK'nın kolaylıkla algılayabileceği kısa unvan bilgisi. HHS tarafından belirlenecektir.")])]),e._v(" "),i("tr",[i("td",[e._v("Açık anahtar")]),e._v(" "),i("td",[e._v("acikAnahtar")]),e._v(" "),i("td",[e._v("AN1..1024")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("HHS’nin mesaj imzalama için paylaştığı açık anahtar")])]),e._v(" "),i("tr",[i("td",[e._v("HHS Api Bilgileri")]),e._v(" "),i("td",[e._v("apiBilgileri")]),e._v(" "),i("td",[e._v("Kompleks: HhsApiBilgi[Array][0..N]")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("Desteklenen Api ve sürüm bilgileri dönülecektir.")])]),e._v(" "),i("tr",[i("td",[e._v("> api")]),e._v(" "),i("td",[e._v("api")]),e._v(" "),i("td",[e._v("AN1..20")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("Api İsmi Örnek :obh, hbh,gkd")])]),e._v(" "),i("tr",[i("td",[e._v("> surum")]),e._v(" "),i("td",[e._v("surum")]),e._v(" "),i("td",[e._v("AN1..10")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("Api Sürüm Kodu Örnek: s1.0, s1.0, s2.0")])]),e._v(" "),i("tr",[i("td",[e._v("HHS Hizmet Bilgileri")]),e._v(" "),i("td",[e._v("hizmetBilgileri")]),e._v(" "),i("td",[e._v("Kompleks: HhsHizmetBilgi[Array][0..N]")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("Desteklenen hizmet ve sürüm bilgileri dönülecektir.")])]),e._v(" "),i("tr",[i("td",[e._v("> hizmetTipi")]),e._v(" "),i("td",[e._v("hizmetTipi")]),e._v(" "),i("td",[e._v("AN1..20")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("Hizmet Tipi bilgileri.TR.OHVPS.DataCode.HizmetTipi sıralı veri türü değerlerinden birini alır.")])]),e._v(" "),i("tr",[i("td",[e._v("> surum")]),e._v(" "),i("td",[e._v("surum")]),e._v(" "),i("td",[e._v("AN1..10")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("Api Sürüm Kodu Örnek: s1.0, s1.1, s2.0")])]),e._v(" "),i("tr",[i("td",[e._v("Logo Bilgileri")]),e._v(" "),i("td",[e._v("logoBilgileri")]),e._v(" "),i("td",[e._v("Kompleks: LogoBilgisi [Array][1..N]")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("HHS'ye ait logo bilgileri.")])]),e._v(" "),i("tr",[i("td",[e._v("> logoTur")]),e._v(" "),i("td",[e._v("logoTur")]),e._v(" "),i("td",[e._v("AN3..50")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("Logonun türünü belirler."),i("br"),e._v("TR.OHVPS.DataCode.LogoTur sıralı veri türü değerlerlerinden birini alır.")])]),e._v(" "),i("tr",[i("td",[e._v("> logoAdr")]),e._v(" "),i("td",[e._v("logoAdr")]),e._v(" "),i("td",[e._v("AN1..255")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("HHS tarafında tutulan ve YÖS'lerle paylaşılacak olan url adres bilgisidir. "),i("br"),e._v("Örnek: https://via.placeholder.com/150?text=0001")])]),e._v(" "),i("tr",[i("td",[e._v("> logoArkaPlan")]),e._v(" "),i("td",[e._v("logoArkaPlan")]),e._v(" "),i("td",[e._v("AN1")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("TR.OHVPS.DataCode.LogoArkaPlan sıralı veri türü değerlerlerinden birini alır.")])]),e._v(" "),i("tr",[i("td",[e._v("> logoFormat")]),e._v(" "),i("td",[e._v("logoFormat")]),e._v(" "),i("td",[e._v("AN3")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("TR.OHVPS.DataCode.LogoFormat sıralı veri türü değerlerlerinden birini alır.")])]),e._v(" "),i("tr",[i("td",[e._v("Durum")]),e._v(" "),i("td",[e._v("durum")]),e._v(" "),i("td",[e._v("AN1")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("HHS'nin durum bilgisidir."),i("br"),e._v(" TR.OHVPS.DataCode.HHSDurumu sıralı veri tipinde alabileceği değerler belirtilmiştir.")])])])]),e._v(" "),i("p",[e._v("HHS API'de; Açık, Yaygınlaştırma, Geçici Hizmet Veremiyor, Kapalı durumlarındaki HHS'ler listelenecektir. "),i("br"),e._v('\nSertifikasyon onayı alan HHS\'ler, üretim ortamına geçişte "Yaygınlaştırma" durumuna sahip olabilir.  HHS\'nin, hangi YÖS\'ler ile "Yaygınlaştırma" kontrollerini yapacağı, HHS yönetiminde olacaktır. Böylece Üretim Ortamında HHS’nin kendisi tarafından tanımlanmış kısıtlı ÖHK’ya hizmet vermesi ve servislerini test etmesi sağlanabilir olacaktır. HHS\'ler kendi kurum kontrollerini yapana kadar, "Yaygınlaştırma" durumunda kalabilirler. HHS\'nin BKM\'ye yapacağı talep ile, HHS "Yaygınlaştırma" durumundan "Açık" durumuna geçebilecektir.'),i("br")]),e._v(" "),i("p",[e._v("Aşağıdaki durumlarda HHS'nin statüsü Geçici Kapalı olarak güncellenebilecektir:")]),e._v(" "),i("ul",[i("li",[e._v("HHS'nin talebi ile uzun süreli (minimum 1 saati aşan) yaşanan teknik sorunlarda G statüsüne alınabilecektir. G statüsüne alınma talebinin HHS tarafından ohvps@bkm.com.tr ye mail atarak iletilmesi beklenmektedir.")]),e._v(" "),i("li",[e._v("İlgili resmi kurumlardan gelen talep üzerine HHS G statüsüne alınabilir.")])]),e._v(" "),i("p",[e._v("YÖS'ler hem A hem G statüsünde olan HHS'leri listeleyebilir. Ancak YÖS uygulamasında G statüsünde olan bir HHS müşteri tarafından seçilirse müşteriye gerekli hata mesajının verilmesi ve ilgili HHS'ye istek atılmaması sağlanmalıdır.")]),e._v(" "),i("p",[e._v("Hem YOS hem de HHS API için geçerli olacak; logo gönderiminde dikkat edilmesi gerekenler şu şekilde tariflenmiştir:")]),e._v(" "),i("ol",[i("li",[e._v("Logoların ham dosya yerine kurumun yayınlayacağı bir URL üzerinden sunulması gerekmektedir. (Örn: logoURL = https://kurumadi.com.tr/logo.png) Logo BKM tarafında host edilmeyecektir.")]),e._v(" "),i("li",[e._v("Logo url’in public erişilebilir url olması gereklidir.")]),e._v(" "),i("li",[e._v("Logo, yatayda veya dikeyde taşma paysız tam oturacak, sınır boyutlarını geçmeyecek ve ortalanmış yerleşime sahip olmalıdır.")]),e._v(" "),i("li",[e._v("YÖS uygulamasında gösterim esnasında logoların hızlı yüklenmesi ve düşük veri tüketmesi açısından; logo boyutu 250 KB’ın altında olmalıdır.")]),e._v(" "),i("li",[e._v("HHS ve YÖS’lerin tüm logo türlerini (8 farklı tipte logoyu) zorunlu olarak dönmesi beklenmektedir.")]),e._v(" "),i("li",[e._v("Circle logo kullanılması gerektiğinde ICON_LOGO logo türü kullanılmalıdır.")]),e._v(" "),i("li",[e._v("Logolarını güncellemek isteyen kurumların en az 3 iş günü öncesinde BKM’ye bu değişikliği GEÇİT Test/Üretim Ortamı Entegrasyon formu ile bildirmesi gereklidir.  BKM de katılımcılara HHS/YÖS API aracılığı ile güncel logonun çekilmesi gerektiğine dair bilgilendirme yapar.")]),e._v(" "),i("li",[e._v("Logoları anlık çeken katılımcıların, herhangi bir teknik nedenden dolayı güncel logoyu alamadığı durum olabilir. Bu durumda sistemlerine kaydetmiş olduğu kuruma ait ikon logoyu göstermesi gereklidir.")]),e._v(" "),i("li",[e._v("HHS ve YÖS’ler API aracılığı ile almış oldukları logoların formatı üzerinde değişiklik (kare, yuvarlak hale getirip resize etmek gibi) yapabilirler. Ancak logonun görsel ve yazılarını etkileyecek bir  değişiklik yapmamalıdırlar.")]),e._v(" "),i("li",[e._v("YÖS/HHS mobil uygulamasındaki dark mode ve light mode kullanımlarında, hangi logonun kullanılacağına uygulama sahibi karar verecektir.")])]),e._v(" "),i("h2",{attrs:{id:"yos-api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#yos-api"}},[e._v("#")]),e._v(" YOS API")]),e._v(" "),i("p",[e._v("YÖS API, YÖS statüsundeki kurumların detay bilgilerini sunan servistir. Bu servis ile aşağıdaki istek/yanıt yapıları ile ihtiyaç duyulabilecek ilgili bilgiler temin edilebilir. YÖS API için “yos_read” scope bilgisi kullanılır.")]),e._v(" "),i("p",[e._v("YÖS API yanıtında, listelenen yönlendirme ve bildirim adresleri bulunmaktadır. HHS, işlem anında iletilen yonAdr ya da bldrAdr alanlarında gönderilen adreslere yetKod değerini iletmelidir. YÖS API içerisinde yer alan adresleri, rıza isteğinde gönderilen adreslerin doğruluğunu kontrol etme amacıyla kullanılmalıdır. Bu nedenle YÖS API içerisinde listelenen adreslerin hostname seviyesinde yer alması yeterlidir.")]),e._v(" "),i("p",[e._v("YÖS API içerisinde yer alan YÖS rol bilgileri ve aktiflik/pasiflik durumları birbiriyle ilişkili değildir.")]),e._v(" "),i("p",[e._v("YÖS'ün sahip olduğu öbhs,hbhs rolleri için herhangi bir fraud ya da teknik sebeplerden ötürü geçici süreyle geri alınabilir.")]),e._v(" "),i("p",[e._v("YÖS'lerin hizmet verememesi durumunda rollerinin geri alınması yapılmayacaktır. YÖS rolleri sadece ilgili resmi kurumlardan gelen talep üzerine alınabilecektir.")]),e._v(" "),i("p",[e._v("YÖS aktifliğini korurken problem çözülene kadar geçici olarak alınan roller(öbhs,hbhs) tekrardan aktif hale getirilir.")]),e._v(" "),i("p",[i("strong",[e._v("GET /yos/{yosKod}")])]),e._v(" "),i("p",[e._v("İşlem Sorgu Örneği =  /yos  ⇨  bu sorgu yöntemi ile tüm YÖS'lerin dizi şeklinde verileri listelenir.")]),e._v(" "),i("p",[e._v("İşlem Sorgu Örneği =  /yos/2501  ⇨  bu sorgu yöntemi ile gönderilmiş olan yosKodu’na ait bilgiler listelenir ya da “404 Not Found” hatası alır.\nYÖS API Tablo 20’deki istek parametrelerine göre sorgulanabilir.\nİşlem Sorgu Örneği (Belirli Bir Hesap)=  /yos?srlmKrtr=kod&srlmYon=A")]),e._v(" "),i("p",[i("strong",[e._v("Tablo 22: YOS Bilgileri Sorgulama Yanıtı “Yos” nesnesi")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Alan Adı")]),e._v(" "),i("th",[e._v("Parametre Adı")]),e._v(" "),i("th",[e._v("Format")]),e._v(" "),i("th",[e._v("Zorunlu / Koşullu /  İsteğe bağlı")]),e._v(" "),i("th",[e._v("Açıklama")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Yös kodu")]),e._v(" "),i("td",[e._v("kod")]),e._v(" "),i("td",[e._v("AN4")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("YÖS'ün kod bilgisi")])]),e._v(" "),i("tr",[i("td",[e._v("Yös unvanı")]),e._v(" "),i("td",[e._v("unv")]),e._v(" "),i("td",[e._v("AN3..140")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("YÖS unvan bilgisi")])]),e._v(" "),i("tr",[i("td",[e._v("Yös markası")]),e._v(" "),i("td",[e._v("marka")]),e._v(" "),i("td",[e._v("AN1..140")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("ÖHK'nın kolaylıkla algılayabileceği kısa unvan bilgisi. YÖS tarafından belirlenecektir.")])]),e._v(" "),i("tr",[i("td",[e._v("YÖS rolleri")]),e._v(" "),i("td",[e._v("roller")]),e._v(" "),i("td",[e._v("Array[AN4]")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v('YÖS’un rollerini belirten değer. Örnek: [ "obhs", "hbhs" ]'),i("br"),e._v(" - obhs - Ödeme Bilgisi Hizmet Sağlayıcı Rolü"),i("br"),e._v(" - hbhs - Hesap Bilgisi Hizmet Sağlayıcı Rolü")])]),e._v(" "),i("tr",[i("td",[e._v("Adresler")]),e._v(" "),i("td",[e._v("adresler")]),e._v(" "),i("td",[e._v("Kompleks:Adres[Array] [1..N]")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("---")])]),e._v(" "),i("tr",[i("td",[e._v("> Yetkilendirme Yöntemi")]),e._v(" "),i("td",[e._v("yetYntm")]),e._v(" "),i("td",[e._v("AN1")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("TR.OHVPS.DataCode.GkdTur sıralı veri türü değerlerlerinden birini alır."),i("br"),e._v("Adres detaylarının hangi GKD türüne ait olduğunu belirtir.")])]),e._v(" "),i("tr",[i("td",[e._v("> Adres Detayları")]),e._v(" "),i("td",[e._v("adresDetaylari")]),e._v(" "),i("td",[e._v("adresDetaylari\tKompleks: AdresDetayi[Array] [1..N]")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td")]),e._v(" "),i("tr",[i("td",[e._v(">> Temel Adres")]),e._v(" "),i("td",[e._v("tmlAdr")]),e._v(" "),i("td",[e._v("AN1..1024")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("yetYntm değeri “Y” olarak iletildiğinde Yönlendirmeli GKD sürecinde HHS’nin YOS’e authorizasyon kodunu hangi url e göndereceği bilgisini tutar."),i("br"),e._v("yetYntm değeri “A” olarak iletildiğinde Ayrık GKD sürecinde HHS’nin YOS’e authorizasyon kodunu hangi url e göndereceği bilgisini tutar."),i("br"),e._v("Riza isteklerinde bu değer ile uyumluluğu kontrol edilmelidir."),i("br"),e._v("Örnek: https://example.com"),i("br"),e._v("https://example2.com/path"),i("br"),e._v("deepLink://example/test"),i("br"),e._v("deepLink://example2/test")])]),e._v(" "),i("tr",[i("td",[e._v(">> Açıklama")]),e._v(" "),i("td",[e._v("aciklama")]),e._v(" "),i("td",[e._v("AN1..1024")]),e._v(" "),i("td",[e._v("İ")]),e._v(" "),i("td",[e._v("YÖS’ün gönderdiği adrese yönelik vermek istediği açıklama"),i("br"),e._v("Örnek: WEB bireysel , WEB kurumsal  , APP")])]),e._v(" "),i("tr",[i("td",[e._v("Açık anahtar")]),e._v(" "),i("td",[e._v("acikAnahtar")]),e._v(" "),i("td",[e._v("AN1..1024")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("YÖS’ün mesaj imzalama için paylaştığı açık anahtar")])]),e._v(" "),i("tr",[i("td",[e._v("YÖS Api Bilgileri")]),e._v(" "),i("td",[e._v("apiBilgileri")]),e._v(" "),i("td",[e._v("Kompleks: YosApiBilgi[Array][0..N]")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("Desteklenen Api ve sürüm bilgileri dönülecektir.")])]),e._v(" "),i("tr",[i("td",[e._v("> api")]),e._v(" "),i("td",[e._v("api")]),e._v(" "),i("td",[e._v("AN1..20")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("Api İsmi Örnek :ods")])]),e._v(" "),i("tr",[i("td",[e._v("> surum")]),e._v(" "),i("td",[e._v("surum")]),e._v(" "),i("td",[e._v("AN1..10")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("Api Sürüm Kodu Örnek: s1.0, s2.0 s1.0")])]),e._v(" "),i("tr",[i("td",[e._v("Logo Bilgileri")]),e._v(" "),i("td",[e._v("logoBilgileri")]),e._v(" "),i("td",[e._v("Kompleks: LogoBilgisi [Array][1..N]")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("YOS’e ait logo bilgileri.")])]),e._v(" "),i("tr",[i("td",[e._v("> logoTur")]),e._v(" "),i("td",[e._v("logoTur")]),e._v(" "),i("td",[e._v("AN3..50")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("Logonun türünü belirler."),i("br"),e._v("TR.OHVPS.DataCode.LogoTur sıralı veri türü değerlerlerinden birini alır.")])]),e._v(" "),i("tr",[i("td",[e._v("> logoAdr")]),e._v(" "),i("td",[e._v("logoAdr")]),e._v(" "),i("td",[e._v("AN1..255")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("YÖS tarafında tutulan ve HHS’lerle paylaşılacak olan url adres bilgisidir. "),i("br"),e._v("Örnek: https://via.placeholder.com/150?text=0001")])]),e._v(" "),i("tr",[i("td",[e._v("> logoArkaPlan")]),e._v(" "),i("td",[e._v("logoArkaPlan")]),e._v(" "),i("td",[e._v("AN1")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("TR.OHVPS.DataCode.LogoArkaPlan sıralı veri türü değerlerlerinden birini alır.")])]),e._v(" "),i("tr",[i("td",[e._v("> logoFormat")]),e._v(" "),i("td",[e._v("logoFormat")]),e._v(" "),i("td",[e._v("AN3")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("TR.OHVPS.DataCode.LogoFormat sıralı veri türü değerlerlerinden birini alır.")])]),e._v(" "),i("tr",[i("td",[e._v("Durum")]),e._v(" "),i("td",[e._v("durum")]),e._v(" "),i("td",[e._v("AN1")]),e._v(" "),i("td",[e._v("Z")]),e._v(" "),i("td",[e._v("YÖS'ün durum bilgisidir."),i("br"),e._v(" TR.OHVPS.DataCode.YOSDurumu sıralı veri tipinde alabileceği değerler belirtilmiştir.")])])])])])}),[],!1,null,null,null);i.default=l.exports}}]);