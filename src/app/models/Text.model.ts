interface Text {
  textAlign: string;
}

export interface HeadingAttributes extends Text {
  level: number;
}

export type Marks = {
  type: string;
  attrs?: { [key: string]: string } | Link;
};

export type Link = {
  class?: string;
  href: string;
  target: string;
};
