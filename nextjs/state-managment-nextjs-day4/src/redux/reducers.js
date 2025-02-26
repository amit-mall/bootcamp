import { SET_QUOTES } from './actions';

const initialState = {
  quotes: [],
};

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUOTES:
      return { ...state, quotes: action.payload };
    default:
      return state;
  }
};

export default quotesReducer;
