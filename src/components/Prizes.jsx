import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Prizes = ({ isActive }) => {
  const componentRef = useRef(null);  useEffect(() => {
    if (isActive && componentRef.current) {      const ctx = gsap.context(() => {
        const images = componentRef.current.querySelectorAll('img');
        const spiralVector = componentRef.current.querySelector('img[src="/spiral_Vector.svg"]');
        const springVector = componentRef.current.querySelector('img[src="/Spring_Vector.svg"]');
        const otherImages = Array.from(images).filter(img => img !== spiralVector && img !== springVector);
        
        if (images.length > 0) {
          // Reset all images to initial state first
          gsap.set(images, { 
            scale: 0, 
            opacity: 0,
          });
          
          // Special animation for spiral vector - slide from left
          if (spiralVector) {
            gsap.set(spiralVector, { 
              x: -200, 
              scale: 1, 
              opacity: 0 
            });
            
            gsap.to(spiralVector, {
              x: 0, 
              opacity: 1,
              duration: 1.5,
              ease: 'power.out',
              onComplete: function() {
                if (spiralVector.classList.contains('opacity-80')) {
                  gsap.set(spiralVector, { opacity: 0.8 });
                }
              }
            });
          }
          
          // Special animation for spring vector - bounce up and down infinitely
          if (springVector) {
            gsap.set(springVector, { 
              scale: 1, 
              opacity: 0 
            });
            
            gsap.to(springVector, {
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              delay: 0.5,
              onComplete: function() {
                if (springVector.classList.contains('opacity-80')) {
                  gsap.set(springVector, { opacity: 0.8 });
                }
                
                // Start infinite bouncing animation
                gsap.to(springVector, {
                  y: -15, 
                  duration: 0.5,
                  ease: 'power2.inOut',
                  yoyo: true, 
                  repeat: 2 
                });
              }
            });
          }
          
          // Animate other images with popup effect
          if (otherImages.length > 0) {
            gsap.to(otherImages, {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.1, 
              delay: 0.3, 
              onComplete: function() {
                
                otherImages.forEach(img => {
                  if (img.classList.contains('opacity-80')) {
                    gsap.set(img, { opacity: 0.8 });
                  }
                });
              }
            });
          }
        }
      }, componentRef);

      return () => {
        ctx.revert(); 
      };
    }
  }, [isActive]); 

  return (
    <div ref={componentRef} className='h-screen w-full snap-start bg-[#0A2324] flex flex-col items-center text-4xl font-bold relative'>
      {/* Spiral Vector - Top Left */}
      <img 
        src="/spiral_Vector.svg" 
        alt="Spiral Vector" 
        className="absolute top-35 md:top-15 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-50 md:h-50 opacity-80 z-0"
      />
        {/* Background Spring Vector - Bottom Right */}
      <img 
        src="/Spring_Vector.svg" 
        alt="Spring Vector" 
        className="absolute bottom-3 right-[-30px] md:right-[-70px] w-24 h-24 sm:w-32 sm:h-32 md:w-60 md:h-44 opacity-80 z-0"
      />
       {/* Left Side Ellipse Background - Desktop */}
      <div className="absolute left-8 bottom-10 z-10 hidden md:block">
        <img 
          src="/Ellipse 154.png" 
          alt="Ellipse Background" 
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-[800px] md:h-20"
        />
      </div>        {/* Centered Ellipse Background - Mobile */}
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-[420px] z-10  md:hidden">
        <img 
          src="/Ellipse 154.png" 
          alt="Ellipse Background" 
          className="w-screen h-8 max-w-none"
        />
      </div>{/* Place Awards - Above Prizes - Desktop */}
      <div className="absolute left-45 mt-[350px] transform -translate-y-1/3 z-20 hidden md:block">
        <div className="flex items-start space-x-4 md:space-x-4 -ml-3.5">
          {/* 2nd Place */}
          <div className="flex flex-col items-center relative mt-12">
            <img 
              src="/2ndplace.png" 
              alt="2nd Place" 
              className="w-14 h-14 sm:w-18 sm:h-18 md:w-40 md:h-10 "
            />
            <p className="text-amber-50 text-xs sm:text-sm md:text-2xl font-bold mt-2">
              Rs 100,000/-
            </p>
          </div>
            {/* 1st Place */}
          <div className="flex flex-col items-center relative -mt-10">
            <img 
              src="/1stplace.png" 
              alt="1st Place" 
              className="w-14 h-14 sm:w-18 sm:h-18 md:w-40 md:h-10 "
            />
            <p className="text-amber-50 text-xs sm:text-sm md:text-3xl font-bold  mt-2">
              Rs 150,000/-
            </p>
          </div>
          
          {/* 3rd Place */}
          <div className="flex flex-col items-center relative mt-12">
            <img 
              src="/3rdplace.png" 
              alt="3rd Place" 
              className="w-14 h-14 sm:w-18 sm:h-18 md:w-40 md:h-10 "
            />
            <p className="text-amber-50 text-xs sm:text-sm md:text-2xl font-bold  mt-2">
              Rs 75,000/-
            </p>
          </div>
        </div>
      </div>      
      {/* Place Awards - Mobile - Centered */}
      <div className="relative left-41 transform -translate-x-1/2 mt-[250px] z-20  md:hidden">
        <div className="flex justify-center space-x-1 ">
          {/* 2nd Place */}
          <div className="flex flex-col items-center relative mt-8">
            <img 
              src="/2ndplace.png" 
              alt="2nd Place" 
              className="w-22 h-6"
            />
            <p className="text-amber-50 text-lg max-w-none font-bold mt-2">
              Rs 100,000/-
            </p>
          </div>
            {/* 1st Place */}
          <div className="flex flex-col items-center relative -mt-6">
            <img 
              src="/1stplace.png" 
              alt="1st Place" 
              className="w-22 h-6"
            />
            <p className="text-amber-50 text-lg font-bold mt-2">
              Rs 150,000/-
            </p>
          </div>
          
          {/* 3rd Place */}
          <div className="flex flex-col items-center relative mt-8">
            <img 
              src="/3rdplace.png" 
              alt="3rd Place" 
              className="w-22 h-6"
            />
            <p className="text-amber-50 text-lg font-bold mt-2">
              Rs 75,000/-
            </p>
          </div>
        </div>
      </div>       {/* Prizes Image */}
      <div className="absolute left-45 mt-[455px] transform -translate-y-1/3 z-20 hidden md:block">
        <img 
          src="/prizes.png" 
          alt="Prizes" 
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-[500px] md:h-64"
        />
      </div>

      {/* Prizes Image - Mobile Centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-[310px] z-20  md:hidden">
        <img 
          src="/prizes.png" 
          alt="Prizes" 
          className="w-72 h-32 max-w-none"
        />
      </div>      {/* Desktop title */}
      <span className='hidden md:inline-block text-[2.5rem] mt-14 md:text-[4rem] font-bold bg-gradient-to-r from-[#FFB34A] via-[#8FC18F] to-[#0E9F9B] text-transparent bg-clip-text'>
        Win Exciting Prices
      </span>
        {/* Mobile title - Positioned at top */}
      <span className='absolute top-24 left-1/2 transform -translate-x-1/2 md:hidden text-[2.5rem] font-bold bg-gradient-to-r from-[#FFB34A] via-[#8FC18F] to-[#0E9F9B] text-transparent bg-clip-text z-30 whitespace-nowrap'>
        Prize Pool
      </span><div className='hidden md:flex justify-end w-full pr-20 md:pr-48 mt-20'>
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

      {/* Mobile Bottom Content */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4 block md:hidden'>
        <div className='text-center '>
          
          
          <div className='mb-10'>
            <span className='text-[25px] font-semibold text-amber-50'>
              Additional Prizes Of
            </span>
            <p className='text-amber-50 text-[25px] font-bold mt-1'>
              Rs 10,000 /- Each
            </p>
            <p className='text-amber-300 text-lg font-normal'>
              For Places 4th To 10th
            </p>
          </div>
          
          <div className='flex -left-4  items-left mb-8 space-x-2'>
            <span className='text-[18px]  font-semibold bg-gradient-to-r from-[#0E9F9B] via-[#8FC18F] to-[#FFB34A] inline-block text-transparent bg-clip-text text-center'>
              Valuable Certificates <br />   For Every Submission               
            </span> 
            
            <img 
              src="/Arrow_Vector.png" 
              alt="Arrow Vector" 
              className="w-10 h-8"
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Prizes