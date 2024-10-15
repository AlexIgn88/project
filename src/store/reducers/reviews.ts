import { ReviewsInObjectType } from '../../types';
import { Action } from '../../types';
import ActionTypes from '../common';
import { arrayToMap } from '../utils';

import { produce } from 'immer';

const {
  ADD_REVIEW,
  FAIL,
  FETCH_REVIEWS,
  START, SUCCESS
} = ActionTypes;

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
}

interface initialStateType {
  loading: boolean;
  loaded: boolean;
  error: any;
  entities: ReviewsInObjectType | {};
}

export const reviewsReducer = (
  reviewsState: initialStateType = initialState,
  action: Action
) => produce(reviewsState, (draft: any) => {
  switch (action.type) {
    case ADD_REVIEW: {
      draft.entities[action.payload.id] = {
        id: action.payload.id,
        userId: action.payload.userId,
        text: action.payload.text,
        rating: action.payload.rating,
      }
      break;

    }
    case FETCH_REVIEWS + START: {
      return {
        loading: true,
        loaded: draft.loaded,
        error: draft.error,
        entities: draft.entities,
      }
    }
    case FETCH_REVIEWS + SUCCESS: {
      if (!action.response) return reviewsState
      return {
        loading: false,
        loaded: true,
        error: null,
        entities: arrayToMap(action.response),
      }
    }
    case FETCH_REVIEWS + FAIL: {
      return {
        loading: false,
        loaded: false,
        error: action.error.message,
        entities: draft.entities,
      }
    }
    default:
      return reviewsState
  }
})