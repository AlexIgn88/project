import ActionTypes from '../common';
//   import {
//     selectCart,
//     selectRestaurants,
//     selectRestaurantsLoaded,
//   } from '../selectors';
//   import {push, replace} from 'connected-react-router';
import {ActionCartReducer} from '../../types';
import { AppDispatch, AppGetState } from '../../store';
import { selectDishes, selectUsers } from '../selectors';

const {
  ADD_REVIEW,
  ADD_TO_CART,
  DECREMENT,
  FAIL,
  FETCH_DISHES,
  FETCH_RESTAURANTS,
  FETCH_REVIEWS,
  FETCH_USERS,
  INCREMENT,
  REMOVE_FROM_CART,
  CLEAR_THE_CART,
  SEND_ORDER,
  START,
  SUCCESS,
} = ActionTypes;
  
  export const increment = () => {
    return {
      type: INCREMENT,
    }
  }
  
  export const decrement = () => {
    return {
      type: DECREMENT,
    }
  }
  
  export const addToCart = (dishId: string): ActionCartReducer => {
    return {
      type: ADD_TO_CART,
      payload: {
        id: dishId,
      },
    }
  }
  
  export const removeFromCart = (dishId: string): ActionCartReducer => {
    return {
      type: REMOVE_FROM_CART,
      payload: {
        id: dishId,
      },
    }
  }

  export const clearTheCart = (): Omit<ActionCartReducer, 'payload'> => {
    return {
      type: CLEAR_THE_CART,
    }
  }
  
  export const addReview = (userName: string, rating: number, text: string, restaurantId: string) => ({
    type: ADD_REVIEW,
    payload: {
      userName,
      rating,
      text,
      restaurantId,
      // id: '',
      // userId: '',
    },
    generateId: true,
    provideUserId: true,
  })
  
  export const fetchRestaurants = () => ({
    type: FETCH_RESTAURANTS,
    callAPI: '/api/restaurants',
  })
  
//   export const fetchUsers = () => ({
//     type: FETCH_USERS,
//     callAPI: '/api/users',
//   })
  
  export const fetchReviews = () => ({
    type: FETCH_REVIEWS,
    callAPI: '/api/reviews',
  })
  
  export const fetchDishes = () => (dispatch: AppDispatch, getState: AppGetState) => {
    if(Object.keys(selectDishes(getState())).length > 0) {
      return
    }
      
    dispatch({
      type: FETCH_DISHES + START,
    })
    fetch('/api/dishes')
      .then(res => res.json())
      .then(res =>
        dispatch({
          type: FETCH_DISHES + SUCCESS,
          response: res,
        })
      )
      .catch(error => {
        dispatch({
          type: FETCH_DISHES + FAIL,
          error,
        })
      })
  }

  export const fetchUsers = () => (dispatch: AppDispatch, getState: AppGetState) => {
    if(Object.keys(selectUsers(getState())).length > 0) {
      return
    }
      
    dispatch({
      type: FETCH_USERS + START,
    })
    fetch('/api/users')
      .then(res => res.json())
      .then(res =>
        dispatch({
          type: FETCH_USERS + SUCCESS,
          response: res,
        })
      )
      .catch(error => {
        dispatch({
          type: FETCH_USERS + FAIL,
          error,
        })
      })
  }
  
//   export const sendOrder = details => (dispatch, getState) => {
//     const state = getState()
//     const dishes = selectCart(state)
//     dispatch({
//       type: SEND_ORDER,
//       payload: {
//         cart: dishes,
//         ...details,
//       },
//     })
//     dispatch(push('/order-complete'))
//   }
  
//   export const validateRestaurant = id => (dispatch, getState) => {
//     const restaurant = selectRestaurants(getState()).find(
//       restaurant => restaurant.id === id
//     )
  
//     const loaded = selectRestaurantsLoaded(getState())
  
//     if (loaded && !restaurant) {
//       dispatch(replace('/404'))
//     }
//   }