# 4. Rıza Durumları  
ÖHK, Ödeme Emri Başlatma Hizmetine ya da Hesap Bilgisi Hizmetine müşteri rızasının tesisi ile başlar. ÖHK’nın YÖS uygulaması üzerinden yaptığı işlemler neticesinde rıza durumları değişebilir. 
Rıza’nın alabileceği durum kodları şu şekilde belirlenmiştir.
  
**B: Yetki Bekleniyor** – İlk rıza talebinde    
**Y: Yetkilendirildi** – Başarılı GKD sonrası yetKod üretildiğinde  
**K: Yetki Kullanıldı** – Erişim Belirteci alındığında  
**E: Yetki ödeme emrine dönüştü** – ÖBHS için  
**S: Yetki Sonlandırıldı**    
&nbsp;&nbsp;&nbsp;&nbsp;HBHS için : Erişimin Geçerli Olduğu Son Tarih geldiğinde  
&nbsp;&nbsp;&nbsp;&nbsp;ÖBHS için : Yenileme belirteci Son Tarihi geldiğinde  

**I :Yetki İptal**  
Rıza iptal durumu ise gerek raporlama gerekse müşteri deneyimi perspektifinden doğru   bilgilendirmeler yapılabilmesi açısından aşağıdaki gibi detay kodları ile zenginleştirilmiştir:

>**Rıza İptal Detay Kodu:** 

>>**‘01’ :	Yeni Rıza Talebi ile İptal**  
>>**‘02’ :	Kullanıcı İsteği ile HHS üzerinden İptal**  
>>**‘03’ :	Kullanıcı İsteği ile YÖS üzerinden İptal**  
>>**‘04’ :	Süre Aşımı : Yetki Bekleniyor**  
>>**‘05’ :	Süre Aşımı : Yetkilendirildi**  
>>**‘06’ :	Süre Aşımı : Yetki Ödemeye Dönüşmedi**  
>>**‘07’ :	GKD iptali : Aynı rıza no ile mükerrer çağrımı**  
>>**‘08’ :	GKD iptali : Rızano ile TCKN uyuşmaması**  
>>**‘09’ :	GKD iptali : Uygun ürünü bulunmuyor**  
>>**‘10’ :	GKD iptali : HHS Açık Bankacılık kanalı işleme kapalı**  
>>**’11’ :	GKD iptali : Hesap Yetki Sorunu**  
>>**‘12’ :	GKD iptali : ÖHK HHS kontrollerini aşamadı**  
>>**‘13’ :	GKD iptali : ÖHK isteği ile GKD’den vazgeçildi**  
>>**‘14’ :	GKD iptali : Fraud Şüphesi**  
>>**‘99’ :	GKD iptali : Diğer**  

4.1 ve 4.2 bölümlerinde detaylandırılan rıza durum değişikliklerinde rıza iptal detay kodları kullanılmıştır.


**Örneğin B&#8680; I/01 denildiğinde “Yetki Bekleniyor” rıza durumundan “Yetki İptal” rıza durumuna Rıza İptal Detay Kodu da ‘01’ yani ‘Yeni Rıza Talebi ile İptal’ olarak güncellenmelidir ifade edilmiştir.**  

ÖHK verdiği rıza sırasında seçtiği hesaplarından biri kapatılırsa, diğer hesaplara ait bilgileri görmeye devam eder. Ancak ÖHK’nın hesabına ait bilgilerinin YÖS'e iletilmesini istemediği durumda, rızasını tamamen iptal ederek yeni hesap listesi ile yeni rıza vermesi gerekmektedir. Yani hesap kapanması nedeniyle rıza geçerliliğini yitirmez. ÖHK'nın proaktif olarak bu hesabı rızadan çıkarması durumunda rıza iptali olur.   

Rıza iptal edilmediği ve geçerli olduğu sürece kapalı hesaplar için diğer çevrimiçi kanallarda uygulanan yöntem izlenmelidir. Diğer çevrimiçi kanallarda kapalı hesaplara ilişkin bilgi dönülmüyor ise ÖHVPS'den de dönüş yapılmaz. ÖHK’nın rıza onayı verdiği açık hesaplarının tümü HHS tarafında kapatıldığı durumda, yine aynı şekilde HHS çevrimiçi kanallarında koyduğu kurallara göre bu hesaplarının YÖS uygulamasında gösterilmesine karar verir.  

