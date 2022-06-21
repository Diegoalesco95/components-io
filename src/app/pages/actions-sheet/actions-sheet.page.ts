import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actions-sheet',
  templateUrl: './actions-sheet.page.html',
  styleUrls: ['./actions-sheet.page.scss'],
})
export class ActionsSheetPage implements OnInit {
  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {}

  onClick() {
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          id: 'delete-button',
          cssClass: 'red-button',
          data: {
            type: 'delete',
          },
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Share',
          icon: 'share-outline',
          data: 10,
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle-outline',
          data: 'Data value',
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Favorite',
          icon: 'heart-outline',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}
