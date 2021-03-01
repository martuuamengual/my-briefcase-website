import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: 'contactForm',
    initialState: {
        name: '',
        email: '',
        message: ''
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setName, setEmail, setMessage } = formSlice.actions

export default formSlice.reducer