Hesap kapama ve ticari kullanıcıların hesaplar üzerindeki yetki değişiklikleri HHS'nin iç sistemleri tarafından yapılan kontrollerle yönetilir. Buradaki değişiklikler ile HHS sistemsel olarak rıza iptali gerçekleştiremez. ÖHK izni ve onayı dahilinde rıza iptal gerçekleştirilmesi gerekmektedir.  

## 4.1.	Hesap Bilgisi Hizmeti Rıza durum değişiklikleri

**Kural**: Bir ÖHK'nın, bir YÖS için, bir HHS'de Y, K, B rıza durumlarında tek bir rızası olabilir.
Bir ÖHK hem kişisel olarak hem de bir kurumun kullanıcısı olabilir. Bu durumda kurum ve kişisel rıza aynı anda mevcut olabilmelidir. Rıza nesneleri, HHS tarafından uygun şekilde yönetilmelidir.  

 1.	Hesap Bilgisi Rızası isteği HHS’ye iletilir.  
    a.	HHS ÖHK'ya ait içeride rıza var mı kontrol eder. Eğer yoksa **Yetki Bekleniyor - B** rıza durumu ile yeni rıza oluşturur.   
    b.	Eğer içeride rıza varsa   
      &nbsp;&nbsp;&nbsp;&nbsp; i. Rıza durumu Yetki Bekleniyor - B ise;   
         &nbsp;&nbsp;&nbsp;&nbsp;    HHS, sistemde Yetki Bekleniyor - B rıza durumuna sahip kayıt olduğu için, öncelikle eski kaydı Yetki İptal - I durumuna getirir.  Rıza İptal Detay Kodu “Yeni Rıza Talebi ile iptal” olmalıdır. **B &#8680; I / 01** Sonrasında, **Yetki Bekleniyor - B** rıza durumu ile yeni rıza oluşturur.   
            
    &nbsp;&nbsp;&nbsp;&nbsp; ii. Rıza durumu Yetkilendirildi - Y veya Yetki Kullanıldı - K ise;  
     &nbsp;&nbsp;&nbsp;&nbsp;ÖHK'nın halihazırda verilmiş bir rızası vardır. HHS, önce mevcut rızanın iptalinin yapılması gerektiğine dair hata döner. **TR.OHVPS.Resource.ConsentMismatch**

    &nbsp;&nbsp;&nbsp;&nbsp; iii.	Rıza durumu Yetki Sonlandırıldı - S  ise Yetki Bekleniyor - B durumunda yeni rıza no oluşturur.   

    &nbsp;&nbsp;&nbsp;&nbsp; iv.	Rıza durumu Yetki İptal - I ise **Yetki Bekleniyor - B** durumunda yeni rıza no oluşturur.


 2.	GKD başarılı bir şekilde tamamlandığında Rıza durumu Yetki Bekleniyor’dan Yetkilendirildi’ye güncellenir. **B &#8680; Y**

    - GKD'nin gerçekleşmediği durumlardan HHS haberdar olmayabilir.    


      ÖHK GKD yapmadan ayrılmış olabilir. (ÖR: Tarayıcıyı kapatmış olabilir) Rıza Yetki Bekleniyor - B rıza durumunda kalır.  5 dakika içerisinde sistem tarafından Yetki Bekleniyor - B rıza durumundaki kayıtlar Yetki İptal  : Yetki Bekleniyor Süre Aşımı olarak güncellenir.  **B &#8680; I / 04** Bkz. 9. Madde.

    - GKD'nin gerçekleşmediği durumlardan HHS haberdardır. HHS yonlendirme adresinin query parametrelerine **rizaIptDtyKod** değerini ekleyerek bu durumu YÖS’e bildirmek zorundadır.

      - Rıza durumunun  “Yetkilendirildi" , “Yetki Kullanıldı” olduğu durum.  Yetki Bekleniyor &#8680; Yetki İptal  **B &#8680;  I / 07**  
   
      - Rızano ile kimlik bilgileri uyuşmazlığı.  Yetki Bekleniyor &#8680; Yetki İptal **B &#8680; I / 08**

      - ÖHK'nın HHS'de ilgili ürününün olmadığı durum (hesap/kart) Yetki Bekleniyor &#8680; Yetki İptal  **B &#8680; I / 09**   

      - Açık bankacılık kanalınız işleme kapalıdır.Yetki Bekleniyor &#8680; Yetki İptal **B &#8680; I / 10**  

      - Kullanıcının HHS'deki hesaplarında yeterli yetkisinin olmama durumu  Yetki Bekleniyor &#8680; Yetki İptal **B &#8680; I / 11**  

      - HHS’nin ÖHK için yaptığı kontrollerin başarısız olduğu durum Yetki Bekleniyor &#8680; Yetki İptal  **B &#8680; I / 12**

      - ÖHK isteği ile GKD’den vazgeçildiği durum Yetki Bekleniyor &#8680; Yetki İptal **B &#8680; I / 13**  

      - Fraud Şüphesi Yetki Bekleniyor &#8680; Yetki İptal **B &#8680; I / 14**  

      - Diğer Yetki Bekleniyor &#8680;  Yetki İptal  **B &#8680;  I / 99**  


