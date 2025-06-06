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
      question: "How many people can be there in a team?",
      answer: "A team can consist of 3-4 participants.",
    },
    {
      question: "Can a team consist of participants from different universities?",
      answer: "No, All participants must be currently enrolled undergraduates from the same university or institution.",
    },
    {
      question: "Can we change our team members after registration close?",
      answer: "No, After the registration period, teams won’t be able to change their members. But can make changes of the team content within registration period.",
    },
    {
      question: 'Does "Innovate With Ballerina" require any prior coding skills to participate in?',
      answer: "While prior coding experience can be advantageous, it's not a requirement. Because we'll conduct 3 workshops which'll help you to get a fundamental knowledge about coding and about Ballerina language.",
    },
    {
      question: "Will I get a certificate of participation?",
      answer: "Yes, all participants who have submitted their GitHub repositories  will receive certificates as recognition of their participation and contribution to the event.",
    },
    {
      question: "Do the participants need to attend physically?",
      answer: "No, All workshops and submission procedure will be in online mode.",
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

  return (
    <div className="h-screen w-full snap-start relative overflow-hidden">
      {/* Section 1: Background with start color */}
      <div className="absolute inset-0 bg-[#0A2324] z-0"></div>

      {/* Section 2: Bottom radial ellipse with end color */}
      <div
        className="absolute left-1/2 bottom-[-40%] -translate-x-1/2 z-0 pointer-events-none"
        style={{
          width: "120vw",
          height: "60vh",
          background: "radial-gradient(ellipse at center, #277E57 0%, transparent 70%)",
          opacity: 0.85,
        }}
      ></div>

      {/* Top left decorative image */}
      <img
        src={topleft}
        alt="Top left decoration"
        className="absolute top-0 left-0 object-contain opacity-80 hidden lg:block z-10"
        style={{ height: "30rem" }}
      />

      {/* Bottom left decorative grid placeholder */}
      <img
        src={bottomleft}
        alt="Top left decoration"
        className="absolute bottom-0 left-0 object-contain opacity-80 hidden lg:block z-10"
        style={{ height: "11rem" }}
      />

      {/* Right side spiral placeholder */}
      <img
        src={spiral}
        alt="Spiral decoration"
        className="absolute right-0 bottom-1/4 object-contain opacity-80 hidden lg:block z-10 animate-pulse"
        style={{ height: "11rem" }}
      />

      {/* Star decorative elements placeholder */}
      <img
        src={flower}
        alt="Flower decoration"
        className="absolute right-16 bottom-0 object-contain opacity-80 hidden lg:block z-10 animate-spin-slow"
        style={{ height: "11rem", bottom: "-1.2rem" }}
      />

      {/* Mobile decorative elements */}
      {/* Right side spiral placeholder */}
      <img
        src={spiral}
        alt="Spiral decoration"
        className="absolute right-0 bottom-0 object-contain opacity-80 lg:hidden z-10 animate-pulse"
        style={{ height: "8rem" }}
      />

      {/* Star decorative elements placeholder */}
      <img
        src={flower}
        alt="Flower decoration"
        className="absolute right-8 bottom-0 object-contain opacity-80 lg:hidden z-10 animate-spin-slow"
        style={{ height: "5rem", bottom: "-1.2rem" }}
      />


      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center mx-16 lg:px-8">
        <h2
          className="gradient-text text-left pt-8 w-full lg:text-center lg:pt-0" // Added text-left and w-full for mobile, lg:text-center for desktop
          style={{
            fontSize: "2.8rem",
            fontWeight: "bold",
            display: "inline-block",
            color: "transparent",
            backgroundClip: "text",
            marginBottom: "1rem",
            letterSpacing: "0.05em",
            animation: "fade-in 1s ease-in",
            backgroundImage: "linear-gradient(15deg, #0E9F9B, #8FC18F, #FFB34A)"
          }}
        >
          FAQ
        </h2>

        {/* FAQ Items Container */}
        <div className="w-full max-w-6xl">
          <div className="flex flex-col gap-4">
            {faqData.map((item, index) => (
              <div key={index} className="w-full animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div
                  className={`bg-white/10 backdrop-blur-sm rounded-xl cursor-pointer transition-all duration-500 ease-out hover:bg-white/20 border border-slate-600/30 hover:border-teal-400/50 hover:shadow-lg hover:shadow-teal-400/20 transform hover:scale-[1.02] ${openItems.includes(index) ? "bg-white/20 border-teal-400/40 shadow-lg shadow-teal-400/10" : ""}                    }`}
                  onClick={() => toggleItem(index)}
                  style={{ minHeight: "40px", padding: 0 }} // Reduced height and removed extra padding
                >
                  <div className="p-1 pl-2 lg:p-2 lg:pl-8 relative overflow-hidden"> {/* Added relative and overflow-hidden */}
                    <div className="flex items-center justify-between min-h-[32px]">
                      <span className="text-white text-sm lg:text-base font-medium transition-colors duration-300">
                        {item.question}
                      </span>

                      {/* Semi-transparent white background layer - only shows when closed */}
                      {!openItems.includes(index) && (
                        <div
                          className="absolute inset-y-0 right-0 bg-white opacity-15 hidden lg:block"
                          style={{
                            width: "2.3rem",
                            borderTopRightRadius: "0.375rem", // rounded-tr-md equivalent
                            borderBottomRightRadius: "0.375rem" // rounded-br-md equivalent
                          }}
                        />
                      )}

                      <div className="ml-4 flex-shrink-0 relative z-10"> {/* Added z-10 to ensure icon is above the layer */}
                        {/* Icon container with rotation */}
                        <div
                          className={`relative transition-all duration-300 ease-out ${openItems.includes(index) ? "rotate-180 scale-110" : "rotate-0 scale-100"
                            }`}
                        >
                          {openItems.includes(index) ? (
                            <Minus className="w-5 h-5 text-white" />
                          ) : (
                            <Plus className="w-5 h-5 text-white" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expandable answer with smooth animation */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-out ${openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div
                        className={`pt-2 border-t border-slate-600/30 transition-all duration-300 delay-100 ${openItems.includes(index) ? "translate-y-0" : "-translate-y-2"
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
