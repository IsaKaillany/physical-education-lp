import PropTypes from "prop-types";

export default function CardInfo({ icon: Icon, iconSize, title, content }) {
    const formattedContent = content
        .split(/(Senior TechFit)/gi)
        .map((part, index) =>
            part.toLowerCase() === "senior techfit" ? (
                <strong key={index}>{part}</strong>
            ) : (
                part
            )
        );

    return (
        <div className="bg-white/[0.03] w-80 h-96 flex flex-col items-center px-4 pt-5 rounded-xl ring ring-[#21325A] ring-inset shadow-2xl shadow-black mx-4 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:rotate-1 hover:scale-105 transform perspective-1000 hover:rotate-x-6 hover:rotate-y-6">
            <Icon className={`size-${iconSize} text-white`} />
            <h1 className="text-[#EA9F0C] font-semibold mt-2 text-xl uppercase">
                {title}
            </h1>
            <p className="text-white text-center mt-6">{formattedContent}</p>
        </div>
    );
}

CardInfo.propTypes = {
    icon: PropTypes.elementType.isRequired,
    iconSize: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
