import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  showData = false;
  user = {
    name: '',
    email: '',
    password: '',
    phone: '',
    birthdate: '',
  };

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.user);
    this.showData = true;
  }

  onReset() {
    this.user = {
      name: '',
      email: '',
      password: '',
      phone: '',
      birthdate: '',
    };
    this.showData = false;
  }
}
