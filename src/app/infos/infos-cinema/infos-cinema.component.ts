import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../info.service';
import { Info } from "../../info";
@Component({
  selector: 'app-infos-cinema',
  templateUrl: './infos-cinema.component.html',
  styleUrls: ['./infos-cinema.component.scss'],
})
export class InfosCinemaComponent implements OnInit {

  
  infos : Info[];
  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.getInfos();
  }

  getInfos(): void {
    this.infoService.getInfosCategory("Sinema").subscribe(infos => this.infos = infos);
  }

  delete(info: Info): void {
    this.infos = this.infos.filter(h => h !== info);
    this.infoService.deleteHero(info).subscribe();
  }
}
