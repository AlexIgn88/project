import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import {AppDispatch}  from '../../store';
import { useCallback } from 'react';
import {addToCart, removeFromCart} from '../../store/action-creators';

interface CartButtonProps {
    id: string;
}

export const DecreaseButton = ({id}: CartButtonProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const decrease = useCallback(() => dispatch(removeFromCart(id)),[dispatch, id]);
    return (
        <Button 
        onClick={decrease}
        // type='primary'
        // disabled={amount <= 0}
        data-testid="DECREASE"
        >
        -
        </Button>
        )
        }


export const IncreaseButton = ({id}: CartButtonProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const increase = useCallback(() => dispatch(addToCart(id)),[dispatch, id]);
    return (
        <Button 
        onClick={increase}
        // type='primary'
        data-testid="INCREASE"
        >
        +
        </Button>
        )
        }

