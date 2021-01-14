import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../info.service';
import { Info } from "../../info";
@Component({
  selector: 'app-infos-history',
  templateUrl: './infos-history.component.html',
  styleUrls: ['./infos-history.component.scss'],
})
export class InfosHistoryComponent implements OnInit {

  infos : Info[];
  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.getInfos();
  }

  getInfos(): void {
    this.infoService.getInfosCategory("Tarih").subscribe(infos => this.infos = infos);
  }
  delete(info: Info): void {
    this.infos = this.infos.filter(h => h !== info);
    this.infoService.deleteHero(info).subscribe();
  }
}
