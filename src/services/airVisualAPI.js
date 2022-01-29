import axios from 'axios';

const BASE_URL = 'http://api.airvisual.com/v2/';
const KEY_PARAM = '&key=7569f160-f3ad-4e29-8826-4884237658ba';

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
    this.states = [];
    this.cities = [];
    this.specifiedCityData = [];
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
