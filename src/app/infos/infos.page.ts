import { Component, OnInit } from '@angular/core';
import { Info } from "../info";
import { InfoService } from '../info.service';
import { Calendar } from '@ionic-native/calendar';
@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss'],
})
export class InfosPage implements OnInit {

  infos:Info [];

  info : Info = {
    id: 1,
    name: "BBM1",
    category : "Oyun",
    author: "Admin",
    data: " Gelmiş geçmiş en iyi olan The Elder Scrolls V:Skyrim 11.11.11 tarihinde çıkmıştır.",
    imageurl: "https://fanatical.imgix.net/product/original/305f04c9-8780-4c7b-91dd-e87979844dab.jpg?auto=compress,format&w=400&fit=max",
  }

  constructor(private infoService: InfoService) {}

  ngOnInit() {
    this.getInfos();
  }

  getInfos(): void {
    this.infoService.getInfos().subscribe(infos => this.infos = infos);
  }

  delete(info: Info): void {
    this.infos = this.infos.filter(h => h !== info);
    this.infoService.deleteHero(info).subscribe();
  }

}
