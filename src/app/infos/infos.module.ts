import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosPageRoutingModule } from './infos-routing.module';

import { InfosPage } from './infos.page';
import { InfosScienceComponent } from "./infos-science/infos-science.component";
import { InfosHistoryComponent } from './infos-history/infos-history.component';
import { InfosCinemaComponent } from './infos-cinema/infos-cinema.component';
import { InfosAddComponent } from './infos-add/infos-add.component';
import { InfosFromuserComponent } from './infos-fromuser/infos-fromuser.component';
import { InfosLuckyComponent } from './infos-lucky/infos-lucky.component';
import { InfosRandomcategoryComponent } from './infos-randomcategory/infos-randomcategory.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosPageRoutingModule
  ],
  declarations: [InfosPage, InfosScienceComponent, InfosHistoryComponent, InfosCinemaComponent, InfosAddComponent, InfosFromuserComponent, InfosLuckyComponent, InfosRandomcategoryComponent]
})
export class InfosPageModule {}
