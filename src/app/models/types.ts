export type BlogInfoConstructor = {
  id: string;
  title: string;
  postingDate: string;
  imageURL: string;
  teaser: string;
};

export type BlogDataConstructor = {
  tags?: [];
  title: string;
  postingDate: Date;
  imageURL: string;
  blogContent: any;
  author: string;
};
