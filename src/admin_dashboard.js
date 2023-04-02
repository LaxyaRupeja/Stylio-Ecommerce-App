// backround color change

let black=document.querySelector("#black");
let white=document.querySelector("#white");
let body=document.querySelector("body");
let nav=document.querySelector("nav");
let allpro=document.querySelector("#product");


black.addEventListener("click",()=>{
    body.style.backgroundColor="#343434";
    nav.style.backgroundColor="#343434";
    nav.style.color="#FFFFFF";
    product.style.color="#FFFFFF";
    pagination.style.color="#FFFFFF"
    
})

white.addEventListener("click",()=>{
    body.style.backgroundColor="#FFFFFF"
    nav.style.backgroundColor="#FFFFFF";
    nav.style.color="Black";
    pagination.style.color="Black";
    allpro.style.color="Black";
})

// data fetch product and detail  

let Totalproduct=document.querySelector(".data-1");
let TotalCustomer=document.querySelector(".data-2");
let product=document.getElementById("product");
let pagination=document.querySelector("#pagination");



window.addEventListener("load",()=>{
    fetchrender("1");
})

function fetchrender(page){
    fetch(`https://stylio.onrender.com/products?_limit=8&_page=${page}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        }
    }).then((res)=>{
        // console.log(`X-Total-Count`);
        let count=res.headers.get("X-Total-Count");
        Totalproduct.innerText=count;
        let buttton=Math.ceil(count/8);
        // console.log(buttton);
        pagination.innerHTML=null;
        for(let i=1;i<=buttton;i++){
            pagination.append(allbutton(i));

        }
        // console.log(count);
        return res.json();
        
    }).then((data)=>{
        // console.log(data);
       
        product.innerHTML=null;
        let productdispay=getall(data);
        
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

 function getall(data){
    let div=document.createElement("div");
    div.classList.add("Allproduct");
    product.append(div);

    data.forEach((item)=>{
        let getproduct= getdata(item.title,item.price,item.img);
        div.append(getproduct);
    })

    return div;
    
 }

   function getdata(title,price,img){
      let div=document.createElement("div");

      let Name=document.createElement("h5");
      Name.innerText=title;
      Name.style.color="#b19975";

      let Price=document.createElement("p");
      Price.innerText=`₹ ${price}`;

      let Image=document.createElement("img");
      Image.src=img;

      div.append(Image,Name,Price);

      return div;
   }

// fetch order
let Totalorder=document.querySelector(".data-3")
fetch(`https://stylio.onrender.com/orders`)
.then((res)=>{
    return res.json();
}).then((data)=>{
    // console.log(data);
    // console.log(data.length);
    Totalorder.innerText=data.length;
    console.lo

}).catch((err)=>{
    console.log(err);
})







// fetch userdetails
fetch(`https://stylio.onrender.com/userDetails`)
.then((res)=>{
    return res.json();
}).then((data)=>{
    // console.log(data);
    // console.log(data.length);
    TotalCustomer.innerText=data.length;

}).catch((err)=>{
    console.log(err);
})