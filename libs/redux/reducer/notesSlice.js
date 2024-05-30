import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    notes: [
        { id: 1, title: "Note 1", content: "This is note" }
    ],
    isLoading: false,
    error: "",
}
const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload)
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
        },
        userReducer: (state, action) => {

        }

    },
}
);

export const { addNote, removeNote } = notesSlice.actions;

export default notesSlice.reducer;