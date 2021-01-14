import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Info } from "./info";
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const infos = [
      { id: 10,
        name: "BBM'e Hoşgeldin!",
        category : "",
        author: "Admin",
        data: "Ana Sayfaya hoşgeldin! Burada tüm bilgi kartlarını toplu bir şekilde görebilirsin.İstersen sol taraftaki menüyü kaydırıp kategoriye göre kartları inceleyebilirsin.Ayrıca menüden sen de bilgi kartı ekleyebilirsin,iyi eğlenceler!",
        imageurl: "https://www.pamukkalehaber.com/images/haberler/2019/05/bunlari-biliyor-musunuz_957d8.png"},
      { id: 11,
        name: "BBM11",
        category : "Bilim",
        author: "Admin",
        data: "İtalyan bilim insanları Giuseppe Averani ve Cipriano Targioni 1694'te elmasın yanabilen bir malzeme olup olmadığını anlamak için,büyük bir mercek kullanarak güneş ışınlarını bir elmas parçasının üzerine odakladı ve sonuçta elmasın gözden kaybolduğuna tanık oldular.Bu deney sayesinde elmasın karbonun bir formu olduğu anlaşıldı.",
        imageurl: "https://bilimgenc.tubitak.gov.tr/sites/default/files/bb_elmas_v2.png"},
        { id: 12,
            name: "BBM12",
            category : "Bilim",
            author: "Admin",
            data: "Kuzey Yarım Küre’de aralık ayında gerçekleşen kış gün dönümünün gündüz süresinin en kısa, gece süresinin en uzun gün olduğu düşünülür. Aslında kış gün dönümü, güneş ışınlarının Oğlak Dönencesi’ne dik açıyla geldiği belirli bir andır.",
            imageurl: "https://bilimgenc.tubitak.gov.tr/sites/default/files/bb_kis_gun_donumu.jpg"},
            { id: 13,
                name: "BBM13",
                category : "Bilim",
                author: "Admin",
                data: "Mikrodalga fırın İkinci Dünya Savaşı sırasında radar teknolojisi üzerine çalışan bir mühendis tarafından kazara keşfedildi. Laboratuvarda magnetron adı verilen ve mikrodalga yayan bir cihazın önünde çalıştığı sırada cebindeki çikolatanın ısınıp eridiğini fark eden Percy Spencer daha sonra mikrodalga fırının mucidi oldu.",
                imageurl: "https://bilimgenc.tubitak.gov.tr/sites/default/files/mikrodalga_firin.jpg"},
                { id: 14,
                    name: "BBM14",
                    category : "Bilim",
                    author: "Admin",
                    data: "Ağır Cisimler Daha Hızlı mı Düşer? Demirden ve kauçuktan yapılan aynı şekle sahip iki top aynı yükseklikten bırakıldığında, demir topun yere daha hızlı düşeceğini düşünebilirsiniz. Aslında hava sürtünmesi ihmal edilirse her ikisi de aynı anda yere çarpar. Çünkü düşen bir cisim kütlesinden bağımsız olarak yer çekimi ivmesi ile doğru orantılı bir şekilde hızlanır.",
                    imageurl: "https://bilimgenc.tubitak.gov.tr/sites/default/files/bb_agir_cisimler_daha_hizli_mi_duser.jpg"},
                    { id: 15,
                        name: "BBM15",
                        category : "Bilim",
                        author: "Admin",
                        data: "Üç boyutlu sinema filmlerinin geçmişi 1900'lü yılların başına kadar dayanıyor.Frederic Eugene Ives tarafından 1900'de geliştirilen üç boyutlu görüntü kaydedebilen kamerada, aralarında 4,45 cm mesafe olan iki mercek bulunuyordu.Bu mekanizma, iki gözden gelen görsel verilerin insan beyninde üç boyutlu tek bir görüntü şeklinde algılanmasına benzerdir.",
                        imageurl: "https://bilimgenc.tubitak.gov.tr/sites/default/files/3d_kamera.jpg"},
                        { id: 16,
                          name: "BBM16-Schindler'in Listesi (Schindler’s List)",
                          category : "Sinema",
                          author: "Admin",
                          data: "Film için kostüm toplamak gerektiği için kostüm tasarımcısı kostüm aradığını belirten reklamlar çıkardı. Ekonomik olarak zor durumda olan Polonya’da pek çok insan 1930’lu ve 1940’lı yıllardan kalma kıyafetlerini satmak için can atıyordu.",
                          imageurl: "https://cdn.bursahayat.com.tr/galeri/2018/07/07/2722-unlu-filmlerde-bilinmeyenler-5b40bd3eb73ef.jpg"},
                          { id: 17,
                            name: "BBM17-Rocky IV",
                            category : "Sinema",
                            author: "Admin",
                            data: "Sylvester Stallone, filmdeki boks sahnelerinin inandırıcı olması için Dolph Lundgren’den kendisine gerçekten vurmasını istedi. Göğsüne yediği yumruk Stallone’nin dört gün boyunca yoğun bakıma alınmasına neden oldu.",
                            imageurl: "https://i4.hurimg.com/i/hurriyet/75/770x0/5c3ac95e67b0a922b0ad50cd"},
                            { id: 18,
                              name: "BBM18-Baba (The Godfather)",
                              category : "Sinema",
                              author: "Admin",
                              data: "Don Corleone'nin de içinde olduğu düğün sahnesinde, arka planda ateş açan kişilerin gerçek mafya ve yakınları olduğunu biliyor muydunuz? ABD'deki mafya klanlarının ve önemli figürlerinin ilk kez gün yüzüne çıktığı bu filmde, pek çok 'gerçek' mafya üyesinin rol almak için can attığını da belirtmek lazım.",
                              imageurl: "https://www.webtekno.com/images/editor/default/0001/64/e618ad7e70c164261c86258f92d28ecf1172ff4f.jpeg"},
                              { id: 19,
                                name: "BBM19-Şeytanın Avukatı (The Devil's Advocate)",
                                category : "Sinema",
                                author: "Admin",
                                data: "Filmde, Al Pacino ve Keanu Reeves'in seyrettiği boks maçı sahnesi gerçekti. 1996 yılındaki şampiyona maçında, Roy Jones Jr - Bryant Brannon'ı 2. raundda devirerek dünya şampiyonu olmuştu.",
                                imageurl: "https://www.webtekno.com/images/editor/default/0001/64/fc179d7bec1b8a3de7ebe2c15eb42c590a7e568a.jpeg"},
                                { id: 20,
                                  name: "BBM20-Dövüş Klubü(Fight Club)",
                                  category : "Sinema",
                                  author: "Admin",
                                  data: "Brad Pitt, Fight Club (Dövüş Klubü) filminin çekimleri sırasında dişlerini kırmıştır. Oyuncunun kırık dişli halinin oynadığı karakteri daha iyi yansıttığı düşünülmüş ve film tamamlanıncaya kadar dişlerini yaptırmamıştır.",
                                  imageurl: "https://www.viraliste.com/wp-content/uploads/2017/02/Brad-Pitt-Fight-Club.jpg"},
                                  { id: 21,
                                    name: "BBM21-En kısa süre tahtta kalan hükümdar",
                                    category : "Tarih",
                                    author: "Admin",
                                    data: "Dünya tarihinde birçok hükümdar var olmuştu. Kimi on yıllarca tahtta kalmıştı kimisinin saltanatı ise çok kısa sürmüştü. XIX. Louis rekoru elinde tutuyor ve uzun sürede tutacak gibi. Kendisi sadece 20 dakika, evet 20 dakika saltanat sürmüştü. Fransa’nın karışık döneminde saltanat sürmüş, o 20 dakikada da babası gibi tahttan çekilmeyi tercih etmiştir.",
                                    imageurl: "https://i.milliyet.com.tr/MolatikGaleri/2020/11/19/fft373_mf33135421.Jpeg"},
                                    { id: 22,
                                      name: "BBM22-Sen de mi Brutus?",
                                      category : "Tarih",
                                      author: "Admin",
                                      data: "M.Ö. 44 yılında Brutus liderliğindeki bir grup kızgın senatör, Caesar’a hançer ve sopalarla saldırmaya başlamıştı. Caesar ilk başta saldırganlara direnmeye çalıştı. Fakat aralarında dostu Brutus’ü görünce karşı koymayı bıraktı. 23 kez bıçaklanıp dostunu gördüğünde ona şunu söyledi: Et tu, Brute? – Sen de mi Brutus? Bugün bu sözü dünyanın her yerinde insanlar ihanete uğradıklarını düşündükleri zaman kullanıyor. Bu ikonik sözün bu kadar ünlenmesinin ardında ise böyle kötü bir hikâye yatıyor.",
                                      imageurl: "https://listelist.com/wp-content/uploads/2020/11/Sezarin-olumu.jpg"},
                                      { id: 23,
                                        name: "BBM23-Büyük İskender öldü sanılarak canlı canlı mezara gömüldü",
                                        category : "Tarih",
                                        author: "Admin",
                                        data: "Makedonyalı III. Aleksandros ya da bilinen adıyla Büyük İskender 32 yaşında öldüğünde cenazesi önce Memfis’e ardında da İskenderiye’ye götürüldü. Fakat Büyük İskender’in bedeni bu süre boyunca (6 gün) ne soğudu ne de çürüme belirtisi gösterdi. Günümüzde bilim insanları Büyük İskender’in Guillain-Barré Sendromundan muzdarip olduğuna inanıyor. Bu da gömüldüğü sırada aslında felç olduğu ve zihinsel olarak her şeyin farkında olduğu anlamına geliyor!",
                                        imageurl: "https://listelist.com/wp-content/uploads/2020/11/Buyuk-Iskender.jpg"},
                                        { id: 24,
                                          name: "BBM24-Amerika’yı keşfeden ilk topluluk Vikinglerdi",
                                          category : "Tarih",
                                          author: "Admin",
                                          data: "Tarih kitaplarında 1492 yılında Kristof Kolomb’un Amerika’yı keşfettiği öğretiliyor. Fakat Kolomb’tan tam 500 yıl önce Vikinglerin Amerika kıtasına yerleştiğine dair pek çok kanıt bulunuyor. İlginç tarihi bilgiler arasında yer alan bu keşif, 1960 yılında arkeologlar Kanada’nın Newfoundland eyaletinde Vikinglere ait olduğu düşünülen bir yerleşim yeri keşfetti. Kanada’da bulunan kalıntılar Vikinglerin yaşadığı İzlanda ve Grönland’da bulunan Viking kalıntılarına tıpa tıp benzerdi. Yapılan çalışmalar sonucunda buradaki kalıntıların 1000 yıllık olduğu kesinleşti. Kazı çalışmaları yapıldıkça yer altından Vikinglere ait eşyalar çıkmaya devam ediyordu. Sonunda bilim dünyası Kuzey Amerika’yla ilk temas eden topluluğun Vikingler olduğunu kabul etti.",
                                          imageurl: "https://listelist.com/wp-content/uploads/2020/11/amerika-viking-kesif.jpg"},
                                          { id: 25,
                                            name: "BBM25-1386 yılında Fransa’da bir domuz idam cezasına çarptırıldı",
                                            category : "Tarih",
                                            author: "Admin",
                                            data: "Modern dünyada hayvanların yargılanıp cezalandırılması oldukça tuhaf karşılanırdı. Şimdilerde bizim garipseyeceğimiz pek çok olay Orta Çağ’da normal karşılanıyordu. Bu nedenle de aslında Orta Çağ’a dair ilginç tarihi bilgiler bulunuyor. 14. yüzyılda Fransa’nın Falaise kentinden bir domuz küçük bir çocuğa saldırarak ölmesine sebep oldu. Çocuğun ölümünün ardından domuz tutuklandı, hapse atıldı, cinayetten yargılandıktan sonra ise suçlu bulunarak idam edildi!",
                                            imageurl: "https://listelist.com/wp-content/uploads/2020/11/domuz-idam-cezasi.jpg"},
                                            { id: 26,
                                              name: "Sizden Gelenler",
                                              category : "",
                                              author: "Kullanıcı",
                                              data: "Sizden Gelenler kısmına hoşgeldiniz! Burada Kullanıcı tarafından eklenen bilgileri görebilirsin.Sol taraftaki menüden Bilgi Ekle bölümüne giderek sen de bilgi ekleyebilirsin!",
                                              imageurl: "https://www.pamukkalehaber.com/images/haberler/2019/05/bunlari-biliyor-musunuz_957d8.png"},
    ];
    return {infos};
  }

  genId(infos: Info[]): number {
    return infos.length > 0 ? Math.max(...infos.map(info => info.id)) + 1 : 1;
  }

}