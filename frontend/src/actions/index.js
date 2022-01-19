export const loginUserAction = (token) => ({
  type: 'LOGIN',
  payload: token
});

export const logoutUserAction = () => ({
  type: 'LOGOUT',
  payload: ''
});

export const storeItemsAction = (items) => ({
  type: 'STORE_ITEMS',
  payload: items
});

export const updateItemQuantityAction = (payload) => ({
  type: 'UPDATE_QTY',
  payload
});
