import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "",
            email: "",
            password: "",
            confirmpassword: ""
        }
    },
    reducers: {
        addUserDetails: (state, action) => {
            state.user = action.payload
        }
    }
})
export let { addUserDetails } = userSlice.actions
export default userSlice.reducer