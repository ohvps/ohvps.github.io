#  ÖDEME HİZMETLERİ VERİ PAYLAŞIM SERVİSLERİ (ÖHVPS) 

**<font size=6>API İLKE VE KURALLARI  </font>**  

 <font size=4><b>SÜRÜM 1.1.0 aktif hale gelmiştir.<br>
Sertifikasyon için geçerli olan SÜRÜM 1.1.0 olacaktır.<br>
YÖS'ler için sertifikasyon başlangıç tarihi 1 Ocak 2024 olmakla beraber 2023 Aralık ayı içerisinde onaya gönderilen sertifikasyon taleplerinin 1.1.0 versiyonu için iletilmesi beklenmektedir.
<br>
 <https://github.com/ohvps/ohvps.github.io/commits/master> adresi üzerinden değişiklik açıklamaları ve tarihçesi incelenebilir.<br></b></font>

<br/>


<br/>
<br/>

SÜRÜM 1.1.0 geçiş tarihleri şu şekildedir.

-	Sürüm Geçiş Tarihi : 1 Aralık 2023

-	HHS(1.0.2’den 1.1.0’a geçecek olan ve direkt 1.1.0’a gelecek olan) Sertifikasyon Başlangıç Tarihi : 1 Aralık 2023

-	YÖS(1.0.2’den 1.1.0’a geçecek olan ve direkt 1.1.0’a gelecek olan) Sertifikasyon Başlangıç Tarihi : 1 Ocak 2024

-	HHS(1.0.2’den 1.1.0’a geçecek olan) Sertifikasyon Bitiş Tarihi : 23 Şubat 2024

-	HHS(1.0.2’den 1.1.0’a geçecek olan) Yeni Sürüm Üretime Geçiş Son Tarihi: 29 Şubat 2024

-	YÖS(1.0.2’den 1.1.0’a geçecek olan veya direkt 1.1.0’a gelecek olan) Yeni Sürüm Üretime Geçiş Başlangıç Tarihi : 29 Şubat 2024

-	Mevcut durumda teknik gereklilikleri belirlenmiş veri paylaşım hizmetlerini standart olmayan servislerle sunan HHS’ler (30 Haziran 2024 standart olmayan servislerin kapatılma tarihine uyumlanması gerekenler) Sertifikasyon Bitiş Tarihi : 15 Haziran 2024

-	Mevcut durumda teknik gereklilikleri belirlenmiş veri paylaşım hizmetlerini standart olmayan servislerle sunan HHS’ler (30 Haziran 2024 standart olmayan servislerin kapatılma tarihine uyumlanması gerekenler) Standart Uyumlu Üretime Geçiş Son Tarihi : 30 Haziran 2024

-	Diğer HHS’ler (31 Mart 2025 üretime geçiş zorunluluğu olan ve ilk defa sertifikasyona gelecek olan) Sertifikasyon Bitiş Tarihi : 20 Mart 2025

-	Diğer HHS’ler (31 Mart 2025 üretime geçiş zorunluluğu olan ve ilk defa sertifikasyona gelecek olan) Üretime Geçiş Tarihi : 31 Mart 2025

-	YÖS(1.0.2’den 1.1.0’a geçecek olan ve 30 Eylül 2024 üretime geçiş uyum tarihi zorunluluğu olan) Sertifikasyon Bitiş Tarihi : 20 Eylül 2024

-	YÖS(1.0.2’den 1.1.0’a geçecek olan ve 30 Eylül 2024 üretime geçiş uyum tarihi zorunluluğu olan) Yeni Sürüm Üretime Geçiş Son Tarihi : 30 Eylül 2024

-	Eski Sürümün Kaldırılma Tarihi : 31 Ekim 2024
  

<br>


Üretim ortamında servis sunan HHS’lerin 29 Şubat 2024 - 30 Eylül 2024 tarihleri arasında aynı anda çift sürüm desteklemesi gerekmektedir! 1.0 sürümünde alınan bir rızanın 1.1 sürümü için de yaşaması gerekmektedir.

İlk kez üretim ortamına 1.1 sürümü ile geçecek HHS'ler, 1.1 sürümünü destekleyen YÖS'ler tarafından listenebileceklerdir.

YÖS’lerin sadece kendilerinin destekledikleri API sürümünü destekleyen HHS’leri listelemesi gerekmektedir.

1.1.0 sürümü için hesap bilgisi rızası ve ödeme emri rızası oluşturmak isteyen YÖS kurumu için YOS API içerisinde apiBilgileri olarak "ODS" tanımı HHS tarafından kontrol edilmelidir. YÖS'ün ilgili tanımı olmaması halinde rıza isteğinde "TR.OHVPS.Resource.APIVersionNotSupported" hatası verilmelidir.

[Sürüm Yönetimi](surum-yonetimi) bölümünden tarih bilgilerinin açıklamalarına ulaşılabilir.


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