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

  createGame(game: GameModel): Observable<any> {
    const url = serviceURL + 'create/game/';
    return this.http.post(url, game, httpOptions);
  }

  updateGame(game: GameModel): Observable<any> {
    const url = serviceURL + 'update/game/?id=' + game.id;
    return this.http.put(url, game, httpOptions);
  }

  deleteGame(id: number): Observable<any> {
    const url = serviceURL + 'delete/game/' + id + '/';
    return this.http.delete(url, httpOptions);
  }
}
