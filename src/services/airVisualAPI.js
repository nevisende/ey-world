import axios from 'axios';

const BASE_URL = 'http://api.airvisual.com/v2/';
const KEY_PARAM = process.env.AIR_KEY;

const AirVisualClient = axios.create({
  baseURL: BASE_URL,
});

async function getData(url) {
  const res = await AirVisualClient.get(url);
  const { data } = res;
  return data;
}

export default class AirVisualAPI {
  constructor() {
    this.countries = [];
    this.states = [];
    this.cities = [];
    this.specifiedCityData = [];
  }

  async getCountries() {
    this.countries = await getData(`countries?${KEY_PARAM}`);
    return this;
  }

  async getStates(country) {
    this.states = await getData(`states?country=${country}${KEY_PARAM}`);
    return this;
  }

  async getCities({ country, state }) {
    this.cities = await getData(`cities?state=${state}&country=${country}${KEY_PARAM}`);
    return this;
  }

  async getSpecifiedCityData({ country, state, city }) {
    this.specifiedCityData = await getData(`city?city=${city}&state=${state}&country=${country}${KEY_PARAM}`);
    return this;
  }
}
