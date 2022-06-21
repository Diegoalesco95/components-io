import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  loading: HTMLIonLoadingElement;
  constructor(private loadingCtrl: LoadingController) {}

  ngOnInit() {}

  showLoading() {
    this.presentLoading();
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 2000,
    });

    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
