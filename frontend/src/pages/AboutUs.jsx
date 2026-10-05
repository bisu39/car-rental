import { useRef, useState } from "react";
import bannervideo from '../assets/bannerVideo.mp4'
import { ChevronDown } from 'lucide-react';
import { playBtn, pauseBtn, tickIcon, manModelImage, holoMobileImg, mobTyrePrint, playStoreBlack, appStoreBlack, quotationMark, secendBannerTyrePrint, heroCarImg } from '../assets/assets.js'

const AboutUs = () => {
    const videoRef = useRef(null);
    const timerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [showControls, setShowControls] = useState(false);

    const showControlsTemporarily = () => {
        // Show button
        setShowControls(true);

        // Clear previous timer
        clearTimeout(timerRef.current);

        // Hide after 3 seconds
        timerRef.current = setTimeout(() => {
            setShowControls(false);
        }, 3000);
    };

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
        showControlsTemporarily();
    };
    const reviews = [
        {
            name: "Rahul Sharma",
            address: "Kolkata, West Bengal",
            profilePic: "https://i.pravatar.cc/150?img=12",
            message:
                "Excellent service and a smooth booking experience. The car was clean, comfortable, and delivered on time."
        },
        {
            name: "Priya Das",
            address: "Siliguri, West Bengal",
            profilePic: "https://i.pravatar.cc/150?img=47",
            message:
                "I had a great experience renting a car here. The entire process was simple, quick, and hassle-free."
        },
        {
            name: "Arjun Mehta",
            address: "Bengaluru, Karnataka",
            profilePic: "https://i.pravatar.cc/150?img=11",
            message:
                "The vehicle was in excellent condition and the support team was very helpful. Definitely a reliable rental service."
        },
        {
            name: "Sneha Roy",
            address: "Durgapur, West Bengal",
            profilePic: "https://i.pravatar.cc/150?img=32",
            message:
                "Loved the overall experience! The car was comfortable and the pricing was reasonable. Would definitely rent again."
        },
        {
            name: "Amit Verma",
            address: "Bhubaneswar, Odisha",
            profilePic: "https://i.pravatar.cc/150?img=68",
            message:
                "Very convenient and professional service. Booking took only a few minutes and everything went exactly as expected."
        },
        {
            name: "Ananya Sen",
            address: "Mumbai, Maharashtra",
            profilePic: "https://i.pravatar.cc/150?img=44",
            message:
                "A fantastic way to travel without worrying about transportation. Great cars, friendly service, and an easy booking process."
        }
    ];
    const faqs = [
        {
            question: "How does it work?",
            answer:
                "Our car rental process is designed to be simple and convenient from start to finish. Browse our available vehicles and choose the one that best matches your travel needs. Select your pickup and return locations, choose your preferred dates and times, and provide the required details to complete your reservation. Once your booking is confirmed, simply pick up the vehicle at the scheduled time, enjoy your journey, and return the car to the agreed location when your rental period ends."
        },
        {
            question: "Can I rent a car without a credit card?",
            answer:
                "Yes, you may be able to rent a car without a credit card. Depending on the vehicle, rental location, and applicable rental terms, we may accept debit cards or other eligible payment methods. Some payment methods may require additional verification, a security deposit, or specific documentation. We recommend checking the payment requirements for your selected vehicle before confirming your booking."
        },
        {
            question: "What are the requirements for renting a car?",
            answer:
                "To rent a vehicle, you will generally need a valid driving license, a government-issued identification document, and an eligible payment method. Depending on the vehicle and rental plan, additional requirements such as a minimum age, security deposit, or other documentation may apply. Requirements can vary by location and vehicle, so make sure you review the rental conditions before completing your reservation."
        },
        {
            question:
                "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?",
            answer:
                "Towing a trailer or attaching a hitch is subject to the specific vehicle and rental agreement. Not every rental vehicle is equipped or approved for towing, and additional restrictions may apply. If you plan to tow or use a hitch during your rental, please contact us before booking so we can confirm whether the selected vehicle supports your requirements and explain any applicable terms or restrictions."
        },
        {
            question:
                "Does Car Rental offer coverage products for purchase with my rental?",
            answer:
                "Yes, optional coverage products may be available when you rent a vehicle. These products can provide additional protection for certain unexpected situations during your rental period. The available coverage options, pricing, conditions, and exclusions can vary depending on the vehicle, rental location, and booking details. Review the coverage information carefully before purchasing to choose an option that fits your needs."
        }
    ];
    return (
        <div className='flex justify-center items-center flex-col gap-8 lg:gap-10' >
            <h2 className='text-[30px] lg:text-[50px] font-bold w-fit'>About Us</h2>
            <div className='w-full flex lg:flex-row flex-col justify-between  p-2 lg:px-10 h-fit'>
                <div className='lg:w-1/4 w-full flex justify-center lg:block'>
                    <h2 className='text-[30px] lg:text-[50px] font-bold text-center lg:text-start'>Where every drive feels extraordinary</h2>
                </div>
                <div className='lg:w-1/4 w-full mt-5 lg:mt-0 flex flex-col gap-y-4'>
                    <div className='flex flex-col items-center lg:items-start  gap-y-4'>
                        <h3 className=' text-[24px] lg:text-[28px] font-semibold text-center '>Variety Brands</h3>
                        <p className='lg:text-[16px] text-[14px] inter text-center lg:text-start'> Explore a diverse range of trusted car brands, offering the perfect blend of style, comfort, performance, and reliability for every journey.
                        </p>
                    </div>
                    <div className='flex flex-col gap-y-4 items-center lg:items-start'>
                        <h3 className='text-[24px] lg:text-[28px] font-semibold text-center lg:text-start'>Maximum Freedom</h3>
                        <p className='lg:text-[16px] text-[14px] inter text-center lg:text-start'>Enjoy the freedom to choose your car, your destination, and your journey—without limits or restrictions.</p>
                    </div>
                </div>
                <div className='lg:w-1/4  flex flex-col gap-2 w-full items-center lg:items-start '>
                    <div className='flex flex-col gap-y-4'>
                        <h3 className='text-[24px] lg:text-[28px] font-semibold text-center lg:text-start'>Awesome Support</h3>
                        <p className='lg:text-[16px] text-[14px] inter text-center lg:text-start'>Get friendly, reliable support whenever you need it, ensuring a smooth and worry-free rental experience.</p>
                    </div>
                    <div className='flex flex-col gap-y-4 items-center lg:items-start '>
                        <h3 className='text-[24px] lg:text-[28px] font-semibold text-center lg:text-start '>Flexibility On The Go</h3>
                        <p className='lg:text-[16px] text-[14px] inter text-center lg:text-start'>Enjoy flexible rental options that adapt to your plans, giving you the freedom to travel wherever and whenever you want.</p>
                    </div>
                </div>
            </div>
            <div onMouseMove={showControlsTemporarily} onMouseEnter={showControlsTemporarily} onTouchStart={showControlsTemporarily} className='w-full h-fit flex justify-center relative overflow-hidden'>
                <video className='focous:outline-none rounded-[20px] aspect-rectangle object-fill  w-full lg:w-[80%]'
                    ref={videoRef}
                    src={bannervideo}
                    onEnded={() => { setIsPlaying(false); setShowControls(false) }}
                />
                <button onClick={togglePlay} className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white py-2 px-4 rounded-[20px]'> {isPlaying ? showControls ? <img className="h-10 w-10 lg:h-30 lg:w-30 rounded-full" src={pauseBtn} alt="Pause Video" /> : "" : <img className="h-10 w-10 lg:h-30 lg:w-30" src={playBtn} alt="Play Video" />}</button>
            </div>
            <div className=" flex justify-around lg:justify-between  flex-wrap w-full lg:px-10">
                <div>
                    <h2 className="text-[40px] lg:text-[80px] font-bold text-theme">20k+</h2>
                    <p className="text-[16px] lg:text-[20px] font-bold">Happy Customers</p>
                </div>
                <div>
                    <h2 className="text-[40px] lg:text-[80px] font-bold text-theme">540+</h2>
                    <p className="text-[16px] lg:text-[20px] font-bold">Count of cars</p>
                </div>
                <div>
                    <h2 className="text-[40px] lg:text-[80px] font-bold text-theme">25+</h2>
                    <p className="text-[16px] lg:text-[20px] font-bold">Years of exprience</p>
                </div>
            </div>
            <div className=" flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 w-full lg:px-10" >
                <div className=" w-full lg:w-1/2 flex flex-col gap-4 items-center lg:items-start">

                    <h2 className="text-[30px] lg:text-[50px] font-bold text-center lg:text-start">Unlock unforgettable memories on the road</h2>
                    <p className="text-[14px] lg:text-[16px] opacity-60 text-center lg:text-start">Make every journey memorable with the perfect car, effortless booking, and the freedom to explore your way.</p>
                    <div className='flex flex-wrap gap-4'>
                        <p className='w-full lg:w-[40%] items-center flex gap-2 text-[16px]'><img className="h-6 w-6" src={tickIcon} alt="" />  <span className='opacity-60'>Choose from a wide range of cars for every kind of journey. </span> </p>
                        <p className='w-full lg:w-[40%] items-center flex gap-2 text-[16px]'><img className="h-6 w-6" src={tickIcon} alt="" />  <span className='opacity-60'>Book your ride quickly with a simple and hassle-free process. </span> </p>
                        <p className='w-full lg:w-[40%] items-center flex gap-2 text-[16px]'><img className="h-6 w-6" src={tickIcon} alt="" />  <span className='opacity-60'>Enjoy flexible rental options that fit your plans and budget. </span> </p>
                        <p className='w-full lg:w-[40%] items-center flex gap-2 text-[16px]'><img className="h-6 w-6" src={tickIcon} alt="" />  <span className='opacity-60'>Travel with confidence through reliable cars and trusted service. </span> </p>
                    </div>
                </div>
                <div className="w-full lg:w-[40%] flex justify-center items-center">
                    <img className="h-60 md:h-120 w-100  md:w-120 rounded-[20px]" src={manModelImage} alt="" />
                </div>
            </div>
            <div className="h-fit lg:h-111 w-full bg-theme flex flex-col sm:flex-row justify-end items-center rounded-[20px] mt-20 lg:mt-52 relative">
                <img className="absolute right-0 top-12" src={mobTyrePrint} alt="" />
                <img className="relative -mt-15 sm:-mt-30 lg:absolute lg:bottom-14  sm:-left-13 lg:left-10 xl:left-36 lg:h-135 lg:w-80 h-53 w-37.5" src={holoMobileImg} alt="" />
                <div className="w-full sm:w-[60%] p-2 lg:p-10 flex flex-col gap-2 text-white">
                    <h4 className=" text-[14px] lg:text-[16px]">Enjoy more convenience </h4>
                    <h2 className=" text-[30px] lg:text-[50px] font-bold">Download our app</h2>
                    <p className="text-[14px] lg:text-[16px]">Book your perfect ride anytime, anywhere. Download our app for faster bookings, easy trip management, and a seamless car rental experience on the go.</p>
                    <div className=" flex gap-4">
                        <img className="h-10 w-auto" src={appStoreBlack} alt="" />
                        <img className="h-10 w-auto" src={playStoreBlack} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full h-fit flex flex-col gap-4 justify-center items-center">
                <h2 className="text-[30px] lg:text-[50px] font-bold text-center lg:text-start">Reviews from our customers</h2>
                <div className="flex flex-wrap justify-center lg:justify-between h-fit gap-4">
                    {reviews.map((item, index) => (
                        <div className="review-card w-90 h-95 sm:w-104 sm:h-120 bg-[#F9F9F9] flex  justify-center items-center  rounded-[20px] relative" key={index}>
                            <img className="absolute top-13 left-13.75" src={quotationMark} alt="" />
                            <p className="w-[60%]">{item.message}</p>
                            <div className="absolute bottom-0 w-full h-fit sm:h-31 text-white rounded-b-[20px] bg-theme">
                                <div className=" flex flex-col justify-center items-center -mt-10.75">
                                    <img className="h-15 w-15 sm:h-21 sm:w-21 rounded-full" src={item.profilePic} alt={item.name} />
                                    <p className="text-[14px] sm:text-[16px] opacity-60">{item.address}</p>
                                    <p className=" text-[16px] sm:text-[20px] font-semibold">{item.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="w-full h-fit flex flex-col gap-4 justify-center items-center">
                <h2 className="text-[30px] lg:text-[50px] font-bold text-center lg:text-start">Top Car Rental Questions</h2>
                <div className="w-full justify-center items-center flex flex-col gap-4 lg:gap-10">
                    {faqs.map((item, index) => {
                        const isExpanded = expandedIndex === index;
                        return (
                            <div
                                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                key={index}
                                role="button"
                                tabIndex={0}
                                aria-expanded={isExpanded}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        setExpandedIndex(isExpanded ? null : index);
                                    }
                                }}
                                className="w-full lg:w-[90%] flex flex-col gap-2 h-fit border-2 border-gray-500 rounded-[20px] p-2 bg-[#F9F9F9] transition-all duration-300 ease-in-out cursor-pointer"
                            >
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold text-[14px] lg:text-[20px] w-full">{item.question}</p>
                                    <ChevronDown className={`shrink-0 transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-180' : ''}`} />
                                </div>
                                <p className={` text-[12px] lg:text-[16px]  overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-60' : 'max-h-0 opacity-0'}`}>{item.answer} </p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='h-98 lg:h-103.75 p-2 md:p-8 lg:px-10 w-full bg-theme flex  flex-col text-white items-center justify-center md:items-start  relative rounded-[20px] -z-10'>
                <img className='absolute top-10 left-0 -z-5' src={secendBannerTyrePrint} alt="" />
                <img className='absolute bottom-0 h-25 sm:h-37.5 md:h-55 lg:h-67.5 right-0 lg:right-15 -z-5' src={heroCarImg} alt="" />
                <div className="w-full md:w-[50%] flex flex-col gap-2 justify-center items-center md:items-start">
                    <h2 className=" text-[30px] lg:text-[50px] font-bold">Looking for a Car?</h2>
                    <h2 className=" text-[30px] lg:text-[50px] font-bold">+91-8694782214</h2>
                    <p>Find the perfect car for your next journey from our wide range of comfortable, reliable, and well-maintained vehicles. Choose your preferred model, book with ease, and get ready to hit the road.</p>
                    <button className='text-[12px] lg:text-[14px] 2xl:text-[16px] py-2 px-3 bg-button text-white rounded-xl mt-5'>Book now</button>

                </div>

            </div>
        </div >
    )
}

export default AboutUs
