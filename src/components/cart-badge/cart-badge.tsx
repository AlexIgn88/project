import React from 'react';
import {Badge, Button} from 'antd';
import './cart-badge.css';
// import {connect} from 'react-redux';
// import {selectCart} from '../../store/selectors';
import { ShoppingCartOutlined } from '@ant-design/icons';
import {useSelector} from 'react-redux';
import {cartState}  from '../../store/reducers/cart';

export default function CartBadge() {
const amount = useSelector(
    ({cart}: cartState) => Object
    .values(cart)
    .reduce((acc: number, count: number) => acc + count, 0)
);
  return (
    <Badge 
    count={amount} 
    className={'cart-button-container'}
    >
      <Button
        icon={<ShoppingCartOutlined />}
        size="large"
        type="primary"
        className="cart-button"
      />
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