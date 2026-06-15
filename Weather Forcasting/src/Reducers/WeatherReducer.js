import {
  FETCH_FORCAST_SUCCESS,
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  SET_CITY,
} from "../Constants/WeatherConstants";

const intialState = {
  currentWeather: null,
  forcast: null,
  Loading: false,
  error: null,
  city: "Karachi",
};

export default function WeatherReducer(state = intialState, action) {
  if (action.type === FETCH_WEATHER_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null,
    };
  } else if (action.type === FETCH_WEATHER_SUCCESS) {
    return {
      ...state,
      loading: false,
      currentWeather: action.payload,
    };
  } else if (action.type === FETCH_FORCAST_SUCCESS) {
    return {
      ...state,
      loading: false,
      forcast: action.payload,
    };
  } else if (action.type === FETCH_WEATHER_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  } else if (action.type === SET_CITY) {
    return {
      ...state,
      city: action.payload,
    };
  } else return state;
}
