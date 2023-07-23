
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";


const About = () => {
	return(
		<>
		<Navbar />
		<Hero
		 heroImg={AboutImg}
		 cName="hero-mid" 
		 title="About" 
		/>
		<AboutUs/>
		<Footer/>
		</>
	)
}

export default About;