import { useEffect, useState } from "react"
import { servicesList } from "../../../assets/Constants"
import { ListingCardParent } from "../../../assets/components/Card/ListingCardParent"
import { ServicesHero } from "../sections/ServicesHero"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../assets/store/AppStore"
import { ImageText } from "../../../assets/components/ImageText"
import { ImageExtras } from "../../../assets/components/ImageExtras"
import { FaPassport, FaPlane, FaSuitcase } from "react-icons/fa6"
import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav } from "../../../assets/store/navigation/navigationSlice"
import planaTakeOff from "../../../assets/images/planaTakeOff.jpg"
import girlTour from "../../../assets/images/girlTour.jpg"
import travelDoc from "../../../assets/images/travelDoc.jpg"
import { BeforeFooter } from "../../../assets/components/BeforeFooter"

const serviceImageExtras = [
    {
        icon: <FaPlane className="text-lg" />,
        iconBg: "bg-blue-700",
        topText: <p className="font-bold">Easy Booking</p>,
        bottomText: <p className="text-gray-400">Flights, Accommodations, Transportation</p>
      },
      {
        icon: <FaSuitcase className="text-lg" />,
        iconBg: "bg-yellow-700",
        topText: <p className="font-bold">Comprehensive Packages</p>,
        bottomText: <p className="text-gray-400">Tailored Trips & Insurance</p>
      },
      {
        icon: <FaPassport className="text-lg" />,
        iconBg: "bg-red-700",
        topText: <p className="font-bold">Efficient Services</p>,
        bottomText: <p className="text-gray-400">Visas, Passports, Corporate Travel</p>
      }
    ]

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
                    heading={ servicePageIndex === 0
                        ? "Effortless Travel Arrangements"
                        : servicePageIndex === 1
                        ? "Tailored Travel Packages and Comprehensive Insurance"
                        : "Expert Travel Documentation and Corporate Services"
                    }
                    desc={
                        servicePageIndex === 0
                            ? "Book flights, accommodations, and transportation with ease. Our team ensures your travel arrangements are seamless and hassle-free."
                            : servicePageIndex === 1
                            ? "Explore customized travel packages and secure travel insurance. We offer solutions for unforgettable trips with peace of mind."
                            : "Handle your travel documentation and corporate travel needs efficiently. From visa services to corporate travel plans, we have you covered."
                    }
                    img={
                        servicePageIndex === 0 ?
                        planaTakeOff : 
                        servicePageIndex === 1 ?
                        girlTour :
                        travelDoc
                    }>
                    <>
                        <div className="absolute -bottom-5 right-[50%]">
                            <ImageExtras 
                                icon={serviceImageExtras[servicePageIndex].icon}
                                iconBg={serviceImageExtras[servicePageIndex].iconBg}
                                topText={<p className="font-bold">{serviceImageExtras[servicePageIndex].topText}</p>}
                                bottomText={<p className="text-gray-400">
                                    {serviceImageExtras[servicePageIndex].bottomText}
                                </p>}
                            />
                        </div>
                    </>
                    
                    </ImageText>
                    <BeforeFooter 
                        text="Contact us now to book your next flight"
                    />
                </>
            }

        </>
    )
}



export default EachServicePage