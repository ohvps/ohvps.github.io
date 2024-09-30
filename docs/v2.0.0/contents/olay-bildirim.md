# 12.	Olay Bildirim <!-- omit in toc -->
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

Nezdinde ödeme hesabı bulunduran bazı hesap hizmeti sağlayıcılar(EPK, Ödeme Kuruluşları) müşterilerine ait hesapları, diğer HHS'lerdeki havuz hesaplarını kullanarak yönetiyor olabilir. Bu durum ilgili hesap hizmeti sağlayıcılarının, ÖHVPS kapsamında HHS olduğu rolde sunması gereken olay bildirim servisleri ile ilgili uyması gereken kuralları değiştirmemektedir. İlgili hesap hizmeti sağlayıcılarının standartlara uygun şekilde YÖS'lere bildirimleri yapması gerekmektedir.

YÖS'ler sahip oldukları rol özelinde olay abonelik servislerinden faydalanabilir. Bu yüzden olay bildirim etki alanı (scope) değerleri hesap_bilgisi ve/veya odeme_emri olarak belirlenmiştir. 


Olay Abonelik Servisine ait API Endpointleri aşağıdaki tabloda listelenmiştir.

#  Olay Abonelik Servisleri için Erişim Adresleri (Endpoints)

**Etki Alanı (Scope) =“hesap_bilgisi”  "odeme_emri"**  
|No  |Kaynak |HTTP işlemi|Erişim Adresi |Zorunlu (Z)/ İsteğe Bağlı(İ)|Yetkilendirme Türü |İmzalama |Parametre |İstem Nesnesi |Yanıt Nesnesi |
| --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| 1 |olay-abonelik |POST |/olay-abonelik | Z |İstemci Kimlik Bilgileri |İmzalı İstek ve Yanıt | |OlayAbonelikİstegi | OlayAbonelik|
| 2 |olay-abonelik |GET |/olay-abonelik| Z |İstemci Kimlik Bilgileri |İmzalı Yanıt | | -  | OlayAbonelik|
| 3 |olay-abonelik/{olayAbonelikNo} |PUT |/olay-abonelik/{olayAbonelikNo} | Z |İstemci Kimlik Bilgileri |İmzalı İstek ve Yanıt | |OlayAbonelik | OlayAbonelik|
| 4 | olay-abonelik/{olayAbonelikNo} |DELETE |/olay-abonelik/{olayAbonelikNo} | Z |İstemci Kimlik Bilgileri | - |- | -| -|
| 5 |olay-abonelik/{olayAbonelikNo}/iletilemeyen-olaylar |GET |/olay-abonelik/{olayAbonelikNo}/iletilemeyen-olaylar | Z |İstemci Kimlik Bilgileri | - | Sayfalama | |Olaylar|
| 6 | sistem-olay-dinleme   |POST | sistem-olay-dinleme   | Z |İstemci Kimlik Bilgileri | - | - |Olaylar | - |



## ADIM 1: Olay Aboneliğinin gerçekleştirilmesi

**POST /olay-abonelik**  

HHS'nin olay abonelik hizmeti sunduğu servistir.
YÖS, seçeceği olay-kaynak tipleri için bu servis aracılığı ile abone olabilir. HHS POST işlemi sonucunda, YÖS adına bir olay abonelik kaynağı oluşturur ve tekil tanımlayıcı olan olayAbonelikNo değerini döner. olayAbonelikNo üretilirken farklı YÖS'ler için aynı değer kullanılamaz. olayAbonelikNo evrensel tekil olmalıdır.  
1 YÖS'ün 1 HHS'de 1 adet abonelik kaydı olabilir.  
Başarılı POST isteği sonucu HTTP 201 cevabı ile iletilmelidir.   

YÖS tarafından daha önce oluşturulmuş olay abonelik kaydı varsa "HTTP 400 -TR.OHVPS.Business.InvalidContent -Kaynak Çakışması" hatasıyla uyarı mesajını döner.

Olay Abonelik kaydı oluşturmak isteyen YÖS'ün ODS API tanımı HHS tarafından kontrol edilmelidir. YÖS'ün tanımı olmaması halinde "HTTP 400-TR.OHVPS.Business.InvalidContent" hatası verilmelidir.

