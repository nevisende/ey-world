import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';
import AirVisualAPI from '../services/airVisualAPI';
import ImagesAPI from '../services/imageAPI';
import notFoundImage from '../assets/img/notFound.png';
import { defineCurrentPage } from '../redux/pageinfo/pageinfo';

export default function DetailState() {
  const [countryCityArr, setCountryCityArr] = useState([]);
  const [imageCityArr, setImageCityArr] = useState({});
  const [showDesc, setShowDesc] = useState(true);
  const [visibility, setVisibility] = useState('hidden');
  const [params] = useSearchParams();
  const country = params.get('country');
  const state = params.get('state');
  const imagesApi = new ImagesAPI();
  useDispatch()(defineCurrentPage(state));

  useEffect(async () => {
    const airVisualApi = new AirVisualAPI();
    await airVisualApi.getCities({ country, state });
    const { data } = airVisualApi.cities;
    data.forEach(async (el, index) => {
      const url = await imagesApi.getCityImageFromFirstResult(el.city);
      setImageCityArr((prev) => ({ ...prev, [index]: url }));
    });
    setCountryCityArr(data);
    setTimeout(() => {
      setVisibility('visible');
    }, 500);
    setTimeout(() => setShowDesc(false), 5000);
  }, []);

  return (
    <div style={{ visibility }}>
      {showDesc && (
      <desc className="py-4 bg-yellow-200 rounded md:w-[40%] text-center px-2 mb-1 text-red-400">
        {' '}
        Images come as the first related result from Unsplash.com.
        And If there is no result, a meme shows up to you.
        Note: Our dev account just can 50 images per hour.
        {' '}

      </desc>
      )}
      <div className="grid grid-cols-2">
        <div>
          {countryCityArr
            .map((countryCity, index) => ((index < Math.round(countryCityArr.length / 2)) && (
            <NavLink
              to={`/detail-city?country=${country}&state=${state}&city=${countryCity.city}`}
              key={countryCity.city}
              className="relative flex flex-wrap"
            >
              <span className="absolute bottom-0 right-0 text-center py-1 bg-white text-black font-semibold left-0 bg-opacity-50 text-2xl">{countryCity.city}</span>
              {(typeof imageCityArr[index] === 'string') ? (
                <img
                  src={imageCityArr[index]}
                  alt={`view of ${countryCity.city}`}
                  className="w-full"
                />
              ) : (
                <img
                  src={notFoundImage}
                  alt="couldnt found city"
                  className="w-full"
                />
              )}
            </NavLink>
            )
            ))}
        </div>
        <div>

          {countryCityArr
            .map((countryCity, index) => ((index >= Math.round(countryCityArr.length / 2)) && (
            <NavLink
              to={`/detail-city?country=${country}&state=${state}&city=${countryCity.city}`}
              key={countryCity.city}
              className="relative flex flex-wrap"
            >
              <span className="absolute bottom-0 right-0 text-center py-1 bg-white text-black font-semibold left-0 bg-opacity-50 text-2xl">{countryCity.city}</span>
              {(typeof imageCityArr[index] === 'string') ? (
                <img
                  src={imageCityArr[index]}
                  alt={`view of ${countryCity.city}`}
                  className="w-full"
                />
              ) : (
                <img
                  src={notFoundImage}
                  alt="couldnt found city"
                  className="w-full"
                />
              )}
            </NavLink>
            )
            ))}
        </div>

      </div>
    </div>
  );
}
