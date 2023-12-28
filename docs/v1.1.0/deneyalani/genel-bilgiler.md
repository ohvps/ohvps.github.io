
**GENEL BiLGİLER:**


Ödeme Hizmetleri Veri Paylaşım Servisleri’nin HHS ve YÖS statüsündeki katılımcılarının ohvps.github.io adresinde yayınlanan en güncel sürüme ait API İlke ve Kuralları dokümantasyonunu incelemeleri ve geliştirmelerini bu bilgiler ışığında yürütmeleri gerekmektedir.  

API İlke ve Kuralları dokümanına istinaden geliştirmelerini yapan/yapacak olan katılımcılar geliştirdikleri sürüme ait API’lerin nasıl çalıştıklarını görmek istediklerinde “Deney Alanı” üzerinden gözlem yapabilirler. Bu kapsamda, Deney Alanı katılımcılara tarayıcı üzerinden statik verilerle işlem başlatarak, dönen yanıtı inceleme imkanı sunar.

Deney Alanı ile sunulan imkanlar şu şekildedir: 

- Servisler durum bilgisi içermeyecek şekilde (stateless) olarak sunulmaktadır.
- Güçlü Kimlik Doğrulama akışlarında kurum özelinde oluşturulan yetkilendirme kimlik bilgilerine ihtiyaç duyulmamaktadır.
- Yanıt veri kümesi statiktir. Servislere yapılan istekler, her zaman aynı yanıtı dönmektedir.
- Yeni oluşturma, güncelleme, silme işlemleri kaynak veri üzerinde değişiklik yapmamaktadır.
- Deney alanı genelin kullanımına açıktır. Üyelik kaydı olmaksızın Deney Alanı üzerinden API incelemeleri gerçekleştirilebilmektedir.
- API dokümanında yapılacak minor değişiklikler deney alanına yansıtılmayacaktır.


Not: Deney Alanı’nın kapsamı genişletilmiş versiyonu – “BKM ÖHVPS Simülatör” uygulaması hem HHS hem de YÖS katılımcılarının; test uygulamalarını uçtan uca test edebilebileceği bir ortamdır. Simülatör uygulaması üzerinden dinamik veri girişi yaparak mock servisler ile zorunlu senaryoların tümünün simülasyonu gerçekleştirilebilir. Simülatör ortamındaki API’ler, üretim ortamının bir kopyası olacak şekilde oluşturulmuştur ve kurumların üretim ortamına hazır hale gelmelerine aracılık eder. Bu uygulama, pürüzsüz bir üretim ortamı geçişi imkanı sağlar ve ÖHVPS BKM Teknik Sertifikasyonu geçmek için koşulması gereken sertifikasyon senaryoları BKM ÖHVPS Simülatör’ü üzerinden sunulmaktadır. BKM Simülatör kullanımı için ayrı bir süreç işletilmekte olup daha fazla detaylı bilgi almak için ohvps@bkm.com.tr adresine taleplerinizi iletmeniz gerekmektedir.
