import { useState, useEffect } from 'react';

const Gallery = ({ isActive }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    
    // Auto-advance slides (optional)
    useEffect(() => {
        if (!isActive) return;
        
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        
        return () => clearInterval(interval);
    }, [currentIndex, isActive]);
    
    const images = [
        {
            src: "/past-events/1.jpg",
            alt: "Opening Ceremony",
            // title: "Opening Ceremony",
            // description: "The grand launch event that kickstarted our journey",
        },
        {
            src: "/past-events/2.jpg",
            alt: "Technical Workshop",
            // title: "Technical Workshop",
            // description: "Expert-led session on Ballerina programming",
        },
        {
            src: "/past-events/3.jpg",
            alt: "Team Collaboration",
            // title: "Team Collaboration",
            // description: "Teams working together to create innovative solutions",
        },
        {
            src: "/past-events/4.jpg",
            alt: "Mentoring Session",
            // title: "Mentoring Session",
            // description: "One-on-one guidance from industry experts",
        },
        {
            src: "/past-events/5.jpg",
            alt: "Project Presentations",
            // title: "Project Presentations",
            // description: "Teams showcasing their innovative projects",
        },
        {
            src: "/past-events/6.jpg",
            alt: "Networking Event",
            // title: "Networking Event",
            // description: "Building connections in the tech community",
        },
        {
            src: "/past-events/7.jpg",
            alt: "Award Ceremony",
            // title: "Award Ceremony",
            // description: "Recognizing outstanding achievements",
        },
        {
            src: "/past-events/8.jpg",
            alt: "Closing Ceremony",
            // title: "Closing Ceremony",
            // description: "Celebrating the successful completion",
        },
    ];
    return (
        <div className="relative min-h-screen w-full bg-gradient-to-b from-[#0A2324] via-[#0A2324] to-[#153f41] flex flex-col items-center justify-center overflow-hidden py-8">
            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 sm:mb-6 bg-gradient-to-r from-[#FBB934] to-[#10C3BD] bg-clip-text text-transparent px-4 text-center">
                Gallery
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FBB934] to-[#10C3BD] rounded-full"/>
            </h2>
            {/* Carousel */}
            <div id="default-carousel" className="relative w-4/5" data-carousel="slide">
                <div className="relative mx-0 md:mx-24 h-56 overflow-hidden rounded-lg md:h-140">
                    {images.map((image, index) => (
                        <div 
                            className={`duration-700 ease-in-out absolute w-full h-full transition-transform ${
                                index === currentIndex 
                                    ? 'translate-x-0 z-10' 
                                    : index < currentIndex 
                                        ? '-translate-x-full z-0' 
                                        : 'translate-x-full z-0'
                            }`} 
                            data-carousel-item 
                            key={index}
                        >
                            <img 
                                src={image.src} 
                                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl shadow-lg shadow-black/50" 
                                alt={image.alt} 
                            />
                        </div>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="cursor-pointer absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all z-20"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-6 sm:h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="cursor-pointer absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all z-20"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-6 sm:h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                    </svg>
                </button>
            </div>
            {/* Dots Navigation - Simplified */}
            <div className="flex justify-center space-x-1 sm:space-x-2 mt-4 sm:mt-8">
            {images.map((_, index) => (
                <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                    ? "w-4 sm:w-6 bg-gradient-to-r from-[#FBB934] to-[#10C3BD]"
                    : "bg-gray-400/30 hover:bg-gray-400/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                />
            ))}
            </div>
        </div>
    );
}

export default Gallery;
