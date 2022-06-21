import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IHeroes } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  heroes: Observable<IHeroes[]>;
  publisher = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.heroes = this.dataService.getHeroes();
  }

  segmentChanged(event) {
    this.publisher = event.detail.value;
  }
}
