import RestaurantsNavigation from '../restaurants-navigation';
import {RestaurantsProps} from '../../types/PropsTypes';
import { useCallback, useMemo, useState } from 'react';
import Restaurant from '../restaurant';
import {connect} from 'react-redux';
import {State} from '../../store/reducers';

const Restaurants = ({restaurants}: RestaurantsProps) => {

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

const mapStateToProps = (state: State) => ({
    restaurants: state.restaurants,
  })

export default connect(
    mapStateToProps
  )(Restaurants);