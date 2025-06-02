"use client"

import { useState, useEffect } from "react"
import flower from "../assets/ContactUs/flower.png"
import topleft from "../assets/ContactUs/top_left.png"
import ameer from "../assets/ContactUs/ameer.png"
import sanjula from "../assets/ContactUs/sanjula.png"
import lakindu from "../assets/ContactUs/lakindu.png"
import ishan from "../assets/ContactUs/ishan.png"
import dasun from "../assets/ContactUs/dasun.png"
import grid from "../assets/ContactUs/grid.png"
import ballerina from "../assets/ContactUs/ballerina.png"
import ieee from "../assets/ContactUs/ieee.png"
import wso2 from "../assets/ContactUs/wso2.png"
import ieeecs from "../assets/ContactUs/ieeecs.png"
import star1 from "../assets/ContactUs/star1.png"
import star2 from "../assets/ContactUs/star2.png"
import left from "../assets/ContactUs/left.png"
import right from "../assets/ContactUs/right.png"

// Sample data structure - replace with your actual data
const sampleContacts = [
  {
    id: "1",
    name: "Sanjula Gathsara",
    title: "Chairman",
    organization: "IEEE Student Branch",
    university: "University of Moratuwa",
    email: "sanjulagathsara@ieee.org",
    phone: "+94 77 729 9792",
    image: sanjula,
  },
  {
    id: "2",
    name: "Ameera Thiwanka",
    title: "Chairman",
    organization: "IEEE Computer Society",
    university: "University of Moratuwa",
    email: "ameera24@cse.mrt.ac.lk",
    phone: "+94 71 155 5855",
    image: ameer,
  },
  {
    id: "3",
    name: "Lakindu Kariyawasam",
    title: "Event Chairman",
    organization: "Innovate with Ballerina 2025",
    university: "University of Moratuwa",
    email: "lakindu21@cse.mrt.ac.lk",
    phone: "+94 71 205 4031",
    image: lakindu,
  },
  {
    id: "4",
    name: "Ishan Hansaka",
    title: "Event Vice-Chairman",
    organization: "Innovate with Ballerina 2025",
    university: "University of Moratuwa",
    email: "ishanhansaka94@gmail.com",
    phone: "+94 77 545 7005",
    image: ishan,
  },
  {
    id: "5",
    name: "Dasun Randepa",
    title: "Event Vice-Chairman",
    organization: "Innovate with Ballerina 2025",
    university: "University of Moratuwa",
    email: "randepa23@cse.mrt.ac.lk",
    phone: "+94 77 974 7459",
    image: dasun,
  },
]

// Partner logos - replace with your actual logos
const partnerLogos = [
  { name: "IEEE Computer Society", logo: ieee },
  { name: "IEEE Student Branch", logo: ieeecs },
  { name: "WSO2", logo: wso2 },
  { name: "Ballerina", logo: ballerina },
]

