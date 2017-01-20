import * as types from './actionsTypes';
import projectApi from '../api/projectApi';

export const getSpendingsSuccess = (spendings) => {
  return {
    type: types.GET_SPENDINGS_SUCCESS,
    spendings
  };
};
export const getSpendings = () => {
  return (dispatch) => {
    return projectApi.getSpendings().then(res => {
      dispatch(getSpendingsSuccess(res));
    }).catch(error => {
      throw(error);
    });
  };
};

export const addSpendingSuccess = (spending) => {
  return {
    type: types.ADD_SPENDING_SUCCESS,
    spending
  };
};
export const addSpending = (spending) => {
  return (dispatch) => {
    return projectApi.addSpending(spending).then(res => {
      dispatch(addSpendingSuccess(spending));
    }).catch(error => {
      throw(error);
    });
  };
};

export const deleteSpendingSuccess = (id) => {
  return {
    type: types.DELETE_SPENDING_SUCCESS,
    id
  };
};
export const deleteSpending = (id) => {
  return (dispatch) => {
    return projectApi.deleteSpending(id).then(res => {
      dispatch(deleteSpendingSuccess(id));
    }).catch(error => {
      throw(error);
    });
  };
};

export const updateSpendingAmountSuccess = (id, amount) => {
  return {
    type: types.UPDATE_SPENDING_AMOUNT_SUCCESS,
    id,
    amount
  };
};
export const updateSpendingAmount = (id, amount) => {
  return (dispatch) => {
    return projectApi.updateSpendingAmount(id, amount).then(res => {
      dispatch(updateSpendingAmountSuccess(id, amount));
    }).catch(error => {
      throw(error);
    });
  };
};

export const getCategoriesSuccess = (categories) => {
  return {
    type: types.GET_CATEGORIES_SUCCESS,
    categories
  };
};
export const getCategories = () => {
  return (dispatch) => {
    return projectApi.getCategories().then(res => {
      dispatch(getCategoriesSuccess(res));
    }).catch(error => {
      throw(error);
    });
  };
};

export const getFavouriteCategoriesSuccess = (favouritecategories) => {
  return {
    type: types.GET_FAVOURITE_CATEGORIES_SUCCESS,
    favouritecategories
  };
};
export const getFavouriteCategories = () => {
  return (dispatch) => {
    return projectApi.getFavouriteCategories().then(res => {
      dispatch(getFavouriteCategoriesSuccess(res));
    }).catch(error => {
      throw(error);
    });
  };
};