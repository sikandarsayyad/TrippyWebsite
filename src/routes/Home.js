
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import HomeImg from "../assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

const Home = () => {
	return(
		<>
		<Navbar />
		<Hero
		 heroImg={HomeImg}
		 cName="hero" 
		 title="Your Journey Your Story" 
		 text="Choose Your favourite Destination"
		 buttonText="Travel Plan"
		 url="/"
		 btnClass="show"
		/>
		<Destination/>
		<Trip/>
		<Footer/>
		</>
	)
}

export default Home;