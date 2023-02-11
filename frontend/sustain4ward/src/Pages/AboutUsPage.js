import './AboutUsPage.css'

const AboutUsPage = ()=>{
	return(
		<div>
			<div id="bg-image-about">
			</div>
			<br></br>
			<header>
				<h1 className='about'>About Us</h1>
			</header>
		
			<section>
				<h2 className='about'>Our Mission</h2>
				<p className='about'>CUT DOWN CARBON EMISSION</p>
			</section>
		
			<section>
				<h2 className='about'>Our Team</h2>
				<p className='about'>Our team is comprised of dedicated professionals with years of experience in their respective fields. Together, we work to bring you the best possible experience.</p>
			</section>
		
			<section>
				<h2 className='about'>Contact Us</h2>
				<p className='about'>If you have any questions or would like to learn more about our company, please don't hesitate to reach out to us. Our contact information is listed below.</p>
				<p className='about'>Email: sustain4ward@gmail.com</p>
				<p className='about'>Phone: (555) 555-5555</p>
			</section>
		
			<footer>
				<p className='about'>Copyright &copy; 2023 Our Company</p>
			</footer>
		</div>
		)
}

export default AboutUsPage;