/* eslint-disable no-param-reassign */
const ADD_STATES = 'ADD_STATES';
const ADD_CITIES = 'ADD_CITIES';
const ADD_CITY_DETAIL = 'ADD_CITY_DETAIL';

const initialState = [
  { country: 'Afghanistan', image: 'https://fvmstatic.s3.amazonaws.com/maps/m/WRLD-AF-01-0003.png', length: 1 },
  { country: 'France', image: 'https://fvmstatic.s3.amazonaws.com/maps/m/FR-EPS-01-0001.png', length: 16 },
  { country: 'Germany', image: 'https://fvmstatic.s3.amazonaws.com/maps/m/DE-EPS-01-0001.png', length: 16 },
  { country: 'India', image: 'https://fvmstatic.s3.amazonaws.com/maps/m/IN-EPS-01-0001.png', length: 17 },
  { country: 'Japan', image: 'https://fvmstatic.s3.amazonaws.com/maps/m/JP-EPS-01-0001.png', length: 47 },
  { country: 'Kazakhstan', image: 'https://fvmstatic.s3.amazonaws.com/maps/m/KZ-EPS-01-0001.png', length: 1 },
  { country: 'Russia', image: 'https://fvmstatic.s3.amazonaws.com/maps/m/RU-EPS-01-0002.png', length: 3 },
  { country: 'Turkey', image: 'https://fvmstatic.s3.amazonaws.com/maps/m/TR-EPS-01-0001.png', length: 72 },
  { country: 'United Arab Emirates', image: 'https://fvmstatic.s3.amazonaws.com/maps/m/AE-EPS-01-0001.png', length: 4 },
  { country: 'United Kingdom', image: 'https://fvmstatic.s3.amazonaws.com/maps/m/GB-EN-EPS-01-0001.png', length: 4 },
  { country: 'USA', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4uThLJs5zGPB4iSTvyOWAgHaFj%26pid%3DApi&f=1', length: 51 },
  { country: 'Yemen', image: 'https://fvmstatic.s3.amazonaws.com/maps/m/YE-EPS-01-0001.png', length: 1 },
];

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
    case ADD_STATES:
      return [...state]
        .map((countryDetails) => {
          if (countryDetails.country === action.payload.country) {
            countryDetails.states = action.payload.states;
          }
          return countryDetails;
        });
    case ADD_CITIES:
      return [...state].map((countryDetails) => {
        if (countryDetails.country === action.payload.country) {
          countryDetails.states[action.payload.state] = action.payload.cities;
        }
        return countryDetails;
      });
    case ADD_CITY_DETAIL:
      return [...state].map((countryDetails) => {
        if (countryDetails.country === action.payload.country) {
          countryDetails
            .states[action.payload.state][action.payload.city] = action.payload.cityDetail;
        }
        return countryDetails;
      });
    default:
      return state;
  }
};

export default reducer;
