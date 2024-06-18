import { FC } from "react"
import { Button } from "../../../assets/components/Button"
import { HeroComponentInterface } from "../../../assets/Interfaces"
import { BreadCrumbs } from "../../../assets/components/BreadCrumbs"
import { BsTelephoneFill } from "react-icons/bs"



export const ServicesHero:FC<HeroComponentInterface> = ({heroHeader, desc, img, data, dataHeader, type, breadLinks}) => {
    return(
        <>
            <section className={`min-h-[75vh] bg-white w-full flex items-start lg:items-center justify-center relative  ${type == "row" ? "pt-[15vh] lg:pt-[10vh]" : "pt-[15vh] md:pt-[10vh] lg:pt-[20vh]"}`}> 
                <div className={`w-11/12 lg:w-10/12 flex ${type == "row" ? "flex-col lg:flex-row" : "flex-col text-center"}   items-center justify-center z-10 gap-[50px]`}>
                    <div className={`${type == "row" ? "flex items-start " : "center" }  flex-col gap-5 w-full xl:w-9/12`}>
                        <h1 className="font-bold text-4xl md:text-5xl text-secondary">{heroHeader}</h1>

                        <p className="leading-relaxed tracking-wide w-full md:w-10/12 xl:w-9/12">
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

                    <img src={img} alt="Hero Image" className={`w-full ${type == "row" ? "w-full lg:w-5/12" : "md:w-10/12 xl:w-9/12 "} shadow-xl rounded-xl`}/>
                </div>
            </section>

            <BreadCrumbs links={breadLinks} />


            <section id={"pageLinks"} className="bg-secondary py-[10vh] mt-[10vh] center text-center flex-col gap-5 min-h-[30vh] w-full">
                    <h2 className="text-primary font-semibold text-4xl md:text-5/12 w-11/12 lg:w-6/12">
                        {dataHeader}
                    </h2>
                    <div className="center gap-4 w-11/12 flex-wrap">
                        {
                            data.map((service: any, i:number) => (
                                <p key={i} className="text-white underline cursor-pointer" onClick={() => {
                                    document.querySelector(`#${service.title.replaceAll(" ", "")}`)?.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                }}>
                                    {service.title}
                                </p>
                            ))
                        }
                    </div>

                    <Button 
                        text="Get started"
                        className="bg-black text-primary w-[200px]"
                        navigateTo="contact"
                        icon={
                            <BsTelephoneFill />
                        }
                    />
            </section>
        </>
    )
}