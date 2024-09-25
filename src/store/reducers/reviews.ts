import { normalizedReviews } from '../../fixtures';
import { ReviewsInObjectType } from '../../types';
import { Action } from '../../types';
import ActionTypes from '../common';
import { arrayToMap } from '../utils';

const {
  ADD_REVIEW,
  FAIL,
  FETCH_REVIEWS,
  START, SUCCESS
} = ActionTypes;

const initialState: ReviewsInObjectType = arrayToMap(normalizedReviews);

export const reviewsReducer = (
  reviewsState: ReviewsInObjectType = initialState,
  action: Action
) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const newReview = {
        [action.payload.id]: {
          id: action.payload.id,
          userId: action.payload.userId,
          text: action.payload.text,
          rating: action.payload.rating,
        }
      }
      return {
        ...reviewsState,
        ...newReview
      }
    }
    default:
      return reviewsState
  }
}