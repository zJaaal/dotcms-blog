import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { BlogInfo } from '../../models/blogInfo.model';
import { UrlBuilderService } from '../urlBuilder/url-builder.service';
import { BlogData } from 'src/app/models/blogData.model';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private LIMIT = environment.ITEM_LIMIT_PER_PAGE;

  constructor(private http: HttpClient, private builder: UrlBuilderService) {}

  getInfo(year?: number, page: number = 1) {
    let OFFSET = this.LIMIT * (page - 1);

    let baseQuery = this.builder
      .baseUrl(environment.API_BASE_QUERY_URL)
      .query('+ContentType:Blog');

    if (year) {
      baseQuery = baseQuery.query({
        luceneQuery: '+Blog.postingDate',
        from: `${year}0101`,
        to: `${year}1231`,
      });
    }

    const finalURL = baseQuery
      .param('limit', this.LIMIT)
      .param('offset', OFFSET)
      .param('orderby', 'modDate desc')
      .buildURL();

    //After we use the builder we reset it
    this.builder.destroy();

    //Using any because the object that the api returns is really big
    return this.http.get(finalURL).pipe(
      map((response: any) =>
        response.contentlets
          ? response.contentlets.map((post: any) => {
              return new BlogInfo({
                id: post.identifier,
                title: post.title,
                postingDate: post.postingDate,
                imageURL: post.image,
                teaser: post.teaser,
              });
            })
          : []
      )
    );
  }

  getBlog(id: string) {
    let url = environment.API_BASE_ID_URL.replace('IDENTIFIER', id);

    return this.http.get(url).pipe(
      map((response: any) => {
        let data = response.contentlets[0];
        return data
          ? new BlogData({
              tags: data.tags?.replace(new RegExp(':|,', 'g'), ' ').split(' '),
              title: data.title,
              postingDate: data.postingDate,
              imageURL: data.image,
              blogContent: data.blogContent,
              author: data.modUserName,
            })
          : undefined;
      })
    );
  }
}
