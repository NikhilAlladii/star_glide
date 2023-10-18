/* eslint-disable no-unused-vars */
import axios from "axios";
import { FETCH_HOMES_SUCCESS, FETCH_HOME_SUCCESS } from "./homeTypes";

const fetchHomesSuccess = (homes) => {
  return {
    type: FETCH_HOMES_SUCCESS,
    payload: homes,
  };
};

const fetchHomeSuccess = (home) => {
  return {
    type: FETCH_HOME_SUCCESS,
    payload: home,
  };
};

export const fetchHomes = () => {
  return (dispatch) => {
    axios
      .get(`http://192.168.0.192:3001/homes`)
      .then((res) => {
        const homes = res.data;
        dispatch(fetchHomesSuccess(homes));
      })
      .catch((error) => {
        const errorMsg = error.message;
      });
  };
};

export const fetchHome = (homeId) => {
  return (dispatch) => {
    axios
      .get(`http://192.168.0.192:3001/home/${homeId}`)
      .then((res) => {
        const homes = res.data;
        dispatch(fetchHomeSuccess(homes));
      })
      .catch((error) => {
        const errorMsgs = error.message;
      });
  };
};
