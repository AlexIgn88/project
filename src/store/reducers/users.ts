import { normalizedUsers } from '../../fixtures';
import { UsersInObjectType } from '../../types';
import { Action } from '../../types';
import ActionTypes from '../common';
import { arrayToMap } from '../utils';

const {
    ADD_REVIEW,
    FAIL,
    FETCH_USERS,
    START,
    SUCCESS
} = ActionTypes;

const initialState: UsersInObjectType = arrayToMap(normalizedUsers);

export const usersReducer = (
    usersState: UsersInObjectType = initialState,
    action: Action
) => {
    switch (action.type) {
        case ADD_REVIEW: {
            if (usersState[action.payload.userId]) return usersState
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
