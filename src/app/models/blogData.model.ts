import { BlogDataConstructor } from './types';

export class BlogData {
  tags: string;
  title: string;
  postingDate: Date;
  imageURL: string;
  blogContent: any;

  constructor({
    tags,
    title,
    postingDate,
    imageURL,
    blogContent,
  }: BlogDataConstructor) {
    this.tags = tags;
    this.title = title;
    this.postingDate = new Date(postingDate);
    this.imageURL = imageURL;
    this.blogContent = blogContent;
  }
}
