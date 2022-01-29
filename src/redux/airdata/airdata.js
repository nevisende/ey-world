const ADD_COUNTRIES = 'ADD_COUNTRIES';
const ADD_STATES = 'ADD_STATES';
const ADD_CITIES = 'ADD_CITIES';
const ADD_CITY_DETAIL = 'ADD_CITY_DETAIL';

const initialState = [];

export const addCountries = (payload) => ({
  type: ADD_COUNTRIES,
  payload,
});

export const addStates = (payload) => ({
  type: ADD_STATES,
  payload,
});

export const addCities = (payload) => ({
  type: ADD_CITIES,
  payload,
});

export const addCityDetail = (payload) => ({
  type: ADD_CITY_DETAIL,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRIES:
      return [...action.payload];
    case ADD_STATES:
      return [...state].map((country) => (country === action.payload.country
        ? { [country]: { ...action.payload.states } }
        : country));
    case ADD_CITIES:
      return [...state].map((country) => (((country === action.payload.country)
        && (Object.keys(country).includes(action.payload.state)))
        ? { [country]: { [action.payload.state]: -[...action.payload.cities] } } : country));
    case ADD_CITY_DETAIL:
      return [...state].map((country) => (((country === action.payload.country)
      && (Object.keys(country).includes(action.payload.state))
      && country[action.payload.state].includes(action.payload.city))
        ? { [country]: { [action.payload.state]: action.payload.details } } : country));
    default:
      return state;
  }
};

export default reducer;
