import { jwtDecode } from 'jwt-decode'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import Right from '../components/Right'
import Loading from '../components/Loading'
function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    } else {
      setUser(jwtDecode(localStorage.getItem('token') || ''))
    }
  }, [])
  return (
    <div className="layout">
      {user ? (
        <>
          <Sidebar user={user} />
          <Main user={user} />
          <Right user={user} />
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  )
}

export default App
