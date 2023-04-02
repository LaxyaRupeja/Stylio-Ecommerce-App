let orderData = JSON.parse(localStorage.getItem("Allcartproduct")) || []
let userdata = JSON.parse(localStorage.getItem("credentials")) || [];
let globalarr = [];
let five = document.querySelector('.below500  > input')
let fivetotho = document.querySelector('.fivetotho  > input');
let fiveteen = document.querySelector('.fiveteen  > input');
let twok = document.querySelector('.twok  > input');
let moretwok = document.querySelector('.moretwok  > input');
five.addEventListener('click', () => {
    if (five.checked) {
        fetchData(`https://stylio.onrender.com/products?price_lte=500`)
    }
    else {
        fetchData(`https://stylio.onrender.com/products`)
    }
})
fivetotho.addEventListener('click', () => {
    if (fivetotho.checked) {
        fetchData(`https://stylio.onrender.com/products?price_lte=1000&price_gte=501`)
    }
    else {
        fetchData(`https://stylio.onrender.com/products`)
    }
})
fiveteen.addEventListener('click', () => {
    if (fiveteen.checked) {
        fetchData(`https://stylio.onrender.com/products?price_lte=1500&price_gte=1001`)
    }
    else {
        fetchData(`https://stylio.onrender.com/products`)
    }
})
twok.addEventListener('click', () => {
    if (twok.checked) {
        fetchData(`https://stylio.onrender.com/products?price_lte=2000&price_gte=1501`)
    }
    else {
        fetchData(`https://stylio.onrender.com/products`)
    }
})
moretwok.addEventListener('click', () => {
    if (moretwok.checked) {
        fetchData(`https://stylio.onrender.com/products?price_gte=2001`)
    }
    else {
        fetchData(`https://stylio.onrender.com/products`)
    }
})
function fetchData(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            appendToDom(data)
            globalarr = data
        })
        .catch((err) => console.log(err))
}
let cardlist = document.querySelector(".cardList")
window.addEventListener('load', () => {
    fetchData("https://stylio.onrender.com/products")
})

let catDiv = document.querySelectorAll('.optionsCat > div');
let priceDiv = document.querySelectorAll('.price > div');
let brandDiv = document.querySelectorAll('.Brand > div');
let sizeDiv = document.querySelectorAll('.Size > div');
let cath3 = document.querySelector('.optionsCat > h3 > i')
let prich3 = document.querySelector('.price > h3 > i')
let brandh3 = document.querySelector('.Brand > h3 > i')
let Sizeh3 = document.querySelector('.Size > h3 > i')
console.log(catDiv)
document.getElementById('cate').addEventListener('click', () => {
    if (cath3.getAttribute("class") == "fa-solid fa-minus") {
        cath3.removeAttribute("class");
        cath3.setAttribute("class", "fa-solid fa-plus")
    }
    else {
        cath3.removeAttribute("class");
        cath3.setAttribute("class", "fa-solid fa-minus")
    }
    catDiv.forEach(el => {
        if (el.style.display == "none") {
            el.style.display = "flex"
        }
        else {
            el.style.display = "none"
        }
    });
})
document.getElementById('bran').addEventListener('click', () => {
    if (brandh3.getAttribute("class") == "fa-solid fa-minus") {
        brandh3.removeAttribute("class");
        brandh3.setAttribute("class", "fa-solid fa-plus")
    }
    else {
        brandh3.removeAttribute("class");
        brandh3.setAttribute("class", "fa-solid fa-minus")
    }
    brandDiv.forEach(el => {
        if (el.style.display == "none") {
            el.style.display = "flex"
        }
        else {
            el.style.display = "none"
        }
    });
})
document.getElementById('priceSS').addEventListener('click', () => {
    if (prich3.getAttribute("class") == "fa-solid fa-minus") {
        prich3.removeAttribute("class");
        prich3.setAttribute("class", "fa-solid fa-plus")
    }
    else {
        prich3.removeAttribute("class");
        prich3.setAttribute("class", "fa-solid fa-minus")
    }
    priceDiv.forEach(el => {
        if (el.style.display == "none") {
            el.style.display = "flex"
        }
        else {
            el.style.display = "none"
        }
    });
})
document.getElementById('fitsize').addEventListener('click', () => {
    if (Sizeh3.getAttribute("class") == "fa-solid fa-minus") {
        Sizeh3.removeAttribute("class");
        Sizeh3.setAttribute("class", "fa-solid fa-plus")
    }
    else {
        Sizeh3.removeAttribute("class");
        Sizeh3.setAttribute("class", "fa-solid fa-minus")
    }
    sizeDiv.forEach(el => {
        if (el.style.display == "none") {
            el.style.display = "flex"
        }
        else {
            el.style.display = "none"
        }
    });
})

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

function createCard(imgUrl, brandName, titleD, afterDis, price, discount, id, cat, gende) {
    let card = document.createElement('div');
    card.setAttribute('class', "card");
    let bags = document.createElement('div');
    bags.setAttribute('id', "bag");
    let icon = document.createElement('i');
    icon.setAttribute("class", "fa-solid fa-bag-shopping");
    bags.append(icon)

    card.innerHTML = `
    <div class="rela">
    <img src=${imgUrl} alt="error">
    </div>
    <div id="wish">
    <i class="fa-regular fa-heart"></i>
    </div>
    
    <h3 id="golden">${brandName}</h3>
    <h3 id="nameP">${titleD}</h3>
    <div class="amount">
      <p>₹${afterDis}</p>
      <p id="strip">₹${price}</p>
      <p class="dis">(${discount}% off)</p>
    </div>`
    icon.addEventListener("click", (e) => {
        e.stopPropagation();
        if (userdata.length == 0) {
            window.location.href('signIn.html')
        }
        else {
            let obj = {
                id: id,
                img: imgUrl,
                brand: brandName,
                price: price,
                gender: gende,
                category: cat,
                title: titleD,
                discount: discount
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
    card.append(bags)
    card.addEventListener('click', () => {
        localStorage.setItem('product', id)
        window.location.href = 'individual.html'
    })
    return card
}
function checkDuplicate(element) {
    for (let i = 0; i < orderData.length; i++) {
        if (orderData[i].id == element.id) {
            return true;
        }
    }
    return false;
}
function appendToDom(arr) {
    cardlist.innerHTML = null;
    let count = 0;
    arr.forEach(el => {
        if (el.gender == "Female") {
            count++;
            let disprice = el.price - (el.price * (el.discount / 100))
            disprice = disprice.toFixed(1)
            cardlist.append(createCard(el.img, el.brand, el.title, disprice, el.price, el.discount, el.id, el.category, el.gender))
        }

    });
    disTotalNO(count + " ")
}
let addTocart = document.getElementById('addtocart');
let sort = document.getElementById('sortbyprice');
sort.addEventListener('change', () => {
    if (sort.value == "") {
        fetchData("https://stylio.onrender.com/products")
    }
    else {
        if (sort.value == "a-z") {
            fetchData("https://stylio.onrender.com/products?_sort=price&_order=asc");
        }
        else {
            fetchData("https://stylio.onrender.com/products?_sort=price&_order=desc")
        }

    }
})
function disTotalNO(no) {
    document.getElementById('totalItem').innerText = no;
}
document.getElementById('search_box').addEventListener('input', () => {
    let searchText = document.getElementById('search_box').value.toLowerCase();
    let filtered = globalarr.filter(el => el.title.toLowerCase().includes(searchText));
    appendToDom(filtered);

});

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