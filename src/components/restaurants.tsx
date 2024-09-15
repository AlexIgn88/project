import RestaurantsNavigation from './restaurants-navigation';
import Menu from './menu';
import {RestaurantsProps} from '../types/fixturesTypes';
import { useCallback, useMemo, useState } from 'react';

const Restaurants = (props: RestaurantsProps) => {

    const [
        activeRestaurantId, 
        setActiveRestaurantId
    ] = useState(props.restaurants[0].id);

    // console.log('id=',activeRestaurantId);

    const activeRestaurant = useMemo(() => {
        return props.restaurants.find(
            restaurant => restaurant.id === activeRestaurantId
        )
    },[activeRestaurantId, props.restaurants]);

    const handlerPropsOnRestaurantChange = useCallback((id: string) => {
        setActiveRestaurantId(id);
    }, []);

    return (
        <div>
            <RestaurantsNavigation 
            restaurants={props.restaurants}
            onRestaurantChange={handlerPropsOnRestaurantChange}
            />
            <Menu restaurant={activeRestaurant} />
        </div>
    )
}

export default Restaurants;