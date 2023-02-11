
chrome.runtime.onMessage.addListener((req,sender,sendresp)=>{
    if (req.type == "start"){
        start(sendresp)
    }
    if (req.type == "redirect"){
        redirect(req.link)
    }
})

console.log("ewubf");

function redirect(link){
    // console.log(link);
    chrome.windows.create({
        url: link,
        focused: true,
        state: "maximised"
      })
}

function start (sendresp){
    


let title_ele = document.getElementById("productTitle")
let title_words = title_ele.innerText.split(" ")
for(let i=0 ; i<title_words.length ; i++){
title_words[i].replaceAll(",","")

}
title_words =  title_words.filter((ele)=>{
return ele!=""
})

sendresp({ data : title_words})
}

