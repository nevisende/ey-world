const CURRENT_PAGE = 'CURRENT_PAGE';

const initialState = {
  currantPage: 'countries',
};

export const defineCurrentPage = (payload) => ({
  type: CURRENT_PAGE,
  payload: { currentPage: payload } || {},
});

const pageinfoReducer = (state = initialState, action) => {
  if (action.type === CURRENT_PAGE) {
    return action.payload;
  }
  return state;
};

export default pageinfoReducer;
