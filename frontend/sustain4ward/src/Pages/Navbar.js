import HomePage from './HomePage';
import ProdPage from './ProdPage';
import './Navbar.css'
import {useNavigate} from 'react-router-dom';


const Navbar = ()=>{

	const navigate = useNavigate();
	const gotoProdPage = () => {navigate("/products")}
	const gotoHomePage = () => {navigate("/home")}
	const gotoLoginPage = () => {navigate("/login")}
	const gotoSignupPage = () => {navigate("/signup")}
	const gotoCampaignPage = () => {navigate("/campaign")}
	const gotoAboutPage = () => {navigate("/about")}
	return(
		<div id="navbar">
			<p onClick={gotoHomePage}>Home</p>
			<p onClick={gotoProdPage}>Products</p>
			<p onClick={gotoCampaignPage}>Campaigns</p>
			<p id='title' onClick={gotoHomePage}>Sustain4Ward</p>
			<p onClick={gotoAboutPage}>About Us</p>
			<p onClick={gotoLoginPage}>Log In</p>
			<p onClick={gotoSignupPage}>Sign Up</p>
    	</div>
	)
}

export default Navbar;