3.	ÖHK, hesaplarında/izin türlerinde/Erişimin Geçerli Olduğu Son Tarih bilgilerinden bir ya da birden fazlasında güncelleme yapmak için YÖS ekranına girer.   


   &nbsp;&nbsp;&nbsp;&nbsp;a.	YÖS önce Rıza İptal API'sini çağırır. Sonra yeni değerlerle yeni bir rıza isteğinde bulunur. Tekrar GKD gerekir.  

   &nbsp;&nbsp;&nbsp;&nbsp;b.	YÖS rıza iptal yapmadan yeni rıza alma akışına başlarsa 1.b akışı devreye girer.  

   &nbsp;&nbsp;&nbsp;&nbsp;c.	Rıza güncelleme ilerleyen sürümlerde ele alınacaktır.

4. Erişim Belirteci API   

      a. Erişim Belirteci'nin yetkilendirme kodu ile çağrımı yapıldığında; 
     
    &nbsp;&nbsp;&nbsp;&nbsp; i. Rıza durumu Yetki İptal - I ya da Yetki Sonlandırıldı - S ise  **TR.OHVPS.Resource.ConsentRevoked** hatası dönülmelidir.   
    &nbsp;&nbsp;&nbsp;&nbsp; ii. Rıza durumu Yetki Bekleniyor - B ya da Yetki Kullanıldı - K  ise **TR.OHVPS.Resource.ConsentMismatch** hatası dönülmelidir.   
    &nbsp;&nbsp;&nbsp;&nbsp; iii. Rıza durumu Yetkilendirildi - Y olduğunda erişim belirteci tahsis edilir. 
      Erişim belirteci alındığında rıza durumu K: Yetki Kullanıldı yapılır. **Y &#8680;K**    
      

      b. Yenileme belirteci karşılığı erişim belirteci alınması sırasında; yenileme belirteci kontrolü ve sonrasında rıza kontrolü yapılmalıdır.

    &nbsp;&nbsp;&nbsp;&nbsp; i. Öncelikle Yenileme Belirteci Geçerlik Süresi kontrolü yapılmalıdır. Geçerli bir Yenileme Belirteci olmadığı görülür ise **TR.OHVPS.Connection.InvalidToken** hatası dönülmelidir.          
    &nbsp;&nbsp;&nbsp;&nbsp; ii. Rıza durumu Yetki İptal - I  ya da Yetki Sonlandırıldı - S ise **TR.OHVPS.Resource.ConsentRevoked** hatası dönülmelidir.  
    &nbsp;&nbsp;&nbsp;&nbsp; iii. Rıza durumu Yetki Bekleniyor - B ya da Yetkilendirildi - Y  ise **TR.OHVPS.Resource.ConsentMismatch** hatası dönülmelidir.   
     &nbsp;&nbsp;&nbsp;&nbsp; iv. Rıza durumu Yetki Kullanıldı - K olduğunda, yenileme belirteci karşılığı erişim belirteci tahsis edilir.   

5.	Sorgulama: HBHS, rıza alma akışına başlamadan önce, daha önce oluşturulmuş bir hesap bilgisi-rizasi kaynağının durumunu, isteğe bağlı olarak alabilir. Rıza numarası ile sorgulama yapılır.

