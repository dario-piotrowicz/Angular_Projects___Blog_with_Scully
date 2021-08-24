import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  posts$ = this.scullyService.available$.pipe(
    map( posts => posts.filter(post => post.title) )
  );

  constructor(private scullyService: ScullyRoutesService) { }

}
