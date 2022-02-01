import React from 'react';
import {
  render, fireEvent, screen, cleanup,
} from '@testing-library/react';
import App from '../App';

afterEach(cleanup);
describe('Integration test of the project', () => {
  beforeEach(() => {
    render(
      <App />,
    );
  });

  test('Main page should be in the page.', () => {
    expect(screen.getByTestId('home-main')).toBeInTheDocument();
  });

  test('Theme button should be in the document', () => {
    expect(screen.getByTestId('change-theme')).toBeInTheDocument();
  });

  test('The theme button should be changed after clicking', () => {
    const theme = screen.getByTestId('change-theme');
    fireEvent.click(theme);
    const displayedImage = document.querySelector('[data-testid=router]');
    expect(window.getComputedStyle(displayedImage).backgroundColor).toMatch('black');
    fireEvent.click(theme);
    expect(window.getComputedStyle(displayedImage).backgroundColor).toMatch('rgb(67, 105, 178)');
  });
});
