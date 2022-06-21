import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  slides = [
    {
      src: 'https://images.unsplash.com/photo-1655827751308-b596d5d52296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'First Slide',
      description: 'This is a description for the first slide.',
    },
    {
      src: 'https://images.unsplash.com/photo-1655808166424-9b543b6982fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Second Slide',
      description: 'This is a description for the second slide.',
    },
    {
      src: 'https://images.unsplash.com/photo-1655814531620-6b33b9cb9ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Third Slide',
      description: 'This is a description for the third slide.',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
