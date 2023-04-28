import { CATEGORIES_ACTIONS_TYPES } from "./categories.type";

const CATEGORIES_INITIAL_STATE = {
    categoriesMap: [],
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES:
            return {
                ...state,
                categoriesMap: payload
            }
        default:
            return state;
    }
}