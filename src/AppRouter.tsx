import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { delayLoad } from "./assets/Functions"
import { HelmetProvider  } from 'react-helmet-async';
import { PageNotFound } from './pages/PageNotFound';
import { Navbar } from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import { servicesList, trainingList } from './assets/Constants';
import EachServicePage from './pages/services/eachpage/page';

const HomePage = lazy(() => delayLoad(import("./pages/home/page")))
const ServicesPage = lazy(() => delayLoad(import('./pages/services/page')))
const ContactPage = lazy(() => delayLoad(import('./pages/contact/page')))


export const AppRouter = () => {  
    return (
        <HelmetProvider>
            <Router>
                <Suspense fallback={<>Loading</>}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/services" element={<ServicesPage />}/>
                        {
                            servicesList.map((l, i) => (
                                <Route key={i} path={"services/"+l?.title?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()} element={<EachServicePage />}/>
                            ))
                        }
                        {
                            trainingList.map((l, i) => (
                                <Route key={i} path={"services/"+l?.title?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()} element={<EachServicePage />}/>
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