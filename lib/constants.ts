export const PER_PAGE = 20;

export const ORDER_STATUSES = {
  NEW: 'new',
  DOING: 'doing',
  REDOING: 'reDoing',
  DONE: 'done',
  COMPLETE: 'complete',
  PENDING: 'pending',
  RETURN: 'return',

  ALL: ['new', 'doing', 'done', 'complete', 'reDoing', 'pending', 'return'],
  FULL: ['paid', 'done', 'complete']
};

export const ORDER_SALE_STATUS = {
  CART: 'cart',
  CONFIRMED: 'confirmed',
  ALL: ['cart', 'confirmed']
};
