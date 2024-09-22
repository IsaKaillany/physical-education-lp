import PropTypes from "prop-types";

export default function BenefitsCard({ animation, image, content }) {
    return (
        <div
            data-aos={animation}
            className="flex items-center justify-between px-20 max-md:px-10 mx-8 max-md:mx-0 gap-20 bg-gradient-to-t from-[#16223D] to-[#21325A] max-md:flex-col max-md:gap-2 ring ring-[#21325A] ring-inset rounded-[50px]"
        >
            <img
                src={image}
                alt=""
                className="w-[350px] my-6 rounded-2xl shadow-lg shadow-gray-900"
            />
            <p className="text-right max-md:text-justify text-white max-md:text-xl text-3xl my-6 font-semibold">
                {content}
            </p>
        </div>
    );
}

BenefitsCard.propTypes = {
    animation: PropTypes.string.isRequired,
    image: PropTypes.elementType.isRequired,
    content: PropTypes.string.isRequired,
};
