<script >
	// import Link from 'lib/Link.svelte'
	// let Card = require('./Card.svelte')
	// import Card2 from './lib/Card2.svelte';
    // import { each } from 'svelte/internal';
    // import Counter from './lib/Counter.svelte';
    // import Card from "./Card.svelte";
	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
	// export let query ;
	async function sendtobknd(){
		let query = document.getElementById("text-input").value
    let resp = await fetch("http://127.0.0.1:5000/extapi/",{method:"POST",
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    body : JSON.stringify(query)
    })
    let respdata = await resp.json()
    datadisp(respdata)
}

sendtobknd()

function datadisp(data){
    let prodcont = document.getElementById("prodcont")
    // prodcont.style.width="600px"
    // document.body.style.backgroundImage = "linear-gradient(red, yellow)"
    // document.body.style.color= "white"
    data.forEach(element => {
        let child = document.createElement("h4")
        child.innerText = element
        prodcont.appendChild(child)
    });
}



</script>

<main>
	<div id="bg-image">
	</div>
		<div id="navbar">
		  <!-- <Link text="Home" --fontsize='1.3rem' --fontWeight="600"></Link>
		  <Link text="Products" --fontsize='1.3rem' --fontWeight="600"></Link>
		  <Link text="Campaigns" --fontsize='1.3rem' --fontWeight="600"></Link>
		  <Link text="Sustain4ward" --fontsize='1.9rem' --fontWeight="600"></Link> -->
		  <!-- <Link text="About Us" --fontsize='1.3rem' --fontWeight="600"></Link> -->
		  <!-- <Link text="Log In" --fontsize='1.3rem' --fontWeight="600"></Link> -->
		  <!-- <Link text="Sign Up" --fontsize='1.3rem' --fontWeight="600"></Link> -->
		  <a href="src\About.svelte">About Us</a>
		  <a href="src\Login.html">Log In</a>
		  <a href="src\Signup.html">Sign Up</a>
	  </div>

	  <!-- <Card></Card> -->
	  <div id="ctn"></div>

	   <div id="tagline-container">
		  <p id="taglinepp">Explore our Products</p>
	  </div>

	  <div id="searchbar">
			<input id="text-input" type="text" placeholder="Search for Products" on:change={sendtobknd}>
	  </div> 

	  <div id="prodcont">

	  </div>
	
	


	  <!-- <div id="test"></div> -->
	  
  
	  <!-- <h1 id="tagline1">Your</h1>
	  <h1 id="tagline2">Actions</h1>
	  <h1 id="tagline3">Matter...</h1> -->
  
	  <!-- <div id="join-us-ctn">
		<p id="join-us-text">Join Us</p>
	  </div> -->
  
  </main>
  
  <style>

	.cat {
		width: 10px;
		height: 10px;
	}

	#ctn {
		display: flex;
	}

	.card {
		width: 50px;
		height: 50px;
	}

	#card-ctn {
		width: 100px;
		height: 100px;
		background-color: grey;
	}

	#tagline-container {
		position: relative;
		width: 100%;
		height: 3rem;
		text-align: center;
		transform: translate(0%, -300% );
		/* padding-bottom: 10rem; */
	}

	#taglinepp {
		font-size: 3rem;
		position: relative;
		margin-top: 22rem;
		display: block;
		color: white;
	}

	#text-input {
		margin-left: 1rem;
		margin-right: 1rem;
		border: none;
		width: 100%;
	}
	#text-input:focus {
		/* margin-left: 1rem; */
		border: none;
		outline: none;
	}

	#searchbar {
		position: relative;
		width: 50%;
		height: 3rem;
		background-color: white;
		display: flex;
		align-items: center;
		/* margin-top: 22rem; */
		margin-left: 19rem;
		border-radius: 5rem;
		transform: translate(0%, -100%);
	}
  
	a{
		  color: #0D3432;
		  font-size: 1.3rem;
		  font-weight: 600;
		  cursor: pointer;
		  opacity: 1;
	  text-decoration: none;
	}
  
	
  
	#navbar {
	  background-color: white;
	  position: fixed;
	  width: 100%;
	  top: 0%;
	  height: 6rem;
	  margin: 0%;
	  opacity: 0.6;
	  display: flex;
	  flex-direction: row;
	  justify-content: space-around;
	  align-items: center;
	  
	}
  
  #bg-image { 
	  background: url(../assets/bg-img2.jpg) no-repeat center center fixed; 
	  -webkit-background-size: cover;
	  -moz-background-size: cover;
	  -o-background-size: cover;
	  background-size: cover;
	  width: 100%;
	  min-height: 100%;
	  top: 0;
	  position: fixed;
	  filter: blur(6px);
	  z-index: -1;
	  transform: scale(1.02);
  }

  @font-face {
  font-family: "quicksand";
  /* src: url("./assets/Jost-Regular.ttf"); */
  src: url("../assets/Quicksand-VariableFont_wght.ttf") format("truetype-variations");
  font-weight: 100 1000;
}

* {
  font-family: quicksand;
}
  </style>
  