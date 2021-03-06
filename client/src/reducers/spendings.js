import * as types from '../actions/actionsTypes';

const spendings = (state = [], action) => {
  switch (action.type) {
    case types.GET_SPENDINGS_SUCCESS:
      return [...action.spendings];
    case types.ADD_SPENDING_SUCCESS:
      return [...state, action.spending];
    case types.DELETE_SPENDING_SUCCESS:
      return state.filter(spending => {
        return spending._id !== action.id;
      });
    case types.UPDATE_SPENDING_SUCCESS:
      return state.map(spending => {
        if(spending._id === action.id) {
          return Object.assign({}, action.spending);
        }
        return spending;
      });
    default:
      return state;
  }
};

export default spendings;
