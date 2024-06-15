import { BsArrowRight, BsEnvelopeFill, BsGeoAltFill, BsInstagram, BsTelephoneOutboundFill, BsWhatsapp } from "react-icons/bs"
import { InputFieldInterface } from "../../assets/Interfaces"
import { ChangeEvent, FC, useState } from "react"
import { Button } from "../../assets/components/Button"
import { FaFacebook } from "react-icons/fa6"

const contactInfo = [
    {
        icon: <BsTelephoneOutboundFill />,
        contact: "+1 012 3826 781",
    },
    {
        icon: <BsEnvelopeFill />,
        contact: "hello@edentravels.com",
    },
    {
        icon: <BsGeoAltFill />,
        contact: "152 Dartmouth Street Boston, Massachusetts 02156 United States",
    }
]
const socialLinks = [
    <FaFacebook/>, <BsWhatsapp/>, <BsInstagram/>
]

const ContactPage = () => {
    const [ formInputs, setFormInputs ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        subject: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        })
    }


    return(
        <main className="center flex-col w-full pt-[20vh] pb-[10vh] bg-white">
            <div className="w-11/12 lg:w-10/12 center flex-col gap-9 text-primary">
                <div className="center gap-3 text-center">
                    <BsEnvelopeFill className="text-4xl"/>
                    <h1 className="font-bold text-4xl">
                        Contact Us
                    </h1>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-[50px] lg:gap-[25px] xl:gap-[50px] p-2 rounded-xl bg-white min-h-[80vh] shadow-2xl">
                    <div className="bg-secondary flex flex-col justify-start text-gray-300 p-9 py-[6vh] rounded-t-xl lg:rounded-r-none lg:rounded-l-xl relative overflow-hidden w-full lg:w-5/12 gap-[10vh] lg:gap-9">

                            <h2 className="text-primary text-2xl font-semibold">Contact Information</h2>
                        <div className="flex flex-col gap-5">
                            {
                                contactInfo.map((contact, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <div className="text-xl text-white">
                                            {contact.icon}
                                        </div>

                                        <p>{contact.contact}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="flex gap-4 ">
                            {
                                socialLinks.map((link, i) => (
                                    <div key={i} className="center h-8 w-8 rounded-xl bg-[#000] text-white hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
                                        {link}
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    <div className="w-full lg:w-7/12 flex flex-col p-9 py-[6vh]">
                        <form className="flex flex-col md:grid md:grid-cols-2 gap-6 gap-y-9">
                            <InputField 
                                label="First Name"
                                type="text"
                                name="firstName"
                                handleChange={handleChange}
                                value={formInputs.firstName}
                            />
                            <InputField 
                                label="Last Name"
                                type="text"
                                name="lastName"
                                handleChange={handleChange}
                                value={formInputs.lastName}
                            />
                            <InputField 
                                label="Email"
                                type="email"
                                name="email"
                                handleChange={handleChange}
                                value={formInputs.email}
                            />
                            <InputField 
                                label="Phone Number"
                                type="number"
                                name="phoneNumber"
                                handleChange={handleChange}
                                value={formInputs.phoneNumber}
                            />
                            <InputField 
                                label="Subject"
                                type="subject"
                                name="subject"
                                className="col-span-2"
                                handleChange={handleChange}
                                value={formInputs.phoneNumber}
                            />

                            <InputField 
                                className="col-span-2"
                                label="Message"
                                type="text"
                                name="message"
                                placeholder="Write your message"
                                handleChange={handleChange}
                                value={formInputs.message}
                            />

                            <div className="flex items-center lg:justify-end w-full lg:col-span-2">
                                <Button 
                                    className="text-primary bg-secondary flex items-center h-fit py-3 font-bold w-fit px-9"
                                    text="Send Message" 
                                    icon={<BsArrowRight className="ml-3 "/>}
                                />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default ContactPage


const InputField:FC<InputFieldInterface> = ({type, label, className, handleChange, name, value, placeholder}) => {
    return(
        <div className={`flex flex-col w-full gap-2 text-sm ${className}`}>
            <label htmlFor={label} className={`${value !== "" ? "font-bold text-primary" : "text-gray-600"}`}>{label}</label>


            <input 
                type={type}
                onChange={(e) => handleChange(e)}
                name={name}
                placeholder={placeholder || label}
                className={`p-2 rounded-tl-xl rounded-br-xl bg-transparent outline-none border ${value !== "" ? "border focus:border-primary" : " border-gray-400"} hover:border hover:border-primary cursor-pointer`}
            />
        </div>
    )
}