export interface INews {
  _id?:string | any;
  hat?: string | any;
  title?: string;
  text?: string;
  author?: string;
  img?: string;
  publishDate?: Date;
  link?: string;
  active?: boolean;
}