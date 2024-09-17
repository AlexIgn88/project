import RestaurantsNavigation from './restaurants-navigation';
import {RestaurantsProps} from '../types/PropsTypes';
import { useCallback, useMemo, useState } from 'react';
import Restaurant from '../components/restaurant';

const Restaurants = (props: RestaurantsProps) => {

    const [
        activeRestaurantId, 
        setActiveRestaurantId
    ] = useState('');

    const activeRestaurant = useMemo(() => {
        return props.restaurants.find(
            restaurant => restaurant.id === activeRestaurantId
        )
    },[activeRestaurantId, props.restaurants]);

    type HandlerPropsOnRestaurantChange = (id: string) => void;
    const handlerPropsOnRestaurantChange: HandlerPropsOnRestaurantChange = useCallback((id: string) => {
        setActiveRestaurantId(id);
    }, []);

    return (
        <div>
            <RestaurantsNavigation 
            restaurants={props.restaurants}
            onRestaurantChange={handlerPropsOnRestaurantChange}
            />
            {activeRestaurant && (
                <Restaurant 
            restaurant={activeRestaurant}
                />
            )}
        </div>
    )
}

export default Restaurants;