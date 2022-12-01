import React, { createElement } from "react";
import _ from 'lodash';
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
        case CREATE_HD:
            console.log(state)
            return {...state, [action.payload.id]: action.payload}

        case FETCH_HDS:
            return {...state, ..._.mapKeys(action.payload, 'id')}
            
        case FETCH_HD:
            return {...state, [action.payload.id]: action.payload}

        

        default:
            return state;
    }
}

export default hdReducers;