Olay Abonelik kaydı oluşturmak isteyen YÖS tarafından olay tipi ve kaynak tipi için iletilen değerler olması gereken sıralı veri tülerinden(TR.OHVPS.DataCode.OlayTip ve TR.OHVPS.DataCode.KaynakTip) farklı ise HHS tarafından  "HTTP 400-TR.OHVPS.Resource.InvalidFormat" hatası verilmelidir.

Abonelik üzerinde görüntüleme, güncelleme, silme işlemlerini gerçekleştirebilir.
YÖS'ün Aboneliği devam ettiği sürece; YÖS'ün açacağı Olay Dinleme API'sine, HHS tarafından abonelik kapsamında olay bildirimleri iletilir. 


BKM'nin sunacağı abonelik servisleri için HHS ve YÖS'lerin abonelik isteği yapmasına gerek bulunmamaktadır. BKM üretim ortamı tanımları yapılırken katılımcıları abonelik servislerine üye yapacaktır. BKM'nin sunacağı abonelik servislerinin olay tipi "HHS_YOS_GUNCELLENDI"dir. HHS ve YÖS API ile sunulan bilgilerde bir değişiklik olduğunda yapılacak olay bildirimlerini sağlar. 
Örneğin; HHS logo bilgilerinde yapılacak bir değişiklik sonrasında, YÖS'lere yapılacak bildirim ile logo bilgisini değişen HHS'nin hhsKod değerini iletir. YÖS, HHS API'yi  hhsKod ile çağırarak HHS'nin güncel bilgilerini alır. Güncel bilgiler ile kendi sistemini günceller. 

**OlayAbonelikIstegi nesnesi**

|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|HHS tarafından yapılması gereken kontrol ve işlemler|
| --- | --- | --- | --- | --- | --- |
|Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.| |
|>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)| |
|> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	|Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.| |
| Abonelik Tipleri  | abonelikTipleri | Kompleks: abonelikTipleri[Array][1..N] | Z |||
| > Olay Tipi  | olayTipi | AN1..36 | Z |YÖS abone olmak istediği olay tiplerini TR.OHVPS.DataCode.OlayTip sıralı veri tiplerinden değer ya da değerler ile doldurur.|"Olay Tipleri ve Kaynak Tipleri İlişkisi" tablosunda "Olay Bildirim Yapan" kolonu "HHS" olan olay tipleri ile veri girişine izin verilir.|
| > Kaynak Tipi  | kaynakTipi | AN1..36 | Z | Olay tiplerinin tanımlanabildiği kaynak listesi bulunmaktadır. Bu listeye uygun kaynak tipleri iletilmelidir. |HHS, YÖS API üzerinden YÖS'ün rollerini alarak uygun kaynak tiplerine kayıt olmasını sağlar.|
  
    
**OlayAbonelik nesnesi**
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	| 
| --- | --- | --- | --- | --- | 
| Olay Abonelik Numarası  | olayAbonelikNo |AN1..64 | Z | YÖS özelinde oluşturulan tekil tanımlayıcıdır. Farklı YÖS'ler için aynı değer kullanılamaz.|  
| Olay Abonelik Oluşturulma zamanı  | olusturmaZamani | ISODateTime | Z | Olay Abonelik nesnesinin oluşturulma zaman damgası |
| Olay Abonelik Güncelleme zamanı  | guncellemeZamani | ISODateTime | Z | Olay Abonelik nesnesinin güncelleme zaman damgası iletilebilir. İlk değeri olay abonelik oluşturma zamanı bilgisidir.|
|Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.| 
|>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)| 
|> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	|Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.| 
| Abonelik Tipleri  | abonelikTipleri | Kompleks: abonelikTipleri[Array][1..N] | Z | OlayAbonelikIstegi nesnesi içerisinde iletilen değerlerin yanıt içerisinde dönmesi beklenmektedir.|
| > Olay Tipi  | olayTipi | AN1..36 | Z ||
| > Kaynak Tipi  | kaynakTipi | AN1..36 | Z ||
  
   
     
