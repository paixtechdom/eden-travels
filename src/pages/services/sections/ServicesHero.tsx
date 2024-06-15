import { FC } from "react"
import { Button } from "../../../assets/components/Button"
import { HeroComponentInterface } from "../../../assets/Interfaces"



export const ServicesHero:FC<HeroComponentInterface> = ({heroHeader, desc, img, data, dataHeader, type}) => {
    return(
        <>
            <section className={`min-h-[90vh] bg-white w-full flex items-start lg:items-center justify-center relative  ${type == "row" ? "pt-[15vh] lg:pt-[10vh]" : "pt-[15vh] md:pt-[10vh] lg:pt-[20vh]"}`}> 
                <div className={`w-11/12 lg:w-10/12 flex ${type == "row" ? "flex-col lg:flex-row" : "flex-col text-center"}   items-center justify-center z-10 gap-[50px]`}>
                    <div className={`${type == "row" ? "flex items-start " : "center" }  flex-col gap-5 w-full xl:w-9/12`}>
                        <h1 className="font-bold text-4xl md:text-5xl text-primary">{heroHeader}</h1>

                        <p className="leading-relaxed tracking-wide w-full md:w-10/12 xl:w-9/12">
                           {desc}
                        </p>

                        <div className={`${type == "row" ? "flex" : "center"}  gap-3 w-full md:w-9/12`}>
                            <Button
                                text="Learn more"
                                className="bg-primary text-white "
                                scrollTo="pageLinks"
                            />

                            <Button
                                text="Contact us"
                                className="border border-primary bg-transparent text-primary "
                                navigateTo="contact"
                            />

                        </div>
                    </div>

                    <img src={img} alt="Hero Image" className={`w-full ${type == "row" ? "w-full lg:w-5/12" : "md:w-10/12 xl:w-9/12"} `}/>
                </div>
            </section>

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
                        className="bg-transparent border border-white text-white w-[200px]"
                        navigateTo="contact"
                    />
            </section>
        </>
    )
}