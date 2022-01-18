export const loginUserAction = (token) => ({
  type: 'LOGIN',
  payload: token
});

export const logoutUserAction = () => ({
  type: 'LOGOUT',
  payload: ''
});
