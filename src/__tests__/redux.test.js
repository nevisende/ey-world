import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import store from '../redux/configureStore';
import Home from '../pages/Home';

function renderWithRedux(component) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  }
}

afterEach(() => cleanup());

it('render with redux', () => {
  const { getByTestId } = renderWithRedux(<Home />);
  expect(getByTestId('home-main')).toBeInTheDocument();
})