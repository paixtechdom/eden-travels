import { FaBriefcase, FaRegCalendarCheck, FaMoneyCheckAlt, FaCheckCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { BeforeFooter } from '../../assets/components/BeforeFooter';
import { Helmet } from 'react-helmet-async';
import agent from "../../assets/images/agent.jpg"
import { Parallax } from '../../assets/components/Parallax';
import { Button } from '../../assets/components/Button';
import { BsTelephoneFill } from 'react-icons/bs';
// import { LazyLoadImage } from "react-lazy-load-image-component"
// import  "react-lazy-load-image-component/src/effects/blur.css"
// import  "react-lazy-load-image-component/src/effects/opacity.css"

const JobsPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // Grouped job listings
  const jobGroups = [
    {
      location: "Canada Work Permit Jobs",
      features: [
        { text: "Secure Job", icon: FaBriefcase },
        { text: "Possible Flight and Accommodation Sponsorship", icon: FaMoneyCheckAlt },
        { text: "Travel with Family (Dependants)", icon: FaCheckCircle }
      ],
      approvalTime: "6-8 months",
      jobs: [
        "Associate Sales", "Sales Representative", "Marketing", "Digital Marketing",
        "Data Analyst", "Cyber Security", "Carer", "Nursing", "Farming", "Transport",
        "Warehouse", "Supply Chair Officer", "Project Management Officer", "Beautician",
        "Heavy Truck Driver", "Plumber", "Carpenter", "Electrician", "Fleet Safety Officer"
      ]
    },
    {
      location: "Republic of Ireland Jobs",
      features: [
        { text: "Secure Job", icon: FaBriefcase },
        { text: "Possible Flight and Accommodation Sponsorship", icon: FaMoneyCheckAlt },
        { text: "Travel with Family (Dependants)", icon: FaCheckCircle }
      ],
      approvalTime: "Within Three (3) months",
      jobs: [
        "Midwifery", "Caregiver", "Health Care Assistant", "Chef", "Waiter & Waitress",
        "Janitor/Cleaner", "Digital Marketing", "Data Analyst", "Farm Assistant",
        "Cropping & Harvesting", "Cyber Security", "General Farm Worker"
      ]
    },
    {
      location: "Nova Scotia, Canada Jobs",
      features: [
        { text: "Secure Job", icon: FaBriefcase },
        { text: "Possible Flight and Accommodation Sponsorship", icon: FaMoneyCheckAlt },
        { text: "Travel with Family (Dependants)", icon: FaCheckCircle }
      ],
      approvalTime: "6-8 months",
      jobs: [
        "Nursing Aides", "Carpentry", "Welder", "Plumber", "Light Duty Cleaners",
        "Waiters", "Food Counter Attendants", "Kitchen Helper", "Construction Labourers & Helpers",
        "Electrician", "Bricklayer", "Driver", "Truck Drivers", "Food & Beverage Servers",
        "Heavy Equipment Operators"
      ]
    },
    {
      location: "Alberta, Canada Jobs",
      features: [
        { text: "Secure Job", icon: FaBriefcase },
        { text: "Possible Flight and Accommodation Sponsorship", icon: FaMoneyCheckAlt },
        { text: "Travel with Family (Dependants)", icon: FaCheckCircle }
      ],
      approvalTime: "6-8 months",
      jobs: [
        "Registered Nurses and Registered Psychiatric Nurses",
        "Transport Truck Drivers", "Retail and Wholesale Trade Managers",
        "Customer and Information Services Representatives",
        "Retail Sales Supervisors", "Store Shelf Stockers, Clerks, and Order Fillers",
        "Accounting and Related Clerks", "Administrative Officers", "Shippers and Receivers",
        "Restaurant and Food Service Managers"
      ]
    }
  ];

  // Filtered job listings based on search term
  const filteredJobGroups = jobGroups
    .map(group => ({
      ...group,
      jobs: group.jobs.filter(job =>
        job.toLowerCase().includes(searchTerm.toLowerCase())
      ).sort()
    }))
    .filter(group => group.jobs.length > 0);

  return (
    <>
       <Helmet>
          <title>
            Jobs - Eden Travels and Tours
          </title>
          <meta name="description" content="Explore a variety of job opportunities in Canada and the Republic of Ireland with a focus on work permits. Roles include sales, nursing, cyber security, and more. Start your journey today!" />
      </Helmet>
      <main className=" w-full center flex-col">
      <section className={`min-h-[75vh] bg-white w-full flex items-start lg:items-center justify-center relative  pt-[15vh] lg:pt-[10vh] `}> 
        <div className={`w-11/12 lg:w-10/12 flex flex-col lg:flex-row items-center justify-between z-10 gap-[50px]`}>
              <Parallax id={"Explore Exciting Job Opportunities"} className="w-full">

                  <div className={`flex items-start  flex-col gap-5 w-full`}>
                      <h1 className="font-bold text-4xl md:text-5xl text-secondary">Explore Exciting Job Opportunities</h1>

                      <p className="leading-relaxed tracking-wide w-full">
                      Secure a job and obtain a work permit with our professional guidance.
                      </p>

                      <div className={`flex gap-3 w-full md:w-9/12`}>
                          <Button
                              text="Learn more"
                              className="bg-secondary text-white "
                              scrollTo="jobs"
                          />

                          <Button
                              text="Contact us"
                              className="border border-secondary bg-transparent text-secondary "
                              navigateTo="contact"
                              icon={
                                  <BsTelephoneFill />
                              }
                          />

                      </div>
                  </div>
              </Parallax> 
              <img 
                    src={agent} 
                    alt={"Hero Image"} 
                    className={`w-full lg:w-6/12 shadow-xl rounded-xl`}
                />
          </div>
        </section>



        
        {/* Job Listings Section */}
        <section id='jobs' className="w-11/12 lg:w-10/12 py-12">
          <h2 className="text-2xl font-bold mb-6">Available Jobs</h2>
          <div className="w-full lg:w-8/12 flex mb-6">
            <input
              type="text"
              placeholder="Search for a job..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 rounded-lg focus:outline-none focus:border-primary shadow-lg"
            />
          </div>

          {filteredJobGroups.length > 0 ? (
            filteredJobGroups.map((group, index) => (
              <div key={index} className="my-9">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                  <div className="flex items-center mb-4">
                    <FaBriefcase className="text-3xl text-primary mr-3" />
                    <h3 className="text-xl font-bold">{group.location}</h3>
                  </div>
                  <div className="flex items-center text-sm">
                    <FaRegCalendarCheck className="text-gray-600 mr-2" />
                    <span className="text-gray-600">{`Approval Timeline: ${group.approvalTime}`}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.jobs.map((job, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md p-3">
                      <h4 className="">{job}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg">No jobs found.</p>
          )}
        </section>

        {/* Requirements and Fees Section */}
        <section className="w-11/12 lg:w-10/12 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-6">Requirements and Fees</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Requirements */}
            <div>
              <h3 className="text-lg font-bold mb-4">Basic Requirements</h3>
              <ul className="list-disc list-inside text-sm flex flex-col gap-2">
                <li>High Diploma or equivalent</li>
                <li>Training Certificate (Trade Test)</li>
                <li>Age: 21-55 years</li>
                <li>English or French proficiency (for PR eligibility)</li>
              </ul>
            </div>

            {/* Fees */}
            <div>
              <h3 className="text-lg font-bold mb-4">Installment Payment for Work Permit</h3>
              <ul className="list-disc list-inside text-sm flex flex-col gap-2">
                <li>Initial deposit: 50% (covers resume and cover letter)</li>
                <li>Second deposit: 50% (after work permit is granted)</li>
              </ul>
            </div>
          </div>
        </section>

        <BeforeFooter text={'Ready to Take the Next Step?'}/>
      </main>
    </>
  );
};

export default JobsPage;
