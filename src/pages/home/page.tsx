import { PiCheck } from "react-icons/pi"
import { ImageExtras } from "../../assets/components/ImageExtras"
import { ImageText } from "../../assets/components/ImageText"
import { AfterHero } from "./sections/AfterHero"
import { Hero } from "./sections/Hero"
import { Services } from "./sections/Services"
import { Trainings } from "./sections/Trainings"
import planeRun from "./../../assets/images/planeRun.jpg"

const HomePage: React.FC = () => {
    return(
        <div className="center bg-white flex-col">
            <Hero />
            <AfterHero />
            <Services />
            
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

            <Trainings />
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