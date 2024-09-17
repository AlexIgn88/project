import {RestaurantsProps} from '../types/PropsTypes';
import { Flex, Button } from "antd";

const RestaurantsNavigation = ({
    restaurants, 
    onRestaurantChange
}: Required<RestaurantsProps>) => {
    return (
        <Flex 
        justify='center'
        >
            {restaurants.map(restaurant => (
                <Button
                key={restaurant.id}
                onClick={() => onRestaurantChange(restaurant.id)}
                data-testid="RESTAURANT_NAVIGATION"
                >
                    {restaurant.name}
                </Button>
            ))}
        </Flex>
    )
}

export default RestaurantsNavigation;