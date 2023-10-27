
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }



  let mybody1 = document.getElementsByTagName("body")[0]
let mycust=sessionStorage.getItem("mail")
alert(mycust)
let str=localStorage.getItem(mycust)//מחרוזת שאפשר להמיר אותה לJSON
if (str !== null) {
  let person1 = JSON.parse(str);
console.log(person1);
  let bc = person1.colorpage
let count=0;
let f = person1.font
mybody1.style.backgroundColor = bc
let countproduces=document.getElementById("countproduces")
mybody1.style.fontFamily = f

//----------------------------------------------------------------
let hello = document.getElementById("hello")
hello.innerHTML = "שלום " +person1.name
}

let countcart=document.getElementById("countcart")
countcart.setAttribute("value",sessionStorage.getItem("countproduct"))