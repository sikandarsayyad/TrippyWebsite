import "./ContactFormStyle.css";

const ContactForm = () => {
	return(
		<div className="form-container">
			<h1>Send a message to us!</h1>
			<form>
				<input type="text" placeholder="Name" name="name"/>
				<input type="email" placeholder="Email" name="email"/>
				<input type="text" placeholder="subject" name="subject"/>
				<textarea placeholder="Message" name="message"></textarea>
				<button>Send Message</button>
			</form>

		</div>
	)
}
export default ContactForm;