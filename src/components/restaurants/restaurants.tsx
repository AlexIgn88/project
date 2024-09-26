import RestaurantsNavigation from '../restaurants-navigation';
import { RestaurantsPropsNormalized, NormalizedRestaurantsType } from '../../types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Restaurant from '../restaurant';
// import { connect } from 'react-redux';
import { StateType } from '../../store/reducers';
import Order from '../order';
import { selectRestaurants } from '../../store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { fetchRestaurants } from '../../store/action-creators';

const Restaurants = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchRestaurants())
    }, []);

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
            {(restaurants.length === 0) && (
                <div style={
                    {
                        color: 'red',
                        fontWeight: 'bold',
                        fontSize: 'x-large',
                    }
                }>
                    Loading...
                </div>)}
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