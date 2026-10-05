import { useContext, useEffect } from 'react'
import { gearShiftIcon, PBIcon, seatIcon, distanceIcon, doorIcon, airVent, tickIcon, airConditionIcon, arrowRight } from '../assets/assets.js'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'
const CarDetails = () => {
    const { id } = useParams()
    const { getCarDetails, carDetails } = useContext(AppContext)
    const { carsdata } = useContext(AppContext)
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/details/${id}`);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    useEffect(() => { getCarDetails(id); }, [id])
    return (
        <div>
            {carDetails.map((item, index) => (
                <div key={index} className='flex justify-between items-center lg:flex-row flex-col gap-5'>
                    <div className='car-pic lg:w-[45%] w-full flex gap-y-2 flex-col items-center '>
                        <div className='self-start'>
                            <p className='text-[30px] lg:text-[40px] font-bold'>{item.brand}</p>
                            <p className='text-center w-fit flex items-center'><span className='text-[30px] lg:text-[40px] text-theme font-semibold'>&#8377;{item.pricePerDay}</span><span className='text-[16px] opacity-60'>/day</span></p>
                        </div>
                        <img className='w-120 h-80 rounded-[5px]' src={item.outerPic} alt="" />
                        <div className="sub-images flex gap-7.5 mt-3.5">
                            <img className='w-25 h-16 lg:w-35 lg:h-25 rounded-[5px]' src={item.interiorPic.img1} alt="" />
                            <img className='w-25 h-16 lg:w-35 lg:h-25 rounded-[5px]' src={item.interiorPic.img2} alt="" />
                            <img className='w-25 h-16 lg:w-35 lg:h-25 rounded-[5px]' src={item.interiorPic.img3} alt="" />
                        </div>
                    </div>
                    <div className="technical-details lg:w-[45%] flex gap-4 lg:gap-10 items-center lg:items-start  flex-col w-full">
                        <h2 className='text-[22px] lg:text-[24px] font-semibold'>Technical specifecation</h2>
                        <div className="graphical-specification flex flex-wrap gap-3">
                            <div className='w-fit flex flex-col gap-2.5 bg-[#F9F9F9] rounded-[10px] p-5 pr-15 text-[14px] lg:text-[16px]'>
                                <img className='h-8 w-8' src={gearShiftIcon} alt="" />
                                <div>
                                    <p className=' font-semibold text-inherit'>Gear Box</p>
                                    <p className='text-inherit opacity-60'>{item.gearType}</p>
                                </div>
                            </div>
                            <div className='w-fit flex flex-col gap-2.5 bg-[#F9F9F9] rounded-[10px] p-5 pr-15'>
                                <img className='h-8 w-8' src={PBIcon} alt="" />
                                <div>
                                    <p className='text-inherit font-semibold'>Fuel</p>
                                    <p className='text-inherit opacity-60'>{item.fuelType}</p>
                                </div>
                            </div>
                            <div className='w-fit flex flex-col gap-2.5 bg-[#F9F9F9] rounded-[10px] p-5 pr-15'>
                                <img className='h-8 w-8' src={doorIcon} alt="" />
                                <div>
                                    <p className='text-inherit font-semibold'>Doors</p>
                                    <p className='text-inherit opacity-60'>{item.doorNumber}</p>
                                </div>
                            </div>
                            <div className='w-fit flex flex-col gap-2.5 bg-[#F9F9F9] rounded-[10px] p-5 pr-15'>
                                <img className='h-8 w-8' src={airVent} alt="" />
                                <div>
                                    <p className='text-inherit font-semibold'>Air Conditioner</p>
                                    <p className='text-inherit opacity-60'>{item.isAirConditioned ? "Yes" : "No"}</p>
                                </div>
                            </div>
                            <div className='w-fit flex flex-col gap-2.5 bg-[#F9F9F9] rounded-[10px] p-5 pr-15'>
                                <img className='h-8 w-8' src={seatIcon} alt="" />
                                <div>
                                    <p className='text-inherit font-semibold'>Seats</p>
                                    <p className='text-inherit opacity-60'>{item.seatingCapacity}</p>
                                </div>
                            </div>
                            <div className='w-fit flex flex-col gap-2.5 bg-[#F9F9F9] rounded-[10px] p-5 pr-15 '>
                                <img className='h-8 w-8' src={distanceIcon} alt="" />
                                <div>
                                    <p className='text-inherit font-semibold'>Distance</p>
                                    <p className='text-inherit opacity-60'>{item.totalKM}</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => navigate(`/booking/${item._id}`)} className='inter font-semibold bg-theme active:bg-[#5937e0dc]  transition-all duration-200 ease-in  px-30 py-4 w-fit text-white rounded-[20px]'>Rent Car</button>
                        <div className=' flex flex-col gap-3'>
                            <h2 className='text-[22px] lg:text-[24px] font-semibold'>Car equipments</h2>
                            <div className='flex flex-wrap gap-2'>
                                {item.equipments.map((item, index) => (
                                    <p key={index} className='w-fit flex gap-y-4 gap-x-2 text-[16px]'><img className='h-6 w-6' src={tickIcon} alt="" />  <span className='opacity-60'>{item} </span> </p>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            ))}
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

export default CarDetails
