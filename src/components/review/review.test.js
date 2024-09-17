import React from 'react';
import { render, screen } from '@testing-library/react';
import Reviews from '../reviews';
import { restaurants } from '../../fixtures'; 

const reviews = restaurants[0].reviews;

describe('Review', () => {
  it('should render all reviews', () => {
    render(<Reviews reviews={reviews} />);
    expect(screen.getAllByTestId('REVIEW')).toHaveLength(reviews.length); 
  });
});