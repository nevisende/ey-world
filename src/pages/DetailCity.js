import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import AirVisualAPI from '../services/airVisualAPI';
import { gifsObj, pollutionColors as pollutionObj } from '../services/imageAPI';
import { defineCurrentPage } from '../redux/pageinfo/pageinfo';

const levelHealthConcern = [
  'Good',
  'Moderate',
  'Unhealthy for Sensitive Groups',
  'Unhealthy',
  'Very Unhealthy',
  'Hazardous',
];

export default function DetailCity() {
  const [countryCityArr, setCountryCityArr] = useState({});
  const [img, setImg] = useState('');
  const [pollutionColor, setPollutionColor] = useState('');
  const [pollutionCategory, setPollutionCategory] = useState('');
  const [visibility, setVisibility] = useState('hidden');
  const [params] = useSearchParams();
  const country = params.get('country');
  const state = params.get('state');
  const city = params.get('city');
  useDispatch()(defineCurrentPage(city));

  useEffect(async () => {
    const airVisualApi = new AirVisualAPI();
    await airVisualApi.getSpecifiedCityData({ country, state, city });
    const { data } = airVisualApi.specifiedCityData;
    const { aqius } = data.current?.pollution;
    let order;
    if (aqius <= 200) {
      order = Math.floor(aqius / 50);
    } else if (aqius <= 300) {
      order = 4;
    } else {
      order = 5;
    }
    setImg(gifsObj[order]);
    setPollutionColor(pollutionObj[order]);
    setPollutionCategory(levelHealthConcern[order]);
    setCountryCityArr(data);
    setTimeout(() => {
      setVisibility('visible');
    }, 500);
  }, []);

  return (
    <div style={{ visibility }}>
      <img className="sm:w-full min-w-[600px]" src={img[Math.floor(Math.random() * img.length)]} alt="gif for status" />
      <div className="grid grid-cols-3 items-center mt-4">
        <span className="font-semibold text-xl">Air Pollution(aqius) :</span>
        <div style={{ backgroundColor: pollutionColor }} className="p-2 rounded text-center font-semibold flex flex-col ml-4">
          <span>
            {countryCityArr.current?.pollution.aqius}
          </span>
          <span>
            {pollutionCategory}
          </span>
        </div>
        <a
          href="https://en.wikipedia.org/wiki/Air_quality_index#United_States"
          className="underline decoration-sky-500/75 text-red-300 text-center"
        >
          For more information...

        </a>

        <span className="font-semibold text-xl font-semibold">Current Temperature:</span>
        <span className="text-center p-2">{countryCityArr.current?.weather.tp}</span>
        <span className="w-28"> </span>
      </div>
    </div>
  );
}
