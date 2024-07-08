import { BsArrowRight, BsEnvelopeFill, BsGeoAltFill, BsTelephoneFill } from "react-icons/bs"
import { InputFieldInterface } from "../../assets/Interfaces"
import { ChangeEvent, FC, useState } from "react"
import { Button } from "../../assets/components/Button"
import { BreadCrumbs } from "../../assets/components/BreadCrumbs"
import { Helmet } from "react-helmet-async"
import { RiWhatsappFill } from "react-icons/ri"
import { BiLoaderAlt } from "react-icons/bi"
import { formatId } from "../../assets/Functions"
import axios from "axios"

const contactInfo = [
    {
        icon: <BsGeoAltFill />,
        contact: "Lagos, Nigeria",
        link: "#"
    },
    {
        icon: <BsEnvelopeFill />,
        contact: "hello@onidsontravels.com",
        link: "mailto:hello@edenclassic.com"
    },
    {
        icon: <BsTelephoneFill />,
        contact: "+234 912 939 7279",
        link: "tel+2349129397279"
    },
    {
        icon: <RiWhatsappFill />,
        contact: "+234 815 788 6733",
        link: "https://api.whatsapp.com/send?phone=2348157886733"
    },
]
// const socialLinks = [
//     <FaFacebook/>, <BsWhatsapp/>, <BsInstagram/>
// ]

