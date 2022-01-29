import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import AirVisualAPI from '../services/airVisualAPI';

export default function DetailCity() {
  const [countryCityArr, setCountryCityArr] = useState({});
  const [params] = useSearchParams();
  const country = params.get('country');
  const state = params.get('state');
  const city = params.get('state');

  useEffect(async () => {
    const airVisualApi = new AirVisualAPI();
    await airVisualApi.getSpecifiedCityData({ country, state, city });
    const { data } = airVisualApi.specifiedCityData;
    console.log(data);
    setCountryCityArr(data);
  }, []);

  return (
    <div>

      <span>{countryCityArr.city}</span>
      <hr />
      Temperature:
      <span>{countryCityArr.current?.weather.tp}</span>
      <hr />
      Weather pollution:
      <span>{countryCityArr.current?.pollution.aqius}</span>

    </div>
  );
}
