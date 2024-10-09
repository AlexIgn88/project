import React from 'react';
import {Badge, Button} from 'antd';
import './cart-badge.css';
// import {connect} from 'react-redux';
// import {selectCart} from '../../store/selectors';
import {useSelector} from 'react-redux';
import {CartState}  from '../../store/reducers/cart';
import CartButton from '../cart-buttons';

export default function CartBadge() {
const amount = useSelector(
    ({cart}: CartState) => Object
    .values(cart)
    .reduce((acc: number, count: number) => acc + count, 0)
);
  return (
    <Badge 
    count={amount} 
    className={'cart-button-container'}
    >
      <CartButton />
    </Badge>
  )
}

// @ts-ignore
// export default connect((state) => {
//   return {
//     totalAmount: Object.values(selectCart(state)).reduce(
//         // @ts-ignore
//       (acc, amount) => acc + amount,
//       0
//     ),
//   }
// })(CartBadge)