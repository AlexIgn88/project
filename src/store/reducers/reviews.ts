import { normalizedReviews } from '../../fixtures';
import { ReviewsInObjectType } from '../../types';
import { Action } from '../../types';
import ActionTypes from '../common';
import { arrayToMap } from '../utils';
import { Map } from 'immutable';

const {
  ADD_REVIEW,
  FAIL,
  FETCH_REVIEWS,
  START, SUCCESS
} = ActionTypes;

// const initialState: ReviewsInObjectType = arrayToMap(normalizedReviews);

const initialStateMap: any = Map(arrayToMap(normalizedReviews));
// console.log('initialStateMap.toObject',initialStateMap.toObject());
// console.log('initialStateMap.toJS',initialStateMap.toJS());
export type initialStateMapType = typeof initialStateMap;

export const reviewsReducer = (
  reviewsState: initialStateMapType = initialStateMap,
  action: Action
) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return reviewsState.set(
        action.payload.id,
        {
          id: action.payload.id,
          userId: action.payload.userId,
          text: action.payload.text,
          rating: action.payload.rating,
        }
      )
      // const newReview = {
      //   [action.payload.id]: {
      //     id: action.payload.id,
      //     userId: action.payload.userId,
      //     text: action.payload.text,
      //     rating: action.payload.rating,
      //   }
      // }
      // return {
      //   ...reviewsState,
      //   ...newReview
      // }
    }
    default:
      return reviewsState
  }
}