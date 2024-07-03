import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import logo from "../images/Eden travels sm.png"
import { RiWhatsappFill } from "react-icons/ri"


const FooterLinks = [
    {
        header: "Links",
        to: "",
        links: ["Home", "About", "Services", "Courses", "Jobs", "Contact"]
    },
    {
        header: 'Services',
        to: "services",
        links: ["Travel Arrangements", "Travel Packages and Insurance", "Travel Documentation and Corporate Services"]
    },
    {
        header: "Courses",
        to: "courses",
        links: ["Customer and Sales", "Operational and Crisis Management", "Destination and Technology"]
    },
]

export const ContactInfo = [
    {
        icon: <BsGeoAltFill />,
        contact: 'Lagos, Nigeria',
        link: "#"
    },
    {
        icon: <BsEnvelopeFill />,
        contact: 'hello@edenclassic.com',
        link: "mailto:hello@edenclassic.com"
    },
    {
        icon: <BsTelephoneFill />,
        contact: '+234 912 939 7279',
        link: "tel:+2349129397279"
    },
    {
        icon: <RiWhatsappFill />,
        contact: '+234 815 788 6733',
        link: "https://api.whatsapp.com/send?phone=2348157886733"
    },
]


const Footer = () => {
    return(
        <footer className="w-full center flex-col bg-white pt-[10vh] lg:pt-[15vh] border-t border-primary">
            <div className="w-11/12 lg:w-10/12 flex flex-col gap-6 text-gray-900 z-10">
                <div className="flex flex-col md:grid md:grid-cols-4 xl:grid-cols-8 gap-y-9 md:gap-9">

                    <div className="flex flex-col gap-2 col-span-2 xl:col-span-3">
                        {/* <img src={logo} alt="Eden Travels and Tour Logo" className="w-4/12"/> */}
                        <h2 className="text-3xl text-black font-bold">Onidson travel & and tours</h2>
                     

                        <div className="flex flex-col gap-3 mt-6 ">
                        {
                            ContactInfo.map((info, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    {info.icon}

                                    <a href={info.link}>{info.contact}</a>
                                </div>
                            ))
                    }
                </div>
                    </div>


                    {
                        FooterLinks.map((link, i) => (
                            <div key={i} className={`flex flex-col gap-4 w-full ${i ==0 ? "" : "col-span-2"}`}>
                                <h3 className="text-black font-semibold text-lg">{link.header}</h3>

                                <div className="flex flex-col gap-4 text-sm text-gray-900">
                                    {
                                        link.links.map((l, i) => (
                                            <Link key={i} to={`${link.to}/${l.replace(" ", "-").replace(" ", "-").replace(" ", "-").replace(" ", "-").toLowerCase()}`}>
                                                {l}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

               

            </div>
            <div className="justify-center w-full items-center text-center flex flex-col gap-3 mt-[10vh] py-6 bg-secondary border-t border-primary text-white">
                <p className="w-full lg:w-fit">Copyright © {new Date().getFullYear()}</p>

                <p className="w-full lg:w-fit">All Rights Reserved </p>
            </div>
        </footer>
    )
}

export default Footer