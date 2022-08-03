#  ÖDEME HİZMETLERİ VERİ PAYLAŞIM SERVİSLERİ (ÖHVPS) 

**<font size=6>API İLKE VE KURALLARI SÜRÜM YÖNETİMİ </font>**  

<font size=4>OHVPS API İlke ve Kuralları dokümanındaki sürüm bilgileri aşağıdaki kurallara göre belirlenmektedir.</font>  

1.	Sürümler 3 basamaklı kodla belirlenir. Sürüm değişiklikleri basamak sırasına göre Major değişiklikler, Minör değişiklikler ve Patch değişiklikleri olarak sıralanır. Örneğin  Sürüm 1.0.0 üzerinde yapılacak major değişiklik Sürüm 2.0.0 olarak ifade edilirken, Minör değişiklik Sürüm 1.1.0 olarak ifade edilir. Patch değişiklik ise Sürüm 1.1.1 olarak ifade edilir.

2.  <b>Major değişiklikler:</b><br>
    a. Sürümün 1. basamağı proje kapsamındaki major değişiklikleri ifade eder. Bu major değişiklikler ;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;§ Kredi kartı akışları, tekrarlı işlem akışları gibi kapsama yeni akışların eklenmiş olması,     
	&nbsp;&nbsp;&nbsp;&nbsp;§  Eski hizmetlerin çalışamaz hale getirilmesi,      
	&nbsp;&nbsp;&nbsp;&nbsp;§ API desenlerinde değişiklik olması ve geriye yönelik desteğin sona ermesidir.     
    b. Major değişiklikler, öncelikle API standartlarının taslak sürümüne eklenir. Paralelinde simülatör geliştirmelerine başlanır.  Simülatörde ilgili değişikliğin hayata geçirileceği tarih ayrıca katılımcılarla paylaşılır.  
    c. Major değişiklikler sınırlı bir set ya da tüm set ile sertifikasyona tabiidir.    
    d. Simülatör tek bir major ya da minör sürümü destekler.  
    e. Simülatörün desteklediği sürüm üzerinden sertifikasyon yapılır.  
    f. API Standartlarında major **Sürüm Geçiş Tarihinin** duyurusu TCMB tarafından yapılır.    
    g. Katılımcıların **HHS/YÖS Yeni Sürüm Üretime Geçiş Son Tarihi** yine TCMB tarafından belirlenir ve duyurulur. Bu tarihe kadar katılımcıların sertifikasyonlarının tamamlanması beklenir.    

3.	<b>Minör değişiklikler:</b>  <br/>
    a. Sürümün 2. basamağı proje kapsamındaki minör değişiklikleri ifade eder. Bu minör değişiklikler ;  
    		&nbsp;&nbsp;&nbsp;&nbsp;§ Kural değişiklikleri,  
			&nbsp;&nbsp;&nbsp;&nbsp;§ API desenlerinde olabilecek opsiyonel alan değişiklikleri,  
			&nbsp;&nbsp;&nbsp;&nbsp;§ Sıralı veri türlerine yeni değerlerin eklenmesi,  
			&nbsp;&nbsp;&nbsp;&nbsp;§ GKD sürecinde değişiklik yapılması,  
			&nbsp;&nbsp;&nbsp;&nbsp;§ API desenlerinde değişiklik olması ve geriye yönelik desteğin devam etmesi,  
			&nbsp;&nbsp;&nbsp;&nbsp;§ Yeni bir endpoint eklenmesidir.      
    b. Değişiklik kapsamı TCMB tarafından belirlenir.  
    c. Bu basamakta yapılan değişikliklerin tümünün sertifikasyona tabi olması gerekir. Ancak değişikliğin boyutuna göre sınırlı bir set ya da tüm değişiklik seti ile sertifikasyon senaryoları oluşturulur.   
    d. Geriye dönük destek bittiği noktada sürüm değeri artar.  
    e. Major ve minör değişikliklerin sürüm yönetimi aynı akışla işletilir.  
5. <b>Patch değişiklikler:</b>

    a. Sürümün 3. basamağı proje kapsamındaki patch değişiklikleri ifade eder. API desenlerinde bir değişiklik yaratmayan iş kuralı değişikliği örnek olabilir.
    
    b. Patch değişiklikler sonrası katılımcıların yeniden sertifikasyon yapmaları gerekmemektedir.

6. İlk defa sertifikasyona gelecek kurumlar en son aktif sürüm ile sertifikasyona gelir. 

7.  API Endpointlerde yapılacak major ve minor değişiklikler, endpointin pathi içerisinde yer alır. Detaylı bilgi [3.5.	Kaynak URI Yol Yapısı](https://ohvps.github.io/v1.1.0/contents/temel-prensipler.html#_3-5-kaynak-uri-yol-yap%C4%B1s%C4%B1) adresinde yer alır. <br/>

8. Sürüm geçişlerinde kullanılan tarih bilgileri şu şekildedir:   
<br>

**Sürüm Geçiş Tarihi** : 

- Yeni API Standartı sürümünün yayınlandığı tarih bilgisidir. 
    - API Standartları taslak sürümü, güncel sürüm haline getirilir.
    - Simülatörde yapılan güncellemeler development ortamından, katılımcıların kullanımında olan Tripsit ortamına aktarılır. 
    - Tripsit ortamında katılımcılar hem simülatör hem de kendi uygulama testlerine başlayabilir.

**Sertifikasyona Başlangıç Tarihi** : 

- HHS ve YÖS'ler için ayrı olarak iletilecek tarih bilgisidir.

**HHS Yeni Sürüm Üretime Geçiş Son Tarihi / YÖS Yeni Sürüm Üretime Geçiş Başlangıç Tarihi**  :

- Bu tarihe kadar HHS'lerin sertifikasyonu tamamlayıp başarı ile geçmesi gerekir. Bu tarihten önce sertifikasyonu tamamlayan HHS'ler üretime geçer.
- Bu tarih HHS'lerin üretime geçişi için tanımlanmış son tarih olduğu için, bu tarihte tüm HHS'ler üretime geçmiş olacaktır. YÖS'ler bu tarihten itibaren üretime geçişe başlar.
- BKM tarafından yapılması gerekecek API sürüm değişikliği varsa bu tarihte yayına alınır.(HHS-YÖS API gibi)

**YÖS Yeni Sürüm Üretime Geçiş Son Tarihi** :    

- YÖS'lerin sertifikasyon süreci, YÖS Yeni Sürüm Üretime Geçiş Başlangıç Tarihinden, YÖS Yeni Sürüm Üretime Geçiş Son Tarihine kadar sürer. 
- Mevcut YÖS'ler yeni sürümü en geç bu tarihte üretim ortamına alır.

**Eski Sürümün Kaldırılma Tarihi** :

- HHS'ler; HHS Yeni Sürüm Üretime Geçiş Son Tarihi ile Eski Sürümün Kaldırılma Tarihi arasında iki servis sürümünü de desteklemek zorundadır.


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>