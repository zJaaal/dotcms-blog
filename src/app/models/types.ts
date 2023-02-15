export type BlogInfoConstructor = {
  id: string;
  title: string;
  postingDate: string;
  imageURL: string;
  teaser: string;
};

interface Text {
  textAlign: string;
}

export interface HeadingAttributes extends Text {
  level: number;
}

export type Destination = {
  imageContentAsset: string;
  title: string;
  seodescription: string;
};

export type Product = {
  specifications1?: { [key: string]: string };
  image: string;
  title: string;
  description: string;
  retailPrice: string;
};

export type Marks = {
  type: string;
  attrs?: { [key: string]: string } | Link;
};

export type Link = {
  class?: string;
  href: string;
  target: string;
};

export type BlogDataConstructor = {
  tags?: [];
  title: string;
  postingDate: Date;
  imageURL: string;
  blogContent: any;
  author: string;
};
