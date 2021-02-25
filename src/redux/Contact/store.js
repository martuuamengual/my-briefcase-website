import { configureStore } from '@reduxjs/toolkit'
import formReducer from 'src/redux/Contact/slice/form'

export default configureStore({
    reducer: {
        form: formReducer
    }
})