import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Ana Sayfa',
      url: '/infos',
      icon: 'home'
    },
    {
      title: 'Bilim',
      url: '/infos/science',
      icon: 'flask'
    },
    {
      title: 'Tarih',
      url: '/infos/history',
      icon: 'book'
    },
    {
      title: 'Sinema',
      url: '/infos/cinema',
      icon: 'film'
    },
    {
      title: 'Sizden Gelenler',
      url: '/infos/fromuser',
      icon: 'telescope'
    },
    {
      title: 'Bilgi Ekle',
      url: '/infos/add',
      icon: 'add'
    },
    {
      title: 'Kendimi Şanslı Hissediyorum',
      url: '/infos/lucky',
      icon: 'star'
    }
    
  ];
 // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
