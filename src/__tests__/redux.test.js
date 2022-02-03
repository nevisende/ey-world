import store from '../redux/configureStore';
import { addCities, addCityDetail, addStates } from '../redux/airdata/airdata';

describe('Redux test', () => {
  const initialAirDataState = store.getState().airDataReducer;
  it('should be 12 country at the beginning', () => {
    expect(initialAirDataState.length).toBe(12);
  });

  it('should be Afghanistan as a country property', () => {
    expect(initialAirDataState.find(({ country }) => country === 'Afghanistan').country).toMatch('Afghanistan');
  });

  it('should be 51 length for USA', () => {
    expect(initialAirDataState.find(({ country }) => country === 'USA').length).toBe(51);
  });

  it('should be same image url with the test url', () => {
    expect(initialAirDataState.find(({ country }) => country === 'Turkey').image).toMatch('https://fvmstatic.s3.amazonaws.com/maps/m/TR-EPS-01-0001.png');
  });

  it('should work addStates payload function', () => {
    const states = ['Centre', 'Hauts-de-France', 'Grand-Est', 'Ile-de-France'];
    const resultFromFunction = store.dispatch(addStates({ country: 'France', states })).payload;

    expect(resultFromFunction).toMatchObject({ country: 'France', states });
    expect(initialAirDataState.find(({ country }) => country === 'France').states).toMatchObject(states);
  });

  it('should work addCities payload function', () => {
    const cities = ['Mantes-La-Jolie', 'Chatou', 'Montreul', 'Paris', 'Issy-les-Moulineaux'];
    const resultFromFunction = store.dispatch(addCities({ country: 'France', state: 'Ile-de-France', cities })).payload;

    expect(resultFromFunction.cities).toMatchObject(cities);
    expect(initialAirDataState.find(({ country }) => country === 'France').states['Ile-de-France']).toMatchObject(cities);
  });

  it('should work addCityDetail payload function', () => {
    const cityDetail = { airPollution: 21, currentTemperature: 6 };
    const resultFromFunction = store.dispatch(addCityDetail({
      country: 'France', state: 'Ile-de-France', city: 'Paris', cityDetail,
    })).payload;

    expect(resultFromFunction.cityDetail).toMatchObject(cityDetail);
    expect(initialAirDataState.find(({ country }) => country === 'France').states['Ile-de-France'].Paris).toMatchObject(cityDetail);
  });
});
