import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../info.service';
import { Info } from "../../info";
import { AlertController } from '@ionic/angular';
import { IonicToastService } from '../../ionic-toast.service';
@Component({
  selector: 'app-infos-add',
  templateUrl: './infos-add.component.html',
  styleUrls: ['./infos-add.component.scss'],
})
export class InfosAddComponent implements OnInit {

  constructor(private infoService: InfoService, public alertController: AlertController, public toastService: IonicToastService) { }

  infos : Info [];
  
  ngOnInit() {
    this.getInfos();
  }

  async presentAlert() {
    this.toastService.showToast();
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Başarılı',
      subHeader: 'Kart Eklendi',
      message: 'Alttaki eklenen kartlara git butonuna tıklayarak eklediğiniz kartları görebilirsiniz.',
      buttons: ['Tamam']
    });
    await alert.present();
  }


  getInfos(): void {
    this.infoService.getInfosCategory("Tarih").subscribe(infos => this.infos = infos);
  }
  info : Info = {
    id: null,
    name: "Sizden Gelenler",
    category : "Sinema",
    author: "Kullanıcı",
    data: "Sizden Gelenler",
    imageurl: "https://www.pamukkalehaber.com/images/haberler/2019/05/bunlari-biliyor-musunuz_957d8.png",
  }
  
  add(name: string, category: string, data: string, imageurl: string): void {
    this.getInfos();
    if(name==null){
    this.info.name="Sizden Gelenler";
    }
    else {
      this.info.name=name;
    }
    if(category==null){
      this.info.category="Sinema";
    }
    else{
      this.info.category=category;
    }
      this.info.author="Kullanıcı";
      if(data==null){
        this.info.data="Sizden Gelen Bilgi";
      }
      else {
        
    this.info.data=data;
      }

    if(imageurl==null){
      this.info.imageurl="https://www.pamukkalehaber.com/images/haberler/2019/05/bunlari-biliyor-musunuz_957d8.png";
    }
    else {
      this.info.imageurl=imageurl;
    }
    //name = name.trim();
    //Eğer bilgi girilmesi zorunluysa if (!data) { return; }
    this.infoService.addInfo(this.info)
      .subscribe(info => {
        this.infos.push(info);
      });
      this.presentAlert();
  }

  
}
