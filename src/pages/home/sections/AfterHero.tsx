import { Link } from "react-router-dom"
import { BiChevronRight } from "react-icons/bi"
import newYork from "../../../assets/images/new york.jpg"
import paris from "../../../assets/images/paris.jpg"
import canada from "../../../assets/images/canada.jpg"
import dubai from "../../../assets/images/dubai.jpg"
import { Button } from "../../../assets/components/Button"


const visitablePlaces = [
    {
        img: dubai,
        location: "Dubai"
    },
    {
        img: paris,
        location: "Paris"
    },
    {
        img: canada,
        location: "Canada"
    },
    {
        img: newYork,
        location: "New York"
    },
]

export const AfterHero : React.FC =  () => {
    return(
<>
            <section className="w-full center flex-col text-center gap-9 mt-[20vh] lg:mt-0">
                <h2 className="text-3xl font-semibold tracking-wide leading-relaxed">
                    Travel anywhere, anytime!
                </h2>
                <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row rounded-2xl gap-6">
                    
                    {
                        visitablePlaces.map((place, i) => (
                            <div key={i} className="center relative rounded-xl overflow-hidden w-full cursor-pointer">
                                <img src={place.img} alt={place.location} className="w-full hover:scale-110 transition-all duration-500"/>

                                <p className="absolute top-3 left-3 text-sm font-bold px-3 bg-gray-200 p-2 bg-opacity-75 rounded-lg w-fit shadow">{place.location}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="bg-primary py-[10vh] center text-center flex-col gap-5 min-h-[30vh] w-full my-[20vh]">
                    <h2 className="text-white font-semibold text-4xl md:text-5/12 w-9/12 lg:w-6/12">
                        Lorem, ipsum dolor Lorem ipsum dolor sit.
                    </h2>

                    <Button 
                        text="Get started"
                        className="bg-transparent border border-white text-white w-[200px]"
                    />
            </section>

        </>
    )
}