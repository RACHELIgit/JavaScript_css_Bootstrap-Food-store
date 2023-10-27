
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

let mybody1 = document.getElementsByTagName("body")[0]
let mycust = sessionStorage.getItem("mail")
// alert(mycust)
let str = localStorage.getItem(mycust)//מחרוזת שאפשר להמיר אותה לJSON
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


// מערך ההוספות לסל 
let myshopsarr=[]

let cart=document.getElementById("cart")
//--------- מוצרים------------------
let prod0 = { "name": " תותים  ", "price": 20,"hechsher":"בדץ", "src": "../PIC/1.jpg","height":25 ,"count":0};
let prod1 = { "name": "פטל", "price": 18,"hechsher":"בדץ", "src": "../PIC/2.jpg", "height":25 ,"count":0};
let prod2 = { "name": "  אפרסק ", "price": 15,"hechsher":"בדץ", "src": "../PIC/3.jpg", "height":25  ,"count":0};
let prod3 = { "name": "   אגס  ", "price": 13,"hechsher":"בדץ", "src": "../PIC/4.jpg" , "height":25 ,"count":0};
let prod4 = { "name": "   קיווי  ", "price": 13,"hechsher":"בדץ" , "src": "../PIC/5.jpg", "height":25 ,"count":0};
let prod5 = { "name": "   ליצ'י  ", "price": 20, "hechsher":"בדץ" ,"src": "../PIC/6.jpg", "height":25 ,"count":0};
let prod6 = { "name": "   בננה  ", "price": 14, "hechsher":"בדץ", "src": "../PIC/7.jpg", "height":25 ,"count":0};
let prod7 = { "name": "   מנגו  ", "price": 17, "hechsher":"בדץ","src": "../PIC/8.jpg" , "height":25 ,"count":0};
let prod8 = { "name": "   תפוח  ", "price": 7,"hechsher":"בדץ" , "src": "../PIC/9.jpg", "height":25 ,"count":0};
let prod9 = { "name": "   תפוז  ", "price": 11, "hechsher":"בדץ","src": "../PIC/10.jpg" , "height":25 ,"count":0};
let prod10 = { "name": "   אננס  ", "price":25,"hechsher":"בדץ" , "src": "../PIC/11.jpg" , "height":25,"count":0};
let prod11 = { "name": "   דודבן  ", "price": 27, "hechsher":"בדץ","src": "../PIC/12.jpg" , "height":25 ,"count":0};
let prod12 = { "name": "   קלמנטינה  ", "price": 9, "hechsher":"בדץ","src": "../PIC/13.jpg" , "height":25,"count":0 };
let prod13 = { "name": "  תאנה  ", "price": 18,"hechsher":"בדץ", "src": "../PIC/14.jpg", "height":25  ,"count":0};
let prod14 = { "name": "   ענבים  ", "price": 20, "hechsher":"בדץ","src": "../PIC/15.jpg" , "height":25 ,"count":0};



let producs = [prod0, prod1, prod2, prod3,prod4,prod5,prod6,prod7,prod8,prod9,prod10,prod11,prod12,prod13,prod14];
sessionStorage.setItem("ourproduce",JSON.stringify(producs) )

function loadProducts() {
  debugger
let mysec = document.getElementById("mysec")

for (let i = 0; i < producs.length; i++) {
  // דיב ראשי 
  let mydiv = document.createElement("div")
  mydiv.setAttribute("class", "divclass")
  mydiv.setAttribute("data-i", i)
  mydiv.addEventListener("click",f_detiles)
  // תמונת פרי 
let container=document.createElement("div")
container.setAttribute("class","container")

  let myimg = document.createElement("img")
  myimg.setAttribute("src", producs[i].src)
  myimg.setAttribute("class", "imgclass")

 let overlay = document.createElement("div")
 overlay.setAttribute("class", "overlay")
 overlay.innerHTML=producs[i].name
 overlay.setAttribute("data-i", i)

 overlay.appendChild(document.createElement("br"))
// הוסף לסל
 let addbtn=document.createElement("input")
 addbtn.setAttribute("type","button")
 addbtn.setAttribute("value","הוספה לסל")
 addbtn.setAttribute("class","addbtn")
 addbtn.setAttribute("date-i",i)
// 
// let plusbtn=document.createElement("input")
// plusbtn.setAttribute("type","button")
// plusbtn.setAttribute("value","+")
// plusbtn.setAttribute("class","plustn")
// -

// overlay.appendChild(plusbtn)
overlay.appendChild(addbtn)

// addbtn.addEventListener("click", () => {
//   debugger
//   // count++
//   // // cart.innerHTML=count
//   // sessionStorage.setItem('name', producs[i].name)
//   // console.log(sessionStorage.getItem("name"));
//   // // window.location = "shopecart.html";
//   // // alert("הפריט נוסף בהצלחה")
//   // // myshopsarr.push(producs[i])
//   // // if(sessionStorage.getItem("sal")==null)
//   // // sessionStorage.setItem("sal",JSON.stringify([producs[i]]))

//   //   let sal=JSON.parse(sessionStorage.getItem("sal"))
//   //   sal.push(producs[i])
//   //   debugger
//   //   sessionStorage.setItem("sal",JSON.stringify(sal))
//   let ii=Number( event.target.getAttribute("data-i"))
//   console.log(ii)
//   console.log(producs[ii])
//   sessionStorage.setItem("thisprod", JSON.stringify(producs[ii])  )
//    window.location="detiles.html"
//   }
  
// )
 
  let mylink = document.createElement("a")
  mylink.setAttribute("href", "#")
  mylink.setAttribute("class", "myink")
  mylink.addEventListener("click", () => {
    sessionStorage.setItem('name', producs[i].name)
    console.log(sessionStorage.getItem("name"));
    window.location = '';
 
  })

 mylink.appendChild(myimg)

 container.appendChild(overlay)
 container.appendChild(mylink)
mydiv.appendChild(container)
// מחיר 
let price=document.createElement("p")
price.setAttribute("class","p-price")
price.innerHTML=" מחיר :"+ "₪"+producs[i].price
mydiv.appendChild(price)

  mysec.appendChild(mydiv)
}

}

function f_detiles(){
  let ii=Number( event.target.getAttribute("data-i"))
  console.log(producs[ii])
  sessionStorage.setItem("thisprod", JSON.stringify(producs[ii])  )
   window.location="detiles.html"
}


let countcart=document.getElementById("countcart")
countcart.setAttribute("value",sessionStorage.getItem("countproduct"))