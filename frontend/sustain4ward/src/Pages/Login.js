import './Login.css'
import {useNavigate} from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const gotoProdPage = () => {navigate("/products")}
	return (
		<div id='login-ctn'>
			<div id="bg-image-login">
			</div>
			<h1 id="login">Login</h1>
			<br></br>
			<form action="/login" method="post">
				<label for="username" className='idk'>Email ID:</label>
				<input type="text" id="email" name="email" className='idk'></input>
				<br></br>
				<label for="password" className='idk'>Password:</label>
				<input type="password" id="password" className='idk' name="password"></input>
				<br></br>
				<input id='subbtn' type="submit" value="Submit" className='idk' onClick={gotoProdPage}></input>
			</form> 
		</div>
	)
}
export default Login;