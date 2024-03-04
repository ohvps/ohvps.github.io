#  Dijital Cüzdanlardan TR Karekod ile Ödeme

 

Dijital cüzdanlara eklenmiş ve cüzdan sahibi kuruluşun kendisinin ihraç etmediği, diğer Kart Çıkaran Kuruluşlar tarafından ihraç edilmiş kartlar ile TR Karekod ödemesi yapılabilmesi için HHS olarak GEÇİT’e bağlanmış olan Kart Çıkaran Kuruluşların, [BKM (Kartlı Ödemeler) TR Karekod Teknik İlke ve Kuralları Rehberinde](https://www.tcmb.gov.tr/wps/wcm/connect/ec9fb83b-6e4c-479f-ac69-a11ba3f0c558/BKM_TR_Karekod_Rehberi.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ec9fb83b-6e4c-479f-ac69-a11ba3f0c558-o3gOR1s) yer alan 5.2 maddelerindeki belirtilen akışlar için BKM Karekod Yönlendirme Sistemi (KYS) entegrasyonu yapması gerekmektedir. <br>

 

Bu sayede Kart Çıkaran Kuruluşlar, otorizasyon öncesinde işlemin POS’ta Kart PIN’i ile doğrulanmasını veya müşterinin telefonunda yüklü olan Kart Çıkaran Kuruluşa ait mobil uygulamaya anlık bildirim göndererek doğrulanmasını sağlayabilecektir. HHS olarak GEÇİT’e bağlanmış olan Kart Çıkaran Kuruluşlar için de bu doğrulama akışlarından en az birini hayata geçirmesi zorunludur.

 

## 1.      Dijital Cüzdana Kart Ekleme Akışı

 

Dijital Cüzdanlardan ödeme yapılabilmesi için kullanıcıların ilk olarak kartı Dijital Cüzdana eklemesi gerekmektedir. Dijital Cüzdana eklenecek olan karta ait bilgiler kullanıcı tarafından cüzdana girilmektedir. Kart bilgilerinin Dijital Cüzdana eklenmesinin ardından kart hamili iki faktörlü doğrulama yöntemi (GO Güvelin Öde, 3D Secure  vb.) ile doğrulanması gerekmektedir.  Kart hamilinin iki faktörlü doğrulanmasının ardından kart cüzdana eklenir ve eklenen bu kartlar ile ödeme işlemleri yapılabilir. Dijital Cüzdanlarla yapılabilen işlemler aşağıda bilgi amaçlı özetlenmiştir. Bu belgenin Uyum Tarihi başlığında TR Karekod ile yapılan işlemler için kullanılacak doğrulama akışlarına yer verilmiştir.
 

- Dijital cüzdanlar ile fiziksel mağazalarda POS terminali üzerinden, e-ticaret sitelerinde ise online kanallar üzerinden  ödeme yapmak mümkündür.

- Fiziksel ödemelerde dijital cüzdan POS terminallerinde gösterilen TR Karekod’u okuyarak ödemeyi gerçekleştirebilir. İkinci bir yöntem olarak, mobil telefonun ve dijital cüzdanın NFC teknolojisini desteklemesi durumunda telefonun POS terminaline temassız olarak okutulması suretiyle ödeme yapılabilmesi mümkündür.

- E-ticaret ödemelerinde web sitesinde gösterilen TR Karekod’un dijital cüzdan ile okutulması suretiyle ödeme yapılması mümkündür. Sanal POS işlemlerinden kastedilen dijital cüzdanda saklı olan kart ile online kanallar üzerinden bir e-ticaret ödemesinin yapılmasıdır.

 

## 2. Uyum Tarihi

 

Dijital cüzdan sahibi kuruluş ile cüzdana eklenen kart kuruluşunun farklı olması durumunda hem fiziki POS’larda hem de sanal POS’larda TR Karekod ile ödeme yapılabilmesine ilişkin akışlar BKM (Kartlı Ödemeler) TR Karekod Teknik İlke ve Kuralları Rehberinde 5.2. maddelerinde tariflenmiştir.

 

Bu akışlarda;<br>

 

1) No-CVM (İlave doğrulama yapmadan) veya <br>

2) Kart PIN (POS cihazında kart şifresi girilerek) veya <br>

3) Anlık Bildirim ile (mobil telefonda yüklü olan kart çıkaran kuruluşa ait uygulama üzerinden ile müşteri doğrulaması yer almaktadır.) müşteri doğrulaması yer almaktadır.
 

<br>Kuruluşların tercihine göre yukarıda tariflenmiş olan akışlardan biri veya tamamı kuruluşlar tarafından desteklenebilir. Kuruluşların tercih ettiği akışlar için Karekod Yönlendirme Sistemi sertifikasyonlarını tamamlanması gerekmektedir. Yukarıda tariflenmiş akışlarda görüleceği üzere kart çıkaran kuruluşlar otorizasyon öncesinde kendi risk değerlendirmesini yaparak “No cvm” ilave bir doğrulama yöntemine gerek kalmadan da işlemleri sonlandırılmasını isteyebilmektedir.

 

** 31.12.2023 tarihinden önce HHS olarak GEÇİT’e bağlanmış olan Kart Çıkaran Kuruluşların [BKM (Kartlı Ödemeler) TR Karekod Teknik İlke ve Kuralları Rehberinde](https://www.tcmb.gov.tr/wps/wcm/connect/ec9fb83b-6e4c-479f-ac69-a11ba3f0c558/BKM_TR_Karekod_Rehberi.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-ec9fb83b-6e4c-479f-ac69-a11ba3f0c558-o3gOR1s) yer alan madde 5.2’de tarifli akış/akışlar için Karekod Yönlendirme Sistemi sertifikasyonunun tamamlanarak en geç <ins>**30 Haziran 2024**</ins> tarihinde üretime geçmiş olması zorunludur.

Nezdinde Ödeme hesabı bulunduran Kart Çıkaran diğer tüm Ödeme Hizmeti Sağlayıcıların da GEÇİT’e bağlantı sağlamaları sonrası ilk 6 ay içerisinde KYS sertifikasyonunu tamamlaması gerekmektedir.**