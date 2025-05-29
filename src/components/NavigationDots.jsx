const NavigationDots = ({ currentIndex, setCurrentIndex, numSections }) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center gap-4 z-50">
      {Array.from({ length: numSections }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentIndex(i)}
          className={currentIndex === i ? 'transform duration-300 animate-spin scale-125' : ''}
          aria-label={`Navigate to section ${i + 1}`}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0003 0L14.8491 1.32717L17.0173 0.635974L18.3653 2.46963L20.6413 2.48233L21.3566 4.64286L23.5171 5.35881L23.5304 7.63485L25.364 8.98296L24.6729 11.1511L26 13L24.6729 14.8489L25.364 17.017L23.5304 18.3651L23.5171 20.6412L21.3566 21.3565L20.6413 23.517L18.3653 23.5304L17.0173 25.364L14.8491 24.6728L13.0003 26L11.1515 24.6728L8.98275 25.364L7.63466 23.5304L5.3593 23.517L4.64338 21.3565L2.48291 20.6412L2.47023 18.3651L0.636609 17.017L1.32779 14.8489L0 13L1.32779 11.1511L0.636609 8.98296L2.47023 7.63485L2.48291 5.35881L4.64338 4.64286L5.3593 2.48233L7.63466 2.46963L8.98275 0.635974L11.1515 1.32717L13.0003 0Z" fill="url(#paint0_linear_628_7501)" fill-opacity="0.8" />
            <defs>
              <linearGradient id="paint0_linear_628_7501" x1="1.5" y1="2.58219" x2="34.4985" y2="30.5646" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FBB934" />
                <stop offset="0.601257" stop-color="#10C3BD" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      ))}
    </div>
  );
};

export default NavigationDots;