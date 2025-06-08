import TimeLineCard from "./TimeLineCard"
import { motion } from "framer-motion";

const Timeline = () => {

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#0F262A] flex items-center justify-center text-4xl font-bold">
      <div className="relative w-full flex flex-col items-center h-full md:block">
        <img src="/Ellipse 7.png" className="absolute left-[0px] top-[250px] hidden md:block" />
        <img src="/Ellipse 8.png" className="absolute left-[200px] top-[600px] hidden md:block" />
        <img src="/Ellipse 9.png" className="absolute right-[-30px] top-[450px] hidden md:block" />

         {/* Background Text */}
        <div className='absolute top-[10%] left-[67%] w-full hidden md:block'>
          <p className='text-[184px] font-bold leading-[101%] tracking-[3.44px] capitalize bg-gradient-to-r from-[rgba(14,159,154,0.305)] via-[rgba(143,193,143,0.305)] to-[rgba(255,179,74,0.305)] bg-clip-text text-transparent absolute'>
            TimeLine
          </p>
        </div>

        {/* Timeline Card */}
        <div className="md:absolute md:left-[185px] md:top-[180px] md:w-auto w-4/5 mx-auto mt-[150px] md:mt-0">
          
          <TimeLineCard text={"Registrations Opening"} month={"May"} day={"19"} />

        {/* Line 1 - Desktop*/}
           <svg
            className="md:absolute md:left-[90%] top-[80px] hidden md:block"
            width="450"
            height="3"
            viewBox="0 0 450 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              y1="1.5"
              x2="450"
              y2="1.5"
              stroke= '#8FC18F55'
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
      {/* Line 2 - desktop*/}
          <svg
            className="md:absolute md:left-[180.5%] top-[80px] hidden md:block"
            width="3"
            height="127"
            viewBox="0 0 3 127"
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
              y2="127"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeDasharray="11 11"
            />
          </svg>
        </div>
    {/* Line 3 - desktop */}
        <svg
            className="md:absolute md:left-[655px] top-[470px] hidden md:block"
            width="230"
            height="3"
            viewBox="0 0 230 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 2}}
              x1="230"
              y1="1.5"
              x2="0"
              y2="1.5"
              stroke= '#8FC18F55'
              strokeWidth="3"
              strokeLinejoin="round"
            />
        </svg>
      {/* Line 4 - desktop */}
        <svg
              className="md:absolute md:left-[43%] top-[470px] hidden md:block"
              width="3"
              height="105"
              viewBox="0 0 3 105"
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
                y2="105"
                stroke="#8FC18F55"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>
        

        <div className="md:absolute md:left-[885px] md:top-[387px] w-4/5 mx-auto md:w-auto">
          <TimeLineCard text={"Introductory Session"} month={"June"} day={"4"} />
        </div>

        {/* Line 5 - desktop */}
        <svg
            className="md:absolute md:left-[22.1%] top-[670px] hidden md:block"
            width="100"
            height="3"
            viewBox="0 0 100 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 4}}
              x1="100"
              y1="1.5"
              x2="0"
              y2="1.5"
              stroke= '#8FC18F55'
              strokeWidth="3"
              strokeLinejoin="round"
              onAnimationComplete={() => setThirdDone(true)}
            />
        </svg>
      {/* Line 6 - desktop*/}
        <svg
          className="md:absolute md:left-[22.1%] top-[670px] hidden md:block"
          width="3"
          height="105"
          viewBox="0 0 3 105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 5}}
            x1="1.5"
            y1="0"
            x2="1.5"
            y2="105"
            stroke="#8FC18F55"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>

        <div className="md:absolute md:left-[435px] md:top-[575px] w-4/5 mx-auto md:w-auto">
          <TimeLineCard text={"Workshop 01 & Submission Opening"} month={"July"} day={"08"} />
        </div>
        {/* Mobile Lines */}
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
              transition={{ duration: 1, ease: 'easeInOut'}}
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
            className="absolute left-[50%] top-[580px] md:hidden"
            width="3"
            height="70"
            viewBox="0 0 3 70"
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
              y2="70"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeDasharray="11 11"
            />
          </svg>
      </div>
    </div>
  );
}

export default Timeline;
