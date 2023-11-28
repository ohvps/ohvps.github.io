
**GENEL BiLGİLER:**


Ödeme Hizmetleri Veri Paylaşım Servislerinin kullanıcıları olacak HHS ve YÖS’ler ohvps.github.io adresinde yayınlanan en güncel sürüme ait API dokümantasyonunu incelemeleri gerekmektedir. 
Geliştirdikleri sürüme ait API’lerin nasıl çalıştıklarını görmek istediklerinde “Deney Alanı” ve “BKM Simülatör Uygulaması” olmak üzere iki farklı ortam üzerinden gözlem yapabilirler. 
Deney Alanı, katılımcılara, tarayıcı üzerinden statik verilerle işlem başlatarak, dönen yanıtı inceleme imkanı sunar.   

BKM simülatör uygulaması ise hem HHS hem de YÖS katılımcılarının; test uygulamalarını uçtan uca test edebilebileceği bir ortamdır. Simülatör uygulaması üzerinden dinamik veri girişi yaparak mock servisler ile zorunlu senaryoların tümünün simülasyonu gerçekleştirilebilir. Simülatör ortamındaki API’ler, üretim ortamının bir kopyası olacak şekilde oluşturulmuştur ve kurumların üretim ortamına hazır hale gelmelerine aracılık eder. Pürüzsüz bir üretim ortamı geçişi imkanı sağlar ve ÖHVPS BKM teknik sertifikasyonu geçmek için koşulması gereken sertifikasyon senaryoları BKM simülatör üzerinden sunulmaktadır. BKM simülatör uygulaması ücretli bir uygulamadır. Kullanmak için ohvps@bkm.com.tr adresine taleplerinizi iletmeniz gerekmektedir. 

Deney Alanı ile sunulan imkanlar şu şekildedir: 

- Servisler durum bilgisi içermeyecek şekilde (stateless) olarak sunulmaktadır. 
- Güçlü Kimlik Doğrulama akışlarında kurum özelinde oluşturulan yetkilendirme kimlik bilgilerine ihtiyaç duyulmamaktadır. 
- Yanıt veri kümesi statiktir. Servislere yapılan istekler, her zaman aynı yanıtı dönmektedir. 
- Yeni oluşturma, güncelleme, silme işlemleri kaynak veri üzerinde değişiklik yapmamaktadır.
- Deney alanı genelin kullanımına açıktır. Üyelik kaydı olmaksızın Deney Alanı üzerinden API incelemeleri gerçekleştirilebilmektedir.

API dokümanında yapılacak minor değişiklikler deney alanına yansıtılmayacaktır. 