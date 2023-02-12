export class BlogInfo {
  id: string;
  title: string;
  postingDate: Date;
  imageUrl: string;

  constructor(
    id: string,
    title: string,
    postingDate: string,
    imageUrl: string
  ) {
    this.id = id;
    this.title = title;
    this.postingDate = new Date(postingDate);
    this.imageUrl = imageUrl;
  }
}
