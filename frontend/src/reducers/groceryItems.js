const initialState = {
  groceries: []
};

const groceryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'STORE_GROCERY_ITEMS':
      return { groceries: payload };
    case 'ADD_GROCERY_ITEMS':
      return { groceries: [...state.groceries, payload] };
    case 'UPDATE_GROCERY_QTY':
      const updatedItems = state.groceries.map((i) => {
        if (i._id === payload._id) {
          i.quantity = payload.quantity;
        }
        return i;
      });
      return { groceries: updatedItems };
    case 'DELETE_GROCERY_ITEMS': {
      const updatedItems = state.groceries.filter((i) => i._id !== payload);
      return { groceries: updatedItems };
    }

    default:
      return state;
  }
};

export default groceryReducer;
