import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../info.service';
import { Info } from "../../info";
@Component({
  selector: 'app-infos-fromuser',
  templateUrl: './infos-fromuser.component.html',
  styleUrls: ['./infos-fromuser.component.scss'],
})
export class InfosFromuserComponent implements OnInit {


  infos : Info[];
  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.getInfos();
  }

  getInfos(): void {
    this.infoService.getInfosFromuser().subscribe(infos => this.infos = infos);
  }

  delete(info: Info): void {
    this.infos = this.infos.filter(h => h !== info);
    this.infoService.deleteHero(info).subscribe();
  }
}
