import { Dispatch } from 'redux';

export const showModal = () => (dispatch: Dispatch) => {
  dispatch({
    type: 'show',
  });
};

export const closeModal = () => (dispatch: Dispatch) => {
  dispatch({
    type: 'close',
  });
};
