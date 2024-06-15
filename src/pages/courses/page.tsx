import { coursesList } from "../../assets/Constants"
import { ImageText } from "../../assets/components/ImageText"
import { CoursesHero } from "./sections/CoursesHero"
import travellers from "../../assets/images/female travellers.jpg"
import plane from "../../assets/images/planeRun.jpg"
import { CardParent } from "../../assets/components/Card/CardParent"
import { ImageExtras } from "../../assets/components/ImageExtras"
import { ImageListing } from "../../assets/components/ImageListing"
import { FaPlaneDeparture } from "react-icons/fa"
import { PiCheck } from "react-icons/pi"
import hero from "../../assets/images/hero1.jpg"


const coursesImages = [
   {
       img: travellers,
       text: "Dubai"
   },
   {
       img: plane,
       text: "Paris"
   },
   {
       img: travellers,
       text: "Canada"
   },
   {
       img: plane,
       text: "New York"
   },
]


const CoursesPage = () => {
   return(
      <main className="center w-full flex-col pb-[15vh]">
         
         <CoursesHero 
            heroHeader="Our Professional Courses"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias libero a nulla ab et quisquam beatae nobis repellat. Inventore, praesentium sapiente dolor fugiat repellendus tempore quasi aliquam unde itaque?"
            img={hero}
            data={coursesList}
            dataHeader="Explore our courses"
            type={"row"}
            breadLinks={["Home", "Courses"]}
         />

         {
            coursesList.map((courses, i) => (
               i < 2 &&
               <CardParent 
                  key={i}
                  data={courses.sub}
                  heading={courses.title}
                  description={courses.desc}
                  parentNav={"courses/"+courses.title.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()}
               />

            ))
         }
         <ImageText 
            heading="Lorem lorem is a lorem"
            desc="Lorem is hated by lorem and then Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ipsa eos nemo assumenda optio."
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
                  <div className="absolute -top-5 left-[50%]">
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
            coursesList.map((courses, i) => (
               i == 2 &&
               <CardParent 
                  key={i}
                  data={courses.sub}
                  heading={courses.title}
                  description={courses.desc}
                  parentNav={"courses/"+courses.title.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()}
               />

            ))
         }
         <ImageListing 
            data={coursesImages}
            heading={"Lorem ipsum dolor sit amet."}
         />
         
         
   

      </main>
   )
}


export default CoursesPage