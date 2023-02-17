import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { BlogData, BlogDataResponse } from 'src/app/models/BlogData.model';
import { APIResponse } from 'src/app/models/ApiResponse.model';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private currentDataSubject = new BehaviorSubject<BlogData[]>([]);

  private currentSubject = this.currentDataSubject.asObservable();

  private LIMIT = environment.ITEM_LIMIT_PER_PAGE;

  constructor(private http: HttpClient) {}

  getAllData(): void {
    this.http
      .get(environment.API_BASE_QUERY_URL)
      .pipe(
        map(({ contentlets = [] }: any) =>
          contentlets.map(
            //Using any because the object that the api returns is really big
            (post: APIResponse) =>
              ({
                id: post.identifier,
                title: post.title,
                postingDate: post.postingDate,
                imageURL: post.image,
                teaser: post.teaser,
                tags: post.tags
                  ?.replace(new RegExp(':[A-Z]+,|,', 'gi'), ' ')
                  .split(' '),
                author: post.modUserName,
                blogContent: post.blogContent,
              } as BlogData)
          )
        )
      )
      .subscribe((data) => {
        this.currentDataSubject.next(data);
      });
  }

  getBlogList(year?: number, page: number = 0): Observable<BlogDataResponse> {
    const index = page && Math.abs(page * this.LIMIT - 1);

    return this.currentSubject.pipe(
      map((response) =>
        response.filter(({ postingDate }: BlogData) =>
          year ? new Date(postingDate).getFullYear() == year : true
        )
      ),
      map((data) => ({
        data: data.slice(index, this.LIMIT + index) as BlogData[],
        maxPage: Math.ceil(data.length / this.LIMIT),
      }))
    );
  }

  getBlog(identifier: string): Observable<BlogData | undefined> {
    return this.currentSubject.pipe(
      map((data) => data.find(({ id }: BlogData) => identifier == id))
    );
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// import { map, Observable } from 'rxjs';
// import { BlogInfo } from '../../models/blogInfo.model';
// import { UrlBuilderService } from '../urlBuilder/url-builder.service';
// import { BlogData } from 'src/app/models/blogData.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class BlogsService {
//   private LIMIT = environment.ITEM_LIMIT_PER_PAGE;

//   constructor(private http: HttpClient, private builder: UrlBuilderService) {}

//   getBlogList(year?: number, page: number = 1): Observable<BlogInfo[]> {
//     const OFFSET = this.LIMIT * (page - 1);

//     let baseQuery = this.builder
//       .baseUrl(environment.API_BASE_QUERY_URL)
//       .query('+ContentType:Blog');

//     if (year) {
//       baseQuery = baseQuery.query({
//         luceneQuery: '+Blog.postingDate',
//         from: `${year}0101`,
//         to: `${year}1231`,
//       });
//     }

//     const finalURL = baseQuery
//       .param('limit', this.LIMIT)
//       .param('offset', OFFSET)
//       .param('orderby', 'modDate desc')
//       .buildURL();

//     return this.http.get(finalURL).pipe(
//       map(({ contentlets = [] }: any) =>
//         contentlets.map(
//           (post: any) =>
//             ({
//               id: post.identifier,
//               title: post.title,
//               postingDate: post.postingDate,
//               imageURL: post.image,
//               teaser: post.teaser,
//             } as BlogInfo)
//         )
//       )
//     );
//   }

//   getBlog(id: string): Observable<BlogData | undefined> {
//     let url = this.builder
//       .baseUrl(environment.API_BASE_ID_URL)
//       .raw(id)
//       .buildURL();

//     return this.http.get(url).pipe(
//       map(({ contentlets = [] }: any) => {
//         if (!contentlets.length) return;

//         let { tags, title, postingDate, image, blogContent, modUserName } =
//           contentlets[0];

//         return {
//           title,
//           postingDate,
//           blogContent,
//           tags: tags?.replace(new RegExp(':[A-Z]+,|,', 'gi'), ' ').split(' '),
//           imageURL: image,
//           author: modUserName,
//         } as BlogData;
//       })
//     );
//   }
// }
