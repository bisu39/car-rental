import { appStoreBtn, palyStoreBtn, holoMobileImg } from '../assets/assets.js'

const MobileApp = () => {
    return (
        <div className='w-full h-fit lg:h-144.25 mt-10 lg:mt-0  flex lg:flex-row flex-col justify-evenly items-center'>
            <div className='w-full lg:w-[40%] order-2 lg:order-1 '>
                <h2 className='text-[30px] lg:text-[50px] font-bold '>Your Journey, <br className='hidden lg:block' /> Just a Tap Away</h2>
                <p className='text-[14px] lg:text-[16px]'>Download our mobile app and make car rentals faster, easier, and more convenient. Browse available cars, compare options, book your ride, and manage your trips—all from the palm of your hand. Whether you're planning a quick city ride or a long road trip, your perfect car is just a tap away.</p>
                <div className='flex gap-0 sm:gap-2 justify-between sm:justify-centerlg:gap-5 mt-5'>
                    <img src={appStoreBtn} alt="" />
                    <img src={palyStoreBtn} alt="" />
                </div>
            </div>
            <div className='w-full lg:w-[30%] h-fit lg:h-full order-1 lg:order-2 relative flex justify-center items-center'>
                <img className='relative  h-80 w-52.75 lg:h-110 lg:w-66.75' src={holoMobileImg} alt="" />
            </div>
        </div>
    )
}

export default MobileApp
