let myname = document.getElementById("myname")
myname.addEventListener("keypress", f_name)
debugger
let paswwod = document.getElementById("paswwod")
paswwod.addEventListener("blur", f_paswwod)

let name1 = " ";

let myemail = document.getElementById("email")
myemail.addEventListener("blur", f_email)
let email = "";

// בדיקות אימייל
function f_email() {
    email = myemail.value
    if (email.indexOf("@") == -1 && email.indexOf(".") == -1) {
        event.preventDefault()//ביטול הארוע
        alert("הכנס כתובת מייל תקינה")

    }

    sessionStorage.setItem("mail", email)

}
// בדיקות שם
function f_name() {
    name1 = myname.value

    if (event.keyCode >= 48 && event.keyCode <= 57) {
        event.preventDefault()//ביטול הארוע
        alert("הכנס רק אותיות")
    }

}



// בדיקות סיסמא
let str1 = ""
function f_paswwod() {
    str1 = paswwod.value
    if (str1.length < 5) {
        //   
        event.preventDefault()//ביטול הארוע

        alert(" על הסיסמא להכיל לפחות 8 תוים")
    }


}



// הבאדי 
let mybody = document.getElementsByTagName("body")[0]
////

let mynuv = document.getElementsByTagName("nav")[0]
// רקע עמוד
let colorpage = document.getElementById("bacraundcolor")

colorpage.addEventListener("blur", f_colorpage)

// צבע עמוד
let colorp = " "
function f_colorpage() {
    colorp = colorpage.value
    mybody.style.backgroundColor = colorp

}


// סוג פונט
let font = document.getElementById("font")
font.addEventListener("blur", f_font)

let ftype = ""
function f_font() {

    ftype = font.value
    mybody.style.fontFamily = ftype

}

// המשך
let btnsubmit = document.getElementById("submit")
btnsubmit.addEventListener("click", f_submit)


function f_submit() {
    if (email == null) {
        alert("חובה לרשום כתובת מייל")
    }
    if (name1 == null) {
        alert("חובה לרשום שם")
    }
    if (str1 == null) {
        alert("חובה להזין סיסמא")
    }
    else {
        if (email != null && name1 != null && str1 != null) {
            let person1 = {
                "paaword": str1, "name": myname.value
                , "mail": email, "colorpage": colorp, "font": ftype
            };
            let json = JSON.stringify(person1)
            localStorage.setItem(email, json)
            let arr = new Array()
            sessionStorage.setItem("sal", JSON.stringify(arr))
            window.location = "home.html"
        }
    }

}

let countcart=document.getElementById("countcart")
countcart.setAttribute("value",sessionStorage.getItem("countproduct"))