**Olay Tipleri ve Kaynak Tipleri İlişkisi**
<br>* Anlık : Olay gerçekleştikten sonra maksimum 5 saniye içerisindeki zaman
|Olay Tipleri |YÖS Rolü	|Kaynak Tipleri	|Olay Oluşturulma durumu	|KaynakNo 	| Asıl verinin elde edileceği API |Olay Bildirimini Yapan| Olay Bildirim Zamanı | Retry Policy |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KAYNAK_GUNCELLENDI | ÖBH |   ODEME_EMRI | Tüm ödeme durum değişikliklerinde | odmEmrNo |  GET /odeme-emri/{odemeEmriNo} | HHS | *Anlık|30 Dakika - 3 Deneme |
|   | ÖBH | ILERI_TARIHLI_ODEME_EMRI_RIZASI |Rıza iptal detay kodu ‘02’ : Kullanıcı İsteği ile HHS üzerinden İptal durumunda| rizaNo | GET /ileri-tarihli-odeme-emri-rizasi/{rizaNo}| HHS |*Anlık|30 Dakika - 3 Deneme|
|   | ÖBH |   ILERI_TARIHLI_ODEME_EMRI | Tüm ödeme durum değişikliklerinde | odmEmrNo |  GET /ileri-tarihli-odeme-emri/{odemeEmriNo} | HHS | *Anlık|30 Dakika - 3 Deneme |
|   | ÖBH | DUZENLI_ODEME_EMRI_RIZASI |Rıza iptal detay kodu ‘02’ : Kullanıcı İsteği ile HHS üzerinden İptal durumunda| rizaNo | GET /duzenli-odeme-emri-rizasi/{rizaNo}| HHS |*Anlık|30 Dakika - 3 Deneme|
|   | ÖBH | DUZENLI_ODEME_PLANI |Düzenli ödeme planı içerisinde yer alan odmDrm alanı için değişiklik olduğu durumda| talimatNo | /duzenli-odeme-emri/{talimatNo}/odeme-plani| HHS |*Anlık|30 Dakika - 3 Deneme|
|   | HBH | HESAP_BILGISI_RIZASI |Rıza iptal detay kodu ‘02’ : Kullanıcı İsteği ile HHS üzerinden İptal durumunda| rizaNo | GET /hesap-bilgisi-rizasi/{rizaNo}| HHS |*Anlık|30 Dakika - 3 Deneme|
|   | HBH | BAKIYE | Bakiye nesnesindeki tutarla ilgili bir bilgi değiştiğinde ve HBH rızası içerisinde "06-Anlık Bakiye Bildirimi" izin türü varsa oluşturulur.<br><br>Mevcutta alınmış rızalar için  bakiye kaynak tipi özelinde 06 izin türü gerektiğinden; mevcut rızanın yenilenmesine dair müşteriye bilgilendirme yapılarak 06 izin türünü kapsayan yeni rıza alınması süreci YÖS tarafından gerçekleştirilebilir.<br><br>Bloke tutar değişikliği için olay oluşturma ve bildirimi HHS inisiyatifindedir.<br><br>KrdHsp içerisinde yer alan kulKrdTtr değerinin değiştiği durumda olay bildirim gönderilmesi gerekmektedir.| hspRef |  GET /hesaplar/{hspRef}/bakiye | HHS | Maksimum 10 dakika içerisinde | Retry policy uygulanmamalıdır. İlk istek gönderilemediği durumda İletilemeyen Olaylara eklenmelidir.|
|   | HBH |   COKLU_ISLEM_TALEBI ( bulk-data)   |İlgili API İlke ve kurallarına eklendiğinde güncellenecektir. |  | | HHS | |30 Dakika - 3 Deneme|
| AYRIK_GKD_BASARILI | ÖBH |  ODEME_EMRI_RIZASI   | HHS sisteminde ÖHK kendini doğruladığında rıza oluşturulur. YÖS'e rıza oluşturulduğuna dair bildirim yapılır. YÖS yetkod değerini sorgulama sonucunda elde eder. | RizaNo | GET /yetkilendirme-kodu?rizaNo={rizaNo}}&rizaTip=O| HHS | *Anlık|1 Dakika 3 kez|
|   |  HBH | HESAP_BILGISI_RIZASI  | HHS sisteminde ÖHK kendini doğruladığında rıza oluşturulur. YÖS'e rıza oluşturulduğuna dair bildirim yapılır. YÖS yetkod değerini sorgulama sonucunda elde eder.   | RizaNo | GET /yetkilendirme-kodu?rizaNo={rizaNo}&rizaTip=H | HHS | *Anlık|1 Dakika 3 kez|
|   | ÖBH |  ILERI_TARIHLI_ODEME_EMRI_RIZASI   | HHS sisteminde ÖHK kendini doğruladığında rıza oluşturulur. YÖS'e rıza oluşturulduğuna dair bildirim yapılır. YÖS yetkod değerini sorgulama sonucunda elde eder. | RizaNo | GET /yetkilendirme-kodu?rizaNo={rizaNo}}&rizaTip=I| HHS | *Anlık|1 Dakika 3 kez|
|   | ÖBH |  DUZENLI_ODEME_EMRI_RIZASI   | HHS sisteminde ÖHK kendini doğruladığında rıza oluşturulur. YÖS'e rıza oluşturulduğuna dair bildirim yapılır. YÖS yetkod değerini sorgulama sonucunda elde eder. | RizaNo | GET /yetkilendirme-kodu?rizaNo={rizaNo}}&rizaTip=D| HHS | *Anlık|1 Dakika 3 kez|
| AYRIK_GKD_BASARISIZ | ÖBH |  ODEME_EMRI_RIZASI   | HHS sisteminde ÖHK kendini doğruladıktan sonra yaptığı kontroller neticesinde logine izin vermez ise YÖS'e bildirim yapılır. YÖS rıza durumunu sorgulayarak işlemin neden iletilmediğine dair bilgi edinebilir.| RizaNo | GET /odeme-emri-rizasi/{RizaNo}| HHS | *Anlık|  1 Dakika 3 kez|
|   |  HBH | HESAP_BILGISI_RIZASI  | HHS sisteminde ÖHK kendini doğruladıktan sonra yaptığı kontroller neticesinde logine izin vermez ise YÖS'e bildirim yapılır. YÖS rıza durumunu sorgulayarak işlemin neden iletilmediğine dair bilgi edinebilir. | RizaNo | GET /hesap-bilgisi-rizasi/{RizaNo} | HHS | *Anlık|1 Dakika 3 kez|
|   | ÖBH |  ILERI_TARIHLI_ODEME_EMRI_RIZASI   | 	HHS sisteminde ÖHK kendini doğruladıktan sonra yaptığı kontroller neticesinde logine izin vermez ise YÖS'e bildirim yapılır. YÖS rıza durumunu sorgulayarak işlemin neden iletilmediğine dair bilgi edinebilir. | RizaNo | GET /yetkilendirme-kodu?rizaNo={rizaNo}}&rizaTip=I| HHS | *Anlık|1 Dakika 3 kez|
|   | ÖBH |  DUZENLI_ODEME_EMRI_RIZASI   | 	HHS sisteminde ÖHK kendini doğruladıktan sonra yaptığı kontroller neticesinde logine izin vermez ise YÖS'e bildirim yapılır. YÖS rıza durumunu sorgulayarak işlemin neden iletilmediğine dair bilgi edinebilir. | RizaNo | GET /yetkilendirme-kodu?rizaNo={rizaNo}}&rizaTip=D| HHS | *Anlık|1 Dakika 3 kez|
| HHS_YOS_GUNCELLENDI |   |    |BKM sistemi tarafından üretilecek olayları dinlemek için kullanılacak kaynak tipidir. YÖS ve HHS'lerin BKM'ye abonelik oluşturmasına gerek bulunmamaktadır. BKM HHS ve YÖS üretim ortamı tanımı yaparken aboneliklerini başlatacaktır.  <br>(HHS yaygınlaştırma durumundayken de aboneliği başlatılacaktır.) | | | HHS | |
|  | YÖS | HHS  |HHS bilgilerinde değişiklik olduğunda, YÖS'ün hhsKod ile sorgulama yapması ve değişen bilgiyi güncellemesi beklenmektedir.| hhsKod | GET /hhs/{hhsKod}| BKM |*Anlık| 5 Dakika - 3 Deneme |
|  | HHS | YOS  |YÖS bilgilerinde değişiklik olduğunda, HHS'nin yosKod ile sorgulama yapması ve değişen bilgiyi güncellemesi beklenmektedir. | yosKod | GET /yos/{yosKod} | BKM | *Anlık| 5 Dakika - 3 Deneme|
<br>* Anlık : Olay gerçekleştikten sonra maksimum 5 saniye içerisindeki zaman

