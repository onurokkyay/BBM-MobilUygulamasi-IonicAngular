import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfosScienceComponent } from './infos-science/infos-science.component';
import { InfosHistoryComponent } from './infos-history/infos-history.component';
import { InfosCinemaComponent } from './infos-cinema/infos-cinema.component';
import { InfosAddComponent } from './infos-add/infos-add.component';
import { InfosFromuserComponent } from './infos-fromuser/infos-fromuser.component';
import { InfosLuckyComponent } from './infos-lucky/infos-lucky.component';
import { InfosPage } from './infos.page';

const routes: Routes = [
  {
    path: '',
    component: InfosPage
  },
  {
    path: 'science',
    component: InfosScienceComponent
  },
  {
    path: 'history',
    component: InfosHistoryComponent
  },
  {
    path: 'cinema',
    component: InfosCinemaComponent
  },
  {
    path: 'fromuser',
    component: InfosFromuserComponent
  },
  {
    path: 'add',
    component: InfosAddComponent
  },
  {
    path: 'lucky',
    component: InfosLuckyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosPageRoutingModule {}
