
let btn = document.getElementById("start")

btn.addEventListener("click",()=>{
    chrome.tabs.query({active : true , currentWindow : true } ,function (tabs){
        chrome.tabs.sendMessage( tabs[0].id ,{type: "start"} ,(resp)=>{
            sendtobknd(resp.data)
        }  )
    } )
})


async function sendtobknd(data){
    let resp = await fetch("http://127.0.0.1:5000/extapi/",{method:"POST",
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    body : JSON.stringify(data)
    })
    let respdata = await resp.json()
    datadisp(respdata)
}

function datadisp(data){
    let prodcont = document.getElementById("prodcont")
    prodcont.style.width="600px"
    document.body.style.backgroundImage = "linear-gradient(red, yellow)"
    document.body.style.color= "white"
    data.forEach(element => {
        child = document.createElement("h4")
        child.innerText = element
        prodcont.appendChild(child)
    });
}
