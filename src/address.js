var btn = document.getElementById("add-new-address").addEventListener('click', function () {
    document.querySelector('.change_address').style.display = 'flex'
})

let close = document.getElementById('close');
close.addEventListener('click',closePage);
function closePage(){
    document.querySelector('.change_address').style.display = 'none'
}

var button = document.getElementById('button')
var new_address = document.getElementById('new_address')
var id = 0

let dataArray = JSON.parse(localStorage.getItem("address_order"))||[];

function taking_input() {
    var name = document.getElementById('input1').value
    var mobile = document.getElementById('input2').value
    var pincode = document.getElementById('input3').value
    var locality = document.getElementById('input4').value
    var flat = document.getElementById('input5').value
    var landmark = document.getElementById('input6').value
    var city = document.getElementById('input7').value
    var state = document.getElementById('input8').value
    id++
    var div = document.createElement('div')
    div.setAttribute('class', 'address_grid')
    div.innerHTML =
        `<h4>${name}</h4>
        <p>${flat}, ${landmark},</p>
        <p>${locality},</p>
        <p>${city}, ${state},</p>
        <p>India - ${pincode}</p>
        <h5>Phone : ${mobile}</h5>`

    if (id <= 6) {
        new_address.appendChild(div)
    }

    let addressObj ={
        name : name,
        flat : flat,
        landmark : landmark,
        locality : locality,
        city : city,
        state : state,
        pincode : pincode,
        mobile : mobile
    }

    dataArray.push(addressObj);
    localStorage.setItem("address_order",JSON.stringify(dataArray));
}
button.addEventListener('click', taking_input)

function goToPayment() {
    let userdata = JSON.parse(localStorage.getItem("credentials")) ||[]
    if(userdata.length == 0){
        
        window.location.href = 'signIn.html'
    }
    else{
        // window.location.href = 'signIn.html'
        window.location.href = 'payment.html'
    }
}
function signIn(){
    window.location.href = 'signIn.html'
}


var finalcart = JSON.parse(localStorage.getItem("Allcartproduct"))||[];

var finalprice = finalcart.reduce(function(acc, cv) {
    // var x = Number(cv.price);
    let discountPrice = (Number(cv.price)*Number(cv.discount))/100
    let afterDiscount = (cv.price-discountPrice);
    var x = Number(afterDiscount)*Number(cv.quantity);
    return acc+x;
}, 0);


var bagtotal = document.createElement("p");
bagtotal.textContent = "Rs." + finalprice;

var totalamount = document.createElement("p");
totalamount.textContent = "Rs." + finalprice;

document.querySelector("#bag-item-amount").append(bagtotal);
document.querySelector("#bag-total-amount").append(totalamount);




// let arr = []
async function addressData(){
  try{
    let obj ={
        name :dataArray.name,
        flat : dataArray.flat,
        landmark : dataArray.landmark,
        locality : dataArray.locality,
        city : dataArray.city,
        state : dataArray.state,
        pincode : dataArray.pincode,
        mobile : dataArray.mobile
    }
    let response = await fetch(`https://stylio.onrender.com/userDetails`,{
      method : "POST",
      headers : {
          "Content-Type" : "application/json"
      },
      body : JSON.stringify(obj)
    });
    let data = await response.json();
    // arr = data;
    console.log(data);
  }
  catch(error){
    console.log(error);
  }
}

// window.addEventListener("load",()=>{
//     addressData()
//   })
  
