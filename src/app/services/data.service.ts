import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAlbum, IComponent, IHeroes } from 'src/app/interfaces/interfaces';
import { delay } from 'rxjs/operators';
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

  getHeroes() {
    return this.http
      .get<IHeroes[]>('/assets/data/superheroes.json')
      .pipe(delay(1500));
  }
}
