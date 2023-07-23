import React, {useState} from "react";


const Login = (props) => {

	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	}


	return(
		<div className="auto-form-container">
			<h2>Login-Form</h2>
			<form onSubmit={handleSubmit} className="login-form">
				<label htmlFor="email">Email</label>
				<input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
				<label htmlFor="password">Password</label>
				<input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
				<button type="submit">Sign-In</button>
			</form>
			<button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
		</div>
	)
}
export default Login;