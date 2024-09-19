export interface Action {
    type: string;
    payload?: any; 
}

export interface ActionCartReducer extends Action {
    payload: {
        id: string;
    }; 
}