import { IDeliveryInfo, IOrder } from '@/types/order.types';
import { atom } from 'jotai';
import { focusAtom } from 'jotai-optics';
import { splitAtom } from 'jotai/utils';
import { cartTotalAtom } from './cart.store';
import { currentUserAtom } from './user.store';
export const defaultOrderItem = {
  items: [],
  deliveryInfo: null,
  description: ''
};
export const activeOrderAtom = atom<
  IOrder | { items: []; deliveryInfo: null; description: string }
>({ items: [], deliveryInfo: null, description: '' });

export const orderParamsAtom = atom(get => {
  const {
    items,
    registerNumber,
    billType,
    description,
    deliveryInfo,
    branchId,
    _id,
    saleStatus
  } = get(activeOrderAtom) as IOrder;
  const totalAmount = get(cartTotalAtom);
  const customerId = get(currentUserAtom)?.erxesCustomerId;

  return {
    _id,
    items: items.map(({ _id, count, productId, unitPrice }) => ({
      _id,
      count,
      productId,
      unitPrice
    })),
    totalAmount,
    type: 'delivery',
    customerId,
    registerNumber,
    billType,
    origin: 'kiosk',
    deliveryInfo,
    description,
    branchId,
    saleStatus
  };
});

export const initialLoadingOrderAtom = atom<boolean>(true);
export const loadingOrderAtom = atom<boolean>(false);

export const cudOrderAtom = atom<boolean>(false);

export const itemsAtom = focusAtom(activeOrderAtom, optic =>
  optic.prop('items')
);

export const deliveryInfoAtom = focusAtom(activeOrderAtom, optic =>
  optic.prop('deliveryInfo')
);
export const descriptionAtom = focusAtom(activeOrderAtom, optic =>
  optic.prop('description')
);

export const changeDeliveryInfoAtom = atom(
  get => get(loadingOrderAtom),
  (get, set, v: IDeliveryInfo) => {
    const params = {
      description: `
        Нэр: ${v.firstName},
        ${v.lastName && `Овог: ${v.lastName},`}
        Утасны дугаар: ${v.lastName},
        И-Мэйл хаяг: ${v.email},
        ------------------------- 
        Хот: ${v.city},
        Дүүрэг: ${v.district},
        Хороо: ${v.street},
        Дэлгэрэнгүй: ${v.detail},
        Нэмэлт Анхааруулга: ${
          (v.haveBaby ? 'Нялх хүүхэдтэй, ' : '') +
          (v.callBefore ? 'Хүргэхийн өмнө заавал залгах, ' : '') +
          (v.onlyAfternoon ? 'Зөвхөн оройн цагаар хүргэх' : '')
        }
      `,
      deliveryInfo: v
    };

    if (get(descriptionAtom) !== params.description) {
      set(cudOrderAtom, true);
      set(activeOrderAtom, prev => ({ ...(prev as IOrder), ...params }));
    }
  }
);

export const changeSaleStatusAtom = atom(
  get => get(loadingOrderAtom),
  (_, set, payload: string) => {
    set(activeOrderAtom, prev => ({ ...prev, saleStatus: payload }));
    set(cudOrderAtom, true);
  }
);

export const itemAtomsAtom = splitAtom(itemsAtom);
