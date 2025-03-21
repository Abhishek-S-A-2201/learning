import { Button } from "../components";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1 flex justify-center items-center">
                <img
                    src={offer}
                    alt="Special Offer"
                    width={773}
                    height={687}
                    className="object-contain w-full"
                />
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className="text-coral-red ">Special </span> Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Embark on a shopping journey that redefines your experience
                    with unbeatable deals. From premier selections to incredible
                    savings, we offer unparalleled value that sets us apart.
                </p>
                <p className="mt-4 lg:max-w-lg info-text">
                    Navigate a realm of possibilities with our special offer
                    that promises to deliver the best of both worlds. With a
                    wide range of products and services, we ensure that you get
                    the best value for your money.
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button
                        label="Shop Now"
                        iconURL={arrowRight}
                        backgroundColor="bg-coral-red"
                        borderColor="border-coral-red"
                        textColor="text-white"
                    />
                    <Button
                        label="Learn More"
                        iconURL=""
                        backgroundColor="bg-white"
                        borderColor="border-slate-gray"
                        textColor="text-slate-gray"
                    />
                </div>
            </div>
        </section>
    );
};
export default SpecialOffer;
