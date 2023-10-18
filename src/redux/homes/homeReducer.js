import { FETCH_HOMES_SUCCESS, FETCH_HOME_SUCCESS } from "./homeTypes";

const initialState = [];

const homeData = {};

export const homesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOMES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const homeReducer = (state = homeData, action) => {
  switch (action.type) {
    case FETCH_HOME_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
