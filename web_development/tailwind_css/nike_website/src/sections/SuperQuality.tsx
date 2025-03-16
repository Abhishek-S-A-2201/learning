import { Button } from "../components";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div className="flex flex-1 flex-col">
                <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    We Provide You{" "}
                    <span className="text-coral-red ">Super </span>
                    <span className="text-coral-red ">Quality </span> Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Ensuring premium quality and comfort, our shoes are designed
                    to provide you with the best experience.
                </p>
                <p className="mt-4 lg:max-w-lg info-text">
                    Our dedication to detail and excellence ensures your
                    satisfactions
                </p>
                <div className="mt-11">
                    <Button
                        label="View Details"
                        iconURL=""
                        backgroundColor="bg-coral-red"
                        borderColor="border-coral-red"
                        textColor="text-white"
                    />
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img
                    src={shoe8}
                    alt="Quality Shoes"
                    width={570}
                    height={522}
                    className="object-contain"
                />
            </div>
        </section>
    );
};
export default SuperQuality;
