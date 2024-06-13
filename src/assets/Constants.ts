import planeTakeoff from "../assets/images/planeTakeoff.jpg"
import passportServices from "../assets/images/passportServices.jpg"
import familyTour from "../assets/images/familyTour.jpg"
import customerService from "../assets/images/planeTakeoff.jpg"
import operations from "../assets/images/passportServices.jpg"
import destinationKnowledge from "../assets/images/familyTour.jpg"

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
                "title": "Travel Arrangements",
            },
            {
                "title": "Travel Packages and Insurance",
            },
            {
                "title": "Travel Documentation and Corporate Services",
            }
        ]
        
        
    },
    {
        title: 'Training',
        link: 'training',
        sublinks: [
            {
                "title": "Customer Service Training",
                "link": "customer-service-training"
            },
            {
                "title": "Travel Operations Training",
                "link": "travel-operations-training"
            },
            {
                "title": "Sales and Marketing Training",
                "link": "sales-and-marketing-training"
            },
            {
                "title": "Destination Knowledge Training",
                "link": "destination-knowledge-training"
            },
            {
                "title": "Travel Technology Training",
                "link": "travel-technology-training"
            },
            {
                "title": "Crisis Management Training",
                "link": "crisis-management-training"
            }
        ]
        
    },
    {
        title: 'Jobs',
        link: 'jobs',
    },
    {
        title: 'Contact Us',
        link: 'Contact',
    },
]

export const servicesList = [
    {
        title: "Travel Arrangements",
        img: planeTakeoff,
        desc: "Hassle-free booking for flights, accommodations, and transportation.",
        subservices: [
            {
                title: "Flight Booking"
            },
            {
                title: "Accommodation Booking"
            },
            {
                title: "Transportation Services"
            },
        ]
    },
    {
        title: "Travel Packages and Insurance",
        img: familyTour,
        desc: "Tailored travel packages and comprehensive insurance coverage.",
        subservices: [
            {
                title: "Tour Packages"
            },
            {
                title: "Travel Insurance"
            },
            
        ]
    },
    {
        title: "Travel Documentation and Corporate Services",
        img: passportServices,
        desc: "Visa, passport services, and efficient corporate travel solutions.",
        subservices: [
            {
                title: "Visa and Passport Services"
            },
            {
                title: "Corporate Travel"
            },
        ]
    },
]


export const trainingList = [
    {
        title: "Customer and Sales Training",
        img: customerService,
        desc: "Enhance customer service and sales skills.",
        subservices: [
            {
                title: "Customer Service Training"
            },
            {
                title: "Sales and Marketing Training"
            },
        ]
    },
    {
        title: "Operational and Crisis Management Training",
        img: operations,
        desc: "Improve operational efficiency and crisis management.",
        subservices: [
            {
                title: "Travel Operations Training"
            },
            {
                title: "Crisis Management Training"
            },
        ]
    },
    {
        title: "Destination and Technology Training",
        img: destinationKnowledge,
        desc: "Gain knowledge on destinations and travel technology.",
        subservices: [
            {
                title: "Destination Knowledge Training"
            },
            {
                title: "Travel Technology Training"
            },
        ]
    },
]