const ContactUs = () => {
  const contacts = sampleContacts
  const logos = partnerLogos
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div className="h-screen w-full snap-start relative overflow-hidden">
      {/* Background with start color */}
      <div className="absolute inset-0 bg-[#0A2324] z-0"></div>

      {/* Bottom radial ellipse with end color */}
      <div
        className="absolute left-1/2 bottom-[-40%] -translate-x-1/2 z-0 pointer-events-none"
        style={{
          width: "120vw",
          height: "60vh",
          background: "radial-gradient(ellipse at center, #277E57 0%, transparent 70%)",
          opacity: 0.85,
        }}
      ></div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #277E57 1px, transparent 1px), linear-gradient(to bottom, #277E57 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      {/* Left curved shape */}
      <img
        src={topleft}
        alt="Top left decoration"
        className="absolute top-0 left-0 object-contain opacity-80 hidden md:block"
        style={{ height: "15.8rem" }}
      />
      {/* Star decorative elements placeholder */}
      <img
        src={flower}
        alt="Flower decoration"
        className="absolute right-16 bottom-0 object-contain opacity-80 hidden lg:block z-10 animate-spin-slow"
        style={{ height: "11rem", top: "-9.8rem" }}
      />

      {/* Grid background image */}
      <img
        src={grid}
        alt="Grid background decoration"
        className="absolute bottom-0 w-full object-contain opacity-80 hidden lg:block z-10"
        style={{ height: "11rem", scale: "1.9" }}
      />
      {/* Star images */}
      <img
        src={star1}
        alt="Star 1 decoration"
        className="absolute w-full h-full object-contain z-10 hidden animate-vanish-mobile lg:animate-vanish lg:block"
        style={{ animationDelay: "1s", scale: isMobile ? "1" : "0.5", top: "-2rem", left: "1rem" }}
      />
      <img
        src={star2}
        alt="Star 2 decoration"
        className="absolute w-full h-full object-contain z-10 hidden animate-vanish-mobile lg:animate-vanish lg:block"
        style={{ animationDelay: "2s", scale: isMobile ? "1" : "0.6", top: "3rem", left: "-2rem" }}
      />

      {/* Main content */}
      <div
        className={`relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 py-8 lg:overflow-y-auto ${isMobile ? "overflow-y-auto w-full" : ""
          }`}
        style={isMobile ? { maxHeight: "100vh" } : {}}
      >
        {/* Contact Us Title */}
        {isMobile ? null : (
          <h2
            className=" absolute top-25 text-center pt-8 lg:pt-0"
            style={{
              fontSize: isMobile ? "1.8rem" : "2.8rem",
              fontWeight: "bold",
              top: isMobile ? "3rem" : "5rem",
              display: "inline-block",
              color: "transparent",
              backgroundClip: "text",
              marginBottom: "2rem",
              letterSpacing: "0.05em",
              animation: "fade-in 1s ease-in",
              backgroundImage: "linear-gradient(15deg, #0E9F9B, #8FC18F, #FFB34A)",
            }}
          >
            Contact Us
          </h2>)}

        {/* Contact Cards Container */}
        <div className="w-full">
          {isMobile ? (
            // Mobile layout - single column
            <div className="flex flex-col gap-20 items-center mt-528 lg:mt-50">
              {contacts.map((person, index) => (
                <ContactCard key={person.id} person={person} isMobile={true} index={index} />
              ))}
              {logos.map((logo, index) => (
                <div key={index} className="md:h-12 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <img
                    src={logo.logo || "/placeholder.svg"}
                    alt={logo.name}
                    className="w-full h-full pl-15 pr-15 object-contain hover:scale-110 duration-300"
                  />
                </div>
              ))}
            </div>
          ) : (
            // Desktop layout - two rows
            <div className="space-y-12 mt-15">
              {/* First row - 2 cards */}
              <div className="flex justify-center gap-24">
                {contacts.slice(0, 2).map((person, index) => (
                  <ContactCard key={person.id} person={person} index={index} />
                ))}
              </div>

              {/* Second row - 3 cards */}
              <div className="flex justify-center gap-12">
                {contacts.slice(2, 5).map((person, index) => (
                  <ContactCard key={person.id} person={person} index={index + 2} />
                ))}
              </div>
            </div>
          )}
          {isMobile ? (
            <div className="flex justify-center mt-20">
              {/* Star images */}
              <img
                src={star1}
                alt="Star 1 decoration"
                className="absolute w-full h-full object-contain animate-vanish-mobile lg:animate-vanish"
                style={{ animationDelay: "1s", scale: isMobile ? "1" : "0.5", top: "-2rem", left: "1rem", zIndex: -1 }}
              />
              <img
                src={star2}
                alt="Star 2 decoration"
                className="absolute w-full h-full object-contain animate-vanish-mobile lg:animate-vanish"
                style={{ animationDelay: "2s", scale: isMobile ? "1" : "0.6", top: "3rem", left: "-2rem", zIndex: -1 }}
              />
              <img
                src={left}
                alt="Left decoration"
                className="absolute w-full h-full object-contain top-[8rem]"
                style={{ scale: "0.5", left: "-6rem", zIndex: -1 }}
              />
              <img
                src={right}
                alt="Right decoration"
                className="absolute w-full h-full object-contain top-[54rem]"
                style={{ scale: "0.3", right: "-8rem", zIndex: -1 }}
              />
              <img
                src={star1}
                alt="Star 1 decoration"
                className="absolute w-full h-full object-contain animate-vanish-mobile lg:animate-vanish"
                style={{ animationDelay: "1s", scale: isMobile ? "1" : "0.5", top: "80rem", left: "1rem", zIndex: -1 }}
              />
              <img
                src={star2}
                alt="Star 2 decoration"
                className="absolute w-full h-full object-contain animate-vanish-mobile lg:animate-vanish"
                style={{ animationDelay: "2s", scale: isMobile ? "1" : "0.6", top: "83rem", left: "-2rem", zIndex: -1 }}
              />
              {/* Grid background image */}
              <img
                src={grid}
                alt="Grid background decoration"
                className="absolute w-full object-contain opacity-80 z-10"
                style={{ height: "11rem", scale: "1.9", top: "115rem", left: "0", zIndex: -1 }}
              />
            </div>
          ) : null}
        </div>
        {isMobile ? null : (
          <div className="absolute bottom-10 left-0 right-0 pl-100 pr-100 flex flex-row justify-center gap-8 md:gap-10 z-11">
            {logos.map((logo, index) => (
              <div key={index} className="relative md:w-1/4 md:h-12 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <img
                  src={logo.logo || "/placeholder.svg"}
                  alt={logo.name}
                  className="w-full h-full object-contain hover:scale-110 duration-300"
                />
              </div>
            ))}
          </div>
        )}
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

        .animate-fade-in {
          animation: fade-in 2s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
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

// Contact Card Component
const ContactCard = ({
  person,
  isMobile = false,
  index,
}) => {
  return (
    <div className={`flex ${isMobile ? "flex-col items-center" : "flex-row gap-12 items-center animate-fade-in-up"} `} style={{ animationDelay: `${index * 100}ms` }}>
      {/* Profile Image with background circle already included */}
      <img
        src={person.image || "/placeholder.svg"}
        alt={person.name}
        className="w-full h-full object-cover rounded-full"
        style={{ scale: isMobile ? 1.8 : 1.5, width: isMobile ? "90px" : "100px", height: isMobile ? "90px" : "100px" }}
      />

      <div className="flex flex-col items-center gap-4">
        {/* Name Label */}
        <div className="bg-white text-slate-900 px-4 py-1 font-medium text-center rounded-sm mt-12 lg:mt-2">{person.name}</div>

        {/* Contact Details */}
        <div className="bg-white/0 lg:backdrop-blur-sm rounded-xl p-4 pl-0 pt-0 border border-slate-600/0 hover:bg-white/20 hover:p-4 hover:border-teal-400/50 transition-all duration-300 text-start space-y-1">
          <p className="text-white text-sm">{person.title}</p>
          <p className="text-white text-xs">{person.organization}</p>
          <p className="text-gray-300 text-xs">{person.university}</p>
          <p className="text-gray-300 text-xs">{person.email}</p>
          <p className="text-gray-300 text-xs">{person.phone}</p>
        </div>
      </div>


    </div>
  )
}

export default ContactUs