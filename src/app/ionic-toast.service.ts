import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class IonicToastService {

  constructor( public toast: ToastController) { }
  
  private myToast: any;

  showToast() {
    this.myToast = this.toast.create({
      message: 'Kart başarıyla eklendi',
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
  HideToast() {
    this.myToast = this.toast.dismiss();
  }
}
