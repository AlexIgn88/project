export interface RestaurantType {
    id: string;
    name: string;
    location: LocationType;
    image: string;
    menu: Array<RestaurantMenuType>;
    reviews: Array<RestaurantReviewsType>;
}

interface LocationType {
    lat: number;
    lng: number;
}

export interface RestaurantMenuType {
    id: string;
    name: string;
    price: number;
    ingredients: Array<string>;
}

export interface RestaurantReviewsType {
    id: string;
    user: string;
    text: string;
    rating: number;
}

export interface NormalizedRestaurantsType {
    id: string;
    name: string;
    location: LocationType;
    image: string;
    menu: Array<string>;
    reviews: Array<string>;
}

export interface NormalizedDishesType {
    id: string;
    name: string;
    price: number;
    ingredients: Array<string>;
}

export interface NormalizedReviewsType {
    id: string;
    userId: string;
    text: string;
    rating: number;
}

export interface NormalizedUsersType {
    id: string;
    name: string;
}
