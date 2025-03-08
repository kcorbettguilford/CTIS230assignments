myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);

function onClick() {  
    myitem.style.color = "red"; 
    myitem.style.fontSize = "52px"

    //turns first heading red and enlarges text
}
myitem = document.getElementById("firsttest");

    myitem.addEventListener("mouseover", onmouseover);

    function onmouseover() {  
        myitem.style.color = "blue";  
        myitem.style.fontSize = "36px";
    }
    thebutton = document.getElementById("thebutton");  
    otheritem1 = document.getElementById("buttontest");

    thebutton.addEventListener("click", onButtonClick);

    function onButtonClick() {  
        otheritem1.style.color = "red";  
    }

    button1 = document.getElementById("button1");
    theitem1 = document.getElementById("test1");

    button1.addEventListener("click", onClick);

    function onClick() {  
        theitem1.style.color = "green";  
    }

    textentry = document.getElementsByTagName("myinput");  
    textentry.addEventListener("change", onChange);

    function onChange() {  
        newtext = myinput.value; 
        otheritem.innerHTML = newtext;  
        
    }








    


    