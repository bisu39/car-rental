import { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    const initialFormData = {
        name: "",
        email: "",
        phone: "",
        password: ""
    }
    const [state, setState] = useState('login')
    const [formData, setFormData] = useState(initialFormData)
    const { backendUrl,setToken } = useContext(AppContext)
    const navigate = useNavigate()
    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        setFormData(initialFormData)
        if (state === 'singup') {
            try {
                const { data } = await axios.post(backendUrl + '/user/register', formData)
                if (data.success) {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                    toast.success(data.message)
                    navigate('/')
                }
            } catch (error) {
                toast.error(error.response?.data?.message || error.message)
            }
        } else {
            try {
                const { data } = await axios.post(backendUrl + '/user/login', formData)
                if (data.success) {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                    toast.success(data.message)
                    navigate('/')
                }
            } catch (error) {
                toast.error(error.response?.data?.message || error.message)
            }
        }

    }
    return (
        <div className='h-screen w-screen flex  justify-center items-center'>
            <form onSubmit={submitHandler} className=' border border-zinc-400 py-5 rounded-xl text-zinc-600 flex flex-col gap-3 items-center p-2 min-w-92.5 shadow-lg' >
                <h2 className='font-bold text-[24px] text-black'> {state === "login" ? "Log in" : "Sing up"}</h2>
                {state === "login" ? "" : <div className='flex flex-col w-3/4'>
                    <label htmlFor="name" className='text-[16px]'>Name</label>
                    <input name='name' onChange={onChangeHandler} value={formData.name} className='px-1 py-2 mt-1 text-[16px] rounded-[5PX] bg-[#F9F9F9] border border-[#DADADA] w-full focus:outline-none' type="text" id='name' />
                </div>}
                <div className='flex flex-col w-3/4'>
                    <label htmlFor="email" className='text-[16px]'>Email</label>
                    <input name='email' onChange={onChangeHandler} value={formData.email} className='px-1 py-2 mt-1 text-[16px] rounded-[5PX] bg-[#F9F9F9] border border-[#DADADA] w-full focus:outline-none' type="email" id='email' />
                </div>
                {state === "login" ? "" : <div className='flex flex-col w-3/4'>
                    <label htmlFor="phone" className='text-[16px]'>Phone</label>
                    <input name='phone' onChange={onChangeHandler} value={formData.phone} className='px-1 py-2 mt-1 text-[16px] rounded-[5PX] bg-[#F9F9F9] border border-[#DADADA] w-full focus:outline-none' type="text" id='phone' />
                </div>}
                <div className='flex flex-col w-3/4'>
                    <label className='text-[16px]' htmlFor="password">password</label>
                    <input name='password' onChange={onChangeHandler} value={formData.password} className='px-1 py-2 mt-1 text-[16px] rounded-[5px] bg-[#F9F9F9] border border-[#DADADA] w-full  focus:outline-none' type="password" id='password' />
                </div>
                <button type='submit' className='bg-theme px-10 py-3 rounded-[20px] text-white text-[16px] font-bold'>{state === "login" ? "Log in" : "Sing up"}</button>
                {state === 'login' ? <p className='text-black text-[12px] text-center font-bold'>Don't have an account<span onClick={() => setState('singup')} className='pl-2 text-[10px] text-blue-500 '>Click here</span></p>
                    : <p className='text-black text-[12px] text-center font-bold'> Go to login page<span onClick={() => setState("login")} className='pl-2 text-[10px] text-blue-500 '>Click here</span></p>
                }
            </form>
        </div>
    )
}

export default LogIn
