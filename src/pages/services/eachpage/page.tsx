import { useEffect, useState } from "react"
import { servicesList } from "../../../assets/Constants"
import { ListingCardParent } from "../../../assets/components/Card/ListingCardParent"
import { OtherHeros } from "../../../assets/components/OtherHeros"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../assets/store/AppStore"
import { ImageText } from "../../../assets/components/ImageText"
import { ImageExtras } from "../../../assets/components/ImageExtras"
import { FaPassport, FaPlane, FaSuitcase } from "react-icons/fa6"
import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav } from "../../../assets/store/navigation/navigationSlice"
import planaTakeOff from "../../../assets/images/planaTakeOff.jpg"
import logisticsImg from "../../../assets/images/logisticsImg.jpg"
import naija from "../../../assets/images/naija.jpg"
import { BeforeFooter } from "../../../assets/components/BeforeFooter"
import { Helmet } from "react-helmet-async"

const serviceImageExtras = [
    {
        icon: <FaPlane className="text-lg" />,
        iconBg: "bg-blue-700",
        topText: <p className="font-bold">100%</p>,
        bottomText: <p className="text-gray-400">Easy Booking</p>
      },
      {
        icon: <FaSuitcase className="text-lg" />,
        iconBg: "bg-yellow-700",
        topText: <p className="font-bold">100%</p>,
        bottomText: <p className="text-gray-400">Insurance</p>
      },
      {
        icon: <FaPassport className="text-lg" />,
        iconBg: "bg-red-700",
        topText: <p className="font-bold">100%</p>,
        bottomText: <p className="text-gray-400">Efficient Services</p>
      }
    ]

const EachServicePage = () => {
    const [ servicePageIndex, setServicePageIndex ] = useState(6)
    const dispatch = useDispatch()

    const navigation = useSelector((state: RootState) => state.navigation)

    const currentNav = navigation.currentNav
    const currentDropDownIndex = navigation.currentDropDownIndex

    useEffect(() => {
        setServicePageIndex(currentNav == 2 ? currentDropDownIndex : 0)

        servicesList?.forEach((service, i) => {
            if(document.URL.includes(service.title.replace(" ", "-").replace(" ", "-").replace(" ", "-").replace(" ", "-").toLowerCase()) ){
                setServicePageIndex(i)
                dispatch(setCurrentNav(2))
                dispatch(setCurrentDropDownIndex(i))
                dispatch(setCurrentDropDown(""))
            }        
        })
        scrollTo({
            top: 0,
            behavior: "smooth" 
        })

    }, [currentDropDownIndex, document.URL])
    
    const metaConstants = [
        {
            title: "Flight Services",
            desc: "Discover top-notch flight services including flight training, aircraft maintenance, and charter services. Enhance your aviation career with our expert solutions."
        },
        {
            title: "Logistic Services",
            desc: "Discover efficient logistics solutions tailored for seamless delivery operations. From courier services to comprehensive freight management, optimize your logistics with our reliable solutions."
        },
        {
            title: "Interstate Travelling",
            desc: "Explore seamless interstate travel services across Nigeria. From bus and car rentals to train services, travel comfortably and conveniently with our reliable transportation solutions"
        }
    ];
    
    
    return(
        <>
              <Helmet>
                    <title>
                        {`${metaConstants[servicePageIndex]?.title} -  Onidson Travels and Tours Ltd`}
                    </title>
                    <meta name="description" content={`${metaConstants[servicePageIndex]?.desc}`} />
                </Helmet>


            {
                    servicePageIndex == 6 ?
                    <div className="min-h-screen"></div> : 
                <>
                    <OtherHeros
                        heroHeader={servicesList[servicePageIndex].title}
                        desc={servicesList[servicePageIndex].desc}
                        img={servicesList[servicePageIndex].img}
                        data={servicesList[servicePageIndex].sub}
                        dataHeader={`Explore our ${servicesList[servicePageIndex].title} services`}
                        breadLinks={["Home", "Services", servicesList[servicePageIndex].title]}
                        type="row"
                    />

                    {
                    servicesList[servicePageIndex]?.sub?.map((service, i) => (
                    <ListingCardParent 
                        key={i}
                        data={service.sub}
                        heading={service.title}
                        desc={service.desc}
                        parentNav={"services/"+service.title.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()}
                    />

                    ))
                    }


                 <ImageText 
                    span={ servicePageIndex === 0
                        ? "Effortless Flight Arrangements"
                        : servicePageIndex === 1
                        ? "Efficient Logistics Solutions"
                        : "Effortless Interstate Travel"
                    }
                    desc={
                        servicePageIndex === 0
                            ? "Book flights, accommodations, and transportation with ease. Our team ensures your travel arrangements are seamless and hassle-free."
                            : servicePageIndex === 1
                            ? "Simplify your logistics with our comprehensive solutions. From courier services to freight management, we streamline your delivery operations for optimal efficiency and reliability."
                            : "Simplify your interstate travel with our seamless booking services for buses, car rentals, and train journeys across Nigeria. Whether you're planning a business trip or a leisurely adventure, we ensure your travel arrangements are convenient and stress-free."
                    }
                    img={
                        servicePageIndex === 0 ?
                        planaTakeOff : 
                        servicePageIndex === 1 ?
                        logisticsImg :
                        naija
                    }>
                    <>
                        <div className="absolute -bottom-5 right-[45%]">
                            <ImageExtras 
                                icon={serviceImageExtras[servicePageIndex].icon}
                                iconBg={serviceImageExtras[servicePageIndex].iconBg}
                                topText={<span className="font-bold">{serviceImageExtras[servicePageIndex].topText}</span>}
                                bottomText={<span className="text-gray-400">
                                    {serviceImageExtras[servicePageIndex].bottomText}
                                </span>}
                            />
                        </div>
                    </>
                    
                    </ImageText>
                    <BeforeFooter 
                        text="Contact us now to get started"
                    />
                </>
            }

        </>
    )
}



export default EachServicePage