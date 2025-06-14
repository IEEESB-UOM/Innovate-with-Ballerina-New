const TimeLineCard = ({ text, month, day }) => {
  return (
    <div className="h-[103px] w-[100%] lg:w-[90%] mb-[40px] lg:mb-[0px] lg:h-[160px] flex-shrink-0 rounded-[20px] bg-[#ffffff11] text-[#E9E9E9] flex items-center justify-center relative overflow-hidden z-10">
      <div className="absolute left-[20px] w-[180px] lg:relative lg:w-[260px] lg:ml-[35px] lg:mr-[210px] text-[20px] lg:text-[33px] font-semibold leading-[101%] tracking-[0.331px] capitalize text-white">
        {text}
      </div>
      <div className="flex flex-row">
        <div className="absolute top-[10px] lg:top-[-10px] right-[10px] 3xl:mt-[45px] lg:mt-[22px] mr-[10px] lg:mr-0 text-[20px] lg:text-[35px] font-medium leading-[101%] tracking-[0.198px] capitalize bg-gradient-to-l from-[#0E9F9B] via-[#8FC18F] to-[#FFB34A] text-transparent bg-clip-text">
          {month}
        </div>
        <div className="absolute bottom-[-15px] right-[-5px] text-[96px] lg:text-[139.82px] font-bold leading-[101%] tracking-[1.598px] capitalize bg-gradient-to-l from-[#0E9F9B] via-[#8FC18F] to-[#FFB34A] text-transparent bg-clip-text">
          {day}
        </div>
      </div>
    </div>
  );
};

export default TimeLineCard;
