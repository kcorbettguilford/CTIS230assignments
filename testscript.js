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
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}





    


    