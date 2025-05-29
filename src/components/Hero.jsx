const Hero = () => {
  return (
    <div className='h-screen w-full snap-start bg-[#0A2324] flex flex-col items-center justify-center text-4xl font-bold'>
      <span className='text-[2.5rem] md:text-[5rem] font-bold bg-gradient-to-r from-[#0E9F9B] via-[#8FC18F] to-[#FFB34A] inline-block text-transparent bg-clip-text'>
        The Ultimate
      </span>
      <span className='text-[2.5rem] md:text-[5rem] font-bold bg-gradient-to-r from-[#0E9F9B] via-[#8FC18F] to-[#FFB34A] inline-block text-transparent bg-clip-text'>
        Coding Challenge
      </span>
      <span className='text-[1.5rem] text-white font-normal my-4'>Code . Compete . Conquer</span>
    </div>
  )
}

export default Hero