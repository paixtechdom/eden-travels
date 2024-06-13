import { AfterHero } from "./sections/AfterHero"
import { Hero } from "./sections/Hero"
import { Services } from "./sections/Services"

const HomePage: React.FC = () => {
    return(
        <div className="center bg-white flex-col">
            <Hero />
            <AfterHero />
            <Services />
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