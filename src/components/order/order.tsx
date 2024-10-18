import style from "./order.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { StateType } from "../../store/reducers";
import { useCallback, useMemo, memo, useState } from "react";
import { DishesInTheCart } from "../../types";
import { clearTheCart, sendOrder } from "../../store/action-creators";
import { Button, Flex } from "antd";
import { DecreaseButton, IncreaseButton } from "../cart-buttons";
import { selectDishesInTheCart } from "../../store/selectors";
import { useNavigate } from "react-router-dom";
import GetTextInLang from "../get-text-in-lang";
import { useLanguageObject } from "../../custom-hooks/use-language-object";
import { getTextInLang } from "../../utils/getTextInLang";

interface OrderProps {
  isCart?: boolean;
  handleUserChange?: (userName: string) => void;
}

const Order = ({ isCart, handleUserChange }: OrderProps) => {
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
    [dispatch, navigate],
  );

  const [userNameData, setUserNameData] = useState({
    userName: "",
  });

  const handleUserNameInputChange = (value: string) => {
    setUserNameData({
      userName: value,
    });
  };

  const handleCancellation = () => {
    handleUserNameInputChange("");
    clearTheOrder();
  };

  const currentLanguageObject = useLanguageObject();

  return (
    <div className={style.cart}>
      <div>
        <GetTextInLang text="Your order" />
      </div>
      <div>
        <div>
          <span>
            <GetTextInLang text="Positions" />
            &#160;
          </span>
          <span>
            <GetTextInLang text="Quantity" />
          </span>
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
      <div>
        <GetTextInLang text="Full price" />: {fullPrice}
      </div>
      <Flex gap={"10px"}>
        {isCart && (
          <>
            <Button size="large" type="primary" onClick={handleCancellation}>
              <GetTextInLang text="Сancellation" />
            </Button>
            <input
              placeholder={getTextInLang(
                "Enter your name",
                currentLanguageObject,
              )}
              value={userNameData.userName}
              onChange={(evt) => handleUserNameInputChange(evt.target.value)}
            ></input>
            <Button
              size="large"
              type="primary"
              onClick={() => {
                if (handleUserChange) handleUserChange(userNameData.userName);
                sendTheOrder();
                clearTheOrder();
              }}
            >
              <GetTextInLang text="Send order" />
            </Button>
          </>
        )}
      </Flex>
    </div>
  );
};

export default memo(Order);
