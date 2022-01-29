import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Country from '../components/Country';
import AirVisualAPI from '../services/airVisualAPI';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const countryList = useSelector((state) => state);

  useEffect(async () => {
    const airVisualApi = new AirVisualAPI();
    await airVisualApi.getCountries();
    const countriesFromApi = airVisualApi.countries.data;
    const listedCountiesOnAPI = countryList.filter(({ country }) => countriesFromApi
      .map(({ country }) => country).includes(country));

    setCountries(listedCountiesOnAPI);
  }, []);

  return (
    <>
      {countries.map((countryDetail) => (
        <NavLink
          to={`/detail?country=${countryDetail.country}`}
          key={countryDetail.country}
        >
          <Country
            image={countryDetail.image}
            country={countryDetail.country}
            length={countryDetail.length}

          />
        </NavLink>
      ))}
    </>

  );
}
