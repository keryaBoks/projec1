let swithcMode = document.getElementById("switchMode");

swithcMode.onclick = function(){
    let theme = document.getElementById('theme')

    if(theme.getAttribute("href")== "css/index.css"){
        theme.href = "css/dark-mode.css"
    }else{
        theme.href = "css/index.css"
    }
}