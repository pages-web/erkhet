import { IProduct } from './product.types';

export interface CustomField {
  field: string;
  value: string;
  stringValue: string;
}

export interface Group {
  fieldId: string;
  title: string;
}

export type IAttachment = { url?: string } | null;

export interface IProductDetail extends IProduct {
  attachmentMore?: IAttachment[];
  category?: ICategory;
}

export interface IUseProducts {
  loading: boolean;
  products: IProduct[];
  productsCount: number;
  handleLoadMore: () => void;
}

export interface ICategory {
  _id: string;
  name: string;
  isRoot: boolean;
  order: string;
}
