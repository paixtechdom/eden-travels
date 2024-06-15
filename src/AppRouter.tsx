import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { delayLoad } from "./assets/Functions"
import { HelmetProvider  } from 'react-helmet-async';
import { PageNotFound } from './pages/PageNotFound';
import { Navbar } from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import { servicesList, coursesList } from './assets/Constants';
import EachServicePage from './pages/services/eachpage/page';
import EachCoursesPage from './pages/courses/eachpage/page';
import CoursesPage from './pages/courses/page';
import { FaPlaneDeparture } from 'react-icons/fa6';


const HomePage = lazy(() => delayLoad(import("./pages/home/page")))
const AboutPage = lazy(() => delayLoad(import('./pages/about/page')))
const ServicesPage = lazy(() => delayLoad(import('./pages/services/page')))
const JobsPage = lazy(() => delayLoad(import('./pages/Jobs/page')))
const ContactPage = lazy(() => delayLoad(import('./pages/contact/page')))


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
                        <Route path="/jobs" element={<JobsPage />}/>
                        {
                            servicesList.map((l, i) => (
                                <Route key={i} path={"services/"+l?.title?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()} element={<EachServicePage />}/>
                            ))
                        }
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
        <section className='h-screen w-full bg-secondary  center flex-col text-4xl  text-center gap-4 text-gray-200'>
            <FaPlaneDeparture className='animate-pulse text-6xl  mb-3'/>
            <p className='text-primary w-11/12 uppercase font-bold'>Eden Travels and Tour</p>
            <p className="text-sm">Seamless Travel, Planned for Your Next Journey</p>
        </section>
    )
  }