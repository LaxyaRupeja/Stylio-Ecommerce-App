let SignUp_btn = document.querySelector("#SignUp_btn>button");

SignUp_btn.addEventListener("click", ()=>{
   location.href = "./signIn.html"
})

let name  = document.querySelector("#name>input")
let phone  = document.querySelector("#phone>input")
let email  = document.querySelector("#email>input")
let password  = document.querySelector("#password>input")
let button  = document.querySelector("#button")



let userdata = JSON.parse(localStorage.getItem("credentials")) ||[]
   
button.addEventListener("click", function(){

   if(name.value ==""){
      notification.innerText ="All fields are important please enter valid information"
      notification.style.color ="red"
      notification.style.fontWeight ="bold"

      if(email.value ==""){
         email.style.border = "solid red 1px"
      }
      if(name.value ==""){
         name.style.border = "solid red 1px"
      }
      if(password.value ==""){
         password.style.border = "solid red 1px"
      }
      if(phone.value ==""){
         phone.style.border = "solid red 1px"
      }
      
   }
   else{
      let obj = {};

      obj.name = name.value
      obj.phone = phone.value
      obj.email = email.value
      obj.password = password.value
   
      userdata.push(obj)
   
      localStorage.setItem("credentials", JSON.stringify(userdata))

      Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'You sign In successfully',
         showConfirmButton: false,
         timer: 1500
       })

       setTimeout(function(){
         location.href = "./signIn.html"
       },1500)
   } 
})

let logo = document.getElementById("logo");

logo.addEventListener("click", ()=>{
   location.href = "./index.html"
})


