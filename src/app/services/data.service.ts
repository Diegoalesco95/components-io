import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAlbum, IComponent } from 'src/app/interfaces/interfaces';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts() {
    return this.http.get<IComponent[]>('/assets/data/menu-opts.json');
  }

  getAlbums() {
    return this.http.get<IAlbum[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }
}
