const Button = ({ label, iconURL }: { label: string; iconURL: string }) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-1 bg-coral-red rounded-full text-white border-coral-red">
            {label} <img src={iconURL} className="ml-2 rounded-full w-5 h-5" />
        </button>
    );
};
export default Button;
