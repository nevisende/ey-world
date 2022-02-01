import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Country from '../components/Country';
import AirVisualAPI from '../services/airVisualAPI';
import { defineCurrentPage } from '../redux/pageinfo/pageinfo';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const countryList = useSelector((state) => state.airDataReducer);
  useDispatch()(defineCurrentPage('countries'));

  useEffect(async () => {
    const airVisualApi = new AirVisualAPI();
    await airVisualApi.getCountries();
    const countriesFromApi = airVisualApi.countries.data;
    const listedCountiesOnAPI = countryList.filter(({ country }) => countriesFromApi
      .map(({ country }) => country).includes(country));
    setCountries(listedCountiesOnAPI);
  }, []);

  return (
    <main data-testid="home-main" className="md:w-[70%] w-screen grid grid-rows-14 grid-cols-2">
      {countries.map((countryDetail, index) => (
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
      ))}
    </main>

  );
}
