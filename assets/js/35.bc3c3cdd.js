(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{494:function(i,e,l){"use strict";l.r(e);var r=l(62),n=Object(r.a)({},(function(){var i=this,e=i.$createElement,l=i._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[l("p",[l("strong",[i._v("POST /erisim-belirteci")])]),i._v(" "),l("p",[l("strong",[i._v("İSTEK:")])]),i._v(" "),l("p",[i._v("YÖS erisim-belirteci erişim adresini 2 amaçla kullanır:")]),i._v(" "),l("ol",[l("li",[l("p",[i._v("Bir önceki adımdan aldığı rizaNo, rizaTip (ödeme emri başlatma hizmetinde “O”, hesap bilgisi hizmetinde “H”) ve GKD sonrası dönülen yetKod bilgilerini kullanarak HHS nezdinde ErisimBelirteci nesnesi oluşturmak üzere istekte bulunur. YÖS’ün istekte bulunabilmesi için GKD adımının başarılı bir şekilde tamamlanması rizaDrm bilgisinin ‘yetkilendirildi’ olması gerekir. Erişim Belirteci nesnesi ile rızası nesnesi (Ödeme Emri Rızası veya Hesap Bilgisi Rızası) arasındaki ilişki rıza numarası üzerinden sağlanır.")])]),i._v(" "),l("li",[l("p",[i._v("Aldığı erişim belirtecinin Geçerlilik Süresinin dolduğu durumda, yenileme belirteci karşılığında yeni bir erişim belirteci alması gerekmektedir.")])])]),i._v(" "),l("p",[i._v("POST /erisim-belirteci isteğinin (REQUEST) gövdesinde (BODY)  “ErisimBelirteciIstegi” nesnesi (Tablo-23) kullanılır. İstek başarıyla sonuçlanırsa HHS kaynak sunucusunda “ErisimBelirteci” nesnesi (Tablo 24) oluşturulur veya (Yenileme Belirteci için) güncellenir. Rıza durumu “Yetki Kullanıldı” olarak güncellenir.")]),i._v(" "),l("p",[i._v("Erişim Belirteci POST işlemi sonucunda HTTP 200 dönülmesi gerekmektedir.")]),i._v(" "),l("p",[l("strong",[i._v("Tablo 23: “ErisimBelirteciIstegi” nesnesi")])]),i._v(" "),l("table",[l("thead",[l("tr",[l("th",[i._v("Alan Adı")]),i._v(" "),l("th",[i._v("JSON Alan Adı")]),i._v(" "),l("th",[i._v("Format:Veri modeli İsmi")]),i._v(" "),l("th",[i._v("Zorunlu / Koşullu /  İsteğe bağlı")]),i._v(" "),l("th",[i._v("Açıklama")])])]),i._v(" "),l("tbody",[l("tr",[l("td",[i._v("RızaNo")]),i._v(" "),l("td",[i._v("rizaNo")]),i._v(" "),l("td",[i._v("AN1..128")]),i._v(" "),l("td",[i._v("Z")]),i._v(" "),l("td",[i._v("Rıza nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı")])]),i._v(" "),l("tr",[l("td",[i._v("Rıza Tipi")]),i._v(" "),l("td",[i._v("rizaTip")]),i._v(" "),l("td",[i._v("AN1")]),i._v(" "),l("td",[i._v("Z")]),i._v(" "),l("td",[l("strong",[i._v("O veya H (TR.OHVPS.DataCode.RizaTip)")])])]),i._v(" "),l("tr",[l("td",[i._v("Yetki Tipi")]),i._v(" "),l("td",[i._v("yetTip")]),i._v(" "),l("td",[i._v("AN1..50")]),i._v(" "),l("td",[i._v("Z")]),i._v(" "),l("td",[i._v("“yet_kod” yada “yenileme_belirteci” değerini alabilir. "),l("strong",[i._v("(TR.OHVPS.DataCode.YetTip)")])])]),i._v(" "),l("tr",[l("td",[i._v("Yetki Kodu")]),i._v(" "),l("td",[i._v("yetKod")]),i._v(" "),l("td",[i._v("AN1..255")]),i._v(" "),l("td",[i._v("K")]),i._v(" "),l("td",[i._v("GKD işleminden dönen yetkilendirme kodudur. Tek kullanımlık olup, aynı yetKod ile birden fazla token alınamaz. yetKod Parametresinin yaşam ömrü 5 dakika olmalıdır."),l("br"),i._v("yetTip = “yet_kod” ise zorunludur.")])]),i._v(" "),l("tr",[l("td",[i._v("Yenilenme Belirteci")]),i._v(" "),l("td",[i._v("yenilemeBelirteci")]),i._v(" "),l("td",[i._v("AN1..4096")]),i._v(" "),l("td",[i._v("K")]),i._v(" "),l("td",[i._v("Erişim belirtecinin yenilenmesi amacıyla kullanılır."),l("br"),i._v("yetTip = “yenileme_belirteci” ise kullanımı zorunludur.")])])])]),i._v(" "),l("p",[l("strong",[i._v("BAŞARILI YANIT:")])]),i._v(" "),l("p",[i._v("POST işleminin RESPONSE gövdesini (BODY) oluşturan “erisimBelirteci” nesnesinde (Tablo-19) bulunan erişim belirteci değeri ödeme emrinin başlatılması esnasında kullanılır.")]),i._v(" "),l("p",[l("strong",[i._v('Tablo 24: "ErisimBelirteci" nesnesi')])]),i._v(" "),l("table",[l("thead",[l("tr",[l("th",[i._v("Alan Adı")]),i._v(" "),l("th",[i._v("JSON Alan Adı")]),i._v(" "),l("th",[i._v("Format:Veri modeli İsmi")]),i._v(" "),l("th",[i._v("Zorunlu / Koşullu /  İsteğe bağlı")]),i._v(" "),l("th",[i._v("Açıklama")])])]),i._v(" "),l("tbody",[l("tr",[l("td",[i._v("Erişim Belirteci")]),i._v(" "),l("td",[i._v("erisimBelirteci")]),i._v(" "),l("td",[i._v("AN1..4096")]),i._v(" "),l("td",[i._v("Z")]),i._v(" "),l("td",[i._v("Yetkilendirme Kodu karşılığında HHS tarafından dönülen ve sonraki hesap bilgisi ve ödeme emri servislerine erişimde kullanılan bilgidir.")])]),i._v(" "),l("tr",[l("td",[i._v("Geçerlilik Süresi")]),i._v(" "),l("td",[i._v("gecerlilikSuresi")]),i._v(" "),l("td",[i._v("N1..9")]),i._v(" "),l("td",[i._v("Z")]),i._v(" "),l("td",[i._v("Erişim Belirtecini saniye cinsinden geçerlilik süresidir."),l("br"),i._v(" Erişim belirteci geçerli olduğu son tarih ;"),l("br"),i._v("Hesap Bilgisi Rızası için en fazla 30 gün olmalıdır. Erişimin Geçerli Olduğu Son Tarih(erisimIzniSonTrh); Erişim Belirteci Geçerlilik Süresi'nden küçük ise Erişimin Geçerli Olduğu Son Tarih değeri ile sınırlıdır."),l("br"),i._v("Ödeme Başlatma Rızası için 5 dakika olmalıdır.")])]),i._v(" "),l("tr",[l("td",[i._v("Yenileme Belirteci")]),i._v(" "),l("td",[i._v("yenilemeBelirteci")]),i._v(" "),l("td",[i._v("AN1..4096")]),i._v(" "),l("td",[i._v("Z")]),i._v(" "),l("td",[i._v("Erişim belirtecinin yenilenmesi amacıyla kullanılır.")])]),i._v(" "),l("tr",[l("td",[i._v("Yenileme Belirteci Geçerlik Süresi")]),i._v(" "),l("td",[i._v("yenilemeBelirteciGecerlilikSuresi")]),i._v(" "),l("td",[i._v("N1..9")]),i._v(" "),l("td",[i._v("Z")]),i._v(" "),l("td",[i._v("Yenileme belirtecinin saniye cinsinden geçerlilik süresidir."),l("br"),i._v("Yenileme belirtecinin geçerli olduğu son tarih ;"),l("br"),i._v("Hesap Bilgisi için Erişimin Geçerli Olduğu Son Tarih ile sınırlı olmalıdır."),l("br"),i._v("Bu tarih geldiği zaman Hesap Bilgisi Rıza Durumunu ”Yetki Sonlandırıldı” statüsüne çekilmesi gerekir."),l("br"),i._v("Ödeme Başlatma için Rıza Oluşturma Zamanından 15 gün sonrası olmalıdır."),l("br"),l("br"),i._v("15 gün süresi sorgulama servislerinin çağrımını destekleyecek şekilde uzun tutulmuştur. İleri vadeli işlemler bu kapsamda değildir. "),l("br"),i._v("Ödeme emri 5 dakika içinde gerçekleştirilmelidir. Gerçekleşmediğinde 4.2.8 bölümünde aktarılan rıza statü güncellemesi yapılmalıdır.")])])])]),i._v(" "),l("p",[i._v("erisim-belirteci erisim noktasından elde edilen erisimBelirteci, ilişkilendirildiği nesne veya işlem için gönderilen POST isteği başlığında x-access-token alanında iletilir.")]),i._v(" "),l("p",[i._v("Yenilenme Belirteci (refreshToken) kullanılarak Erişim Belirteci (accessToken) alındığında, dönen yanıttaki Yenileme Belirteci Geçerlik Süresi (yenilemeBelirteciGecerlilikSuresi) geçen süre eksiltilerek, kalan zamanın saniye cinsinden hesaplanmasıyla iletilmelidir.")]),i._v(" "),l("p",[i._v("Yenileme Belirteci ile Erişim Belirteci güncellendiğinde, HHS'den dönen yenilemeBelirteci değeri değişebilir, YÖS bu güncel anahtarı saklamalı ve sonraki erisimBelirteci isteğini yenilenmiş olan yenilemeBelirteci ile yapmalıdır.")]),i._v(" "),l("p",[i._v("Erişim Belirteci API çağrımı sırasında rıza durumları kontrol edilmelidir. Bu kontrollerin nasıl yapılması gerektiği 4-Rıza Durumları bölümünde aktarılmıştır.")]),i._v(" "),l("p",[i._v("Yenileme belirteci karşılığında yeni bir erişim belirteci alınması sırasında hata alınması durumunda, HHS'nin döndüğü hata yanıtında httpCode = 401 ve errorCode = \"TR.OHVPS.Connection.InvalidToken\" geldiği durumda, YÖS tarafından HHS'ye ilgili rıza için sistemsel olarak iptal isteği gönderilmelidir.")])])}),[],!1,null,null,null);e.default=n.exports}}]);