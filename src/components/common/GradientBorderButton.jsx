const GradientBorderButton = ({
  children,
  onClick,
  filled,
  text,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`transition group flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FBB934] to-[#10C3BD] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-xl hover:shadow-[#0E9F9B]/10 cursor-pointer ${className}`}
    >
      <div
        className={`py-1.5 px-4 sm:py-2 sm:px-8 text-sm sm:text-base tracking-wide flex items-center justify-center rounded-2xl transition duration-300 ease-in-out w-full
          ${filled
            ? 'bg-gradient-to-r from-[#FBB934] to-[#10C3BD]'
            : 'bg-[#0A2324] group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900'}
          ${text ? 'text-black font-medium' : 'text-white'}
        `}
      >
        {children}
      </div>
    </button>
  );
};

export default GradientBorderButton;
