(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{646:function(e,r,i){"use strict";i.r(r);var a=i(15),l=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hhs-ve-yos-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hhs-ve-yos-api"}},[e._v("#")]),e._v(" HHS ve YÖS API")]),e._v(" "),r("p",[e._v("HHS API, HHS’lerin detay bilgilerini sunan servistir. Bu servis ile aşağıdaki istek/yanıt yapıları ile ihtiyaç duyulabilecek ilgili bilgiler temin edilebilir. HHS API için “hhs_read” scope bilgisi kullanılır.")]),e._v(" "),r("p",[e._v("Production ortamında HHS / YOS API içerisinde sisteme dahil olmuş, sertifikasyonu başarı ile tamamlamış paydaşlar listelenecektir. HHS tarafından desteklenen API sürümleri listelenecektir.")]),e._v(" "),r("p",[e._v("YÖS’ler HHS API’sini sorgulayabilir ancak YÖS API’sini sorgulayamazlar."),r("br"),e._v("\nBenzer şekilde HHS’ler YÖS API’sini sorgulayabilir, HHS API’sini sorgulayamazlar.")]),e._v(" "),r("h2",{attrs:{id:"hhs-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hhs-api"}},[e._v("#")]),e._v(" HHS API")]),e._v(" "),r("p",[r("strong",[e._v("GET /hhs/{hhsKod}")])]),e._v(" "),r("p",[e._v("İşlem Sorgu Örneği =  /hhs  ⇨  bu sorgu yöntemi ile tüm HHS’lerin dizi şeklinde verileri listelenir."),r("br"),e._v("\nİşlem Sorgu Örneği =  /hhs/2001   ⇨ bu sorgu yöntemi ile gönderilmiş olan hhsKodu’na ait bilgiler listelenir. Ya da “404 Not Found” hatası alır."),r("br"),e._v("\nHHS ve YÖS API Tablo 20’deki istek parametrelerine göre sorgulanabilir."),r("br"),e._v("\nİşlem Sorgu Örneği (Belirli Bir Hesap) =  /hhs?srlmKrtr=kod&srlmYon=A")]),e._v(" "),r("p",[r("strong",[e._v("Tablo 20: HHS ve YÖS API Sorgulama İsteği Sorgu Parametreleri")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Alan Adı")]),e._v(" "),r("th",[e._v("Parametre Adı")]),e._v(" "),r("th",[e._v("Format")]),e._v(" "),r("th",[e._v("Zorunlu / Koşullu /  İsteğe bağlı")]),e._v(" "),r("th",[e._v("Açıklama")]),e._v(" "),r("th",[e._v("HHS tarafından yapılması gereken kontrol ve işlemler")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Sıralama Kriteri")]),e._v(" "),r("td",[e._v("srlmKrtr")]),e._v(" "),r("td",[e._v("AN3..50")]),e._v(" "),r("td",[e._v("İ")]),e._v(" "),r("td",[e._v("Cevapta dönülecek işlemlerin sıralama kriterini belirtir. Alabileceği değerler: {“kod”, “unv”}")]),e._v(" "),r("td",[e._v("Bu veri gönderildiği durumda, HHS işlemler listesini bu kritere göre sıralayarak gönderir. Gönderilmediğinde, sıralama kriteri “unv” olarak belirlenmelidir.")])]),e._v(" "),r("tr",[r("td",[e._v("Sıralama Yönü")]),e._v(" "),r("td",[e._v("srlmYon")]),e._v(" "),r("td",[e._v("AN1")]),e._v(" "),r("td",[e._v("İ")]),e._v(" "),r("td",[e._v("Cevapta dönülecek işlemlerin sıralama yönünü belirtir. Alabileceği değerler: A: Azalan değerle sıralama Y: Artan değerle sıralama {“A”,”Y”}")]),e._v(" "),r("td",[e._v("Bu veri gönderildiği durumda, HHS işlemler listesini bu yöne göre sıralayarak gönderir. Gönderilmediğinde, HHS sıralama yönünü Azalan olarak belirler.")])])])]),e._v(" "),r("p",[r("strong",[e._v("Tablo 21: HHS Bilgileri Sorgulama Yanıtı “Hhs” nesnesi")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Alan Adı")]),e._v(" "),r("th",[e._v("Parametre Adı")]),e._v(" "),r("th",[e._v("Format")]),e._v(" "),r("th",[e._v("Zorunlu / Koşullu /  İsteğe bağlı")]),e._v(" "),r("th",[e._v("Açıklama")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("hhs kodu")]),e._v(" "),r("td",[e._v("kod")]),e._v(" "),r("td",[e._v("AN4")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("HHS nin kod bilgisi")])]),e._v(" "),r("tr",[r("td",[e._v("hhs unvanı")]),e._v(" "),r("td",[e._v("unv")]),e._v(" "),r("td",[e._v("AN3..140")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("HHS nin unvan bilgisi")])]),e._v(" "),r("tr",[r("td",[e._v("hhs markası")]),e._v(" "),r("td",[e._v("marka")]),e._v(" "),r("td",[e._v("AN1..140")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("ÖHK'nın kolaylıkla algılayabileceği kısa unvan bilgisi. HHS tarafından belirlenecektir.")])]),e._v(" "),r("tr",[r("td",[e._v("Açık anahtar")]),e._v(" "),r("td",[e._v("acikAnahtar")]),e._v(" "),r("td",[e._v("AN1..1024")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("HHS’nin mesaj imzalama için paylaştığı açık anahtar")])]),e._v(" "),r("tr",[r("td",[e._v("HHS Api Bilgileri")]),e._v(" "),r("td",[e._v("apiBilgileri")]),e._v(" "),r("td",[e._v("Kompleks: HhsApiBilgi[Array][0..N]")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("Desteklenen Api ve sürüm bilgileri dönülecektir.")])]),e._v(" "),r("tr",[r("td",[e._v("> api")]),e._v(" "),r("td",[e._v("api")]),e._v(" "),r("td",[e._v("AN1..20")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("Api İsmi Örnek :obh, hbh,gkd")])]),e._v(" "),r("tr",[r("td",[e._v("> surum")]),e._v(" "),r("td",[e._v("surum")]),e._v(" "),r("td",[e._v("AN1..10")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("Api Sürüm Kodu Örnek: s1.0, s2.0 s1.0")])]),e._v(" "),r("tr",[r("td",[e._v("Logo Bilgileri")]),e._v(" "),r("td",[e._v("logoBilgileri")]),e._v(" "),r("td",[e._v("Kompleks: LogoBilgisi [Array][1..N]")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("HHS’ye ait logo bilgileri. Logotur = Original  formatındaki logonun minimumda gönderimi zorunludur.")])]),e._v(" "),r("tr",[r("td",[e._v(">logoTur")]),e._v(" "),r("td",[e._v("logoTur")]),e._v(" "),r("td",[e._v("AN3..50")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("Logonun türünü belirler."),r("br"),e._v("TR.OHVPS.DataCode.LogoTur alabileceği değerler "),r("br"),e._v("ORIGINAL , WHITE_OVERLAY , BLACK_OVERLAY , GRAY_OVERLAY")])]),e._v(" "),r("tr",[r("td",[e._v("> logoAdr")]),e._v(" "),r("td",[e._v("logoAdr")]),e._v(" "),r("td",[e._v("AN1..255")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("HHS tarafında tutulan ve YÖS’lerle paylaşılacak olan url adres bilgisidir.")])])])]),e._v(" "),r("p",[e._v("Hem YOS hem de HHS API için geçerli olacak; logo gönderiminde dikkat edilmesi gerekenler şu şekilde tariflenmiştir:")]),e._v(" "),r("ol",[r("li",[e._v("Logoların ham dosya yerine kurumun yayınlayacağı bir URL üzerinden sunulması gerekmektedir. (Örn: logoURL  =  https://kurumadi.com.tr/logo.png) Logo BKM tarafında host edilmeyecektir.)")]),e._v(" "),r("li",[e._v("PNG formatında (PNG-24) olmalıdır.")]),e._v(" "),r("li",[e._v("72 DPI çözünürlükte olmalıdır.")]),e._v(" "),r("li",[e._v("500 x 500 boyutlarında, yatayda veya dikeyde taşma paysız tam oturacak, sınır boyutlarını geçmeyecek ve ortalanmış yerleşime sahip olmalıdır.")]),e._v(" "),r("li",[e._v("Logo arka planı renkli olmamalı, arka plan transparan olmalıdır.")]),e._v(" "),r("li",[e._v("YÖS uygulamasında gösterim esnasında logoların hızlı yüklenmesi ve düşük veri tüketmesi açısından; logo boyutu 250 KB’ın altında olmalıdır.")]),e._v(" "),r("li",[e._v("Dört adet logo türü belirlenmiştir. Bu 4 tür için de logo dönülmesi zorunludur.")]),e._v(" "),r("li",[e._v("Logo url’in public erişilebilir url olması gereklidir.")])]),e._v(" "),r("p",[e._v("YÖS API, YÖS statüsundeki kurumların detay bilgilerini sunan servistir. Bu servis ile aşağıdaki istek/yanıt yapıları ile ihtiyaç duyulabilecek ilgili bilgiler temin edilebilir. YÖS API için “yos_read” scope bilgisi kullanılır.")]),e._v(" "),r("p",[e._v("YÖS API yanıtında, listelenen yönlendirme ve bildirim adresleri bulunmaktadır. HHS, işlem anında iletilen yonAdr ya da bldrAdr alanlarında gönderilen adreslere yetKod değerini iletmelidir. YÖS API içerisinde yer alan adresleri, rıza isteğinde gönderilen adreslerin doğruluğunu kontrol etme amacıyla kullanılmalıdır. Bu nedenle YÖS API içerisinde listelenen adreslerin hostname seviyesinde yer alması yeterlidir.")]),e._v(" "),r("h2",{attrs:{id:"yos-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yos-api"}},[e._v("#")]),e._v(" YOS API")]),e._v(" "),r("p",[r("strong",[e._v("GET /yos/{yosKod}")])]),e._v(" "),r("p",[e._v("İşlem Sorgu Örneği =  /yos    bu sorgu yöntemi ile tüm yos lerin dizi şeklinde verileri listelenir.")]),e._v(" "),r("p",[e._v("İşlem Sorgu Örneği =  /yos/2501    bu sorgu yöntemi ile gönderilmiş olan yosKodu’na ait bilgiler listelenir ya da “404 Not Found” hatası alır.\nYÖS API Tablo 20’deki istek parametrelerine göre sorgulanabilir.\nİşlem Sorgu Örneği (Belirli Bir Hesap)=  /yos?srlmKrtr=kod&srlmYon=A")]),e._v(" "),r("p",[r("strong",[e._v("Tablo 22: YOS Bilgileri Sorgulama Yanıtı “Yos” nesnesi")])]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Alan Adı")]),e._v(" "),r("th",[e._v("Parametre Adı")]),e._v(" "),r("th",[e._v("Format")]),e._v(" "),r("th",[e._v("Zorunlu / Koşullu /  İsteğe bağlı")]),e._v(" "),r("th",[e._v("Açıklama")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Yös kodu")]),e._v(" "),r("td",[e._v("kod")]),e._v(" "),r("td",[e._v("AN4")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("YÖS'ün kod bilgisi")])]),e._v(" "),r("tr",[r("td",[e._v("Yös unvanı")]),e._v(" "),r("td",[e._v("unv")]),e._v(" "),r("td",[e._v("AN3..140")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("YÖS unvan bilgisi")])]),e._v(" "),r("tr",[r("td",[e._v("Yös markası")]),e._v(" "),r("td",[e._v("marka")]),e._v(" "),r("td",[e._v("AN1..140")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("ÖHK'nın kolaylıkla algılayabileceği kısa unvan bilgisi. YÖS tarafından belirlenecektir.")])]),e._v(" "),r("tr",[r("td",[e._v("YÖS rolleri")]),e._v(" "),r("td",[e._v("roller")]),e._v(" "),r("td",[e._v("Array[AN4]")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v('YÖS’un rollerini belirten değer. Örnek: [ "obhs", "hbhs" ]'),r("br"),e._v(" - obhs - Ödeme Bilgisi Hizmet Sağlayıcı Rolü"),r("br"),e._v(" - hbhs - Hesap Bilgisi Hizmet Sağlayıcı Rolü")])]),e._v(" "),r("tr",[r("td",[e._v("Adresler")]),e._v(" "),r("td",[e._v("adresler")]),e._v(" "),r("td",[e._v("Kompleks:Adres[Array] [1..N]")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("---")])]),e._v(" "),r("tr",[r("td",[e._v("> Yetkilendirme Yöntemi")]),e._v(" "),r("td",[e._v("yetYntm")]),e._v(" "),r("td",[e._v("AN1")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("TR.OHVPS.DataCode.GkdTur sıralı veri türü değerlerlerinden birini alır."),r("br"),e._v("Adres detaylarının hangi GKD türüne ait olduğunu belirtir.")])]),e._v(" "),r("tr",[r("td",[e._v(">Adres Detayları")]),e._v(" "),r("td",[e._v("adresDetaylari")]),e._v(" "),r("td",[e._v("adresDetaylari\tKompleks: AdresDetayi[Array] [1..N]")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td")]),e._v(" "),r("tr",[r("td",[e._v(">>Temel Adres")]),e._v(" "),r("td",[e._v("tmlAdr")]),e._v(" "),r("td",[e._v("AN1..1024")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("yetYntm değeri “Y” olarak iletildiğinde Yönlendirmeli GKD sürecinde HHS’nin YOS’e authorizasyon kodunu hangi url e göndereceği bilgisini tutar."),r("br"),e._v("yetYntm değeri “A” olarak iletildiğinde Ayrık GKD sürecinde HHS’nin YOS’e authorizasyon kodunu hangi url e göndereceği bilgisini tutar."),r("br"),e._v("Riza isteklerinde bu değer ile uyumluluğu kontrol edilmelidir."),r("br"),e._v("Örnek: https://example.com"),r("br"),e._v("https://example2.com/path"),r("br"),e._v("deepLink://example/test"),r("br"),e._v("deepLink://example2/test")])]),e._v(" "),r("tr",[r("td",[e._v(">>Açıklama")]),e._v(" "),r("td",[e._v("aciklama")]),e._v(" "),r("td",[e._v("AN1..1024")]),e._v(" "),r("td",[e._v("İ")]),e._v(" "),r("td",[e._v("YÖS’ün gönderdiği adrese yönelik vermek istediği açıklama"),r("br"),e._v("Örnek: WEB bireysel , WEB kurumsal  , APP")])]),e._v(" "),r("tr",[r("td",[e._v("Açık anahtar")]),e._v(" "),r("td",[e._v("acikAnahtar")]),e._v(" "),r("td",[e._v("AN1..1024")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("YÖS’ün mesaj imzalama için paylaştığı açık anahtar")])]),e._v(" "),r("tr",[r("td",[e._v("Logo Bilgileri")]),e._v(" "),r("td",[e._v("logoBilgileri")]),e._v(" "),r("td",[e._v("Kompleks: LogoBilgisi [Array][1..N]")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("YOS’e ait logo bilgileri. Logotur = Original formatındaki logonun minimumda gönderimi zorunludur.")])]),e._v(" "),r("tr",[r("td",[e._v(">logoTur")]),e._v(" "),r("td",[e._v("logoTur")]),e._v(" "),r("td",[e._v("AN3..50")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("Logonun türünü belirler."),r("br"),e._v("TR.OHVPS.DataCode.LogoTur alabileceği değerler "),r("br"),e._v("ORIGINAL , WHITE_OVERLAY , BLACK_OVERLAY , GRAY_OVERLAY")])]),e._v(" "),r("tr",[r("td",[e._v("> logoAdr")]),e._v(" "),r("td",[e._v("logoAdr")]),e._v(" "),r("td",[e._v("AN1..255")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("YÖS tarafında tutulan ve HHS’lerle paylaşılacak olan url adres bilgisidir. Örnek: https://via.placeholder.com/150?text=0001")])])])]),e._v(" "),r("h2",{attrs:{id:"healthcheck-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#healthcheck-api"}},[e._v("#")]),e._v(" Healthcheck API")]),e._v(" "),r("p",[e._v("GET /health")]),e._v(" "),r("p",[e._v("HHS ve YÖS API için health servisleri aşağıdaki servislerle kontrol edilebilir.")]),e._v(" "),r("p",[e._v("Başarılı yanıtta Http 200 kodu dönülecektir\nBaşarılı Yanıt:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Alan Adı")]),e._v(" "),r("th",[e._v("JSON Alan Adı")]),e._v(" "),r("th",[e._v("Format: Veri modeli İsmi")]),e._v(" "),r("th",[e._v("Zorunlu / Koşullu / İsteğe bağlı")]),e._v(" "),r("th",[e._v("Açıklama")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("status")]),e._v(" "),r("td",[e._v("status")]),e._v(" "),r("td",[e._v("AN2..20")]),e._v(" "),r("td",[e._v("Z")]),e._v(" "),r("td",[e._v("“UP”, “DOWN” değerlerini alabilir")])])])])])}),[],!1,null,null,null);r.default=l.exports}}]);