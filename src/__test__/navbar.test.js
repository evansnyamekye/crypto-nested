import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../components/Card';

describe('Card', () => {
  it('should render the card with the correct title', () => {
    const { getByText } = render(<Navbar title="My Card" />);

    expect(getByText('My Card')).toBeTruthy();
  });

  it('should render the card with the correct details', () => {
    const { getByText } = render(<Navbar title="My Card" details="120" />);

    expect(getByText('120')).toBeTruthy();
  });
});
