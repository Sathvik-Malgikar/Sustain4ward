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
		let query = document.getElementById("abc").value
       console.log(query);
    let resp = await fetch(" http://172.16.128.19:5000/extapi/",{method:"POST",
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    body : JSON.stringify(query)
    })
    let respdata = await resp.json()
    datadisp(respdata)
}


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
