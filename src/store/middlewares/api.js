import ActionTypes from '../common';

const { START, SUCCESS, FAIL } = ActionTypes;

export default store => next => action => {
    const { callAPI, ...rest } = action

    if (!callAPI) {
        return next(rest)
    }

    store.dispatch({
        ...rest,
        type: action.type + START,
    })
    fetch(callAPI)
        .then(res =>{ 
            if (!res.ok) {
                throw new Error(`Ошибка HTTP: ${res.status}`);
            }
            return res.json()})
        .then(res =>
            next({
                ...rest,
                type: action.type + SUCCESS,
                response: res,
            })
        )
        .catch(err => {
            store.dispatch({
                ...rest,
                type: action.type + FAIL,
                error: err,
            })
        })
}