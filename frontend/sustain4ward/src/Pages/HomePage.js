import './Homepage.css'
import Navbar from './Navbar';
import {useNavigate} from 'react-router-dom';


const HomePage = () => {
	const navigate = useNavigate();
	const gotoProdPage = () => {navigate("/products")}
	return(
	<div id="bg-image-home">
		<Navbar></Navbar>

		<h1 id="tagline1">Your</h1>
		<h1 id="tagline2">Actions</h1>
		<h1 id="tagline3">Matter...</h1>

		<div id="join-us-ctn">
		<p id="join-us-text" onClick={gotoProdPage}>Join Us</p>
		</div>

  	</div>
	)
}

export default HomePage;
