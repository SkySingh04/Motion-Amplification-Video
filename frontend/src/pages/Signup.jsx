import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar';
const Signup = () => {

    const navigate = useNavigate()
    const [user,setUser] = useState({
        name:'', email:'',password:'',cpassword:''
    });

    let name,value;
    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    }

    const Postdata = async(e) =>{
        e.preventDefault();
        const { name,email,password,cpassword} = user;

        const res = await fetch("/signup",{
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                name,email,password,cpassword
            })
        });

        const data = await res.json();
        if(res.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else{
            window.alert("Registration Successfull");
            console.log("Registration Successfull");

            navigate("/login")
        }
    }

  return (
<div>
    <Navbar/>

<div className='relative w-full h-screen bg-zinc-900/90'>
<div className='flex justify-center items-center h-full'>
    <form method='POST' className='max-w-[400px] w-full mx-auto bg-white p-8'>
        <h2 className='text-4xl font-bold text-center py-4'>MAV</h2>
        <div className='flex flex-col mb-4 pt-[1rem]'>
            <label>Name</label>
            <input className='border relative bg-gray-100 p-2' type="text" id='name' name='name' value={user.name} onChange={handleInputs} placeholder='Name' />
        </div>
        <div className='flex flex-col mb-4 pt-[1rem]'>
            <label>Email</label>
            <input className='border relative bg-gray-100 p-2' type="email" id='email' name='email' value={user.email} onChange={handleInputs} placeholder='Email' />
        </div>
        <div className='flex flex-col py-[1rem]'>
            <label>Password</label>
            <input className='border relative bg-gray-100 p-2' type="password" id='password' name='password' value={user.password} onChange={handleInputs} placeholder='Password'/>
        </div>
        <div className='flex flex-col py-[1rem]'>
            <label>Confirm Password</label>
            <input className='border relative bg-gray-100 p-2' type="password" id='cpassword' name='cpassword' value={user.cpassword} onChange={handleInputs} placeholder='Confirm Password'/>
        </div>
        <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' onClick={Postdata}>Signup</button>
        <div className='flex gap-4 justify-center'>
            <p className='text-center mt-8'>Already a member?</p> 
            <a className='text-center mt-8 text-[#00BFFF]' href='/login'>Login</a>
        </div>
    </form>
</div>
</div>
</div>
  )
}

export default Signup