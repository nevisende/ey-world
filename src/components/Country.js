export default function Country(props) {
  const countryDetail = props;
  return (
    <div key={countryDetail.country}>
      <img src={countryDetail.image} alt={`Map of ${countryDetail.country}`} />
      <h2>{countryDetail.country}</h2>
      <span>{countryDetail.length}</span>
    </div>
  );
}

Country.defaultProps = {
  length: 0,
};
