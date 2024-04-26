import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Contact } from '../../App'

interface EditionState {
  isEdit: boolean
  name: string
  email: string
  number: string
}

const initialState: EditionState = {
  isEdit: false,
  name: '',
  email: '',
  number: '',
}

const isEditSlice = createSlice({
  name: 'edition',
  initialState,
  reducers: {
    toggleEdit: (state, action: PayloadAction<Contact>) => {
      state.isEdit = !state.isEdit
      const { name, email, number } = action.payload
      state.name = name
      state.email = email
      state.number = number
    },
  },
})

export const { toggleEdit } = isEditSlice.actions
export default isEditSlice.reducer
