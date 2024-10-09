import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import {AppDispatch}  from '../../store';
import { useCallback } from 'react';
import {addToCart, removeFromCart} from '../../store/action-creators';
import { NavLink } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

interface CartButtonProps {
    id: string;
}

export const DecreaseButton = ({id}: CartButtonProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const decrease = useCallback(() => dispatch(removeFromCart(id)),[dispatch, id]);
    return (
        <Button 
        onClick={decrease}
        type='primary'
        style={{margin: '5px'}}
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
        type='primary'
        style={{margin: '5px'}}
        data-testid="INCREASE"
        >
        +
        </Button>
        )
        }

const CartButton = () => {
  return (
      <NavLink
            to='/cart'
              >
      <Button
      size="large"
      type="primary"
      className="cart-button"
    >
      <ShoppingCartOutlined />
      </Button> 
      </NavLink>
  )
}

export default CartButton;