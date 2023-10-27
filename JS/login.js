let newb=document.getElementById("newlog")
newb.addEventListener("click",click)

sessionStorage.setItem("countproduct",0)
let countcart=document.getElementById("countcart")
countcart.setAttribute("value",sessionStorage.getItem("countproduct"))


countcart.setAttribute("value",sessionStorage.getItem("countcart"))

function click()
{
    window.location="newlogin.html"
}

let t_name1=document.getElementById("logmyname")
t_name1.addEventListener("blur",f_blur)


let t_pas=document.getElementById("logmynpas")
let btn=document.getElementById("btnOk")
btn.addEventListener("click",f_click)

function f_click(){
    sessionStorage.setItem("mail",t_name1.value)
    debugger
   alert(t_name1.value)
           if(localStorage.getItem(t_name1.value)!=null)//אם לא קיים תשמור אותו
            {
                
                let str=localStorage.getItem(t_name1.value)//מחרוזת שאפשר להמיר אותה לJSON
                let person1=JSON.parse(str)//את הJSON בעצמו
                let p=person1.paaword
              
               if(p==t_pas.value){//אם היוזר כתב נכון
                let arr = new Array()
            sessionStorage.setItem("sal", JSON.stringify(arr))
            // אתחול כמות מוצרים 
               
                   window.location="home.html"
               }
               else   
                     alert(" סיסמא שגויה/ משתמש לא קים  ")
           }

    }
    function f_blur(){

        if(localStorage.getItem(t_name1.value)!=null)//אם לא קיים תשמור אותו
                {
                    
                    let str=localStorage.getItem(t_name1.value)//מחרוזת שאפשר להמיר אותה לJSON
                    let person1=JSON.parse(str)//את הJSON בעצמו
                    t_pas.value=person1.paaword}
        
    }
