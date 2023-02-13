import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QueryTypes } from './types';

@Injectable({
  providedIn: 'root',
})
export class UrlBuilderService {
  private baseUrl: string = '';

  constructor() {}

  /**
   * @description You should execute this method with a valid url in order to work
   * @param url
   * @returns URLBuilder
   */
  setBaseUrl(url: string) {
    this.baseUrl = url;
    return this;
  }

  /**
   * @description You can set queries with this method, string for select queries and DateQuery object for Date range
   * @param query string | QueryTypes
   * @returns URLBuilder
   */
  query(query: QueryTypes) {
    if (!this.baseUrl.length) throw new Error("There's no url to build");

    if (typeof query == 'string') {
      this.baseUrl += !this.baseUrl.includes('query')
        ? '/query/' + query
        : ' ' + query;
    } else {
      this.baseUrl += environment.DATE_QUERY_TEMPLATE.replace(
        new RegExp('QUERY|FROMTIME|TOTIME', 'g'),
        (match) => {
          if (match == 'QUERY') return query.luceneQuery;
          if (match == 'FROMTIME') return query.from;
          if (match == 'TOTIME') return query.to;
          return match;
        }
      );
    }
    return this;
  }

  /**
   * @description You can set limit with this method
   * @param limit number
   * @returns URLBuilder
   */
  limit(limit: number) {
    if (!this.baseUrl.length) throw new Error("There's no url to build");
    this.baseUrl += '/limit/' + limit;

    return this;
  }

  /**
   * @description You can set offset with this method
   * @param offset number
   * @returns URLBuilder
   */
  offset(offset: number) {
    if (!this.baseUrl.length) throw new Error("There's no url to build");
    this.baseUrl += '/offset/' + offset;

    return this;
  }

  /**
   * @description You can set an oderby query with this method
   * @param query string
   * @returns URLBuilder
   */
  orderBy(query: string) {
    if (!this.baseUrl.length) throw new Error("There's no url to build");
    this.baseUrl += '/orderby/' + query;
    return this;
  }

  /**
   * @description You can set width of image (use only with url images of dotCMS)
   * @param width number
   * @returns URLBuilder
   */
  width(width: number) {
    if (!this.baseUrl.length) throw new Error("There's no url to build");
    this.baseUrl += `/${width}w`;
    return this;
  }
  /**
   * @description You can set height of image (use only with url images of dotCMS)
   * @param height number
   * @returns URLBuilder
   */
  height(height: number) {
    if (!this.baseUrl.length) throw new Error("There's no url to build");
    this.baseUrl += `/${height}h`;

    return this;
  }

  /**
   * @description This method builds the URL and set the format (use only with url images of dotCMS)
   * @param format string
   * @returns URL
   */
  buildImgURL(format: string = 'webp') {
    if (!this.baseUrl.length) throw new Error("There's no url to build");
    return encodeURI(this.baseUrl + `/${format}`);
  }

  /**
   * @description This method builds the URL
   * @returns URL
   */
  buildURL() {
    if (!this.baseUrl.length) throw new Error("There's no url to build");
    return encodeURI(this.baseUrl);
  }
}
