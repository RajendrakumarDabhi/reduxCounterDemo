import { combineReducers } from "@reduxjs/toolkit";
import notesReducer from "./reducer/notesSlice";
import userReducer from './reducer/usersSlice'


const rootReducer=combineReducers(
    {
        notes:notesReducer,
        users:userReducer
    }
);
export default rootReducer