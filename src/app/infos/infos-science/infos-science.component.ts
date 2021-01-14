import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../info.service';
import { Info } from "../../info";
@Component({
  selector: 'app-infos-science',
  templateUrl: './infos-science.component.html',
  styleUrls: ['./infos-science.component.scss'],
})
export class InfosScienceComponent implements OnInit {

  infos : Info[];
  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.getInfos();
  }

  getInfos(): void {
    this.infoService.getInfosCategory("Bilim").subscribe(infos => this.infos = infos);
  }
  delete(info: Info): void {
    this.infos = this.infos.filter(h => h !== info);
    this.infoService.deleteHero(info).subscribe();
  }
}
