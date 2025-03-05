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
    otheritem = document.getElementById("buttontest");

    thebutton.addEventListener("click", onButtonClick);

    function onButtonClick() {  
        otheritem.style.color = "red";  
    }

    button1 = document.getElementById("button1");
    item1 = document.getElementById("test1");

    button1.addEventListener("click", onClick);


    function onClick() {  
        item1.style.color = "green";  
    }







    


    