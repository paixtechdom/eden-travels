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
import { BeforeFooter } from "../../assets/components/BeforeFooter"
import { Helmet } from "react-helmet-async"
import { Parallax } from "../../assets/components/Parallax"

export const visitablePlaces = [
    {
        img: dubai,
        text: "Dubai"
    },
    {
        img: newYork,
        text: "USA"
    },
    {
        img: paris,
        text: "Paris"
    },
    {
        img: canada,
        text: "Canada"
    },
]


const HomePage: React.FC = () => {
    return(
        <>
         <Helmet>
                <title>
                Eden Travels and Tours
                </title>
                <meta name="description" content="Explore the world with Eden Travels and Tours - personalized tour packages, flight bookings, travel insurance, and professional training. Discover seamless journeys and exceptional travel experiences. Contact us today!" />
            </Helmet>
        <main className="center bg-white flex-col">
            <Hero />
            <ImageListing data={visitablePlaces} heading="Travel anywhere, anytime!"/>

            <section className="bg-secondary py-[10vh] center text-center flex-col gap-5 min-h-[30vh] w-full mt-[20vh] mb-[10vh] lg:mb-0">
                    <Parallax id="atartplanning" className="w-full center">
                    <h2 className="text-primary font-semibold text-4xl md:text-5/12 w-11/12 lg:w-6/12">
                        Start Planning for Your Next Journey
                    </h2>
                    </Parallax>

                    <Parallax id="atartplanningbtn" className="w-full center">
                    <Button 
                        text="Contact us now"
                        className="bg-black border border-secondary text-primary w-[200px]"
                        navigateTo="contact"
                        />
                    </Parallax>
            </section>


            <CardParent 
                data={servicesList}
                heading="Our Services"
                description="View all services tailored to your needs"
                parentNav={"services"}
            />
            
            
            <ImageText
                heading={"Elevate Your Travel Experience with Our"} 
                span={" Expert Services"}
                desc={"Whether you need help with flight bookings, personalized tour packages, or professional travel training, we are here to make your journeys seamless and memorable. Discover the difference with our dedicated team of travel experts."}
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
                heading="Our Aviation Courses"
                description="View all our cources to secure your space in the air-space"
                parentNav={"courses"}
            />


           <BeforeFooter 
            text="Contact us now to book your next flight"
           />



            {/* 
                Visitable Places

                Call to action

                who we are - about us  not compulsory

                our services - read more

                trainings

                jobs - read more            
            */}
        </main>
        </>
    )
}


export default HomePage