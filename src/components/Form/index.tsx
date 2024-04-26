import $ from 'jquery'
import 'jquery-mask-plugin'

import * as S from './style'

import { useDispatch } from 'react-redux'
import { addCont } from '../../store/Reducers/contactsReducer'
import { useState } from 'react'
import { Contact } from '../../App'

export function FormContats() {
  const dispatch = useDispatch()

  const [newContact, setNewContact] = useState<Contact>({
    name: '',
    number: '',
    email: '',
  })

  $(() => {
    $('#Tel').mask('(00) 00000-0000')
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      newContact.email != '' &&
      newContact.number != '' &&
      newContact.name != ''
    ) {
      dispatch(addCont(newContact))
    } else alert('Adicione alguma informação')
  }

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value })
  }

  return (
    <S.FormContats onSubmit={handleSubmit}>
      <S.Input
        onChange={handleValue}
        onBlur={handleValue}
        name='name'
        type='text'
        placeholder='Nome'
      />
      <S.Input
        onChange={handleValue}
        onBlur={handleValue}
        name='email'
        type='email'
        placeholder='E-mail'
      />
      <S.Input
        onChange={handleValue}
        onBlur={handleValue}
        name='number'
        id='Tel'
        type='tel'
        placeholder='Telefone'
      />
      <S.Button type='submit'>Salvar</S.Button>
    </S.FormContats>
  )
}
