import { locationIcon, carIcon, walletIcon, coupleCarImg } from '../assets/assets.js'

const InfoBlocks = () => {
    return (
        <div className='relative'>
            <div className="info-block-1 flex items-center justify-between w-full h-34.5 lg:h-78.5 my-5">
                <div className='flex flex-col gap-1 lg:gap-3 justify-center items-center'>
                    <img className='h-10 w-10 lg:h-16.5 lg:w-16.5' src={locationIcon} alt="" />
                    <h3 className='lg:text-2xl text-[12px]  font-semibold'>Availability</h3>
                    <p className='lg:text-[16px] text-[8px] text-center inter'>Cover whole Kolkata and surroundings</p>
                </div>
                <div className='flex flex-col gap-1 lg:gap-3 justify-center items-center'>
                    <img className='h-10 w-10 lg:h-16.5 lg:w-16.5' src={carIcon} alt="" />
                    <h3 className='lg:text-2xl text-[12px] font-semibold'>Comfort</h3>
                    <p className='lg:text-[16px] text-center text-[8px] inter'>Smooth, hassle-free process</p>
                </div>
                <div className='flex flex-col gap-1 lg:gap-3 justify-center items-center'>
                    <img className='h-10 w-10 lg:h-16.5 lg:w-16.5' src={walletIcon} alt="" />
                    <h3 className='lg:text-2xl text-[12px]  font-semibold'>Savings</h3>
                    <p className='lg:text-[16px] text-[8px] text-center inter'>Save more than local vander rented cars</p>
                </div>
            </div>
            <div className="info-block-2 flex flex-col gap-9 lg:gap-0 sm:flex-row  w-full justify-around items-center">
                <div className='w-full flex justify-center lg:w-[40%]'>
                    <img className='h-100 lg:h-137.5 lg:w-137.5' src={coupleCarImg} alt="" />
                </div>
                <div className='w-full lg:w-[47%]'>
                    <div>
                        <div className='flex  items-center gap-3'>
                            <span className='h-8 w-8 lg:h-10 lg:w-10 rounded-[50%] bg-theme flex justify-center items-center text-white '>1</span>
                            <h4 className='text-[16px] lg:text-[20px] font-semibold '>Extensive Car Selection</h4>
                        </div>
                        <p className='text-[14px] lg:text-[16px] opacity-60 my-2'>Discover a carefully selected range of vehicles, from comfortable city cars and stylish sedans to spacious SUVs. Whatever your destination or travel needs, find a car that fits your journey perfectly.</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-3'>
                            <span className='h-8 w-8 lg:h-10 lg:w-10 rounded-[50%] bg-theme flex justify-center items-center text-white '>2</span>
                            <h4 className='text-[16px] lg:text-[20px]font-semibold'>Seamless & Quick  Booking</h4>
                        </div>
                        <p className='text-[14px] lg:text-[16px] opacity-60 my-2'>Book your next ride without the hassle. Simply choose your preferred vehicle, select your pickup and return locations and dates, and complete your reservation through a smooth and straightforward booking experience.</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-3'>
                            <span className='h-8 w-8 lg:h-10 lg:w-10 rounded-[50%] bg-theme flex justify-center items-center text-white '>3</span>
                            <h4 className='text-[16px] lg:text-[20px] font-semibold'>Competitive & Transparent Pricing</h4>
                        </div>
                        <p className='text-[14px] lg:text-[16px] opacity-60 my-2'>Get the car you want at a price that works for you. With competitive rental rates and transparent pricing, you can plan your trip confidently without worrying about unexpected charges.</p>
                    </div>
                    <div>
                        <div className='flex  items-center gap-3'>
                            <span className=' h-8 w-8 lg:h-10 lg:w-10 rounded-[50%] bg-theme flex justify-center items-center text-white '>4</span>
                            <h4 className='text-[16px] lg:text-[20px] font-semibold'>Reliable Cars, Confident Journeys</h4>
                        </div>
                        <p className='text-[14px] lg:text-[16px] opacity-60 my-2'>Every journey deserves a dependable ride. Our vehicles are maintained with care and prepared for the road, giving you the comfort, reliability, and peace of mind you need to enjoy every mile.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoBlocks
