import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Prizes = ({ isActive }) => {
  const componentRef = useRef(null);

  useEffect(() => {
    if (isActive && componentRef.current) {
      const ctx = gsap.context(() => {        const images = componentRef.current.querySelectorAll('img');
        const spiralVector = componentRef.current.querySelector('img[src="/spiral_Vector.svg"]');
        const springVector = componentRef.current.querySelector('img[src="/Spring_Vector.svg"]');
        const arrowVectors = componentRef.current.querySelectorAll('img[src="/Arrow_Vector.png"]');
        const otherImages = Array.from(images).filter(img => img !== spiralVector && img !== springVector && ![...arrowVectors].includes(img));

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
              onComplete: function () {
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
              onComplete: function () {
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
          }          // Animate other images with popup effect
          if (otherImages.length > 0) {
            gsap.to(otherImages, {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.1,
              delay: 0.3,
              onComplete: function () {

                otherImages.forEach(img => {
                  if (img.classList.contains('opacity-80')) {
                    gsap.set(img, { opacity: 0.8 });
                  }
                });
              }
            });
          }

          // Animate arrow vectors with pointing animation
          if (arrowVectors.length > 0) {
          
            gsap.set(arrowVectors, {
              scale: 1,
              opacity: 0
            });

            // Fade in arrow vectors
            gsap.to(arrowVectors, {
              opacity: 1,
              duration: 0.4,
              ease: 'power3.out',
              delay: 0.5
            });

           
            gsap.delayedCall(1.5, () => {
              arrowVectors.forEach(arrow => {
              
                gsap.timeline({ repeat: -1, repeatDelay: 2 })
                  .to(arrow, {
                    x: 10,
                    scale: 1.2,
                    duration: 0.3,
                    ease: 'power2.out'
                  })
                  .to(arrow, {
                    x: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                  })
                  .to(arrow, {
                    x: 10,
                    scale: 1.1,
                    duration: 0.2,
                    ease: 'power2.out'
                  })
                  .to(arrow, {
                    x: 0,
                    scale: 1,
                    duration: 0.2,
                    ease: 'power2.out'
                  });
              });
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
    <div ref={componentRef} className='h-screen w-full snap-start bg-[#0A2324] flex flex-col items-center text-4xl font-bold relative'>      {/* Spiral Vector - Top Left */}
      <img
        src="/spiral_Vector.svg"
        alt="Spiral Vector"
        className="absolute top-25 sm:top-20 lg:top-15 left-0 w-24 h-24 sm:w-36 sm:h-36 lg:w-50 lg:h-50 opacity-80 z-0"
      />
      {/* Background Spring Vector - Bottom Right */}
      <img
        src="/Spring_Vector.svg"
        alt="Spring Vector"
        className="absolute bottom-5 sm:bottom-20 lg:bottom-3 right-[-30px] sm:right-[-50px] lg:right-[-70px] w-24 h-24 sm:w-40 sm:h-30 lg:w-60 lg:h-44 opacity-80 z-0"
      />      {/* Left Side Ellipse Background - Desktop */}
      <div className="absolute left-8 bottom-10 z-10 hidden lg:block">
        <img
          src="/Ellipse 154.png"
          alt="Ellipse Background"
          className="w-48 h-48 sm:w-56 sm:h-56 lg:w-[800px] lg:h-20"
        />
      </div>        
      {/* Centered Ellipse Background - Mobile and Tablet */}
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-[370px] sm:mt-[380px] z-10 lg:hidden">
        <img
          src="/Ellipse 154.png"
          alt="Ellipse Background"
          className="w-screen h-8 max-w-none"
        />
      </div>{/* Place Awards - Above Prizes - Desktop */}
      <div className="absolute left-45 mt-[350px] transform -translate-y-1/3 z-20 hidden lg:block">
        <div className="flex items-start space-x-4 lg:space-x-4 -ml-3.5">          {/* 2nd Place */}
          <div className="flex flex-col items-center relative mt-12">
            <img
              src="/2ndplace.png"
              alt="2nd Place"
              className="w-14 h-14 sm:w-18 sm:h-18 lg:w-40 lg:h-10 "
            />
            <p className="text-amber-50 text-xs sm:text-sm lg:text-2xl font-bold mt-2 relative z-30">
              Rs 100,000/-
            </p>
          </div>          {/* 1st Place */}
          <div className="flex flex-col items-center relative -mt-10">
            <img
              src="/1stplace.png"
              alt="1st Place"
              className="w-14 h-14 sm:w-18 sm:h-18 lg:w-40 lg:h-10 "
            />
            <p className="text-amber-50 text-xs sm:text-sm lg:text-3xl font-bold  mt-2 relative z-30">
              Rs 150,000/-
            </p>
          </div>          {/* 3rd Place */}
          <div className="flex flex-col items-center relative mt-12">
            <img
              src="/3rdplace.png"
              alt="3rd Place"
              className="w-14 h-14 sm:w-18 sm:h-18 lg:w-40 lg:h-10 "
            />
            <p className="text-amber-50 text-xs sm:text-sm lg:text-2xl font-bold  mt-2 relative z-30">
              Rs 75,000/-
            </p>
          </div>
        </div>
      </div>
      {/* Place Awards - Mobile and Tablet - Centered */}
      <div className="relative left-41 sm:left-1/2 transform -translate-x-1/2 mt-[190px] sm:mt-[200px] z-20 lg:hidden">
        <div className="flex justify-center space-x-1 sm:space-x-3">          {/* 2nd Place */}
          <div className="flex flex-col items-center relative mt-8 sm:mt-10">
            <img
              src="/2ndplace.png"
              alt="2nd Place"
              className="w-22 h-6 sm:w-28 sm:h-8"
            />
            <p className="text-amber-50 text-lg sm:text-xl max-w-none font-bold mt-2 relative z-30">
              Rs 100,000/-
            </p>
          </div>          {/* 1st Place */}
          <div className="flex flex-col items-center relative -mt-6 sm:-mt-4">
            <img
              src="/1stplace.png"
              alt="1st Place"
              className="w-22 h-6 sm:w-28 sm:h-8"
            />
            <p className="text-amber-50 text-lg sm:text-xl font-bold mt-2 relative z-30">
              Rs 150,000/-
            </p>
          </div>          {/* 3rd Place */}
          <div className="flex flex-col items-center relative mt-8 sm:mt-10">
            <img
              src="/3rdplace.png"
              alt="3rd Place"
              className="w-22 h-6 sm:w-28 sm:h-8"
            />
            <p className="text-amber-50 text-lg sm:text-xl font-bold mt-2 relative z-30">
              Rs 75,000/-
            </p>
          </div>
        </div>
      </div>       {/* Prizes Image */}
      <div className="absolute left-45 -bottom-6 transform -translate-y-1/3 z-20 hidden lg:block">
        <img
          src="/prizes.png"
          alt="Prizes"
          className="w-32 h-32 sm:w-40 sm:h-40 lg:w-[500px] lg:h-64"
        />
      </div>      {/* Prizes Image - Mobile and Tablet Centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-[260px] sm:mt-[280px] z-20 lg:hidden">
        <img
          src="/prizes.png"
          alt="Prizes"
          className="w-72 h-32 sm:w-80 sm:h-36 max-w-none"
        />
      </div>

      {/* Most Popular Text - Mobile Only */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 mt-[450px] z-20 block sm:hidden">
        <p className="text-amber-50 text-[15px] text-center px-1">
          <span className="font-semibold">Most Popular:</span> Top 10 teams win <span className="text-amber-300">WSO2 hampers</span> for social media reach.
        </p>
      </div> */}

      {/* Desktop title */}
      <span className='hidden lg:inline-block text-[2.5rem] mt-14 lg:text-[4rem] font-bold bg-gradient-to-r from-[#FFB34A] via-[#8FC18F] to-[#0E9F9B] text-transparent bg-clip-text'>
        Win Exciting Prices
      </span>
      {/* Mobile and Tablet title - Positioned at top */}
      <span className='absolute top-24 sm:top-20 left-1/2 transform -translate-x-1/2 lg:hidden text-[2.5rem] sm:text-[3rem] font-bold bg-gradient-to-r from-[#FFB34A] via-[#8FC18F] to-[#0E9F9B] text-transparent bg-clip-text z-30 whitespace-nowrap'>
        Prize Pool
      </span><div className='hidden lg:flex justify-end w-full pr-20 lg:pr-48 mt-20'>
        <div className='text-right max-w-md'>
          <span className='text-lg lg:text-4xl font-semibold bg-gradient-to-r from-[#FFB34A] via-[#8FC18F] to-[#0E9F9B] inline-block text-transparent bg-clip-text'>
            Most Popular Innovation
          </span>
          <p className='text-amber-50 text-sm lg:text-lg pl-7 items-center text-justify font-normal mt-4 '>
            Separate top teams are selected based on the reactions and community reaches through social media platforms and will be eligible to win at the awarding ceremony.
          </p>
          <div className='mt-12 pl-7 text-left'>
            <span className='text-lg lg:text-3xl font-semibold text-amber-50 inline-block  bg-clip-text'>
              Additional Prizes Of
            </span>
            <p className='text-amber-300 text-base lg:text-3xl font-bold mt-1'>
              Rs 25,000 /- <span className='text-amber-50'>Each</span>
            </p>            <p className='text-amber-50 text-sm lg:text-3xl font-normal'>
              For Places 4th To 10th
            </p>
          </div>
          {/* <div className='mt-6 pl-7 text-left'>
            <div className='flex items-center space-x-4'>
              <span className='text-lg lg:text-2xl font-semibold bg-gradient-to-r from-[#0E9F9B] via-[#8FC18F] to-[#FFB34A] inline-block text-transparent bg-clip-text'>
                Valuable Certificates<br /> For Every Submission
              </span>
              <img
                src="/Arrow_Vector.png"
                alt="Arrow Vector"
                className="w-8 h-8 lg:w-20 lg:h-20"
              />
            </div>
          </div> */}
        </div>
      </div>      {/* Mobile and Tablet Bottom Content */}
      <div className='absolute left-1/2 mt-[450px] transform -translate-x-1/2 w-full px-4 block lg:hidden'>
        <div className='text-center'>
          <div className='mb-4'>
            <span className='text-[25px] sm:text-[30px] font-semibold text-amber-50'>
              Additional Prizes Of
            </span>
            <p className='text-amber-300 text-[25px] sm:text-[30px] font-bold mt-1'>
              Rs 25,000 /- <span className='text-amber-50'>Each</span>
            </p>
            <p className='text-amber-50 text-lg sm:text-xl font-normal'>
              For Places 4th To 10th
            </p>
          </div>

          {/* <div className='flex justify-center items-center space-x-2 sm:space-x-4 mb-4'>
            <span className='text-[18px] sm:text-[22px] font-semibold bg-gradient-to-r from-[#0E9F9B] via-[#8FC18F] to-[#FFB34A] inline-block text-transparent bg-clip-text text-center'>
              Valuable Certificates <br />For Every Submission
            </span>

            <img
              src="/Arrow_Vector.png"
              alt="Arrow Vector"
              className="w-10 h-8 sm:w-12 sm:h-10"
            />
          </div> */}
        </div>
      </div>

    </div>
  )
}

export default Prizes