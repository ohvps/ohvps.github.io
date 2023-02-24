<h1> 2.	Kapsam ve Dayanak</h1>  

12 Kasım 2019’da güncellenen “**6493 sayılı Ödeme ve Menkul Kıymet Mutabakat Sistemleri, Ödeme Hizmetleri ve Elektronik Para Kuruluşları Hakkında Kanun**”un (Kanun) 12’nci maddesine yeni eklenen ve **Ödeme Hizmetleri Direktifi 2**'de (Payment Services Directive 2, PSD2) bulunan iki yeni ödeme hizmeti aşağıdaki gibi tanımlanmıştır (Şekil-1: Ödeme Hizmetleri Veri Paylaşım Servisleri):
- **Ödeme Emri Başlatma Hizmeti**: ÖHK’nın isteği üzerine başka bir ödeme hizmeti sağlayıcısında bulunan **ödeme hesabıyla** ilgili sunulan ödeme emri başlatma hizmeti [Madde 12, birinci fıkra, (f) bendi]
- **Hesap Bilgisi Hizmeti**: ÖHK’nın onayının alınması koşuluyla, ÖHK’nın ödeme hizmeti sağlayıcıları nezdinde bulunan bir veya daha fazla **ödeme hesabına** ilişkin konsolide edilmiş bilgilerin çevrim içi platformlarda sunulması hizmeti [Madde 12, birinci fıkra, (g) bendi]  


<img src="./images/Sekil1-ohvps-tanitim.png" width="50%" >  

**Şekil 1: Ödeme Hizmetleri Veri Paylaşım Servisleri (ÖHVPS)- tanıtım**  

**Kanunun 14/A maddesinin ikinci fıkrasına göre**, Kanunun 12’nci maddesinin birinci fıkrasının (f) veya (g) bentlerinde yer alan ödeme hizmetleri ile ilgili işlemlerin yürütülmesine ilişkin usul ve esaslar ile taraflarca uyulması gereken teknik ve operasyonel gereklilikler ikincil düzenlemeler uyarınca Türkiye Cumhuriyet Merkez Bankası (TCMB) tarafından belirlenir. Kanunun 12’nci maddesinin birinci fıkrasının (f) veya (g) bentlerinde yer alan ödeme hizmetlerinde kullanılan veri paylaşım servisleri **ödeme hizmetleri veri paylaşım servisleri (ÖHVPS)** olarak adlandırılmaktadır.  

**Ödeme Hizmetleri ve Elektronik Para İhracı ile Ödeme Hizmeti Sağlayıcıları Hakkında Yönetmelik’in (Yönetmelik) 59’uncu maddesinin birinci fıkrası uyarınca hazırlanan bu belgede söz konusu ödeme hizmetlerini sunacak ödeme hizmeti sağlayıcısının, ödeme hesabının bulunduğu ödeme hizmeti sağlayıcısının, varsa ilgili diğer tarafların ve bu hizmetlerin sunulması için taraflar arasında kurulacak bağlantının teknik ve operasyonel gereklilikleri açıklanmaktadır.**  

Düzenlemeler kapsamında yetkilendirilen üçüncü taraf hizmet sağlayıcısı **(Yetkili Ödeme Hizmeti Sağlayıcısı, YÖS)**, ödeme hizmeti kullanıcılarının **Hesap Hizmeti Sağlayıcıları (HHS)** nezdindeki ödeme hesaplarına ulaşarak ödeme emri başlatma ve hesap bilgisi sağlama hizmetlerinden (ödeme hizmetleri veri paylaşım servislerinden) faydalanmasına aracılık eder. Ödeme hizmetleri veri paylaşım servisleri kapsamında iki tip YÖS bulunmaktadır: **1) Hesap Bilgisi Hizmeti Sağlayıcısı (HBHS) ve 2) Ödeme Emri Başlatma Hizmeti Sağlayıcısı (ÖBHS).**  

Hesap Bilgisi Hizmeti Sağlayıcısı (HBHS) ÖHK’nın farklı Hesap Hizmeti Sağlayıcıları (HHS) nezdindeki hesaplarının bilgilerini derleyerek çevrim içi platformlarda *toplu şekilde* sunar. Ödeme Emri Başlatma Hizmeti Sağlayıcısı (ÖBHS) ise talebi üzerine ÖHK’nın HHS’de bulunan ödeme hesabından ödeme işlemi başlatır.   

ÖHVPS’nin üst düzey gösterimi Şekil-2’de verilmiştir.  

<img src="./images/sekil2-ohvps-ustduzey-gosterim.png" width="50%" >  

**Şekil 2: Ödeme Hizmetleri Veri Paylaşım Servisleri (ÖHVPS) -üst düzey gösterim**  

Ödeme Hizmetleri Veri Paylaşım Servislerinin HHS’ler tarafından **BKM API Geçidi** vasıtasıyla sunulduğu uygulama mimarisi ise Şekil-3’te sunulmuştur.  

<img src="./images/sekil3-ohvps-bkm.png" width="50%" > 
   
**Şekil 3: ÖHVPS'nin BKM API Geçidi vasıtasıyla sunumu**