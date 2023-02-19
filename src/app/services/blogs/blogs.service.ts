import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENVIRONMENT } from 'src/environments/environment';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { BlogData, BlogDataResponse } from 'src/app/models/BlogData.model';
import { APIResponse } from 'src/app/models/ApiResponse.model';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private currentDataSubject = new BehaviorSubject<BlogData[]>([]);

  private currentSubject = this.currentDataSubject.asObservable();

  private LIMIT = ENVIRONMENT.ITEM_LIMIT_PER_PAGE;

  constructor(private http: HttpClient) {}

  /**
   * @description This method fetches all the data and parse it to a manipulable and smaller object
   */
  getAllData(): void {
    this.http
      .get<BlogData>(ENVIRONMENT.API_BASE_QUERY_URL)
      .pipe(
        map(({ contentlets = [] }: any) =>
          contentlets.map((post: APIResponse) => {
            const {
              tags,
              image,
              title,
              teaser,
              identifier,
              modUserName,
              postingDate,
              blogContent,
            } = post;

            return {
              title,
              teaser,
              postingDate,
              blogContent,
              id: identifier,
              imageURL: image,
              author: modUserName,
              tags: tags?.split(new RegExp(':[A-Z]+,|,', 'gi')),
            };
          })
        )
      )
      .subscribe((data) => {
        this.currentDataSubject.next(data);
      });
  }

  /**
   * @description This method uses the fetched data and makes a pagination with it using year and page as filters.
   * @param year
   * @param page
   * @returns
   */
  getBlogList(year?: number, page: number = 0): Observable<BlogDataResponse> {
    // The index where it should start
    const index = page && Math.abs(page * this.LIMIT);

    // The index it should end
    const finishIndex = this.LIMIT + index;

    return this.currentSubject.pipe(
      map((response) =>
        response.filter(({ postingDate }: BlogData) =>
          year ? new Date(postingDate).getFullYear() == year : true
        )
      ),
      map((data) => ({
        data: data.slice(index, finishIndex) as BlogData[],
        maxPage: Math.ceil(data.length / this.LIMIT),
      }))
    );
  }

  /**
   * @description This method gets one blog using the identifier as filter
   * @param identifier
   * @returns
   */
  getBlog(identifier: string): Observable<BlogData | undefined> {
    return this.currentSubject.pipe(
      map((data) => data.find(({ id }: BlogData) => identifier == id))
    );
  }
}

// Last code:

//Pros: This let me fetch only the needed data
//Cons: The pagination is a mess because I don't know the limit of the data it will come for page

//Solution: Fetch all the data once and manipulate the page and filtering in front end
//Pros: This makes the pagination more clean
//Cons: You have to fetch all the data at first time which can be time consuming for the loading time

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
