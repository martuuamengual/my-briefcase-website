import { configureStore } from '@reduxjs/toolkit'
import contactForm from 'src/redux/Contact/slice/form'

export default configureStore({
    reducer: {
        contactForm: contactForm
    }
})