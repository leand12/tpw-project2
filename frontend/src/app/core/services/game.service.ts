import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import {serviceURL} from '../constants/url';
import {GameModel} from '@core/models/game.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable()
export class GameService {

  constructor(private http: HttpClient) {
  }

  getGames(pertainingArticle?: number): Observable<GameModel[]> {
    let url = serviceURL + 'games/?';
    if (pertainingArticle !== undefined) {
      url += 'pertaining_article=' + pertainingArticle;
    }
    return this.http.get<GameModel[]>(url, httpOptions);
  }

  getGame(id: number): Observable<GameModel> {
    const url = serviceURL + 'game/?id=' + id;
    return this.http.get<GameModel>(url, httpOptions);
  }

  createGame(game: GameModel, image?: File): Observable<any> {
    const payload = new FormData();

    payload.append('data', JSON.stringify(game));
    console.log(image);
    if (image) {
      payload.append('file', image, image.name);
    }
    console.log(payload);
    console.log(payload.get('file'));
    console.log(payload.get('data'));

    const url = baseURL + 'create/game/';
    return this.http.post(url, payload, httpOptions);
  }

  updateGame(game: GameModel, image?: File): Observable<any> {
    const payload = new FormData();

    payload.append('data', JSON.stringify(game));
    if (image) {
      payload.append('file', image, image.name);
    }

    const url = baseURL + 'update/game/?id=' + game.id;
    return this.http.put(url, payload, httpOptions);
  }

  deleteGame(id: number): Observable<any> {
    const url = serviceURL + 'delete/game/' + id + '/';
    return this.http.delete(url, httpOptions);
  }
}
