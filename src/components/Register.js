import React, {useState} from "react";

const Register = (props) => {

	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [name, setName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	return(
		<div className="auto-form-container">
			<form onSubmit={handleSubmit} className="register-form">
				<h2>Register-Form</h2>		
				<label htmlFor="name">Your Full Name</label>
				<input value={name} onChange={(e)=>setName(e.target.value)} name="name" id="name" placeholder="full name" type="text" />
				<label htmlFor="email">Email-Id</label>
				<input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
				<label htmlFor="password">Create Password</label>
				<input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
				<button type="submit">Register</button>
			</form>
			<button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
		</div>

	)
}
export default Register;