## ADIM 2: Olay Aboneliğinin güncellenmesi

PUT	olay-abonelik/{olayAbonelikNo}

YÖS'ün olay aboneliğine ait abonelik tiplerini güncelleyebildiği servistir. Olay aboneliği oluşturulduğu zaman HHS tarafından iletilen olayAbonelikNo aracılığı ile güncelleme işlemi yapılır. YÖS abone olmak istediği olay-kayıt tiplerininin son halini güncelleme servisi ile HHS'ye iletir. HHS bu bilgilerle eski abonelik tiplerinin yerini değiştirir. 

Başarılı PUT isteği sonucu HTTP 200 cevabı ile iletilmelidir. 

**OlayAbonelikIstegi nesnesi**
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|HHS tarafından yapılması gereken kontrol ve işlemler|
| --- | --- | --- | --- | --- | --- |
| Olay Abonelik Numarası  | olayAbonelikNo |AN1..64 | Z | YÖS özelinde oluşturulan tekil tanımlayıcıdır. Farklı YÖS'ler için aynı değer kullanılamaz. |  HHS geçerli bir olay abonelik numarası olduğunun kontrolünü yapar. |
|Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.| |
|>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)| |
|> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	|Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.| |
|Abonelik Tipleri  | abonelikTipleri | Kompleks: abonelikTipleri[Array][1..N] | Z |HHS Sisteminde, YÖS'ün eski abonelikleri yeni aboneliklerle güncellenmelidir.||
| > Olay Tipi  | olayTipi | AN1..36 | Z |YÖS abone olmak istediği olay tiplerini TR.OHVPS.DataCode.OlayTip sıralı veri tiplerinden değer ya da değerler ile doldurur.  |"Olay Tipleri ve Kaynak Tipleri İlişkisi" tablosunda "Olay Bildirim Yapan" kolonu "HHS" olan olay tipleri ile veri girişine izin verilir.<br> Olay tipi AYRIK_GKD_BASARILI ve AYRIK_GKD_BASARISIZ için, YÖS'ün ODS API'yi sunması zorunludur. HHS, bu olay tipleri özelinde YÖS API üzerinden YÖS'ün bu API'yi sunduğunu kontrol eder ve eğer sunmuyor ise TR.OHVPS.Business.InvalidContent hatası dönerek kayıt işlemini gerçekleştirmez.|
| > Kaynak Tipi  | kaynakTipi | AN1..36 | Z | Olay tiplerinin tanımlanabildiği kaynak listesi bulunmaktadır. Bu listeye uygun kaynak tipleri iletilmelidir. |HHS, YÖS API üzerinden YÖS'ün rollerini alarak uygun kaynak tiplerine kayıt olmasına izin verir.|
  
    
**OlayAbonelik nesnesi**
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	| 
| --- | --- | --- | --- | --- |  
| Olay Abonelik Numarası  | olayAbonelikNo |AN1..64 | Z | YÖS özelinde oluşturulan tekil tanımlayıcıdır. Farklı YÖS'ler için aynı değer kullanılamaz.|  
| Olay Abonelik Oluşturulma zamanı  | olusturmaZamani | ISODateTime | Z | Olay Abonelik nesnesinin oluşturulma zaman damgası |
| Olay Abonelik Güncelleme zamanı  | guncellemeZamani | ISODateTime | Z | Olay Abonelik nesnesinin güncelleme zaman damgası|
|Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.| 
|>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)| 
|> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	|Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.| 
|Abonelik Tipleri  | abonelikTipleri | Kompleks: abonelikTipleri[Array][1..N] | Z | OlayAbonelikIstegi nesnesi içerisinde iletilen değerlerin yanıt içerisinde dönmesi beklenmektedir.|
| > Olay Tipi  | olayTipi | AN1..36 | Z |OlayAbonelikIstegi nesnesi içerisinde iletilen değerlerin yanıt içerisinde dönmesi beklenmektedir.|
| > Kaynak Tipi  | kaynakTipi | AN1..36 | Z | OlayAbonelikIstegi nesnesi içerisinde iletilen değerlerin yanıt içerisinde dönmesi beklenmektedir.|

