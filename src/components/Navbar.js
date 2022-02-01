import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectDarkTheme, selectLightTheme } from '../redux/theme/theme';

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeReducer);
  const { currentPage } = useSelector((state) => state.pageinfoReducer);

  return (
    <nav className="flex justify-between items-center md:w-[70%] w-screen  font-bold text-3xl py-4">
      <button onClick={() => navigate(-1)} type="button">
        {
          currentPage !== 'countries'
        && (
        <svg className="w-12 h-12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.83 19C13.6806 19.0005 13.533 18.9675 13.398 18.9035C13.263 18.8395 13.1441 18.746 13.05 18.63L8.22001 12.63C8.07293 12.4511 7.99252 12.2266 7.99252 11.995C7.99252 11.7634 8.07293 11.5389 8.22001 11.36L13.22 5.36C13.3897 5.15578 13.6337 5.02736 13.8981 5.00298C14.1625 4.9786 14.4258 5.06026 14.63 5.23C14.8342 5.39974 14.9627 5.64365 14.987 5.90808C15.0114 6.1725 14.9297 6.43578 14.76 6.64L10.29 12L14.61 17.36C14.7323 17.5068 14.81 17.6855 14.8339 17.8751C14.8577 18.0646 14.8268 18.257 14.7448 18.4296C14.6627 18.6021 14.5329 18.7475 14.3708 18.8486C14.2087 18.9497 14.021 19.0022 13.83 19Z" fill={theme.iconColor} />
        </svg>
        )
        }
      </button>
      <h1>
        { currentPage?.toLocaleUpperCase() }
      </h1>
      <div className="flex">
        <button
          data-testid="change-theme"
          onClick={() => ((theme.style === 'light') ? dispatch(selectDarkTheme()) : dispatch(selectLightTheme()))}
          type="button"
        >

          <img src={theme.themeIcon} className="w-8 mr-4" alt="theme icon" />
        </button>
        <Link to="/">
          <svg className="w-12 h-12" viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M54.5347 29.5899L30.8022 5.47267C30.6313 5.29855 30.4283 5.16042 30.2049 5.06617C29.9814 4.97191 29.7419 4.9234 29.5 4.9234C29.2581 4.9234 29.0186 4.97191 28.7951 5.06617C28.5717 5.16042 28.3687 5.29855 28.1979 5.47267L4.46534 29.5899C3.77394 30.293 3.38214 31.2481 3.38214 32.2442C3.38214 34.3125 5.03575 35.9942 7.06964 35.9942H9.57023V53.2031C9.57023 54.2403 10.3942 55.0781 11.414 55.0781H25.8125V41.9531H32.2656V55.0781H47.586C48.6059 55.0781 49.4298 54.2403 49.4298 53.2031V35.9942H51.9304C52.9099 35.9942 53.849 35.6016 54.5404 34.8926C55.9751 33.4277 55.9751 31.0547 54.5347 29.5899V29.5899Z" fill={theme.iconColor} />
          </svg>
        </Link>
      </div>
    </nav>
  );
}
