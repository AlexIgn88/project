import {RestaurantType} from './fixturesTypes';

export interface RestaurantsProps {
    restaurants: Array<RestaurantType>;
    onRestaurantChange?: any;
}

export interface ActiveRestaurantProps {
    restaurant: RestaurantType;
}

export type ReviewsProps = Pick<RestaurantType, 'reviews'>;
export type DishesProps = Pick<RestaurantType, 'menu'>;