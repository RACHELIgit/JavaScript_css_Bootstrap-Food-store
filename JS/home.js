
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }


// עיצוב הרקע לפי הצבע של המשתמש 
  let mybody1 = document.getElementsByTagName("body")[0]
let mycust=sessionStorage.getItem("mail")
// alert(mycust)
let str=localStorage.getItem(mycust)//מחרוזת שאפשר להמיר אותה לJSON
let person1=JSON.parse(str)//את הJSON בעצמו
let bc=person1.colorpage
let nn="שלום "+person1.name;
let f=person1.font
mybody1.style.backgroundColor=bc

mybody1.style.fontFamily=f

//----------------------------------------------------------------

let hello=document.getElementById("hello")
hello.innerHTML=nn

let countcart=document.getElementById("countcart")
countcart.setAttribute("value",sessionStorage.getItem("countproduct"))