//This model was created with QuickType and used to type correctly the api response

export interface APIResponse {
  publishDate: string;
  postingDate: string;
  inode: string;
  host: string;
  variantId: string;
  locked: boolean;
  stInode: string;
  contentType: string;
  identifier: string;
  image: string;
  urlTitle: string;
  tags: string;
  folder: string;
  hasTitleImage: boolean;
  sortOrder: number;
  hostName: string;
  modDate: string;
  imageMetaData: ImageMetaData;
  blogContent: BlogContent;
  title: string;
  baseType: string;
  archived: boolean;
  working: boolean;
  live: boolean;
  owner: string;
  imageVersion: string;
  imageContentAsset: string;
  languageId: number;
  URL_MAP_FOR_CONTENT: string;
  url: string;
  titleImage: string;
  modUserName: string;
  urlMap: string;
  hasLiveVersion: boolean;
  modUser: string;
  teaser: string;
  __icon__: string;
  contentTypeIcon: string;
}

export interface BlogContent {
  type: string;
  attrs: BlogContentAttrs;
  content: MainContent[];
}

export interface BlogContentAttrs {
  chartCount: number;
  wordCount: number;
  readingTime: number;
}

export interface MainContent {
  type: ContentWrapperType;
  attrs?: DynamicAttrs;
  content?: DynamicContent[];
}

export interface DynamicAttrs {
  textAlign?: TextAlign;
  level?: number;
  src?: null;
  alt?: null;
  title?: null;
  style?: null;
  href?: null;
  data?: Data;
}

export interface Data {
  AUTO_ASSIGN_WORKFLOW?: boolean;
  __icon__: string;
  archived: boolean;
  asset?: string;
  assetContentAsset?: string;
  assetVersion?: string;
  baseType: string;
  contentType: string;
  extension?: string;
  folder: string;
  hasLiveVersion: boolean;
  hasTitleImage: boolean;
  host: string;
  hostName: string;
  identifier: string;
  inode: string;
  isContentlet?: boolean;
  languageId: number;
  live: boolean;
  locked: boolean;
  mimeType?: string;
  modDate: string | number;
  modUser: string;
  modUserName: string;
  name?: string;
  owner: string;
  path?: string;
  publishDate: string | number;
  size?: number;
  sortOrder: number;
  stInode: string;
  statusIcons?: string;
  title: string;
  titleImage: string;
  type?: string;
  url: string;
  working: boolean;
  image2Version?: string;
  image3Version?: string;
  image?: string;
  urlTitle?: string;
  productNumber?: string;
  tags?: string;
  specifications1?: Specifications1;
  image3ContentAsset?: string;
  image2ContentAsset?: string;
  description?: string;
  imageVersion?: string;
  image3?: string;
  imageContentAsset?: string;
  URL_MAP_FOR_CONTENT?: string;
  image2?: string;
  urlMap?: string;
  category?: Category[];
  retailPrice?: string;
  contentTypeIcon?: string;
  language?: string;
}

export interface Category {
  [key: string]: string;
}

export interface Specifications1 {
  [key: string]: string;
}

export enum TextAlign {
  Center = 'center',
  Left = 'left',
}

export interface DynamicContent {
  type: ContentType;
  marks?: WrapperMark[];
  text?: string;
  attrs?: WrapperAttrs;
  content?: WrapperContent[];
}

export interface WrapperAttrs {
  textAlign: TextAlign;
}

export interface WrapperContent {
  type: ContentWrapperType;
  attrs: WrapperAttrs;
  content: ChildContent[];
}

export interface ChildContent {
  type: ContentType;
  marks?: ContentMark[];
  text: string;
}

export interface ContentMark {
  type: MarkType;
}

export enum MarkType {
  Bold = 'bold',
  Underline = 'underline',
  Link = 'link',
}

export enum ContentType {
  ListItem = 'listItem',
  Text = 'text',
}

export enum ContentWrapperType {
  BulletList = 'bulletList',
  DotContent = 'dotContent',
  DotImage = 'dotImage',
  Heading = 'heading',
  Paragraph = 'paragraph',
}

export interface WrapperMark {
  type: string;
  attrs?: MarkAttrs;
}

export interface MarkAttrs {
  href?: string;
  target?: string;
  class?: string | null;
  colspan?: number;
  rowspan?: number;
  colwidth?: null;
}

export interface ImageMetaData {
  modDate: number;
  sha256: string;
  length: number;
  title: string;
  version: number;
  isImage: boolean;
  fileSize: number;
  name: string;
  width: number;
  contentType: string;
  height: number;
}
