import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { removeCont } from '../../store/Reducers/contactsReducer'
import { toggleEdit } from '../../store/Reducers/editionSlice'

import * as S from './style'

export function ContactsList() {
  let contacts = useSelector((state: RootReducer) => state.contactsList.itens)

  const dispatch = useDispatch()

  return (
    <S.ContactList>
      <S.Title>Contatos</S.Title>
      {contacts?.map(i => (
        <S.Contact key={i.number}>
          <div>
            <h1>{i.name}</h1>
            <div>
              <h1> {i.number}</h1>
              <h1 className='Email'>Email: {i.email}</h1>
            </div>
          </div>
          <button
            onClick={() => {
              dispatch(removeCont(i))
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              dispatch(toggleEdit(i))
            }}
          >
            Edite
          </button>
        </S.Contact>
      ))}
    </S.ContactList>
  )
}
