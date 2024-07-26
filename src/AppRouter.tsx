import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { HelmetProvider  } from 'react-helmet-async';
import { PageNotFound } from './pages/PageNotFound';
import { Navbar } from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import { coursesList } from './assets/Constants';
// import EachServicePage from './pages/services/eachpage/page';
import EachCoursesPage from './pages/courses/eachpage/page';
import CoursesPage from './pages/courses/page';
import logo from "./assets/images/Onidson sm.png"
import InterStateTrevellingPage from './pages/services/interstatetravelling/page';
import LogisticsPage from './pages/services/logistics/page';
import FlightService from './pages/services/flight/page';


const HomePage = lazy(() => import("./pages/home/page"))
const AboutPage = lazy(() => import('./pages/about/page'))
const ServicesPage = lazy(() => import('./pages/services/page'))
const JobsPage = lazy(() => import('./pages/Jobs/page'))
const StudyAbroadPage = lazy(() => import('./pages/studyabroad/page'))
const ContactPage = lazy(() => import('./pages/contact/page'))


export const AppRouter = () => {  
    return (
        <HelmetProvider>
            <Router>
                <Suspense fallback={<Loader />}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/home" element={<HomePage />}/>
                        <Route path="/about" element={<AboutPage />}/>
                        <Route path="/services" element={<ServicesPage />}/>
                        {/* {
                            servicesList.map((l, i) => (
                                <Route key={i} path={"services/"+l?.title?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()} element={<EachServicePage />}/>
                            ))
                        } */}

                        <Route path='/services/logistics-services' element={<LogisticsPage /> } />

                        <Route path='/services/interstate-travelling' element={<InterStateTrevellingPage />}/>
                        <Route path='/services/flight-services' element={<FlightService />}/>

                        <Route path="/jobs" element={<JobsPage />}/>
                        <Route path="/study-abroad" element={<StudyAbroadPage />}/>
                        <Route path="/courses" element={<CoursesPage />}/>
                        {
                            coursesList.map((l, i) => (
                                <Route key={i} path={"courses/"+l?.title?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()} element={<EachCoursesPage />}/>
                            ))
                        }
                        <Route path="/contact" element={<ContactPage />}/>
                        <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </Router>
        </HelmetProvider>
    );
  };



  const Loader = () => {
    return(
        <section className='h-screen w-full bg-white  center flex-col text-4xl  text-center gap-2 text-gray-900'>
           <img src={logo} alt="Onidson Travels and Logistics Ltd Logo" className='animate-bounce w-6/12 md:w-5/12 lg:w-3/12'/>
           {/* <h3 className='font-bold text-3xl uppercase animate-bounce'>Onidson</h3>
           <p className='font-bold text-xl'>travels and tours Ltd</p> */}
            <p className="text-sm">Seamless Travel, Planned for Your Next Journey</p>
        </section>
    )
  }