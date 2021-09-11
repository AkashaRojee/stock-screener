import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { render, screen } from '../../test-utils';
import App from 'app/App';

describe('Clicking on a symbol on home page', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Details page loads then displays symbol data and functioning back button', async () => {
    const symbol = await screen.findAllByText(/Berkshire/i);
    const symbolToClick = symbol[1].innerHTML;
    
    const symbolName = document.querySelector('.title').innerHTML;
    const symbolPrice = document.querySelector('.subtitle').innerHTML;
    const symbolImage = document.querySelector('img').src;
    
    const links = screen.getAllByRole('link');
    userEvent.click(links[1]);

    const loadingIndicator = screen.getByText('Loading...');
    expect(loadingIndicator).toBeVisible();

    const displayedSymbol = await screen.findAllByText(symbolToClick);

    displayedSymbol.forEach((display) => {
      expect(display).toBeVisible();
    })

    expect(screen.getByText(/symbol value/i)).toBeVisible();
    expect(screen.getByText(/quote breakdown/i)).toBeVisible();

    const highlightedName = screen.getByLabelText('highlighted name').innerHTML;
    const highlightedPrice = screen.getByLabelText('highlighted price').innerHTML;
    const highlightedImage = screen.getByLabelText('highlighted image').getAttribute('src');
    expect(highlightedName).toEqual(symbolName);
    expect(highlightedPrice).toEqual(symbolPrice);
    expect(highlightedImage).toEqual(symbolImage);

    const symbolData = screen.getAllByLabelText('quote data');
    symbolData.forEach((data) => {
      expect(data).toBeVisible();
    });

    const expectedDataItem = ['name', 'price', 'change', 'changesPercentage', 'open', 'previousClose', 'dayLow', 'dayHigh', 'yearLow', 'yearHigh', 'avgVolume', 'marketCap', 'pe', 'sharesOutstanding', 'eps'];
    const symbolDataItem = screen.getAllByLabelText('quote data item').map(dataItem => dataItem.innerHTML);
    expect(symbolDataItem).toEqual(expect.arrayContaining(expectedDataItem));

    const backButton = screen.getAllByRole('link')[0];
    expect(backButton).toHaveClass('show');
    userEvent.click(backButton);
    expect(screen.getByText(/highest value/i)).toBeVisible();
    expect(screen.getByText(/stats by company/i)).toBeVisible();
  });

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
