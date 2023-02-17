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
