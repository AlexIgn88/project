import {RestaurantsProps,RestaurantsPropsNormalized} from '../../types';
import { Flex, Button } from "antd";

const RestaurantsNavigation = ({
    restaurants, 
    onRestaurantChange
}: Required<RestaurantsPropsNormalized>) => {
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