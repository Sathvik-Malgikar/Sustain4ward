import Card from './Card';
import Navbar from './Navbar';
import './Prodpage.css'

// function spawn(){}

function spawn(data){
	let out = []
	data.forEach((e, i)=>{
		out.push(<Card name={e.prodname} value={e.ecoval}></Card>)
	})
}

function fetchFromB(e){

	if (e.keyCode == 13){
		let searchbar = document.getElementById("text-input")

		let query = searchbar.value
		const myArray = query.split(" ");
		console.log("myar ", myArray);
		sendtobknd(myArray)
	}
}

async function sendtobknd(myArray){
		
    let resp = await fetch("http://127.0.0.1:5000/webapi/",{method:"POST",
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    body : JSON.stringify(myArray)
    })
    let respdata = await resp.json()
    spawn(respdata)
}

const ProdPage = () => {
	return(
		<div>
			<div id="bg-image-prod">
			</div>
				
				<Navbar></Navbar>
				<div id="ctn"></div>
				
				<div id="tagline-container">
					<p id="taglinepp">Explore our Products</p>
				</div>
				
				<div id="searchbar">
					<input id="text-input" type="text" placeholder="Search for Products" onKeyDown={fetchFromB}></input>
				</div>

				<div id='card-ctn'>
					{/* {spawn()} */}
					
				</div>
		</div>

	)
}
export default ProdPage;