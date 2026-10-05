import { secendBannerTyrePrint, secendBannerCar } from '../assets/assets.js'

const SecondBanner = () => {
  return (
    <div className='h-98 lg:h-103.75 p-2 lg:p-0 w-full bg-theme flex  items-center relative top-10  rounded-[20px] -z-10'>
      <img className='absolute top-10 left-0 -z-5' src={secendBannerTyrePrint} alt="" />
      <img className='absolute bottom-0 right-15 -z-5' src={secendBannerCar} alt="" />
      <div className='w-full lg:w-[70%] left-0 relative lg:left-30 flex flex-col  gap-10'>
        <h4 className='text-[28px] lg:text-[50px] font-bold  text-white'>Enjoy every mile with <br className='hidden xl:block' /> adorable companionship.</h4>
        <p className='text-[12px] lg:text-[16px]  text-white'>Make every journey more memorable with a comfortable ride, plenty of space, and the freedom to travel together. From spontaneous road trips to weekend getaways, enjoy every mile with the people who make the journey special.
        </p>
        <div className='w-[90%] mx-auto lg:w-116 h-14 lg:h-15 bg-white rounded-[20px] flex p-5 justify-between items-center '>
          <input className='inter font-bold text-[12px] lg:text-[16px] ' placeholder='City' />
          <button className='bg-button rounded-xl px-2 lg:px-5 py-2 text-white inter font-semibold text-[16px]'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default SecondBanner
