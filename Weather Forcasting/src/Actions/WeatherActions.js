import * as Constants from "../Constants/WeatherConstants";
import axios from "axios";
export const fetchWeatherRequest = () => {
  return {
    type: Constants.FETCH_WEATHER_REQUEST,
  };
};

export const fetchWeatherSuccess = (data) => {
  return {
    type: Constants.FETCH_WEATHER_SUCCESS,
    payload: data,
  };
};

export const fetchForcastSuccess = (data) => {
  return {
    type: Constants.FETCH_FORCAST_SUCCESS,
    payload: data,
  };
};

export const fetchWeatherFailure = (error) => {
  return {
    type: Constants.FETCH_WEATHER_FAILURE,
    payload: error,
  };
};
export const setCity = (city) => {
  return {
    type: Constants.SET_CITY,
    payload: city,
  };
};

export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch(fetchWeatherRequest());
    let currentWeather;
    let forcast;
    try {
      currentWeather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`,
      );

      forcast = await axios.get(
        `https://pro.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}`,
      );
      dispatch (fetchWeatherSuccess(currentWeather.data));
      dispatch (fetchForcastSuccess(forcast.data.list));
 
    } catch (error) {
      dispatch(fetchWeatherFailure(error.message));
      return;
    }

    

    dispatch(fetchWeatherSuccess(currentWeather.data));
    dispatch(fetchForcastSuccess(forcast.data.list));
  };
};
