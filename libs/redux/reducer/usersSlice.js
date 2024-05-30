import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("fetchUsers", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
})

const initialState = {
    users: [
    ],
    isLoading: false,
    error: "",
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload
        })
        builder.addCase(getUsers.pending, (state, action) => {
            state.isLoading = true
            state.error = ""
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false
            console.log("error")
            state.error = action.error
        })

    }
}
);

export const { deleteUser } = usersSlice.actions;
export default usersSlice.reducer