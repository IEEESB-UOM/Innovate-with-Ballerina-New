const TimeLineCard = ({ text, month, day }) => {
    return (
        <div className="lg:w-[450px] md:w-[400px] sm:w-[350px] flex-shrink-0 rounded-[20px] bg-[#ffffff11] text-[#E9E9E9] flex items-center justify-between overflow-hidden z-0">
            <div className="px-6 text-[20px] lg:text-[32px] font-semibold leading-[101%] tracking-[0.331px] capitalize text-white">
                {text}
            </div>
            <div className='flex flex-col pt-4 pb-2 pr-6 items-end justify-center'>
                <div className="text-[16px] lg:text-[28px] font-medium leading-[101%] tracking-[0.198px] capitalize bg-gradient-to-l from-[#0E9F9B] via-[#8FC18F] to-[#FFB34A] text-transparent bg-clip-text">
                    {month}
                </div>
                <div className="text-[80px] lg:text-[120px] font-bold leading-[101%] tracking-[1.598px] capitalize bg-gradient-to-l from-[#0E9F9B] via-[#8FC18F] to-[#FFB34A] text-transparent bg-clip-text">
                    {day}
                </div>
            </div>
        </div>
    );
};

export default TimeLineCard;
