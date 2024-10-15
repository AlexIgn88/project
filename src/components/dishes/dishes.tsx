import Dish from "../dish";
import { Flex } from "antd";

interface DishesProps {
  menu: Array<string>;
}

const Dishes = ({ menu }: DishesProps) => {
  return (
    <Flex gap="50px" wrap justify="center" style={{ marginTop: "20px" }}>
      {menu?.map((dishId: string) => <Dish key={dishId} id={dishId} />)}
    </Flex>
  );
};

export default Dishes;
