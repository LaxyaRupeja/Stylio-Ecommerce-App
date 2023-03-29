// // to display the flying container on webpage and make background mask
// let mask = document.getElementById("layer_mask");
// let flycontainer = document.getElementById("dropdown_container");
// function displayNavContainer() {
//   mask.style.visibility = "visible";
//   flycontainer.style.visibility = "visible";
// }
// function hideNavContainer() {
//   mask.style.visibility = "hidden";
//   flycontainer.style.visibility = "hidden";
// }
// let menu_options = document.getElementsByClassName("one");
// for (let i = 0; i < menu_options.length; i++) {
//   menu_options[i].addEventListener("mouseenter", displayNavContainer);
//   menu_options[i].addEventListener("mouseleave", hideNavContainer);
// }
// flycontainer.addEventListener("mouseenter", displayNavContainer);
// flycontainer.addEventListener("mouseleave", hideNavContainer);





// mid section 
var finalcart = JSON.parse(localStorage.getItem("Allcartproduct"));

finalcart.map(function (item) {

    var product_main_container = document.createElement("div");

    var product_left_container = document.createElement("div");

    var detail_left = document.createElement("div");

    var product_image = document.createElement("img");
    product_image.setAttribute("src",item.img);

    var price1 = document.createElement("h3");
    price1.textContent = "Rs." + " " + item.price;

    var product1 = document.createElement("h4");
    product1.textContent = item.title;


    document.querySelector(".detail_left").append(product_image, product1, price1);
    document.querySelector(".product_left_container").append(detail_left);
    document.querySelector("#product_main_container").append(product_left_container);

})



var finalprice = finalcart.reduce(function(acc, cv) {
    var x = Number(cv.price);
    return acc+x;
}, 0);


var bagtotal = document.createElement("p");
bagtotal.textContent = "₹" + finalprice;

var totalamount = document.createElement("p");
totalamount.textContent = "₹" + finalprice;

document.querySelector(".bag_total_price").append(bagtotal);
document.querySelector(".totalamount").append(totalamount);