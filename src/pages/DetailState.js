import { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import AirVisualAPI from '../services/airVisualAPI';

export default function DetailState() {
  const [countryCityArr, setCountryCityArr] = useState([]);
  const [params] = useSearchParams();
  const country = params.get('country');
  const state = params.get('state');

  useEffect(async () => {
    const airVisualApi = new AirVisualAPI();
    await airVisualApi.getCities({ country, state });
    const { data } = airVisualApi.cities;
    console.log(data);
    setCountryCityArr(data);
  }, []);

  return (
    <div>
      {countryCityArr.map((countryCity) => (
        <NavLink
          to={`/detail-city?country=${country}&state=${state}&city=${countryCity.city}`}
          key={countryCity.city}
        >
          <span>{countryCity.city}</span>
        </NavLink>

      ))}
    </div>
  );
}
