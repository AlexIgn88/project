// import {arrayToMap} from '../utils';
// import produce from 'immer';
import {normalizedUsers} from '../../fixtures';
import {UsersInObjectType} from '../../types';
import {Action} from '../../types';
import ActionTypes from '../common';

const {ADD_REVIEW, FAIL, FETCH_USERS, START, SUCCESS} = ActionTypes;

const initialState = normalizedUsers.reduce((users, user) => {
    return {
        ...users,
        [user.id]: user
    }
}, {});

// const initialState = {
//   loading: false,
//   loaded: false,
//   error: null,
//   entities: {},
// }

export const usersReducer = (
    usersState: UsersInObjectType = initialState, 
    action: Action
) => {
    switch (action.type) {
        case ADD_REVIEW: {
            return {
                ...usersState,
                [action.payload.userId]: {
                    id: action.payload.userId,
                    name: action.payload.userName,
                }
            } 
        }
        default:
      return usersState
    }
}


//   produce(usersState, draft => {
//     switch (action.type) {
//       case ADD_REVIEW: {
//         if (!draft.entities[action.userId]) {
//           draft.entities[action.userId] = {
//             id: action.userId,
//             name: action.payload.userName,
//           }
//         }
//         break
//       }
//       case FETCH_USERS + START: {
//         draft.loading = true
//         break
//       }
//       case FETCH_USERS + SUCCESS: {
//         draft.loading = false
//         draft.loaded = true
//         draft.error = null
//         draft.entities = {
//           ...draft.entities,
//           ...arrayToMap(action.response),
//         }
//         break
//       }
//       case FETCH_USERS + FAIL: {
//         draft.loading = false
//         draft.loaded = false
//         draft.error = action.error
//         break
//       }
//       default:
//         return
//     }
//   })