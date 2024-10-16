import { RestaurantsPropsNormalized } from "../../types";
import { Flex, Button } from "antd";
import styles from "./restaurants-navigation.module.css";
import { NavLink } from "react-router-dom";

const RestaurantsNavigation = ({ restaurants }: RestaurantsPropsNormalized) => {
  return (
    <Flex justify="center">
      {restaurants.map(({ id, name }) => (
        <NavLink
          key={id}
          // onClick={() => onRestaurantChange(restaurant.id)}
          // href={`/restaurant/${id}`}
          to={`/restaurant/${id}`}
          className={({ isActive }) =>
            isActive ? styles.active : styles.button
          }
          data-testid="RESTAURANT_NAVIGATION"
        >
          {name}
        </NavLink>
      ))}
    </Flex>
  );
};

export default RestaurantsNavigation;
