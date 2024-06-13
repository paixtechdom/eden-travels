import { AfterHero } from "./AfterHero"
import { Hero } from "./Hero"

const HomePage: React.FC = () => {
    return(
        <div className="center bg-white flex-col">
            <Hero />
            {/* 
                Visitable Places

                Call to action

                who we are - about us  not compulsory

                our services - read more

                trainings

                jobs - read more            
            */}
            <AfterHero />
        </div>
    )
}


export default HomePage