## ADIM 3: Olay Aboneliğinin sorgulanması  

GET /olay-abonelik  

YÖS olay abonelik bilgilerini sorgulamak isteyebilir. HHS, YÖS'e ait aktif durumdaki abonelik bilgisini iletir. 
Başarılı GET sonucu HTTP 200 kodu ile iletilmelidir. 


**OlayAbonelik nesnesi**
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	| 
| --- | --- | --- | --- | --- |   
| Olay Abonelik Numarası  | olayAbonelikNo |AN1..64 | Z | YÖS özelinde oluşturulan tekil tanımlayıcıdır. Farklı YÖS'ler için aynı değer kullanılamaz.|  
| Olay Abonelik Oluşturulma zamanı  | olusturmaZamani | ISODateTime | Z | Olay Abonelik nesnesinin oluşturulma zaman damgası |
| Olay Abonelik Güncelleme zamanı  | guncellemeZamani | ISODateTime | Z | Olay Abonelik nesnesinin güncelleme zaman damgası|
|Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.| 
|>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)| 
|> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	|Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.| 
| Abonelik Tipleri  | abonelikTipleri | Kompleks: abonelikTipleri[Array][1..N] | Z | YÖS'ün abone olduğu olay - kaynak listesini döner. |
| > Olay Tipi  | olayTipi | AN1..36 | Z |TR.OHVPS.DataCode.OlayTip sıralı veri tiplerinden değerler içerir.  |
| > Kaynak Tipi  | kaynakTipi | AN1..36 | Z |TR.OHVPS.DataCode.KaynakTip sıralı veri tiplerinden değerler içerir. |


