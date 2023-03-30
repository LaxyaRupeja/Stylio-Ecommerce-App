let main = document.getElementsByTagName('main')[0];
let lsID = localStorage.getItem("product");
function fetchData() {
    fetch(`https://stylio.onrender.com/products/${lsID}`)
        .then((res) => res.json())
        .then((data) => {
            appendToDom(data.title, data.price, data.img)
        })
}
fetchData();
function appendToDom(name, price, img) {
    main.innerHTML = `
    <h1>${name}</h1>
    <h1>${price}</h1>
    <img src="${img}" alt="" />
    <button>add to cart</button>
    `
}