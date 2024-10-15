import { NormalizedRestaurantsType } from '../../types';
import { ActionRestaurants } from '../../types';
import ActionTypes from '../common';
import { produce } from 'immer';

const {
    ADD_REVIEW,
    FAIL,
    FETCH_RESTAURANTS,
    START, SUCCESS
} = ActionTypes;

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

