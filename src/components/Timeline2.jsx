import TimeLineCard from "./TimeLineCard"
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <div className='relative h-screen w-full bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#0A2324] flex items-center justify-center text-4xl font-bold'>
      <div className="relative w-full flex flex-col items-center h-full md:block">
        <img src="/Ellipse 7.png" className="absolute left-[0px] top-[-420px] hidden md:block" />
        <img src="/Ellipse 8.png" className="absolute left-[200px] top-[-72px] hidden md:block" />
        <img src="/Ellipse 9.png" className="absolute right-[-30px] top-[-300px] hidden md:block z-10"/>
        {/* <img src="/Ellipse 10.png" className="absolute right-[250px] top-[550px] h-36 animate-spin-slow hidden md:block"/> */}
        <div className='absolute top-[45%] left-[-31%] w-full hidden md:block'>
          <p className='text-[184px] font-bold leading-[101%] tracking-[3.44px] capitalize bg-gradient-to-r from-[rgba(14,159,154,0.305)] via-[rgba(143,193,143,0.305)] to-[rgba(255,179,74,0.305)] bg-clip-text text-transparent absolute'>
            TimeLine
          </p>
        </div>
        {/* <svg
              className="md:absolute md:left-[22.1%] top-[0px] hidden md:block"
              width="3"
              height="90"
              viewBox="0 0 3 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
        >
              <motion.line
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, ease: 'easeInOut'}}
                x1="1.5"
                y1="0"
                x2="1.5"
                y2="90"
                stroke="#8FC18F55"
                strokeWidth="3"
                strokeLinejoin="round"
              />
        </svg> */}
      <div className="md:absolute md:left-[185px] md:top-[75px] md:w-auto w-4/5 mx-auto mt-[150px] md:mt-0">
        <TimeLineCard text={"Workshop 01"} month={"July"} day={"21"} />
      </div>
      {/* Line 2 */}
      {/* <svg
            className="md:absolute md:left-[22.1%] top-[250px] hidden md:block"
            width="3"
            height="60"
            viewBox="0 0 3 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
      >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 1}}
              x1="1.5"
              y1="0"
              x2="1.5"
              y2="60"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
        </svg> */}
        {/* Line 3 */}
        {/* <svg
          className="md:absolute md:left-[22.1%] top-[310px] hidden md:block"
          width="419"
          height="3"
          viewBox="0 0 419 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 2 }}
            y1="1.5"
            x2="419"
            y2="1.5"
            stroke= '#8FC18F55'
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg> */}
      <div className="md:absolute md:right-[180px] md:top-[175px] w-4/5 mx-auto md:w-auto z-20">
        <TimeLineCard text={"Workshop 02"} month={"August"} day={"05"} />
      </div>
      {/* Line 4 */}
      {/* <svg
            className="md:absolute md:left-[69%] top-[387px] hidden md:block"
            width="3"
            height="180"
            viewBox="0 0 3 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
      >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 3}}
              x1="1.5"
              y1="0"
              x2="1.5"
              y2="180"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
      </svg> */}
      {/* Line 5 */}
      {/* <svg
            className="md:absolute md:left-[61.3%] top-[565px] hidden md:block"
            width="120"
            height="3"
            viewBox="0 0 120 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 4}}
              x1="120"
              y1="1.5"
              x2="0"
              y2="1.5"
              stroke= '#8FC18F55'
              strokeWidth="3"
              strokeLinejoin="round"
              onAnimationComplete={() => setThirdDone(true)}
            />
        </svg> */}
        <div className="md:absolute md:left-[180px] md:top-[375px] w-4/5 mx-auto md:w-auto z-10">
        <TimeLineCard text={"Submission Deadline"} month={"August"} day={"19"} />
      </div>
      <div className="md:absolute md:right-[180px] md:top-[475px] w-4/5 mx-auto md:w-auto z-10">
        <TimeLineCard text={"Grand Finale & Award Ceremony"} month={"September"} day={"27"} />
      </div>
      {/* Mobile Lines */}
      {/* <svg
            className="absolute left-[50%] top-[0px] md:hidden"
            width="3"
            height="150"
            viewBox="0 0 3 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut'}}
              x1="1.5"
              y1="0"
              x2="1.5"
              y2="150"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeDasharray="11 11"
            />
          </svg>
        <svg
            className="absolute left-[50%] top-[253px] md:hidden"
            width="3"
            height="60"
            viewBox="0 0 3 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 1}}
              x1="1.5"
              y1="0"
              x2="1.5"
              y2="60"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeDasharray="11 11"
            />
          </svg>
          <svg
            className="absolute left-[50%] top-[416px] md:hidden"
            width="3"
            height="60"
            viewBox="0 0 3 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 2}}
              x1="1.5"
              y1="0"
              x2="1.5"
              y2="60"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeDasharray="11 11"
            />
          </svg> */}
          
      </div>
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }`
      }</style>
      
    </div>
  )
}

export default Timeline