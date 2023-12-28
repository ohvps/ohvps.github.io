(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{641:function(i,r,e){"use strict";e.r(r);var a=e(15),l=Object(a.a)({},(function(){var i=this,r=i._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[r("h1",{attrs:{id:"odeme-hizmetleri-veri-paylasim-servisleri-ohvps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#odeme-hizmetleri-veri-paylasim-servisleri-ohvps"}},[i._v("#")]),i._v(" ÖDEME HİZMETLERİ VERİ PAYLAŞIM SERVİSLERİ (ÖHVPS)")]),i._v(" "),r("p",[r("strong",[r("font",{attrs:{size:"6"}},[i._v("API İLKE VE KURALLARI SÜRÜM YÖNETİMİ ")])],1)]),i._v(" "),r("p",[r("font",{attrs:{size:"4"}},[i._v("OHVPS API İlke ve Kuralları dokümanındaki sürüm bilgileri aşağıdaki kurallara göre belirlenmektedir.")])],1),i._v(" "),r("ol",[r("li",[r("p",[i._v("Sürümler 3 basamaklı kodla belirlenir. Sürüm değişiklikleri basamak sırasına göre Major değişiklikler, Minör değişiklikler ve Patch değişiklikleri olarak sıralanır. Örneğin  Sürüm 1.0.0 üzerinde yapılacak major değişiklik Sürüm 2.0.0 olarak ifade edilirken, Minör değişiklik Sürüm 1.1.0 olarak ifade edilir. Patch değişiklik ise Sürüm 1.1.1 olarak ifade edilir.")])]),i._v(" "),r("li",[r("p",[r("b",[i._v("Major değişiklikler:")]),r("br"),i._v("\na. Sürümün 1. basamağı proje kapsamındaki major değişiklikleri ifade eder. Bu major değişiklikler ;"),r("br"),i._v("\n    § Kredi kartı akışları, tekrarlı işlem akışları gibi kapsama yeni akışların eklenmiş olması,"),r("br"),i._v("\n    §  Eski hizmetlerin çalışamaz hale getirilmesi,"),r("br"),i._v("\n    § API desenlerinde değişiklik olması ve geriye yönelik desteğin sona ermesidir."),r("br"),i._v("\nb. Major değişiklikler, öncelikle API standartlarının taslak sürümüne eklenir. Paralelinde simülatör geliştirmelerine başlanır.  Simülatörde ilgili değişikliğin hayata geçirileceği tarih ayrıca katılımcılarla paylaşılır."),r("br"),i._v("\nc. Major değişiklikler sınırlı bir set ya da tüm set ile sertifikasyona tabiidir."),r("br"),i._v("\nd. Simülatör tek bir major ya da minör sürümü destekler."),r("br"),i._v("\ne. Simülatörün desteklediği sürüm üzerinden sertifikasyon yapılır."),r("br"),i._v("\nf. API Standartlarında major "),r("strong",[i._v("Sürüm Geçiş Tarihinin")]),i._v(" duyurusu TCMB tarafından yapılır."),r("br"),i._v("\ng. Katılımcıların "),r("strong",[i._v("HHS/YÖS Yeni Sürüm Üretime Geçiş Son Tarihi")]),i._v(" yine TCMB tarafından belirlenir ve duyurulur. Bu tarihe kadar katılımcıların sertifikasyonlarının tamamlanması beklenir.")])]),i._v(" "),r("li",[r("p",[r("b",[i._v("Minör değişiklikler:")]),i._v(" "),r("br"),i._v("\na. Sürümün 2. basamağı proje kapsamındaki minör değişiklikleri ifade eder. Bu minör değişiklikler ;"),r("br"),i._v("\n    § Kural değişiklikleri,"),r("br"),i._v("\n    § API desenlerinde olabilecek opsiyonel alan değişiklikleri,"),r("br"),i._v("\n    § Sıralı veri türlerine yeni değerlerin eklenmesi,"),r("br"),i._v("\n    § GKD sürecinde değişiklik yapılması,"),r("br"),i._v("\n    § API desenlerinde değişiklik olması ve geriye yönelik desteğin devam etmesi,"),r("br"),i._v("\n    § Yeni bir endpoint eklenmesidir."),r("br"),i._v("\nb. Değişiklik kapsamı TCMB tarafından belirlenir."),r("br"),i._v("\nc. Bu basamakta yapılan değişikliklerin tümünün sertifikasyona tabi olması gerekir. Ancak değişikliğin boyutuna göre sınırlı bir set ya da tüm değişiklik seti ile sertifikasyon senaryoları oluşturulur."),r("br"),i._v("\nd. Geriye dönük destek bittiği noktada sürüm değeri artar."),r("br"),i._v("\ne. Major ve minör değişikliklerin sürüm yönetimi aynı akışla işletilir.")])]),i._v(" "),r("li",[r("p",[r("b",[i._v("Patch değişiklikler:")])]),i._v(" "),r("p",[i._v("a. Sürümün 3. basamağı proje kapsamındaki patch değişiklikleri ifade eder. API desenlerinde bir değişiklik yaratmayan iş kuralı değişikliği örnek olabilir.")]),i._v(" "),r("p",[i._v("b. Patch değişiklikler sonrası katılımcıların yeniden sertifikasyon yapmaları gerekmemektedir.")])]),i._v(" "),r("li",[r("p",[i._v("İlk defa sertifikasyona gelecek kurumlar en son aktif sürüm ile sertifikasyona gelir.")])]),i._v(" "),r("li",[r("p",[i._v("API Endpointlerde yapılacak major ve minor değişiklikler, endpointin pathi içerisinde yer alır. Detaylı bilgi "),r("a",{attrs:{href:"https://ohvps.github.io/v1.1.0/contents/temel-prensipler.html#_3-5-kaynak-uri-yol-yap%C4%B1s%C4%B1",target:"_blank",rel:"noopener noreferrer"}},[i._v("3.5.\tKaynak URI Yol Yapısı"),r("OutboundLink")],1),i._v(" adresinde yer alır. "),r("br")])]),i._v(" "),r("li",[r("p",[i._v("Sürüm geçişlerinde kullanılan tarih bilgileri şu şekildedir:"),r("br"),i._v(" "),r("br")])])]),i._v(" "),r("p",[r("strong",[i._v("Sürüm Geçiş Tarihi")]),i._v(" :")]),i._v(" "),r("ul",[r("li",[i._v("Yeni API Standartı sürümünün yayınlandığı tarih bilgisidir.\n"),r("ul",[r("li",[i._v("API Standartları taslak sürümü, güncel sürüm haline getirilir.")]),i._v(" "),r("li",[i._v("Simülatörde yapılan güncellemeler development ortamından, katılımcıların kullanımında olan Tripsit ortamına aktarılır.")]),i._v(" "),r("li",[i._v("Tripsit ortamında katılımcılar hem simülatör hem de kendi uygulama testlerine başlayabilir.")])])])]),i._v(" "),r("p",[r("strong",[i._v("Sertifikasyona Başlangıç Tarihi")]),i._v(" :")]),i._v(" "),r("ul",[r("li",[i._v("HHS ve YÖS'ler için ayrı olarak iletilecek tarih bilgisidir.")])]),i._v(" "),r("p",[r("strong",[i._v("HHS Yeni Sürüm Üretime Geçiş Son Tarihi / YÖS Yeni Sürüm Üretime Geçiş Başlangıç Tarihi")]),i._v("  :")]),i._v(" "),r("ul",[r("li",[i._v("Bu tarihe kadar HHS'lerin sertifikasyonu tamamlayıp başarı ile geçmesi gerekir. Bu tarihten önce sertifikasyonu tamamlayan HHS'ler üretime geçer.")]),i._v(" "),r("li",[i._v("Bu tarih HHS'lerin üretime geçişi için tanımlanmış son tarih olduğu için, bu tarihte tüm HHS'ler üretime geçmiş olacaktır. YÖS'ler bu tarihten itibaren üretime geçişe başlar.")]),i._v(" "),r("li",[i._v("BKM tarafından yapılması gerekecek API sürüm değişikliği varsa bu tarihte yayına alınır.(HHS-YÖS API gibi)")])]),i._v(" "),r("p",[r("strong",[i._v("YÖS Yeni Sürüm Üretime Geçiş Son Tarihi")]),i._v(" :")]),i._v(" "),r("ul",[r("li",[i._v("YÖS'lerin sertifikasyon süreci, YÖS Yeni Sürüm Üretime Geçiş Başlangıç Tarihinden, YÖS Yeni Sürüm Üretime Geçiş Son Tarihine kadar sürer.")]),i._v(" "),r("li",[i._v("Mevcut YÖS'ler yeni sürümü en geç bu tarihte üretim ortamına alır.")])]),i._v(" "),r("p",[r("strong",[i._v("Eski Sürümün Kaldırılma Tarihi")]),i._v(" :")]),i._v(" "),r("ul",[r("li",[i._v("HHS'ler; HHS Yeni Sürüm Üretime Geçiş Son Tarihi ile Eski Sürümün Kaldırılma Tarihi arasında iki servis sürümünü de desteklemek zorundadır.")])]),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br"),i._v(" "),r("br")])}),[],!1,null,null,null);r.default=l.exports}}]);