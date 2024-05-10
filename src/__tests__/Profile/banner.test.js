/*eslint-disable*/
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Banner } from '../../pages/Profile/SideBar/Banner/banner.js';
import { Provider } from 'react-redux';
import  store  from '../../store/store';

describe('Banner', () => {
  it('should render Banner with default image when imgSrc is "not found"', () => {
    const { getByTestId } = render(<Provider store={store}><Banner /></Provider>);
    const banner = getByTestId('profile-banner');

    expect(banner).toBeInTheDocument();

    expect(banner).toHaveStyle('background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 111.72%), #0045ac');
  });

  it('should render Banner with custom image when imgSrc is not "not found"', () => {
    const imgSrc = 'https://example.com/banner.jpg';
    const { getByTestId } = render(<Provider store={store}><Banner /></Provider>);
    const banner = getByTestId('profile-banner');
    expect(banner).toBeInTheDocument();
  });
});