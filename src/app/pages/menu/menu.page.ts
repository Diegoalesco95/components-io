import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  constructor(private menuCtrl: MenuController) {}

  ngOnInit() {}

  openCustom() {
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }
}
