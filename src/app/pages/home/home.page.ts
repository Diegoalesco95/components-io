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
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'person-circle-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/button',
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card',
    },
    {
      icon: 'checkbox-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox',
    },
    {
      icon: 'calendar-outline',
      name: 'Datetime',
      redirectTo: '/date-time',
    },
    {
      icon: 'balloon-outline',
      name: 'Floating Action Button',
      redirectTo: '/fab',
    },
    {
      icon: 'cube-outline',
      name: 'Grid',
      redirectTo: '/grid',
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite Scroll',
      redirectTo: '/infinite-scroll',
    },
    {
      icon: 'pencil-outline',
      name: 'Input',
      redirectTo: '/input',
    },
    {
      icon: 'list-outline',
      name: 'List',
      redirectTo: '/list',
    },
    {
      icon: 'refresh-outline',
      name: 'Loading',
      redirectTo: '/loading',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
