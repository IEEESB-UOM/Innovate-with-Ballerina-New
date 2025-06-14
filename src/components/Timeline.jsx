import TimeLineCard from './TimeLineCard';
import { motion } from 'framer-motion';

const Timeline = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#0F262A] flex items-center justify-center text-4xl font-bold">
      <div className="relative w-full flex flex-col items-center h-full md:block">
        <img
          src="/Ellipse 7.png"
          className="absolute left-[0px] top-[250px] hidden md:block"
        />
        <img
          src="/Ellipse 8.png"
          className="absolute left-[200px] top-[600px] hidden md:block"
        />
        <img
          src="/Ellipse 9.png"
          className="absolute right-[-30px] top-[450px] hidden md:block"
        />

        {/* Background Text */}
        <div className="absolute top-[10%] left-[45%] w-full hidden md:block">
          <p className="text-[184px] font-bold leading-[101%] tracking-[3.44px] capitalize bg-gradient-to-r from-[rgba(14,159,154,0.305)] via-[rgba(143,193,143,0.305)] to-[rgba(255,179,74,0.305)] bg-clip-text text-transparent absolute">
            Stay Updated
          </p>
        </div>

        <div className="w-full md:w-[1700px] w-full mx-auto relative">
          {/* Timeline Card */}
          <div className="md:absolute md:left-[185px] md:top-[100px] md:w-auto w-4/5 mx-auto mt-[100px] md:mt-0">
            <TimeLineCard
              text={'Registrations Open'}
              month={'May'}
              day={'19'}
            />

            {/* Line 1 - Desktop*/}
            <svg
              className="md:absolute md:left-[90%] top-[80px] hidden md:block"
              width="460"
              height="3"
              viewBox="0 0 460 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.line
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                y1="1.5"
                x2="460"
                y2="1.5"
                stroke="#8FC18F55"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>
            {/* Line 2 - desktop*/}
            <svg
              className="md:absolute md:left-[180.5%] top-[80px] hidden md:block"
              width="3"
              height="100"
              viewBox="0 0 3 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.line
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
                x1="1.5"
                y1="0"
                x2="1.5"
                y2="100"
                stroke="#8FC18F55"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeDasharray="11 11"
              />
            </svg>
          </div>
          {/* Line 3 - desktop */}
          <svg
            className="md:absolute md:left-[555px] top-[363px] hidden md:block"
            width="330"
            height="3"
            viewBox="0 0 330 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 2 }}
              x1="330"
              y1="1.5"
              x2="0"
              y2="1.5"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
          {/* Line 4 - desktop */}
          <svg
            className="md:absolute md:left-[32.5%] top-[363px] hidden md:block"
            width="3"
            height="50"
            viewBox="0 0 3 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 3 }}
              x1="1.5"
              y1="0"
              x2="1.5"
              y2="50"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>

          <div className="md:absolute md:left-[885px] md:top-[280px] w-4/5 mx-auto md:w-auto ">
            <TimeLineCard
              text={'Introductory Session'}
              month={'June'}
              day={'04'}
            />
          </div>

          {/* Line 5 - Desktop*/}
          <svg
            className="md:absolute md:left-[42.5%] top-[500px] hidden md:block"
            width="430"
            height="3"
            viewBox="0 0 430 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 4 }}
              y1="1.5"
              x2="430"
              y2="1.5"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
          {/* Line 6 - desktop*/}
          <svg
            className="md:absolute md:left-[67.6%] top-[500px] hidden md:block"
            width="3"
            height="50"
            viewBox="0 0 3 50"
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
              y2="50"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>

          {/* Line 7 - desktop */}
          <svg
            className="md:absolute md:left-[22.15%] top-[630px] hidden md:block"
            width="559"
            height="3"
            viewBox="0 0 559 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 6 }}
              x1="559"
              y1="1.5"
              x2="0"
              y2="1.5"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
          {/* Line 8 - desktop*/}
          <svg
            className="md:absolute md:left-[22.1%] top-[630px] hidden md:block"
            width="3"
            height="105"
            viewBox="0 0 3 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 7 }}
              x1="1.5"
              y1="0"
              x2="1.5"
              y2="105"
              stroke="#8FC18F55"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>

          <div className="md:absolute md:left-[275px] md:top-[413px] w-4/5 mx-auto md:w-auto">
            <TimeLineCard
              text={'Submissions Opening'}
              month={'July'}
              day={'08'}
            />
          </div>

          <div className="md:absolute md:left-[935px] md:top-[550px] w-4/5 mx-auto md:w-auto">
            <TimeLineCard
              text={'Registration Deadline'}
              month={'July'}
              day={'16'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
