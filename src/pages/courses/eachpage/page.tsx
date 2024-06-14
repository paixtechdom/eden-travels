import { useEffect, useState } from "react"
import { coursesList } from "../../../assets/Constants"
import { ListingCardParent } from "../../../assets/components/Card/ListingCardParent"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../assets/store/AppStore"
import { ImageText } from "../../../assets/components/ImageText"
import { ImageExtras } from "../../../assets/components/ImageExtras"
import { PiCheck } from "react-icons/pi"
import { FaPlaneDeparture } from "react-icons/fa6"
import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav } from "../../../assets/store/navigation/navigationSlice"
import { CoursesHero } from "../sections/CoursesHero"


const EachCoursesPage = () => {
    const [ coursesPageIndex, setCoursesPageIndex ] = useState(6)
    const dispatch = useDispatch()

    const navigation = useSelector((state: RootState) => state.navigation)

    const currentNav = navigation.currentNav
    const currentDropDownIndex = navigation.currentDropDownIndex

    useEffect(() => {
        setCoursesPageIndex(currentNav == 2 ? currentDropDownIndex : 0)

        coursesList.forEach((courses, i) => {
            if(document.URL.includes(courses.title.replace(" ", "-").replace(" ", "-").replace(" ", "-").replace(" ", "-").toLowerCase()) ){
                setCoursesPageIndex(i)
                dispatch(setCurrentNav(2))
                dispatch(setCurrentDropDownIndex(i))
                dispatch(setCurrentDropDown(""))
            }        
        })
        scrollTo({
            top: 0,
            behavior: "smooth" 
        })

    }, [currentDropDownIndex, document.URL])
    
    return(
        <>
            {
                    coursesPageIndex == 6 ?
                    <div className="min-h-screen"></div> : 
                <>
                    <CoursesHero
                        heroHeader={coursesList[coursesPageIndex].title}
                        desc={coursesList[coursesPageIndex].desc}
                        img={coursesList[coursesPageIndex].img}
                        data={coursesList[coursesPageIndex].sub}
                        dataHeader={`Get started with ${coursesList[coursesPageIndex].title} courses`}
                    />

                    {
                    coursesList[coursesPageIndex]?.sub?.map((courses, i) => (
                    <ListingCardParent 
                        key={i}
                        data={courses.sub}
                        heading={courses.title}
                        parentNav={"courses/"+courses.title.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()}
                    />

                    ))
                    }


                 <ImageText 
                    heading="Lorem lorem is a lorem"
                    desc="Lorem is hated by lorem and then Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ipsa eos nemo assumenda optio."
                    img={coursesList[coursesPageIndex].img}>
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
                </>
            }

         {/* image text */}
        </>
    )
}



export default EachCoursesPage