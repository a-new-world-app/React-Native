import axios from 'axios';

export const FETCH_USER = 'fetch_user';

export const saveDescription = (description) => async dispatch => {

  const res = await axios.post('/api/current_user', description);
  dispatch({ type: FETCH_USER, payload: res.data });
};
