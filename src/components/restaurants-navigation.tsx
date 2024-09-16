import {RestaurantsProps} from '../types/PropsTypes';
import { Flex, Button } from "antd";

const RestaurantsNavigation = (props: RestaurantsProps) => {
    return (
        <Flex justify='center'>
            {props.restaurants.map(restaurant => (
                <Button
                key={restaurant.id}
                onClick={() =>  props.onRestaurantChange(restaurant.id)}
                >
                    {restaurant.name}
                </Button>
            ))}
        </Flex>
    )
}

export default RestaurantsNavigation;