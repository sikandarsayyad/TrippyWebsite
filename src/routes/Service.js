import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import ServiceImg from "../assets/3.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

const Service = () => {
	return(
		<>
		<Navbar />
		<Hero
		 heroImg={ServiceImg}
		 cName="hero-mid" 
		 title="Service" 
		/>
		<Trip/>
		<Footer/>
		</>
	)
}



export default Service;