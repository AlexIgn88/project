import Menu from './menu';
import Reviews from '../components/reviews';
import {ActiveRestaurantProps} from '../types/PropsTypes';
import {RestaurantReviewsType} from '../types/fixturesTypes';
import { Rate } from "antd";
import { useMemo } from 'react';

const Restaurant = (props: ActiveRestaurantProps) => {
    const restaurantReviewsArray: Array<RestaurantReviewsType> = props?.restaurant?.reviews || [];

    const result: number = useMemo(() => {
        return restaurantReviewsArray.reduce(
            (sum, current) => sum + current?.rating, 0)
    }, []);

    const restaurantRate: number = useMemo(() => {
        return restaurantReviewsArray.length > 0 
        ? Math.floor(result / restaurantReviewsArray.length)
        : 0}, [restaurantReviewsArray]); 
    
    return (
        <>
        <Rate value={restaurantRate}/>
        <Menu 
        restaurant={props?.restaurant} 
        />
        <Reviews 
        reviews={props?.restaurant?.reviews}
        />
        </>
    )
}

export default Restaurant;