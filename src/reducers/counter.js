const initialState = {
  value: 0
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET_COUNTER = 'RESET_COUNTER';

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    case RESET_COUNTER:
      return { ...state, value: 0 };
    default:
      return state;
  }
}

export const incrementCounter = () => ({ type: INCREMENT });

export const decrementCounter = () => ({ type: DECREMENT });

export const resetCounter = () => ({ type: RESET_COUNTER });

export const getter = (state, dispatch) => {
  if (state.value === 0) {
    setTimeout(() => {
      console.log('UPDATING COUNTER STATE');
      dispatch(incrementCounter());
    }, 2000);
  }
};
