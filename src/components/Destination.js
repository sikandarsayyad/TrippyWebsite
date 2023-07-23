import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyle.css";

const Destination = () =>{
	return(
		<div className="destination">
			<h1>Popular Destinations</h1>
			<p>Tours give you the opportunity to see a lot, within a time frame.</p>
			< DestinationData
				className="first-des" 
				heading = "Taal Volcano, Batangas"
				text = "One of the most iconic view in Luzon, Mt. Tall boasts a volcano inside a lake inside
					 an island. If you fancy a closer look, the hike up the crater is a mere 45 minutes, and
					  is easy enough for beginners. Guide will assist you most of the way, and you will see the 
					  peculiar environment found om an active volcano, including volcanic rocks and steam vents. 
					  The hike can be dusty and hot, so plan for an early morning trip, and the unwind with some 
					  bulalo before heading back home!"
			    img1={Mountain1}
			    img2={Mountain2}
			 />
			 < DestinationData 
			 	className="first-des-reverse" 
				heading = "Mt. Daguldul, Batangas"
				text = "If you're looking for a hike that's a little more challenging but still good for a beginner mountainer.
					  One of the most iconic view in Luzon, 
					  If you fancy a closer look, the hike up the crater, and
					  is easy enough for beginners. Guide will assist you most of the way, and you will see the 
					  peculiar environment found om an active volcano, including volcanic rocks and steam vents. 
					  The hike can be dusty and hot, so plan for an early morning trip, once straight to the beach down,
					  head straight to the beach for a refreshing!"
			    img1={Mountain3}
			    img2={Mountain4}
			 />
		</div>
	)
}
export default Destination;