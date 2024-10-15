import style from "./order.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { StateType } from "../../store/reducers";
import { useCallback, useMemo, memo, useState, useEffect } from "react";
import { DishesInTheCart } from "../../types";
import { clearTheCart, sendOrder } from "../../store/action-creators";
import { Button, Flex } from "antd";
import CartButton, { DecreaseButton, IncreaseButton } from "../cart-buttons";
import { selectDishesInTheCart } from "../../store/selectors";
import { NavLink, useNavigate } from "react-router-dom";

interface OrderProps {
  isCart?: boolean;
}

const Order = ({ isCart }: OrderProps) => {
  const dishesInTheCart: Array<DishesInTheCart> = useSelector(
    (state: StateType) => selectDishesInTheCart(state),
  );

  const fullPrice = useMemo(
    () =>
      dishesInTheCart.reduce(
        (sum, current) => sum + current?.price * current?.quantity,
        0,
      ),
    [dishesInTheCart],
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const clearTheOrder = useCallback(() => dispatch(clearTheCart()), [dispatch]);
  const sendTheOrder = useCallback(
    () => dispatch(sendOrder("", navigate)),
    [dispatch],
  );
  return (
    <div className={style.cart}>
      <div>Your order</div>
      <div>
        <div>
          <span>Positions&#160;</span>
          <span>Quantity</span>
        </div>
        {dishesInTheCart.map(({ id, name, quantity }) => (
          <div key={id}>
            <div>
              <span>{name}&#160;</span>
              <span>{quantity}</span>
            </div>
            <div>
              <DecreaseButton id={id} />
              <IncreaseButton id={id} />
            </div>
          </div>
        ))}
      </div>
      <div>Full price: {fullPrice}</div>
      <Flex gap={"10px"}>
        {!isCart && <CartButton />}
        <Button size="large" type="primary" onClick={clearTheOrder}>
          Сancellation
        </Button>
        {isCart && (
          <Button
            size="large"
            type="primary"
            onClick={() => {
              sendTheOrder();
              clearTheOrder();
            }}
          >
            Send order
          </Button>
        )}
      </Flex>
    </div>
  );
};

export default memo(Order);