const ContactPage = () => {
    const [ formInputs, setFormInputs ] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        subject: ""
    })
    const [ loading, setLoading ] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: formatId(e.target.value).replace(/\n/g, '<br>')
        })
    }

    const handleSubmit = (e : any) => {
        e.preventDefault()
        setLoading(true)
        if(formInputs.fullName == "" || formInputs.fullName.length < 2){
            alert("Invalid Full Name")
        }else if(formInputs.subject == "" || formInputs.subject.length < 2) {
            alert("Invalid Subject")
        }
        else if(formInputs.message == "" || formInputs.message.length < 2) {
            alert("Invalid Message")
        }
        else{
            // const subject = 'Message from ' +formInputs.fullName + ' to Onidson Travels and Tours'
            // sendContactEmail(subject)
            isError()
        }

        setLoading(false)
        
    }


    // const sendContactEmail = (subject:string) => {
    //     const newMessage = formInputs.message.replace(/\n/g, '<br>')

    //     axios.post(`contactEmail.php` ,{
    //         subject: subject,
    //         message: newMessage.replace(/\n/g, '<br>'),
    //         phoneNumber: formInputs.phoneNumber,
    //         from: formInputs.email,
    //         name: formInputs.fullName,
    //       }, {
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       })
    //       .then((response) => {
    //           if(response.data.success == true){
    //             alert("Message sent successfully")
    //             setFormInputs({
    //                 fullName: "",
    //                 email: "",
    //                 phoneNumber: "",
    //                 message: "",
    //                 subject: ""
    //             })
                
    //         }else{
    //             isError()
    //         }
    //     })
    //     .catch(() => {
    //         isError()
    //     });
        
    // }
    const isError = () => {
        alert("Error sending Message")
    }




    return(
        <>
            <Helmet>
                <title>
                    Contact Onidson travels and tours Ltd
                </title>
                <meta name="description" content={`Connect with Onidson travels and tours Ltd through our contact information. Reach us by phone at ${contactInfo[0].contact}, email us at  ${contactInfo[1].contact}, or visit us at  ${contactInfo[2].contact}. We're here to help!`} />
            </Helmet>            

            <main className="center flex-col w-full pt-[20vh] pb-[10vh] bg-white">
                <div className="w-11/12 lg:w-10/12 center flex-col text-secondary">
                    <div className="center gap-3 text-center">
                        <BsEnvelopeFill className="text-4xl"/>
                        <h1 className="font-bold text-4xl">
                            Contact Us
                        </h1>
                    </div>

                    <BreadCrumbs links={["Home", "Contact Us"]} />

                    <div className="w-full flex flex-col lg:flex-row gap-[50px] lg:gap-[25px] xl:gap-[50px] p-2 rounded-xl bg-white min-h-[80vh] shadow-2xl">
                        <div className="bg-secondary flex flex-col justify-start text-gray-300 p-6 md:p-9 py-[6vh] rounded-t-xl lg:rounded-r-none lg:rounded-l-xl relative overflow-hidden w-full lg:w-4/12  gap-[10vh]">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-primary text-2xl font-semibold">Contact Information</h2>
                                {/* <div className="flex gap-4 ">
                                    {
                                        socialLinks.map((link, i) => (
                                            <div key={i} className="center h-8 w-8 rounded-xl text-white hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
                                                {link}
                                            </div>
                                        ))
                                    }
                                </div> */}
                            </div>
                            <div className="flex flex-col gap-5">
                                {
                                    contactInfo.map((contact, i) => (
                                        <a href={`${contact.link}`} key={i} className="flex gap-3 items-start">
                                            <div className="text-xl text-white">
                                                {contact.icon}
                                            </div>

                                            <p>{contact.contact}</p>
                                        </a>
                                    ))
                                }
                            </div>

                            
                        </div>


                        <div className="w-full lg:w-7/12 flex flex-col p-6 md:p-9 py-[6vh]">
                            <form onSubmit={handleSubmit} className="flex flex-col md:grid md:grid-cols-2 gap-6 gap-y-9">
                                <InputField 
                                    label="Full Name"
                                    type="text"
                                    name="fullName"
                                    handleChange={handleChange}
                                    value={formInputs.fullName}
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
                                    handleChange={handleChange}
                                    value={formInputs.phoneNumber}
                                />



                                <MessageField 
                                    className="col-span-2"
                                    label="Message"
                                    name="message"
                                    placeholder="Write your message"
                                    handleChange={handleChange}
                                    value={formInputs.message}
                                />

                                <div className="flex items-center lg:justify-end w-full lg:col-span-2">
                                    <Button 
                                        className="text-primary bg-secondary flex items-center h-fit py-3 font-bold w-fit px-9"
                                        text={`${loading ? "Sending Message" : "Send Message"}`} 
                                        icon={
                                            loading ?
                                            <BiLoaderAlt className="animate-spin" /> :
                                        <BsArrowRight className="ml-3 "/>}
                                    />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


export default ContactPage


const InputField:FC<InputFieldInterface> = ({type, label, className, handleChange, name, value}) => {
    return(
        <div className={`flex flex-col w-full gap-2 text-sm ${className}`}>
            <label htmlFor={label} className={`${value !== "" ? "font-bold text-secondary" : "text-gray-600"}`}>{label}</label>


            <input 
                type={type}
                onChange={(e) => handleChange(e)}
                name={name}
                required
                className={`p-2 rounded-tl-xl rounded-br-xl bg-transparent outline-none border ${value !== "" ? "border focus:border-secondary" : " border-secondary"} hover:border hover:border-secondary cursor-pointer`}
            />
        </div>
    )
}


const MessageField:FC<InputFieldInterface> = ({label, className, handleChange, name, value, placeholder}) => {
    return(
        <div className={`flex flex-col w-full gap-2 text-sm ${className}`}>
            <label htmlFor={label} className={`${value !== "" ? "font-bold text-secondary" : "text-gray-600"}`}>{label}</label>


            <textarea 
                onChange={(e) => handleChange(e)}
                name={name}
                placeholder={placeholder || label}
                required
                className={`p-2 min-h-28 max-h-28 rounded-tl-xl rounded-br-xl bg-transparent outline-none border ${value !== "" ? "border focus:border-secondary" : " border-secondary"} hover:border hover:border-secondary cursor-pointer`}
            >

            </textarea>
        </div>
    )
}