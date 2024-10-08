import React from 'react';
import { render, screen } from '@testing-library/react';
import Reviews from './index';
import { restaurants } from '../../fixtures'; 

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render Reviews component', () => {
    render(<Reviews reviews={reviews} />);
    expect(screen.getByTestId('REVIEWS')).toBeInTheDocument();
  });
});