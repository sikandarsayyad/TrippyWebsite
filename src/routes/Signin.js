import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Register from '../components/Register';
import '../components/SigninStyle.css';
import React, { useState } from "react";


const Signin = () => {

	const[currentForm, setCurrentForm] = useState('login');

	const toggleForm = (formName)=>{
	    setCurrentForm(formName);
	}
	return(
		<div>
			<Navbar />
			<div className="form">
		      {
		        currentForm === "login"? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
		      }
		    </div>
		</div>

	)
}
export default Signin;