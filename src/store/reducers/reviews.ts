import {normalizedReviews} from '../../fixtures';
import {ReviewsInObjectType} from '../../types';
import {Action} from '../../types';
import ActionTypes from '../common';
// import {fromJS} from 'immutable';
// import {arrayToMap} from '../utils';

const {ADD_REVIEW, FAIL, FETCH_REVIEWS, START, SUCCESS} = ActionTypes;

const initialState = normalizedReviews.reduce((reviews, review) => {
    return {
        ...reviews,
        [review.id]: review
    }
}, {});

// const initialState = fromJS({
//   loading: false,
//   loaded: false,
//   error: null,
//   entities: {},
// })

export const reviewsReducer = (
    reviewsState: ReviewsInObjectType = initialState, 
    action: Action
) => {
  switch (action.type) {
    // case ADD_REVIEW: {
    //   return reviewsState.setIn(
    //     ['entities', action.generatedId],
    //     fromJS({
    //       id: action.generatedId,
    //       userId: action.userId,
    //       text: action.payload.text,
    //       rating: action.payload.rating,
    //     })
    //   )
    // }
    // case FETCH_REVIEWS + START: {
    //   return reviewsState.set('loading', true)
    // }
    // case FETCH_REVIEWS + SUCCESS: {
    //   return reviewsState
    //     .set('loading', false)
    //     .set('loaded', true)
    //     .set('error', null)
    //     .set('entities', fromJS(arrayToMap(action.response)))
    // }
    // case FETCH_REVIEWS + FAIL: {
    //   return reviewsState
    //     .set('loading', false)
    //     .set('loaded', false)
    //     .set('error', action.error)
    // }
    default:
      return reviewsState
  }
}