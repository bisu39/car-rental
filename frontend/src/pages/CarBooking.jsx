import { useEffect, useContext, useState } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import { useParams } from 'react-router-dom'
import calenderIcon from '../assets/calenderIcon.png'   
import axios from 'axios'
import { toast } from 'react-toastify'

const carBooking = () => {
    const { carsdata, backendUrl, token, locationList } = useContext(AppContext)
    const carId = useParams().id
    const filteredData = carsdata.find((car) => car._id === carId)
    const initialFormData = {
        carName:"",
        selectCar: "",
        category: "",
        fuelType: "",
        pricePerDay: "",
        rentalLocation: "",
        returnLocation: "",
        rentalDate: "",
        returnDate: ""
    }
    const [formData, setFormData] = useState(initialFormData)
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setFormData(initialFormData)
        try {
            const { data } = await axios.post(`${backendUrl}/user/booking`, formData, { headers: { token } })
            if (data.success) {
                toast.success(data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }
    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }
    useEffect(() => {
        if (filteredData) {
            setFormData({
                selectCar: filteredData._id,
                carName: filteredData.brand + " " + filteredData.model,
                category: filteredData.category,
                fuelType: filteredData.fuelType,
                pricePerDay: filteredData.pricePerDay,
                rentalLocation: "",
                returnLocation: "",
                rentalDate: "",
                returnDate: ""
            });
        }
    }, []);

    return (
        <div className=' w-full h-fit flex justify-center items-center xl:mb-20 lg:mb-10 mb-5 mt-10'>
            <form onSubmit={onSubmitHandler} className=' w-full sm:w-[80%] md:w-[60%] lg:w-1/2 bg-white rounded-[20px] flex flex-col items-center lg:p-10 p-2.5 gap-6 border shadow-xl border-[#6a6868c9]' >
                <h1 className='text-[20px] lg:text-[32px] font-semibold '>Book your car</h1>
                <div className='h-fit w-full rounded-xl flex justify-between items-center bg-[#FAFAFA] px-2'>
                    <label className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2' htmlFor="selectCar">Select Car</label>
                    <input id='selectCar' name='selectCar' value={formData.carName} className='focus:outline-0 w-[50%] text-[12px] lg:text-[14px] 2xl:text-[16px]'>
                    </input>
                </div>
                <div className=' w-full flex flex-wrap justify-between gap-y-2'>
                    <div className='h-fit w-[48%] rounded-xl flex justify-between items-center bg-[#FAFAFA] px-2'>
                        <label className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2 w-[60%] h-full whitespace-nowrap' htmlFor="carType">Car Type</label>
                        <input className='text-[12px] lg:text-[14px] 2xl:text-[16px] text-center w-[40%]' type="text" id='carType' name='category' value={formData.category} disabled />
                    </div>
                    <div className='h-fit w-[48%] rounded-xl flex justify-between items-center bg-[#FAFAFA] px-2'>
                        <label className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2  w-[60%] h-full whitespace-nowrap' htmlFor="rate">Price per Day</label>
                        <input className='text-[12px] lg:text-[14px] 2xl:text-[16px] text-center w-[40%]' type="text" id='rate' name='pricePerDay' value={formData.pricePerDay} disabled />
                    </div>
                    <div className='h-fit w-[48%] rounded-xl flex justify-between items-center bg-[#FAFAFA] px-2'>
                        <label className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2 w-[60%] h-full whitespace-nowrap' htmlFor="fuelType">Fuel Type</label>
                        <input className='text-[12px] lg:text-[14px] 2xl:text-[16px] text-center w-[40%]' type="text" id='fuelType' name='fuelType' value={formData.fuelType} disabled />
                    </div>
                </div>
                <div className='h-fit w-full rounded-xl flex justify-between items-center bg-[#FAFAFA] px-2'>
                    <label className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2' htmlFor="rentalPlace">Place of Pick up</label>
                    <select id='rentalPlace' name='rentalLocation' onChange={onChangeHandler} value={formData.rentalLocation} className='focus:outline-0 w-[50%] text-[12px] lg:text-[14px] 2xl:text-[16px]'>
                        <option value=""></option>
                        {locationList.map((item, index) => (
                            <option key={index + 1} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className='h-fit w-full rounded-xl flex justify-between items-center bg-[#FAFAFA] px-2'>
                    <label className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2' htmlFor="returnPlace">Place of Return</label>
                    <select id='returnPlace' name='returnLocation' onChange={onChangeHandler} value={formData.returnLocation} className='focus:outline-0 w-[50%] text-[12px] lg:text-[14px] 2xl:text-[16px]'>
                        <option value=""></option>
                        {locationList.map((item, index) => (
                            <option key={index + 1} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className='h-fit w-full rounded-xl flex justify-between items-center bg-[#FAFAFA] px-2'>
                    <label htmlFor="rentalDate" className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2'> Rental Date</label>
                    <div className="relative w-[50%]" >
                        <input type="date" id='rentalDate' name='rentalDate' onChange={onChangeHandler} value={formData.pickupDate} className="absolute check inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <button type="button" className="w-full flex items-center justify-between"
                        >
                            <span className='text-[12px] lg:text-[14px] 2xl:text-[16px]'>
                                {formData?.rentalDate ? formData.rentalDate : ""}
                            </span>
                            <img src={calenderIcon} alt="" />
                        </button>
                    </div>
                </div>
                <div className='h-fit w-full rounded-xl flex justify-between items-center bg-[#FAFAFA] px-2'>
                    <label htmlFor="returnDate" className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2'> Return Date</label>
                    <div className="relative w-[50%] " >
                        <input type="date" name='returnDate' id='returnDate' onChange={onChangeHandler} value={formData.returnDate} className="absolute check inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <button type="button" className=" w-full flex items-center justify-between"
                        >
                            <span className='text-[12px] lg:text-[14px] 2xl:text-[16px]' >
                                {formData?.returnDate ? formData.returnDate : ""}
                            </span>
                            <img src={calenderIcon} alt="" />
                        </button>
                    </div>
                </div>
                <button type='submit' className='text-[14px] lg:text-[16px] font-medium h-10 w-full rounded-xl  active:bg-[#ff9e0ccb]  transition-all duration-200 ease-in bg-button'>Book now</button>
            </form>
        </div>
    )
}

export default carBooking
