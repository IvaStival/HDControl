import React, { createElement } from "react";
import {
    FETCH_HD,
    FETCH_HDS,
    FETCH_LOCATION,
    FETCH_LOCATIONS,
    CREATE_HD,
    DELETE_HD,
    EDIT_HD,
    EDIT_LOCATION
} from '../actions/types';

const hdReducers = (state = {}, action) => {
    switch(action.type){
        case FETCH_HD:
            return {...state, [action.payload.id]: action.payload}

        case CREATE_HD:
            console.log(state)
            return {...state, [action.payload.id]: action.payload, location: "Fantastica"}

        default:
            return state;
    }
}

export default hdReducers;