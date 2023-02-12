import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { BlogInfo } from '../models/blogInfo.model';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private LIMIT = 4;

  constructor(private http: HttpClient) {}

  getInfo(year?: number, page: number = 1) {
    let OFFSET = this.LIMIT * (page - 1);
    let dateQuery = year
      ? environment.DATE_QUERY_TEMPLATE.replaceAll('YEAR', year.toString())
      : '';

    let url = environment.API_BASE_QUERY_URL.replace(
      new RegExp('DATE_QUERY|LIMIT|OFFSET', 'g'),
      (match) => {
        switch (match) {
          case 'DATE_QUERY': {
            return encodeURI(dateQuery);
          }
          case 'LIMIT': {
            return this.LIMIT.toString();
          }
          case 'OFFSET': {
            return OFFSET.toString();
          }
          default: {
            return '';
          }
        }
      }
    );

    return this.http.get(url).pipe(
      map((response: any) =>
        response.contentlets
          ? response.contentlets.map((post: any) => {
              return new BlogInfo(
                post.identifier,
                post.title,
                post.postingDate,
                post.image
              );
            })
          : []
      )
    );
  }

  getBlog(id: string) {
    let url = environment.API_BASE_ID_URL.replace('IDENTIFIER', id);

    return this.http
      .get(url)
      .pipe(map((response: any) => response.contentlets[0]));
  }
}
