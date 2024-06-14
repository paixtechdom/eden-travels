import { useEffect, useState } from "react"
import { servicesList } from "../../../assets/Constants"
import { ListingCardParent } from "../../../assets/components/Card/ListingCardParent"
import { ServicesHero } from "../sections/ServicesHero"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../assets/store/AppStore"
import { ImageText } from "../../../assets/components/ImageText"
import { ImageExtras } from "../../../assets/components/ImageExtras"
import { PiCheck } from "react-icons/pi"
import { FaPlaneDeparture } from "react-icons/fa6"
import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav } from "../../../assets/store/navigation/navigationSlice"


const EachServicePage = () => {
    const [ servicePageIndex, setServicePageIndex ] = useState(6)
    const dispatch = useDispatch()

    const navigation = useSelector((state: RootState) => state.navigation)

    const currentNav = navigation.currentNav
    const currentDropDownIndex = navigation.currentDropDownIndex

    useEffect(() => {
        setServicePageIndex(currentNav == 1 ? currentDropDownIndex : 0)

        servicesList.forEach((service, i) => {
            if(document.URL.includes(service.title.replace(" ", "-").replace(" ", "-").replace(" ", "-").replace(" ", "-").toLowerCase()) ){
                setServicePageIndex(i)
                dispatch(setCurrentNav(1))
                dispatch(setCurrentDropDownIndex(i))
                dispatch(setCurrentDropDown(""))
            }        
        })
        scrollTo({
            top: 0,
            behavior: "smooth" 
        })

    }, [currentDropDownIndex, document.URL])
    
    return(
        <>
            {
                    servicePageIndex == 6 ?
                    <div className="min-h-screen"></div> : 
                <>
                    <ServicesHero
                        heroHeader={servicesList[servicePageIndex].title}
                        desc={servicesList[servicePageIndex].desc}
                        img={servicesList[servicePageIndex].img}
                        data={servicesList[servicePageIndex].sub}
                        dataHeader={`Explore our ${servicesList[servicePageIndex].title} services`}
                    />

                    {
                    servicesList[servicePageIndex]?.sub?.map((service, i) => (
                    <ListingCardParent 
                        key={i}
                        data={service.sub}
                        heading={service.title}
                        parentNav={"services/"+service.title.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()}
                    />

                    ))
                    }


                 <ImageText 
                    heading="Lorem lorem is a lorem"
                    desc="Lorem is hated by lorem and then Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ipsa eos nemo assumenda optio."
                    img={servicesList[servicePageIndex].img}>
                    <>
                        <div className="absolute -bottom-5 right-[50%]">
                            <ImageExtras 
                                icon={<PiCheck className="text-lg"/>}
                                iconBg={"bg-green-700"}
                                topText={<p className="font-bold">100+</p>}
                                bottomText={<p className="text-gray-400">
                                    Successful Flights
                                </p>}
                            />
                        </div>
                        <div className="absolute -top-5 left-[50%]">
                            <ImageExtras 
                                icon={<FaPlaneDeparture className="text-lg"/>}
                                iconBg={"bg-secondary"}
                                topText={<p className="font-bold">100+</p>}
                                bottomText={<p className="text-gray-400">
                                    Successful Flights
                                </p>}
                            />
                        </div>
                    </>
                    
                    </ImageText>
                </>
            }

         {/* image text */}
        </>
    )
}



export default EachServicePage