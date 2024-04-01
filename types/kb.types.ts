import { IAttachment } from '.';

export interface IArticle {
  _id: string;
  content: string;
  image?: IAttachment;
  attachments?: IAttachment[];
  summary?: string;
  title: string;
}

export interface IKBCategoryDetail {
  _id: string;
  title: string;
  description?: string;
  articles: IArticle[];
}
