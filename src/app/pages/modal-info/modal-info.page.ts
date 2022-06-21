import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() needData: boolean;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onClose() {
    this.modalCtrl.dismiss();
  }

  onCloseWithData() {
    this.modalCtrl.dismiss({
      message: 'This is the data that I want to return',
    });
  }
}