## ADIM 4: Olay Aboneliğinin iptali


DELETE /olay-abonelik/olayAbonelikNo

YÖS'ün abonelik kaydını silmesi için HHS'nin sunduğu servistir.  Başarılı silme işlemi sonucu HTTP 204 ile YÖS'e iletilir.

## ADIM 5: Olay Aboneliğinin İletilemeyen Olayları

GET /iletilemeyen-olaylar 

HHS kaynaklar üzerinde oluşacak olayları YÖS'e POST/olay-dinleme servisi ile gönderim sağlamaktadır. Bu gönderim belli bir yeniden gönderim politası (retry-policy) ile yapılmalıdır.  Ancak yine de iletilemeyen olaylar olursa (YÖS servisinden HTTP 202 alamama durumu) YÖS'e iletilemeyen-olaylar servisi üzerinden sunulmalıdır. Yani yeniden gönderim politikası sonunda gönderilemeyen olaylar bu servis ile sunulmalıdır.  

Aynı kaynak numarası ile aynı olay-kaynak tipinde, 1 YÖS’e ait, 1 adet iletilemeyen olay kaydı olabilir.

Bu serviste 1 gün öncesinden sorgu anına kadar tüm kayıtlarına ait iletilemeyen olaylar listelenmelidir. 
Örnek sorgu zamanı : 2023-04-06T15:14:00+03:00 
HHS'nin sunacağı veri 2023-04-05T00:00:00+03:00  ile 2023-04-06T15:14:00+03:00 arasında olmalıdır.
Sıralama yönü olay tarihine göre artan şekilde olmalıdır. Sayfalama 100'er kayıt dönülerek yapılmalıdır. 

YÖS tarafından iletilemeyen olaylar isteği 10 dakikada bir olacak şekilde yapılabilir. HHS bu limite uygun işlem kısıtı uygulayabilir.

İşlem Sorgu Örneği GET İşlem Sorgu Örneği  : /iletilemeyen-olaylar?syfNo=1&olyZmnBslTrh=2024-01-08T16:42:00+03:00&olyZmnBtsTrh=2024-01-09T17:09:00+03:00

Örneğin;

olyZmnBslTrh : 07/01/2024 10:00:00+03:00
<br>olyZmnBtsTrh : 09/01/2024 16:00:00+03:00
<br>Sorgu Zamanı : 09/01/2024 10:15:00+03:00

Yanıt içerisinde yer alan veriye ait tarih aralığı : 08/01/2024 00:00:00+03:00 - 09/01/2024 10:15:00+03:00 olmalıdır.

Başlangıç ve bitiş zaman aralığı örnekte yer alan şekilde seçilse dahi ilgili servis yanıtı için öncelikle sorgu zamanına bakılıp 1 gün öncesinden sorgu anına kadar tüm kayıtların iletilemeyen olaylar içerisinde listelenmesi sağlanmalıdır.

İlgili tarih aralığında uygun veri olmaması halinde yanıt gövdesi boş olacak şekilde dönülmelidir.

**İletilemeyen Olaylar Sorgulama İsteği Sorgu Parametreleri**  

