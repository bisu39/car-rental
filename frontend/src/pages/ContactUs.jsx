import { useState, useContext, useRef } from 'react'
import calenderIcon from '../assets/calenderIcon.png'
import { AppContext } from '../context/AppContext.jsx'
import { contactCarImg, footerLocationIcon, emailIcon, phoneIcon, clockIcon, auidiLogo, jeepLogo, toyotaLogo, BMWLogo, mercedesLogo, fordLogo } from '../assets/assets.js'
import axios from 'axios'
import { toast } from 'react-toastify'

const ContactUs = () => {
    const { carsdata, backendUrl, token, locationList } = useContext(AppContext)

    const [newsData, setNewsData] = useState([])
    const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

    const getCarRentalNews = async () => {
        const params = new URLSearchParams({
            q: '"car rental" OR "rental car" OR "car hire"',
            lang: "en",
            sortby: "publishedAt",
            max: "10",
            apikey: API_KEY,
        });

        const response = await fetch(
            `https://gnews.io/api/v4/search?${params}`
        );

        const data = await response.json();
        if (response.ok && Array.isArray(data.articles)) {
            setNewsData(data.articles)
        }
    };
    getCarRentalNews();

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
    const rentalDateRef = useRef(null)
    const returnDateRef = useRef(null)

    const openDatePicker = (dateInput) => {
        if (dateInput?.showPicker) {
            dateInput.showPicker()
            return
        }

        dateInput?.focus()
        dateInput?.click()
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

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
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setFormData(initialFormData)
        try {
            const { data } = await axios.post(`${backendUrl}/user/booking`, formData, { headers: { token } })
            if (data.success) {
                toast.success(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className='flex justify-center items-center flex-col gap-8 lg:gap-10 mb-5 xl:mb-10' >
            <h2 className='text-[30px] lg:text-[50px] font-bold w-fit'>Contact Us</h2>
            <div className='flex justify-around sm:items-center w-full flex-col gap-6 sm:gap-0 sm:flex-row'>
                <div className="right w-full text-white sm:w-[50%] lg:w-[44%] xl:w-[40%] z-20 bg-theme rounded-[20px]">
                    <form onSubmit={onSubmitHandler} className='w-full rounded-[20px] flex flex-col items-center lg:p-10 p-2.5 gap-6' >
                        <h1 className='text-[20px] lg:text-[32px] font-semibold '>Book your car</h1>
                        <div className='h-fit w-full rounded-xl flex justify-between items-center bg-[#694BE3] px-2'>
                            <label className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2' htmlFor="selectCar">Select Car</label>
                            <select id='selectCar' name='selectCar' onChange={(e) => dataAutoFiller(e.target.value)} value={formData.selectCar} className='focus:outline-0 w-[50%] text-[12px] lg:text-[14px] 2xl:text-[16px]'>
                                <option value="" disabled style={{ backgroundColor: '#694BE3' }}></option>
                                {carsdata.map((car) => (
                                    <option style={{ backgroundColor: '#694BE3' }} key={car._id} value={car._id} >
                                        {car.brand} {car.model}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className=' w-full flex flex-wrap justify-between gap-y-2'>
                            <div className='h-fit w-[48%] rounded-xl flex justify-between items-center bg-[#694BE3] px-2'>
                                <label className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2 w-[60%] h-full whitespace-nowrap' htmlFor="carType">Car Type</label>
                                <input className='text-[12px] lg:text-[14px] 2xl:text-[16px] text-center w-[40%]' type="text" id='carType' name='category' value={formData.category} disabled />
                            </div>
                            <div className='h-fit w-[48%] rounded-xl flex justify-between items-center bg-[#694BE3] px-2'>
                                <label className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2  w-[60%] h-full whitespace-nowrap' htmlFor="rate">Price per Day</label>
                                <input className='text-[12px] lg:text-[14px] 2xl:text-[16px] text-center w-[40%]' type="text" id='rate' name='pricePerDay' value={formData.pricePerDay} disabled />
                            </div>
                            <div className='h-fit w-[48%] rounded-xl flex justify-between items-center bg-[#694BE3] px-2'>
                                <label className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2 w-[60%] h-full whitespace-nowrap' htmlFor="fuelType">Fuel Type</label>
                                <input className='text-[12px] lg:text-[14px] 2xl:text-[16px] text-center w-[40%]' type="text" id='fuelType' name='fuelType' value={formData.fuelType} disabled />
                            </div>
                        </div>
                        <div className='h-fit w-full rounded-xl flex justify-between items-center bg-[#694BE3] px-2'>
                            <label className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2' htmlFor="rentalPlace">Place of Pick up</label>
                            <select id='rentalPlace' name='rentalLocation' onChange={onChangeHandler} value={formData.rentalLocation} className='focus:outline-0 w-[50%] text-[12px] lg:text-[14px] 2xl:text-[16px]'>
                                <option style={{ backgroundColor: '#694BE3' }} value="" disabled></option>
                                {locationList.map((item, index) => (
                                    <option style={{ backgroundColor: '#694BE3' }} key={index + 1} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className='h-fit w-full rounded-xl flex justify-between items-center bg-[#694BE3] px-2'>
                            <label className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2' htmlFor="returnPlace">Place of Return</label>
                            <select id='returnPlace' name='returnLocation' onChange={onChangeHandler} value={formData.returnLocation} className='focus:outline-0 w-[50%] text-[12px] lg:text-[14px] 2xl:text-[16px]'>
                                <option style={{ backgroundColor: '#694BE3' }} value="" disabled></option>
                                {locationList.map((item, index) => (
                                    <option style={{ backgroundColor: '#694BE3' }} key={index + 1} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className='h-fit w-full rounded-xl flex justify-between items-center bg-[#694BE3] px-2'>
                            <label htmlFor="rentalDate" className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2'> Rental Date</label>
                            <div className="relative w-[50%]" >
                                <input ref={rentalDateRef} type="date" id='rentalDate' name='rentalDate' onChange={onChangeHandler} value={formData.rentalDate} className="absolute check inset-0 w-full h-full opacity-0 pointer-events-none" />
                                <button type="button" onClick={() => openDatePicker(rentalDateRef.current)} className="relative z-10 w-full flex items-center justify-between"
                                >
                                    <span className='text-[12px] lg:text-[14px] 2xl:text-[16px]'>
                                        {formData?.rentalDate ? formData.rentalDate : ""}
                                    </span>
                                    <img className='brightness-0 invert' src={calenderIcon} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className='h-fit w-full rounded-xl flex justify-between items-center bg-[#694BE3] px-2'>
                            <label htmlFor="returnDate" className='text-[12px] lg:text-[14px] 2xl:text-[16px] p-2'> Return Date</label>
                            <div className="relative w-[50%]" >
                                <input ref={returnDateRef} type="date" name='returnDate' id='returnDate' onChange={onChangeHandler} value={formData.returnDate} className="absolute check inset-0 w-full h-full opacity-0 pointer-events-none" />
                                <button type="button" onClick={() => openDatePicker(returnDateRef.current)} className="relative z-10 w-full flex items-center justify-between"
                                >
                                    <span className='text-[12px] lg:text-[14px] 2xl:text-[16px]' >
                                        {formData?.returnDate ? formData.returnDate : ""}
                                    </span>
                                    <img className='brightness-0 invert' src={calenderIcon} alt="" />
                                </button>
                            </div>
                        </div>
                        <button type='submit' className='text-[14px] lg:text-[16px] font-medium h-10 w-full rounded-xl  active:bg-[#ff9e0ccb]  transition-all duration-200 ease-in bg-button'>Book now</button>
                    </form>
                </div>
                <img className='lg:h-125 h-100 sm:w-[50%] w-full  rounded-[20px]' src={contactCarImg} alt="" />
            </div>
            <div className='upper-footer flex justify-between flex-wrap items-center p-2 gap-2 lg:gap-0 w-full'>
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
                <div className='flex items-center gap-5'>
                    <img className='w-10 h-10' src={clockIcon} alt="" />
                    <div>
                        <p className='text-[12px] lg:text-[16px]'>Opening hours</p>
                        <p className='text-[12px] lg:text-[16px] font-semibold'>Sun-Mon:10Ap-10m</p>
                    </div>

                </div>
            </div>
            <h2 className="text-[30px] lg:text-[50px] font-bold text-center lg:text-start">Latest blog posts & news</h2>
            <div className='flex flex-wrap justify-center lg:justify-between items-center gap-2 lg:gap-4 w-full'>
                {newsData.slice(0, 3).map((item, index) => (
                    <a href={item.url} target="_blank" key={index} >
                        <div className='sm:h-83 sm:w-104 w-full flex flex-col justify-content gap-2'>
                            <img className='sm:h-60 sm:w-104 w-full rounded-[20px]' src={item.image} alt={item.title} />
                            <h3 className=' text-[16px] lg:text-[20px] font-semibold'>{item.title}</h3>
                            <p className='text-[12px] lg:text-[16px] opacity-60'>{new Date(item.publishedAt).toLocaleDateString("en-IN",
                                {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: true,
                                })}</p>
                        </div>
                    </a>
                ))}
            </div>
            <div id='car-brands' className='p-10  gap-3 lg:gap-0 lg:h-43.5 w-full rounded-[40px] bg-[#F9F9F9] flex-wrap my-10 flex justify-between px-5 items-center'>
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

export default ContactUs
