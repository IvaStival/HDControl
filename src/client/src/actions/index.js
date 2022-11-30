import React from "react";
import {
    FETCH_HD,
    FETCH_HDS,
    FETCH_LOCATION,
    FETCH_LOCATIONS,
    EDIT_HD,
    EDIT_LOCATION,
    CREATE_HD,
    DELETE_HD,
} from './types';

import json_server from "../api/json_server";

export const createHd = (formValues) => {
    return async (dispatch, getState) => {
        const response = await json_server.post('/hds', {...formValues});

        dispatch({type: CREATE_HD, payload: response.data})
    }
}

export const fetchHd = (id) => {
    return async (dispatch) => {
        const response = json_server.get(`/hds/${id}`)

        dispatch({type: FETCH_HD, payload: response.data})
    }
}