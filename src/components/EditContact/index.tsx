import $ from 'jquery'
import 'jquery-mask-plugin'

import * as S from './style'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Contact } from '../../App'
import { RootReducer } from '../../store'
import { toggleEdit } from '../../store/Reducers/editionSlice'
import { editCont } from '../../store/Reducers/contactsReducer'

export function EditContact() {
  let editContact = useSelector((state: RootReducer) => state.edition)
  const dispatch = useDispatch()
  const [newContact, setNewContact] = useState<Contact>({
    name: editContact.name,
    number: editContact.number,
    email: editContact.email,
  })

  $(() => {
    $('#Tel').mask('(00) 00000-0000')
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(newContact)
    if (
      newContact.email !== '' &&
      newContact.number !== '' &&
      newContact.name !== ''
    ) {
      dispatch(editCont(newContact))
      dispatch(toggleEdit(newContact))
    } else {
      console.error('Adicione alguma informação')
    }
  }

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value })
  }

  return (
    <S.Container>
      <S.ContactList>
        <S.Title>Pré-Visualização</S.Title>
        <S.Contact>
          <div>
            <h1>{newContact.name}</h1>
            <div>
              <h1> {newContact.number}</h1>
              <h1 className='Email'>Email: {newContact.email}</h1>
            </div>
          </div>
          <button>Delete</button>
          <button>Edite</button>
        </S.Contact>
      </S.ContactList>
      <S.FormContats onSubmit={handleSubmit}>
        <S.Input
          onChange={handleValue}
          value={newContact.name}
          name='name'
          type='text'
          placeholder='Nome'
        />
        <S.Input
          onChange={handleValue}
          value={newContact.email}
          name='email'
          type='email'
          placeholder='E-mail'
        />
        <S.Button type='submit'>Submit</S.Button>
      </S.FormContats>
    </S.Container>
  )
}
