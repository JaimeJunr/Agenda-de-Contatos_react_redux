import { useSelector } from 'react-redux'
import { ContactsList } from './components/ContactsList'
import { EditContact } from './components/EditContact'
import { FormContats } from './components/Form'
import { RootReducer } from './store'

export type Contact = {
  name: string
  number: string
  email: string
}

const App = () => {
  let isEdit = useSelector((state: RootReducer) => state.edition.isEdit)

  return (
    <>
      {isEdit ? (
        <EditContact />
      ) : (
        <>
          <FormContats /> <ContactsList />
        </>
      )}
    </>
  )
}
export default App
function dispatch(arg0: any) {
  throw new Error('Function not implemented.')
}
