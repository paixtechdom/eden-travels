import { FC } from "react"
import { Button } from "./Button"
import { HeroComponentInterface } from "../Interfaces"
import { BreadCrumbs } from "./BreadCrumbs"
import { BsTelephoneFill } from "react-icons/bs"
import { Parallax } from "./Parallax"
import { ImageListing } from "./ImageListing"
import bus1 from "../images/buses/buses 1.jpg"
import bus2 from "../images/buses/buses 2.jpg"
import bus3 from "../images/buses/buses 3.jpg"
import siena1 from "../images/buses/siena 2.png"
import dubai from "../images/dubai.jpg"
import paris from "../images/paris.jpg"
import canada from "../images/canada.jpg"
import newYork from "../images/new york.jpg"

export const travelPlaces = [
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

const visitablePlaces = [
    {
        img: bus1,
        text: "Safe"
    },
    {
        img: bus2,
        text: "Fast"
    },
    {
        img: bus3,
        text: "Comfort"
    },
    {
        img: siena1,
        text: "Neat"
    },
]


export const OtherHeros:FC<HeroComponentInterface> = ({heroHeader, desc, img, data, dataHeader, type, breadLinks}) => {
    return(
        <>
            <section className={`min-h-[75vh] bg-white w-full flex items-start lg:items-center justify-center relative  ${type == "row" ? "pt-[15vh] lg:pt-[10vh]" : "pt-[15vh] md:pt-[10vh] lg:pt-[20vh]"}`}> 
                <div className={`w-11/12 lg:w-10/12 flex ${type == "row" ? "flex-col lg:flex-row" : "flex-col text-center"}   items-center justify-center z-10 gap-[50px]`}>
                    <Parallax id={heroHeader} className="w-full xl:w-9/12">

                        <div className={`${type == "row" ? "flex items-start " : "center" }  flex-col gap-5 w-full`}>
                            <h1 className="font-bold text-4xl md:text-5xl text-secondary">{heroHeader}</h1>

                            <p className="leading-relaxed tracking-wide w-full">
                            {desc}
                            </p>

                            <div className={`${type == "row" ? "flex" : "center"}  gap-3 w-full md:w-9/12`}>
                                <Button
                                    text="Learn more"
                                    className="bg-secondary text-white "
                                    scrollTo="pageLinks"
                                />

                                <Button
                                    text="Contact us"
                                    className="border border-secondary bg-transparent text-secondary "
                                    navigateTo="contact"
                                    icon={
                                        <BsTelephoneFill />
                                    }
                                />

                            </div>
                        </div>
                    </Parallax>
                    <img 
                        src={img} 
                        alt={"Hero Image"} 
                        className={`w-full lg:w-5/12 shadow-xl rounded-xl`}
                    />
                </div>
            </section>

            <BreadCrumbs links={breadLinks} />
            <div className="-mt-[10vh] mb-[20vh]">

            {
                heroHeader == "Interstate Travelling" ?
                <ImageListing data={visitablePlaces} heading="Book your next journey now"/> :
                heroHeader == "Flight Services" ? 
                <ImageListing data={travelPlaces} heading="Book your next flight now"/>
                : ''
                
            }
            </div>


            <section id={"pageLinks"} className="bg-primary bg-opacity-5 py-[10vh] mt-[10vh] center text-center flex-col gap-5 min-h-[30vh] w-full border-y border-primary">
                    <h2 className="text-secondary font-semibold text-4xl md:text-5/12 w-11/12 lg:w-6/12">
                        {dataHeader}
                    </h2>
                    <div className="center gap-4 w-11/12 flex-wrap">
                        {
                            data.map((d: any, i:number) => (
                                <p key={i} className="text-black underline cursor-pointer" onClick={() => {
                                    document.querySelector(`#${d.title.replaceAll(" ", "")}`)?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                }}>
                                    {d.title}
                                </p>
                            ))
                        }
                    </div>

                    <Button 
                        text="Get started"
                        className="bg-transparent border border-secondary shadow-xl text-black"
                        navigateTo="contact"
                        icon={
                            <BsTelephoneFill />
                        }
                    />
            </section>
        </>
    )
}