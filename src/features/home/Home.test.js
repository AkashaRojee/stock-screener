import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { render, screen } from '../../test-utils';
import App from 'app/App';

describe('Clicking on a symbol on home page', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('test home', async () => {
    const symbol = await screen.findAllByText(/Berkshire/i);
    const symbolToClick = symbol[1].innerHTML;
    
    const links = screen.getAllByRole('link');
    userEvent.click(links[1]);

    const loadingIndicator = screen.getByText('Loading...');
    expect(loadingIndicator).toBeVisible();

    const symbolName = await screen.findAllByText(symbolToClick);
    screen.debug();
  //   const loadingIndicator = screen.getByText('Loading...');
  //   expect(loadingIndicator).toBeVisible();

  //   const stockNames = await screen.findAllByText(/Berkshire/i);
  //   stockNames.forEach((stockName) => {
  //     expect(stockName).toBeVisible();
  //   });

  //   const symbolPrices = screen.getAllByText(/$/i);
  //   symbolPrices.forEach((symbolPrice) => {
  //     expect(symbolPrice).toBeVisible();
  //   });
    
  //   const symbolImages = screen.getAllByRole('img');
  //   symbolImages.forEach((symbolImage) => {
  //     expect(symbolImage).toBeVisible();
  //   });
  });

  // test('Back button is not displayed on home page', () => {
  //   const backButton = screen.getAllByRole('link')[0];
  //   expect(backButton).toHaveClass('hide');
  // });

  // test('Highest-valued symbol is displayed at the top', async () => {
  //   const symbol = await screen.findAllByText(/Berkshire/i);
  //   screen.debug();

  //   const firstSymbol = screen.getAllByRole('link')[1];
  //   const symbolName = firstSymbol.querySelector('.title').innerHTML;
  //   const symbolPrice = firstSymbol.querySelector('.subtitle').innerHTML;
  //   const symbolImage = firstSymbol.querySelector('img').src;

  //   const highlightedName = screen.getByLabelText('highlighted name').innerHTML;
  //   const highlightedPrice = screen.getByLabelText('highlighted price').innerHTML;
  //   const highlightedImage = screen.getByLabelText('highlighted image').getAttribute('src');

  //   expect(highlightedName).toEqual(symbolName);
  //   expect(highlightedPrice).toEqual(symbolPrice);
  //   expect(highlightedImage).toEqual(symbolImage);
  // });

});
