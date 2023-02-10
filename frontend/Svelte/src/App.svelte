<script>
  import Link from './lib/Link.svelte'
</script>

<main>
  <div id="bg-image">
    <div id="navbar">
        <Link text="Home" --fontsize='1.3rem' --fontWeight="600"></Link>
        <Link text="Products" --fontsize='1.3rem' --fontWeight="600"></Link>
        <Link text="Campaigns" --fontsize='1.3rem' --fontWeight="600"></Link>
        <Link text="Sustain4ward" --fontsize='1.9rem' --fontWeight="600"></Link>
        <!-- <Link text="About Us" --fontsize='1.3rem' --fontWeight="600"></Link> -->
        <!-- <Link text="Log In" --fontsize='1.3rem' --fontWeight="600"></Link> -->
        <!-- <Link text="Sign Up" --fontsize='1.3rem' --fontWeight="600"></Link> -->
        <a href="src\About.svelte">About Us</a>
        <a href="src\Login.html">Log In</a>
        <a href="src\Signup.html">Sign Up</a>
    </div>

    <h1 id="tagline1">Your</h1>
    <h1 id="tagline2">Actions</h1>
    <h1 id="tagline3">Matter...</h1>

    <div id="join-us-ctn">
      <p id="join-us-text">Join Us</p>
    </div>

  </div>
</main>

<style>

  a{
		color: #0D3432;
		font-size: 1.3rem;
		font-weight: 600;
		cursor: pointer;
		opacity: 1;
    text-decoration: none;
  }

  #join-us-text {
    font-size: 1.9rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
    font-weight: 500;
    
  }

  #join-us-ctn {
    width: 15rem;
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C6FFC1;
    border-radius: 10rem;
    position: relative;
    left: 83%;
    top: 4rem;
    color: #0D3432;

  }

  #tagline1 {
    font-size: 3rem;
    font-weight: 500;
    color: white;
    margin-top: 13rem;
    margin-bottom: 0rem;
    margin-left: 5%;
  }

  #tagline2, #tagline3 {
    font-size: 3rem;
    font-weight: 500;
    color: white;
    margin: 0rem;
    margin-left: 5%;
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
    background: url(./assets/bg-img2.jpg) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    min-height: 100%;
    top: 0;
    position: fixed;
    /* filter: blur(2px); */
    z-index: -1;
    transform: scale(1.02);
}
</style>
