function showInputValue() {
    console.log(event.target.value);
    document.querySelector('.heading').innerText = event.target.value;
} 

const btn = document.querySelector(".js-btn");
function changeButtonText() {
    if (btn.innerText === "On"){
        btn.innerHTML = "Of";
        btn.classList.add('class');
    }else{
        btn.innerHTML = "On"
        btn.classList.remove('class');
    }
}


const button = document.querySelector("#click");
 
const myButton =document.querySelector(".name");
const input = document.querySelector(".btn");


function myFunction () {
  
document.getElementById('kan').value = document.getElementById('name').value;
}


const clickHandler = () => {
    console.log(input.value);
} 

function myFunction() {
    document.getElementById("field2").value = document.getElementById("field1").value;
  }



const myBotton = document.querySelector ("button1");

function display1()  {
    document.querySelector(".hm").innerHTML = '1';
  
}
const myBotton1 = document.querySelector("button2");
function display2(){
    document.querySelector(".eki").innerHTML = '2';
}
const myBotton3 = document.querySelector("button3");
function display3()  {
    document.querySelector(".uch").innerHTML = '3';
  
}
function display4()  {
    document.querySelector(".tort").innerHTML = '+';


    }
  











