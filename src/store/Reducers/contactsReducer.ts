import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Contact } from '../../App'
import { RootReducer } from '..'
import { useSelector } from 'react-redux'

type contatsListState = {
  itens: Contact[]
}

const initialState: contatsListState = {
  itens: [],
}

const contactsListSlice = createSlice({
  name: 'contactsList',
  initialState,
  reducers: {
    addCont: (state, action: PayloadAction<Contact>) => {
      const newItem = action.payload

      if (state.itens.find(item => item.number === newItem.number)) {
        alert('Contato já adicionado')
      } else {
        state.itens.push(newItem)
      }
    },
    removeCont: (state, action: PayloadAction<Contact>) => {
      const newItem = action.payload
      state.itens = state.itens.filter(i => i.number !== newItem.number)
    },
    editCont: (state, action: PayloadAction<Contact>) => {
      const editedContact = action.payload
      const index = state.itens.findIndex(
        item => item.number === editedContact.number,
      )
      if (index !== -1) {
        state.itens[index] = editedContact
      }
    },
  },
})

export const { addCont, removeCont, editCont } = contactsListSlice.actions
export default contactsListSlice.reducer
