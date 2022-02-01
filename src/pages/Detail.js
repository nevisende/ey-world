import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';
import AirVisualAPI from '../services/airVisualAPI';
import ImagesAPI from '../services/imageAPI';
import { defineCurrentPage } from '../redux/pageinfo/pageinfo';

export default function Detail() {
  const [countryStatesArr, setCountryStatesArr] = useState([]);
  const [visibility, setVisibility] = useState('hidden');
  const [params] = useSearchParams();
  const country = params.get('country');
  useDispatch()(defineCurrentPage(country));

  useEffect(async () => {
    const imageApi = new ImagesAPI();
    const airVisualApi = new AirVisualAPI();
    await airVisualApi.getStates(country);
    const { data } = airVisualApi.states;
    const addImage = data.map((el) => ({ ...el, mapUrl: imageApi.getMapImage(`${country}, ${el.state}`) }));

    setCountryStatesArr(addImage);
    setTimeout(() => {
      setVisibility('visible');
    }, 300);
  }, []);

  return (
    <div className="grid grid-cols-2 p-1" style={{ backgroundColor: 'black', visibility }}>
      {countryStatesArr.map((countryStates) => (
        <NavLink
          to={`/detail-state?country=${country}&state=${countryStates.state}`}
          key={countryStates.state}
          className="relative m-2"
        >
          <span className="absolute bottom-0  p-2 text-lg bg-opacity-80 text-center w-full bg-black ">{countryStates.state}</span>
          <img src={countryStates.mapUrl} alt="map" />
        </NavLink>

      ))}
    </div>
  );
}
