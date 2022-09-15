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

- HHS’ler Yönetmeliğin 59. maddesinin beşinci fıkrası ve Ödeme ve Elektronik Para Kuruluşlarının Bilgi Sistemleri ile Ödeme Hizmeti Sağlayıcılarının Ödeme Hizmetleri Alanındaki Veri Paylaşım Servislerine İlişkin Tebliğin (Tebliğ) 23. maddesinin birinci fıkrası uyarınca, ödeme hizmetleri veri paylaşım servislerini BKM API Geçidi aracılığıyla HBHS ve ÖBHS’ye sunmakla yükümlüdür.  

- Tebliğin 23. maddesinin ikinci fıkrası uyarınca ödeme emri başlatma hizmetinde açık iletişim servisinin tarafları ÖBHS ile HHS’dir.

-	Tebliğin 23. maddesinin üçüncü fıkrası uyarınca hesap bilgisi hizmetinde açık iletişim servisinin tarafları HBHS ile HHS’dir.
-	Yönetmeliğin 60. maddesinin birinci fıkrası uyarınca müşteri, ödeme emri başlatma hizmetini **ödeme hesabının çevrim içi olarak erişilebilir olduğu durumlarda**, kullanmayı tercih edebilir.
-	Yönetmeliğin 61. maddesinin birinci fıkrası uyarınca müşteri, hesap bilgisi hizmetini **ödeme hesabının çevrim içi olarak erişilebilir olduğu durumlarda**, kullanmayı tercih edebilir.
-	Tebliğin 25. maddesi uyarınca HHS ve YÖS (ÖBHS ve HBHS) arasında bağlantı uçtan uca güvenli bir şekilde sağlanır. Bu amaçla iletim katmanında TLS (asgari 1.2 sürümü) ile şifreli iletişim sağlanır.
-	Tebliğin 23. maddesinin dördüncü fıkrası uyarınca HHS tarafından sunulan ödeme hizmetleri veri paylaşım servislerini kullanan yetkilendirilmiş ödeme hizmeti sağlayıcılarının TCMB tarafından ilgili ödeme hizmeti için yetkilendirilmiş olduğu kontrol edilir. 
-	Tebliğin 25. maddesinin beşinci fıkrası uyarınca zaman damgası, 15/1/2004 tarihli 5070 sayılı Elektronik İmza Kanunu kapsamında tanımlanan zaman damgasına dayanır.
-	API alan isimleri Türkçe olarak tanımlanmıştır. Ancak API başlığı (header) alanındaki alan isimleri özelinde, API Geçitleri tarafından otomatik olarak tanınabilmesi gözetilerek, İngilizce isimlendirme tercih edilmiştir.

## 3.2.	İstem (Çağrı) ve Oturum  

-	Her istek biricik istek numarası ve ÖHK’lı işlemler için zaman damgası içerir. Birden fazla istek içeren işlem YÖS tarafından belirlenen çağrıya özgü talep kimliği (istek numarası: x-request-id) ve işlem akışına özgü talep kimliği (işlem grup numarası: x-group-id) değerleri kullanılarak HHS tarafından bir oturum yaklaşımı ile sürdürülür (Bknz. 3.15 İstek Başlığı).  

-	Oturum takibi ise işlem grup numarası ile yapılır. İşlem grup numarası da ÖHK’lı işlemler için zaman damgası ile birlikte ilgili tüm işlem verilerini içerecek şekilde kayıt altına alınır.  

-	Örneğin, bir ödeme emri başlatma işlemi birden fazla istekten oluşur. Her istek yukarıda belirtildiği gibi biricik istek numarası ve ÖHK’lı işlemler için zaman damgası içerir. Ancak işlemin oturum bütünlüğü işlem grup numarası ile sağlanır.  

-	Taraflar açtıkları oturumu işlem bütünlüğünü sağlayacak süre içerisinde açık tutar ve işlem biter bitmez kapatır.  


## 3.3.	RESTful API  

API’ler, dünya ölçeğinde yaygın bir şekilde kullanılan Temsili Durum Transferi (Representational State Transfer, REST) mimari tarzı ve JavaScript Nesne Notasyonu (JavaScript Object Notation, JSON) veri formatlarına uygun olarak geliştirilir. En üst seviye Veri Tanımlama Dili (Data Description Language) ve en iyi uygulama örnekleri için [^JSON Şeması] temel alınır.

[^JSON Şeması]:  http://json-schema.org/  


## 3.4.	Sürüm Yönetimi   

API sonraki aşamalarda doğabilecek gereksinimleri ve daha karmaşık kullanım durumlarını karşılamak için sürümler halinde geliştirilir ve bu durum tasarım sırasında göz önünde bulundurulur.   

API v1.0 sürümünde ;
-	Kapsamdaki ödeme hesapları : Vadesiz TL, yabancı para hesapları (gerçek ve tüzel kişilere ait ödeme hesapları), Kredili Mevduat Hesabı 
-	Tekil ödeme (Virman/Havale/FAST/Müşterilerarası TL Aktarım Sistemi)
    -	Virman ve havale işlemleri kapsamında yabancı para transferi yapılabilir.
-	Hesap bilgisi hizmetleri
    - Temel veya ayrıntılı hesap bilgisi
    -	Bakiye
    -	Gerçekleşen işlemler için Hesap hareketleri
