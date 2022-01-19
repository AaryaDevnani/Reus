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

export const addItemsAction = (items) => ({
  type: 'ADD_ITEMS',
  payload: items
});

export const deleteItemsAction = (itemId) => ({
  type: 'DELETE_ITEMS',
  payload: itemId
});

export const updateItemQuantityAction = (payload) => ({
  type: 'UPDATE_QTY',
  payload
});

export const storeGroceryItemsAction = (items) => ({
  type: 'STORE_GROCERY_ITEMS',
  payload: items
});

export const addGroceryItemsAction = (item) => ({
  type: 'ADD_GROCERY_ITEMS',
  payload: item
});

export const updateGroceryItemQuantityAction = (payload) => ({
  type: 'UPDATE_GROCERY_QTY',
  payload
});

export const deleteGroceryItemsAction = (itemId) => ({
  type: 'DELETE_GROCERY_ITEMS',
  payload: itemId
});
