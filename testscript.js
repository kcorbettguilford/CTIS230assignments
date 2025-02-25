myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);

function onClick() {  
    myitem.style.color = "green";
    myitem.style.backgroundColor = "whitesmoke"
// Event detail goes green and whitesmoke background
}
thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick);

function onButtonClick() {  
     otheritem.style.color = "red"; 
}
thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick);

function onButtonClick() {  
     otheritem.style.color = "red"; 
}


