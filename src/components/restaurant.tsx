import Menu from './menu';
import Reviews from '../components/reviews';
import {ActiveRestaurantProps} from '../types/PropsTypes';
import {RestaurantReviewsType} from '../types/fixturesTypes';
import { Rate, Flex, Typography  } from "antd";
import { useMemo } from 'react';

const Restaurant = (props: ActiveRestaurantProps) => {
    const restaurantReviewsArray: Array<RestaurantReviewsType> = props?.restaurant?.reviews || [];

    const result: number = useMemo(() => {
        return restaurantReviewsArray.reduce(
            (sum, current) => sum + current?.rating, 0)
    }, [restaurantReviewsArray]);

    const restaurantRate: number = useMemo(() => {
        return restaurantReviewsArray.length > 0 
        ? Math.floor(result / restaurantReviewsArray.length)
        : 0}, [restaurantReviewsArray]); 
    
    return (
        <>
        <Flex 
        justify='center'
        vertical
        align='center'
        >
            <Typography.Title>{props?.restaurant?.name}</Typography.Title>
            <Rate value={restaurantRate}/>
        </Flex>
        <Typography.Title
        style={{ textAlign: 'center' }}
        >
            Menu
        </Typography.Title>
        <Menu 
        restaurant={props?.restaurant} 
        />
        <Typography.Title
        style={{ textAlign: 'center' }}
        >
        Reviews
        </Typography.Title>
        <Reviews 
        reviews={props?.restaurant?.reviews}
        />
        </>
    )
}

export default Restaurant;