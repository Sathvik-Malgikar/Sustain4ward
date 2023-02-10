<style>
    /* Add some styles for the page */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #F2F2F2;
    }
    .container {
      width: 80%;
      margin: 0 auto;
      text-align: center;
    }
    .header {
      background-color: #00BFA5;
      color: #FFFFFF;
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 36px;
    }
    .content {
      padding: 30px;
    }
    .event {
      background-color: #FFFFFF;
      border-radius: 10px;
      box-shadow: 0px 0px 10px #BBBBBB;
      margin-bottom: 30px;
      overflow: hidden;
    }
    .event-image {
      width: 25%;
      height: 200px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .event-info {
      padding: 30px;
    }
    .event-info h2 {
      margin: 0;
      font-size: 24px;
    }
    .event-info p {
      margin: 0;
      font-size: 18px;
      color: #777777;
    }

    #bg-image { 
    background: url(./assets/bg-img2.jpg) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    min-height: 100%;
    top: 0;
    position: relative;
    /* filter: blur(2px);
    z-index: -1;
    transform: scale(1.02); */
}

</style>

<div id="bg-image">
	<div class="container">
	  <!-- header section -->
	  <div class="header">
		<h1>Eco-Friendly Events</h1>
	  </div>
	  <!-- content section -->
	  <div class="content">
		<!-- event 1 -->
		<div class="event">
		  <div class="event-image" style="background-image: url('./assets/img1.jpg')"></div>
		  <div class="event-info">
			<h2>PLANTATION OF SAPLINGS </h2>
			<p>Date: February 15, 2023</p>
			<p>Location: Freedom Park, Bangalore</p>
			<p>Join us for a day of fun and eco-friendly activities in Freedom Park!</p>
		  </div>
		</div>
		<!-- event 2 -->
		<div class="event">
		  <div class="event-image" style="background-image: url('./assets/img2.jpg')"></div>
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