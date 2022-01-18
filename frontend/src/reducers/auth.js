import jwtDecode from 'jwt-decode';

const initialState = {
  token: '',
  email: '',
  userId: ''
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      const { email, _id } = jwtDecode(payload.token);
      return { token: payload.token, email, userId: _id };
    case 'LOGOUT':
      return { token: '', email: '', userId: '' };

    default:
      return state;
  }
};

export default authReducer;
