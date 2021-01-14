import { Component, OnInit , Input} from '@angular/core';
import { InfoService } from '../../info.service';
import { Info } from "../../info";
@Component({
  selector: 'app-infos-randomcategory',
  templateUrl: './infos-randomcategory.component.html',
  styleUrls: ['./infos-randomcategory.component.scss'],
})
export class InfosRandomcategoryComponent implements OnInit {

  @Input()category: string;

  infos : Info[];
  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.getInfos();
  }

  getInfos(): void {
    this.infoService.getInfosCategory(this.category).subscribe(infos => this.infos = infos);
  }
  

  delete(info: Info): void {
    this.infos = this.infos.filter(h => h !== info);
    this.infoService.deleteHero(info).subscribe();
  }
}
