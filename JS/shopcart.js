
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}
let mybody1 = document.getElementsByTagName("body")[0]
let mycust = sessionStorage.getItem("mail")
let str = localStorage.getItem(mycust)
//מחרוזת שאפשר להמיר אותה לJSON
if(str!=null){
let person1 = JSON.parse(str)//את הJSON בעצמו
let bc = person1.colorpage

let f = person1.font
mybody1.style.backgroundColor = bc

mybody1.style.fontFamily = f

//----------------------------------------------------------------
// תגית של השם ש המשתמש הנוכחי 
let hello = document.getElementById("hello")
hello.innerHTML = "שלום " + person1.name

}
let myorders = new Array()

let myarr = sessionStorage.getItem("sal")
myorders = JSON.parse(myarr)




//הקצאה של משתנה מדף הUI
let mysec = document.getElementById("mysec")
let divdiv = document.createElement("div")
let divall = document.createElement("div")
divall.setAttribute("class", "divall")
mysec.appendChild(divall)
divsum = document.createElement("div")
divsum.setAttribute("class", "divsum")
spansum = document.createElement("div")
spansum.setAttribute("class", "spansum")

divsum.appendChild(spansum)
// כפתור תשלום 
btnsum = document.createElement("button")
btnsum.setAttribute("class", "btnsum")

btnsum.innerHTML = "לתשלום"

divsum.appendChild(btnsum)
divdiv.appendChild(divsum)
divdiv.appendChild(divall)
mysec.appendChild(divdiv)
let sum = 0

// כמות מוצרים בסל
let chek=sessionStorage.getItem("countproduct")
let countcart = document.getElementById("countcart")

countcart.setAttribute("value", sessionStorage.getItem("countproduct"))

for (i = 0; i < myorders.length; i++) {
  // sum += (myorders[i].price)*myorders[i].count
  let div1 = document.createElement("div")
  div1.setAttribute("class", "div1")
  divall.appendChild(div1)

  let img = document.createElement("img")
  img.setAttribute("src", myorders[i].src)
  img.setAttribute("class", "imgpic")
  div1.appendChild(img)

  let div2 = document.createElement("div")
  div2.setAttribute("class", "div2")
  div1.appendChild(div2)

  let div3 = document.createElement("div")
  div3.setAttribute("class", "div3")
  div3.innerHTML = myorders[i].name;
  div2.appendChild(div3)

  let div4 = document.createElement("div")
  div4.setAttribute("class", "div4")
  div4.innerHTML = myorders[i].price + "₪";

  div2.appendChild(div4)

  divall.appendChild(div1)
  // הוספה ומחיקה  דיב ראשי 
  let cou = document.createElement("div")
  cou.setAttribute("class", "divcou")

  // להוסיף- כפתור 
  let plus = document.createElement("input")
  plus.setAttribute("type", "button")
  plus.setAttribute("class", "plus")
  plus.setAttribute("data-i", myorders[i].name)
  plus.addEventListener("click", f_plus)
  plus.setAttribute("value", "+")
  cou.appendChild(plus)

  function f_plus() {
    debugger
    for (j = 0; j < myorders.length; j++) {
      if (event.target.getAttribute('data-i') == myorders[j].name) {
        let c = myorders[j].count + 1
        myorders[j].count = c;
        
        camut.value = myorders[j].count

        sessionStorage.setItem("sal", JSON.stringify(myorders))
        window.location.reload()
      }

    }
  }

  // sessionStorage.setItem("xx"+i,myorders[i].count)
  // בעצמה  הכמות
  let camut = document.createElement("input")
  camut.setAttribute("type", "button")
  camut.setAttribute("class", "camut")
  // camut.value=sessionStorage.getItem("xx"+i)  
  camut.value = myorders[i].count
  console.log(myorders[i].count)
  cou.appendChild(camut)

  // להוריד- כפתור 
  let minus = document.createElement("input")
  minus.setAttribute("type", "button")
  minus.setAttribute("class", "minus")
  minus.setAttribute("data-i", myorders[i].name)
  minus.addEventListener("click", f_minus)
  minus.value = "-"
  cou.appendChild(minus)
// להוריד כמות 
  function f_minus() {
    for (j = 0; j < myorders.length; j++) {
      if (event.target.getAttribute('data-i') == myorders[j].name) {
        let c = myorders[j].count -1
        myorders[j].count = c;
        camut.value = myorders[j].count

        sessionStorage.setItem("sal", JSON.stringify(myorders))
        window.location.reload()
      }

    }
  }



  div1.appendChild(cou)
// כפתור מחיקה 
  let btn = document.createElement("button")
  btn.setAttribute("class", 'btn')
  btn.addEventListener("click", f_clik)
  btn.setAttribute("data-i", myorders[i].name)
  console.log(btn.getAttribute("data-i"))
  btn.innerHTML = "✗"
  div1.appendChild(btn)



}

// מחיקה מהסל 
function f_clik() {

  for (j = 0; j < myorders.length; j++) {
    if (event.target.getAttribute('data-i') == myorders[j].name)
      //  delete myorders[j];
      myorders.splice(j, 1)
    
              ////
             chek=chek-1
              sessionStorage.setItem("countproduct",chek);
              window.location.reload()
             
       ///  
    sessionStorage.setItem("sal", JSON.stringify(myorders))
    window.location.reload()
  }

}
// סכום 
for (i = 0; i < myorders.length; i++) {
  sum += (myorders[i].price)*myorders[i].count
 }
spansum.innerHTML = 'סה"כ: ' + sum + ' ש"ח';


btnsum.addEventListener("click",f_pay)

function f_pay(){
  sessionStorage.setItem("sumtopay",sum)
  window.location="pay.html"
}


