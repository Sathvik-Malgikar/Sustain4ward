
let btn = document.getElementById("start")

btn.addEventListener("click",()=>{
    chrome.tabs.query({active : true , currentWindow : true } ,function (tabs){
        chrome.tabs.sendMessage( tabs[0].id ,{type: "start"} ,(resp)=>{
            sendtobknd(resp.data)
        }  )
    } )
})


async function sendtobknd(data){
    btn.disabled = true
    console.log("snet");
    let resp = await fetch("http://127.0.0.1:5000/extapi/",{method:"POST",
    headers: {
        'Content-Type': 'application/json'
      },
    body : JSON.stringify(data)
    })
    let respdata = await resp.json()
    datadisp(respdata)
}

function datadisp(data){
    let cfpvalue = data.pop()
    let prodcont = document.getElementById("prodcont")
    prodcont.style.width="600px"
    document.getElementById("cfpdiv").style.backgroundColor = "skyblue"
    document.getElementById("cfp").style.color = "red"
    document.body.style.backgroundImage = "radial-gradient(white,  #90EE90)"
    document.body.style.color= "white"
    prodcont.innerHTML=""
    data.forEach((element) => {
        child = document.createElement("h4")
        child.innerText = element
        child.style.overflow = "hidden"
        child.style.color = "blue"
        child.style.textDecoration = "underline"
        child.style.textOverflow = "ellipsis"
        child.style.fontSize = "20"
        child.addEventListener("click" , (event)=>{
            console.log(event.target.innerText);
            fetch("http://127.0.0.1:5000/getlink/"+event.target.innerText).then(resp=>{
                
                return resp.json()
            }).then((data)=>{
                redirect(data.link)
            })
        })
        let offset = document.createElement("p")
        offset.innerText="-"+ element.length
        offset.style.color= "green"
        offset.style.fontSize= "larger"
        offset.textShadow = "2px 2px 5px #00000070;"
        child.appendChild(offset)
        prodcont.appendChild(child)
    });
    btn.disabled = false;
    let cfp = document.getElementById("cfp")
    cfp.innerHTML  = cfpvalue
    cfp.style.fontSize = "xx-large"
}

function redirect(link){

    document.body.style.color = "black"
    document.getElementById("loading").innerText="loading...please wait"
    let notifoptions = {
        type : "basic",
        title : "Keep going and save the world!",
        message : "You have created a carbon offset of 0.3 tons ! Pat yourself on the back!",
        iconUrl : "logo.png"
    }
    chrome.notifications.create("mynotif"+Date.now.toString(),notifoptions)

    setTimeout(()=>{
        document.body.style.color = "black"
        document.getElementById("loading").innerText=""

    },3000)
    console.log(link , typeof link);
    chrome.tabs.create({
        url: link,
      })

    chrome.tabs.query({active : true , currentWindow : true } ,function (tabs){
        chrome.tabs.sendMessage( tabs[0].id ,{type: "redirect" , link : link} )
    } )
}
