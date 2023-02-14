import { BlogDataConstructor } from './types';

export class BlogData {
  tags: [] | undefined;
  title: string;
  postingDate: Date;
  imageURL: string;
  blogContent: any;
  author: string;

  constructor({
    tags,
    title,
    postingDate,
    imageURL,
    blogContent,
    author,
  }: BlogDataConstructor) {
    this.tags = tags;
    this.title = title;
    this.postingDate = new Date(postingDate);
    this.imageURL = imageURL;
    this.blogContent = blogContent;
    this.author = author;
  }
}
