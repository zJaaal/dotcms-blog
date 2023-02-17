export interface BlogData {
  id: string;
  title: string;
  postingDate: string;
  imageURL: string;
  teaser: string;
  tags: [] | undefined;
  blogContent: any;
  author: string;
}

export type BlogDataResponse = { data: BlogData[]; maxPage: number };
