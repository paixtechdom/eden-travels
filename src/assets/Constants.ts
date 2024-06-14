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
        title: 'Training',
        link: 'training',
        sublinks: [
            {
                title: "Customer and Sales Training",
                link: "customer-sales"
            },
            {
                title: "Operational and Crisis Management Training",
                link: "operations-crisis"
            },
            {
                title: "Destination and Technology Training",
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
                        title: "",
                        img: planeTakeoff,
                        sub: []
                    }
                ]
            },
            {
                title: "Accommodation Booking",
                img: planeTakeoff,
                sub: [
                    {
                        title: "",
                        img: "",
                        sub: []
                    }
                ]
            },
            {
                title: "Transportation Services",
                img: planeTakeoff,
                sub: [
                    {
                        title: "",
                        img: "",
                        sub: []
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
                        title: "",
                        img: "",
                        sub: []
                    }
                ]
            },
            {
                title: "Travel Insurance",
                img: familyTour,
                sub: [
                    {
                        title: "",
                        img: "",
                        sub: []
                    }
                ]
            },
            
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
                        title: "",
                        img: "",
                        sub: []
                    }
                ]
            },
            {
                title: "Corporate Travel",
                img: passportServices,
                sub: [
                    {
                        title: "",
                        img: "",
                        sub: []
                    }
                ]
            },
        ]
    },
]



export const trainingList = [
    {
        title: "Customer and Sales Training",
        img: customerService,
        desc: "Enhance customer service and sales skills.",
        sub: [
            {
                title: "Customer Service Training",
                img: customerService,
                sub: [
                    {
                        title: "",
                        img: "",
                        sub: []
                    }
                ]
            },
            {
                title: "Sales and Marketing Training",
                img: customerService,
                sub: [
                    {
                        title: "",
                        img: "",
                        sub: []
                    }
                ]
            },
        ]
    },
    {
        title: "Operational and Crisis Management Training",
        img: operations,
        desc: "Improve operational efficiency and crisis management.",
        sub: [
            {
                title: "Travel Operations Training",
                img: operations,
                sub: [
                    {
                        title: "",
                        img: "",
                        sub: []
                    }
                ]
            },
            {
                title: "Crisis Management Training",
                img: operations,
                sub: [
                    {
                        title: "",
                        img: "",
                        sub: []
                    }
                ]
            },
        ]
    },
    {
        title: "Destination and Technology Training",
        img: destinationKnowledge,
        desc: "Gain knowledge on destinations and travel technology.",
        sub: [
            {
                title: "Destination Knowledge Training",
                img: destinationKnowledge,
                sub: [
                    {
                        title: "",
                        img: "",
                        sub: []
                    }
                ]
            },
            {
                title: "Travel Technology Training",
                img: destinationKnowledge,
                sub: [
                    {
                        title: "",
                        img: "",
                        sub: []
                    }
                ]
            },
        ]
    },
]
