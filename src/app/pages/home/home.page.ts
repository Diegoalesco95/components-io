import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IComponent } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: Observable<IComponent[]>;

  constructor(
    private dataService: DataService,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
  }

  openMenu() {
    this.menuCtrl.enable(true, 'first');
    this.menuCtrl.open('first');
  }
}
