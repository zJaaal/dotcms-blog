// Unused but interesting service

// This service was use to build all the urls in a dynamic way, because
// I could use the functional programming builder pattern to build querys/params
// in a url in a better way than using static template literals

// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { QueryTypes } from './types';

// @Injectable({
//   providedIn: 'root',
// })
// export class UrlBuilderService {
//   private baseUrlString: string = '';

//   private queryString: string = '';
//   private paramsString: string = '';
//   private imageString: string = '';

//   constructor() {}

//   /**
//    * @description You should execute this method with a valid url in order to work
//    * @param url
//    * @returns URLBuilder
//    */
//   baseUrl(url: string) {
//     //This is to reset the values
//     this.queryString = '';
//     this.paramsString = '';
//     this.imageString = '';

//     this.baseUrlString = url;
//     return this;
//   }

//   /**
//    * @description You can set queries with this method, string for select queries and DateQuery object for Date range
//    * @param query QueryTypes
//    * @returns URLBuilder
//    */
//   query(query: QueryTypes) {
//     if (!this.baseUrlString.length) throw new Error("There's no url to build");
//
//       this.queryString += !this.queryString.includes('/query/') ? '/query/' : '';

//     if (typeof query == 'string') {
//        this.queryString += query;
//     } else {
//       this.queryString += environment.DATE_QUERY_TEMPLATE.replace(
//         new RegExp('QUERY|FROMTIME|TOTIME', 'g'),
//         (match) => {
//           if (match == 'QUERY') return query.luceneQuery;
//           if (match == 'FROMTIME') return query.from;
//           if (match == 'TOTIME') return query.to;
//           return match;
//         }
//       );
//     }
//     return this;
//   }

//   /**
//    * @description You can set query params using a key and a value
//    * @param key string
//    * @param value number|string
//    * @returns URLBuilder
//    */
//   param(key: string, value: string | number) {
//     if (!this.baseUrlString.length) throw new Error("There's no url to build");
//     this.paramsString += `/${key}/${value}`;
//     return this;
//   }

//   /**
//    * @description You can set query using a raw string
//    * @param params string
//    * @returns URLBuilder
//    */
//   raw(params: string) {
//     if (!this.baseUrlString.length) throw new Error("There's no url to build");
//     this.paramsString += params;

//     return this;
//   }

//   /**
//    * @description You can set width of image (use only with url images of dotCMS)
//    * @param width number
//    * @returns URLBuilder
//    */
//   width(width: number) {
//     if (!this.baseUrlString.length) throw new Error("There's no url to build");
//     this.imageString += `/${width}w`;
//     return this;
//   }
//   /**
//    * @description You can set height of image (use only with url images of dotCMS)
//    * @param height number
//    * @returns URLBuilder
//    */
//   height(height: number) {
//     if (!this.baseUrlString.length) throw new Error("There's no url to build");
//     this.imageString += `/${height}h`;

//     return this;
//   }

//   /**
//    * @description This method builds the URL and set the format (use only with url images of dotCMS)
//    * @param format string
//    * @returns URL
//    */
//   buildImgURL(format: string = 'webp') {
//     if (!this.baseUrlString.length) throw new Error("There's no url to build");

//     return encodeURI(this.baseUrlString + this.imageString + `/${format}`);
//   }

//   /**
//    * @description This method builds the URL
//    * @returns URL
//    */
//   buildURL() {
//     if (!this.baseUrlString.length) throw new Error("There's no url to build");

//     return encodeURI(this.baseUrlString + this.queryString + this.paramsString);
//   }
// }
