function showMethod(box, method) {
    let allTab = document.querySelectorAll('.box')
    let allPaymentBox = document.querySelectorAll('.payment-box-2')
    let tab = document.getElementById(box)
    let paymentBox = document.getElementById(method)


    allTab.forEach(function (el) {
        el.classList.remove('selected-tab')
    })

    allPaymentBox.forEach(function (el) {
        el.classList.remove('selected-box')
    })

    tab.classList.add('selected-tab')
    paymentBox.classList.add('selected-box')
}

function placeOrder(a) {
    let cardNumbr = document.getElementById('cardNumber').value
    let name = document.getElementById('holderName').value
    let cvv = document.getElementById('cvv').value
    let payWarning = document.getElementById('payWarning');
    let upiWarning = document.getElementById('upiWarning');
    let upiInput = document.getElementById('upiInput').value
    payWarning.innerHTML = null
    upiWarning.innerHTML = null
    if (a == 'card') {
        if (cardNumbr.length != 16 || name == '' || cvv == '') {
            payWarning.innerHTML = 'Enter valid details.'
            return
        }
    } else if (a == 'upi' && upiInput == '') {
        upiWarning.innerHTML = 'Enter your UPI Id'
        return
    }
    Swal.fire(
        'Good job!',
        'Order Placed',
        'success'
    )
    setTimeout(function () {
        window.location.href = 'order.html'
    }, 2000)
}



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

var summarytotal = document.createElement("p");
bagtotal.textContent = "Rs." + finalprice;

var totalamount = document.createElement("p");
totalamount.textContent = "Rs." + finalprice;

document.querySelector("#summary-bag-total").append(bagtotal);
// document.querySelector("#summary-total").append(summarytotal);
document.querySelector("#amount-payable").append(totalamount);

   //Summary total ends ------------------>