const initialState = {
  inventory: []
};

const itemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'STORE_ITEMS':
      return { inventory: payload };
    case 'UPDATE_QTY':
      const updatedItems = state.inventory.map((i) => {
        if (i._id === payload._id) {
          i.quantity = payload.quantity;
        }
        return i;
      });
      return { inventory: updatedItems };

    default:
      return state;
  }
};

export default itemReducer;
