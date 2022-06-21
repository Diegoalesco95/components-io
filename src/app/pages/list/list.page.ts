import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnDestroy {
  users: any[];
  users$: Subscription;
  canReorder = false;
  @ViewChild(IonList) ionList: IonList;

  constructor(private dataService: DataService) {
    this.users$ = this.dataService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.users$.unsubscribe();
  }

  delete(user) {
    console.log('delete', user);
    this.ionList.closeSlidingItems();
  }

  doReorder(event) {
    const movedItem = this.users.splice(event.detail.from, 1)[0];
    this.users.splice(event.detail.to, 0, movedItem);
    event.detail.complete();
  }

  favorite(user) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
  }

  share(user) {
    console.log('share', user);
    this.ionList.closeSlidingItems();
  }

  toggleReorder() {
    this.canReorder = !this.canReorder;
  }
}
