import { ImageExtras } from "../../assets/components/ImageExtras"
import { ImageText } from "../../assets/components/ImageText"
import { ImageListing } from "../../assets/components/ImageListing"
import { Hero } from "./sections/Hero"
import planeRun from "./../../assets/images/planeRun.jpg"
import { CardParent } from "../../assets/components/Card/CardParent"
import { servicesList, coursesList } from "../../assets/Constants"
import { FaPlaneArrival } from "react-icons/fa6"
import dubai from "../../assets/images/dubai.jpg"
import paris from "../../assets/images/paris.jpg"
import canada from "../../assets/images/canada.jpg"
import newYork from "../../assets/images/new york.jpg"
import { Button } from "../../assets/components/Button"

const visitablePlaces = [
    {
        img: dubai,
        text: "Dubai"
    },
    {
        img: paris,
        text: "Paris"
    },
    {
        img: canada,
        text: "Canada"
    },
    {
        img: newYork,
        text: "New York"
    },
]


const HomePage: React.FC = () => {
    return(
        <div className="center bg-white flex-col mb-[10vh]">
            <Hero />
            <ImageListing data={visitablePlaces} heading="Travel anywhere, anytime!"/>

            <section className="bg-secondary py-[10vh] center text-center flex-col gap-5 min-h-[30vh] w-full my-[20vh]">
                    <h2 className="text-primary font-semibold text-4xl md:text-5/12 w-11/12 lg:w-6/12">
                        Lorem, ipsum dolor Lorem ipsum dolor sit.
                    </h2>

                    <Button 
                        text="Contact us now"
                        className="bg-transparent border border-white text-white w-[200px]"
                        navigateTo="contact"
                    />
            </section>


            <CardParent 
                data={servicesList}
                heading="Our Services"
                description="View all services tailored to your needs"
                parentNav={"services"}
            />
            
            
            <ImageText
                heading={"Lorem ipsum dolor sit amet."} 
                span={"Lorem, ipsum dolor."}
                desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nihil minima neque, optio quod quae officiis voluptatibus nesciunt quasi doloribus."}
                img={planeRun}
            >



                <div className="absolute -bottom-5 left-[50%]">
                    <ImageExtras 
                        icon={<FaPlaneArrival className="text-lg"/>}
                        iconBg={"bg-secondary"}
                        topText={<p className="font-bold">100+</p>}
                        bottomText={<p className="text-gray-400">
                            Successful Flights
                        </p>}
                    />
                </div>
            </ImageText>

            <CardParent 
                data={coursesList}
                heading="We train"
                description="View all our cources to secure your space in the air-space"
                parentNav={"trainings"}
            />
            {/* 
                Visitable Places

                Call to action

                who we are - about us  not compulsory

                our services - read more

                trainings

                jobs - read more            
            */}
        </div>
    )
}


export default HomePage