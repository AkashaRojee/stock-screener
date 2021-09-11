import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '../test-utils';
import App from './App';

describe('When app starts, home page is rendered', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('UI loads then displays list of symbols with image, name and price', async () => {
    const loadingIndicator = screen.getByText('Loading...');
    expect(loadingIndicator).toBeVisible();

    const stockNames = await screen.findAllByText(/Berkshire/i);

    expect(screen.getByText(/highest value/i)).toBeVisible();
    expect(screen.getByText(/stats by company/i)).toBeVisible();

    stockNames.forEach((stockName) => {
      expect(stockName).toBeVisible();
    });

    const symbolPrices = screen.getAllByText(/$/i);
    symbolPrices.forEach((symbolPrice) => {
      expect(symbolPrice).toBeVisible();
    });

    const symbolImages = screen.getAllByRole('img');
    symbolImages.forEach((symbolImage) => {
      expect(symbolImage).toBeVisible();
    });
  });

  test('Back button is not displayed on home page', () => {
    const backButton = screen.getAllByRole('link')[0];
    expect(backButton).toHaveClass('hide');
  });

  test('Highest-valued symbol is displayed at the top', async () => {
    const symbol = await screen.findAllByText(/Berkshire/i);

    const firstSymbol = screen.getAllByRole('link')[1];
    const symbolName = firstSymbol.querySelector('.title').innerHTML;
    const symbolPrice = firstSymbol.querySelector('.subtitle').innerHTML;
    const symbolImage = firstSymbol.querySelector('img').src;

    const highlightedName = screen.getByLabelText('highlighted name').innerHTML;
    const highlightedPrice = screen.getByLabelText('highlighted price').innerHTML;
    const highlightedImage = screen.getByLabelText('highlighted image').getAttribute('src');

    expect(highlightedName).toEqual(symbolName);
    expect(highlightedPrice).toEqual(symbolPrice);
    expect(highlightedImage).toEqual(symbolImage);
  });
});
