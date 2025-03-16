const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
}: {
    label: string;
    iconURL: string;
    backgroundColor: string;
    textColor: string;
    borderColor: string;
}) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-1 ${backgroundColor} rounded-full ${textColor} ${borderColor}`}
        >
            {label}
            {iconURL && (
                <img src={iconURL} className="ml-2 rounded-full w-5 h-5" />
            )}
        </button>
    );
};
export default Button;