-	Karekodlu ödemelerdeki 01, 02 ve 03 akış türleri
yer almaktadır.  

**Her sürüm değişikliğinde bir önceki sürüm belirli bir süre desteklenecektir. Diğer bir ifadeyle, sadece belirli bir süre için mevcut ve bir önceki sürüm aynı anda erişilebilir olacaktır.**


## 3.5.	Kaynak URI Yol Yapısı

YÖS’lerin başlattığı çağrılarda URI yolu aşağıdaki yapıyı takip eder:

**[hhs-yol-ön-eki]/ohvps/ [kaynak-grubu]/ [sürüm]/ [kaynak]/[kaynak-no]/[alt-kaynak]**

Bu, aşağıdaki unsurlardan oluşur:

- [hhs-yol-ön-eki]  
İsteğe bağlı, HHS'ye özgü yol ön ekini ifade eder.  
BKM API geçidi üzerinden yapılan çağrılarda BKM tarafından belirlenen sistem adı ve yol ön eki kullanılır.  
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
[https://secure.api-preprod.bkm.com.tr/ohvps/obh/s1.0/odeme-emri-rizasi]()  
[https://secure.api-preprod.bkm.com.tr/ohvps/obh/s1.0/odeme-emri]()  
HBH:  
[https://secure.api-preprod.bkm.com.tr/ohvps/hbh/s1.0/hesap-bilgisi-rizasi]()  
[https://secure.api-preprod.bkm.com.tr/ohvps/hbh/s1.0/hesaplar]()  
[https://secure.api-preprod.bkm.com.tr/ohvps/hbh/s1.0/hesaplar/1234/islemler]()  
[https://secure.api-preprod.bkm.com.tr/ohvps/hbh/s1.0/hesaplar/1234/bakiye]()  
GKD  
[https://secure.api-preprod.bkm.com.tr/ohvps/gkd/s1.0/erisim-belirteci]()  
HHS – YÖS API  
[https://secure.api-preprod.bkm.com.tr/hhs-api/s1.0/hhs]()  
[https://secure.api-preprod.bkm.com.tr/hhs-api/s1.0/hhs/1234]()  
[https://secure.api-preprod.bkm.com.tr/yos-api/s1.0/yos]()  
[https://secure.api-preprod.bkm.com.tr/yos-api/s1.0/yos/1234]()  

  
HHS’lerin sağlayacakları API’lerdeki URI çevrimi örnekleri aşağıdaki gibidir.  

- [https://xbank.com.tr/api-portal/ohvps/obh/s1.0/odeme-emri]() 
- [https://secure.api-preprod.bkm.com.tr/ohvps/obh/s1.0/odeme-emri]() (BKM API) 
- [https://xbank.com.tr/api-portal/ohvps/hbh/s1.0/hesap-bilgisi-rizasi]() 
- [https://secure.api-preprod.bkm.com.tr/ohvps/hbh/s1.0/hesap-bilgisi-rizasi]() (BKM API) 
- [https://xbank.com.tr/api-portal/ohvps/hbh/s1.1/hesaplar]() 
- [https://secure.api-preprod.bkm.com.tr/ohvps/hbh/s1.1/hesaplar]()  (BKM API)  
- [https://xbank.com.tr/api-portal/ohvps/hbh/s1.1/hesaplar/1234]() 
- [https://secure.api-preprod.bkm.com.tr/ohvps/hbh/s1.1/hesaplar/1234]() (BKM API)

BKM API Geçidi üzerinden yapılan çağrılarda, istek başlığında bulunan “x-aspsp-code” (isteğin iletildiği Hesap Hizmeti Sağlayıcısının kodu) değerine göre HHS API’de standart olarak tanımlanmış olan “basePath” bilgisine servis uzantısı eklenerek HHS’ye yönlendirme yapılır.

Örneğin, istek başlığında **xbank**’ın kodu varsa, YÖS tarafından yapılan   
[https://secure.api-preprod.bkm.com.tr/ohvps/hbh/s1.0/hesap-bilgisi-rizasi]()  
çağrısı BKM API Geçidi tarafından karşılanarak  
[https://xbank.com.tr/api-portal/ohvps/hbh/s1.0/hesap-bilgisi-rizasi]()  
adresine yönlendirilir.   


Bu örnekte, [https://xbank.com.tr/api-portal]() basePath bilgisi HHS tarafından HHS API’ye girilen değerdir.




## 3.6.	Karakter Kodlama  

API istekleri ve yanıtlarında UTF-8 karakter kodlaması kullanılır. Bu, JSON için varsayılan karakter kodlamasıdır.  

Ancak, bir HHS'nin kendi uygulamaları ve ödeme başlattığı ödeme sistemi (FAST vb.)  bazı UTF-8 karakterlerini kabul etmeyebilir. HHS, UTF-8 kodlaması içeren bir mesajı işleyemez ve reddederse, HTTP 400 (Hatalı İstek) durum kodu ile yanıt vermelidir.  


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

BKM API Geçidi üzerinden yapılan erişimlerde YÖS ve HHS’lere önceden dağıtılmış olan istemci sertifikaları kullanılarak tarafların (sunucu) kimliklerinin doğrulanması sağlanacaktır. İstemci sertifikaları hem test hem de üretim ortamında kullanılacaktır. Sertifikaların işlevselliği ve geçerliliği sertifikasyon sürecinde de sınanacaktır. Söz konusu sertifikaların dağıtım prosedürleri ve kullanımlara yönelik açıklamalar EK-3’te yer verilmiştir.  


## 3.9.	Yetkilendirme Türleri

BKM API Geçidi üzerinden yapılan çağrılarda iki temel yetkilendirme türü kullanılır:

**1.	İstemci Kimlik Bilgileri:** Müşteri onayının gerekmediği, sadece YÖS’ün tanımlanıp doğrulandığı API çağrılarında kullanılır. YÖS’ün yetkilendirilmiş olduğu ve faaliyet izninin yaptığı hizmet çağrısına uygun olduğu kontrol edilir.  Bu amaçla, YÖS’lere clientId ve clientSecret tahsis edilecektir. YÖS’ler ilgili clientId ve clientSecret ile sadece yetkilendirilmiş oldukları servislere erişebileceklerdir. YÖS’ler kendilerine BKM tarafından sunulacak API’yi, kendi clientID ve clientSecret değerleri ile sorgulayarak “İstemci Kimlik Bilgileri” belirtecini (access token) elde edeceklerdir.
HHS’ler de BKM API geçidi üzerindeki YÖS API’sini sorgulama maksadı ile BKM API Geçidine geldiklerinde, kendilerine atanmış olan clientID ve clientSecret bilgileri ile yetki kontrolleri yapılır.
HHS’ler kendilerinden alınacak username ve password değerleri kullanılarak oluşturulacak basic authentication metodu ile servislerini sunacaklardır.  

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

**Tablo 2: İstek Başlığında Yer Alan Veriler**  
|Başlık İsimleri |Format |Notlar |POST |GET |DELETE |
| --- | --- | --- | --- | --- | --- |
| X-Request-ID  | AN1..36 | İsteği başlatan YÖS tarafından belirlenen çağrıya özgü talep kimliği. İstek numarası. <br> Örnek: Ödeme emri başlatma iş akışının her adımda farklı “x-request-id” değeri kullanılır. <br> Çağrıların aynı yanıtı dönmesinin beklendiği durumlarda (idempotent işlemlerde) aynı değer ile çağrı yapılır.   | Z |Z |Z  |
| X-Group-ID |AN1..36 |	İsteği başlatan YÖS tarafından belirlenen işlem akışına özgü talep kimliği. İşlem grup numarası.<br> Aynı rıza no’ya ait tüm isteklerde aynı x-group-id bilgisi değeri gönderilmelidir.<br>Örnek: Ödeme emri başlatma/hesap bilgisi iş akışının her adımında aynı “x-group-id” değeri kullanılır.|	Z|	Z|	Z|
|Content-Type | AN1..20| Standart HTTP Başlığı; Talepte sağlanan payload’ın biçimini temsil eder. Bu değerin application/json olarak gönderilmesi gerekmektedir.<br> (Başka bir değere ayarlanırsa, HHS, 415 Desteklenmeyen Ortam Türü (Unsupported Media Type) ile yanıt vermelidir)|Z|-|-|
| X-ASPSP-Code |AN4| İsteğin iletildiği Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)|Z |Z|Z| 
|X-TPP-Code|AN4|İsteği gönderen Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur	|Z|Z|Z|
|PSU-Auth-Date|ISODateTime|ÖHK’nın YÖS üzerinde en son oturum açtığı saat. [RFC7231] Örneğin:  auth-date: Tue, 11 Sep 2012 19:43:31 GMT	|İ|İ|İ|
|PSU-IP-Adress|AN7..15|ÖHK YÖS üzerinde oturum açmışsa, işlemi başlattığı cihazın IP adresi.|İ|İ|İ|
|PSU-IP-Port|AN1..5|ÖHK YÖS üzerinde oturum açmışsa, işlemi başlattığı cihazın Port adresi.	|İ|İ|İ|
|PSU-GEO-Location|AN1..36|ÖHK’nın işlemi başlattığı cihazın konum bilgisi. RFC2426 standartına uygun olarak paylaşılmalıdır. Örneğin  GEO:"&lt;enlem &gt;, &lt;boylam&gt;GEO:52.506931,13.144558|İ|İ|İ|
|PSU-User-Agent|AN 1.. 255|ÖHK’nın işlemi başlattığı cihazın sağladığı user-agent bilgisi. (Tarayıcı, versiyon, işletim sistemi bilgileri)|İ|İ|İ|
|PSU-Timestamp|ISODateTime|	ÖHK’nın işlemi başlattığı cihazın tarih saat içeren zaman bilgisi.|İ|İ|İ|
|PSU-Device-ID|AN5..40|ÖHK işlemi mobil uygulama aracılığıyla başlattıysa, kullanılan mobil uygulama ilk yüklendiğinde oluşturulan tekil cihaz veya uygulama belirteci. ÖHK cihazının UUID değeri kullanılabilir.|İ|İ|İ|
|PSU-Device-Data|AN1..1024|ÖHK’nın işlemi başlattığı mobil cihaza ait veriler. <br>Örnek alanlar: <br> - Platform - (Android, iOS, Windows 10 Mobile)<br> - Device Model <br> - OS Name <br> - OS Version<br>- Locale<br>- Time zone|İ|İ|İ|
|PSU-Fraud-Check | AN1..4096 | YÖS'lerin çeşitli güvenlik kontrollerini gerçekleştirerek, önemli görülen aşağıdaki bilgileri HHS'ler ile paylaşmaları gerekmektedir.<br>Bu bilgiler ışığında müşterinin profili oluşturulmasına katkı sağlanacaktır. <br> Paylaşılacak bilgiler şu şekildedir.<br> <b>FirstLoginFlag</b> : ÖHK'nın, müşterilik ömründe ilgili YÖS sistemine (mobil ya da web uygulaması) ilk login olma süresini ifade eden değer. ÖHK'nın ilk yaptığı HBH ya da ÖBH işlemi değil, YÖS sisteminde kendini aktifleştirme tarih aralığı bilgisidir. <br> YÖS, kullanıcının ilk login bilgisini tutarak sonraki işlemlerinde bu bilgiyi belirlenen format ile HHS'ye aktaracaktır. Örneğin; YÖS'ün 7 aydır müşterisi olan bir kullanıcı için bu alan "5" olarak YÖS tarafından beslenecektir. Burada amaç; ilgili kullanıcının YÖS'ün eski bir müşterisi mi, yoksa yeni bir müşterisi mi olup olmadığını anlamaktır. <br> Gönderilmesi Zorunlu alandır.<br>TR.OHVPS.DataCode.ZmnAralik sıralı veri tipinin alabileceği değerleri alabilir.<br> <b>DeviceFirstLoginFlag</b> : ÖHK'nın, müşterilik ömründe ilgili YÖS sistemine, kullandığı cihazla ilk login olma süresini ifade eden değer. ÖHK cihaz değişikliği yaparsa FirstLoginFlag değeri sabit kalacak ancak DeviceFirstLoginFlag değeri değişecektir gibi düşünülebilir. <br>FirstloginFlag değeri ile ÖHK’nın YÖS uygulamasına ilk login tarih bilgisi ile ilgili bilgi verilirken, DeviceFirstLoginFlag ile de ÖHK’nın YÖS uygulamasına farklı bir cihaz aracılığı ile ilk login tarihinin bilgisi verilmektedir. Örneğin; ÖHK 7 aydır YÖS'ün müşterisi olabilir, böyle bir durumda FirstLoginFlag değeri "5" olacaktır. ÖHK 7 aydır YÖS'ün müşterisidir ancak son işlemini daha önce hiç kullanmadığı bir cihazdan yapmıştır. Böyle bir durumda yeni cihazdaki login süre aralığı 0-2 saat aralığında  olduğu için DeviceFirstLoginFlag değeri "1" olacaktır.FirstLoginFlag değeri yine "5" olarak kalmaya devam edecektir.Bu bilgi ile YÖS, ilgili HHS'ye ilk kez geliyor olsa bile; HHS, müşterinin YÖS'ü uzun süredir kullandığını ama yeni bir cihazla işlemlerine devam ettiğini anlayabilecektir.<br>Bir ÖHK, farklı cihazlar veya platformlar üzerinden YÖS ile etkileşime girebilir.  Kullanıcı ve YÖS arasında bir oturum başlatılmış ise YÖS’ün tutarlı ve kalıcı bir kimlik (device id) ataması beklenmektedir. <br>Device ID: Web sitesi veya mobil uygulama kullanıcıları için üretilen, tarayıcı ya da mobil uygulama tabanlı benzersiz (tekil) tanımlayıcı değer. <br>Gönderilmesi Zorunlu alandır. TR.OHVPS.DataCode.ZmnAralik sıralı veri tipinin alabileceği değerleri alabilir.<br> <b>LastPasswordChangeFlag</b> : ÖHK'nın, YÖS (cihaz bağımsız)  uygulamasına login olduğu şifre bilgisinin en son değiştirildiği süreyi ifade eden değer. Müşterinin en son ne zaman şifre değişikliği yaptığını anlamak için kullanılan alandır. Yeni müşteri ve hiç şifre değişikliği yapmamış olabilir, böyle bir durumda ilgili alan "0" olarak beslenecektir. <br> Gönderilmesi Zorunlu alandır. TR.OHVPS.DataCode.ZmnAralik sıralı veri tipinin alabileceği değerleri alabilir.<br> <b>BlacklistFlag</b> : ÖHK'nın herhangi bir sebeple YÖS'ün sakıncalı müşteriler listesinde bulunup bulunmadığını ifade eden değer. <br> Burada amaç herhangi bir sebeple YÖS tarafında yasaklı olarak kayıtlı olan ÖHK bilgisinin, dolandırıcılığı önceden tespit etmek amaçlı HHS'ye aktarılması olarak açıklanabilir. Örneğin, YÖS tarafından tespit edilen dolandırıcı kullancılara ait device id bilgisi, bu kara listede tutulur daha sonra aynı cihazla başka bir ÖHK işlem yapacak olsa bile bu alanda ilgili bilgi "1" değeri ile HHS'ye aktarılır. HHS'de olmayıp YÖS tarafında olan bu örnekteki sakıncalı müşteri/cihaz bilgisinin, dolaylı yoldan HHS'ye aktarılması amaçlanmaktadır.<br> Gönderilmesi Opsiyonel alandır. TR.OHVPS.DataCode.VarYok sıralı veri tipinin alabileceği değerleri alabilir.<br> <b>MalwareFlag</b> : YÖS uygulamasının çalıştığı cihaz üzerindeki son 21 güne ait zararlı yazılım tespit bilgisini ifade eden değer.<br>Örneğin ÖHK'nın cihazında zararlı yazılım olduğu ayın 1'inde YÖS tarafından tespit edildi. Zararlı yazılım tespitinden 2 saat sonra YÖS üzerinden login olan ÖHK'nın durumu,  "1" olarak iletilecektir. Bir gün sonra ayın 2'sinde, yeni bir zararlı yazılım tespiti yok ancak mevcut zararlı yazılım aktifse alan "2" değeri ile iletilecektir. Süreler artarak 21 güne kadar TR.OHVPS.DataCode.ZmnAralik değerlerine göre iletilecektir.Son 21 gün içinde yeni bir tespit yoksa ayın 22'sinden itibaren ilgili alan  "0" değeri ile beslenecektir.<br>Not: Zararlı yazılım, bankacılık işlemlerinin yapıldığı uygulamalara girişte kullanılan bilgilerin (şifre, kullanıcı kodu gibi) ele geçirilmesi amacıyla kullanılan bir uygulama ya da kod parçacığı olabilir. Bu amaçlar dışında kullanılan (bankacılığa yönelik bir zararlı yazılım olmayan) yazılım tespitleri iletilmemelidir. YÖS kanallarına her bir loginde, kullanılan cihazda bir zararlı yazılım var mı yok mu kontrolü yapılmalıdır. <br> Gönderilmesi Opsiyonel alandır. TR.OHVPS.DataCode.ZmnAralik sıralı veri tipinin alabileceği değerleri alabilir.<br> <b>AnomallyFlag</b> : Diğer şüpheli durumların varlığını ifade eden değer. Gönderilmesi Opsiyonel alandır. TR.OHVPS.DataCode.VarYok sıralı veri tipinin alabileceği değerleri alabilir.<br> <b>UnsafeAccountFlag</b>: HHS tarafından aktarılan bilgi ile son 21 gün içinde ÖHK'nın dolandırıcılık mağduru olması durumunu ifade eden değer.<br>Örneğin; HHS 1, ayın 1'inde süphe veya sahtekarlık nedeniyle bir ödeme işlemine izin vermediği durumda, bu bilgiyi rıza iptal detay kodu ile YÖS'e aktarmış olur. Bu bilgiyi tutan YÖS, ilgili müşterinin 15 dakika sonra HHS 2'de yaptığı işlem için ilgili alanı "1" değeri ile besler. Böylece HHS 2, ÖHK'nın farklı bir HHS'de son 15 dakika içinde şüpheli veya sahte bir işlemi olduğunu anlayabilecektir. Ayın 22'sinde yeni bir tespit/kayıt yoksa bu alan YÖS tarafından "0" olarak beslenecektir.<br>Gönderilmesi Opsiyonel alandır.TR.OHVPS.DataCode.ZmnAralik sıralı veri tipinin alabileceği değerleri alabilir. <br><br> <br> Flaglar JWT claims içine key value şeklinde eklenerek gönderilecektir. EK-5: Mesaj İmzalama Akışı'nda belirtilen yöntemle imzalanarak oluşturulan JWT PSU-Fraud-Check alanına konularak YÖS'ler tarafından HHS'ye iletilmelidir.| Z | Z | Z |
|PSU-Initiated|AN1|İşlemin ÖHK tarafından başlatılması durumunda E , sistem tarafından başlatıldığı durumda H değerini alması beklenir. <br> İşlemler servisinde yapılacak sistemsel sorgulardaki işlem limitlerini kontrol amacıyla kullanılır. |Z|Z|Z|
|Authorization|AN1..4096|YÖS ile BKM API Gateway arasındaki otorizasyon için kullanılan token bilgisidir. <br>Yekilendirme türlerinden İstemci Kimlik Bilgileri’ni adresler.|Z  |Z |Z  |
| X-Access-Token |AN1..4096|ÖHK’nın GKD sürecinde doğrulanması sonrasında kullanılan erişim simgesi. Yetkilendirme türlerinden Yetkilendirme Kodu (GKD)’nu adresler. |İ|İ|İ|
|X-JWS-Signature|AN1..4096|Payload gövdesinin ayrılmış bir JWS imzasını içeren üstbilgi.<br> Bu başlığın ne zaman belirtilmesi gerektiği hususu ilgili endpoint için belirtilmiştir.|K (Kullanılan API ve methoda göre kullanılır.) |K  |K |K|

## 3.16. Yanıt Başlığı  

**Tablo 3: Yanıt Başlığında Yer Alan Veriler**

|Başlık İsimleri |Format |Notlar |Kullanım Durumu |
| --- | --- | --- | --- |
| X-Request-ID  | AN1..36 | İsteği başlatan YÖS tarafından belirlenen çağrıya özgü talep kimliği. İstek numarası <br> **İlgili istek başlığındaki bilgi geri dönülür.** | Z |
| X-Group-ID |AN1..36 |İsteği başlatan YÖS tarafından belirlenen işlem akışına özgü talep kimliği. İşlem grup numarası.<br>**İlgili istek başlığındaki bu değer geri dönülür.**|	Z|	
|X-ASPSP-Code  | AN4| İsteğin iletildiği Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)|Z|
|X-TPP-Code |AN4| İsteği gönderen Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur|Z|
|Content-Type |AN1..20|Standart HTTP Başlığı; Talepte sağlanan payload’ın biçimini temsil eder: **application/json**|Z|
|X-JWS-Signature |AN1..4096|JWS imzasını içeren üstbilgi. Bu başlığın hangi yanıtlar için kullanılması gerektiği ilgili endpoint için belirtilmiştir. <br>Hata durumlarında, yanıt gövdesi değeri dönülüyor ise imzalalanmalı ve imza bilgisi x-jws-signature alanında iletilmelidir.<br> Ancak uygulama katmanı tarafından yakalanamayan dolayısı ile imzalanamayan hata durumlarında x-jws-signature alanı HHS'ler tarafından boş gönderilebilir. |K|
| X-RateLimit-Limit | N 1..18 | İstek kısıtı uygulanan servislerde en fazla kaç adet istek yapılabileceğini gösterir. Kısıt uygulanan servislerde bu başlığın dönmesi zorunludur. | K |
| X-RateLimit-Remaining  | N 1..18 | İstek kısıtı uygulanan servislerde kaç adet istek hakkı kaldığını gösterir. Kısıt uygulanan servislerde bu başlığın dönmesi zorunludur. | K |
|X-RateLimit-Reset |AN 1..255|İstek kısıtı uygulanan servislerde çağrım hakkı bittikten sonra yeniden denemeden önce beklemesi gereken süreyi (saniye cinsinden) gösterir. HTTP 429 durum kodu (Too Many Requests) ile dönülen yanıtların başlığında dönülmesi zorunludur. |K|
|x-total-count |N 1..18|Hesaplar, İşlemler ve Bakiye servislerinde sayfalama kullanıldığı durumda, sorgu sonucu dönecek toplam kayıt sayısı bilgisi, bu alanda HHS isteğine bağlı olarak gönderilebilir.  |İ|
|Link|1..4096|“Link” alanının çoklu sayfa yapısı olması durumunda gönderilmesi zorunludur.<br> Sayfalama yapısı kullanıldığında gelen yanıtta birden fazla sayfa var ise; önceki, sonraki, ilk, son sayfalara gitmek için gerekli referanslar link headerında aşağıdaki örnekteki gibi doldurulabilir. <br>x-total-count alanının gönderimi isteğe bağlı olduğu için; Link içerisindeki son sayfa bilgisi  (last) isteğe bağlı hale getirilmiştir. “Önceki”( prev) ve “Sonraki” (next) adımlarının uygun olan her durumda yer alması zorunludur.<br>İlk sayfada “Önceki” seçeneği olmamalı, son sayfada ise “Sonraki” seçeneği olmamalıdır. <br><br> **&lt;/ohvps/hbh/s1.0/hesaplar/hspref/islemler?hesapIslemBslTrh=2022-01-01T00:00:00+03:00&hesapIslemBtsTrh=2023-12-12T23:59:59+03:00&srlmKrtr=islGrckZaman&srlmYon=Y&syfNo=6&syfKytSayi=100&gt;; rel="next",<br> &lt;/ohvps/hbh/s1.0/hesaplar/hspref/islemler?hesapIslemBslTrh=2022-01-01T00:00:00+03:00&hesapIslemBtsTrh=2023-12-12T23:59:59+03:00&srlmKrtr=islGrckZaman&srlmYon=Y&syfNo=4&syfKytSayi=100&gt;; rel="prev",<br> &lt;/ohvps/hbh/s1.0/hesaplar/hspref/islemler?hesapIslemBslTrh=2022-01-01T00:00:00+03:00&hesapIslemBtsTrh=2023-12-12T23:59:59+03:00&srlmKrtr=islGrckZaman&srlmYon=Y&syfNo=14&syfKytSayi=100&gt;; rel="last",<br> &lt;/ohvps/hbh/s1.0/hesaplar/hspref/islemler?hesapIslemBslTrh=2022-01-01T00:00:00+03:00&hesapIslemBtsTrh=2023-12-12T23:59:59+03:00&srlmKrtr=islGrckZaman&srlmYon=Y&syfNo=0&syfKytSayi=100&gt;; rel="first"** |K|


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

## 3.18. HTTP Durum Kodları

RFC 2616'da belirlenmiş olan durum kodları (status code) gönderilen isteğin durumunu YÖS’a standart bir şekilde ifade eder. Eğer bir hata varsa hatayı, gönderilen istek başarılı bir şekilde işlem gördüyse ona ilişkin durumu aktarır. Durum kodları genel olarak 5 kategoridedir.
- 1xx Bilgi
- 2xx Başarılı
- 3xx Yönlendirme
- 4xx İstemci Hatası
- 5xx Sunucu Hatası

**Sıralı (Enumarated) Hata Tipleri:**

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
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/ohvps/s1.1/obh/odeme-emri-rizasi",
  "timestamp": "2020-06-13T18:24:38",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Resource Schema validation error",
  "moreInformationTr": "Şema kontrolleri başarısız",
   "errorCode": "TR.OHVPS.Resource.InvalidFormat",
   
  "fieldErrors": [
           {
                 "objectName": "odemeEmriRizasi",
                 "field": "kmlkNo",
                 "messageTr": "boyut '6' ile '30' arasında olmalı",
                 "message": "size must be between '6' and '30'",
                 "code": "TR.OHVPS.Field.Invalid"
              },
              {
                 "objectName": "odemeEmriRizasi",
                  "field": "prBrm",
                  "messageTr": "boş değer olamaz",
                  "message": "must not be null",
                  "code": "TR.OHVPS.Field.Missing"
              }]
}
```  
**Veri Tipi Örneği:**  

Zorunlu header alanlarından biri ya da birkaçı eksik olarak gönderilirse aşağıdaki gibi bir hata dönüşü gerçekleşebilir.  
```JSON 

{
    "httpCode": "400",
    "httpMessage": "Bad Request",
    "moreInformation": "One or more required API parameters are missing in the API request."
}

```

**Tablo 4: HTTP Durum Kodları**

|HTTP Durum |İstek Sonucu ve Açıklamalar |POST |GET|DELETE |
| --- | --- | --- | --- | --- |
| 200 OK | **İstek Başarıyla Tamamlandı.**<br>Kaynak güncellemek için yapılan (örneğin, PUT) ve başarıyla tamamlanan isteklerinde kullanılır.  | H | H | H |
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
httpCode: 400
httpMessage: “Bad Request”
moreInformation: “Resource Schema validation error”
moreInformationTr: “Şema Kontrolleri Başarısız” 
errorCode: "TR.OHVPS.Resource.InvalidFormat"

fieldErrors:  
         code: {"TR.OHVPS.Field.Invalid",
                    "TR.OHVPS.Field.Missing"}

```

Örn; GET /odeme-emri/22289 çağrısı durumunda 22289 geçerli bir ödeme kaynağı değilse, HHS, 400 koduyla cevap vermelidir.  
```JSON 
{
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/ohvps/s1.1/obh/odeme-emri-rizasi",
  "timestamp": "2020-06-13T18:24:38",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Resource Schema validation error",
  "moreInformationTr": "Şema kontrolleri başarısız",
   "errorCode": "TR.OHVPS.Resource.InvalidFormat",
   
  "fieldErrors": [
{
"objectName": "odemeEmriRizasi",
"field": "kmlkNo",
"messageTr": "boyut '6' ile '30' arasında olmalı",
"message": "size must be between '6' and '30'",
"code": "TR.OHVPS.Field.Invalid"
},
{
"objectName": "odemeEmriRizasi",
 "field": "prBrm",
 "messageTr": "boş değer olamaz",
 "message": "must not be null",
 "code": "TR.OHVPS.Field.Missing"
}
]
}


errorCode: "TR.OHVPS.Connection.InvalidTPP"
moreInformation: “Invalid TPP Code”
moreInformationTr: “Geçersiz Yös Kodu” 

errorCode: "TR.OHVPS.Connection.InvalidASPSP"
moreInformation: “Invalid ASPSP Code”
moreInformationTr: “Geçersiz HHS Kodu” 

errorCode: "TR.OHVPS.Connection. InvalidTPPRole"
moreInformation: “Invalid TPP Role” 
moreInformationTr: “Hatalı Yös Rolü” 
```


<ins>**401 Unauthorized**</ins>

**YÖS, süresi dolmuş bir erişim belirteci kullandığında, HHS 401 (Yetkisiz) http kodu ile aşağıdaki hata kodunu dönmelidir.** Aşağıdaki nedenlerden herhangi biri nedeniyle bir Erişim Belirtecinin süresi dolduğunda bu durum ortaya çıkabilir:
- Rızanın süresi doldu (Son Kullanma Tarihi geçti)
- Erişim Belirtecinin şüpheli kullanımı veya sahtekarlık şüphesi
- Rızada belirlenen gün sayısının aşımı
Bu hata, müşteriden doğru izinlerle yeniden kimlik doğrulaması isteyerek çözülebilir.

```json 
errorCode: " TR.OHVPS.Connection.InvalidToken "
moreInformation: “Invalid Token”
moreInformationTr: “Geçersiz Token” 
```

<ins>**403 Forbidden**</ins>
```json 
httpCode: 403
httpMessage: “Forbidden”

errorCode: "TR.OHVPS.Resource.Forbidden"
moreInformation: “Insufficient rights”
moreInformationTr: “İzin verilmedi.”
```

<ins>**404 Not Found**</ins>
```json 
httpCode: 404
httpMessage: “Not Found”

errorCode: "TR.OHVPS.Resource.NotFound"
moreInformation: “Resource not found”
moreInformationTr: “Kayıt bulunamadı”
```
<ins>**405 Method Not Allowed**</ins>
```json 
httpCode: 405
httpMessage: “Method  Not Found”

errorCode: "TR.OHVPS.Resource.MethodNotAllowed"
moreInformation: “Method Not Allowed”
moreInformationTr: “İstek yapılan URL için izin verilmeyen metot” 
```
<ins>**406 Not Acceptable**</ins>
```json 
httpCode: 406
httpMessage: “Not Acceptable”

errorCode: " TR.OHVPS.Resource.NotAcceptable"
moreInformation: “Accept Headers not supported”
moreInformationTr: “Desteklenmeyen kabul başlıkları” 
```
<ins>**415 Unsupported Media Type**</ins>
```json 
httpCode: 415
httpMessage: “Unsupported Media Type”

errorCode: " TR.OHVPS.Resource.UnsupportedMediaType"
moreInformation: “Content type not supported”
moreInformationTr: “Desteklenmeyen içerik tipi” 
```


<ins>**429 Too Many Requests**</ins>
```json 
httpCode: 429
httpMessage: “Too Many Requests”

errorCode: " TR.OHVPS.Connection.ExceededRate"
moreInformation: “The rate limit has been exceeded for the plan or operation being used”
moreInformationTr: “Planda tanımlanmış olan çağrı limiti aşıldı”
```


<ins>**500 Internal Server Error**</ins>
```json 
httpCode: 500
httpMessage: “Internal Server Error”

errorCode: "TR.OHVPS.Server.InternalError"
moreInformation: “Unexpected condition was encountered”
moreInformationTr: “Beklenmedik bir durumla karşılaşıldı.” 
```


<ins>**503 Service Unavailable**</ins>
```json 
httpCode: 503
httpMessage: “Service Unavailable”

errorCode: "TR.OHVPS.Server.ServiceUnavailable "
moreInformation: “API is currently unable to handle the request”
moreInformationTr: “API şu anda isteği işleyemiyor” 
```




## 3.19. Maskeleme Kuralları

Maskeli olarak iletilmesi gereken verilerin maskeleme kuralları şu şekildedir: 
- IBAN verileri Hesap Numarası : İlk 4 ve son 4 karakteri açık, diğer karakterler maskeli olmalıdır. Örnek: TR54******************4812
- Ad-Soyadı / Ticari Unvan : Her kelimenin ilk 2 karakteri açık, sonraki karakterler yerine 4 adet ‘*’ karakteri konumlandırılmalıdır. 
      Örneğin: “FATİH SERKAN EREN” ifadesi “FA**** SE**** ER****” şeklinde gösterilmelidir.
- Tabela Unvanı : Her kelimenin ilk 2 karakteri açık, sonraki karakterler yerine 4 adet ‘*’ karakteri konumlandırılmalıdır. Örneğin “BANKALARARASI KART MERKEZİ ANONİM ŞİRKETİ” ifadesi “BA**** KA**** ME**** AN**** Şİ****” şeklinde gösterilmelidir.
- YÖS’ten girilen unvan ve iban bilgileri ödeme emri rızası ve ödeme emri yanıtında açık dönülür, Kolas akışında ödeme emri rızası yanıtı ve ödeme emri istek ve yanıtında maskeli taşınır.



## 3.20. Fonksiyonel Olmayan Gereksinimler


- HHS’lerin sunuyor oldukları servisleri en fazla 3000 ms içinde yanıt dönecek şekilde tasarlamalıdır.  

- YÖS tarafından kullanıcının başlatmadığı otomatize sorgular için aşağıdaki limitler belirlenmiştir.  
  - YÖS, Bireysel ÖHK’lar için hesap bazında günde en fazla 4 adet sorgulama yapabilir.  
  - YÖS, Kurumsal ÖHK’lar için hesap bazında saatte en fazla 12 adet sorgulama yapabilir  
  Diğer taraftan kullanıcının başlattığı Hesap Bilgisi Hizmeti kapsamındaki sorgular HHS tarafından belirlenen üst rate limitler dahilinde tanımlanabilir.  

- HHS’lerin sunuyor oldukları servislere sistemin güvenlik ve sürekliliğini sağlamak adına rate limit koyma ihtiyaçları olur ise, standartlar ve ihtiyaçlara uygun şekilde bir konfigürasyon yapabilirler. Ör: YÖS - Kullanıcı bazında günde X sorgu v.b. 
İsteğin kullanıcı tarafından başlatıldığı Request Header içerisinde yer alan Payment Service User (PSU) alanlarından anlaşılabilir. 

- HHS’ler aynı zamanda servislerin ayakta olup olmadığına yönelik olarak bir healthcheck servisi kurmalıdır.  HHS’lerin bu servis ile tüm network ve veritabanı ya da servislerinin ihtiyaç duydukları altyapısal erişimleri modellemeli ve bu servisi BKM ile paylaşmaları beklenmektedir. Bu servis düzenli olarak BKM tarafından çağırılarak servislerin ayakta olup olmadıklarının kontrolünün sağlanması planlanmaktadır.  

Sunulan her API için /health endpointi ile aşağıdaki bilgileri vermeleri beklenmektedir.     

[GET /{api ismi}/{versiyon}/health]()

**Örnek:**  
[GET /obh/s1.0/health]()  
[GET /hbh/s1.0/health]()  
[GET /gkd/s1.0/health]()  

HHS ve YÖS API için health servisleri aşağıdaki servislerle kontrol edilebilir.

[GET /hhs-api/s1.0/health]()  
[GET /yos-api/s1.0/health]()  


Başarılı yanıtta Http 200 kodu dönülmelidir.  
Başarılı Yanıt:
|Alan Adı|	JSON Alan Adı|	Format	|Koşullu  / İsteğe Bağlı|	Açıklama|
| --- | --- | --- | --- | --- |
|status | 	status |  	AN2..20	 | Z | 	“UP”, “DOWN” değerlerini alabilir.|


Health servisinden yanıt alınamaması, hata alması ya da status DOWN gelmesi durumunda API Gatewayden istek HHS tarafına iletilmeyecektir. 


- ÖHVPS servisleri ile ilgili olarak HHS’ler, BKM tarafından düzenli olarak sorgulanacaktır, erişilebilirlik ve kullanım oranları takip edilecektir. 

- HHS’lerin servislerini erişim yüzdeleri açısından yıl bazında %99.75 oranında ayakta olmalarını sağlayacak şekilde kurgulamaları gerekmektedir.

