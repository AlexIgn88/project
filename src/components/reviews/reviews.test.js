import React from 'react';
import { render, screen } from '@testing-library/react';
import Reviews from '.';
// import Review from '../review';
import { restaurants } from '../../fixtures'; 

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render Reviews component', () => {
    render(<Reviews reviews={reviews} />);
    expect(screen.getByTestId('REVIEWS')).toBeInTheDocument();
  });

  it('should render all reviews', () => {
    render(<Reviews reviews={reviews} />);
    expect(screen.getAllByTestId('REVIEW')).toHaveLength(reviews.length); 
  });
});