import { PiCheck } from "react-icons/pi"
import { ImageExtras } from "../../assets/components/ImageExtras"
import { ImageText } from "../../assets/components/ImageText"
import { AfterHero } from "./sections/AfterHero"
import { Hero } from "./sections/Hero"
import planeRun from "./../../assets/images/planeRun.jpg"
import { CardParent } from "../../assets/components/Card/CardParent"
import { servicesList, trainingList } from "../../assets/Constants"

const HomePage: React.FC = () => {
    return(
        <div className="center bg-white flex-col">
            <Hero />
            <AfterHero />
            <CardParent 
                data={servicesList}
                heading="Our Services"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus dolorum laboriosam voluptatem quia laudantium consequuntu"
            />
            
            
            <ImageText
                heading={"Lorem ipsum dolor sit amet."} 
                span={"Lorem, ipsum dolor."}
                desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nihil minima neque, optio quod quae officiis voluptatibus nesciunt quasi doloribus."}
                img={planeRun}
            >



                <div className="absolute -bottom-5 left-[50%]">
                    <ImageExtras 
                        icon={<PiCheck className="text-lg"/>}
                        iconBg={"bg-secondary"}
                        topText={<p className="font-bold">100+</p>}
                        bottomText={<p className="text-gray-400">
                            Successful Flights
                        </p>}
                    />
                </div>
            </ImageText>

            <CardParent 
                data={trainingList}
                heading="We train"
                description="We offer a range of courses and trainings to help you secure your space in the air-space"
            />
            {/* 
                Visitable Places

                Call to action

                who we are - about us  not compulsory

                our services - read more

                trainings

                jobs - read more            
            */}
        </div>
    )
}


export default HomePage