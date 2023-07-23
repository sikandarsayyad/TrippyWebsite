import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import ContactImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
	return(
		<>
		<Navbar />
		<Hero
		 heroImg={ContactImg}
		 cName="hero-mid" 
		 title="Contact" 
		/>
		<ContactForm/>
		<Footer/>
		</>
	)
}



export default Contact;