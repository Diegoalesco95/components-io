import { Component, OnInit } from '@angular/core';

interface IComponent {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: IComponent[] = [
    {
      icon: 'american-football-outline',
      name: 'Actions Sheet',
      redirectTo: '/actions-sheet',
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo: '/alert',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
