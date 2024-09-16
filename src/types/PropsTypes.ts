import {RestaurantType} from './fixturesTypes';

export interface RestaurantsProps {
    restaurants: Array<RestaurantType>;
    onRestaurantChange?: any;
}

export interface ActiveRestaurantProps {
    restaurant: RestaurantType | undefined;
}

export type ReviewsProps = Pick<RestaurantType, 'reviews'>;