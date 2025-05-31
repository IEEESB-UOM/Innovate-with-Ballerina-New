"use client"

import { useState, useEffect } from "react"
import flower from "../assets/ContactUs/flower.png"
import topleft from "../assets/ContactUs/top_left.png"

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
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Ameera Thiwanka",
    title: "Chairman",
    organization: "IEEE Computer Society",
    university: "University of Moratuwa",
    email: "ameera24@cse.mrt.ac.lk",
    phone: "+94 71 155 5855",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Lakindu Kariyawasam",
    title: "Event Chairman",
    organization: "Innovate with Ballerina 2025",
    university: "University of Moratuwa",
    email: "lakindu21@cse.mrt.ac.lk",
    phone: "+94 71 205 4031",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Ishan Hansaka",
    title: "Event Vice-Chairman",
    organization: "Innovate with Ballerina 2025",
    university: "University of Moratuwa",
    email: "ishanhansaka94@gmail.com",
    phone: "+94 77 545 7005",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    name: "Dasun Randepa",
    title: "Event Vice-Chairman",
    organization: "Innovate with Ballerina 2025",
    university: "University of Moratuwa",
    email: "randepa23@cse.mrt.ac.lk",
    phone: "+94 77 974 7459",
    image: "/placeholder.svg",
  },
]

// Partner logos - replace with your actual logos
const partnerLogos = [
  { name: "University of Moratuwa", logo: "/placeholder.svg" },
  { name: "IEEE Computer Society", logo: "/placeholder.svg" },
  { name: "WSO2", logo: "/placeholder.svg" },
  { name: "Ballerina", logo: "/placeholder.svg" },
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

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 py-8">
        {/* Contact Us Title */}
        <h2
          className="text-center pt-8 md:pt-0"
          style={{
            fontSize: "2.8rem",
            fontWeight: "bold",
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
        </h2>

        {/* Contact Cards Container */}
        <div className="w-full max-w-6xl">
          {isMobile ? (
            // Mobile layout - single column
            <div className="flex flex-col gap-6 items-center">
              {contacts.map((person, index) => (
                <ContactCard key={person.id} person={person} isMobile={true} index={index} />
              ))}
            </div>
          ) : (
            // Desktop layout - two rows
            <div className="space-y-12">
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
        </div>

        {/* Partner Logos */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-12">
          {logos.map((logo, index) => (
            <div key={index} className="w-12 h-12 md:w-16 md:h-16 relative">
              <img
                src={logo.logo || "/placeholder.svg"}
                alt={logo.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
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

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
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
    <div className={`flex flex-col items-center animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
      {/* Profile Image with gradient border */}
      <div className="relative mb-2">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-teal-300 to-yellow-300 -m-1"></div>
        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-slate-800">
          <img
            src={person.image || "/placeholder.svg"}
            alt={person.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name Label */}
      <div className="bg-white text-slate-900 px-4 py-1 font-medium text-center rounded-sm mb-2">{person.name}</div>

      {/* Contact Details */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30 hover:bg-white/20 hover:border-teal-400/50 transition-all duration-300 text-center space-y-1">
        <p className="text-white text-sm">{person.title}</p>
        <p className="text-teal-300 text-xs">{person.organization}</p>
        <p className="text-gray-300 text-xs">{person.university}</p>
        <p className="text-gray-300 text-xs">{person.email}</p>
        <p className="text-gray-300 text-xs">{person.phone}</p>
      </div>
    </div>
  )
}

export default ContactUs