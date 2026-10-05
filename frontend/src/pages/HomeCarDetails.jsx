import { useContext } from 'react'
import { gearShiftIcon, PBIcon, airConditionIcon, arrowRight } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'
const HomeCarDetails = () => {
    
    const { carsdata } = useContext(AppContext)
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/details/${id}`);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div>
           <h2 className='text-[20px] lg:text-[50px] font-bold w-full text-center'>No car selected select one from options below</h2>
            <div className='my-15 w-full'>
                <div className='flex  h-12 lg:h-fit w-full justify-between'>
                    <h2 className='text-[20px] lg:text-[50px] font-bold lg:w-[50%]'>Other Cars</h2>
                    <br />
                    <div className='self-end items-end '>
                        <button className='flex justify-center items-center text-[12px] lg:text-[20px] w-fit font-bold'>View All <span><img className=' h-2 w-2lg:h-6 lg:w-6' src={arrowRight} alt="" /></span></button>
                    </div>
                </div>
                <div className="card-container mt-10 flex flex-wrap gap-5 justify-around">
                    {carsdata.map((item, index) => (
                        <div key={index} className="card w-92 h-120 lg:w-110 bg-[#FAFAFA] gap-2 rounded-[20px] flex flex-col lg:p-5 p-2 ">
                            <div className="cover-image flex justify-center  w-full h-fit">
                                <img className='w-92 h-60 rounded-[5px]' src={item.outerPic} alt="" />
                            </div>
                            <div className="details flex flex-col justify-between h-[45%] items-center w-full ">
                                <div className="upper-details flex justify-between w-full">
                                    <div className=''>
                                        <h4 className=' text-[20px] lg:text-[24px] font-semibold'>{item.brand}</h4>
                                        <p className='text-[14px] lg:text-[16px] opacity-60 '>{item.category}</p>
                                    </div>
                                    <div>
                                        <h4 className='text-[20px] lg:text-[24px] font-semibold text-theme'>&#8377; {item.pricePerDay}</h4>
                                        <p className='text-[14px] lg:text-[16px] opacity-60 '>per day</p>
                                    </div>
                                </div>
                                <div className="lower-details flex justify-between w-full">
                                    <div className='flex items-center gap-x-2 w-1/3'>
                                        <img className='h-6 w-6' src={gearShiftIcon} alt="" />
                                        <p>{item.gearType}</p>
                                    </div>
                                    <div className='flex items-center gap-x-2 w-1/3'>
                                        <img className='h-6 w-6' src={PBIcon} alt="" />
                                        <p>{item.fuelType}</p>
                                    </div>
                                    <div className='flex items-center gap-x-2 w-1/3'>
                                        <img className='h-6 w-6' src={airConditionIcon} alt="" />
                                        <p>{item.isAirConditioned ? "Yes" : 'No'}</p>
                                    </div>
                                </div>
                                <button onClick={() => handleNavigate(item._id)} className='w-full p-3 lg:py-5 rounded-2xl bg-theme active:bg-[#5937e0dc]  transition-all duration-200 ease-in text-white font-bold text-[16px]'>View details</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default HomeCarDetails
