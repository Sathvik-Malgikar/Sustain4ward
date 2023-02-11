import './Signup.css'
import {useNavigate} from 'react-router-dom';


const Signup = () => {
	const navigate = useNavigate();
	const gotoLoginPage = () => {navigate("/login/")}
	 function foo(e){
		e.preventDefault()
		let name = document.getElementById("name").value
		let email = document.getElementById("email").value
		let password = document.getElementById("password").value
		let data =  {"name" : name ,"email" :email , "password" : password}
		 fetch("http://10.5.52.120:5000/signup/",{method:"POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body : JSON.stringify(data)
	}).then(resp=>{
		if (resp.status == 200)
		console.log("signed up new user!");
		else
		console.log("already exists!");
		
		gotoLoginPage()
		
	})
	}
	return (
		<div id='signup-ctn'>
			<div id="bg-image-signup">
			</div>
			<h1 id="signup">Sign Up</h1>
			<form  >
				<label for="username" className='idk'>Name:</label>
				<input type="text" id="name" name="name" className='idk'></input>
				<br></br>

				<label for="username" className='idk'>Email ID:</label>
				<input type="text" id="email" name="email" className='idk'></input>

				<br></br>
				<label for="password" className='idk'>Password:</label>
				<input type="password" id="password" className='idk' name="password"></input>
				<br></br>
				<button type='submit' onClick={foo} className='idk' >Submit</button>
			</form> 
		</div>
	)
}

export default Signup;