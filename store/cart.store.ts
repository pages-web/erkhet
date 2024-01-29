import { OrderItem, OrderItemInput } from '@/types/order.types';
import { IProduct } from '@/types/product.types';
import { atom } from 'jotai';
import { currentUserAtom } from './user.store';
import { itemsAtom } from './order.store';
import { splitAtom } from 'jotai/utils';

interface IUpdateItem {
  _id: string;
  count?: number;
}

export const changeCartItem = (
  product: IUpdateItem,
  cart: OrderItem[]
): OrderItem[] => {
  const { _id, count } = product;

  if (typeof count === 'number') {
    if (count === 0) return cart.filter((item) => item._id !== _id);

    return cart.map((item) => (item._id === _id ? { ...item, count } : item));
  }

  return cart;
};

export const addToCart = (
  product: IProduct & { count: number },
  cart: OrderItem[]
): OrderItem[] => {
  const prevItem = cart.find(({ productId }) => productId === product._id);

  if (prevItem) {
    const { _id, count } = prevItem;
    return changeCartItem({ _id, count: count + product.count }, cart);
  }

  const { unitPrice, _id, name, attachment } = product;

  const cartItem = {
    _id: Math.random().toString(),
    productId: _id,
    count: 1,
    unitPrice,
    productName: name,
    productImgUrl: attachment?.url,
  };

  return [cartItem, ...cart];
};

export const localCartAtom = atom<OrderItem[]>([]);

export const cartAtom = atom((get) =>
  get(currentUserAtom) ? get(itemsAtom) : get(localCartAtom)
);

export const cartLengthAtom = atom((get) => get(cartAtom).length);

export const cartItemAtomAtoms = splitAtom(cartAtom);

export const addToCartAtom = atom(
  () => '',
  (get, set, payload: IProduct & { count: number }) =>
    set(get(currentUserAtom) ? itemsAtom : localCartAtom, (prev) =>
      addToCart(payload, prev)
    )
);

export const updateCartAtom = atom(
  () => '',
  (get, set, payload: IUpdateItem) =>
    set(get(currentUserAtom) ? itemsAtom : localCartAtom, (prev) =>
      changeCartItem(payload, prev)
    )
);

export const setCartAtom = atom(
  () => '',
  (get, set, update: OrderItem[]) => {
    set(get(currentUserAtom) ? itemsAtom : localCartAtom, update);
  }
);
