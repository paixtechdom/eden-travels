import { coursesList } from "../../assets/Constants"
import { ImageText } from "../../assets/components/ImageText"
import { CoursesHero } from "./sections/CoursesHero"
import agent from "../../assets/images/agent.jpg"
import { CardParent } from "../../assets/components/Card/CardParent"
import { ImageExtras } from "../../assets/components/ImageExtras"
import { FaPlaneDeparture } from "react-icons/fa"
import { PiCheck } from "react-icons/pi"
import hero from "../../assets/images/accommodationBooking.jpg"
import { BeforeFooter } from "../../assets/components/BeforeFooter"
import { Helmet } from "react-helmet-async"




const CoursesPage = () => {
   return(
      <>
          <Helmet>
                <title>
                    Aviation Courses at Eden Travels and Tours
                </title>
                <meta name="description" content={"Elevate your skills and advance your career with our professional courses at Brave. Master new technologies, develop business acumen, or gain certifications in various fields. Join us and unlock your potential today!"} />
            </Helmet>  
         <main className="center w-full flex-col">
            
            <CoursesHero 
               heroHeader="Our Professional Courses"
               desc="Enhance your skills and advance your career with our professional courses. Whether mastering new technologies, developing business acumen, or gaining certifications, our programs help you achieve your goals. Join us and take the next step towards success with confidence"
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
               heading="Unlock Your Potential with Expert-Led Training"
               desc="Our courses are designed to equip you with the skills needed to excel in today's job market. Led by industry experts, each course offers practical experience and theoretical learning. Explore our courses and start your journey towards professional excellence"
               img={agent}>
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
      
            <BeforeFooter text="Elevate Your Skills Today!"/>
            
      

         </main>
      </>
   )
}


export default CoursesPage