import RestaurantsNavigation from '../restaurants-navigation';
import { RestaurantsPropsNormalized, NormalizedRestaurantsType } from '../../types';
import { useCallback, useMemo, useState } from 'react';
import Restaurant from '../restaurant';
import { connect } from 'react-redux';
import { StateType } from '../../store/reducers';
import Order from '../order';
import { selectRestaurants } from '../../store/selectors';
import { useSelector } from 'react-redux';

const Restaurants = () => {

    const restaurants: any = useSelector((state: StateType) => selectRestaurants(state));

    const [
        activeRestaurantId,
        setActiveRestaurantId
    ] = useState('');

    const activeRestaurant = useMemo(() => {
        return restaurants.find(
            (restaurant: any) => restaurant.id === activeRestaurantId
        )
    }, [activeRestaurantId, restaurants]);

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
                >
                    <Order />
                </Restaurant>
            )}
        </div>
    )
}

// const mapStateToProps = (state: StateType) => ({
//     restaurants: selectRestaurants(state),
//   })


// export default connect(
//     mapStateToProps
//   )(Restaurants);

export default Restaurants;