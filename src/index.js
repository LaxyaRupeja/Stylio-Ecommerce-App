

// to display the flying container on webpage and make background mask
let mask = document.getElementById("layer_mask");
let flycontainer = document.getElementById("dropdown_container");
function displayNavContainer() {
  mask.style.visibility = "visible";
  flycontainer.style.visibility = "visible";
}
function hideNavContainer() {
  mask.style.visibility = "hidden";
  flycontainer.style.visibility = "hidden";
}
let menu_options = document.getElementsByClassName("one");
for (let i = 0; i < menu_options.length; i++) {
  menu_options[i].addEventListener("mouseenter", displayNavContainer);
  menu_options[i].addEventListener("mouseleave", hideNavContainer);
}
flycontainer.addEventListener("mouseenter", displayNavContainer);
flycontainer.addEventListener("mouseleave", hideNavContainer);



if (localStorage.getItem("credentials") == null) {
  localStorage.setItem("credentials", JSON.stringify({ username: null }));
}
let username = JSON.parse(localStorage.getItem("credentials"));
let name1 = username.username;
if (name1 != null) {
  change_info();
}

function change_info() {
  let info = document.getElementById("navbar_info");
  info.innerHTML = null;

  let div1 = document.createElement("div");
  let p1 = document.createElement("p");
  p1.innerText = "Hi " + name1;
  div1.append(p1);

  let div2 = document.createElement("div");
  let p2 = document.createElement("p");
  p2.innerText = "My Account";
  div2.append(p2);

  let div3 = document.createElement("div");
  let p3 = document.createElement("p");
  p3.innerText = "Sign Out";
  p3.id = "sign_out_btn";
  div3.append(p3);

  let div4 = document.createElement("div");
  let p4 = document.createElement("p");
  p4.innerText = "Customer Care";
  div4.append(p4);

  info.append(div4, div3, div2, div1);
}

//signout
let signout_btn = document.getElementById("sign_out_btn");

function signout() {
  localStorage.removeItem("credentials");
  window.location.href = "/";
}
if (signout_btn != null) {
  signout_btn.addEventListener("click", signout);
}