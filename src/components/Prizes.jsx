const Prizes = () => {
  return (    <div className='h-screen w-full snap-start bg-[#0A2324] flex flex-col items-center text-4xl font-bold relative'>
      {/* Background Spring Vector - Bottom Right */}
      <img 
        src="/Spring_Vector.svg" 
        alt="Spring Vector" 
        className="absolute bottom-0 right-[-70px] w-24 h-24 sm:w-32 sm:h-32 md:w-60 md:h-44 opacity-80 z-0"
      />       
       {/* Left Side Ellipse Background */}
      <div className="absolute left-8 bottom-10 z-10">
        <img 
          src="/Ellipse 154.png" 
          alt="Ellipse Background" 
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-[800px] md:h-20"
        />
      </div>     
       {/* Prizes Image */}
      <div className="absolute left-45 mt-[455px] transform -translate-y-1/3 z-20">
        <img 
          src="/prizes.png" 
          alt="Prizes" 
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-[500px] md:h-64"
        />
      </div>
      
      <span className='text-[2.5rem] mt-14 md:text-[4rem] font-bold bg-gradient-to-r from-[#FFB34A] via-[#8FC18F] to-[#0E9F9B] inline-block text-transparent bg-clip-text'>
        Win Exciting Prices
      </span>
        <div className='flex justify-end w-full pr-20 md:pr-48 mt-20'>
        <div className='text-right max-w-md'>
          <span className='text-lg md:text-4xl font-semibold bg-gradient-to-r from-[#FFB34A] via-[#8FC18F] to-[#0E9F9B] inline-block text-transparent bg-clip-text'>
            Most Popular Innovation
          </span>          
          <p className='text-amber-50 text-sm md:text-lg pl-7 items-center text-justify font-normal mt-4 '>
            Seperate top 10 teams are selected based on the the reactions and community reaches through social media platforms and eligible to win exclusive <span className="text-amber-300">WSO2 gift hampers</span>  at the awarding ceremony.
          </p>
          <div className='mt-6 pl-32 text-left'>
            <span className='text-lg md:text-3xl font-semibold text-amber-50 inline-block  bg-clip-text'>
              Additional Prizes Of
            </span>
            <p className='text-amber-50 text-base md:text-3xl font-bold mt-1'>
              Rs 10,000 /- Each
            </p>            <p className='text-amber-300 text-sm md:text-3xl font-normal'>
              For Places 4th To 10th
            </p>
          </div>          
          <div className='mt-6 pl-32'>            
            <div className='flex items-center space-x-4'>
              <span className='text-lg md:text-xl font-semibold bg-gradient-to-r from-[#0E9F9B] via-[#8FC18F] to-[#FFB34A] inline-block text-transparent bg-clip-text'>
                Valuable Certificates<br /> For Every Submission                  
              </span>
              <img 
                src="/Arrow_Vector.png" 
                alt="Arrow Vector" 
                className="w-8 h-8 md:w-20 md:h-20"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Prizes