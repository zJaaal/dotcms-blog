import { BlogInfoConstructor } from './types';

export class BlogInfo {
  id: string;
  title: string;
  postingDate: Date;
  imageURL: string;
  teaser: string;

  constructor({
    id,
    title,
    postingDate,
    imageURL,
    teaser,
  }: BlogInfoConstructor) {
    this.id = id;
    this.title = title;
    this.postingDate = new Date(postingDate);
    this.imageURL = imageURL;
    this.teaser = teaser;
  }
}
