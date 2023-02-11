import './CampaignPage.css'

const CampaignPage = ()=>{
	return(
		<div id="bg-image-camp">
			<div class="container">
			<div class="header">
				<h1>Eco-Friendly Events</h1>
			</div>
			<div class="content">
				<div class="event">
				<div id='img1-ctn' class="event-image"></div>
				<div class="event-info">
					<h2>PLANTATION OF SAPLINGS </h2>
					<p>Date: February 15, 2023</p>
					<p>Location: Freedom Park, Bangalore</p>
					<p>Join us for a day of fun and eco-friendly activities in Freedom Park!</p>
				</div>
				</div>
				<div class="event">
				<div  id="img2-ctn" class="event-image"></div>
				<div class="event-info">
					<h2>ECO MARATHON</h2>
					<p>Date: March 25, 2023</p>
					<p>Location: Avenue Road</p>
					<p>Join us for an eco marathon....RUN FOR MOTHER EARTH</p>
				</div>
			</div>
			</div>
			</div>

		</div>

	)
}

export default CampaignPage;