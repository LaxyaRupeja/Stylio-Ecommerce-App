let SignUp_btn = document.querySelector("#SignUp_btn>button");

SignUp_btn.addEventListener("click", () => {
   location.href = "./signUp.html"
})


let email = document.querySelector("#email>input")
let password = document.querySelector("#password>input")
let notification = document.getElementById("notification")
let button = document.querySelector("#button")

let userdata = JSON.parse(localStorage.getItem("credentials")) || []
console.log(userdata == "")
button.addEventListener("click", function () {
   if (email.value == "admin" && password.value == "admin") {
      window.location.href = "admin_dashboard.html"
   }
   else {
      if (userdata == "") {
         notification.innerText = "Please enter valid information"
         notification.style.color = "red"
         notification.style.fontWeight = "bold"

         if (email !== email.value) {
            email.style.border = "solid red 1px"
         }
         if (password !== password.value) {
            password.style.border = "solid red 1px"
         }
      }

      for (let i = 0; i < userdata.length; i++) {

         if (userdata[i].email == email.value && userdata[i].password == password.value) {
            notification.style.color = "rgb(13, 199, 13)"
            notification.innerText = "Sign In Successful"
            notification.style.fontWeight = "bold"

            Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'You sign In successfully',
               showConfirmButton: false,
               timer: 1500
            })

            setTimeout(function () {
               location.href = "./index.html"
            }, 1800)
         }
         else {
            notification.innerText = "Please enter valid information"
            notification.style.color = "red"
            notification.style.fontWeight = "bold"

            if (userdata[i].email !== email.value) {
               email.style.border = "solid red 1px"
            }
            if (userdata[i].password !== password.value) {
               password.style.border = "solid red 1px"
            }
         }
      }
   }
})

let logo = document.getElementById("logo");

logo.addEventListener("click", () => {
   location.href = "./index.html"
})