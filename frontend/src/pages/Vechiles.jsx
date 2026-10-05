import { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { sedenIcon, suvIcon, pickupIcon, minivanIcon, cabrioletIcon, airConditionIcon, gearShiftIcon, PBIcon, auidiLogo, jeepLogo, toyotaLogo, BMWLogo, mercedesLogo, fordLogo } from '../assets/assets.js'
import { AppContext } from '../context/AppContext.jsx'

const Vechiles = () => {
  const { carsdata } = useContext(AppContext)
  const [filteredCar, setFilteredCar] = useState([]);
  const { category } = useParams()
  const applyFilter = () => {
    if (category) {
      setFilteredCar(carsdata.filter((item) => item.category === category))
    } else {
      setFilteredCar(carsdata)
    }
  }
  useEffect(() => { applyFilter() }, [carsdata, category])

  const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/details/${id}`);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h2 className='text-[30px] lg:text-[50px] font-bold mb-4 w-fit'>Select a Vechile Group</h2>
      <div className='overflow-hidden w-full lg:w-[70%] flex justify-center '>
        <div className='lg:w-full flex gap-2 lg:gap-0 lg:justify-between gap-1-between items-center overflow-x-auto  '>
          <div onClick={() => (category ? navigate('/vechiles') : null)} className={`bg-[#F9F9F9] ${!category ? 'bg-theme text-white' : ''} rounded-[30px] px-5 py-3 shrink-0 whitespace-nowrap cursor-pointer`}>
            <p className='text-[12px] sm:text-[16px] font-medium'>All Vechiles</p>
          </div>
          <div onClick={() => category === "Sedan" ? navigate('/vechiles') : navigate('/vechiles/Sedan')} className={`bg-[#F9F9F9] ${category === "Sedan" ? "bg-theme text-white" : ""} rounded-[20px] shrink-0 whitespace-nowrap lg:rounded-[30px] flex lg:gap-2 gap-1 justify-center px-5 py-3 items-center`}>
            <img className='hidden sm:block' src={sedenIcon} alt="" />
            <p className='text-[12px] sm:text-[16px] font-medium'>Seden</p>
          </div>
          <div onClick={() => category === "MPV" ? navigate('/vechiles') : navigate('/vechiles/MPV')} className={`bg-[#F9F9F9] ${category === "MPV" ? "bg-theme text-white" : ""} rounded-[20px] shrink-0 whitespace-nowrap lg:rounded-[30px] flex lg:gap-2 gap-1 justify-center px-5 py-3 items-center`}>
            <img className='hidden sm:block' src={cabrioletIcon} alt="" />
            <p className='text-[12px] sm:text-[16px] font-medium'>MPV</p>
          </div>
          <div onClick={() => category === "Hatchback" ? navigate('/vechiles') : navigate('/vechiles/Hatchback')} className={`bg-[#F9F9F9] ${category === "Hatchback" ? "bg-theme text-white" : ""} rounded-[20px] shrink-0 whitespace-nowrap lg:rounded-[30px] flex lg:gap-2 gap-1 justify-center px-5 py-3 items-center`}>
            <img className='hidden sm:block' src={pickupIcon} alt="" />
            <p className='text-[12px] sm:text-[16px] font-medium'>Hatchback</p>
          </div>
          <div onClick={() => category === "SUV" ? navigate('/vechiles') : navigate('/vechiles/SUV')} className={`bg-[#F9F9F9] ${category === "SUV" ? "bg-theme text-white" : ""} rounded-[20px] shrink-0 whitespace-nowrap lg:rounded-[30px] flex lg:gap-2 gap-1 justify-center px-5 py-3 items-center`}>
            <img className='hidden sm:block' src={suvIcon} alt="" />
            <p className='text-[12px] sm:text-[16px] font-medium'>SUV</p>
          </div>
          <div onClick={() => category === "Minivan" ? navigate('/vechiles') : navigate('/vechiles/Minivan')} className={`bg-[#F9F9F9] ${category === "Minivan" ? "bg-theme text-white" : ""} rounded-[20px] shrink-0 whitespace-nowrap lg:rounded-[30px] flex lg:gap-2 gap-1 justify-center px-5 py-3 items-center`}>
            <img className='hidden sm:block' src={minivanIcon} alt="" />
            <p className='text-[12px] sm:text-[16px] font-medium'>Minivan</p>
          </div>
        </div>
      </div>
      <div className="card-container mt-10 flex flex-wrap gap-5 justify-around">
        {filteredCar.length > 0 ? filteredCar.map((item, index) => (
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
              <button onClick={() => handleNavigate(`${item._id}`)} className='w-full p-3 lg:py-5 rounded-2xl bg-theme active:bg-[#5937e0dc]  transition-all duration-200 ease-in text-white font-bold text-[16px]'>View details</button>
            </div>
          </div>
        )) : <p className='text-[18px] font-medium text-gray-500'>No vehicles available in this category.</p>}
      </div>
      <div id='car-brands' className='p-10  gap-3 lg:gap-0 lg:h-43.5 w-full rounded-[40px] bg-[#F9F9F9] flex-wrap my-20 flex justify-between px-5 items-center'>
        <img src={toyotaLogo} alt="" />
        <img src={auidiLogo} alt="" />
        <img src={jeepLogo} alt="" />
        <img src={BMWLogo} alt="" />
        <img src={mercedesLogo} alt="" />
        <img src={fordLogo} alt="" />
      </div>
    </div>
  )
}

export default Vechiles
