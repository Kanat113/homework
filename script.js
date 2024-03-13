const btn = document.querySelector("#timer");



const timer = () => {
    setInterval(() => {
        console.log("test");
    },2000);

}
btn.addEventListener("click", timer);


const number = [1, 2, 5, 3, 3, 325, 35, 56,];
 const result = number.filter((item,index) => {
    if (item > 5 ) { 
        return item
        
    }
  

 });
 console.log(result)

const computers = [
    {
        title: "Macbook Air M1",
        prise:85000,
    },
    {
        title: "Dell",
        prise:65000,
    },
    {
        title: "Asus ZenBook",
        prise:40000,
    },
    {
        title: "Acer Aspire",
        prise:85000,
    },
    {
        title: "Macbook Pro",
        prise:100000,
    },
];
let totalPrise = 0;
for (const val of computers) {
    totalPrise += val.prise;

}
console.log(totalPrise);



const myButton = document.querySelector(".buttone");
function showConsole(){
    myButton.innerHTML = "Start";
  
}


function goBac(){
    myButton.innerHTML = "Finished";
};

setTimeout(function () {
    goBac()
},2000);







function deleteItem(e){
    console.log("Button element", e)
    e.parentElement.remove()
  };


  const button = document.querySelector("#app");
  function showConsole(){
    button.innerHTML = 'App';
  }
  function goBack(){
    button.innerHTML = "(2) New messages";

  };
  setTimeout(function(){
    goBack()
  },2000);

  


  const btnK = document.querySelector("#add");
  function showConsole()  {
    btnK.innerHTML = 'Add cart';
  };
  function gBack(){
    btnK.innerHTML = "added";

  };
  showConsole()
  setTimeout(function (){
    goBack()
  },2000);



