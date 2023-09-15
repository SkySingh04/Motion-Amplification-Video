import React, { createContext, useContext, useReducer, useEffect } from 'react';

const initialState = {
  isAuthenticated: false, 
  user: null, 
};

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const callPage = async() => {
    try{
      const res = await fetch('/home',{
        method:'GET',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        ,
      credentials:'include'}
      });

      const data = await res.json();
      if(res.status === 200){
        const error = new Error(res.error)
        const email = localStorage.getItem('email')
        await dispatch({ type: 'LOGIN', payload: { email } });
        throw error
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    callPage();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
