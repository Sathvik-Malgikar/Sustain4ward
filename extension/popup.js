
let btn = document.getElementById("start")
btn.addEventListener("click",()=>{
    chrome.tabs.query({active : true , currentWindow : true } ,function (tabs){
        chrome.tabs.sendMessage( tabs[0].id ,{type: "start"} ,(resp)=>{
            sendtobknd(resp.data)
        }  )
    } )
})


function sendtobknd(data){
    fetch("localhost:5000/ext",{method:"POST",
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    body : JSON.stringify(data)
    }).then(resp=>{
        console.log("sent successfully");
    })
}
