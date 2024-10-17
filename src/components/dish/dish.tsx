import { NormalizedDishesType } from "../../types";
import { Card, Typography } from "antd";
import { useSelector, connect } from "react-redux";
import { StateType } from "../../store/reducers";
import { AppDispatch } from "../../store";
import { DecreaseButton, IncreaseButton } from "../cart-buttons";
import { selectDish } from "../../store/selectors";
import {
  useLanguageObject,
  getTextInLang,
} from "../../custom-hooks/use-text-in-lang";

interface DishesOldProps {
  id: string;
}

interface DishProps {
  dispatch?: AppDispatch;
  id: string;
  dish: NormalizedDishesType;
}

const Dish = ({ id, dish: { name, price } }: DishProps) => {
  const amount: number = useSelector((state: StateType) => state.cart[id]) || 0;
  const currentLanguageObject = useLanguageObject();
  return (
    <Card title={name} data-testid="DISH">
      <Typography.Paragraph>
        {getTextInLang("Price", currentLanguageObject)}: {price}
      </Typography.Paragraph>
      <div>
        <div data-testid="AMOUNT">{amount}</div>
        <DecreaseButton id={id} />
        <IncreaseButton id={id} />
      </div>
    </Card>
  );
};

const mapStateToProps = (state: StateType, ownProps: DishesOldProps) => {
  return {
    dish: selectDish(state, ownProps),
  };
};

export default connect(mapStateToProps)(Dish);
