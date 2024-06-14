import planeTakeoff from "../assets/images/planeTakeoff.jpg"
import passportServices from "../assets/images/passportServices.jpg"
import familyTour from "../assets/images/familyTour.jpg"
import customerService from "../assets/images/customerService.jpg"
import operations from "../assets/images/operations.jpg"
import destinationKnowledge from "../assets/images/destinationKnowledge.jpg"

export const NavInfo = [
    {
        title: 'Home',
        link: '',
    },
    {
        title: 'Services',
        link: 'services',
        sublinks: [
            {
                title: "Travel Arrangements",
                link: "travel-arrangements"
            },
            {
                title: "Travel Packages and Insurance",
                link: "travel-packages"
            },
            {
                title: "Travel Documentation and Corporate Services",
                link: "documentation"
            },
            {
                title: "View All",
                link: ""
            }
        ]
        
        
    },
    {
        title: 'Courses',
        link: 'courses',
        sublinks: [
            {
                title: "Customer and Sales",
                link: "customer-sales"
            },
            {
                title: "Operational and Crisis Management",
                link: "operations-crisis"
            },
            {
                title: "Destination and Technology",
                link: "destination-technology"
            },
            {
                title: "View All",
                link: ""
            }
        ]
        
    },
    {
        title: 'Jobs',
        link: 'jobs',
    },
    {
        title: 'Contact Us',
        link: 'contact',
    },
]



