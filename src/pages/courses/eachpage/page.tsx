import { useEffect, useState } from "react"
import { coursesList } from "../../../assets/Constants"
import { ListingCardParent } from "../../../assets/components/Card/ListingCardParent"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../assets/store/AppStore"
import { ImageText } from "../../../assets/components/ImageText"
import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav } from "../../../assets/store/navigation/navigationSlice"
import { CoursesHero } from "../sections/CoursesHero"

import customer from "../../../assets/images/customer.jpg"
import airlinemarketing from "../../../assets/images/airlinemarketing.jpg"
import operationss from "../../../assets/images/operationss.jpg"
import { BeforeFooter } from "../../../assets/components/BeforeFooter"
import { Helmet } from "react-helmet-async"




const EachCoursesPage = () => {
    const [ coursesPageIndex, setCoursesPageIndex ] = useState(6)
    const dispatch = useDispatch()

    const navigation = useSelector((state: RootState) => state.navigation)

    const currentNav = navigation.currentNav
    const currentDropDownIndex = navigation.currentDropDownIndex

    useEffect(() => {
        setCoursesPageIndex(currentNav == 3 ? currentDropDownIndex : 0)

        coursesList.forEach((courses, i) => {
            if(document.URL.includes(courses?.title.replace(" ", "-").replace(" ", "-").replace(" ", "-").replace(" ", "-").toLowerCase()) ){
                setCoursesPageIndex(i)
                dispatch(setCurrentNav(3))
                dispatch(setCurrentDropDownIndex(i))
                dispatch(setCurrentDropDown(""))
            }        
        })
        scrollTo({
            top: 0,
            behavior: "smooth" 
        })

    }, [currentDropDownIndex, document.URL])

    const metaConstants = [
        {
            title: "Professional Aviation Courses",
            desc: "Elevate your aviation career with our professional aviation courses. Learn from industry experts and gain the skills needed to excel in the aviation industry."
        },
        {
            title: "Advanced Travel and Tourism Courses",
            desc: "Advance your career in travel and tourism with our comprehensive courses. Gain in-depth knowledge and practical skills to thrive in the travel industry."
        },
        {
            title: "Expert-Led Tour Guide Courses",
            desc: "Become a certified tour guide with our expert-led courses. Learn how to create memorable experiences and lead tours with confidence and expertise."
        }
    ];
    
    
    return(
        <>
              <Helmet>
                    <title>
                        {`${metaConstants[coursesPageIndex]?.title} -  Eden Travels and Tours`}
                    </title>
                    <meta name="description" content={`${metaConstants[coursesPageIndex]?.desc}`} />
                </Helmet>
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
                        breadLinks={["Home", "Courses",`${coursesList[coursesPageIndex].title}`]}
                        type="row"
                    />

                    {
                    coursesList[coursesPageIndex]?.sub?.map((courses, i) => (
                    <ListingCardParent 
                        key={i}
                        data={courses?.sub}
                        heading={courses?.title}
                        parentNav={"courses/"+courses.title.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()}
                    />

                    ))
                    }


                 <ImageText 
                        heading={
                            coursesPageIndex === 0
                            ? "Master Customer Service Skills"
                            : coursesPageIndex === 1
                            ? "Boost Your Sales and Marketing Expertise"
                            : "Optimize Travel Operations"
                        }

                        desc={coursesPageIndex === 0
                            ? "Learn how to communicate effectively and build lasting customer relationships with our comprehensive customer service training."
                            : coursesPageIndex === 1
                            ? "Enhance your sales techniques and marketing strategies with our specialized training programs."
                            : "Streamline booking processes and improve operational efficiency with our travel operations training."
                        }
                        img={
                            coursesPageIndex === 0 ?
                            customer : 
                            coursesPageIndex === 1 ?
                            airlinemarketing :
                            operationss
                        }>
                    
                    </ImageText>
                    <BeforeFooter 
                        text="Can't wait to get enrolled?"
                    />
                </>
            }

         {/* image text */}
        </>
    )
}



export default EachCoursesPage