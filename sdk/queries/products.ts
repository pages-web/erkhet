import { getClient } from '@/sdk/ssClient';
import { queries } from '../graphql/products';
import { IProduct } from '@/types/product.types';
import {
  GetCategories,
  IProductDetail,
  IGetParent,
  CommonParams,
  ICategory
} from '@/types/products.types';
import type { LinkProps } from 'next/link';
import { Breadcrumb } from '@/components/breadcrumb/breadcrumb';

export const getCategories: GetCategories = async params => {
  const { data, error } = await getClient().query({
    query: queries.productCategories,
    variables: params?.variables
  });
  const { poscProductCategories: categories } = data || {};

  const getParent: IGetParent = (parentId: string) =>
    categories.find((c: ICategory) => c._id === parentId);

  const primaryCategories = (categories || []).filter(
    (category: ICategory) => !getParent(category.parentId)
  );
  console.log(categories, '--------------->');
  return {
    categories,
    error_msg: error?.message,
    primaryCategories,
    getParent
  };
};

type GetProducts = (params?: CommonParams) => Promise<{
  products: IProduct[];
  count: number;
  error_msg: string | undefined;
}>;

export const getProducts: GetProducts = async params => {
  const { perPage, page, sortField, sortDirection, ...variables } =
    params?.variables || {};
  const { data, error } = await getClient().query({
    query: queries.products,
    variables: params?.variables
  });
  const count = await getClient().query({
    query: queries.productsCount,
    variables: variables
  });
  const { poscProducts: products } = data || {};
  return {
    products,
    count: count?.data?.poscProductsTotalCount,
    error_msg: error?.message
  };
};

type GetProductDetail = (params?: CommonParams) => Promise<{
  product: IProductDetail;
  error_msg: string | undefined;
}>;

export const getProductDetail: GetProductDetail = async params => {
  const { data, error } = await getClient().query({
    query: queries.productDetail,
    variables: params?.variables
  });
  const { poscProductDetail: product } = data || {};
  return { product, error_msg: error?.message };
};

type GetBreadcrumbs = (order: string, categories: ICategory[]) => Breadcrumb[];

export const getBreadcrumbs: GetBreadcrumbs = (order, categories) => {
  return order
    .split('/')
    .map(code => {
      const cat = categories.find(c => c.code === code);
      if (!cat) return null;
      return {
        name: cat?.name,
        link: {
          pathname: '/category',
          query: { order: cat?.order }
        } as LinkProps['href']
      };
    })
    .filter(cat => cat !== null) as Breadcrumb[];
};
