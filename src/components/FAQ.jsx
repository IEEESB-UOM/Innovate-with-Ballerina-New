"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import topleft from "../assets/FAQ/top_left.png"
import bottomleft from "../assets/FAQ/bottom_left.png"
import spiral from "../assets/FAQ/spiral.png"
import flower from "../assets/FAQ/flower.png"

const FAQ = () => {
  const [openItems, setOpenItems] = useState([])

  const faqData = [
    {
      question: "How many members can a team have?",
      answer: "A team can consist of minimum 3 - maximum 4 participants.",
    },
    {
      question: "Can a team consist of participants from different universities?",
      answer: "No. All participants must be currently enrolled undergraduates from the same university or institution.",
    },
    {
      question: "Can we change our team members after registering?",
      answer: "No. After the registration period ends, teams cannot change their members. However, changes can be made during the registration period.",
    },
    {
      question: 'Does "Innovate with Ballerina" require any prior Ballerina language knowledge to participate in?',
      answer: "WSO2 provides plenty of beginner-friendly resources to learn the fundamentals of coding and the Ballerina language and we’ll be sharing all these resources along with two dedicated workshops to guide you through.",
    },
    {
      question: "Will I get a certificate of participation?",
      answer: "Yes. All teams that make a valid final submission will receive certificates in recognition of their participation and contribution.",
    },
    {
      question: "Can we include a WSO2 intern or ex-intern in our team?",
      answer: "No. Team members must not be current or former interns at WSO2.",
    },
  ]

  // Utility hook to detect mobile view
  // const isMobile = typeof window !== "undefined" && window.innerWidth < 1024

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      // if (isMobile) {
      // In mobile, only one open at a time
      return prev.includes(index) ? [] : [index]
      // } else {
      //   // In desktop, allow multiple open
      //   return prev.includes(index)
      //     ? prev.filter((item) => item !== index)
      //     : [...prev, index]
      // }
    })
  }

  // Split FAQ data into two columns
  const leftColumn = faqData.slice(0, 3)
  const rightColumn = faqData.slice(3, 6)

  // Separate open state for each column
  const [openLeft, setOpenLeft] = useState([])
  const [openRight, setOpenRight] = useState([])

  // Toggle for left column
  const toggleLeft = (index) => {
    setOpenLeft((prev) => {
      if (prev.includes(index)) {
        return [];
      } else {
        setOpenRight([]); // Close all right column cards
        return [index];
      }
    });
  };
  // Toggle for right column
  const toggleRight = (index) => {
    setOpenRight((prev) => {
      if (prev.includes(index)) {
        return [];
      } else {
        setOpenLeft([]); // Close all left column cards
        return [index];
      }
    });
  };

  return (
    <div className="h-screen w-full snap-start relative overflow-hidden">
      {/* Section 1: Background with start color */}
      <div className="absolute inset-0 bg-[#0A2324] z-0"></div>

      {/* Decorative images (unchanged) */}
      {/* <img
        src={topleft}
        alt="Top left decoration"
        className="absolute top-0 left-0 object-contain opacity-80 hidden lg:block z-10"
        style={{ height: "30rem" }}
      /> */}
      <img
        src={bottomleft}
        alt="Top left decoration"
        className="absolute bottom-0 left-0 object-contain opacity-80 hidden lg:block z-10"
        style={{ height: "11rem" }}
      />
      {/* <img
        src={spiral}
        alt="Spiral decoration"
        className="absolute right-0 bottom-1/4 object-contain opacity-80 hidden lg:block z-10 animate-pulse"
        style={{ height: "11rem" }}
      /> */}
      <img
        src={flower}
        alt="Flower decoration"
        className="absolute right-16 top-30 object-contain opacity-80 hidden lg:block animate-spin-slow"
        style={{ height: "11rem", bottom: "-1.2rem", zIndex: 0 }}
      />
      {/* <img
        src={spiral}
        alt="Spiral decoration"
        className="absolute right-0 bottom-0 object-contain opacity-80 lg:hidden z-10 animate-pulse"
        style={{ height: "8rem" }}
      /> */}
      {/* <img
        src={flower}
        alt="Flower decoration"
        className="absolute right-8 bottom-0 object-contain opacity-80 lg:hidden z-0 animate-spin-slow"
        style={{ height: "5rem", bottom: "1.5rem" }}
      /> */}

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center mx-4 lg:mx-16 lg:px-8 pl-3 pr-3 lg:pl-0 lg:pr-0">
        <h2
          className="gradient-text text-left pt-2 w-full lg:text-center lg:pt-0"
          style={{
            fontSize: "2.8rem",
            fontWeight: "bold",
            display: "inline-block",
            color: "transparent",
            backgroundClip: "text",
            marginBottom: "0.1rem",
            letterSpacing: "0.05em",
            animation: "fade-in 1s ease-in",
            backgroundImage: "linear-gradient(15deg, #0E9F9B, #8FC18F, #FFB34A)"
          }}
        >
          FAQ
        </h2>

        {/* FAQ Items Container */}
        <div className="w-full max-w-6xl">
          {/* Mobile: single column, Desktop: two columns */}
          <div className="flex flex-col gap-4 pt-8 lg:flex-row lg:gap-8">
            {/* Mobile: show all in one column */}
            <div className="flex flex-col gap-4 w-full lg:hidden pr-5">
              {faqData.map((item, idx) => (
                <div key={idx} className="w-full animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div
                    className={`bg-white/10 backdrop-blur-sm rounded-xl cursor-pointer transition-all duration-500 ease-out hover:bg-white/20 border border-slate-600/30 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/20 transform hover:scale-[1.02] ${openItems.includes(idx) ? "bg-white/20 border-teal-400/40 shadow-lg shadow-teal-400/10" : ""}`}
                    onClick={() => toggleItem(idx)}
                    style={{ minHeight: "40px", padding: 0 }}
                  >
                    <div className="p-1 lg:p-2 lg:pl-8 relative overflow-hidden">
                      <div className="flex items-center justify-between min-h-[32px]">
                        <span className="text-white text-sm lg:text-base font-medium transition-colors duration-300">
                          {item.question}
                        </span>
                        {!openItems.includes(idx) && (
                          <div
                            className="absolute inset-y-0 right-0 bg-white opacity-15"
                            style={{
                              width: "2.3rem",
                              borderTopRightRadius: "0.375rem",
                              borderBottomRightRadius: "0.375rem"
                            }}
                          />
                        )}
                        <div className="ml-4 flex-shrink-0 relative z-10">
                          <div
                            className={`relative transition-all duration-300 ease-out ${openItems.includes(idx) ? "rotate-180 scale-110" : "rotate-0 scale-100"
                              }`}
                          >
                            {openItems.includes(idx) ? (
                              <Minus className="w-5 h-5 text-white mr-1" />
                            ) : (
                              <Plus className="w-5 h-5 text-white mr-1" />
                            )}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-out ${openItems.includes(idx) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        <div
                          className={`pt-2 border-t border-slate-600/30 transition-all duration-300 delay-100 ${openItems.includes(idx) ? "translate-y-0" : "-translate-y-2"
                            }`}
                        >
                          <p className="text-slate-300 text-xs lg:text-sm leading-relaxed">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop: two columns */}
            <div className="hidden lg:flex flex-1 flex-col gap-4">
              {leftColumn.map((item, idx) => (
                <div key={idx} className="w-full animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div
                    className={`bg-white/10 backdrop-blur-sm rounded-xl cursor-pointer transition-all duration-500 ease-out hover:bg-white/20 border border-slate-600/30 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/20 transform hover:scale-[1.02] ${openLeft.includes(idx) ? "bg-white/20 border-teal-400/40 shadow-lg shadow-teal-400/10" : ""}`}
                    onClick={() => toggleLeft(idx)}
                    style={{ minHeight: "40px", padding: 0 }}
                  >
                    <div className="p-1 pl-2 lg:p-2 lg:pl-8 relative overflow-hidden">
                      <div className="flex items-center justify-between min-h-[32px]">
                        <span className="text-white text-sm lg:text-base font-medium transition-colors duration-300">
                          {item.question}
                        </span>
                        {!openLeft.includes(idx) && (
                          <div
                            className="absolute inset-y-0 right-0 bg-white opacity-15 hidden lg:block"
                            style={{
                              width: "2.3rem",
                              borderTopRightRadius: "0.375rem",
                              borderBottomRightRadius: "0.375rem"
                            }}
                          />
                        )}
                        <div className="ml-4 flex-shrink-0 relative z-10">
                          <div
                            className={`relative transition-all duration-300 ease-out ${openLeft.includes(idx) ? "rotate-180 scale-110" : "rotate-0 scale-100"
                              }`}
                          >
                            {openLeft.includes(idx) ? (
                              <Minus className="w-5 h-5 text-white" />
                            ) : (
                              <Plus className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-out ${openLeft.includes(idx) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        <div
                          className={`pt-2 border-t border-slate-600/30 transition-all duration-300 delay-100 ${openLeft.includes(idx) ? "translate-y-0" : "-translate-y-2"
                            }`}
                        >
                          <p className="text-slate-300 text-xs lg:text-sm leading-relaxed">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex flex-1 flex-col gap-4 mt-4 lg:mt-0">
              {rightColumn.map((item, idx) => (
                <div key={idx} className="w-full animate-fade-in-up" style={{ animationDelay: `${(idx + 3) * 100}ms` }}>
                  <div
                    className={`bg-white/10 backdrop-blur-sm rounded-xl cursor-pointer transition-all duration-500 ease-out hover:bg-white/20 border border-slate-600/30 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/20 transform hover:scale-[1.02] ${openRight.includes(idx) ? "bg-white/20 border-teal-400/40 shadow-lg shadow-teal-400/10" : ""}`}
                    onClick={() => toggleRight(idx)}
                    style={{ minHeight: "40px", padding: 0 }}
                  >
                    <div className="p-1 pl-2 lg:p-2 lg:pl-8 relative overflow-hidden">
                      <div className="flex items-center justify-between min-h-[32px]">
                        <span className="text-white text-sm lg:text-base font-medium transition-colors duration-300">
                          {item.question}
                        </span>
                        {!openRight.includes(idx) && (
                          <div
                            className="absolute inset-y-0 right-0 bg-white opacity-15 hidden lg:block"
                            style={{
                              width: "2.3rem",
                              borderTopRightRadius: "0.375rem",
                              borderBottomRightRadius: "0.375rem"
                            }}
                          />
                        )}
                        <div className="ml-4 flex-shrink-0 relative z-10">
                          <div
                            className={`relative transition-all duration-300 ease-out ${openRight.includes(idx) ? "rotate-180 scale-110" : "rotate-0 scale-100"
                              }`}
                          >
                            {openRight.includes(idx) ? (
                              <Minus className="w-5 h-5 text-white" />
                            ) : (
                              <Plus className="w-5 h-5 text-white" />
                            )}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-out ${openRight.includes(idx) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        <div
                          className={`pt-2 border-t border-slate-600/30 transition-all duration-300 delay-100 ${openRight.includes(idx) ? "translate-y-0" : "-translate-y-2"
                            }`}
                        >
                          <p className="text-slate-300 text-xs lg:text-sm leading-relaxed">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        @keyframes vanish {
          0% {
            opacity: 0.5;
          }
          25% {
            opacity: 0.3;
          }
          50% {
            opacity: 0;
          }
          75% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.5;
          }
        }
        .animate-vanish {
          animation: vanish 4s infinite;
        }

        @keyframes vanish {
          0% {
            opacity: 1;
          }
          25% {
            opacity: 0.6;
          }
          50% {
            opacity: 0;
          }
          75% {
            opacity: 0.6;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-vanish-mobile {
          animation: vanish 4s infinite;
        }
      `}</style>
    </div>
  )
}

export default FAQ
