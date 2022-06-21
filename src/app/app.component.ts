import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IComponent } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  components: Observable<IComponent[]>;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
  }
}
