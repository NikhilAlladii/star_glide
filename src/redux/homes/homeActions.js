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
      .get(`https://star-glide-be-services.onrender.com/homes`)
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
      .get(`https://star-glide-be-services.onrender.com/home/${homeId}`)
      .then((res) => {
        const homes = res.data;
        dispatch(fetchHomeSuccess(homes));
      })
      .catch((error) => {
        const errorMsgs = error.message;
      });
  };
};
