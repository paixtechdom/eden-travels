import { OtherHeros } from "../../../assets/components/OtherHeros"
import heroImg from "../../../assets/images/airportTransfers.jpg"


const InterStateTrevellingPage = () => {


    return(
        <main className="center flex-col bg-white min-h-screen w-full">
        <OtherHeros
            heroHeader="Travel safely to any state"
            desc="We offer "
            img={heroImg}
            breadLinks={["Home", "Services", "Inter-state travelling"]}
            type="row"
            dataHeader="Book an appointment now"
            data={[]}
        />

    </main>
    )
}


export default InterStateTrevellingPage