

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

