const GradientBorderButton = ({ children, onClick }) => {
    return (
        <button
            type="button"
            className="transtion group flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#0E9F9B] to-[#FFB34A] p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-xl hover:shadow-[#0E9F9B]/10 cursor-pointer"
            onClick={onClick}
        >
            <div className="py-2 px-8 tracking-wide flex items-center justify-center rounded-2xl bg-[#0A2324] transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out cursor-pointer">
                {children}
            </div>
        </button>
    );
}

export default GradientBorderButton;
