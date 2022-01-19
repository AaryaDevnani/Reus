const initialState = {
  donations: [
    {
      _id: 0,
      name: 'Paneer'
    },
    {
      _id: 2,
      name: 'Apples'
    },
    {
      _id: 3,
      name: 'Cola'
    }
  ]
};

const donationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_DONATION':
      return { donations: [...state.donations, payload] };
    case 'DELETE_DONATION': {
      const updatedItems = state.donations.filter((i) => i._id !== payload);
      return { donations: updatedItems };
    }
    case 'DELETE_ALL_DONATION': {
      return { donations: [] };
    }
    default:
      return state;
  }
};

export default donationReducer;
