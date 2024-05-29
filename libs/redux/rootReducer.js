import { combineReducers } from "@reduxjs/toolkit";
import notesReducer from "./reducer/notesSlice";

const rootReducer=combineReducers(
    {
        notes:notesReducer,
    }
);
export default rootReducer