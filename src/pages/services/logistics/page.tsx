import { OtherHeros } from "../../../assets/components/OtherHeros"
import heroImg from "../../../assets/images/internationalFlights.jpg"
const LogisticsPage = () => {


    return(
        <main className="center flex-col bg-white min-h-screen w-full">
            <OtherHeros
                heroHeader="Logistisc header"
                desc="We offer logistics services "
                img={heroImg}
                breadLinks={["Home", "Services", "Logistics"]}
                type="row"
                dataHeader=""
                data={[]}
            />

        </main>
    )
}


export default LogisticsPage