6.	Hesap Bilgisi Rızasının İptali: HBHS üzerinden ya da HHS üzerinden yapılan rıza iptallerinde Rıza durumu  Yetki İptal - I olarak güncellenir. Rıza numarası ile iptal sağlanır.

    a. HHS üzerinden rıza iptali yapmış olabilir.  Rıza durumu sorgulanır. 
   
    Rıza numarası Yetki Bekleniyor - B ve Yetkilendirildi - Y ve Yetki Kullanıldı - K durumlarında ise Yetki İptal durumuna getirilir. Rıza gnclzmn timestamp ile güncellenir.
    HHS, Rıza iptalinde aynı zamanda erişim belirtecini de invalid hale getirmelidir.

    **B &#8680; I / 02**  
    **Y &#8680; I / 02**  
    **K &#8680; I / 02**  

    b.	YÖS üzerinden yapılacak iptal işleminde yine Y ve B ve K rıza durumlarında ise iptal edilebilir.   

    **B &#8680; I / 03**  
    **Y &#8680; I / 03**  
    **K &#8680; I / 03**  


      Rıza durumu Yetki Sonlandırıldı - S  ise iptal gerçekleşmez. “Rıza durumunuz iptal etmeye uygun değildir.” hatası ÖHK'ya yansıtılır. **TR.OHVPS.Resource.ConsentRevoked**  


7.	ÖHK’nın verdiği rıza süresi dolmuş olabilir. 
Erişimin Geçerli Olduğu Son Tarih geldiğinde Rıza durumu Yetki Kullanıldı’dan Yetki Sonlandırıldı durumuna çekilmelidir.  **K &#8680; S**  

8.	Hesaplar, Bakiye ve İşlemler servislerinde erişim belirteci kontrolü ve sonrasında rıza kontrolü yapılmalıdır. 
      Geçerli bir erişim belirteci yok ise **TR.OHVPS.Connection.InvalidToken** hatası dönülmelidir. 

      YÖS'ün; Rıza İptal - I ya da Yetki Sonlandırıldı - S rıza durumlarında Hesaplar, Bakiye ve İşlemler servislerini çağırmaması beklenir. HHS'nin bu rıza durumları ile yapılmış çağrılar olduğunda **TR.OHVPS.Resource.ConsentRevoked** hatasını dönmesi gereklidir.

      Rıza durumu Yetki Kullanıldı - K dışında ise **TR.OHVPS.Resource.ConsentMismatch** hatası verilmelidir. 

      Rıza durumu Yetki Kullanıldı - K ise servis akışlarına devam edilir.

      Rıza sorgulama API'sinde ilgili rıza kaydı bulunamaz veya sorgulayan kurumun yetkisi yoksa (örn : YÖS’ün farklı bir YÖS’e ait rıza noyu sorgulaması)  
**TR.OHVPS.Resource.NotFound hatası** verilmelidir.  

9.	HHS/YÖS tarafında rıza bilgileri belirli aralıklarla sistem kullanıcısı tarafından taranır:
5 dakikadan uzun süredir “Yetki Bekleniyor” durumunda kalan kayıtların durumları güncellenir.
Yetki Bekleniyor  &#8680; Rıza İptal  / Süre Aşımı : Yetki Bekleniyor **B &#8680; I / 04**  

      5 dakikadan uzun süredir “Yetkilendirildi” durumunda kalan kayıtlar güncellenir.
      Yetkilendirildi     &#8680; Rıza İptal / Süre Aşımı: Yetkilendirildi **B &#8680; I / 05**  
      Yukarıda bahsedilen, YÖS Süre Aşımı nedeniyle rıza iptal durum güncellemelerini yapmadan önce HHS’yi sorgulayarak rıza durumunu öğrenmeli ve süre aşımı dışında bir kodu varsa aynı kodla kendi sistemini güncellemelidir.   
      Erişimin Geçerli Olduğu Son Tarih geldiğinde rıza durumu Yetki Kullanıldı’dan Yetki Sonlandırıldı’ya güncellenir. **K &#8680; S**


## 4.2.	Ödeme Bilgisi Hizmeti Rıza Durum Değişiklikleri


**Kural**: Bir ÖHK'nın bir YÖS için bir HHS'de istediği kadar rızası olabilir.  

