import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './Reducers/contactsReducer'
import isEditSlice from './Reducers/editionSlice'

export type RootReducer = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    contactsList: contactsReducer,
    edition: isEditSlice,
  },
})
