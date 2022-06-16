import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  birthday = new Date();

  constructor() {}

  ngOnInit() {}

  onChangeDate(event) {
    this.birthday = new Date(event.detail.value);
  }
}
