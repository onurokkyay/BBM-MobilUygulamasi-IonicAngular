# Bunları Biliyor Musunuz? Mobil Uygulaması
*Terminale önce npm install ardından ionic serve yazıp uygulamayı çalıştırınız.*
```
npm install
ionic serve
```

## 1-Ana Sayfa (infos page)
Uygulama ilk açıldığında karşımıza gelen kısım.
Burada veritabanındaki tüm kategorilere ait kartları ekranda görebiliyoruz.
ngOnInit() de getInfos() çağrılıyor ve orada da infoService (infoService.getInfos) kullanılıyor.
###### Ana Sayfa
![Ana Sayfa](<AnaSayfa.png>)

## Sol Taraftan Kaydırılarak Açılan Menü
###### Sekmeler
![Menü](<Menü.png>)

## 2-Bilim (infos-science component)
Veritabanındaki "Bilim" Kategorisine ait kartları ekranda gösterir.ngOnInit() de getInfos() çağrılıyor ve orada da infoService (infoService.getInfosCategory) kullanılıyor.
## 3-Tarih (infos-history component)
Veritabanındaki "Tarih" Kategorisine ait kartları ekranda gösterir.ngOnInit() de getInfos() çağrılıyor ve orada da infoService (infoService.getInfosCategory) kullanılıyor.
## 4-Sinema (infos-cinema component)
Veritabanındaki "Sinema" Kategorisine ait kartları ekranda gösterir.ngOnInit() de getInfos() çağrılıyor ve orada da infoService (infoService.getInfosCategory) kullanılıyor.
## 4-Sizden Gelenler (infos-fromuser component)
Veritabanındaki yazarı "Kullanıcı" olan kartları ekranda gösterir.ngOnInit() de getInfos() çağrılıyor ve orada da infoService (infoService.getInfosFromuser) kullanılıyor.
## 5-Bilgi Ekle (infos-add component)
###### Bilgi Ekle Sayfası
![Ekle](<Ekle.png>)


Veritabanına infoService sayesinde (infoService.addHero) bilgi-kart eklemenizi sağlar.Eklediğiniz her kartın yazarı "Kullanıcı" dır.
Inputların default değeri placeholder kısmında belirtilmiştir.
Kategori ion-select şeklindedir ve 3 kategoriyi Bilim-Tarih-Sinema bulundurur.
Eklediğiniz kartı Sizden Gelenler kısmında görebilirsiniz.Ayrıca Ana Sayfada veritabanından tüm kartlar geldiği için eklediğiniz kartı orada da görebilirsiniz.
Ayrıca yine veritabanından kategoriye göre arama yapıldığı için eklediğiniz kartı ilgili kategorinin sekmesinde görebilirsiniz.
ID otomatik verilmektedir.
## 6-Kendimi Şanslı Hissediyorum (infos-lucky component)
Her girdiğinizde rastgele bir kategorinin kartlarını ekranda gösterir.
infos-lucky componentinin içinde selector (<app-infos-randomcategory>) ile başka bir componenti (infos-randomcategory) ekranda göstermek için yani bu yapıyı kullanıp göstermek için oluşturduğum component.
Ayrıca Input yapısını da kullandım.
Sol taraftaki menüden Kendimi Şanslı Hissediyorum seçildiğinde lucky componenti çalışıyor.ngOnInit() de rastgele bir kategori seçiyor.Html kısmında
bu şekilde <app-infos-randomcategory [category]="randomluckyCategory"> çağırıp seçtiği rastgele kategoriyi parametre olarak göndererek ekranda randomluckyCategory componentini gösterdim. 
## 7- infos-randomcategory Componenti
infos-lucky componentinden gelen kategoriye göre infoService (infoService.getInfosCategory) kullanarak veritabanından bilgileri ekranda gösterir.
## *Ionic Toast Service*
###### Toast
![Toast](<AddToast.png>)


Kullanılan Native Plugin: [Ionic Native-Toast](https://ionicframework.com/docs/native/toast).

Kart Ekleme (Sol Menüdeki "Bilgi Ekle" sekmesi,infos-add component) bölümünde Bilgi Ekle butonuna tıklandığında ekranın alt tarafında yerel bir Toast (küçük bir metin açılır penceresi) göstermemi sağlıyor.
## *Info Service*
getInfos(): http.get ile infos tablosunu getirir.
getInfosCategory(category: string): Aldığı parametreye göre infos tablosundaki o kategoriye ait kartları http.get ile getirir.
getInfosFromuser(): Tablodaki yazarı "Kullanıcı" olan kartları http.get ile getirir.
addInfo(info: Info): Aldığı parametredeki infoyu veritabanına (infos tablosuna) http.post ile ekler.
delete(info: Info): Her kartta bulunan kartı sil butonuna basınca çalışan fonksiyon.O kartı veritabanından siler.
## *InMemoryDataBase-DataService*
 ****Sayfa yenilendiğinde veritabanı ilk haline dönüyor.O yüzden lütfen kullanırken sayfayı yenilemeyiniz.Sekmeler arası geçiş yapabilirsiniz.****
Veritabanımız.


Info:
export interface Info {
    id: number;
    name: string;
    data: string;
    category: string;
    imageurl: string;
    author: string;
}

infos tablosu:

... 

id:18 (genId(infos: Info[]): number {
    return infos.length > 0 ? Math.max(...infos.map(info => info.id)) + 1 : 1;
  } ile eklenen verilere otomatik id verilir.)
name:"BBM18-Baba (The Godfather)"
category:"Sinema"
author:"Admin"
data:"Filmde, Al Pacino ve Keanu Reeves'in seyrettiği boks maçı..."
imageurl:"https://www.webtekno.com/images/editor/default/0001/64/fc179d7bec1b8a3de7ebe2c15eb42c590a7e568a.jpeg" 

...
