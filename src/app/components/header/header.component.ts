import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isFavorite: boolean = false;

  @Input() title: string;
  @Input() withAvatar = false;
  @Input() withButton = false;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
