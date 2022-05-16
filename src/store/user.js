import { createSlice } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode'

let initialState = null

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: initialState
    },
    reducers: {
        addUser: (state, action) => {
            // action.payload: userData
            state.data = {...action.payload.userData}            
        },
        removeUser: (state) => {
            state.data = null
        }
    }
})

export default userSlice