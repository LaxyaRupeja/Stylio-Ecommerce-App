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





// mid section 
var finalcart = JSON.parse(localStorage.getItem("Allcartproduct")) || [];

let totalProduct = document.getElementById("total-product");
totalProduct.innerText = finalcart.length;

displayData(finalcart);

var afterDiscount;
//  var quantityEle;
function displayData(data) {
  let product_left_container = document.querySelector(".product_left_container");
  product_left_container.innerHTML = "";

  data.forEach(function (element) {
    let detail_left = document.createElement("div");

    let imgDetail = document.createElement("div");
    imgDetail.setAttribute("id", "imgDetails");

    let otherDetails = document.createElement("div");
    otherDetails.setAttribute("id", "otherDetails");

    let imgEle = document.createElement("img");
    imgEle.setAttribute("src", element.img);

    let discountPrice = (Number(element.price) * Number(element.discount)) / 100
    afterDiscount = (element.price - discountPrice);
    let priceEle = document.createElement("h3");
    priceEle.textContent = "Rs." + " " + afterDiscount;

    let titleEle = document.createElement("h4");
    titleEle.textContent = element.title;

    let label3 = document.createElement('label');
    label3.setAttribute('class', 'label3Class')
    label3.textContent = "Savings : ";
    let savingEle = document.createElement("h4");
    savingEle.setAttribute("id", "saving");
    savingEle.innerText = "Rs." + " " + discountPrice;

    let breakEle = document.createElement("br");

    let label1 = document.createElement('label');
    label1.setAttribute('class', 'label1Class')
    label1.textContent = "Size : "
    let selectSize = document.createElement("select");
    selectSize.setAttribute = ("id", "selectSize");
    selectSize.innerHTML = `<option>XS</option><option>S</option select><option>M</option><option>L</option><option>XL</option><option>XXL</option>`

    let breakEle1 = document.createElement("br");

    let label2 = document.createElement('label');
    label2.setAttribute('class', 'label2Class')
    label2.textContent = "Qty : "
    var quantityEle = document.createElement("span");
    quantityEle.innerText = Number(element.quantity);

    let increaseEle = document.createElement("button");
    increaseEle.innerText = "+";
    increaseEle.setAttribute("id", "increaseBtn")
    increaseEle.addEventListener("click", () => {
      element = element.quantity++;
      localStorage.setItem("Allcartproduct", JSON.stringify(finalcart));
      displayData(finalcart);
      location.reload();
    });

    let decreaseEle = document.createElement("button");
    decreaseEle.innerText = "-";
    decreaseEle.setAttribute("id", "decreaseBtn")
    decreaseEle.addEventListener("click", () => {
      if (element.quantity > 1) {
        element = element.quantity--;
        localStorage.setItem("Allcartproduct", JSON.stringify(finalcart));
        displayData(finalcart);
      }
      location.reload();
    });

    let removeEle = document.createElement("button");
    removeEle.setAttribute("id", "deleteBtn");
    removeEle.innerText = "Delete";
    removeEle.addEventListener("click", () => {
      finalcart = finalcart.filter(function (ele) {
        return ele.id !== element.id;
      })
      localStorage.setItem("Allcartproduct", JSON.stringify(finalcart));
      displayData(finalcart);
    });


    imgDetail.append(imgEle);
    otherDetails.append(titleEle, priceEle, label3, savingEle, breakEle, label1, selectSize, breakEle1, label2, decreaseEle, quantityEle, increaseEle, removeEle);



    detail_left.append(imgDetail, otherDetails);
    product_left_container.append(detail_left);
  })
}



var finalprice = finalcart.reduce(function (acc, cv) {
  // var x = Number(cv.price);
  let discountPrice = (Number(cv.price) * Number(cv.discount)) / 100
  let afterDiscount = (cv.price - discountPrice);
  var x = Number(afterDiscount) * Number(cv.quantity);
  return acc + x;
}, 0);


var bagtotal = document.createElement("p");
bagtotal.textContent = "Rs." + finalprice;

var totalamount = document.createElement("p");
totalamount.textContent = "Rs." + finalprice;

document.querySelector(".bag_total_price").append(bagtotal);
document.querySelector(".totalamount").append(totalamount);






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