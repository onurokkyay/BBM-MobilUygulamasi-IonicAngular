import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos-lucky',
  templateUrl: './infos-lucky.component.html',
  styleUrls: ['./infos-lucky.component.scss'],
})
export class InfosLuckyComponent implements OnInit {

  randomluckyCategory: string;
  random: number;

  constructor() { }

  ngOnInit() {
    this.random=Math.floor(Math.random() * Math.floor(3));
    if(this.random==0){
      this.randomluckyCategory="Tarih"
    }
    else if(this.random==1){
      this.randomluckyCategory="Sinema"
    }
    else {
      this.randomluckyCategory="Bilim"
    }
    
 
  }

  randomcategory(){
    console.log("Calisti");
    this.randomluckyCategory="Tarih";
    console.log(this.randomluckyCategory);
  }
}
