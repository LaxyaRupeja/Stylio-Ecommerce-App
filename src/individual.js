let main = document.getElementsByTagName('main')[0];
let lsID = localStorage.getItem("product");
function fetchData() {
    fetch(`https://stylio.onrender.com/products/${lsID}`)
        .then((res) => res.json())
        .then((data) => {
            let disprice = data.price - (data.price * (data.discount / 100))
            appendToDom(data.title, data.price, data.img, data.brand, data.discount, disprice)
        })
}
fetchData();
function appendToDom(name, price, img, brand, dis, disprice) {
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