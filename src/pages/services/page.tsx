import { servicesList } from "../../assets/Constants"
import { ImageText } from "../../assets/components/ImageText"
import { ServicesHero } from "./sections/ServicesHero"
import travellers from "../../assets/images/female travellers.jpg"
import { CardParent } from "../../assets/components/Card/CardParent"
import { ImageExtras } from "../../assets/components/ImageExtras"
import { FaPlaneDeparture } from "react-icons/fa"
import { PiCheck } from "react-icons/pi"

const ServicesPage = () => {
   return(
      <main className="center w-full flex-col">
         <ServicesHero />

         {
            servicesList.map((service, i) => (
               i < 2 &&
               <CardParent 
                  key={i}
                  data={service.sub}
                  heading={service.title}
                  description={service.desc}
               />

            ))
         }
         <ImageText 
            heading="Lorem lorem is a lorem"
            desc="Lorem is hated by lorem and then Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ipsa eos nemo assumenda optio."
            img={travellers}>
               <>
                  <div className="absolute -bottom-5 left-[50%]">
                     <ImageExtras 
                           icon={<PiCheck className="text-lg"/>}
                           iconBg={"bg-green-700"}
                           topText={<p className="font-bold">100+</p>}
                           bottomText={<p className="text-gray-400">
                              Successful Flights
                           </p>}
                     />
                  </div>
                  <div className="absolute -top-5 right-[50%]">
                     <ImageExtras 
                           icon={<FaPlaneDeparture className="text-lg"/>}
                           iconBg={"bg-secondary"}
                           topText={<p className="font-bold">100+</p>}
                           bottomText={<p className="text-gray-400">
                              Successful Flights
                           </p>}
                     />
                  </div>
               </>
               
            </ImageText>
         {
            servicesList.map((service, i) => (
               i == 2 &&
               <CardParent 
                  key={i}
                  data={service.sub}
                  heading={service.title}
                  description={service.desc}
               />

            ))
         }
   

      </main>
   )
}


export default ServicesPage