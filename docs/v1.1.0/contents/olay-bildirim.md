# 10.	Olay Bildirim <!-- omit in toc -->
<!--
- [Genel Bilgiler](#genel-bilgiler)
- [Olay Abonelik Servisleri](#olay-abonelik-servisleri)
- [ADIM 1 Olay Abonelik Oluşturma](#olay-abonelik-olusturma)
- [ADIM 1.1 Olay Abonelik Sorgulama](#olay-abonelik-sorgulama)
- [ADIM 1.2 Olay Abonelik Güncelleme](#olay-abonelik-guncelleme)
- [ADIM 1.3 Olay Abonelik Silme](#olay-abonelik-silme)
- [ADIM 2 Olay Abonelik İletilemeyen Olaylar](#olay-abonelik-iletilemeyen-olaylar)
- [Olay Dinleme Servisleri](#olay-dinleme-servisleri)
- [ADIM 1: Olay Dinleme](#adim-1-olay-dinleme)

-->

## Genel Bilgiler

Olay Bildirim Abonelik API servisleri, HHS'lerin sunmuş oldukları olay bildirimlerini takip etmek amacıyla abonelik akışlarını tanımlar.

YÖS'ler olay bildirimlerini takip edebilmek için talep ettikleri abonelik hizmetlerini belirterek HHS'ler özelinde bir abonelik kaydı oluştururlar. Bu abonelik kaydını okuyabilir, güncelleyebilir ya da silebilirler. 

Olay bildirimleri HHS'ler tarafından 2 yöntem ile sağlanır. İlki olay bildirimlerinin anlık olarak iletilmesi, diğeri ise anlık iletilemeyen olayların toplu olarak iletilmesidir.

Olay Bildirimi 2 API ile yönetilecektir.   

1 - Olay Abonelik Servisleri (OAS)   
2 - Olay Dinleme Servisleri  (ODS)  

Olay Abonelik ve Olay Dinleme API'lerinin istek ve yanıt başlığında beklenen parametreler ÖBH,HBH,GKD API'lerinden farklıdır.
[3.15. İstek Başlığı](temel-prensipler.html#_3-15-istek-basl%C4%B1g%C4%B1) ve [3.16. Yanıt Başlığı](temel-prensipler.html#_3-15-3-16-_yan%C4%B1t-basl%C4%B1g%C4%B1) bölümlerinde zorunlu parametreler ve açıklamaları belirtilmiştir.


## Olay Abonelik Servisleri (OAS)

Olay abonelik Servisleri; HHS'ler tarafından sunulacak olay bildirim abonelik servislerini ve iletilemeyen olaylar servisini içermektedir.

HHS'nin sunacağı bu API ile YÖS'ler şu adımları gerçekleştirebilir.

- YÖS'ün olay bildirimlerini dinleyebilmek için öncelikle dinlemek istediği olaylara ait olay tipleri ve kaynak tiplerini belirlemesi gerekmektedir. 
- Olay tipleri ve kaynak tiplerinin neler olacağı "Olay Tipleri ve Kaynak Tipleri İlişkisi" tablosunda belirtilmiştir.
- YÖS, belirlediği olaylar için HHS'ye olay abonelik endpointi aracılığı ile abonelik başlatır.
- YÖS, abonelik numarası aracılığı ile abonelik bilgilerini görüntüleyebilir, güncelleyebilir, silebilir.
- YÖS, olay bildirimlerini bu abonelik sayesinde kendisinin sunacağı Olay Dinleme API'si ile dinler.
- HHS anlık iletemediği olaylarını biriktirerek, iletilemeyen olaylar endpointi ile YÖS'e sunar.

HHS'ler "Olay Tipleri ve Kaynak Tipleri İlişkisi" tablosunda belirlenen olay ve kaynak tiplerinin tümü için YÖS'lere bildirim sunmak zorundadır. 

Olay Abonelik Servislerinde Idempotency kurallarının işletilmesine gerek bulunmamaktadır.

YÖS'ler sahip oldukları rol özelinde olay abonelik servislerinden faydalanabilir. Bu yüzden olay bildirim etki alanı (scope) değerleri hesap_bilgisi ve/veya odeme_emri olarak belirlenmiştir. 


Olay Abonelik Servisine ait API Endpointleri aşağıdaki tabloda listelenmiştir.

#  Olay Abonelik Servisleri için Erişim Adresleri (Endpoints)

**Etki Alanı (Scope) =“hesap_bilgisi”  "odeme_emri"**  
|No  |Kaynak |HTTP işlemi|Erişim Adresi |Zorunlu (Z)/ İsteğe Bağlı(İ)|Yetkilendirme Türü |İmzalama |Parametre |İstem Nesnesi |Yanıt Nesnesi |
| --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| 1 |olay-abonelik |POST |/olay-abonelik | Z |İstemci Kimlik Bilgileri |İmzalı İstek ve Yanıt | |OlayAbonelikİstegi | OlayAbonelik|
| 2 |olay-abonelik |GET |/olay-abonelik| Z |İstemci Kimlik Bilgileri |İmzalı Yanıt | | -  | OlayAbonelik|
| 3 |olay-abonelik/{olayAbonelikNo} |PUT |/olay-abonelik/{olayAbonelikNo} | Z |İstemci Kimlik Bilgileri |İmzalı İstek ve Yanıt | |OlayAbonelikİstegi | OlayAbonelik|
| 4 | olay-abonelik/{olayAbonelikNo} |DELETE |/olay-abonelik/{olayAbonelikNo} | Z |İstemci Kimlik Bilgileri | - |- | -| -|
| 5 |olay-abonelik/{olayAbonelikNo}/Iletilemeyen-olaylar |GET |/olay-abonelik/{olayAbonelikNo}/Iletilemeyen-olaylar | Z |İstemci Kimlik Bilgileri | - | Sayfalama | |Olaylar|



## ADIM 1: Olay Aboneliğinin gerçekleştirilmesi

**POST /olay-abonelik**  

HHS'nin olay abonelik hizmeti sunduğu servistir.
YÖS, seçeceği olay-kaynak tipleri için bu servis aracılığı ile abone olabilir. HHS POST işlemi sonucunda, YÖS adına bir olay abonelik kaynağı oluşturur ve tekil tanımlayıcı olan olayAbonelikNo değerini döner. olayAbonelikNo üretilirken farklı YÖS'ler için aynı değer kullanılamaz. olayAbonelikNo evrensel tekil olmalıdır.  
1 YÖS'ün 1 HHS'de 1 adet abonelik kaydı olabilir.  
Başarılı POST isteği sonucu HTTP 200 cevabı ile iletilmelidir.   

YÖS tarafından daha önce oluşturulmuş olay abonelik kaydı varsa "HTTP 409 - Kaynak Çakışması" hatasıyla uyarı mesajını döner.

Abonelik üzerinde görüntüleme, güncelleme, silme işlemlerini gerçekleştirebilir.
YÖS'ün Aboneliği devam ettiği sürece; YÖS'ün açacağı Olay Dinleme API'sine, HHS tarafından abonelik kapsamında olay bildirimleri iletilir. 


BKM'nin sunacağı abonelik servisleri için HHS ve YÖS'lerin abonelik isteği yapmasına gerek bulunmamaktadır. BKM üretim ortamı tanımları yapılırken katılımcıları abonelik servislerine üye yapacaktır. BKM'nin sunacağı abonelik servislerinin olay tipi "HHS_YOS_GUNCELLENDI"dir. HHS ve YÖS API ile sunulan bilgilerde bir değişiklik olduğunda yapılacak olay bildirimlerini sağlar. 
Örneğin; HHS logo bilgilerinde yapılacak bir değişiklik sonrasında, YÖS'lere yapılacak bildirim ile logo bilgisini değişen HHS'nin hhsKod değerini iletir. YÖS, HHS API'yi  hhsKod ile çağırarak HHS'nin güncel bilgilerini alır. Güncel bilgiler ile kendi sistemini günceller. 

**OlayAbonelikIstegi nesnesi**

|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|HHS tarafından yapılması gereken kontrol ve işlemler|
| --- | --- | --- | --- | --- | --- |
| Olay Abonelik | olayAbonelik |Kompleks:OlayAbonelik | Z |   |  |
|>Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.| |
|>>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)| |
|>> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	|Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.| |
| >Abonelik Tipleri  | aboneliktipleri | Kompleks: abonelikTipleri[Array][1..N] | Z |||
| >> Olay Tipi  | olayTipi | AN1..36 | Z |YÖS abone olmak istediği olay tiplerini TR.OHVPS.DataCode.OlayTip sıralı veri tiplerinden değer ya da değerler ile doldurur.|"Olay Tipleri ve Kaynak Tipleri İlişkisi" tablosunda "Olay Bildirim Yapan" kolonu "HHS" olan olay tipleri ile veri girişine izin verilir.|
| >> Kaynak Tipi  | kaynakTipi | AN1..36 | Z | Olay tiplerinin tanımlanabildiği kaynak listesi bulunmaktadır. Bu listeye uygun kaynak tipleri iletilmelidir. |HHS, YÖS API üzerinden YÖS'ün rollerini alarak uygun kaynak tiplerine kayıt olmasını sağlar.|
  
    
**OlayAbonelik nesnesi**
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	| 
| --- | --- | --- | --- | --- | 
| Olay Abonelik | olayAbonelik |Kompleks:OlayAbonelik | Z |   |  
| >Olay Abonelik Numarası  | olayAbonelikNo |AN1..64 | Z | YÖS özelinde oluşturulan tekil tanımlayıcıdır. Farklı YÖS'ler için aynı değer kullanılamaz.|  
| >Olay Abonelik Oluşturulma zamanı  | olusturmaZamani | ISODateTime | Z | Olay Abonelik nesnesinin oluşturulma zaman damgası |
| >Olay Abonelik Güncelleme zamanı  | guncellemeZamani | ISODateTime | İ | Olay Abonelik nesnesinin güncelleme zaman damgası iletilebilir. İlk değeri olay abonelik oluşturma zamanı bilgisidir.|
|>Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.| 
|>>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)| 
|>> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	|Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.| 
| >Abonelik Tipleri  | aboneliktipleri | Kompleks: abonelikTipleri[Array][1..N] | Z | OlayAbonelikIstegi nesnesi içerisinde iletilen değerlerin yanıt içerisinde dönmesi beklenmektedir.|
| >> Olay Tipi  | olayTipi | AN1..36 | Z ||
| >> Kaynak Tipi  | kaynakTipi | AN1..36 | Z ||
  
   
     
**Olay Tipleri ve Kaynak Tipleri İlişkisi**
|Olay Tipleri |YÖS Rolü	|Kaynak Tipleri	|Olay Oluşturulma durumu	|KaynakNo 	| Asıl verinin elde edileceği API |Olay Bildirimini Yapan| 
| --- | --- | --- | --- | --- | --- | --- |
| KAYNAK_GUNCELLENDI | ÖBH |  OdemeEmri | Tüm ödeme durum değişikliklerinde | odemeEmriNo |  GET /odeme-emri/{odemeEmriNo} | HHS |
|   | HBH | Bakiye | Bakiye değiştiğinde | hspRef |  GET /hesaplar/{hspRef}/bakiye | HHS |
|   | HBH | Hesap  |Tüm durum değişikliklerinde | hspRef | /hesaplar/{hspRef} | HHS |
|   | HBH | CokluIslemTalebi ( bulk-data)   |İlgili API İlke ve kurallarına eklendiğinde güncellenecektir. |  | | HHS |
|   | HBH | HesapBilgisiRizasi |Rıza iptal detay kodu ‘02’ : Kullanıcı İsteği ile HHS üzerinden İptal durumunda| RizaNo | GET /hesap-bilgisi-rizasi/{RizaNo}| HHS |
| AYRIK_GKD_TAMAMLANDI | ÖBH | ÖdemeEmriRizasi   |İlgili API İlke ve kurallarına eklendiğinde güncellenecektir. |  | | HHS |
|   |  HBH | HesapBilgisiRizasi  |İlgili API İlke ve kurallarına eklendiğinde güncellenecektir. |  | | HHS |
| HHS_YOS_GUNCELLENDI |   |    |BKM sistemi tarafından üretilecek olayları dinlemek için kullanılacak kaynak tipidir. YÖS ve HHS'lerin BKM'ye abonelik oluşturmasına gerek bulunmamaktadır. BKM HHS ve YÖS üretim ortamı tanımı yaparken aboneliklerini başlatacaktır.  (HHS yaygınlaştırma durumundayken de aboneliği başlatılacaktır.) | | | HHS |
|  | YÖS | HHS  |HHS bilgilerinde değişiklik olduğunda, YÖS'ün hhsKod ile sorgulama yapması ve değişen bilgiyi güncellemesi beklenmektedir.| hhsKod | GET /hhs/{hhsKod}| BKM |
|  | HHS | YOS  |YÖS bilgilerinde değişiklik olduğunda, HHS'nin yosKod ile sorgulama yapması ve değişen bilgiyi güncellemesi beklenmektedir. | yosKod | GET /yos/{yosKod} | BKM |


## ADIM 2: Olay Aboneliğinin güncellenmesi

PUT	olay-abonelik/{olayAbonelikNo}

YÖS'ün olay aboneliğine ait abonelik tiplerini güncelleyebildiği servistir. Olay aboneliği oluşturulduğu zaman HHS tarafından iletilen olayAbonelikNo aracılığı ile güncelleme işlemi yapılır. YÖS abone olmak istediği olay-kayıt tiplerininin son halini güncelleme servisi ile HHS'ye iletir. HHS bu bilgilerle eski abonelik tiplerinin yerini değiştirir. 

Başarılı PUT isteği sonucu HTTP 200 cevabı ile iletilmelidir. 

**OlayAbonelikIstegi nesnesi**
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|HHS tarafından yapılması gereken kontrol ve işlemler|
| --- | --- | --- | --- | --- | --- |
| Olay Abonelik | olayAbonelik |Kompleks:OlayAbonelik | Z |   |  |
| >Olay Abonelik Numarası  | olayAbonelikNo |AN1..64 | Z | YÖS özelinde oluşturulan tekil tanımlayıcıdır. Farklı YÖS'ler için aynı değer kullanılamaz. |  HHS geçerli bir olay abonelik numarası olduğunun kontrolünü yapar. |
|>Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.| |
|>>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)| |
|>> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	|Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.| |
| >Abonelik Tipleri  | aboneliktipleri | Kompleks: abonelikTipleri[Array][1..N] | Z |||
| >> Olay Tipi  | olayTipi | AN1..36 | Z |YÖS abone olmak istediği olay tiplerini TR.OHVPS.DataCode.OlayTip sıralı veri tiplerinden değer ya da değerler ile doldurur.|"Olay Tipleri ve Kaynak Tipleri İlişkisi" tablosunda "Olay Bildirim Yapan" kolonu "HHS" olan olay tipleri ile veri girişine izin verilir.|
| >> Kaynak Tipi  | kaynakTipi | AN1..36 | Z | Olay tiplerinin tanımlanabildiği kaynak listesi bulunmaktadır. Bu listeye uygun kaynak tipleri iletilmelidir. |HHS, YÖS API üzerinden YÖS'ün rollerini alarak uygun kaynak tiplerine kayıt olmasına izin verir.|
  
    
**OlayAbonelik nesnesi**
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	| 
| --- | --- | --- | --- | --- | 
| Olay Abonelik | olayAbonelik |Kompleks:OlayAbonelik | Z |   |  
| >Olay Abonelik Numarası  | olayAbonelikNo |AN1..64 | Z | YÖS özelinde oluşturulan tekil tanımlayıcıdır. Farklı YÖS'ler için aynı değer kullanılamaz.|  
| >Olay Abonelik Oluşturulma zamanı  | olusturmaZamani | ISODateTime | Z | Olay Abonelik nesnesinin oluşturulma zaman damgası |
| >Olay Abonelik Güncelleme zamanı  | guncellemeZamani | ISODateTime | Z | Olay Abonelik nesnesinin güncelleme zaman damgası|
|>Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.| 
|>>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)| 
|>> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	|Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.| 
| >Abonelik Tipleri  | aboneliktipleri | Kompleks: abonelikTipleri[Array][1..N] | Z | OlayAbonelikIstegi nesnesi içerisinde iletilen değerlerin yanıt içerisinde dönmesi beklenmektedir.|
| >> Olay Tipi  | olayTipi | AN1..36 | Z |OlayAbonelikIstegi nesnesi içerisinde iletilen değerlerin yanıt içerisinde dönmesi beklenmektedir.|
| >> Kaynak Tipi  | kaynakTipi | AN1..36 | Z | OlayAbonelikIstegi nesnesi içerisinde iletilen değerlerin yanıt içerisinde dönmesi beklenmektedir.|

## ADIM 3: Olay Aboneliğinin sorgulanması  

GET /olay-abonelik  

YÖS olay abonelik bilgilerini sorgulamak isteyebilir. HHS, YÖS'e ait aktif durumdaki abonelik bilgisini iletir. 
Başarılı GET sonucu HTTP 200 kodu ile iletilmelidir. 


**OlayAbonelik nesnesi**
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	| 
| --- | --- | --- | --- | --- | 
| Olay Abonelik | olayAbonelik |Kompleks:OlayAbonelik | Z |   |  
| >Olay Abonelik Numarası  | olayAbonelikNo |AN1..64 | Z | YÖS özelinde oluşturulan tekil tanımlayıcıdır. Farklı YÖS'ler için aynı değer kullanılamaz.|  
| >Olay Abonelik Oluşturulma zamanı  | olusturmaZamani | ISODateTime | Z | Olay Abonelik nesnesinin oluşturulma zaman damgası |
| >Olay Abonelik Güncelleme zamanı  | guncellemeZamani | ISODateTime | Z | Olay Abonelik nesnesinin güncelleme zaman damgası|
|>Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.| 
|>>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)| 
|>> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	|Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.| 
| >Abonelik Tipleri  | aboneliktipleri | Kompleks: abonelikTipleri[Array][1..N] | Z | OlayAbonelikIstegi nesnesi içerisinde iletilen değerlerin yanıt içerisinde dönmesi beklenmektedir. |
| >> Olay Tipi  | olayTipi | AN1..36 | Z |OlayAbonelikIstegi nesnesi içerisinde iletilen değerlerin yanıt içerisinde dönmesi beklenmektedir.|
| >> Kaynak Tipi  | kaynakTipi | AN1..36 | Z | OlayAbonelikIstegi nesnesi içerisinde iletilen değerlerin yanıt içerisinde dönmesi beklenmektedir.|


## ADIM 4: Olay Aboneliğinin iptali


DELETE /olay-abonelik/olayAbonelikNo

YÖS'ün abonelik kaydını silmesi için HHS'nin sunduğu servistir.  Başarılı silme işlemi sonucu HTTP 204 ile YÖS'e iletilir.

## ADIM 5: Olay Aboneliğinin İletilemeyen Olayları

GET /iletilemeyen-olaylar 

HHS kaynaklar üzerinde oluşacak olayları YÖS'e POST/olay-dinleme servisi ile gönderim sağlayacak. Bu gönderim belli bir yeniden gönderim politası (retry-policy) ile yapılacaktır.  Ancak yine de iletilemeyen olaylar olursa (YÖS servisinden HTTP 202 alamama durumu) YÖS'e iletilemeyen-olaylar servisi üzerinden sunulacaktır. Yani yeniden gönderim politikası sonunda gönderilemeyen olaylar bu servis ile sunulmalıdır.  

Bu serviste 1 gün öncesinden sorgu anına kadar tüm kayıtlarına ait iletilemeyen olaylar listelenecektir. 
Örnek sorgu zamanı : 2023-04-06T15:14:00+03:00 
HHS'nin sunacağı veri 2023-04-05T00:00:00+03:00  ile 2023-04-06T15:14:00+03:00 arasında olmalıdır.
Sıralama yönü olay tarihine göre artan şekilde olmalıdır. Sayfalama 100'er kayıt dönülerek yapılmalıdır. 

İşlem Sorgu Örneği GET /iletilemeyen-olaylar?syfNo=1


**İletilemeyen Olaylar Sorgulama İsteği Sorgu Parametreleri**  

|Alan Adı |Parametre Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|HHS tarafından yapılması gereken kontrol ve işlemler|
| --- | --- | --- | --- | --- | --- |
| İstenen Sayfa Numarasi | syfNo | N3 | İ | Cevapta dönecek sayfa numarası 1’den başlayarak artan değerlerle iletilmelidir. | Bu veri gönderildiği durumda, HHS İletilemeyen Olaylar listesine ait bu sayfadaki kayıtları gönderir. Gönderilmediğinde, HHS ilk sayfadaki kayıtları gönderir.  |


**Tablo 17: Olaylar nesnesi**  
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | 
|>Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.| 
|>>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)| 
|>> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	|Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.| 
|>Olaylar |	olaylar|	Kompleks: Olaylar	|Z|	 |
|>>Olay No|	 olayNo	|AN1..64|	Z	|Olaya ait evrensel tekil numaradır.|
|>>Olay Zamani	| olayZamani	| ISODateTime |	Z	| Olayın oluştuğu tarih bilgisidir. |
|>>Olay Tipi	| olayTipi	| AN1..36 |Z|TR.OHVPS.DataCode.OlayTip sıralı veri tiplerinden birini alır. |
|>>Kaynak Tipi|	kaynakTipi |	AN1..36|Z|	TR.OHVPS.DataCode.KaynakTip sıralı veri tiplerinden birini alır. |
|>>Kaynak Numarası|kaynakNo |AN1..128|Z|Güncellenen kaynağa ait HHS sistemindeki tekil tanımlayıcı.|
 
Kaynak numarasında gönderilen değer ile ilgili kaynağı sorgulayarak almak YÖS'ün insiyatifindedir.  

## Olay Dinleme Servisleri (ODS)

Olay Dinleme Servislerinde Idempotency kurallarının işletilmesine gerek bulunmamaktadır.

Olay Dinleme Servisine ait API Endpointleri aşağıdaki tabloda listelenmiştir.

#  Olay Dinleme Servisleri için Erişim Adresleri (Endpoints)

**Etki Alanı (Scope) =“olay_dinleme”** 
|No  |Kaynak |HTTP işlemi|Erişim Adresi |Zorunlu (Z)/ İsteğe Bağlı(İ)|Yetkilendirme Türü |İmzalama |Parametre |İstem Nesnesi |Yanıt Nesnesi |
| --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| 1 |olay-dinleme |POST |/olay-dinleme | Z |İstemci Kimlik Bilgileri |İmzalı İstek  | | | Olaylar|


## ADIM 1: Olay Dinleme

POST /olay-dinleme

Olay abonelik servisi ile abone olunan olaylar, olay dinleme servisi ile YÖS'e iletilir. 
Olaylar yanıt nesnesi içerisinde en fazla 100 kayıt gönderilmelidir.
Başarılı POST isteği sonucu HTTP 202 Accepted ile dönülmelidir. 


HHS'nin işlem hata aldığında, başarılı işlem olana kadar 20 kez deneme yapılması gerekmektedir. 
İlk istekle son istek arasında 2 saat olacak şekilde, zamana yayarak bu denemelerin yapılması gerekmektedir. (Exponential backoff policy uygulanması beklenmektedir. )
HHS kendi sistemini yormayacak şekilde, belirleyeceği kurallar dahilinde bu geliştirmeyi yapmalıdır. 


**Tablo 17: Olaylar nesnesi**  
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | 
|OlayIstegi|	olayIstegi|	Kompleks: olayIstegi	|Z|	 |
|>Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.| 
|>>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)| 
|>> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	| Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.| 
|>Olaylar |	olaylar|	Kompleks: Olaylar	|Z|	 |
|>>Olay Numarası|	 olayNo	|AN1..64|	Z	||
|>>Olay Zamanı	| olayZamani	| ISODateTime |	Z	| |
|>>Olay Tipi	| olayTipi	| AN1..36 |>|TR.OHVPS.DataCode.OlayTip sıralı veri tiplerinden birini alır. |
|>>Kaynak Tipi|	kaynakTipi |	AN1..36|Z|	TR.OHVPS.DataCode.KaynakTip sıralı veri tiplerinden birini alır. |
|>>Kaynak Numarası| kaynakNo|AN1..128|Z|Güncellenen kaynağa ait HHS sistemindeki tekil tanımlayıcı.|