Kurum ve kişisel rıza aynı anda mevcut olabilmelidir. Rıza nesneleri, HHS tarafından uygun şekilde yönetilmelidir.

1.	Ödeme Emri Rızası isteği HHS’ye iletilir. İçeride rıza olup olmamasına bakılmaksızın **Yetki Bekleniyor - B** rıza durumu ile yeni rıza no oluşturur.   

2.	GKD başarılı bir şekilde tamamlandığında rıza durumu Yetki Bekleniyor’dan Yetkilendirildi’ye güncellenir.  **B &#8680; Y**  

    - GKD'nin gerçekleşmediği durumlardan HHS haberdar olmayabilir.  

      ÖHK GKD yapmadan ayrılmış olabilir. (ÖR: Browserı kapatmış olabilir)
      Rıza durumu Yetki Bekleniyor'dur. 5 dakika içerisinde sistem tarafından Yetki Bekleniyor - B durumundaki kayıtlar Rıza İptal : Yetki Bekleniyor Süre Aşımı olarak güncellenir. Bkz. 8. Madde.

    - GKD'nin gerçekleşmediği durumlardan HHS haberdardır. HHS yonlendirme adresinin query parametrelerine rizaIptDtyKod değerini ekleyerek bu durumu YÖS’e bildirmek zorundadır.
   
      - Rıza durumunun  “Yetkilendirildi" , “Yetki Kullanıldı” olduğu durum.  Yetki Bekleniyor &#8680; Yetki İptal  **B &#8680;  I / 07**  
   
      - Rızano ile kimlik bilgileri uyuşmazlığı.  Yetki Bekleniyor &#8680; Yetki İptal **B &#8680; I / 08**

      - ÖHK'nın HHS'de ilgili ürününün olmadığı durum (hesap/kart) Yetki Bekleniyor &#8680; Yetki İptal  **B &#8680; I / 09**   

      - Açık bankacılık kanalınız işleme kapalıdır.Yetki Bekleniyor &#8680; Yetki İptal **B &#8680; I / 10**  

      - Kullanıcının HHS'deki hesaplarında yeterli yetkisinin olmama durumu  Yetki Bekleniyor &#8680; Yetki İptal **B &#8680; I / 11**  

      - HHS’nin ÖHK için yaptığı kontrollerin başarısız olduğu durum Yetki Bekleniyor &#8680; Yetki İptal  **B &#8680; I / 12**

      - ÖHK isteği ile GKD’den vazgeçildiği durum Yetki Bekleniyor &#8680; Yetki İptal **B &#8680; I / 13**  

      - Fraud Şüphesi Yetki Bekleniyor &#8680; Yetki İptal **B &#8680; I / 14**  

      - Diğer Yetki Bekleniyor &#8680;  Yetki İptal  **B &#8680;  I / 99** 


3.	GKD muafiyeti olduğunda YÖS HHS’den arka planda onay alır. Bu onay sırasında rıza durumu **Yetkilendirildi** yapılır. **B &#8680; Y**    

4. Erişim Belirteci API   
a. Erişim Belirteci'nin yetkilendirme kodu ile çağrımı yapıldığında; 

      &nbsp;&nbsp;&nbsp;&nbsp; i. Rıza durumu Yetki İptal - I  ya da Yetki Sonlandırıldı - S ise  **TR.OHVPS.Resource.ConsentRevoked** hatası dönülmelidir.   
      &nbsp;&nbsp;&nbsp;&nbsp; ii. Rıza durumu Yetki Bekleniyor - B , Yetki Kullanıldı - K  ya da Yetki ödeme emrine dönüştü - E  ise **TR.OHVPS.Resource.ConsentMismatch** hatası dönülmelidir.   
      &nbsp;&nbsp;&nbsp;&nbsp; iii. Rıza durumu Yetkilendirildi - Y olduğunda erişim belirteci tahsis edilir. 
      Erişim belirteci alındığında rıza durumu K: Yetki Kullanıldı yapılır. **Y &#8680;K**    

      b. Yenileme belirteci karşılığı erişim belirteci alınması sırasında; yenileme belirteci kontrolü ve sonrasında rıza kontrolü yapılmalıdır.

      &nbsp;&nbsp;&nbsp;&nbsp; i. Öncelikle Yenileme Belirteci Geçerlik Süresi kontrolü yapılmalıdır. Geçerli bir Yenileme Belirteci olmadığı görülür ise **TR.OHVPS.Connection.InvalidToken** hatası dönülmelidir.          
      &nbsp;&nbsp;&nbsp;&nbsp; ii. Rıza durumu Yetki İptal - I  ya da Yetki Sonlandırıldı - S ise **TR.OHVPS.Resource.ConsentRevoked** hatası dönülmelidir.  
      &nbsp;&nbsp;&nbsp;&nbsp; iii. Rıza durumu Yetki Bekleniyor - B ya da Yetkilendirildi - Y  ise **TR.OHVPS.Resource.ConsentMismatch** hatası dönülmelidir.   
      &nbsp;&nbsp;&nbsp;&nbsp; iv. Rıza durumu Yetki Kullanıldı - K veya Yetki Ödeme Emrine Dönüştü – E olduğunda, yenileme belirteci karşılığı erişim belirteci tahsis edilir.   
 

