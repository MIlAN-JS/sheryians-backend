import { useContext, useState } from 'react'
import Expression from './Features/expression/components/Expression'
import { AuthContext } from './Features/auth/context/AuthContext'

function App() {
  const {user}  = useContext(AuthContext)
  const [count, setCount] = useState(0)
  console.log(user)

  return (
   <>
   <Expression/>
   </>
  )
}

export default App
