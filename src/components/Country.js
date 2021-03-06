import { useSelector } from 'react-redux';

export default function Country(props) {
  const countryDetail = props;
  const theme = useSelector((state) => state.themeReducer);

  function imageCondition() {
    if (countryDetail.order === 0) {
      if (countryDetail.style === 'dark') {
        return { width: '50%', filter: 'grayscale(1)' };
      }
      return { width: '50%' };
    }
    return {};
  }

  return (
    <div
      key={countryDetail.country}
      className="w-full flex flex-col h-full relative"
      style={countryDetail.order === 0 ? { flexDirection: 'row', backgroundColor: theme.containerColor } : { backgroundColor: theme.containerColor }}
    >
      {(countryDetail.order !== 0) && (
        <svg className="w-12 absolute right-1 top-2 z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_45_29)">
            <path fillRule="evenodd" clipRule="evenodd" d="M5 8C5 9.85652 5.7375 11.637 7.05025 12.9497C8.36301 14.2625 10.1435 15 12 15C13.8565 15 15.637 14.2625 16.9497 12.9497C18.2625 11.637 19 9.85652 19 8C19 6.14348 18.2625 4.36301 16.9497 3.05025C15.637 1.7375 13.8565 1 12 1C10.1435 1 8.36301 1.7375 7.05025 3.05025C5.7375 4.36301 5 6.14348 5 8V8ZM20 8C20 10.1217 19.1571 12.1566 17.6569 13.6569C16.1566 15.1571 14.1217 16 12 16C9.87827 16 7.84344 15.1571 6.34315 13.6569C4.84285 12.1566 4 10.1217 4 8C4 5.87827 4.84285 3.84344 6.34315 2.34315C7.84344 0.842855 9.87827 0 12 0C14.1217 0 16.1566 0.842855 17.6569 2.34315C19.1571 3.84344 20 5.87827 20 8V8ZM8.5 7.5C8.36739 7.5 8.24021 7.55268 8.14645 7.64645C8.05268 7.74021 8 7.86739 8 8C8 8.13261 8.05268 8.25979 8.14645 8.35355C8.24021 8.44732 8.36739 8.5 8.5 8.5H14.293L12.146 10.646C12.0995 10.6925 12.0626 10.7477 12.0375 10.8084C12.0123 10.8692 11.9994 10.9343 11.9994 11C11.9994 11.0657 12.0123 11.1308 12.0375 11.1916C12.0626 11.2523 12.0995 11.3075 12.146 11.354C12.1925 11.4005 12.2477 11.4374 12.3084 11.4625C12.3692 11.4877 12.4343 11.5006 12.5 11.5006C12.5657 11.5006 12.6308 11.4877 12.6916 11.4625C12.7523 11.4374 12.8075 11.4005 12.854 11.354L15.854 8.354C15.9006 8.30755 15.9375 8.25238 15.9627 8.19163C15.9879 8.13089 16.0009 8.06577 16.0009 8C16.0009 7.93423 15.9879 7.86911 15.9627 7.80837C15.9375 7.74762 15.9006 7.69245 15.854 7.646L12.854 4.646C12.8075 4.59951 12.7523 4.56264 12.6916 4.53748C12.6308 4.51232 12.5657 4.49937 12.5 4.49937C12.4343 4.49937 12.3692 4.51232 12.3084 4.53748C12.2477 4.56264 12.1925 4.59951 12.146 4.646C12.0995 4.69249 12.0626 4.74768 12.0375 4.80842C12.0123 4.86916 11.9994 4.93426 11.9994 5C11.9994 5.06574 12.0123 5.13084 12.0375 5.19158C12.0626 5.25232 12.0995 5.30751 12.146 5.354L14.293 7.5H8.5Z" fill={theme.containerColor} />
          </g>
          <defs>
            <filter id="filter0_d_45_29" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_45_29" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_45_29" result="shape" />
            </filter>
          </defs>
        </svg>
      )}
      <img
        src={countryDetail.image}
        style={imageCondition()}
        alt={`Map of ${countryDetail.country}`}
        className="flex-1 w-full home-image max-h-52"
      />
      <div className="flex-1 flex items-end px-4 justify-center flex-col">
        <h2 className="font-bold text-2xl text-right">{countryDetail.country}</h2>
        <span className="block font-semibold text-lg">
          {countryDetail.length}
        </span>
      </div>
    </div>
  );
}

Country.defaultProps = {
  length: 0,
};
