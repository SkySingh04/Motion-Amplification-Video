import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import {useAuth} from '../AuthContext'

export default function Login() {

    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const { state, dispatch } = useAuth();

    const loginUser = async(e) => {
        e.preventDefault();
        localStorage.setItem("email",email)
        const res = await fetch('/login',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
    });
    const data = await res.json();
    if(res.status === 400 || !data){
        window.alert("Invalid Credentials");
    }
    else{
        await dispatch({ type: 'LOGIN', payload: { email } });
        window.alert("Registration Successfull");
        navigate("/upload")
    }
}

  return (
    <div>
        <Navbar />
    <div className='relative w-full h-screen bg-light'>
    <div className='flex justify-center items-center bg-default h-full'>
        <form method='POST' className='max-w-[400px] font-sans w-full mx-auto bg-light rounded-lg p-8'>
            <h2 className='text-3xl font-bold text-center py-4'>MAV Login</h2>
            <div className='flex flex-col mb-6 pt-[1rem]'>
                <label className='ml-2'>Email</label>
                <input className='border rounded-full relative bg-gray-100 p-2' type="text" name='email' id='email'
                 value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter e-mail' />
            </div>
            <div className='flex flex-col py-[1rem]'>
                <label className='ml-2'>Password</label>
                <input className='border rounded-full relative bg-gray-100 p-2' type="password" name='password' id='password'
                 value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password'/>
            </div>
            <button className='w-full rounded-full py-3 mt-8 bg-darker hover:bg-dark relative text-white' onClick={loginUser}>Login</button>
            <div className='flex gap-4 justify-center'>
                <p className='text-center mt-8'>Not a member?</p> 
                <a className='text-center mt-8 text-default' href='/signup'>Signup here</a>
            </div>
        </form>
    </div>
    </div>
    </div>
  )
}
