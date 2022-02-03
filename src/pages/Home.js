import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Country from '../components/Country';
import AirVisualAPI from '../services/airVisualAPI';
import { defineCurrentPage } from '../redux/pageinfo/pageinfo';

const EUROPE_COUNTRIES = ['Germany', 'France'];
export default function Home() {
  const [countries, setCountries] = useState([]);
  const [dataCountries, setDataCountries] = useState([]);
  const [showEuropeCountries, setShowEuropeCountries] = useState(false);
  const countryList = useSelector((state) => state.airDataReducer);
  useDispatch()(defineCurrentPage('countries'));

  useEffect(async () => {
    const airVisualApi = new AirVisualAPI();
    await airVisualApi.getCountries();
    const countriesFromApi = airVisualApi.countries.data;
    const listedCountiesOnAPI = countryList.filter(({ country }) => countriesFromApi
      .map(({ country }) => country).includes(country));
    setDataCountries(listedCountiesOnAPI);
    setCountries(listedCountiesOnAPI);
  }, []);

  function togleShowingEuropeCountries() {
    setShowEuropeCountries((prev) => !prev);
    let filteredCountries;
    if (showEuropeCountries) filteredCountries = dataCountries;
    else {
      filteredCountries = countries
        .filter(({ country }) => EUROPE_COUNTRIES.includes(country));
    }
    setCountries(filteredCountries);
  }

  return (
    <main data-testid="home-main" className="md:w-[70%] w-screen grid grid-rows-14 grid-cols-2">
      {countries.map((countryDetail, index) => (
        <div
          key={countryDetail.country}
          style={index === 0 ? { gridColumn: '1 / span 2', marginBottom: '1.5rem' } : {}}
          className="min-h-[27vh]"
        >
          {index === 0 && (
          <label htmlFor="filterCountry">
            <input
              type="checkbox"
              id="filterCountry"
              onClick={() => togleShowingEuropeCountries()}
              checked={showEuropeCountries}
            />
            Show just Eroupe countries
          </label>
          )}
          <NavLink
            to={`/detail?country=${countryDetail.country}`}
            key={countryDetail.country}
            style={index === 0 ? { gridColumn: '1 / span 2' } : {}}
            className="min-h-[27vh]"
          >
            <Country
              image={countryDetail.image}
              country={countryDetail.country}
              length={countryDetail.length}
              order={index}
            />
          </NavLink>
        </div>
      ))}
    </main>

  );
}
