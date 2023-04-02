let black=document.querySelector("#black");
let white=document.querySelector("#white");
let body=document.querySelector("body");
let nav=document.querySelector("nav");
let allpro=document.querySelector("#product");
let form=document.querySelector("#form");
let data=document.querySelector("form");


black.addEventListener("click",()=>{
    body.style.backgroundColor="#343434";
    nav.style.backgroundColor="#343434";
    nav.style.color="#FFFFFF";
    product.style.color="#FFFFFF";
    pagination.style.color="#FFFFFF"
    form.style.color="#FFFFFF"

    
})

white.addEventListener("click",()=>{
    body.style.backgroundColor="#FFFFFF"
    nav.style.backgroundColor="#FFFFFF";
    nav.style.color="Black";
    pagination.style.color="Black";
    allpro.style.color="Black";
    form.style.color="Black"
})

let tbody=document.querySelector("tbody");
console.log(tbody);
let  pagination=document.querySelector("#pagination");

window.addEventListener("load",()=>{
    fetchrender(1);
})

function fetchrender(page){
    fetch(`https://stylio.onrender.com/userDetails?_limit=8&_page=${page}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        }
    }).then((res)=>{
        // console.log(`X-Total-Count`);
        let count=res.headers.get("X-Total-Count");
        
        let buttton=Math.ceil(count/6);
        console.log(buttton);
        pagination.innerHTML=null;
        for(let i=1;i<=buttton;i++){
            pagination.append(allbutton(i));

        }
        // console.log(count);
        return res.json();
        
    }).then((data)=>{
        // console.log(data);
       
        
        dispaly(data)
        // let productdispay=getall(data);

        console.log(data);
        
    }).catch((err)=>{
        console.log(err);
    })

}

function allbutton(i){
    let buttton=document.createElement("button");
    buttton.innerText=i;
    buttton.addEventListener("click",()=>{
        // console.log(i);
        fetchrender(i);
    })
    return buttton;


}


 function dispaly(data){
    tbody.innerHTML=null;
    let count=0
    data.forEach((e)=>{
        let tr=document.createElement("tr");
        count++;

        let name=document.createElement("td");
        name.innerText=e.name;

        let sr=document.createElement("td");
        sr.innerText=count;


        let mobile=document.createElement("td");
        mobile.innerText=e.mobile;

        let address=document.createElement("td");
        address.innerText=e.address;

        let landmark=document.createElement("td");
        landmark.innerText=e.landmark;

        let pin=document.createElement("td");
        pin.innerText=e.pincode;

        let city=document.createElement("td");
        city.innerText=e.city;

        let state=document.createElement("td");
        state.innerText=e.state;

        tr.append(sr,name,mobile,address,landmark,pin,city,state);
        tbody.append(tr);
    })

 }
