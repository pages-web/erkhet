import { useLazyQuery } from '@apollo/client';
import { queries } from '../graphql/products';

export const useProducts = () => {
  const [getProducts, { data, loading }] = useLazyQuery(queries.products);

  const { poscProducts: products } = data || {};

  return { getProducts, loading, products };
};
