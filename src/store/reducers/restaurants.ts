import { restaurants, normalizedRestaurants } from '../../fixtures';
import { RestaurantType, NormalizedRestaurantsType } from '../../types';
import { ActionRestaurants } from '../../types';
import ActionTypes from '../common';
// import { List } from 'immutable';
// import { fromJS } from 'immutable';
import { produce } from 'immer';

const {
    ADD_REVIEW,
    FAIL,
    FETCH_RESTAURANTS,
    START, SUCCESS
} = ActionTypes;

// const initialStateList = List(normalizedRestaurants);

// const initialStateList: [] = [];
// export type initialStateListType = typeof initialStateList;

const initialState = {
    loading: false,
    loaded: false,
    error: null,
    entities: [],
  }

  interface initialStateType {
    loading: boolean;
    loaded: boolean;
    error: any;
    entities: Array<NormalizedRestaurantsType> | [];
  }

export const restaurantsReducer = (
    restaurantsState: initialStateType = initialState,
    action: ActionRestaurants
) =>
    // {
    //     switch (action.type) {
    //         case ADD_REVIEW: {
    //             const { restaurantId, id } = action.payload;
    //             // const currentRestaurant: NormalizedRestaurantsType | undefined = restaurantsState
    //             // .find(restaurant => restaurant.id === restaurantId)
    //             // if (!currentRestaurant) return restaurantsState
    //             // // currentRestaurant?.reviews.push(id);
    //             // // return [...restaurantsState]
    //             // const updatedRestaurant: NormalizedRestaurantsType = {
    //             //     ...currentRestaurant,
    //             //     reviews: [...currentRestaurant?.reviews, id]
    //             // }
    //             // return restaurantsState.map(restaurant =>
    //             //     restaurant === currentRestaurant ? updatedRestaurant : restaurant
    //             // )


    //             const currentRestaurantIndex = restaurantsState
    //                 .findIndex((restaurant) => restaurant.id === restaurantId);
    //             const currentRestaurant = restaurantsState.get(currentRestaurantIndex);
    //             if (!currentRestaurant) return restaurantsState
    //             return restaurantsState.setIn(
    //                 [currentRestaurantIndex, 'reviews'],
    //                 [...currentRestaurant?.reviews, id]
    //                 // currentRestaurant.get('reviews').push(id)
    //                 // [...currentRestaurant.get('reviews'), id]
    //             )


    //         }
    //         default:
    //             return restaurantsState
    //     }
    // };
    produce(restaurantsState, (draft) => {
        switch (action.type) {
            case ADD_REVIEW: {
                const { restaurantId, id } = action.payload;
                const activeRestaurant: NormalizedRestaurantsType | undefined = draft
                    .entities
                    .find((restaurant: NormalizedRestaurantsType) => restaurant.id === restaurantId)
                if (!activeRestaurant) return draft

                activeRestaurant.reviews.push(id)
                break
            }
            case FETCH_RESTAURANTS + START: {
                return {
                  loading: true,
                  loaded: draft.loaded,
                  error: draft.error,
                  entities: draft.entities,
                }
              }
            // case FETCH_RESTAURANTS + SUCCESS: {
            //     return action.response
            // }
            case FETCH_RESTAURANTS + SUCCESS: {
                if (!action.response) return draft
                return {
                  loading: false,
                  loaded: true,
                  error: null,
                  entities: action.response,
                }
              }
            case FETCH_RESTAURANTS + FAIL: {
                return {
                  loading: false,
                  loaded: false,
                  error: action.error.message,
                  entities: draft.entities,
                }
            }
            default:
                return
        }
    })

