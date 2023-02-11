
import { useState } from 'react';
import Card from './Card';
import Navbar from './Navbar';
import './Prodpage.css'

// function spawn(){}



const ProdPage = () => {
	const [data, setData] = useState([]);

	function spawn(data){
		setData([])
		let out = []
		let e
		data.forEach((e, i)=>{
			console.log("spawn", e)
			out.push(<Card props={e} key={i}></Card>)
		})
		// sh(out)
		setData(out)
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
	function fetchFromB2(query){
		const myArray = query.split(" ");
		console.log("myar ", myArray);
		sendtobknd(myArray)
	}
	
	 function sendtobknd(myArray){
			
		// let resp = await fetch("http://10.5.52.120:5000/webapi/",{method:"POST",
		// headers: {
		//     'Content-Type': 'application/json'
		//     // 'Content-Type': 'application/x-www-form-urlencoded',
		//   },
		// body : JSON.stringify(myArray)
		// })
		// let respdata = await resp.json()
		// // console.log(respdata)
		// spawn(respdata)
	
	fetch("http://10.5.52.120:5000/webapi/",{method:"POST",
		headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		  },
		body : JSON.stringify(myArray)
		}).then(resp=>{
			return resp.json()
		}).then(data=>{
			console.log(data)
			spawn(data)
		})
	}


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
					<input id="text-input" type="text" placeholder="Search for Products" onKeyDown={fetchFromB} ></input>
				</div>

				<div id='card-ctn'>
					{data}	
				</div>
		</div>

	)
}
export default ProdPage;