|Alan Adı |Parametre Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|HHS tarafından yapılması gereken kontrol ve işlemler|
| --- | --- | --- | --- | --- | --- |
| İstenen Sayfa Numarasi | syfNo | N3 | İ | Cevapta dönecek sayfa numarası 1’den başlayarak artan değerlerle iletilmelidir. | Bu veri gönderildiği durumda, HHS İletilemeyen Olaylar listesine ait bu sayfadaki kayıtları göndermelidir. Gönderilmediğinde, HHS ilk sayfadaki kayıtları göndermelidir.  |
| Olay Zamanı Başlangıç Tarihi | olyZmnBslTrh | ISODateTime | İ | Sorgulanacak Olay Zamanına ait başlangıç tarihi| HHS'ler iletilemeyen olaylar listesi dönüşünü bu kritere göre filtreleyerek iletmek zorundadır. YÖS tarafından tetiklenen sorgularda; olyZmnBslTrh iletilmediği durumda ya da 1 gün öncesinin başlangıç saatine göre daha geri bir zaman dilimi gönderildiğinde, başlangıç zamanı(olyZmnBslTrh) değeri sorgu zamanından 1 gün öncesine ait günün başlangıç zamanı olarak kabul edilmelidir. |
| Olay Zamanı Bitiş Tarihi | olyZmnBtsTrh | ISODateTime | İ | Sorgulanacak Olay Zamanına ait bitiş tarihi| HHS'ler iletilemeyen olaylar listesi dönüşünü bu kritere göre filtreleyerek iletmek zorundadır. YÖS tarafından tetiklenen sorgularda; olyZmnBtsTrh iletilmediği durumda ya da sorgu zamanından daha ileri bir zaman dilimi gönderildiğinde, bitiş zamanı(olyZmnBtsTrh) değeri sorgu zamanı olarak kabul edilmelidir.  |

**Tablo 17: Olaylar nesnesi**  
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | 
|Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.| 
|>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)| 
|> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	|Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.| 
|Olaylar |	olaylar|	Kompleks: Olaylar	|Z|	 |
|>Olay No|	 olayNo	|AN1..64|	Z	|Olaya ait evrensel tekil numaradır.|
|>Olay Zamani	| olayZamani	| ISODateTime |	Z	| Olayın oluştuğu tarih bilgisidir. |
|>Olay Tipi	| olayTipi	| AN1..36 |Z|TR.OHVPS.DataCode.OlayTip sıralı veri tiplerinden birini alır. |
|>Kaynak Tipi|	kaynakTipi |	AN1..36|Z|	TR.OHVPS.DataCode.KaynakTip sıralı veri tiplerinden birini alır. |
|>Kaynak Numarası|kaynakNo |AN1..128|Z|Güncellenen kaynağa ait HHS sistemindeki tekil tanımlayıcı.|
 
Kaynak numarasında gönderilen değer ile ilgili kaynağı sorgulayarak almak YÖS'ün insiyatifindedir.  


## ADIM 6: Sistem Olay Dinleme

POST /sistem-olay-dinleme

HHS'lerin sistem olaylarını dinleme amacıyla açması gereken endpoint bilgisidir. 

YÖS API içerisinde yapılan değişikliklerde, BKM tarafından HHS'lere olay bildirimlerini yapılır. 

Olaylar yanıt nesnesi içerisinde 1 adet kayıt yer almalıdır. 

Başarılı POST isteği sonucu HTTP 202 Accepted kodu ile dönülmelidir.

HHS'den başarılı yanıt alınamadığı durumda, 5 dakika aralıklarla 3 kez deneme yapılacaktır. Hata alınmaya devam edilmesi durumunda başka bir aksiyon alınmayacaktır. 

## Olay Dinleme Servisleri (ODS)

YÖS sunacağı Olay Dinleme Servisi ile hem HHS'den hem de BKM'den gelen olayların bildirimini dinleyebilir. YÖS'ler HHS'de yer alan olay abonelik kayıtlarını iptal edebilir ancak BKM Sistem Olay Dinleme servisinin ileteceği bildirimlerin alınması zorunlu olduğundan ODS API her zaman aktif olmalıdır.

HHS'den gelecek olay bildirimlerini olay-dinleme endpointi ile dinlerken, BKM'den gelecek olay bildirimlerini sistem-olay-dinleme endpointi ile dinlemelidir.

Olay Dinleme Servislerinde Idempotency kurallarının işletilmesine gerek bulunmamaktadır.

