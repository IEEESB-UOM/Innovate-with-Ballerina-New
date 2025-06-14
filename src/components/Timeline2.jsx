import TimeLineCard from './TimeLineCard';
import { motion } from 'framer-motion';

const Timeline = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-[#0F262A] via-[#0F262A] to-[#153f41] flex items-center justify-center text-4xl font-bold">
      <div className="relative w-full flex flex-col items-center h-full md:block">
        <img
          src="/Ellipse 9.png"
          className="absolute right-[-30px] top-[-300px] hidden md:block"
        />
        <img
          src="/Ellipse 10.png"
          className="absolute right-[250px] top-[550px] h-36 animate-spin-slow hidden md:block"
        />
        <div className="absolute top-[65%] left-[-45%] w-full hidden md:block">
          <p className="text-[184px] font-bold leading-[101%] tracking-[3.44px] capitalize bg-gradient-to-r from-[rgba(14, 159, 154, 0.19)] via-[rgba(143,193,143,0.19)] to-[rgba(255,179,74,0.19)] bg-clip-text text-transparent absolute">
            Stay Updated
          </p>
        </div>
        <div className="w-full md:w-[1700px] w-full mx-auto relative">
          {/* Line 1 */}
          <svg
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
              transition={{ duration: 1, ease: 'easeInOut' }}
              x1="1.5"
              y1="0"
              x2="1.5"
              y2="90"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
          <div className="md:absolute md:left-[185px] md:top-[90px] md:w-auto w-4/5 mx-auto mt-[100px] md:mt-0">
            <TimeLineCard text={'Workshop 1'} month={'July'} day={'21'} />
          </div>

          <div className="md:absolute md:left-[900px] md:top-[230px] w-4/5 mx-auto md:w-auto">
            <TimeLineCard text={'Workshop 2'} month={'August'} day={'15'} />
          </div>
          {/*Line 2*/}
          <svg
            className="md:absolute md:left-[37.1%] top-[170px] hidden md:block"
            width="475"
            height="3"
            viewBox="0 0 475 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
              y1="1.5"
              x2="475"
              y2="1.5"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>

          {/* Line 3 */}
          <svg
            className="md:absolute md:left-[64.9%] top-[170px] hidden md:block"
            width="3"
            height="60"
            viewBox="0 0 3 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 2 }}
              x1="1.5"
              y1="0"
              x2="1.5"
              y2="60"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>

          <div className="md:absolute md:left-[250px] md:top-[350px] w-4/5 mx-auto md:w-auto">
            <TimeLineCard
              text={'Submission Deadline'}
              month={'August'}
              day={'19'}
            />
          </div>
          <div className="md:absolute md:left-[32%] md:top-[560px] w-4/5 mx-auto md:w-auto">
            <TimeLineCard
              text={'Grand Finale & Award Ceremony'}
              month={'September'}
              day={'27'}
            />
          </div>
          {/* Line 5 */}
          <svg
            className="md:absolute md:left-[26.5%] top-[310px] hidden md:block"
            width="3"
            height="40"
            viewBox="0 0 3 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 4 }}
              x1="1.5"
              y1="0"
              x2="1.5"
              y2="40"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
          {/* Line 4 */}
          <svg
            className="md:absolute md:left-[26.5%] top-[310px] hidden md:block"
            width="450"
            height="3"
            viewBox="0 0 450 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 3 }}
              x1="450"
              y1="1.5"
              x2="0"
              y2="1.5"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
          {/* Line 6 */}
          <svg
            className="md:absolute md:left-[26.5%] top-[510px] hidden md:block"
            width="3"
            height="130"
            viewBox="0 0 3 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 5 }}
              x1="1.5"
              y1="0"
              x2="1.5"
              y2="130"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>

          {/* Line 7 */}
          <svg
            className="md:absolute md:left-[26.5%] top-[640px] hidden md:block"
            width="94"
            height="3"
            viewBox="0 0 94 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 6 }}
              y1="1.5"
              x2="94"
              y2="1.5"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
        </div>
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
        }
      `}</style>
    </div>
  );
};

export default Timeline;
