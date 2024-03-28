import { IAttachment } from '.';

export interface IArticle {
  _id: string;
  content: string;
  image?: IAttachment;
  attachments?: IAttachment[];
}
