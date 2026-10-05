import { useState, useContext } from 'react'
import { logo } from '../assets/assets.js'
import { Menu, X } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'
import { toast } from 'react-toastify'
const NavBar = () => {
    const navigate = useNavigate()
    const { token, setToken } = useContext(AppContext)
    const [showMenu, setShowMenu] = useState(false)
    const logoutHandler = () => {
        localStorage.removeItem('token')
        setToken(null)
        toast.success('Logged out Successfully')
    }
    return (
        <header>
            <nav>
                <div className='flex  h-26 justify-between items-center sticky top-0 z-100 bg-white w-[90%] mx-auto'>
                    <img className='w-45 h-12 active:opacity-75 duration-300 ease-in-out' onClick={() => navigate('/')} src={logo} alt="" />
                    <ul className='  w-[50%] justify-between hidden lg:flex font-medium text-[14px] lg:text-[18px]'>
                        <NavLink to={'/'} className={`min-w-25 text-center`}>
                            <li className='inter '>Home</li>
                        </NavLink>
                        <NavLink to={'/vechiles'} className={`min-w-25 text-center`}>
                            <li className='inter '>Vechiles</li>
                        </NavLink>
                        <NavLink to={'/details'} className={`min-w-25 text-center`}>
                            <li className='inter '>Details</li>
                        </NavLink>
                        <NavLink to={'/about'} className={`min-w-25 text-center`}>
                            <li className='inter '>About Us</li>
                        </NavLink>
                        <NavLink to={'/contact'} className={`min-w-25 text-center`}>
                            <li className='inter '>Contact Us</li>
                        </NavLink>
                    </ul>
                    <div className='flex gap-5'>
                        {/* mobile menu */}
                        <Menu size={40} className='lg:hidden ' onClick={() => { setShowMenu(!showMenu) }} />
                        <div className={`${showMenu ? 'opacity-100 z-30 flex ' : '-z-30 opacity-0 hidden'}  fixed top-0 left-0 bottom-0 w-screen h-screen  items-center transition-all duration-500 ease-in-out  bg-white  `}>
                            <X className='absolute top-2 right-2 ' size={30} onClick={() => setShowMenu(!showMenu)} />
                            <ul className=' w-full h-1/2 justify-between  items-center flex flex-col font-medium text-[18px] ' >
                                <NavLink to={'/'} onClick={() => setShowMenu(!showMenu)}>
                                    <li className='inter'>Home</li>
                                </NavLink>
                                <NavLink to={'/vechiles'} onClick={() => setShowMenu(!showMenu)}>
                                    <li className='inter'>Vechiles</li>
                                </NavLink>
                                <NavLink to={'/details'} onClick={() => setShowMenu(!showMenu)}>
                                    <li className='inter'>Details</li>
                                </NavLink>
                                <NavLink to={'/about'} onClick={() => setShowMenu(!showMenu)}>
                                    <li className='inter'>About Us</li>
                                </NavLink>
                                <NavLink to={'/contact'} onClick={() => setShowMenu(!showMenu)} >
                                    <li className='inter'>Contact Us</li>
                                </NavLink>
                            </ul>
                        </div>
                        {token ? <button onClick={logoutHandler} className='px-3 py-2 bg-theme active:bg-[#5937e0dc]  transition-all duration-200 ease-in text-white rounded-[15px] font-inter'>Log out</button> : <button onClick={() => navigate('/login')} className='px-3 py-2 bg-theme active:bg-[#5937e0dc]  transition-all duration-200 ease-in text-white rounded-[15px] font-inter'>Log in</button>}
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default NavBar
