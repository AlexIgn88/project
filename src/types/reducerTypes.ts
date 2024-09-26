export interface Action {
    type: string;
    payload?: any;
    response?: any[];
    error?: any;
}

export interface ActionCartReducer extends Action {
    payload: {
        id: string;
    };
}

export interface ActionRestaurants extends Action {
    response?: any[];
    error?: any;
}