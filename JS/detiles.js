function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }


// עיצוב הרקע לפי אותו משתמש 
let mybody1 = document.getElementsByTagName("body")[0]
let mycust=sessionStorage.getItem("mail")
// alert(mycust)
let str=localStorage.getItem(mycust)//מחרוזת שאפשר להמיר אותה לJSON
let person1=JSON.parse(str)//את הJSON בעצמו
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


/// דיב ראשי 
let head=document.getElementById("divdetiles")
// דיב של התמונה 
let imgdiv=document.getElementById("divimg")
//
let myimge=document.getElementById("myimge")


// המוצר לפני המרה בתור מחרוזת 
let strdetiles=sessionStorage.getItem("thisprod")



// המרה לאוביקט
let prod=JSON.parse(strdetiles)

let h1=document.createElement("h1")
h1.innerHTML=prod.name+"-קפוא"
head.appendChild(h1)

// תמונה של המוצר
myimge.setAttribute("src",prod.src)
myimge.setAttribute("class","myimge")
imgdiv.appendChild(myimge)




// דיב ראשי של הפרטים 
let divdetiles=document.createElement("div")
divdetiles.setAttribute("class","divdetiles")

// יש פה את התכנים הנוספים על המוצר
let more=document.createElement("div")
more.setAttribute("class","more")

let p=document.createElement("p")
p.innerHTML="מחיר"+":"+" "+ prod.price+" שח "
// p.setAttribute("class","p")
more.appendChild(p)

// more.appendChild(document.createElement("br"))
// הפרטים על המוצר הכשר מחיר וכו 
let p1=document.createElement("p")
p1.innerHTML="משקל"+":"+" "+ prod.height+" לקג "
// p.setAttribute("class","p")
more.appendChild(p1)


let p2=document.createElement("p")
p2.innerHTML="הכשר"+":"+" "+ prod.hechsher
// p.setAttribute("class","p")
more.appendChild(p2)



// הוספה לסל
let btnadd=document.createElement("input")
btnadd.setAttribute("type","button")
btnadd.setAttribute("value","הוספה לסל ")
btnadd.setAttribute("class","addbtn")
btnadd.addEventListener("click",f_clik)

// ----- חזרה אחרוה --------------------------------------------
let btnbace=document.createElement("input")
btnbace.setAttribute("type","button")
btnbace.setAttribute("value","להמשיך לקנות ")
btnbace.setAttribute("class","btnbace")
btnbace.addEventListener("click",f_clik1)

let divbtn=document.createElement("div")
divbtn.setAttribute("class","divbtn")
divbtn.appendChild(btnbace)
divbtn.appendChild(btnadd)




// יבוא מהסישן את המערך של המוצירם כהכנה להוספה לסל
let mysal=sessionStorage.getItem("sal")
// בדיקה שאין כפילות 
// if(mysal.indexOf(prod.name)==-1){
 let sal=JSON.parse(sessionStorage.getItem("sal"))
 

let mycount=0
for(let i=0;i<sal.length;i++){
  mycount++;
}
// האיקון של עכמות המוצרים 
let countcart=document.getElementById("countcart")

sessionStorage.setItem("countproduct",mycount)
// countcart.setAttribute("value",sessionStorage.getItem("count"))
countcart.setAttribute("value",sessionStorage.getItem("countproduct"))
// הוספה לסל 
function f_clik(){
debugger
// sessionStorage.setItem("count",mycount)



    // let mysal=sessionStorage.getItem("sal")
    // // בדיקה שאין כפילות 
    // // if(mysal.indexOf(prod.name)==-1){
     
     
    // let sal=JSON.parse(sessionStorage.getItem("sal"))
    // prod.count++;
    if(sessionStorage.getItem("sal").indexOf(prod.name)==-1){
      /// בעת שינוי כמות מוצרים עדכון סימון שליד הגעלה 
        mycount++
        sessionStorage.setItem("countproduct",mycount)
       countcart.setAttribute("value",sessionStorage.getItem("countproduct"))
       //-------------------
     prod.count++;
      sal.push(prod)
     
    sessionStorage.setItem("sal",JSON.stringify(sal))
       // ---$
       document .getElementById("overlay").style.display = "block";
    }

   else{
      alert("פריט כבר קים- הכמות עודכנה")
     for(let i=0;i<sal.length;i++){
       if(prod.name==sal[i].name)
       sal[i].count=sal[i].count+1;
       console.log(i)
       console.log(sal[i].count)
     }
     sessionStorage.setItem("sal",JSON.stringify(sal))
   }
      // prod.count++;
      // console.log(prod.count)
      countcart.setAttribute("value",sessionStorage.getItem("countproduct"))
    // 
}
// ---$
function off() {
    document.getElementById("overlay").style.display = "none";
  }

function f_clik1(){
   window.location="produce.html"

}
divdetiles.appendChild(imgdiv)
divdetiles.appendChild(more)
head.appendChild(divbtn)
head.appendChild(divdetiles)



// let cou = document.createElement("div")
//   cou.setAttribute("class", "divcou")

//   // להוסיף- כפתור 
//   let plus = document.createElement("input")
//   plus.setAttribute("type", "button")
//   plus.setAttribute("class", "plus")
//   plus.setAttribute("data-i", prod.name)
//   plus.addEventListener("click", f_plus)
//   plus.setAttribute("value", "+")
//   cou.appendChild(plus)

//   function f_plus() {
//     debugger
  
//         prod.count=prod.count+1;
//         sessionStorage.setItem("thisprod",JSON.stringify(prod))
//   }

//   // sessionStorage.setItem("xx"+i,myorders[i].count)
//   // בעצמה  הכמות
//   let camut = document.createElement("input")
//   camut.setAttribute("type", "button")
//   camut.setAttribute("class", "camut")
//   // camut.value=sessionStorage.getItem("xx"+i)  
//   camut.value =prod.count
//   cou.appendChild(camut)

//   // להוריד- כפתור 
//   let minus = document.createElement("input")
//   minus.setAttribute("type", "button")
//   minus.setAttribute("class", "minus")
//   minus.setAttribute("data-i", myorders[i].name)
//   minus.addEventListener("click", f_minus)
//   minus.value = "-"
//   cou.appendChild(minus)
// // להוריד כמות 
//   function f_minus() {
//     prod.count=prod.count-1;
//     sessionStorage.setItem("thisprod",JSON.stringify(prod))
//   }

// divdetiles.appendChild(cou)