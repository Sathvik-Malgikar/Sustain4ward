import './Login.css'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

// const navigate = useNavigate();
// const gotoProdPage = () => {navigate("/products")}

const Login = () => {

	const [data, setData] = useState({});
	const [init, setInit] = useState(
		<div id='login-ctn'>
			<div id="bg-image-login">
			</div>
			<h1 id="login">Login</h1>
			<br></br>
			<form onSubmit={e=>e.preventDefault()}>
				<label for="username" className='idk'>Email ID:</label>
				<input type="text" id="email" name="email" className='idk'></input>
				<br></br>
				<label for="password" className='idk'>Password:</label>
				<input type="password" id="password" className='idk' name="password"></input>
				<br></br>
				<button id='subbtn' value="Submit" className='idk'  onClick={foo} onSubmit={e=>e.preventDefault()}>Submit</button>
			</form> 
		</div>
	)
	const [init2, setInit2] = useState(
		<div id='login-ctn'>
			<div id="bg-image-login">
			</div>
			<h1 id="login">Login</h1>
			<br></br>
			<form action="/login" method="post">
				<label for="username" className='idk'>Email:</label>
				<label type="text" id="email" name="email" className='idk'>{data.email}</label>
				<br></br>
				<label for="password" className='idk'>Points:</label>
				<label type="password" id="password" className='idk' name="password">{data.score}</label>
				<br></br>
				<input id='subbtn' type="submit" value="Submit" className='idk' onClick={foo}></input>
			</form> 
		</div>
	)

	function foo(){
		let e = document.getElementById("email")
		let p = document.getElementById("password")

		console.log(e.value, p.value)

		fetch("http://172.16.128.19:5000/signin/",{method:"POST",
		headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		  },
		body : JSON.stringify({"email":e.value, "password":p.value})
		}).then(resp=>{
			return resp.json()
		}).then(data=>{
			setData(data)
			setInit(init2)
		})

	}
	
	return (
		init
	)
}
export default Login;