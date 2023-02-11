import './Signup.css'
import {useNavigate} from 'react-router-dom';



const Signup = () => {
	const navigate = useNavigate();
	const gotoLoginPage = () => {navigate("/login")}
	return (
		<div id='signup-ctn'>
			<div id="bg-image-signup">
			</div>
			<h1 id="signup">Sign Up</h1>
			<form action="/login" method="post">
				<label for="username" className='idk'>Name:</label>
				<input type="text" id="name" name="name" className='idk'></input>
				<br></br>

				<label for="username" className='idk'>Email ID:</label>
				<input type="text" id="email" name="email" className='idk'></input>

				<br></br>
				<label for="password" className='idk'>Password:</label>
				<input type="password" id="password" className='idk' name="password"></input>
				<br></br>
				<input id='subbtn' type="submit" value="Submit" className='idk' onClick={gotoLoginPage}></input>
			</form> 
		</div>
	)
}
export default Signup;