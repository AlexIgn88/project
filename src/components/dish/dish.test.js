import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dishes from '../dishes';
import Dish from './dish';
import { restaurants } from '../../fixtures'; 

const dishes = restaurants[0].menu;

describe('Dishes', () => {
  it('should render all menu items', () => {
    render(<Dishes menu={dishes} />);
    expect(screen.getAllByTestId('DISH')).toHaveLength(dishes.length); 
  });
});

const dishMock = restaurants[0].menu[0];

describe('when increase clicked', () => {
    it('when increase clicked once', () => {
    render(<Dish dish={dishMock} />);
    const amountValue = +screen.getByTestId('AMOUNT').textContent;
    const count = 1;
    fireEvent.click(screen.getByTestId('INCREASE'));
    expect(screen.getByTestId('AMOUNT')).toHaveTextContent(amountValue + count);
    });

    it('when increase clicked several times', () => {
        render(<Dish dish={dishMock} />);
        const amountValue = +screen.getByTestId('AMOUNT').textContent;
        const count = 4;
        for (let i = 0; i < count; i++) { 
            fireEvent.click(screen.getByTestId('INCREASE'));
          }
        expect(screen.getByTestId('AMOUNT')).toHaveTextContent(amountValue + count);
        });
  });

  describe('when decrease clicked', () => {
    it('when decrease clicked once', () => {
    render(<Dish dish={dishMock} />);
    const amountValue = +screen.getByTestId('AMOUNT').textContent;
    const count = 1;
    expect(amountValue >= 0);
    fireEvent.click(screen.getByTestId('DECREASE'));
    +screen.getByTestId('AMOUNT').textContent > 0 
    ? expect(screen.getByTestId('AMOUNT')).toHaveTextContent(amountValue - count)
    : expect(amountValue === 0);
    });

    it('when decrease clicked several times', () => {
        render(<Dish dish={dishMock} />);
        const amountValue = +screen.getByTestId('AMOUNT').textContent;
        const count = 15;
        expect(amountValue >= 0);
        for (let i = 0; i < count; i++) { 
            fireEvent.click(screen.getByTestId('DECREASE'));
          }
        +screen.getByTestId('AMOUNT').textContent > 0 
        ? expect(screen.getByTestId('AMOUNT')).toHaveTextContent(amountValue - count)
        : expect(amountValue === 0);
        });
  });