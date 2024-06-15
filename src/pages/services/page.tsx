import { servicesList } from "../../assets/Constants"
import { ImageText } from "../../assets/components/ImageText"
import { ServicesHero } from "./sections/ServicesHero"
import travellers from "../../assets/images/female travellers.jpg"
import { CardParent } from "../../assets/components/Card/CardParent"
import { ImageExtras } from "../../assets/components/ImageExtras"
import { PiCheck } from "react-icons/pi"
import hero from "../../assets/images/hero1.jpg"
import { BeforeFooter } from "../../assets/components/BeforeFooter"




let links = ["Home", "Services"]

const ServicesPage = () => {
   return(
      <main className="center w-full flex-col">
         
         <ServicesHero 
            heroHeader="Explore Our Services"
            desc="From seamless flight bookings and comfortable accommodations to reliable transportation and tailored travel packages, our expert team is dedicated to making your travel experience exceptional. Discover the wide range of services we offer to make your journey unforgettable."
            img={hero}
            data={servicesList}
            dataHeader="Explore our services"
            type={"row"}
            breadLinks={links}

         />

         {
            servicesList.map((service, i) => (
               i < 2 &&
               <CardParent 
                  key={i}
                  data={service.sub}
                  heading={service.title}
                  description={service.desc}
                  parentNav={"services/"+service.title.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()}
               />

            ))
         }
         <ImageText 
            heading="Premium Aviation, Travel, and Tour Services"
            desc="Discover the world effortlessly with our specialized aviation, travel, and tour services. From flight bookings to guided tours, we ensure a smooth and memorable journey."
            img={travellers}>
               <>
                  <div className="absolute -bottom-5 right-[50%]">
                     <ImageExtras 
                           icon={<PiCheck className="text-lg"/>}
                           iconBg={"bg-green-700"}
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
                  parentNav={"services/"+service.title.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()}
               />

            ))
         }

         
         <BeforeFooter 
            text="Start Your Journey with Us!"
         />
   

      </main>
   )
}


export default ServicesPage