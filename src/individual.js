let main = document.getElementsByTagName('main')[0];
let lsID = localStorage.getItem("product");
let orderData = JSON.parse(localStorage.getItem("Allcartproduct")) || []
let userdata = JSON.parse(localStorage.getItem("credentials")) || []

function fetchData() {
  fetch(`https://stylio.onrender.com/products/${lsID}`)
    .then((res) => res.json())
    .then((data) => {
      let disprice = data.price - (data.price * (data.discount / 100))
      appendToDom(data.title, data.price, data.img, data.brand, data.discount, disprice, data.id, data.gender, data.category)
    })
}
fetchData();
function appendToDom(name, price, img, brand, dis, disprice, id, gende, cat) {
  main.innerHTML = `<div class="imagediv">
    <img
      src="${img}"
      alt=""
    />
  </div>
  <div class="productdetails">
    <h3>${brand}</h3>
    <h3>${name}</h3>
    <p id="priice">₹${disprice}</p>
    <p>MRP <span id="span">₹${price}</span> (${dis}%OFF)</p>
    <div class="offer">
      <p>GET IT FOR ₹${disprice - 200}</p>
      <div>
        <div class="left">
          <p>Use code Boom</p>
          <p>T&C</p>
        </div>
        <div class="right">
          <p>
            Extra Upto 39% Off on ₹2490 and Above. Max Discount 1250. View
            All Products>
          </p>
        </div>
      </div>
    </div>
    <div class="selectcolo">
      <p>Select Color</p>
      <div>
        <div class="red"></div>
        <div class="blue"></div>
        <div class="yellow"></div>
      </div>
    </div>
    <div class="selectsize">
      <p>Select Size</p>
      <div>
        <div class="S">S</div>
        <div class="M">M</div>
        <div class="L">L</div>
        <div class="XL">XL</div>
        <div class="XXL">XXL</div>
      </div>
    </div>
    <div class="btns">
      <div id="addtocart" class="addtocard">
        <i class="fa-solid fa-bag-shopping"></i> ADD TO BAG
      </div>
      <div id="addtowishlist" class="wishlist">
        <i class="fa-solid fa-heart"></i> SAVE TO WISHLIST
      </div>
    </div>
  </div>`
  document.getElementById('addtocart').addEventListener('click', () => {
    if (userdata.length == 0) {
      window.location.href = 'signIn.html'
    }
    else {
      let obj = {
        id: id,
        img: img,
        brand: brand,
        price: price,
        gender: gende,
        category: cat,
        title: name,
        discount: dis
      }
      // orderData.push({...obj,quantity:1});
      if (checkDuplicate(obj)) {
        Swal.fire({
          icon: 'error',
          title: 'Product Already in the Bag',
          footer: '<a href="cart.html">Go to the cart</a>'
        })
      }
      else {
        orderData.push({ ...obj, quantity: 1 });
        localStorage.setItem('Allcartproduct', JSON.stringify(orderData));
        Swal.fire({
          icon: 'success',
          title: 'Added To Bag',
          footer: '<a href="">Go to Cart</a>'
        })
      }
    }
  })
}
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
function checkDuplicate(element) {
  for (let i = 0; i < orderData.length; i++) {
    if (orderData[i].id == element.id) {
      return true;
    }
  }
  return false;
}