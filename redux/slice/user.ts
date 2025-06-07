import { createSlice } from "@reduxjs/toolkit"

const userSlice:any = createSlice({
    name:'user',
    initialState: {
        token: ""
    },
    reducers: {
        updateToken(state: any, payload: any) {
            state.token = payload?.payload.token
        }
    }
})
export default userSlice.reducer;
export const { updateToken } = userSlice.actions