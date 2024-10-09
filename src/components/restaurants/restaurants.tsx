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
import Loader from '../loader';
import { useParams } from 'react-router-dom';

const Restaurants = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchRestaurants())
    }, []);

    const restaurants: any = useSelector((state: StateType) => selectRestaurants(state));

    const {activeId} = useParams();
    console.log('activeId=',activeId);

    const [
        activeRestaurantId,
        setActiveRestaurantId
    ] = useState('');

    useEffect(() => setActiveRestaurantId(activeId as string),[activeId]);

    const activeRestaurant = useMemo(() => {
        return restaurants.find(
            (restaurant: any) => restaurant.id === activeRestaurantId
        )
    }, [activeRestaurantId, restaurants]);

    // type HandlerPropsOnRestaurantChange = (id: string) => void;
    // const handlerPropsOnRestaurantChange: HandlerPropsOnRestaurantChange = useCallback((id: string) => {
    //     setActiveRestaurantId(id);
    // }, []);

    return (
        <div data-testid="RESTAURANTS">
            {(restaurants.length === 0) && <Loader />}
            <RestaurantsNavigation
                restaurants={restaurants}
                // onRestaurantChange={handlerPropsOnRestaurantChange}
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