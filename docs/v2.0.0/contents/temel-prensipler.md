# 3. Temel Prensipler <!-- omit in toc -->

Bu bölümde Ödeme Hizmetleri Veri Paylaşım Servisleri (Hesap Bilgisi Hizmeti, Ödeme Emri Başlatma Hizmeti) için tanımlanan temel prensipler açıklanmaktadır.    

<!--
- [3.1 Genel](#_3-1-genel)
- [3.2.	İstem ve Oturum](#_3-2-istem-ve-oturum)
- [3.3.	RESTful API](#_3-3-restful-api)
- [3.4.	Sürüm Yönetimi](#_3-4-surum-yonetimi)
- [3.5.	Kaynak URI Yol Yapısı](#_3-5-kaynak-uri-yol-yapisi)
- [3.6.	Karakter Kodlama](#_3-6-karakter-kodlama)
- [3.7.	Veri Formatı](#_3-7-veri-formatı)
- [3.8.	İstemci Sertifika Yönetimi](#_3-8-istemci-sertifika-yonetimi)
- [3.9.	Yetkilendirme Türleri](#_3-9-yetkilendirme-turleri)
- [3.10. İstek/Cevap Mesajlarında Kullanılan Nesne Yapıları](#_3-10-istek-cevap-mesajlarında-kullanılan-nesne-yapıları)
- [3.11. Sayfalandırma ve Filtreleme](#_3-11-sayfalandırma-ve-filtreleme)
- [3.12. Mesaj İmzalama](#_3-12-mesaj-imzalama)
- [3.13. Durum Kodu](#_3-13-durum-kodu)
- [3.14. Gereksinimlerinin Sınıflandırılması](#_3-14-gereksinimlerinin-sınıflandırılması)
- [3.15. İstek Başlığı](#_3-15-istek-baslıgı)
- [3.16. Yanıt Başlığı](#_3-16-yanıt-baslıgı)
- [3.17. Idempotency Kuralları](#_3-17-idempotency-kuralları)
- [3.18. HTTP Durum Kodları](#_3-18-http-durum-kodları)
- [3.19. Maskeleme Kuralları](#_3-19-maskeleme-kuralları)
- [3.20. Fonksiyonel Olmayan Gereksinimler](#_3-20-fonksiyonel-olmayan-gereksinimler)

-->

## 3.1 Genel  

- HHS’ler Yönetmeliğin 59. maddesinin beşinci fıkrası ve Ödeme ve Elektronik Para Kuruluşlarının Bilgi Sistemleri ile Ödeme Hizmeti Sağlayıcılarının Ödeme Hizmetleri Alanındaki Veri Paylaşım Servislerine İlişkin Tebliğin (Tebliğ) 23. maddesinin birinci fıkrası uyarınca, ödeme hizmetleri veri paylaşım servislerini GEÇİT aracılığıyla HBHS ve ÖBHS’ye sunmakla yükümlüdür.  

- Tebliğin 23. maddesinin ikinci fıkrası uyarınca ödeme emri başlatma hizmetinde açık iletişim servisinin tarafları ÖBHS ile HHS’dir.

-	Tebliğin 23. maddesinin üçüncü fıkrası uyarınca hesap bilgisi hizmetinde açık iletişim servisinin tarafları HBHS ile HHS’dir.
-	Yönetmeliğin 60. maddesinin birinci fıkrası uyarınca müşteri, ödeme emri başlatma hizmetini **ödeme hesabının çevrim içi olarak erişilebilir olduğu durumlarda**, kullanmayı tercih edebilir.
-	Yönetmeliğin 61. maddesinin birinci fıkrası uyarınca müşteri, hesap bilgisi hizmetini **ödeme hesabının çevrim içi olarak erişilebilir olduğu durumlarda**, kullanmayı tercih edebilir.
-	Tebliğin 25. maddesi uyarınca HHS ve YÖS (ÖBHS ve HBHS) arasında bağlantı uçtan uca güvenli bir şekilde sağlanır. Bu amaçla iletim katmanında TLS (asgari 1.2 sürümü) ile şifreli iletişim sağlanır.
-	Tebliğin 23. maddesinin dördüncü fıkrası uyarınca HHS tarafından sunulan ödeme hizmetleri veri paylaşım servislerini kullanan yetkilendirilmiş ödeme hizmeti sağlayıcılarının TCMB tarafından ilgili ödeme hizmeti için yetkilendirilmiş olduğu kontrol edilir. 
-	Tebliğin 25. maddesinin beşinci fıkrası uyarınca zaman damgası, 15/1/2004 tarihli 5070 sayılı Elektronik İmza Kanunu kapsamında tanımlanan zaman damgasına dayanır.
-	API alan isimleri Türkçe olarak tanımlanmıştır. Ancak API başlığı (header) alanındaki alan isimleri özelinde, API Geçitleri tarafından otomatik olarak tanınabilmesi gözetilerek, İngilizce isimlendirme tercih edilmiştir.  
-   ÖHK halihazırda ödeme hesaplarına, çevrim içi (mobil bankacılık, internet bankacılığı vb.) erişebilir durumda ise, HHS'nin varsa Açık Bankacılık kanal veya yetki tanımını varsayılan değeri AÇIK olacak şekilde sunması gerekmektedir. HHS’nin, Bireysel/Kurumsal/Ticari müşteri ayrımı yapmaksızın tüm müşterileri için, çevrim içi kanallarda hesap hareketlerine erişim ve ödeme yapabilme yetkisi bulunması durumunda, yine aynı şekilde Açık Bankacılık kanal veya yetki tanımını da varsayılan değeri AÇIK olacak şekilde sunması gerekmektedir. HHS Açık Bankacılık hizmetini kanal/yetki tanımı ile yönetmesi durumunda hizmeti verdiği ilgili kanallar(web,mobil) üzerinden müşterisine Açma/Kapama olanağı şeklinde sunması gerekmektedir.    
-   5411 Sayılı Kanun kapsamındaki bankalar, HHS API içerisinde Aktif durumda listelenmemişken, YÖS API içerisinde listelenemezler.

## 3.2.	İstem (Çağrı) ve Oturum  

-	Her istek tekil istek numarası ve ÖHK’lı işlemler için zaman damgası (PSU-Timestamp) içerir. Birden fazla istek içeren işlem YÖS tarafından belirlenen çağrıya özgü talep kimliği (istek numarası: X-Request-ID) ve rıza sürecine özgü talep kimliği (işlem grup numarası: X-Group-ID) değerleri kullanılmalıdır. Aynı rıza no’ya ait tüm isteklerde aynı X-Group-ID bilgisi değeri gönderilmelidir.   

-	Oturum takibi ise PSU-Session-ID ile yapılır. Oturum numarası (PSU-Session-ID) ÖHK’lı işlemler için zaman damgası (PSU-Timestamp) ile birlikte ilgili tüm işlem verilerini içerecek şekilde kayıt altına alınır.    

-	Örneğin, bir ödeme emri başlatma işlemi birden fazla istekten oluşur. Her istek yukarıda belirtildiği gibi biricik istek numarası ve ÖHK’lı işlemler için zaman damgası (PSU-Timestamp) içerir. Ancak işlemin oturum bütünlüğü PSU-Session-ID ile sağlanır.  

-	Taraflar açtıkları oturumu işlem bütünlüğünü sağlayacak süre içerisinde açık tutar ve işlem biter bitmez kapatır.  


## 3.3.	RESTful API  

API’ler, dünya ölçeğinde yaygın bir şekilde kullanılan Temsili Durum Transferi (Representational State Transfer, REST) mimari tarzı ve JavaScript Nesne Notasyonu (JavaScript Object Notation, JSON) veri formatlarına uygun olarak geliştirilir. En üst seviye Veri Tanımlama Dili (Data Description Language) ve en iyi uygulama örnekleri için [^JSON Şeması] temel alınır.

[^JSON Şeması]:  http://json-schema.org/  

İstek ve yanıt mesajlarında, isteğe bağlı veya koşullu bir alan, değer içermiyorsa, bu alan JSON payloadunda yer almamalıdır.

Örnek kod bloğu.
```
"rzBlg":{
         "rizaNo":"aa9bd7e7-0ccd-4edc-9639-5a358dbf2335",
         "olusZmn":"2022-11-28T12:00:21+03:00",
         "gnclZmn":null,    --> hatalı
         "rizaDrm":"K",
         "rizaIptDtyKod":"" --> hatalı 
      },
```

Örnek kod bloğu: 
```

         "alc":{
            "hspNo": "TR800800004162387689546019",
            "unv": "AHMET YILMAZ", 
            "kolas":{}  --> nesne gönderimi hatalı
         },
```

## 3.4.	Sürüm Yönetimi   

API sonraki aşamalarda doğabilecek gereksinimleri ve daha karmaşık kullanım durumlarını karşılamak için sürümler halinde geliştirilir ve bu durum tasarım sırasında göz önünde bulundurulur.   

API v1.0.2 sürümünde ;
-	Kapsamdaki ödeme hesapları : Vadesiz TL, yabancı para hesapları (gerçek ve tüzel kişilere ait ödeme hesapları), Kredili Mevduat Hesabı 
-	Tekil ödeme (Virman/Havale/FAST/Müşterilerarası TL Aktarım Sistemi)
    -	Virman ve havale işlemleri kapsamında yabancı para transferi yapılabilir.
-	Hesap bilgisi hizmetleri
    - Temel veya ayrıntılı hesap bilgisi
    -	Bakiye
    -	Gerçekleşen işlemler için Hesap hareketleri
-	Karekodlu ödemelerdeki 01, 02 ve 03 akış türleri
yer almaktadır.  

API v1.1.0 sürümünde ;
 -   API v1.0.2 sürümüne ek Olay Bildirim ve Ayrık GKD özellikleri eklenmiştir. Süreçlerin daha iyi işlemesi için çeşitli güncellemeler yapılmıştır.

API v2.0 sürümünde ileri tarihli ödeme ve düzenli ödeme talimatı bölümleri ve ilişkili olarak deney alanları eklenmiştir.

**Her sürüm değişikliğinde bir önceki sürüm belirli bir süre desteklenecektir. Diğer bir ifadeyle, sadece belirli bir süre için mevcut ve bir önceki sürüm aynı anda erişilebilir olacaktır.**


## 3.5.	Kaynak URI Yol Yapısı

YÖS’lerin başlattığı çağrılarda URI yolu aşağıdaki yapıyı takip eder:

**[hhs-yol-ön-eki]/ohvps/ [kaynak-grubu]/ [sürüm]/ [kaynak]/[kaynak-no]/[alt-kaynak]**

Bu, aşağıdaki unsurlardan oluşur:

- [hhs-yol-ön-eki]  
İsteğe bağlı, HHS'ye özgü yol ön ekini ifade eder.  
GEÇİT üzerinden yapılan çağrılarda BKM tarafından belirlenen sistem adı ve yol ön eki kullanılır.  
- ohvps  
Sabit metin “ohvps” (Ödeme Hizmetleri Veri Paylaşım Servisleri kısaltması)  
- [kaynak-grubu]   
Kaynak grubu, API’ye erişmek için kullanılan ödeme hizmetine (HBH, ÖBH) göre erişim adresi (end point) grubunu tanımlar (“hbh” veya “obh”).  
- [sürüm]  
API sürümünü ifade eder (“/s[ana-sürüm].[alt-sürüm]/”).  
- [kaynak]/[kaynak-no]  
Kaynak detaylarını ifade eder.  
- [alt-kaynak]  
Alt kaynak detaylarını ifade eder.  

HHS, tüm kaynakları için aynı katılımcı yolu ön ekini ve sistem adını kullanmalıdır.  

BKM API’lerine erişmek isteyen uygulamaların yetkilerine göre aşağıdaki API’lere abone olmaları gerekmektedir:  

OBH:  
[https://gecit.api-preprod.bkm.com.tr/ohvps/obh/s2.0/odeme-emri-rizasi]()  
[https://gecit.api-preprod.bkm.com.tr/ohvps/obh/s2.0/odeme-emri]()  
HBH:  
[https://gecit.api-preprod.bkm.com.tr/ohvps/hbh/s2.0/hesap-bilgisi-rizasi]()  
[https://gecit.api-preprod.bkm.com.tr/ohvps/hbh/s2.0/hesaplar]()  
[https://gecit.api-preprod.bkm.com.tr/ohvps/hbh/s2.0/hesaplar/1234/islemler]()  
[https://gecit.api-preprod.bkm.com.tr/ohvps/hbh/s2.0/hesaplar/1234/bakiye]()  
GKD  
[https://gecit.api-preprod.bkm.com.tr/ohvps/gkd/s2.0/erisim-belirteci]()  
HHS – YÖS API  
[https://gecit.api-preprod.bkm.com.tr/hhs-api/s2.0/hhs]()  
[https://gecit.api-preprod.bkm.com.tr/hhs-api/s2.0/hhs/1234]()  
[https://gecit.api-preprod.bkm.com.tr/yos-api/s2.0/yos]()  
[https://gecit.api-preprod.bkm.com.tr/yos-api/s2.0/yos/1234]()  

  
HHS’lerin sağlayacakları API’lerdeki URI çevrimi örnekleri aşağıdaki gibidir.  

- [https://xbank.com.tr/api-portal/ohvps/obh/s2.0/odeme-emri]() 
- [https://gecit.api-preprod.bkm.com.tr/ohvps/obh/s2.0/odeme-emri]() (BKM API) 
- [https://xbank.com.tr/api-portal/ohvps/hbh/s2.0/hesap-bilgisi-rizasi]() 
- [https://gecit.api-preprod.bkm.com.tr/ohvps/hbh/s2.0/hesap-bilgisi-rizasi]() (BKM API) 
- [https://xbank.com.tr/api-portal/ohvps/hbh/s2.0/hesaplar]() 
- [https://gecit.api-preprod.bkm.com.tr/ohvps/hbh/s2.0/hesaplar]()  (BKM API)  
- [https://xbank.com.tr/api-portal/ohvps/hbh/s2.0/hesaplar/1234]() 
- [https://gecit.api-preprod.bkm.com.tr/ohvps/hbh/s2.0/hesaplar/1234]() (BKM API)

GEÇİT üzerinden yapılan çağrılarda, istek başlığında bulunan “x-aspsp-code” (isteğin iletildiği Hesap Hizmeti Sağlayıcısının kodu) değerine göre HHS API’de standart olarak tanımlanmış olan “basePath” bilgisine servis uzantısı eklenerek HHS’ye yönlendirme yapılır.

  Örneğin, istek başlığında **xbank**’ın kodu varsa, YÖS tarafından yapılan   
    [https://gecit.api-preprod.bkm.com.tr/ohvps/hbh/s2.0/hesap-bilgisi-rizasi]()  
    çağrısı GEÇİT tarafından karşılanarak  
    [https://xbank.com.tr/api-portal/ohvps/hbh/s2.0/hesap-bilgisi-rizasi]()  
    adresine yönlendirilir.   


   Bu örnekte, [https://xbank.com.tr/api-portal]() basePath bilgisi HHS tarafından HHS API’ye girilen değerdir.

**ÖNEMLİ :** URI Query parametreleri GET ile iletilirken değerlerde url-encode yapılmalıdır. Örnek bir API isteği;  
GET /ohvps/hbh/s2.0/hesaplar/xxx/islemler?hesapIslemBslTrh=2023-02-07T16:42:38%2B03:00&hesapIslemBtsTrh=2023-02-07T17:09:18%2B03:00&srlmKrtr=islGrckZaman&srlmYon=Y&syfKytSayi=10&syfNo=1  

Burada '+' karakterinin boşluk olarak algılanmaması için %2B değeri ile iletilmiştir.



## 3.6.	Karakter Kodlama  

API istekleri ve yanıtlarının **Başlık** parametrelerinde ISO-8859-1 standartında yer alan karakter kümesi kullanılmalıdır. [3.15. İstek Başlığı](#_3-15-istek-baslıgı) bölümünde detaylandırılmıştır.

API istekleri ve yanıtlarında **Gövde** parametrelerinde UTF-8 karakter kodlaması kullanılır. Bu, JSON için varsayılan karakter kodlamasıdır.  

Ancak, bir HHS'nin kendi uygulamaları ve ödeme başlattığı ödeme sistemi (Havale vb.) bazı UTF-8 karakterlerini kabul etmeyebilir. HHS, UTF-8 kodlaması içeren bir mesajı işleyemez ve reddederse, HTTP 400 (Hatalı İstek) durum kodu ile yanıt vermelidir.

Gövde parametrelerinde desteklenen UTF-8 karakter kümesi aşağıda listelenmiştir. 


|Karakter |UTF 8 <br> Hex.|Karakter |UTF 8 <br> Hex. |Karakter |UTF 8 <br> Hex. |Karakter |UTF 8 <br> Hex.|
| --- | --- | --- | --- | --- | --- |--- | --- |
|   | 20 | =    | 3d | X | 58 | r | 72 |
| ! | 21 | ?   | 3f | Y | 59 | s | 73 |
|#|23|@|40|Z|5a|t|74|
|%|25|A|41|[|5b|u|75|
|&|26|B|42|\\|5c|v|76|
|'|27|C|43|]|5d|w|77|
|(|28|D|44|^|5e|x|78|
|)|29|E|45|_|5f|y|79|
|*|2a|F|46|a|61|z|7a|
|+|2b|G|47|b|62|{|7b|
|,|2c|H|48|c|63|}|7d|
|-|2d|I|49|d|64|Ç|c3|87|
|.|2e|J|4a|e|65|Ö|c3|96|
|/|2f|K|4b|f|66|Ü|c3|9c|
|0|30|L|4c|g|67|ç|c3|a7|
|1|31|M|4d|h|68|ö|c3|b6|
|2|32|N|4e|i|69|ü|c3|bc|
|3|33|O|4f|j|6a|Ğ|c4|9e|
|4|34|P|50|k|6b|ğ|c4|9f|
|5|35|Q|51|l|6c|İ|c4|b0|
|6|36|R|52|m|6d|ı|c4|b1|
|7|37|S|53|n|6e|Ş|c5|9e|
|8|38|T|54|o|6f|ş|c5|9f|
|9|39|U|55|p|70|||
|:|3a|V|56|q|71|||
|;|3b|W|57|||||

Ancak **Erişim belirteci, Yenileme belirteci ve Authorization** parametreleri daha dar bir karakter kümesi ile doldurulmalıdır.  

Bearer HTTP Authorization Şeması RFC 6750'de tanımlanmıştır. <https://www.rfc-editor.org/rfc/rfc6750#section-2.1> bölümünde izin verilen karakterlerin gönderilmesi beklenmektedir. Buradaki standartın her 3 parametre için de uygulanmasına karar verilmiştir. 

RFC 6750 içerisinde bearer token formatı şu şekildedir : 1*( ALPHA / DIGIT / "-" / "." / "&#95;" / "~" / "+" / "/" ) *"="  
Augmented BNF for Syntax Specifications (ABNF) ile ifade edilen bu formatta token en az 1 adet alfanumerik karakter veya özel karakter ("-", "." , "&#95;" , "~" , "+" , "/")  içermeli ve 0 ya da daha çok sayıda "=" karakteri ile bitmelidir.   

ALPHA = A-Z / a-z aralığındaki harflerdir.  
DIGIT = 0-9 aralığındaki rakamlardır.


## 3.7.	Veri Formatı

- Açık bankacılık kapsamındaki zaman damgası, ISO 8601 standartına uygun olarak yerel saat bilgisini ve timezone bilgisini de içerecek şekilde " yyyy-MM-dd’T’HH:mm:ssXXX " formattaki haliyle hazırlanmalıdır.   

Örnek:  "timestamp": "2021-05-30T20:34:15+03:00"  
yyyy : 4 hane yıl  
MM : Başa ‘0’ eklenmiş, toplam 2 hane ay  
dd    : Başa ‘0’ eklenmiş, toplam 2 hane gün  
HH    : Başa ‘0’ eklenmiş, toplam 2 hane saat (0-23 arası değer alabilir.)  
mm : Başa ‘0’ eklenmiş, toplam 2 hane dakika  
ss    : Başa ‘0’ eklenmiş, toplam 2 hane saniye  
XXX : ISO 8601 Time zone  

- Zaman damgası hesaplamalarında, yeni günün başlangıç saatinin 00:00:00 olduğu kabul edilmiştir.

- JWT veri paketlerinde kullanılan zaman damgaları, 1 Ocak 1970 Saat 00:00:00 (UTC) anından itibaren geçen saniye sayısı değerini (Unix Time) kullanmalıdır.
- Bir HHS, tarihi yanlış biçimlendirilmiş bir istek aldığında, 400 (Hatalı İstek) durum kodu ve ilgili hata kodu ile yanıt vermelidir.

- ISO 4217 Standartında para birimleri ve kaç basamak ondalık değer içerebilecekleri belirlenmiştir.  
[https://www.iso.org/iso-4217-currency-codes.html](https://www.iso.org/iso-4217-currency-codes.html)  adresinden ücretsiz olarak listeye erişilebilir. <br>
API Standartlarında da para birimleri  ISO 4217’de tanımlanmış olan 3 harfli kodlarla iletilir. <br> Tüm tutar alanları ISO 4217'de tanımlanmış para birimlerinin ondalık basamak değerleri de göz önünde bulundurularak iletilmelidir. Tutar alanları artı ya da eksi değer alabileceği için API deseninde tanımlanmış regular expressionlar dikkate alınmalıdır.   
Örneğin; Bakiye API'sindeki "Kredili Mevduat Hesabı Bakiyesi" alanı "-100.25" ve "Para Birimi" alanı "TRY" olarak iletildiğinde 25 değerinin kuruş olduğu anlaşılmalıdır.<br>
Ödeme Emri Rızası API'sinde yer alan "İşlem Tutarı" alanı "104.75" TRY olarak iletildiğinde "75" değerinin kuruş olduğu anlaşılmalıdır.   
"12000" Japon Yeni için, ISO 4217’de JPY para biriminin ondalık kısmı olmadığından "İşlem Tutarı" alanında "12000" ve "Para Birimi" alanında "JPY" değeri  iletilmelidir.

- Altın para birimi özelinde ISO 4217’ye uygun olarak "XAU" cinsinde ve 2 basamak ondalık rakam içerecek şekilde iletilmelidir. Örneğin içerisinde "13,50 gr" altın olan hesap için bakiye "13.50", para birimi "XAU" olarak gönderilmelidir.  

- Diğer madenlerde ondalık basamak ISO 4217 standartında tanımlandığı gibi olmalıdır.

- Sıralı veri tipleri büyük küçük harfe duyarlı olmalıdır.


## 3.8.	İstemci Sertifika Yönetimi

ÖHVPS kapsamında YÖS ve HHS’lerin güvenli bir şekilde tanımlanması amacıyla elektronik sertifikalar kullanılır.     

ÖHVPS kapsamında tarafların güvenli bir şekilde tanımlaması, uçtan uca güvenli iletişim, mesaj şifreleme ve mesaj imzalama işlevleri 15/1/2004 tarihli ve 5070 sayılı Elektronik İmza Kanunu’nda açıklanan elektronik sertifikalar kullanılarak sağlanır. Elektronik sertifikada Türkiye Cumhuriyet Merkez Bankası tarafından verilen kuruluş kodu ve kuruluşun türüne dair bilgiler bulunur.  

GEÇİT üzerinden yapılan erişimlerde YÖS ve HHS’lere önceden dağıtılmış olan istemci sertifikaları kullanılarak tarafların (sunucu) kimliklerinin doğrulanması sağlanacaktır. İstemci sertifikaları hem test hem de üretim ortamında kullanılacaktır. Sertifikaların işlevselliği ve geçerliliği sertifikasyon sürecinde de sınanacaktır. Söz konusu sertifikaların dağıtım prosedürleri ve kullanımlara yönelik açıklamalar EK-3’te yer verilmiştir.  


## 3.9.	Yetkilendirme Türleri

GEÇİT üzerinden yapılan çağrılarda iki temel yetkilendirme türü kullanılır:

**1.	İstemci Kimlik Bilgileri:** Müşteri onayının gerekmediği, sadece YÖS’ün tanımlanıp doğrulandığı API çağrılarında kullanılır. YÖS’ün yetkilendirilmiş olduğu ve faaliyet izninin yaptığı hizmet çağrısına uygun olduğu kontrol edilir.  Bu amaçla, YÖS’lere clientId ve clientSecret tahsis edilecektir. YÖS’ler ilgili clientId ve clientSecret ile sadece yetkilendirilmiş oldukları servislere erişebileceklerdir. YÖS’ler kendilerine BKM tarafından sunulacak API’yi, kendi clientID ve clientSecret değerleri ile sorgulayarak “İstemci Kimlik Bilgileri” belirtecini (access token) elde edeceklerdir.
HHS’ler de GEÇİT üzerindeki YÖS API’sini sorgulama maksadı ile GEÇİT'e geldiklerinde, kendilerine atanmış olan clientID ve clientSecret bilgileri ile yetki kontrolleri yapılır.
HHS ve YÖS’ler ; ilettikleri client id ve secret değerleri kullanılarak oluşturulacak bearer authentication metodu ile servislerini sunacaklardır.  

**2.	Yetkilendirme Kodu:** YÖS’ün doğrulanmasının yanısıra müşterinin GKD ile doğrulanması gereken API çağrılarında kullanılır. Müşteri doğrulanarak yetkilendirme kodu oluşturulması HHS’nin yetkilendirme arayüzüne yönlendirilir. GKD’nin başarıyla tamamlanması sonrasında yetkilendirme kodu YÖS’e dönülür. YÖS daha sonra HHS’nin **erişim belirteci** (access token) erişim adresini (EK-3: POST /erisim-belirteci) çağırmak suretiyle yetkilendirme kodunu bir erişim belirteci (access token) ile değiştirerek ilgili kaynakları kullanabilir.

Ödeme emri başlatma ve hesap bilgisi hizmetlerinde hangi yetkilendirme türlerinin kullanılacağı bilgisi, ilgili başlıklardaki erişim adresleri (endpoints) tablolarında yer almaktadır.  

**erisim-belirteci** erisim noktasından elde edilen **erisimBelirteci** ilişkilendirildiği nesne veya işlem için gönderilen POST isteği başlığında **x-access-token** alanında iletilir.
Belirli bir süre için tanımlanan erişim belirteci (access token) değerinin yenileme belirteci (refresh token) ile yenilenmesi gerekir.   

Erişim adreslerinde kullanılan yetkilendirme türü ilgili erişim adresi tablolarında belirtilmiştir.

## 3.10. İstek/Cevap Mesajlarında Kullanılan Nesne Yapıları

İstek ve Cevap mesajlarında kullanılacak olan nesneler tüm elemanlarını kapsayacak şekilde Ek-1 de listelenmiştir. Tüm listelenen elemanlar açısından (Uç nokta mesaj yapılarının belirtildiği tablolarda belirtildiği üzere) alanın Zorunlu (z) veya İsteğe Bağlı (İ) olma durumlarına göre bazı alanlar gönderilebilir veya gönderilmeyebilir. 

## 3.11. Sayfalandırma ve Filtreleme

**Sayfalandırma**  

Çağrıya dönülen kaynak nesnesi içerisindeki kayıtlar bir sayfalandırma yapısı ile çağrılacak şekilde istek oluşturulur.

Oluşturulacak isteğin içerisinde parametreler ile filtreleme, sayfa başına gösterilecek kayıt sayısı ve hangi sayfanın önyüzde gösterileceği bilgileri erişim noktasına iletilir ve ilgili kayıtlar cevap olarak alınır.

**Filtreleme**

HHS, birden çok kayıt dönülmesi gereken GET çağrılarında sınırlı filtreleme desteği sağlamalıdır. Filtre parametreleri her zaman kaynak nesnesinin belirli alanlarına özgüdür ve nesne için tanımlanan kurallara uymalıdır. 


## 3.12. Mesaj İmzalama

Elektronik imzalar, ÖHVPS API’de gerçekleştirilen işlemlerin ve taşınan verilerin bütünlük ve inkâr edilemezliğini destekler. İmzaların kaynak bazında hangi istek ve yanıtlara uygulandığı belirlidir. 

API yalnızca TLS'ye dayanırsa, dijital kayıtları ve inkâr edilemezlik kanıtlarını tutmak zor olur. Bu nedenle, TLS'ye dayanmayan bir inkâr edilemezlik çözümü olarak API isteğinin HTTP başlığında bir JWS kullanılarak sağlanabilir.

HTTP isteğinin gövdesinin hash fonksiyonu (SHA256) ile özeti alınacaktır. Elde edilen özet, asimetrik anahtarları destekleyen bir algoritma kullanılarak imzalanacak ve JWS elde edilecektir.

Bir istek, YÖS'nin özel anahtarı ile imzalanacak ve bu isteğe karşılık gelen yanıt, HHS'nin özel anahtarı tarafından imzalanacaktır.

Tüm API istekleri ve yanıtları imzalanmaz. Mesaj imzalamanın zorunlu olup olmadığı, desteklenip desteklenmediği her API özelinde belirlenir.

**Anahtar Deposu**

HHS'ler ve YÖS'ler tarafından güvenilen bir Güven Otoritesi (Trust Anchor), taraflar için bir genel anahtar deposu sağlamaktan sorumludur.

Güven Otoritesi, taraflardan herhangi birisinin oluşturduğu bir anahtar çiftinin açık bölümünü saklayan merkezi bir dizin (BKM tarafından tutulan merkezi kayıt sistemi vb.) olacaktır.

Mesajları doğrulamak için tarafların genel anahtarlarının paylaşılması için BKM bir servis sağlayacaktır. HHS API olarak adlandırılımış olan bu servis ile HHS ve YÖS listelerine ulaşılabildiği gibi doğrulama işlemi için ihtiyaç duyulacak olan genel anahtarlara da bu servis üzerinden erişilebilinecektir. 

İlgili Mesaj şifreleme için genel akış, Ek-5 bölümünde detaylarıyla paylaşılmaktadır.

## 3.13. Durum Kodu

API’ler, iki farklı amaca hizmet eden iki durum kodu kullanır:

- HTTP Durum Kodu, API çağrısının (kaynaktaki HTTP işlemi) sonucunu yansıtır.
- Bazı kaynak payload’larındaki Durum alanı, kaynakların durumunu yansıtır.


## 3.14. Gereksinimlerinin Sınıflandırılması

Erişim adreslerinin ve alanların kullanımı Zorunlu(Z), İsteğe Bağlı(İ) veya Koşullu(K) olabilir. Kullanımlara ilişkin durumlar ve kullanımın (K) koşullu olduğu duruma ilişkin açıklamalar ilgili tablolarda belirtilmiştir.

ÖHVPS API'lerinin (HBH,ÖBH,GKD) istek ve yanıtta kullanılacak başlık isimleri, ilgili RFC dokümanlarında ve aşağıdaki tabloda yer aldığı şekilde kullanılacaktır.  Uygulamaya özelleşmiş başlıklar "X-" ile başlayacaktır. Başlık isimlerinde yer alacak kısaltmalar (örn. PSU, ASPSP gibi) tamamı büyük harfle yazılacak şekilde tanımlanacaktır. Başlık isimleri büyük – küçük harfe duyarlı olmamalıdır. Örneğin x-request-id ya da X-Request-ID olarak gönderilmiş olan bir istek başlığı değişkeni, sunucu tarafında hata vermeyecek şekilde işlenebilmelidir.


## 3.15. İstek Başlığı

- "Başlık isimleri" yorumlanırken küçük büyük harfe duyarlı olmamalıdır. Örneğin "x-ReQuEsT-Id" geçerli bir başlık ismidir.
- "Başlık değerleri" yorumlanırken ise küçük büyük harf duyarlılığı olmalıdır. Örneğin "xyz123" ile "XYZ123" değerleri farklıdır.
-  Başlık değerlerinde ISO-8859-1 standartında yer alan karakter kümesi kullanılmalıdır. Örneğin "PSU-Device-Data" değerinde "İOS12" yazmak, büyük "İ" harfinin ISO-8859-1 içerisinde yer almamasından dolayı, hataya yol açacaktır. 
- İstek ve Yanıt başlığında yer alan alanların; POST GET DELETE methodlarında, OBH,HBH,GKD,OAS,ODS API'leri bazında Zorunlu/Koşullu/İsteğe Bağlı kullanım durumları aşağıdaki tabloda listelenmiştir.
 
**Tablo 2: İstek Başlığında Yer Alan Veriler**  
|Başlık İsimleri |Format |Notlar |POST |GET |DELETE |POST |GET |DELETE |
| --- | --- | --- | --- | --- | --- |--- | --- | --- |
|  |  |  | OBH<br>HBH<br>GKD |OBH<br>HBH<br>GKD |OBH<br>HBH<br>GKD |OAS<br>ODS | OAS<br>ODS | OAS<br>ODS |
| X-Request-ID  | AN1..36 | İsteği başlatan YÖS tarafından belirlenen çağrıya özgü talep kimliği. İstek numarası. <br> Örnek: Ödeme emri başlatma iş akışının her adımda farklı “x-request-id” değeri kullanılır. <br> Çağrıların aynı yanıtı dönmesinin beklendiği durumlarda (idempotent işlemlerde) aynı değer ile çağrı yapılır.   | Z |Z |Z  |Z| Z | Z |
| X-Group-ID |AN1..36 |	İsteği başlatan YÖS tarafından belirlenen işlem akışına özgü talep kimliği. İşlem grup numarası.<br> Aynı rıza no’ya ait tüm isteklerde aynı x-group-id bilgisi değeri gönderilmelidir.<br>Örnek: Ödeme emri başlatma/hesap bilgisi iş akışının her adımında aynı “x-group-id” değeri kullanılır.|	Z|	Z|	Z|-| - | - |
|Content-Type | AN1..20| Standart HTTP Başlığı; Talepte sağlanan payload’ın biçimini temsil eder. Bu değerin application/json olarak gönderilmesi gerekmektedir. Hata durumlarında application/problem+json da iletilebilir.<br> (Başka bir değere ayarlanırsa, HHS, 415 Desteklenmeyen Ortam Türü (Unsupported Media Type) ile yanıt vermelidir)|Z|-|-|Z|-|-|
| X-ASPSP-Code |AN4| Hesap Hizmeti Sağlayıcısının (HHS) kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)|Z |Z|Z|Z| Z|Z | 
|X-TPP-Code|AN4| Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur	|Z|Z|Z|Z| Z| Z |
|PSU-Auth-Date|ISODateTime|ÖHK’nın YÖS üzerinde en son oturum açtığı saat. [RFC7231] Örneğin:  auth-date: Tue, 11 Sep 2012 19:43:31 GMT	|İ|İ|İ|-|-|-|
|PSU-IP-Address|AN7..15|ÖHK YÖS üzerinde oturum açmışsa, işlemi başlattığı cihazın IP adresi.|İ|İ|İ|-|-|-|
|PSU-IP-Port|AN1..5|ÖHK YÖS üzerinde oturum açmışsa, işlemi başlattığı cihazın Port adresi.	|İ|İ|İ|-|-|-|
|PSU-GEO-Location|AN1..36|ÖHK’nın işlemi başlattığı cihazın konum bilgisi. RFC2426 standartına uygun olarak paylaşılmalıdır. Örneğin  GEO:"&lt;enlem &gt;, &lt;boylam&gt;GEO:52.506931,13.144558|İ|İ|İ|-|-|-|
|PSU-User-Agent|AN 1.. 255|ÖHK’nın işlemi başlattığı cihazın sağladığı user-agent bilgisi. (Tarayıcı, versiyon, işletim sistemi bilgileri)|İ|İ|İ|-|-|-|
|PSU-Timestamp|ISODateTime|	ÖHK’nın işlemi başlattığı cihazın tarih saat içeren zaman bilgisi.|İ|İ|İ|-|-|-|
|PSU-Device-ID|AN5..40|ÖHK işlemi mobil uygulama aracılığıyla başlattıysa, kullanılan mobil uygulama ilk yüklendiğinde oluşturulan tekil cihaz veya uygulama belirteci. ÖHK cihazının UUID değeri kullanılabilir.|İ|İ|İ|-|-|-|
|PSU-Device-Data|AN1..1024|ÖHK’nın işlemi başlattığı mobil cihaza ait veriler. <br>Örnek alanlar: <br> - Platform - (Android, iOS, Windows 10 Mobile)<br> - Device Model <br> - OS Name <br> - OS Version<br>- Locale<br>- Time zone|İ|İ|İ|-|-|-|
|PSU-Fraud-Check | AN1..4096 | YÖS'lerin çeşitli güvenlik kontrollerini gerçekleştirerek, önemli görülen aşağıdaki bilgileri HHS'ler ile paylaşmaları gerekmektedir.<br>Bu bilgiler ışığında müşterinin profili oluşturulmasına katkı sağlanacaktır. <br> ÖHK’lı işlemlerde (PSU-Initiated = E gönderildiği durumlarda) gönderilmesi zorunludur.  Sistemsel yapılan API çağrımlarımda, Olay Bildirim Servis Çağrımlarında ve HHS-YÖS API çağrımlarında gönderilmesine gerek bulunmamaktadır.<br> Paylaşılacak bilgiler şu şekildedir.<br> <b>FirstLoginFlag</b> : ÖHK'nın, müşterilik ömründe ilgili YÖS sistemine (mobil ya da web uygulaması) ilk login olma süresini ifade eden değer. ÖHK'nın ilk yaptığı HBH ya da ÖBH işlemi değil, YÖS sisteminde kendini aktifleştirme tarih aralığı bilgisidir. <br> YÖS, kullanıcının ilk login bilgisini tutarak sonraki işlemlerinde bu bilgiyi belirlenen format ile HHS'ye aktaracaktır. Örneğin; YÖS'ün 7 aydır müşterisi olan bir kullanıcı için bu alan "5" olarak YÖS tarafından beslenecektir. Burada amaç; ilgili kullanıcının YÖS'ün eski bir müşterisi mi, yoksa yeni bir müşterisi mi olup olmadığını anlamaktır. <br> Gönderilmesi Zorunlu alandır.<br>TR.OHVPS.DataCode.ZmnAralik sıralı veri tipinin alabileceği değerleri alabilir.<br> <b>DeviceFirstLoginFlag</b> : ÖHK'nın, müşterilik ömründe işlem anında kullandığı cihazla YÖS uygulamasına (web ya da uygulama tabanlı) ilk login olma süresini ifade eden değer. ÖHK cihaz değişikliği yaparsa FirstLoginFlag değeri sabit kalmalı  ancak DeviceFirstLoginFlag değeri değişmelidir. <br>FirstloginFlag değeri ile ÖHK’nın YÖS uygulamasına ilk login tarih bilgisi ile ilgili bilgi verilirken, DeviceFirstLoginFlag ile de ÖHK’nın YÖS uygulamasına farklı bir cihaz aracılığı ile ilk login tarihinin bilgisi verilmektedir.<br> Örneğin; ÖHK 7 aydır YÖS'ün müşterisi olabilir, böyle bir durumda FirstLoginFlag değeri "5" olacaktır. Ancak son işlemini daha önce hiç kullanmadığı bir cihazdan yapmıştır. Yeni cihazdaki login süre aralığı 0-2 saat aralığında  olduğu için DeviceFirstLoginFlag değeri "1" olacaktır.FirstLoginFlag değeri yine "5" olarak kalmaya devam edecektir.Bu bilgi ile YÖS, ilgili HHS'ye ilk kez geliyor olsa bile; HHS, müşterinin YÖS'ü uzun süredir kullandığını ama yeni bir cihazla işlemlerine devam ettiğini anlayabilecektir.<br>Bir ÖHK, farklı cihazlar veya platformlar üzerinden YÖS ile etkileşime girebilir.  Kullanıcı ve YÖS arasında bir oturum başlatılmış ise YÖS’ün tutarlı ve kalıcı bir kimlik (device id) ataması beklenmektedir. <br>Device ID: Web sitesi veya mobil uygulama kullanıcıları için üretilen, tarayıcı ya da mobil uygulama tabanlı benzersiz (tekil) tanımlayıcı değer. Mobil uygulamalar için ÖHK’nın ilk defa ilgili cihaza aktivasyon yaptığı tarih bilgisi alınmalıdır. <br> Device ID bilgileri YÖS uygulama ortamı (web ya da uygulama tabanlı) ve ÖHK cihazı bazında tutulmalıdır. YÖS’ten başlatılan işlem hangi uygulama ortamına ait ise ilgili ortamala ilişkili tutulan Device ID’nin ilk login tarihine bakılarak güncel flag değeri hesaplanmalıdır. <br>Gönderilmesi Zorunlu alandır. TR.OHVPS.DataCode.ZmnAralik sıralı veri tipinin alabileceği değerleri alabilir.<br> <b>LastPasswordChangeFlag</b> : ÖHK'nın, YÖS (cihaz bağımsız)  uygulamasına login olduğu şifre bilgisinin en son değiştirildiği süreyi ifade eden değer. Müşterinin en son ne zaman şifre değişikliği yaptığını anlamak için kullanılan alandır. Yeni müşteri ve hiç şifre değişikliği yapmamış olabilir, böyle bir durumda ilgili alan "0" olarak beslenecektir. <br> Gönderilmesi Zorunlu alandır. TR.OHVPS.DataCode.ZmnAralik sıralı veri tipinin alabileceği değerleri alabilir.<br> <b>BlacklistFlag</b> : ÖHK'nın herhangi bir sebeple YÖS'ün sakıncalı müşteriler listesinde bulunup bulunmadığını ifade eden değer. <br> Burada amaç herhangi bir sebeple YÖS tarafında yasaklı olarak kayıtlı olan ÖHK bilgisinin, dolandırıcılığı önceden tespit etmek amaçlı HHS'ye aktarılması olarak açıklanabilir. Örneğin, YÖS tarafından tespit edilen dolandırıcı kullancılara ait device id bilgisi, bu kara listede tutulur daha sonra aynı cihazla başka bir ÖHK işlem yapacak olsa bile bu alanda ilgili bilgi "1" değeri ile HHS'ye aktarılır. HHS'de olmayıp YÖS tarafında olan bu örnekteki sakıncalı müşteri/cihaz bilgisinin, dolaylı yoldan HHS'ye aktarılması amaçlanmaktadır.<br> Gönderilmesi Opsiyonel alandır. TR.OHVPS.DataCode.VarYok sıralı veri tipinin alabileceği değerleri alabilir.<br> <b>MalwareFlag</b> : YÖS uygulamasının çalıştığı cihaz üzerindeki son 21 güne ait zararlı yazılım tespit bilgisini ifade eden değer.<br>Örneğin ÖHK'nın cihazında zararlı yazılım olduğu ayın 1'inde YÖS tarafından tespit edildi. Zararlı yazılım tespitinden 2 saat sonra YÖS üzerinden login olan ÖHK'nın durumu,  "1" olarak iletilecektir. Bir gün sonra ayın 2'sinde, yeni bir zararlı yazılım tespiti yok ancak mevcut zararlı yazılım aktifse alan "2" değeri ile iletilecektir. Süreler artarak 21 güne kadar TR.OHVPS.DataCode.ZmnAralik değerlerine göre iletilecektir.Son 21 gün içinde yeni bir tespit yoksa ayın 22'sinden itibaren ilgili alan  "0" değeri ile beslenecektir.<br>Not: Zararlı yazılım, bankacılık işlemlerinin yapıldığı uygulamalara girişte kullanılan bilgilerin (şifre, kullanıcı kodu gibi) ele geçirilmesi amacıyla kullanılan bir uygulama ya da kod parçacığı olabilir. Bu amaçlar dışında kullanılan (bankacılığa yönelik bir zararlı yazılım olmayan) yazılım tespitleri iletilmemelidir. YÖS kanallarına her bir loginde, kullanılan cihazda bir zararlı yazılım var mı yok mu kontrolü yapılmalıdır. <br> Gönderilmesi Opsiyonel alandır. TR.OHVPS.DataCode.ZmnAralik sıralı veri tipinin alabileceği değerleri alabilir.<br> <b>AnomalyFlag</b> : Diğer şüpheli durumların varlığını ifade eden değer. Gönderilmesi Opsiyonel alandır. TR.OHVPS.DataCode.VarYok sıralı veri tipinin alabileceği değerleri alabilir.<br> <b>UnsafeAccountFlag</b>: HHS tarafından aktarılan bilgi ile son 21 gün içinde ÖHK'nın dolandırıcılık mağduru olması durumunu ifade eden değer.<br>Örneğin; HHS 1, ayın 1'inde süphe veya sahtekarlık nedeniyle bir ödeme işlemine izin vermediği durumda, bu bilgiyi rıza iptal detay kodu ile YÖS'e aktarmış olur. Bu bilgiyi tutan YÖS, ilgili müşterinin 15 dakika sonra HHS 2'de yaptığı işlem için ilgili alanı "1" değeri ile besler. Böylece HHS 2, ÖHK'nın farklı bir HHS'de son 15 dakika içinde şüpheli veya sahte bir işlemi olduğunu anlayabilecektir. Ayın 22'sinde yeni bir tespit/kayıt yoksa bu alan YÖS tarafından "0" olarak beslenecektir.<br>Gönderilmesi Opsiyonel alandır.TR.OHVPS.DataCode.ZmnAralik sıralı veri tipinin alabileceği değerleri alabilir. <br><br> <br> Flaglar JWT claims içine key value şeklinde eklenerek gönderilecektir. EK-5: Mesaj İmzalama Akışı'nda belirtilen yöntemle imzalanarak oluşturulan JWT PSU-Fraud-Check alanına konularak YÖS'ler tarafından HHS'ye iletilmelidir.| K | K | Z |-|-|-|
|PSU-Initiated|AN1|İşlemin ÖHK tarafından başlatılması durumunda E , sistem tarafından başlatıldığı durumda H değerini alması beklenir. <br>Olay bildirim servislerinin çağrımında O gönderilmelidir. <br> İşlemler servisinde yapılacak sistemsel sorgulardaki işlem limitlerini kontrol amacıyla kullanılır. |Z|Z|Z|-|-|-|
|PSU-Session-ID|AN1..100|İsteği başlatan YÖS tarafından belirlenen oturuma özgü talep kimliği. ÖHK'nın YÖS uygulaması üzerinden kimlik doğrulama mekanizması ile bilgi sistemlerine dâhil olmalarından işlemlerini tamamlayıp sistemden ayrılmalarına kadar geçecek tüm süreci kapsayacak şekilde aynı değeri almalıdır. Tek seferlik ödeme gibi ÖHK’nın tanınmadan başlatıldığı işlemlerde bu değer boş olarak iletilmelidir. |İ|İ|İ|-|-|-|
|Authorization|AN1..4096|Katılımcı ile GEÇİT arasındaki otorizasyon için kullanılan token bilgisidir. <br>Yekilendirme türlerinden İstemci Kimlik Bilgileri’ni adresler. <br> [Bölüm 3.6 Karakter Kodlama](#_3-6-karakter-kodlama) bölümünde açıklanan karakter formatında gönderilmesi beklenmektedir.|Z  |Z |Z  |Z| Z | Z|
| X-Access-Token |AN1..4096|ÖHK’nın GKD sürecinde doğrulanması sonrasında kullanılan erişim simgesi. Yetkilendirme türlerinden Yetkilendirme Kodu (GKD)’nu adresler. <br>[Bölüm 3.6 Karakter Kodlama](#_3-6-karakter-kodlama) bölümünde açıklanan karakter formatında gönderilmesi beklenmektedir.|İ|İ|İ|-|-|-|
|X-JWS-Signature|AN1..4096|Payload gövdesinin ayrılmış bir JWS imzasını içeren üstbilgi.<br> Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için belirtilmiştir.<br> Mesaj imzalama kullanılan API ve methoda göre gönderimi zorunludur.|K |K  |K |K|-|-|-|

## 3.16. Yanıt Başlığı  

- "Başlık isimleri" yorumlanırken küçük büyük harfe duyarlı olmamalıdır. Örneğin "x-ReQuEsT-Id" geçerli bir başlık ismidir.
- "Başlık değerleri" yorumlanırken ise küçük büyük harf duyarlılığı olmalıdır. Örneğin "xyz123" ile "XYZ123" değerleri farklıdır.
-  Başlık değerlerinde ISO-8859-1 standartında yer alan karakter kümesi kullanılmalıdır. Örneğin "Link" değerinde "İOS12" yazmak, büyük "İ" harfinin ISO-8859-1 içerisinde yer almamasından dolayı, hataya yol açacaktır. 

**Tablo 3: Yanıt Başlığında Yer Alan Veriler**

|Başlık İsimleri |Format |Notlar |Kullanım Durumu <br>OBH<br>HBH<br>GKD|Kullanım Durumu<br> OAS<br>ODS|
| --- | --- | --- | --- |--- |
| X-Request-ID  | AN1..36 |  YÖS tarafından belirlenen çağrıya özgü talep kimliği. İstek numarası <br> **İlgili istek başlığındaki bilgi geri dönülür.** | Z |Z|
| X-Group-ID |AN1..36 |İsteği başlatan YÖS tarafından belirlenen işlem akışına özgü talep kimliği. İşlem grup numarası.<br>**İlgili istek başlığındaki bu değer geri dönülür.**|	Z|-|	
|X-ASPSP-Code  | AN4| Hesap Hizmeti Sağlayıcısının (HHS) kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)|Z|Z|
|X-TPP-Code |AN4| Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur|Z|Z|
|Content-Type |AN1..20|Standart HTTP Başlığı; Talepte sağlanan payload’ın biçimini temsil eder: **application/json**|Z|Z|
|X-JWS-Signature |AN1..4096|JWS imzasını içeren üstbilgi. Bu başlığın hangi yanıtlar için kullanılması gerektiği ilgili endpoint için belirtilmiştir. <br>Hata durumlarında, yanıt gövdesi değeri dönülüyor ise imzalanmalı ve imza bilgisi x-jws-signature alanında iletilmelidir.<br> Ancak uygulama katmanı tarafından yakalanamayan dolayısı ile imzalanamayan hata durumlarında x-jws-signature alanı HHS'ler tarafından boş gönderilebilir.<br> Hatalı yanıt alındığı durumlarda ise X-JWS-Signature başlık değeri dolu ise doğrulama yapılmalıdır. (4**, 5**) |K|K|
| X-RateLimit-Limit | N 1..18 | İstek kısıtı uygulanan servislerde en fazla kaç adet istek yapılabileceğini gösterir. Kısıt uygulanan servislerde bu başlığın dönmesi zorunludur. | K |-|
| X-RateLimit-Remaining  | N 1..18 | İstek kısıtı uygulanan servislerde kaç adet istek hakkı kaldığını gösterir. Kısıt uygulanan servislerde bu başlığın dönmesi zorunludur. | K |-|
|X-RateLimit-Reset |AN 1..255|İstek kısıtı uygulanan servislerde çağrım hakkı bittikten sonra yeniden denemeden önce beklemesi gereken süreyi (saniye cinsinden) gösterir. HTTP 429 durum kodu (Too Many Requests) ile dönülen yanıtların başlığında dönülmesi zorunludur.<br> YÖS olarak yaptığınız sistemsel sorgularda; HTTP 429 durum kodu (Too Many Requests) ile dönülen yanıt aldığınızda tekrar sorgu yapmadan önce “X-RateLimit-Reset” yanıt başlığını kontrol ederek, bu başlıktaki süre kadar bekledikten sonra yeniden sorgulama yapılması gerekmektedir. |K|-|
|x-total-count |N 1..18|Hesaplar, İşlemler, Bakiye, İletilemeyen Olaylar servislerinde sayfalama kullanıldığı durumda, sorgu sonucu dönecek toplam kayıt sayısı bilgisi, bu alanda HHS isteğine bağlı olarak gönderilebilir. <br> Kayıt sayısı 0 olduğu durumda gönderimi zorunludur. |K|K|
|Link|1..4096|“Link” alanının [Hesap Bilgisi Hizmeti için Erişim Adresleri](hesap-bilgisi-hizmeti.html#hesap-bilgisi-hizmeti-icin-erisim-adresleri) <br> tablosundaki parametre  = Sayfalama olan API’lerde ve İletilemeyen Olaylar API'sinde gönderim yapılması zorunludur.<br> Sayfalama yapısı kullanıldığında gelen yanıtta birden fazla sayfa var ise; önceki, sonraki, ilk, son sayfalara gitmek için gerekli referanslar link headerında aşağıdaki örnekteki gibi doldurulabilir. <br>x-total-count alanının gönderimi kayıt sayısı 0 olduğu durum dışında isteğe bağlı olduğu için; Link içerisindeki son sayfa bilgisi  (last) isteğe bağlı hale getirilmiştir. “Önceki”( prev) ve “Sonraki” (next) adımlarının uygun olan her durumda yer alması zorunludur.<br>İlk sayfada “Önceki” seçeneği olmamalı, son sayfada ise “Sonraki” seçeneği olmamalıdır. <br><br> **&lt;/ohvps/hbh/s2.0/hesaplar/hspref/islemler?hesapIslemBslTrh=2022-01-01T00:00:00+03:00&hesapIslemBtsTrh=2023-12-12T23:59:59+03:00&srlmKrtr=islGrckZaman&srlmYon=Y&syfNo=6&syfKytSayi=100&gt;; rel="next",<br> &lt;/ohvps/hbh/s2.0/hesaplar/hspref/islemler?hesapIslemBslTrh=2022-01-01T00:00:00+03:00&hesapIslemBtsTrh=2023-12-12T23:59:59+03:00&srlmKrtr=islGrckZaman&srlmYon=Y&syfNo=4&syfKytSayi=100&gt;; rel="prev",<br> &lt;/ohvps/hbh/s2.0/hesaplar/hspref/islemler?hesapIslemBslTrh=2022-01-01T00:00:00+03:00&hesapIslemBtsTrh=2023-12-12T23:59:59+03:00&srlmKrtr=islGrckZaman&srlmYon=Y&syfNo=14&syfKytSayi=100&gt;; rel="last",<br> &lt;/ohvps/hbh/s2.0/hesaplar/hspref/islemler?hesapIslemBslTrh=2022-01-01T00:00:00+03:00&hesapIslemBtsTrh=2023-12-12T23:59:59+03:00&srlmKrtr=islGrckZaman&srlmYon=Y&syfNo=0&syfKytSayi=100&gt;; rel="first"** <br><br> Hiç hesap hareketinin olmadığı durumda dönen yanıt başlığınızın şu şekilde olması beklenmektedir.<br> Response body:<br>[]<br>Response header:<br>Link: </ohvps/hbh/s2.0/hesaplar?srlmKrtr=hspRef&srlmYon=A&syfNo=1&syfKytSayi=100>; rel="last",</ohvps/hbh/s2.0/hesaplar?srlmKrtr=hspRef&srlmYon=A&syfNo=1&syfKytSayi=100>; rel="first"<br> x-total-count alanı da 0 olarak iletilmelidir.|K|K|


## 3.17. Idempotency Kuralları

YÖS’ün aşağıdaki durumlarda aynı istek numarası (x-request-id) ve aynı veri gövdesiyle çağrıyı tekrarlaması; HHS’nin de bu durumlarda aynı yanıtı dönmesi gereklidir.
- HHS’nin yanıtı kesinti/arıza nedeniyle YÖS’e ulaşmaz ve zaman aşımı söz konusu olması, 
- ÖHK, YÖS uygulaması üzerinden çift tıklama ile mükerrer defa HHS API’lerini çağırılması,
(API kontrollerinden önce YÖS uygulamasının, çift tıklama kontrolü yapması önerilmektedir.) 
- YÖS, yanıt almasına rağmen işleyemeden kaybedilmesi,

durumlarında HHS aşağıdaki kuralları işletir: 

- HHS gelen istek numarasını ve veri gövdesini birleştirerek checksum değeri üretir.   
chesksum değeri x-request-id|request.body ‘nin hash algoritmalarından (CRC32,MD5 vb)  geçirilerek üretilebilir.
- HHS bu checksum değeri ile YÖS’e dönmüş olduğu yanıtı 5 dk boyunca saklar.  Saklama yöntemi olarak veri tabanı veya önbellek araçları kullanılabilir.
- YÖS aynı istek numarası ve aynı veri gövdesi ile yeni bir çağrı yaptığında, aynı checksum değeri üretileceği için 5dk boyunca bu değere karşılık gelen yanıtı döner.
- 5 dk sonrasında istek numarası veya veri gövdesi değişmemiş olsa dahi bu HHS tarafından yeni istek olarak kabul edilir. 

Aşağıdaki Public Post işlemleri için bu kural setinin işletilmesi gerekmektedir:

1- Ödeme emri rızası oluşturma  
2- Erişim belirteci oluşturma   
3- Ödeme emri   
4- Hesap bilgisi rızası oluşturma  
5- İleri Tarihli Ödeme Emri Rızası oluşturma  
6- İleri Tarihli Ödeme Emri  
7- Düzenli Tekrarlı Ödeme Emri Rızası oluşturma  
8- Düzenli Tekrarlı Ödeme Emri 

## 3.18. HTTP Durum Kodları

RFC 2616'da belirlenmiş olan durum kodları (status code) gönderilen isteğin durumunu YÖS’a standart bir şekilde ifade eder. Eğer bir hata varsa hatayı, gönderilen istek başarılı bir şekilde işlem gördüyse ona ilişkin durumu aktarır. Durum kodları genel olarak 5 kategoridedir.
- 1xx Bilgi
- 2xx Başarılı
- 3xx Yönlendirme
- 4xx İstemci Hatası
- 5xx Sunucu Hatası

**errorCode Alanında Kullanılabilecek Sıralı Hata Tipleri :**

>**TR.OHVPS.Resource**  
>>**&#8680;	InvalidFormat**  
>>**&#8680;	ConsentMismatch**  
>>**&#8680;	NotFound**  
>>**&#8680;	InvalidSignature**  
>>**&#8680;	MissingSignature**  
>>**&#8680;	MethodNotAllowed**  
>>**&#8680;	NotAcceptable**  
>>**&#8680;	UnsupportedMediaType**  
>>**&#8680;	ConsentRevoked**

>**TR.OHVPS.Business**  
>>**&#8680;	InvalidContent**   
>>**&#8680;	InvalidAccount**  

>**TR.OHVPS.Connection**  
>>**&#8680;	InvalidCertificate**  
>>**&#8680;	ExceededRate**  
>>**&#8680;	InvalidTPP**  
>>**&#8680;	InvalidASPSP**  
>>**&#8680;	InvalidToken**  
>>**&#8680;	InvalidTPPRole**  
  
>**TR.OHVPS.Server**  
>>**&#8680;	InternalError**  
>>**&#8680;	ServiceUnavailable**  

TR.OHVPS.Resource.InvalidFormat hatası alındığı durumda; fieldErrors nesnesi içerisinde verilecek hata kodları : 

>**TR.OHVPS.Field**	  
>>**&#8680;	Missing**   
>>**&#8680;	Invalid**  

**Veri Tipi Örneği:**

```JSON
{
    "path": "/ohvps/obh/s2.0/odeme-emri-rizasi",
    "id": "d8bd4e5f-f094-48a6-aee1-3a800e2709d9",
    "timestamp": "2022-12-22T10:33:15+03:00",
    "httpCode": 400,
    "httpMessage": "Bad Request",
    "moreInformation": "Validation error",
    "moreInformationTr": "Şema kontrolleri başarısız",
    "fieldErrors": [
        {
            "objectName": "odemeEmriRizasiIstegi",
            "field": "odmBsltm.islTtr.prBrm",
            "messageTr": "boş değer olamaz",
            "message": "must not be null",
            "code": "TR.OHVPS.Field.Missing"
        },
        {
            "objectName": "odemeEmriRizasiIstegi",
            "field": "odmBsltm.kmlk.kmlkVrs",
            "messageTr": "boyut '1' ile '30' arasında olmalı",
            "message": "size must be between 1 and 30",
            "code": "TR.OHVPS.Field.Invalid"
        }
    ],
    "errorCode": "TR.OHVPS.Resource.InvalidFormat"
} 
```  

**Tablo 4: HTTP Durum Kodları**

|HTTP Durum |İstek Sonucu ve Açıklamalar |POST |GET|DELETE |
| --- | --- | --- | --- | --- |
| 200 OK | **İstek Başarıyla Tamamlandı.**<br>Kaynak güncellemek için yapılan (örneğin, GET) ve başarıyla tamamlanan isteklerinde kullanılır.  | H | E | H |
| 201 Created | **İstek Başarılı Oldu.**<br>Kaynak yaratma isteği (örneğin, POST /ödeme-emri-rizasi) başarıyla sonuçlandı. | E | H | H |
| 204 No Content | **Silme işlemi başarıyla tamamlandı.**<br>Kaynak silme isteği (örneğin, **DELETE /hesap-rizasi/{RizaNo}**) başarıyla sonuçlandı. | H | H | E |
| 400 Bad Request | **İstekte bozuk, eksik veya uyumlu olmayan JSON gövdesi, URL parametreleri veya başlık alanları var.** İstekle başlatılan işlem yapısal bozukluk, eksik veya tutarsız veri veya HHS tarafındaki kontrollerin hatalı sonuçlanması nedeniyle hata ile sonuçlanır ve hataya ilişkin veriler hata nesnesi içerisinde dönülür. | E | E | E |
| 401 Unauthorized | **Yetkilendirme başlığı eksik, hatalı veya geçersiz olduğundan istek yetkilendirilmediğinde ve erişim reddedildiğinde http 401 kodu dönülmelidir.**| E | E | E |
| 403 Forbidden | **Erişim belirtecinin veya rızanın kapsamı uyuşmuyor.**<br>YÖS bir hesaba/işlem kaynağına erişmeye çalışır ve YÖS, istenen kaynağa erişmek için geçerli izinlere sahip bir rızası yoktur. <br>Örneğin; hesap bilgisi rızası bakiye izni almamıştır ancak /bakiyeler adresinden istekte bulunmuştur. |   |   |   |
| 404 Not Found | **HHS geçerli bir API erişim adresini sağlamıyorsa, o URL'ye gelen istekler için 404 (Bulunamadı) ile yanıt vermelidir.**YÖS, uygulama esaslarında tanımlanmayan bir kaynak için bir URL'ye erişmeye çalışırsa (örneğin, GET /yurtdisi-odeme), HHS, 404 (Bulunamadı) ile yanıt vermeyi seçebilir.| E | E | E |
| 405 Method Not Allowed | **YÖS, desteklenmeyen bir yöntemle kaynağa erişmeye çalıştı.**| E | E | E |
| 406 Not Acceptable | **İstek, geçersiz bir karakter kümesi içeriyor.**| E | E | E |
| 415 Unsupported Media Type | **İstek gövdesi hedef kaynakta bu yöntem tarafından desteklenmeyen bir biçimde oluşturulduğu için işlem reddedildi**| E | H | H |
| 429 Too Many Requests| **Belirli bir süre içinde çok fazla talepte bulunulduğu için işlem reddedildi.** HHS’ler adil kullanım politikalarını aşan talepleri kısıtlayabilir.| E | E | E |
| 500 Internal Server Error | **API sunucu / servis katmanında sorun oluştu. İşlem başarısız.**<br> 5XX hata durumlarında yanıt gövde değeri olmadığı için mesaj imzalama yapılamaz ve x-jws-signature alanı boş olarak iletilir.<br> Bu durumda x-jws-signature kontrolü yapılmamalıdır.| E | E | E |
| 503 Service Unavailable | **Hizmet sürümü kullanımdan kaldırıldı.** Bir API'nin kullanımdan kaldırıldığı ve artık bir HHS tarafından operasyonel olarak desteklenmediği durumlarda, URI yolu hala etkin olabilir ve API isteklerini kabul edebilir.  Bu durumda, YÖS'ün API sürümünün çevrimdışı olduğunun farkında olması için 503 Hizmet Kullanılamıyor dönmesi önerilir.| E | E | E |

**Hata Örnekleri:**

<ins>**400 Bad Request**</ins>

**TR.OHVPS.Business.InvalidContent** hatası HHS tarafından yapılacak iş kuralı kontrollerinin başarısız olduğu durumda verilmelidir.  
**TR.OHVPS.Resource.InvalidFormat** hatası şema validasyonu, alan uzunluk ve varlık kontrollerinin başarısız olduğu durumda verilmelidir. 

```JSON 

{
    "path": "/ohvps/obh/s2.0/odeme-emri-rizasi",
    "id": "7f115b9c-d7c2-4a2a-bc45-5a9891c79072",
    "timestamp": "2022-12-22T10:47:57+03:00",
    "httpCode": 400,
    "httpMessage": "Bad Request",
    "moreInformation": "Validation error",
    "moreInformationTr": "Şema kontrolleri başarısız",
    "fieldErrors": [
        {
            "objectName": "odemeEmriRizasiIstegi",
            "field": "odmBsltm.alc.unv",
            "messageTr": "boyut '3' ile '140' arasında olmalı",
            "message": "size must be between 3 and 140",
            "code": "TR.OHVPS.Field.Invalid"
        },
        {
            "objectName": "odemeEmriRizasiIstegi",
            "field": "odmBsltm.islTtr.ttr",
            "messageTr": "boş değer olamaz",
            "message": "must not be null",
            "code": "TR.OHVPS.Field.Missing"
        }
    ],
    "errorCode": "TR.OHVPS.Resource.InvalidFormat"
} 

```

Zorunlu header alanlarından biri ya da birkaçı eksik olarak gönderilirse aşağıdaki gibi bir hata dönüşü gerçekleşebilir.

HHS uygulaması tarafından dönülebilecek hata örnekleri:
```JSON 

{
    "path": "/ohvps/obh/s2.0/odeme-emri-rizasi",
    "id": "2005515d-f0e6-4a07-a439-0ef3b0f56011",
    "timestamp": "2022-12-22T10:39:26+03:00",
    "httpCode": 400,
    "httpMessage": "Bad Request",
    "moreInformation": "Validation error",
    "moreInformationTr": "Şema kontrolleri başarısız",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
        {         
            "field": "X-Request-ID",
            "messageTr": "X-Request-ID değeri boş olamaz.",
            "message": "X-Request-ID cannot be null.",
            "code": "TR.OHVPS.Field.Invalid"
        }
    ]
} 

```

Business hata örneği - 1:  
```JSON 
{
    "path": "/ohvps/obh/s2.0/odeme-emri-rizasi",
    "id": "677cfd9d-77c1-4ea3-8bdf-74a6e9887177",
    "timestamp": "2022-12-22T11:05:59+03:00",
    "httpCode": 400,
    "httpMessage": "Bad Request",
    "moreInformation": "gonUnvan wrong",
    "moreInformationTr": "Gönderen Ünvan hatalı",
    "errorCode": "TR.OHVPS.Business.InvalidContent"
} 
```

Business hata örneği - 2:  
```JSON 
{
    "path": "/ohvps/obh/s2.0/odeme-emri-rizasi",
    "id": "5df3b402-3aca-4305-a35b-5af0f3184b40",
    "timestamp": "2022-12-22T11:06:47+03:00",
    "httpCode": 400,
    "httpMessage": "Bad Request",
    "moreInformation": "Sender account is disabled or not found.",
    "moreInformationTr": "Gonderen hesap aktif değil veya bulunamadı.",
    "errorCode": "TR.OHVPS.Business.InvalidAccount"
} 
 ```


GEÇİT'te yapılan zorunlu header kontrollerinde aşağıdaki hatalar dönebilir:
```JSON 

{
    "timestamp": "2022-12-22T10:40:28+03:00",
    "path": "/ohvps/obh/s2.0/odeme-emri-rizasi",
    "id": "d4375748-6fc7-4f7e-94f3-6411cab1d59f",
    "moreInformationTr": "Geçersiz HHS kodu.",
    "errorCode": "TR.OHVPS.Connection.InvalidASPSP",
    "moreInformation": "Invalid ASPSP Code",
    "httpCode": 400,
    "httpMessage": "Bad Request"
} 
 ```
GEÇİT tarafından dönülecek hata örneği:
```JSON 

{
    "timestamp": "2022-12-22T10:40:28+03:00",
    "path": "/ohvps/obh/s2.0/odeme-emri-rizasi",
    "id": "d4375748-6fc7-4f7e-94f3-6411cab1d59f",
    "moreInformationTr": "Geçersiz HHS kodu.",
    "errorCode": "TR.OHVPS.Connection.InvalidTPP",
    "moreInformation": "Invalid TPP Code",
    "httpCode": 400,
    "httpMessage": "Bad Request"
} 
 ```

GEÇİT tarafından dönülecek hata örneği:
```JSON 

{
    "timestamp": "2022-12-22T11:14:05+03:00",
    "path": "/ohvps/hbh/s2.0/hesap-bilgisi-rizasi",
    "id": "ee1e3ea7-a5e5-468b-bb02-314148f84e6a",
    "moreInformationTr": "Geçersiz yös rolü. İlgili api çağrısı için yetkisi yok.",
    "errorCode": "TR.OHVPS.Connection.InvalidTPPRole",
    "moreInformation": "Invalid TPP Role",
    "httpCode": 403,
    "httpMessage": "Forbidden"
} 

 ```


<ins>**401 Unauthorized**</ins>

**YÖS, süresi dolmuş bir erişim belirteci kullandığında, HHS 401 (Yetkisiz) http kodu ile aşağıdaki hata kodunu dönmelidir.** Aşağıdaki nedenlerden herhangi biri nedeniyle bir Erişim Belirtecinin süresi dolduğunda bu durum ortaya çıkabilir:
- Rızanın süresi doldu (Son Kullanma Tarihi geçti)
- Erişim Belirtecinin şüpheli kullanımı veya sahtekarlık şüphesi
- Rızada belirlenen gün sayısının aşımı
Bu hata, müşteriden doğru izinlerle yeniden kimlik doğrulaması isteyerek çözülebilir.

```json 

{
    "path": "/ohvps/gkd/s2.0/erisim-belirteci",
    "id": "ed3fd667-fc58-40ad-a982-e8937faccd15",
    "timestamp": "2022-12-22T11:17:33+03:00",
    "httpCode": 401,
    "httpMessage": "Unauthorized",
    "moreInformation": "Refresh token expired or not found in database",
    "moreInformationTr": "Yenileme belirteci zaman aşımına uğramış veya veri tabanında yok",
    "errorCode": "TR.OHVPS.Connection.InvalidToken"
} 
 

```

<ins>**403 Forbidden**</ins>

Örn; YÖS yetkisi olmayan rol(ÖBH/HBH) ile işlem yapmaya çalıştığı durumda 403 hatası alarak işleme devam edemez.


```json 
{
  "path": "/ohvps/hbh/s2.0/bakiye",
  "id": "3e48ea98-f889-48b9-aa6e-28aabc6cfb14",
  "timestamp": "2022-12-22T11:20:05+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "Forbidden",
  "moreInformationTr": "Bakiye Bilgileri için ÖHK izni bulunmamaktadır.",
  "errorCode": "TR.OHVPS.Resource.Forbidden"
} 
```

<ins>**404 Not Found**</ins>

Örn; GET /odeme-emri-rizasi/123456 çağrısı durumunda 123456 geçerli bir ödeme kaynağı değilse, HHS, 404 koduyla cevap vermelidir.  

```JSON 
{
    "path": "/ohvps/obh/s2.0/odeme-emri-rizasi/123456",
    "id": "22f52b2d-d442-4a6a-8f39-d23eba45a34b",
    "timestamp": "2022-12-22T10:53:53+03:00",
    "httpCode": 404,
    "httpMessage": "Not Found",
    "moreInformation": "Resource not found",
    "errorCode": "TR.OHVPS.Resource.NotFound",
    "moreInformationTr": "Kaynak bulunamadı"
} 

```
<ins>**405 Method Not Allowed**</ins>
```json 
{
    "path": "/ohvps/obh/s2.0/odeme-emri-rizasi",
    "id": "3e5c6b28-7ee4-4469-b541-843fb4a94eec",
    "timestamp": "2022-12-22T11:35:10+03:00",
    "httpCode": 405,
    "httpMessage": "Method Not Allowed",
    "moreInformation": "Method not allowed",
    "errorCode": "TR.OHVPS.Resource.MethodNotAllowed",
    "moreInformationTr": "İstek yapılan URL için izin verilmeyen metot"
} 
```
<ins>**406 Not Acceptable**</ins>
```json 
{
    "path": "/ohvps/obh/s2.0/odeme-emri-rizasi",
    "id": "3e5c6b28-7ee4-4469-b541-843fb4a94eec",
    "timestamp": "2022-12-22T11:35:10+03:00",
    "httpCode": 406,
    "httpMessage": "Not Acceptable",
    "moreInformation": "Not Acceptable",
    "errorCode": "TR.OHVPS.Resource.NotAcceptable",
    "moreInformationTr": "Kabul edilmedi"
} 
```
<ins>**415 Unsupported Media Type**</ins>

İstek başlığında content-type, JSON dışında bir veri iletilirse bu hata verilebilir. 

```json 

{
    "path": "/ohvps/obh/s2.0/odeme-emri-rizasi",
    "id": "63cc94b6-1b51-4648-9671-95e6e2e7e03d",
    "timestamp": "2022-12-22T11:37:12+03:00",
    "httpCode": 415,
    "httpMessage": "Unsupported Media Type",
    "moreInformation": "Content type not supported",
    "errorCode": "TR.OHVPS.Resource.UnsupportedMediaType",
    "moreInformationTr": "Desteklenmeyen içerik tipi’"
} 
```


<ins>**429 Too Many Requests**</ins>
```json 
{
  "path": "/ohvps/hbh/s2.0/hesaplar/aef6061f-2978-4bb4-980d-b4c634c8055b/islemler",
  "id": "20473c5f-2f4f-4b2e-8b66-7978aec442f7",
  "timestamp": "2022-12-22T00:21:07+03:00",
  "httpCode": 429,
  "httpMessage": "Too Many Requests",
  "moreInformation": "Exceeded rate",
  "moreInformationTr": "Erişim sıklığı limiti aşımı",
  "errorCode": "TR.OHVPS.Connection.ExceededRate"
} 
```


<ins>**500 Internal Server Error**</ins>
```json 
{
  "id": "1b90c6dc-0277-4755-8b05-9297ddfab743",
  "path": "/ohvps/obh/s2.0/odeme-emri-rizasi",
  "timestamp": "2022-12-22T11:41:34+03:00",
  "httpCode": 500,
  "httpMessage": "Internal Server Error",
  "moreInformation": "Unexpected condition was encountered.",
  "moreInformationTr": "Beklenmeyen bir durumla karşılaşıldı.",
  "errorCode": "TR.OHVPS.Server.InternalError"
} 

```


<ins>**503 Service Unavailable**</ins>
```json 

  "timestamp": "2022-12-20T23:18:56+03:00",
  "path": "/ohvps/hbh/s2.0/hesap-bilgisi-rizasi/2a72678ee3d24de2be47887e4903a8c6",
  "id": "e76315b7-09f4-4295-b6d8-1f7fec632159",
  "moreInformationTr": "HHS şu anda hizmet veremiyor.",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable",
  "moreInformation": "HHS is currently unavailable",
  "httpCode": 503,
  "httpMessage": "Service Unavailable"

```




## 3.19. Maskeleme Kuralları

Maskeli olarak iletilmesi gereken verilerin maskeleme kuralları şu şekildedir: 
- IBAN verileri Hesap Numarası : İlk 4 ve son 4 karakteri açık, diğer karakterler maskeli olmalıdır. Örnek: TR54******************4812
- Ad-Soyadı / Ticari Unvan : Her kelimenin ilk 2 karakteri açık, sonraki karakterler yerine 4 adet ‘*’ karakteri konumlandırılmalıdır. 
      Örneğin: “FATİH SERKAN EREN” ifadesi “FA**** SE**** ER****” şeklinde gösterilmelidir.
- Tabela Unvanı : Her kelimenin ilk 2 karakteri açık, sonraki karakterler yerine 4 adet '*' karakteri konumlandırılmalıdır. Örneğin “BANKALARARASI KART MERKEZİ ANONİM ŞİRKETİ” ifadesi “BA**** KA**** ME**** AN**** Şİ****” şeklinde gösterilmelidir.
- YÖS’ten girilen alıcı unvan ve IBAN bilgileri ödeme emri rızası ve ödeme emri yanıtında açık dönülür, Kolas akışında ödeme emri rızası yanıtı ve ödeme emri istek ve yanıtında maskeli taşınır.



## 3.20. Fonksiyonel Olmayan Gereksinimler


- HHS’lerin sunuyor oldukları servisleri en fazla 3000 ms içinde yanıt dönecek şekilde tasarlamalıdır.  

- HHS'ler mevcut online işlem kanallarından sundukları erişilebilirlik ve performans kriterlerinden daha düşük bir hizmet kalitesi sunmamalıdır.  

- HHS’lerin sunuyor oldukları servislere sistemin güvenlik ve sürekliliğini sağlamak adına rate limit koyma ihtiyaçları olur ise, standartlar ve ihtiyaçlara uygun şekilde bir konfigürasyon yapabilirler. <br>

- HHS rate limit tanımı uyguluyor ise; YÖS'ler arasında ayrım yapmadan, adil ve makul sınırlar dahilinde uygulamalıdır.   <br>
  
- YÖS tarafından kullanıcının başlatmadığı otomatik sorgu limitleri **3.21 Otomatik Sorgular** bölümünde detaylandırılmıştır. HHS'lerin bu servisler için minimumda cevap vermesi gereken sorgu sayıları belirlenmiştir. Bu sayıların üzerinde yapılan servis çağrısına yanıt dönmek HHS inisiyatifindedir. Diğer taraftan kullanıcının başlattığı istekler için uygulanacak limitler, HHS'nin online işlem kanallarından sunulan sorgu limitlerinden daha az olmamalıdır.

- HHS'ler, çağrım limitlerini aşan istekler için HTTP 429 - Too Many Request hatasını dönmelidir. Örnek hata mesajı **3.18 HTTP Durum Kodları** bölümünde bulunmaktadır. Rate Limit özelinde tanımlanmış parametreler olan X-RateLimit-Limit, X-RateLimit-Remaining ve X-RateLimit-Reset alanları da  **3.16 Yanıt Başlığı** bölümünde açıklanmıştır. YÖS'ler de HHS'nin belirlediği rate limit kurallarına uymakla yükümlüdür. 


## 3.21. Otomatik Sorgular

YÖS uygulaması, ÖHK'nın başlattığı işlemler neticesinde API çağrımı yapabileceği gibi, sistemsel bir şekilde otomatik API çağrımı da yapabilir.<br>
HHS, API çağrımının ÖHK'lı ya da ÖHK'sız olduğunu istek parametreleri içerisinde yer alan PSU-Initiated parametresi ile anlar. Bu parametre “E” ise ÖHK’lı, “H” ise sistemsel yapılmış bir sorgu anlamına gelmektedir. 
  
ÖHK YÖS uygulamasına giriş yaptığı andan çıkış yaptığı ana kadar yani ÖHK oturumu boyunca yapılan API çağrımlarında, PSU-Initiated  değerinin "E" olması gerekmektedir.  YÖS uygulamasında ÖHK oturumu boyunca,  ÖHK'nın bilgilerinden minimumda "bakiye" bilgisinin, uygulama arayüzlerinde güncel değeri ile online sorgularla gösterimi YÖS'ün insiyatifindedir. 

ÖHK’nın başlattığı sorgular için HHS tarafından belirlenen üst rate limitler dahilinde çağrım yapılabilir.
  
YÖS, aşağıdaki API'leri sistemsel bir şekilde çağırabilir.  
HHS'lerin bu servisler için minimumda cevap vermesi gereken sorgu sayıları belirlenmiştir. Bu sayıların üzerinde yapılan servis çağrısına yanıt dönmek HHS inisiyatifindedir.<br>
HHS tarafından izin verilen sorgu sayısının üzerinde yapılan bir sorgu için HTTP 429 durum kodu (Too Many Requests) hatası dönülmelidir. Yanıt gövdesinde tekrar hata nesnesinin oluşturulması HHS inisiyatifindedir. <br>HHS yanıt headerı alanında iletilecek X-RateLimit-Reset (saniye cinsinden) değeri kadar süre sonunda
 YÖS'ün tekrar sorgulama yapması beklenmektedir.

|No|	Kaynak|	HTTP işlemi	|Erişim Adresi|Otomatik Sorgu Sayısı|
| --- | --- | --- | --- | --- | --- | 
| 1 | erisim-belirteci | POST |/erisim-belirteci|  --- |
| 2 | odeme-emri-rizasi | GET |/odeme-emri-rizasi/{rizaNo}| Rıza bazında günde 4 | 
| 3 | odeme-emri | GET |/odeme-emri/{odemeEmriNo}| Rıza bazında günde 24  | 
| 4 | ileri-tarihli-odeme-emri-rizasi | GET |/ileri-tarihli-odeme-emri-rizasi/{rizaNo}| Rıza bazında günde 4 | 
| 5 | ileri-tarihli-odeme-emri | GET |/ileri-tarihli-odeme-emri/{odemeEmriNo}| Rıza bazında günde 24  |
| 6 | ileri-tarihli-odeme-emri-rizasi | DELETE | /ileri-tarihli-odeme-emri-rizasi/{RizaNo} | --- |
| 7 | hesap-bilgisi-rizasi | GET | /hesap-bilgisi-rizasi/{RizaNo} | Rıza bazında günde 4 |  
| 8 | hesap-bilgisi-rizasi | DELETE | /hesap-bilgisi-rizasi/{RizaNo} | --- |
| 9 | hesaplar | GET |/hesaplar| Bireysel günde 4<br> Kurumsal günde 4 | 
| 10 | hesaplar | GET |/hesaplar/{hspRef}| Bireysel günde 4<br>Kurumsal günde 4 | 
| 11 | bakiye | GET |/hesaplar/{hspRef}/bakiye| Bireysel günde 24<br>Kurumsal ÖHK - günde 24 | 
| 12 | bakiye | GET |/bakiye| Bireysel günde 24<br>Kurumsal ÖHK - günde 24 | 
| 13 | islemler | GET |/hesaplar/{hspRef}/işlemler| Bireysel günde 4<br>Kurumsal ÖHK - saatte 12 | 

YÖS ve HHS son 24 saat içerisindeki sorgu sayılarını toplayarak elde ettiği sonuçlarla limit kontrolü yapmalıdır (Pencere yöntemi).  

İşlemler servisinin çağrım detaylarına [^Bölüm 7.8](hesap-bilgisi-hizmeti.html#_7-8-adim-3-5-ve-3-6-islemlerin-sorgulanmas%C4%B1) üzerinden ulaşılabilir. 

Hesap bilgisi rızasının YÖS tarafından otomatik bir şekilde iptal edilmesi durumu [^Bölüm 9'da](erisim-belirteci.html) açıklanmıştır.


**Olay Bildirim Servis Çağrımları**   <br>
Olay bildirime bağlı servis çağrımlarında (PSU-Initiated=O), yapılan her isteğe HHS'nin yanıt vermesi gereklidir. Otomatik sorgularda uygulanan üst limitler, olay bildirim servislerinde geçerli değildir. <br>
Olay bildirim servislerini kullanmak istemeyen YÖS'ler otomatik sorguları kullanarak sistemlerini güncellemeye devam edebilirler. 
