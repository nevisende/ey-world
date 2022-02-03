import darkIcon from '../../assets/img/dark.svg';
import lightIcon from '../../assets/img/light.svg';

const SELECT_LIGHT_THEME = 'SELECT_LIGHT_THEME';
const SELECT_DARK_THEME = 'SELECT_DARK_THEME';

const initialState = {
  style: 'light',
  iconColor: 'white',
  backgroundColor: '#4369B2',
  themeIcon: lightIcon,
  textColor: 'white',
  containerColor: '#5485E1',
};

const darkState = {
  style: 'dark',
  iconColor: 'white',
  backgroundColor: 'black',
  themeIcon: darkIcon,
  textColor: 'white',
  containerColor: '#0c0908',
};

export const selectLightTheme = () => ({
  type: SELECT_LIGHT_THEME,
  payload: initialState,
});

export const selectDarkTheme = () => ({
  type: SELECT_DARK_THEME,
  payload: darkState,
});

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DARK_THEME:
      return action.payload;
    case SELECT_LIGHT_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