export const servicesList = [
    {
        title: "Travel Arrangements",
        img: planeTakeoff,
        desc: "Hassle-free booking for flights, accommodations, and transportation.",
        sub: [
            {
                title: "Flight Booking",
                img: planeTakeoff,
                sub: [
                    {
                        title: "Domestic Flights",
                        img: "domesticFlights.jpg",
                        sub: [
                            "Booking for all major domestic airlines",
                            "Last-minute flight deals",
                            "Multi-city itineraries"
                        ]
                    },
                    {
                        title: "International Flights",
                        img: "internationalFlights.jpg",
                        sub: [
                            "Booking for all major international airlines",
                            "Assistance with travel documents",
                            "Connecting flight arrangements"
                        ]
                    },
                    {
                        title: "Group Bookings",
                        img: "groupBookings.jpg",
                        sub: [
                            "Special rates for group travel",
                            "Custom itineraries",
                            "Group check-in assistance"
                        ]
                    },
                    {
                        title: "Charter Flights",
                        img: "charterFlights.jpg",
                        sub: [
                            "Private jet charters",
                            "Luxury amenities",
                            "Flexible scheduling"
                        ]
                    }
                ]
                
            },
            {
                title: "Accommodation Booking",
                img: planeTakeoff,
                sub: [
                    {
                        title: "Hotel Reservations",
                        img: "hotelReservations.jpg",
                        sub: [
                            "Booking for major hotel chains",
                            "Luxury and boutique hotels",
                            "Discounted rates and special offers"
                        ]
                    },
                    {
                        title: "Vacation Rentals",
                        img: "vacationRentals.jpg",
                        sub: [
                            "Booking for apartments and villas",
                            "Long-term rental options",
                            "Family-friendly properties"
                        ]
                    },
                    {
                        title: "Hostels and Budget Lodging",
                        img: "budgetLodging.jpg",
                        sub: [
                            "Affordable hostel bookings",
                            "Shared and private rooms",
                            "Youth and backpacker-friendly"
                        ]
                    }
                ]
                
            },
            {
                title: "Transportation Services",
                img: planeTakeoff,
                sub: [
                    {
                        title: "Car Rentals",
                        img: "carRentals.jpg",
                        sub: [
                            "Wide range of vehicles",
                            "Flexible rental periods",
                            "Airport pickup and drop-off"
                        ]
                    },
                    {
                        title: "Airport Transfers",
                        img: "airportTransfers.jpg",
                        sub: [
                            "Private and shared transfers",
                            "Meet and greet services",
                            "Luxury transfer options"
                        ]
                    },
                    {
                        title: "Train and Bus Tickets",
                        img: "trainBusTickets.jpg",
                        sub: [
                            "Domestic and international routes",
                            "Flexible ticket options",
                            "Discounts for group travel"
                        ]
                    },
                    {
                        title: "Cruise Bookings",
                        img: "cruiseBookings.jpg",
                        sub: [
                            "Ocean and river cruises",
                            "Luxury and budget options",
                            "Custom itineraries"
                        ]
                    }
                ]
                
            },
        ]
    },
    {
        title: "Travel Packages and Insurance",
        img: familyTour,
        desc: "Tailored travel packages and comprehensive insurance coverage.",
        sub: [
            {
                title: "Tour Packages",
                img: familyTour,
                sub: [
                    {
                        title: "Customizable Travel Packages",
                        img: "customizableTravel.jpg",
                        sub: [
                            "Tailored itineraries",
                            "Flexible travel dates",
                            "Personalized experiences"
                        ]
                    },
                    {
                        title: "Group Tours",
                        img: "groupTours.jpg",
                        sub: [
                            "Scheduled group departures",
                            "Special rates for groups",
                            "Expert tour guides"
                        ]
                    },
                    {
                        title: "Adventure Tours",
                        img: "adventureTours.jpg",
                        sub: [
                            "Adventure activities",
                            "Guided expeditions",
                            "Equipment rentals"
                        ]
                    },
                    {
                        title: "Cultural and Heritage Tours",
                        img: "culturalTours.jpg",
                        sub: [
                            "Historical site visits",
                            "Cultural immersion experiences",
                            "Local guide services"
                        ]
                    }
                ]
               
            },
            {
                title: "Travel Insurance",
                img: familyTour,
                sub: [
                    {
                        title: "Medical Travel Insurance",
                        img: "medicalInsurance.jpg",
                        sub: [
                            "Emergency medical coverage",
                            "Hospitalization benefits",
                            "24/7 assistance"
                        ]
                    },
                    {
                        title: "Trip Cancellation Insurance",
                        img: "tripCancellation.jpg",
                        sub: [
                            "Refunds for cancellations",
                            "Coverage for trip interruptions",
                            "Non-refundable expense protection"
                        ]
                    },
                    {
                        title: "Baggage Loss Insurance",
                        img: "baggageLoss.jpg",
                        sub: [
                            "Lost baggage compensation",
                            "Delayed baggage coverage",
                            "Stolen baggage protection"
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Travel Documentation and Corporate Services",
        img: passportServices,
        desc: "Visa, passport services, and efficient corporate travel solutions.",
        sub: [
            {
                title: "Visa and Passport Services",
                img: passportServices,
                sub: [
                    {
                        title: "Visa Application Assistance",
                        img: "visaApplication.jpg",
                        sub: [
                            "Application process guidance",
                            "Document preparation",
                            "Appointment scheduling"
                        ]
                    },
                    {
                        title: "Passport Renewal Services",
                        img: "passportRenewal.jpg",
                        sub: [
                            "Renewal form assistance",
                            "Expedited processing",
                            "Document checklist"
                        ]
                    },
                    {
                        title: "Travel Document Guidance",
                        img: "documentGuidance.jpg",
                        sub: [
                            "Information on required documents",
                            "Embassy and consulate support",
                            "Travel advisories"
                        ]
                    }
                ]
                
            },
            {
                title: "Corporate Travel",
                img: passportServices,
                sub: [
                    {
                        title: "Business Travel Management",
                        img: "businessTravel.jpg",
                        sub: [
                            "Itinerary planning",
                            "Corporate discounts",
                            "Travel policy compliance"
                        ]
                    },
                    {
                        title: "Conference and Event Planning",
                        img: "conferencePlanning.jpg",
                        sub: [
                            "Venue selection",
                            "Event logistics",
                            "Participant coordination"
                        ]
                    },
                    {
                        title: "Incentive Travel Programs",
                        img: "incentiveTravel.jpg",
                        sub: [
                            "Reward trips",
                            "Team-building events",
                            "Custom incentive packages"
                        ]
                    }
                ]
            },
        ]
    },
]



export const coursesList = [
    {
        title: "Customer and Sales",
        img: customerService,
        desc: "Enhance customer service and sales skills.",
        sub: [
            {
                title: "Customer Service",
                img: customerService,
                sub: [
                    {
                        title: "Effective Communication Skills",
                        img: "effectiveCommunication.jpg",
                        sub: [
                            "Active listening",
                            "Clear and concise communication",
                            "Empathy and understanding"
                        ]
                    },
                    {
                        title: "Handling Customer Complaints",
                        img: "customerComplaints.jpg",
                        sub: [
                            "Complaint resolution techniques",
                            "Maintaining professionalism",
                            "Follow-up procedures"
                        ]
                    },
                    {
                        title: "Building Customer Relationships",
                        img: "customerRelationships.jpg",
                        sub: [
                            "Trust-building strategies",
                            "Personalized service",
                            "Customer loyalty programs"
                        ]
                    }
                ]     
            },
            {
                title: "Sales and Marketing",
                img: customerService,
                sub: [
                    {
                        title: "Sales Techniques",
                        img: "salesTechniques.jpg",
                        sub: [
                            "Effective sales pitches",
                            "Closing deals",
                            "Upselling and cross-selling"
                        ]
                    },
                    {
                        title: "Marketing Strategies",
                        img: "marketingStrategies.jpg",
                        sub: [
                            "Market research",
                            "Digital marketing",
                            "Content creation"
                        ]
                    },
                    {
                        title: "Lead Generation",
                        img: "leadGeneration.jpg",
                        sub: [
                            "Identifying prospects",
                            "Lead nurturing",
                            "Conversion strategies"
                        ]
                    }
                ]
                
                
            },
        ]
    },
    {
        title: "Operational and Crisis Management",
        img: operations,
        desc: "Improve operational efficiency and crisis management.",
        sub: [
            {
                title: "Travel Operations",
                img: operations,
                sub: [
                    {
                        title: "Booking and Reservation Systems",
                        img: "bookingSystems.jpg",
                        sub: [
                            "Using booking software",
                            "Managing reservations",
                            "System troubleshooting"
                        ]
                    },
                    {
                        title: "Operational Efficiency",
                        img: "operationalEfficiency.jpg",
                        sub: [
                            "Process optimization",
                            "Time management",
                            "Resource allocation"
                        ]
                    },
                    {
                        title: "Workflow Management",
                        img: "workflowManagement.jpg",
                        sub: [
                            "Task prioritization",
                            "Team collaboration",
                            "Project management tools"
                        ]
                    }
                ]
                
            },
            {
                title: "Crisis Management",
                img: operations,
                sub: [
                    {
                        title: "Emergency Response Planning",
                        img: "emergencyPlanning.jpg",
                        sub: [
                            "Developing response plans",
                            "Identifying potential risks",
                            " staff"
                        ]
                    },
                    {
                        title: "Crisis Communication",
                        img: "crisisCommunication.jpg",
                        sub: [
                            "Effective communication during crises",
                            "Media management",
                            "Internal and external communication"
                        ]
                    },
                    {
                        title: "Risk Assessment",
                        img: "riskAssessment.jpg",
                        sub: [
                            "Identifying vulnerabilities",
                            "Risk mitigation strategies",
                            "Regular risk assessments"
                        ]
                    }
                ]
                
            },
        ]
    },
    {
        title: "Destination and Technology",
        img: destinationKnowledge,
        desc: "Gain knowledge on destinations and travel technology.",
        sub: [
            {
                title: "Destination Knowledge",
                img: destinationKnowledge,
                sub: [
                    {
                        title: "Geographical Knowledge",
                        img: "geographicalKnowledge.jpg",
                        sub: [
                            "Country and city information",
                            "Geopolitical awareness",
                            "Travel routes"
                        ]
                    },
                    {
                        title: "Local Customs and Culture",
                        img: "localCulture.jpg",
                        sub: [
                            "Cultural norms and etiquette",
                            "Local traditions",
                            "Language basics"
                        ]
                    },
                    {
                        title: "Popular Attractions",
                        img: "popularAttractions.jpg",
                        sub: [
                            "Top tourist destinations",
                            "Hidden gems",
                            "Seasonal attractions"
                        ]
                    }
                ]
                
                
            },
            {
                title: "Travel Technology",
                img: destinationKnowledge,
                sub: [
                    {
                        title: "Booking Software",
                        img: "bookingSoftware.jpg",
                        sub: [
                            "Software features",
                            "User training",
                            "Troubleshooting common issues"
                        ]
                    },
                    {
                        title: "Travel Apps",
                        img: "travelApps.jpg",
                        sub: [
                            "Popular travel apps",
                            "App functionalities",
                            "Integration with booking systems"
                        ]
                    },
                    {
                        title: "Technology Trends in Travel",
                        img: "technologyTrends.jpg",
                        sub: [
                            "Latest technology in travel",
                            "Future trends",
                            "Tech adoption strategies"
                        ]
                    }
                ]
            },
        ]
    }
    
]
