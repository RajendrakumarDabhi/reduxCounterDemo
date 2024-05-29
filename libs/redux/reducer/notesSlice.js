import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    notes: [
        { id: 1, title: "Note 1", content: "This is note"}
    ]
}
 const notesSlice = createSlice(
    {
        name: 'notes',
        initialState,
        reducers: {
            addNote: (state, action) => {
                console.log('action.payload')
                console.log(action.payload)
                state.notes.push(action.payload)
            },
            removeNote: (state, action) => {
                
                console.log('action.payload')
                state.notes = state.notes.filter(note => note.id !== action.payload);
            }

        }
    }
);

export const { addNote, removeNote } = notesSlice.actions;

export default notesSlice.reducer;