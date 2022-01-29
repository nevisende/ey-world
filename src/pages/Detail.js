import { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import AirVisualAPI from '../services/airVisualAPI';

export default function Detail() {
  const [countryStatesArr, setCountryStatesArr] = useState([]);
  const [params] = useSearchParams();
  const country = params.get('country');
  console.log({ country });

  useEffect(async () => {
    const airVisualApi = new AirVisualAPI();
    await airVisualApi.getStates(country);
    const { data } = airVisualApi.states;
    setCountryStatesArr(data);
  }, []);

  return (
    <div>
      {countryStatesArr.map((countryStates) => (
        <NavLink
          to={`/detail-state?country=${country}&state=${countryStates.state}`}
          key={countryStates.state}
        >
          <span>{countryStates.state}</span>
        </NavLink>

      ))}
    </div>
  );
}
