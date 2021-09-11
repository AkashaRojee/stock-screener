import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '../test-utils';
import App from './App';

describe('When app loads', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('UI loads then displays list of symbols with image, name and price', async () => {

    const loadingIndicator = screen.getByText('Loading...');
    expect(loadingIndicator).toBeVisible();

    const stockNames = await screen.findAllByText(/Berkshire/i);
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

  // test('Menu items are displayed as links', () => {
  //   const rocketsMenu = screen.getByText('Rockets').closest('a');
  //   const dragonsMenu = screen.getByText('Dragons').closest('a');
  //   const missionsMenu = screen.getByText('Missions').closest('a');
  //   const profileMenu = screen.getByText('My profile').closest('a');

  //   expect(rocketsMenu).toHaveAttribute('href');
  //   expect(dragonsMenu).toHaveAttribute('href');
  //   expect(missionsMenu).toHaveAttribute('href');
  //   expect(profileMenu).toHaveAttribute('href');
  // });
  
});