5. Ödeme Başlatma API önce erişim belirteci ve sonrasında rıza kontolü yapılarak gerçekleştirilmelidir

      -  Öncelikle Erişim Belirteci kontrolü yapılmalıdır. Geçerli bir Erişim Belirteci olmadığı görülür ise **TR.OHVPS.Connection.InvalidToken** hatası dönülmelidir.          
      -  Rıza durumu Yetki İptal - I  ya da Yetki Sonlandırıldı - S ise **TR.OHVPS.Resource.ConsentRevoked** hatası dönülmelidir.  
      -  Rıza durumu Yetki Bekleniyor - B , Yetkilendirildi - Y, Yetki Ödeme Emrine Dönüştü - E  ise **TR.OHVPS.Resource.ConsentMismatch** hatası dönülmelidir.   
      -  Rıza durumu Yetki Kullanıldı - K olduğunda ödeme emri gerçekleştirilir.  Rıza durumu Yetki Kullanıldı - K'dan Yetki Ödeme Emrine Dönüştü – E yapılmalıdır.  **K &#8680;E** 

6.	Sorgulama: GKD işleminin başarıyla tamamlanıp Ödeme Emri Rızasının yetkilendirilmesi esnasında, gönderen hesap seçiminin HHS ekranında yapıldığı durumlarda, ödeme emri isteğinde gönderen hesap bilgileri alanının zorunlu olması nedeniyle, ödemeEmriRizasi nesnesi sorgulanarak gönderen hesap bilgileri (hesap numarası ve/veya hesap referansı) alınmalıdır.
Rıza sorgulama, Ödeme Emri Sorgulama API'lerinde ilgili rıza kaydı bulunamaz veya sorgulayan kurumun yetkisi yoksa (örn : YÖS’ün farklı bir YÖS’e ait rıza noyu sorgulaması)  
**TR.OHVPS.Resource.NotFound** hatası verilmelidir.  

7.	Ödeme Emri Rızasının İptali bulunmamaktadır.  


8.	HHS/YÖS tarafında rıza bilgileri belirli aralıklarla sistem kullanıcısı tarafından taranır:
5 dakikadan uzun süredir Yetki Bekleniyor'da kalan kayıtların durumları güncellenir.
Yetki Bekleniyor &#8680; Rıza İptal / Süre Aşımı : Yetki Bekleniyor **B &#8680; I / 04**
 
      5 dakikadan uzun süredir Yetkilendirildi'de kalan kayıtlar durumları güncellenir.
      Yetkilendirildi     &#8680; Rıza İptal / Süre Aşımı : Yetkilendirildi **B &#8680; I / 05**

      5 dakikadan uzun süredir Yetki kullanıldı'da kalan kayıtlar durumları güncellenir.
      Yetki kullanıldı &#8680; Rıza İptal / Süre Aşımı : Yetki Ödemeye Dönüşmedi **B &#8680; I / 06**

      Yenileme belirteci Son Tarih geldiğinde rıza durumu Yetki ödeme emrine dönüştü’den Yetki Sonlandırıldı'ya güncellenir.  
      **E &#8680; S**  

9.	GKD muafiyeti sadece ödeme başlatma servislerinde bulunmaktadır.





 





