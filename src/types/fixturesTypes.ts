export interface restaurantType {
    id: string;
    name: string;
    location: locationType;
    image: string;
    menu: Array<restaurantMenuType>;
    reviews: Array<restaurantReviewsType>;
}

interface locationType {
    lat: number;
    lng: number;
}

interface restaurantMenuType {
    id: string;
    name: string;
    price: number;
    ingredients: Array<string>;
}

interface restaurantReviewsType {
    id: string;
    user: string;
    text: string;
    rating: number;
}

export interface normalizedRestaurantsType {
    id: string;
    name: string;
    location: locationType;
    image: string;
    menu: Array<string>;
    reviews: Array<string>;
}

export interface normalizedDishesType {
    id: string;
    name: string;
    price: number;
    ingredients: Array<string>;
}

export interface normalizedReviewsType {
    id: string;
    userId: string;
    text: string;
    rating: number;
}

export interface normalizedUsersType {
    id: string;
    name: string;
}