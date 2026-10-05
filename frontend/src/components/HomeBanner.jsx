import { bannerTyre, bannerCar, bannerCarIcon, bannerLoveIcon, bannerCalenderIcon, bannerMeterIcon } from '../assets/assets.js'
const HomeBanner = () => {
    return (
        <div>
            <div className="container flex flex-col justify-center items-center w-full h-121.5 -z-10 rounded-[20px] bg-theme my-2 p-2 lg:my-5 relative overflow-hidden">
                <img className='absolute bottom-0 left-0 -z-2' src={bannerTyre} alt="" />
                <img className='absolute bottom-0 right-60 opacity-8 -z-5' src={bannerCar} alt="" />
                <div className='flex flex-col items-center justify-center w-full lg:w-[60%] mb-10'>
                    <h1 className='text-[40px] lg:text-[50px] font-bold text-white mb-3'>Facts in numbers</h1>
                    <p className='text-[14px] lg:text-[16px] text-white'>From the number of cars on the road to the journeys completed, our numbers reflect the trust of thousands of customers. With a growing fleet, reliable service, and countless successful trips, we’re making every journey simpler, safer, and more convenient.
                    </p>
                </div>
                <div className='w-full flex flex-wrap gap-2 justify-around items-center mt-0 lg:mt-10'>
                    <div className='flex items-center px-2 lg:px-5 gap-2 lg:gap-5 h-20 w-25 lg:w-60 lg:h-25 bg-white rounded-[20px]'>
                        <img className='h-8 w-8' src={bannerCarIcon} alt="" />
                        <div>
                            <h3 className='text-[12px] lg:text-[24px] font-bold '>540+</h3>
                            <p className='font-semibold text-[8px] lg:text-[16px] opacity-60'>Cars</p>
                        </div>

                    </div>
                    <div className='flex items-center px-2 lg:px-5 gap-2 lg:gap-5 h-20 w-25 lg:w-60 lg:h-25 bg-white rounded-[20px]'>
                        <img className='h-8 w-8' src={bannerLoveIcon} alt="" />
                        <div>
                            <h3 className='text-[12px] lg:text-[24px] font-bold '>20K+</h3>
                            <p className='font-semibold text-[8px] lg:text-[16px] opacity-60'>Customers</p>
                        </div>

                    </div>
                    <div className='flex items-center px-2 lg:px-5 gap-2 lg:gap-5 h-20 w-25 lg:w-60 lg:h-25 bg-white rounded-[20px]'>
                        <img className='h-8 w-8' src={bannerCalenderIcon} alt="" />
                        <div>
                            <h3 className='text-[12px] lg:text-[24px] font-bold '>25+</h3>
                            <p className='font-semibold text-[8px] lg:text-[16px] opacity-60'>Years</p>
                        </div>

                    </div>
                    <div className='flex items-center px-2 lg:px-5 gap-2 lg:gap-5 h-20 w-25 lg:w-60 lg:h-25 bg-white rounded-[20px]'>
                        <img className='h-8 w-8' src={bannerMeterIcon} alt="" />
                        <div>
                            <h3 className='text-[12px] lg:text-[24px] font-bold '>20m+</h3>
                            <p className='font-semibold text-[8px] lg:text-[16px] opacity-60'>Miles</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner
