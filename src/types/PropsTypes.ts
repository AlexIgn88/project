import {RestaurantType, NormalizedRestaurantsType} from './fixturesTypes';

export interface RestaurantsProps {
    restaurants: Array<RestaurantType>;
    onRestaurantChange?: (id: string) => void;
}

export interface RestaurantsPropsNormalized {
    restaurants: Array<NormalizedRestaurantsType>;
    onRestaurantChange?: (id: string) => void;
}

export interface ActiveRestaurantProps {
    restaurant: RestaurantType;
}

export interface ActiveRestaurantPropsNormalized {
    restaurant: NormalizedRestaurantsType;
}

export type ReviewsProps = Pick<RestaurantType, 'reviews'>;
export type DishesProps = Pick<RestaurantType, 'menu'>;

export type DishesPropsNormalized = Pick<NormalizedRestaurantsType, 'menu'>;