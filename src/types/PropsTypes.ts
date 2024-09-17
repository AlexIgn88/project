import {RestaurantType} from './fixturesTypes';

export interface RestaurantsProps {
    restaurants: Array<RestaurantType>;
    onRestaurantChange?: (id: string) => void;
}

export interface ActiveRestaurantProps {
    restaurant: RestaurantType;
}

export type ReviewsProps = Pick<RestaurantType, 'reviews'>;
export type DishesProps = Pick<RestaurantType, 'menu'>;