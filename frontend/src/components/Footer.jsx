import { logo, footerLocationIcon, emailIcon, phoneIcon, fbIcon, igIcon, xIcon, ytIcon, appStoreBtn, palyStoreBtn } from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='w-full lg:mx-auto px-2 sm:px-10'>
            <div className='upper-footer flex justify-between flex-wrap items-center p-2 gap-2 lg:gap-0 '>
                <img className='w-32 lg:w-50' src={logo} alt="" />
                <div className='flex items-center gap-5'>
                    <img className='w-10 h-10' src={footerLocationIcon} alt="" />
                    <div>
                        <p className='text-[12px] lg:text-[16px]'>Address</p>
                        <p className='text-[12px] lg:text-[16px] font-semibold'>45 VIP Road,<br />
                            Near Airport Junction <br />
                            Kolkata, West Bengal <br />
                            India ,700052
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <img className='w-10 h-10' src={emailIcon} alt="" />
                    <div>
                        <p className='text-[12px] lg:text-[16px]'>Email</p>
                        <p className='text-[12px] lg:text-[16px] font-semibold'>carrental@yahoo.com</p>
                    </div>

                </div>
                <div className='flex items-center gap-5'>
                    <img className='w-10 h-10' src={phoneIcon} alt="" />
                    <div>
                        <p className='text-[12px] lg:text-[16px]'>Phone</p>
                        <p className='text-[12px] lg:text-[16px] font-semibold'>+91-9563984858</p>
                    </div>

                </div>
            </div>
            <div className="lower-footer flex justify-between items-start mt-5 lg:mt-5 flex-wrap gap-5 lg:gap-0 p-2">
                <div className='lg:w-1/5 w-[47%]'>
                    <p className='text-[16px] lg:text-[20px] font-semibold'>Reliable cars, flexible rentals, and a seamless booking experience—making every journey easier, safer, and more enjoyable.
                    </p>
                    <div className='flex w-fit gap-4 lg:w-[50%] justify-between items-center mt-5'>
                        <img src={fbIcon} alt="" />
                        <img src={igIcon} alt="" />
                        <img src={xIcon} alt="" />
                        <img src={ytIcon} alt="" />
                    </div>
                </div>
                <div className='lg:w-1/5 w-[47%]'>
                    <h2 className='text-[20px] font-semibold'>Useful Links</h2>
                    <div className='mt-5'>
                        <Link>
                            <p className='text-[16px]'>About Us</p>
                        </Link>
                        <Link>
                            <p className='text-[16px]'>Contact Us</p>
                        </Link>
                        <Link>
                            <p className='text-[16px]'>Gallery</p>
                        </Link>
                        <Link>
                            <p className='text-[16px]'>Blog</p>
                        </Link>
                        <Link>
                            <p className='text-[16px]'>F.A.Q</p>
                        </Link>
                    </div>
                </div>
                <div className='lg:w-1/5 w-[47%]'>
                    <h2 className='text-[20px] font-semibold'>Vehicles</h2>
                    <div className='mt-5'>
                        <Link>
                            <p className='text-[16px]'>Sedan</p>
                        </Link>
                        <Link>
                            <p className='text-[16px]'>Cabriolet</p>
                        </Link>
                        <Link>
                            <p className='text-[16px]'>Pickup</p>
                        </Link>
                        <Link>
                            <p className='text-[16px]'>Minivan</p>
                        </Link>
                        <Link>
                            <p className='text-[16px]'>S.U.V</p>
                        </Link>
                    </div>
                </div>
                <div className='lg:w-1/5 w-[47%]'>
                    <h2 className='text-[20px] font-semibold'>Download app</h2>
                    <div className='mt-5'>
                        <img src={appStoreBtn} alt="" />
                        <img className='mt-2' src={palyStoreBtn} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full h-fit flex justify-center'>
                <p className='text-[14px] inter opacity-50 py-5' >@Copyright Car Rental 2026, Designed by Figma Guru</p>
            </div>
        </footer>
    )
}

export default Footer
