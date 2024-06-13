import { servicesList } from "../../../assets/Constants"
import { Button } from "../../../assets/components/Button"

export const Services = () => {
    return(
        <div className="w-full center flex-col gap-9 pb-[20vh]">
            <div className="flex flex-col items-center text-center gap-4">
                <h2 className="font-semibold text-4xl md:text-5/12">Our Services</h2>
                <p className="w-11/12 lg:w-9/12">Lorem ipsum dolor sit amet, consectOur servicesetur adipisicing elit. Labore, voluptatem!</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 lg:w-10/12 gap-9">
                {
                    servicesList.map((service, i) => (
                        <div key={i} className="flex flex-col gap-6 w-full shadow-lg rounded-xl p-2 bg-gray-100">
                            <div className="center w-full overflow-hidden rounded-t-xl">
                                <img src={service.img} alt={service.title} className="w-full transition-all duration-500 hover:scale-110 active:scale-110"/>
                            </div>

                            <div className="flex flex-col gap-3 p-3">
                                <p className="font-bold">{service.title}</p>

                                <div className="flex flex-wrap lg:flex-row gap-3">
                                    {
                                        service.subservices.map((subservice, i) => (
                                            <p key={i} className="rounded-lg shadow-lg center bg-white p-2 text-gray-700 w-fit text-sm">
                                                {subservice.title}
                                            </p>
                                        ))
                                    }
                                </div>

                                <Button text="Read more"
                                    className="bg-primary text-white font-semibold w-fit mt-4 text-sm"
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}