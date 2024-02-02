import { OrderItem, OrderItemInput } from '@/types/order.types';
import { IProduct } from '@/types/product.types';
import { atom } from 'jotai';
import { currentUserAtom } from './user.store';
import { crudOrderAtom, itemsAtom, loadingOrderAtom } from './order.store';
import { splitAtom, atomWithStorage } from 'jotai/utils';

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
    if (count === 0) return cart.filter(item => item._id !== _id);

    return cart.map(item => (item._id === _id ? { ...item, count } : item));
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

  const { unitPrice, _id, name, attachment, count } = product;

  const cartItem = {
    _id: Math.random().toString(),
    productId: _id,
    count,
    unitPrice,
    productName: name,
    productImgUrl: attachment?.url
  };

  return [...cart, cartItem];
};

export const localCartAtom = atomWithStorage<OrderItem[]>('localCart', []);

export const cartAtom = atom(get =>
  get(currentUserAtom) ? get(itemsAtom) : get(localCartAtom)
);

export const cartLengthAtom = atom(get => get(cartAtom).length);

export const cartTotalAtom = atom<number>(get =>
  (get(cartAtom) || []).reduce(
    (total, item) => total + (item?.count || 0) * (item.unitPrice || 0),
    0
  )
);

export const cartItemAtomAtoms = splitAtom(cartAtom);

export const addToCartAtom = atom(
  get => get(loadingOrderAtom),
  (get, set, payload: IProduct & { count: number }) => {
    set(get(currentUserAtom) ? itemsAtom : localCartAtom, prev =>
      addToCart(payload, prev)
    );
    !!get(currentUserAtom) && set(crudOrderAtom, true);
  }
);

export const updateCartAtom = atom(
  get => get(loadingOrderAtom),
  (get, set, payload: IUpdateItem) => {
    set(get(currentUserAtom) ? itemsAtom : localCartAtom, prev =>
      changeCartItem(payload, prev)
    );
    !!get(currentUserAtom) && set(crudOrderAtom, true);
  }
);

export const setCartAtom = atom(
  () => '',
  (get, set, update: OrderItem[]) => {
    set(get(currentUserAtom) ? itemsAtom : localCartAtom, update);
  }
);
