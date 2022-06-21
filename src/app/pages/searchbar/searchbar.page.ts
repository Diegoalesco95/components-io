import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IAlbum } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  albums: IAlbum[];
  searchText: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  onSearch(event: any) {
    this.searchText = event.target.value;
  }
}
