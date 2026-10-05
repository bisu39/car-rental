import telephIcon from '../assets/telephIcon.png'

const HelpAssist = () => {
    return (
        <div className='flex gap-2 justify-center items-center fixed bottom-4 right-10 z-99 bg-white rounded-[5px] p-2'>
            <div><img src={telephIcon} alt="" /></div>
            <div>
                <p className='text-[16px]'>Need Help ?</p>
                <p className='text-[16px] font-semibold'>987654390</p>
            </div>
        </div>
    )
}

export default HelpAssist
