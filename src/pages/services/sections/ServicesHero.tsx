import { servicesList } from "../../../assets/Constants"
import { Button } from "../../../assets/components/Button"
import hero from "../../../assets/images/hero1.jpg"



export const ServicesHero = () => {
    return(
        <>
            <section className="min-h-[100vh] bg-white w-full center relative mt-[5vh] md:mt-[10vh] lg:mt-[15vh]"> 
                <div className="w-11/12 lg:w-10/12 flex flex-col text-center items-center justify-center z-10 gap-[50px]">
                    <div className="center flex-col gap-5 w-full xl:w-9/12">
                        <h1 className="font-bold text-5xl text-primary">Our services</h1>

                        <p className="leading-relaxed tracking-wide w-full md:w-10/12 xl:w-9/12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias libero a nulla ab et quisquam beatae nobis repellat. Inventore, praesentium sapiente dolor fugiat repellendus tempore quasi aliquam unde itaque?
                        </p>

                        <div className="center gap-3 w-full md:w-9/12">
                            <Button
                                text="Learn more"
                                className="bg-primary text-white "
                            />

                            <Button
                                text="Contact us"
                                className="border border-primary bg-transparent text-primary "
                            />

                        </div>
                    </div>

                    <img src={hero} alt="Hero Image" className="w-full md:w-10/12 xl:w-9/12"/>
                </div>
            </section>

            <section className="bg-secondary py-[10vh] mt-[20vh] center text-center flex-col gap-5 min-h-[30vh] w-full mb-[15vh]">
                    <h2 className="text-primary font-semibold text-4xl md:text-5/12 w-11/12 lg:w-6/12">
                        Explore our services
                    </h2>
                    <div className="center gap-4 w-11/12 flex-wrap">
                        {
                            servicesList.map((service, i) => (
                                <p key={i} className="text-white underline cursor-pointer">
                                    {service.title}
                                </p>
                            ))
                        }
                    </div>

                    <Button 
                        text="Get started"
                        className="bg-transparent border border-white text-white w-[200px]"
                    />
            </section>
        </>
    )
}