Olay Dinleme Servisine ait API Endpointleri aşağıdaki tabloda listelenmiştir.


#  Olay Dinleme Servisleri için Erişim Adresleri (Endpoints)

**Etki Alanı (Scope) =“olay_dinleme”** 
|No  |Kaynak |HTTP işlemi|Erişim Adresi |Zorunlu (Z)/ İsteğe Bağlı(İ)|Yetkilendirme Türü |İmzalama |Parametre |İstem Nesnesi |Yanıt Nesnesi |
| --- |--- |--- |--- |--- |--- |--- |--- |--- |--- |
| 1 |olay-dinleme |POST |/olay-dinleme | Z |İstemci Kimlik Bilgileri |İmzalı İstek  | -  |Olaylar | -  |
| 2 |sistem-olay-dinleme |POST |/olay-dinleme | Z |İstemci Kimlik Bilgileri |-  | -  |Olaylar | -  |


## ADIM 1: Olay Dinleme

POST /olay-dinleme

Olay abonelik servisi ile abone olunan olaylar, olay dinleme servisi ile YÖS'e iletilir. 
Olaylar yanıt nesnesi içerisinde en fazla 100 kayıt gönderilmelidir.
Başarılı POST isteği sonucu HTTP 202 Accepted ile dönülmelidir. 


HHS'nin işlem hata aldığında, başarılı işlem olana kadar 3 kez deneme yapılması gerekmektedir. 
İlk istekle son istek arasında 30 dakika olacak şekilde, zamana yayarak bu denemelerin yapılması gerekmektedir. (Exponential backoff policy uygulanması beklenmektedir. )
HHS kendi sistemini yormayacak şekilde, belirleyeceği kurallar dahilinde bu geliştirmeyi yapmalıdır. 


**Tablo 17: Olaylar nesnesi**  
|Alan Adı |JSON Alan Adı	|Format	|Zorunlu / Koşullu /  İsteğe bağlı	|Açıklama	|
| --- | --- | --- | --- | --- | 
|>Katılımcı Bilgisi|	katilimciBlg|	Kompleks:KatilimciBilgisi	|Z|	Katılımcılara atanmış kod bilgileridir.| 
|>>Hesap Hizmeti Sağlayıcısı Kodu|	hhsKod|	AN4|	Z	|Hesap Hizmeti Sağlayıcısının kodudur. (Nezdinde ÖH bulunduran kuruluş kodu. Örneğin, Banka, Elektronik Para Kuruluşu ve Ödeme Kuruluşu)| 
|>> Yetkili Ödeme Hizmeti Sağlayıcısı Kodu	|yosKod	|AN4|	Z	| Yetkili Ödeme Hizmeti Sağlayıcısı (YÖS) kodudur.| 
|>Olaylar |	olaylar|	Kompleks: Olaylar	|Z|	 |
|>>Olay Numarası|	 olayNo	|AN1..64|	Z	| Olaya ait atanmış tekil kimlik numarası|
|>>Olay Zamanı	| olayZamani	| ISODateTime |	Z	| Olayın oluşma zamanı |
|>>Olay Tipi	| olayTipi	| AN1..36 |>|TR.OHVPS.DataCode.OlayTip sıralı veri tiplerinden birini alır. |
|>>Kaynak Tipi|	kaynakTipi |	AN1..36|Z|	TR.OHVPS.DataCode.KaynakTip sıralı veri tiplerinden birini alır. |
|>>Kaynak Numarası| kaynakNo|AN1..128|Z|Güncellenen kaynağa ait HHS sistemindeki tekil tanımlayıcı.|

## ADIM 2:  Sistem Olay Dinleme

POST /sistem-olay-dinleme

YÖS'lerin sistem olaylarını dinleme amacıyla açması gereken endpoint bilgisidir.

HHS API içerisinde yapılan değişikliklerde, BKM tarafından YÖS'lere olay bildirimlerini yapılır.

Olaylar yanıt nesnesi içerisinde 1 adet kayıt yer almalıdır.

Başarılı POST isteği sonucu HTTP 202 Accepted kodu ile dönülmelidir.

YÖS'ten başarılı yanıt alınamadığı durumda, 5 dakika aralıklarla 3 kez deneme yapılacaktır. Hata alınmaya devam edilmesi durumunda başka bir aksiyon alınmayacaktır.

