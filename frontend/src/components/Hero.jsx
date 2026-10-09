import { useState, useContext } from 'react'
import tyrePrint from '../assets/tyrePrint.png'
import heroCarImg from '../assets/heroCarImg.png'
import calenderIcon from '../assets/calenderIcon.png'
import { AppContext } from '../context/AppContext.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'

const Hero = () => {
    const { carsdata, backendUrl, token, locationList } = useContext(AppContext)
    const initialFormData = {
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
    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

    }
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
    const dataAutoFiller = (id) => {
        const selectedCar = carsdata.find(
            (car) => car._id === id
        );

        setFormData((prev) => ({
            ...prev,
            selectCar: id || "",
            category: selectedCar?.category || "",
            fuelType: selectedCar?.fuelType || "",
            pricePerDay: selectedCar?.pricePerDay || ""
        }));
    }

    return (
        <div className='bg-theme w-full lg:h-165 h-fit rounded-[10px] lg:rounded-[40px] relative overflow-hidden lg:p-15 p-5 flex sm:flex-row flex-col justify-between items-center'>
            <img className='absolute top-12.5 left-0 w-full' src={tyrePrint} alt="" />
            <img className='absolute bottom-0 h-90 w-125 hidden lg:block right-[20%]' src={heroCarImg} alt="" />
            <div className="left lg:w-[45%] w-full z-20">
                <h1 className='text-[30px] lg:text-[45px] 2xl:text-[60px] font-bold text-white lg:w-[110%] w-full'>Experience the road like never before</h1>
                <p className=' text-[12px] lg:text-[14px] 2xl:text-[16px]  text-white mt-5 w-[80%]'>Discover a simple and convenient way to rent your favorite car. Choose your ride, pick your dates, and get ready for a journey worth remembering.</p>
                <button className='text-[12px] lg:text-[14px] 2xl:text-[16px] py-2 px-3 active:bg-[#ff9e0ccb]  transition-all duration-200 ease-in bg-button text-white rounded-xl mt-5'>View all cars</button>
            </div>
            <div className="right form w-full lg:w-[50%] xl:w-[40%] z-20 mt-5 lg:mt-0">
                <form onSubmit={onSubmitHandler} className='w-full bg-white rounded-[20px] flex flex-col items-center lg:p-10 p-2.5 gap-6' >
                    <h1 className='text-[20px] lg:text-[32px] font-semibold '>Book your car</h1>
                    <div className='h-fit w-full rounded-xl flex justify-between items-center bg-[#FAFAFA] px-2'>
                        <label className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2' htmlFor="selectCar">Select Car</label>
                        <select id='selectCar' name='selectCar' onChange={(e) => dataAutoFiller(e.target.value)} value={formData.selectCar} className='focus:outline-0 w-[50%] text-[12px] lg:text-[14px] 2xl:text-[16px]'>
                            <option value="" disabled></option>
                            {carsdata.map((car) => (
                                <option key={car._id} value={car._id} >
                                    {car.brand} {car.model}
                                </option>
                            ))}
                        </select>
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
                        <div className="relative w-[50%]" >
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
        </div>
    )
}

export default Hero
