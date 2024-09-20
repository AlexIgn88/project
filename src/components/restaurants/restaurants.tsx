import RestaurantsNavigation from '../restaurants-navigation';
import {RestaurantsPropsNormalized} from '../../types';
import { useCallback, useMemo, useState } from 'react';
import Restaurant from '../restaurant';
import {connect} from 'react-redux';
import {StateType} from '../../store/reducers';

const Restaurants = ({restaurants}: RestaurantsPropsNormalized) => {

    const [
        activeRestaurantId, 
        setActiveRestaurantId
    ] = useState('');

    const activeRestaurant = useMemo(() => {
        return restaurants.find(
            restaurant => restaurant.id === activeRestaurantId
        )
    },[activeRestaurantId, restaurants]);

    type HandlerPropsOnRestaurantChange = (id: string) => void;
    const handlerPropsOnRestaurantChange: HandlerPropsOnRestaurantChange = useCallback((id: string) => {
        setActiveRestaurantId(id);
    }, []);

    return (
        <div data-testid="RESTAURANTS">
            <RestaurantsNavigation 
            restaurants={restaurants}
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

const mapStateToProps = (state: StateType) => ({
    restaurants: state.restaurants,
  })

export default connect(
    mapStateToProps
  )(Restaurants);