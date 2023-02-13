import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QueryTypes } from './types';

@Injectable({
  providedIn: 'root',
})
export class UrlBuilderService {
  private baseUrl: string = '';

  constructor() {}

  setBaseUrl(url: string) {
    this.baseUrl = url;
    return this;
  }

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

  limit(limit: number) {
    if (!this.baseUrl.length) throw new Error("There's no url to build");
    this.baseUrl += '/limit/' + limit;

    return this;
  }

  offset(offset: number) {
    if (!this.baseUrl.length) throw new Error("There's no url to build");
    this.baseUrl += '/offset/' + offset;

    return this;
  }

  orderBy(query: string) {
    if (!this.baseUrl.length) throw new Error("There's no url to build");
    this.baseUrl += '/orderby/' + query;
    return this;
  }

  width(width: number) {
    if (!this.baseUrl.length) throw new Error("There's no url to build");
    this.baseUrl += `/${width}w`;
    return this;
  }

  height(height: number) {
    if (!this.baseUrl.length) throw new Error("There's no url to build");
    this.baseUrl += `/${height}h`;

    return this;
  }

  buildImgURL(format: string = 'webp') {
    if (!this.baseUrl.length) throw new Error("There's no url to build");
    return encodeURI(this.baseUrl + `/${format}`);
  }

  buildURL() {
    if (!this.baseUrl.length) throw new Error("There's no url to build");
    return encodeURI(this.baseUrl);
  }
}
