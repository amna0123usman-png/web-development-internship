// Change Text

function changeText(){

document.getElementById("heading").innerHTML="DOM Updated Successfully!";

document.getElementById("paragraph").innerHTML="The text has been changed using JavaScript.";

}


// Button Click Event

document.getElementById("alertBtn").addEventListener("click",function(){

alert("Congratulations! You clicked the button.");

});


// Show / Hide

function toggleParagraph(){

let para=document.getElementById("paragraph");

if(para.style.display==="none"){

para.style.display="block";

}

else{

para.style.display="none";

}

}


// Change Background

function changeColor(){

let colors=["#FADBD8","#D6EAF8","#D5F5E3","#FCF3CF","#E8DAEF","#FDEBD0"];

let random=Math.floor(Math.random()*colors.length);

document.body.style.background=colors[random];

}


// Reset

function resetPage(){

document.getElementById("heading").innerHTML="Welcome to DOM Practice";

document.getElementById("paragraph").innerHTML="This project demonstrates JavaScript DOM Manipulation.";

document.getElementById("paragraph").style.display="block";

document.body.style.background="#f4f6f9";

}