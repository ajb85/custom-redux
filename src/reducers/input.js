const initialState = {
  value: ''
};

const UPDATE_TEXT = 'UPDATE_TEXT';
const CLEAR_TEXT = 'CLEAR_TEXT';

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TEXT:
      return { ...state, value: action.payload };
    case CLEAR_TEXT:
      return { ...state, value: '' };
    default:
      return state;
  }
}

export const updateText = payload => ({ type: UPDATE_TEXT, payload });

export const clearText = () => ({ type: CLEAR_TEXT });

export const getter = (state, dispatch) => {
  if (!state.value) {
    setTimeout(() => {
      console.log('UPDATING INPUT STATE');
      dispatch(updateText('Hello World'));
    }, 3000);
  }
};
