// import { normalizedUsers } from '../../fixtures';
import { UsersInObjectType } from '../../types';
import { Action } from '../../types';
import ActionTypes from '../common';
import { arrayToMap } from '../utils';
import { produce } from 'immer';

const {
    ADD_REVIEW,
    FAIL,
    FETCH_USERS,
    START,
    SUCCESS
} = ActionTypes;

// const initialState: UsersInObjectType = arrayToMap(normalizedUsers);

export const usersReducer = (
    usersState: UsersInObjectType = {},
    action: Action
) => produce(usersState, (draft: any) => {
    switch (action.type) {
        case ADD_REVIEW: {
            if (usersState[action.payload.userId]) return usersState
            // return {
            //     ...usersState,
            //     [action.payload.userId]: {
            //         id: action.payload.userId,
            //         name: action.payload.userName,
            //     }
            // }


            return {
                ...draft,
                [action.payload.userId]: {
                    id: action.payload.userId,
                    name: action.payload.userName,
                }
            }
        }
        case FETCH_USERS + SUCCESS: {
            if (!action.response) return usersState
            return arrayToMap(action.response)
        }
        default:
            return usersState
    }
})
