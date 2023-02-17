import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { BlogInfo } from '../../models/blogInfo.model';
import { UrlBuilderService } from '../urlBuilder/url-builder.service';
import { BlogData } from 'src/app/models/blogData.model';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private LIMIT = environment.ITEM_LIMIT_PER_PAGE;

  constructor(private http: HttpClient, private builder: UrlBuilderService) {}

  getBlogList(year?: number, page: number = 1): Observable<BlogInfo[]> {
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

    //Using any because the object that the api returns is really big
    //Quick type my bro
    return this.http.get(finalURL).pipe(
      map(({ contentlets = [] }: any) =>
        contentlets.map(
          (post: any) =>
            ({
              id: post.identifier,
              title: post.title,
              postingDate: post.postingDate,
              imageURL: post.image,
              teaser: post.teaser,
            } as BlogInfo)
        )
      )
    );
  }

  getBlog(id: string): Observable<BlogData | undefined> {
    let url = this.builder
      .baseUrl(environment.API_BASE_ID_URL)
      .raw(id)
      .buildURL();

    return this.http.get(url).pipe(
      map(({ contentlets = [] }: any) => {
        if (!contentlets.length) return;

        let { tags, title, postingDate, image, blogContent, modUserName } =
          contentlets[0];

        return {
          title,
          postingDate,
          blogContent,
          tags: tags?.replace(new RegExp(':[A-Z]+,|,', 'gi'), ' ').split(' '),
          imageURL: image,
          author: modUserName,
        } as BlogData;
      })
    );
  }
}
