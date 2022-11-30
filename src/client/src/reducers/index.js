import React from "react";

import { combineReducers } from "redux";
import hdReducers from "./hdReducers";

export default combineReducers({
    hds: hdReducers
});
