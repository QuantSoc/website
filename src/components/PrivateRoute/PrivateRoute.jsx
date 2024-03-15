import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../../hooks/useAuthStatus'

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <p>Loading...</p>
  }

  return loggedIn ? <Outlet /> : <Navigate to='/boardlogin' />
}

export default PrivateRoute