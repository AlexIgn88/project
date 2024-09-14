import { useCallback } from 'react';
import {restaurantType} from '../types/fixturesTypes';

interface restaurantsNavigationProps {
    restaurants: Array<restaurantType>;
}

const RestaurantsNavigation = (props: restaurantsNavigationProps) => {

    const handlerPropsOnRestaurantChange = useCallback((id: string) => {
        console.log(id)
    }, []);

    return (
        <div>
            {props.restaurants.map(restaurant => (
                <button
                key={restaurant.id}
                onClick={() => {
                    handlerPropsOnRestaurantChange(restaurant.id)
                }}
                >
                    {restaurant.name}
                    </button>
            ))}
        </div>
    )
}

export default RestaurantsNavigation;