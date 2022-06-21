import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ModalInfoPage } from 'src/app/pages/modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {}

  ngOnInit() {}

  openModal(type: string) {
    switch (type) {
      case 'card':
        this.showCardModal();
        break;
      case 'sheet':
        this.showSheetModal();
        break;
      default:
        this.showDefaultModal();
    }
  }

  async showCardModal() {
    const modal = await this.modalCtrl.create({
      canDismiss: true,
      component: ModalInfoPage,
      componentProps: {
        title: 'Modal',
        message: 'This is a modal',
        needData: false,
      },
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }

  async showSheetModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        title: 'Modal',
        message: 'This is a modal',
        needData: false,
      },
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
    });
    return await modal.present();
  }

  async showDefaultModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        title: 'Modal',
        message: 'This is a modal',
        needData: true,
      },
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }
}
