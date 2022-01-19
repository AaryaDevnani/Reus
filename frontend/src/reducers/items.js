const initialState = {
  inventory: []
};

const itemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'STORE_ITEMS':
      return { inventory: payload };
    case 'ADD_ITEMS':
      return { inventory: [...state.inventory, payload] };
    case 'UPDATE_QTY':
      const updatedItems = state.inventory.map((i) => {
        if (i._id === payload._id) {
          i.quantity = payload.quantity;
        }
        return i;
      });
      return { inventory: updatedItems };
    case 'DELETE_ITEMS': {
      const updatedItems = state.inventory.filter((i) => i._id !== payload);
      return { inventory: updatedItems };
    }

    default:
      return state;
  }
};

export default itemReducer;
