import { Injectable } from '@angular/core';
import { ArticlesModule } from '../../features/articles/articles.module';


@Injectable({
  providedIn: ArticlesModule
})
export class ReviewService {

  constructor() { }
}
