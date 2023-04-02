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

// mid section start **********************


let userdata = JSON.parse(localStorage.getItem("credentials")) || []

let orderText = document.getElementById('orderText')
if (userdata !== undefined) {
  orderText.innerHTML = `Thank you ${userdata[0].name}, for placing an order with us. Your order <span>FL026676849</span> is confirmed We expect to deliver you order within 7 days.`
}
function goToHome() {
  window.location.href = 'index.html'
}


// mid section start ******************
function show_items() {

  var finalcart = JSON.parse(localStorage.getItem("Allcartproduct")) || [];
  let cont = document.getElementById('item-card');

  for (let i = 0; i < finalcart.length; i++) {

    let total = finalcart[i].price * finalcart[i].quantity;

    let div = document.createElement('div');
    div.setAttribute('class', 'product-show');



    div.innerHTML = `<img src="${finalcart[i].img}">
                <a href=""><strong>${finalcart[i].title}</strong> ${finalcart[i].brand}</a>
                <div class="product-size">Size <span>M</span> &or;</div>
                <div class="cart-qty">Qty <span> ${finalcart[i].quantity}</span> &or;</div>
                <div class="total-amount">Rs. ${total}</div>`;

    cont.appendChild(div);

  }


}

show_items();


//Summary total ----------------------->
var finalcart = JSON.parse(localStorage.getItem("Allcartproduct")) || [];

var finalprice = finalcart.reduce(function (acc, cv) {
  // var x = Number(cv.price);
  let discountPrice = (Number(cv.price) * Number(cv.discount)) / 100
  let afterDiscount = (cv.price - discountPrice);
  var x = Number(afterDiscount) * Number(cv.quantity);
  return acc + x;
}, 0);


var bagtotal = document.createElement("p");
bagtotal.textContent = "Rs." + finalprice;

//   var summarytotal = document.createElement("p");
//   bagtotal.textContent = "Rs." + finalprice;

var totalamount = document.createElement("p");
totalamount.textContent = "Rs." + finalprice;

document.querySelector("#summary-bag-total").append(bagtotal);
// document.querySelector("#summary-total").append(summarytotal);
document.querySelector("#amount-payable").append(totalamount);

//Summary total ends ------------------>

// mid section end 

// let obj ={
//   name : finalcart.title,
//   image : finalcart.img,
// }
// console.log(obj);



// ********************************************************************************
window.addEventListener("load", () => {
  orderData()
})


async function orderData() {
  try {
    let obj = {
      title: finalcart.title,
      image: finalcart.img,
      brand: finalcart.brand,
      category: finalcart.category,
      discount: finalcart.discount,
      gender: finalcart.gender,
      id: finalcart.id,
      price: finalcart.price,
      quantity: finalcart.quantity
    }
    let response = await fetch(`https://stylio.onrender.com/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    });
    let data = await response.json();

    console.log(data);
  }
  catch (error) {
    console.log(error);
  }
}
orderData()


let username = JSON.parse(localStorage.getItem("credentials"));
console.log(username)
let name1 = username[0].name;
if (name1 != null) {
  change_info();
}

function change_info() {
  let info = document.getElementById("navbar_info");
  info.innerHTML = null;

  let div1 = document.createElement("div");
  let p1 = document.createElement("p");
  p1.id = "user_name";
  p1.innerText = "Hi " + name1;
  div1.append(p1);

  let div2 = document.createElement("div");
  let p2 = document.createElement("p");
  p2.innerText = "My Account";
  p2.id = "my_account";
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