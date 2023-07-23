import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

const Trip = () =>{

	return(
		<div className="trip">
			<h1>Recent Trips</h1>
			<p>
				You can discover unique destination using Google Maps
			</p>
			<div className="tripcard">
				<TripData 
					img={Trip1}
					heading="Trip in Indonesia"
					text="The Indonesian archipelago represents one of the 
					 most unusual areas in the world: it encompasses a major 
					 juncture of Earth’s tectonic plates, spans two faunal realms,
					 and has for millennia served as a nexus of the peoples and 
					 cultures of Oceania and mainland Asia."
				/>
				<TripData 
					img={Trip2}
					heading="Trip in Malaysia"
					text="Malaysia tourism provides amazing accessibility and 
					connectivity! The country has the Senai International Airport 
					along with the Kuala Lumpur International Airport and the Kota 
					Kinabalu International Airport. There are flights available from 
					several destinations. The KTM railway network has trains from 
					Thailand and Singapore. You can take day trains from both regions to access Malaysia."
				/>
				<TripData 
					img={Trip3}
					heading="Trip in France"
					text="France, officially French Republic, French France or République Française, 
					country of northwestern Europe. Historically and culturally 
					among the most important nations in the Western world, 
					France has also played a highly significant role in international affairs, 
					with former colonies in every corner of the globe."
				/>
			</div>
		</div>

	)
}

export default Trip;