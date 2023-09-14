import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

const RequireAuth = ({children}) => {

    const {state} = useAuth()

    if(!state.isAuthenticated){
        return <Navigate to='/login'/>
    }
  return children
}
export default RequireAuth