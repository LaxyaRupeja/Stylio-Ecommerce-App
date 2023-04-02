// backround color change

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

// form
let button=document.querySelector("button");
let addform=document.querySelector("#form");
let img=document.querySelector("#img");

// button.addEventListener("click",()=>{
//     addform.style.display="grid"
//     product.style.display="none";
//     pagination.style.display="none";
// })
img.addEventListener("click",()=>{
    addform.style.display="none"
    product.style.display="grid";
    pagination.style.display="flex";

})



// data fetch product and detail  


let product=document.getElementById("product");
let pagination=document.querySelector("#pagination");





window.addEventListener("load",()=>{
    fetchrender("1");
})

function fetchrender(page){
    fetch(`https://stylio.onrender.com/products?_limit=4&_page=${page}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        }
    }).then((res)=>{
        // console.log(`X-Total-Count`);
        let count=res.headers.get("X-Total-Count");
       
        let buttton=Math.ceil(count/4);
        // console.log(buttton);
        pagination.innerHTML=null;
        for(let i=1;i<=buttton;i++){
            pagination.append(allbutton(i));

        }
        return res.json();
        
    }).then((data)=>{
       console.log(data)
       
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
        let getproduct= getdata(item.id,item.title,item.brand,item.price,item.img,item.category,item.gender,item.discount);
        div.append(getproduct);
    })

    return div;
    
 }

   function getdata(id,title,brand,price,img,category,gender,discount){
      let div=document.createElement("div");

      let Name=document.createElement("h3");
      Name.innerText=title;
      Name.style.color="#b19975";
      

      let Brand=document.createElement("p");
      Brand.innerText=brand;
      Brand.style.color="#2f4254";
  

      let aid=document.createElement("p");
      aid.innerText=id;

      let Category=document.createElement("p");
      Category.innerText=`Category:- ${category}`;

      let Gender=document.createElement("p");
      Gender.innerText=gender;
     

      let Discount=document.createElement("p");
      Discount.innerText=`Discount :- ${discount}%`;

      let Price=document.createElement("p");
      Price.innerText=`Price:-₹ ${price}`;
     

      let Image=document.createElement("img");
      Image.src=img;

      

      let Edit=document.createElement("button");
      Edit.innerText="Edit";
      Edit.style.backgroundColor="#2f4254"
      Edit.style.color="white";
       Edit.addEventListener("click",()=>{
        addform.style.display="grid";
        product.style.display="none";
        pagination.style.display="none";
        data.Aid.value=id;
        data.name.value=title;
        data.brand.value=brand;
        data.category.value=category;
        data.price.value=price;
        data.discount.value=discount;
        data.gender.value=gender;
        data.Image.value=img;

       });

      let Delete=document.createElement("button");
      Delete.innerText="Delete";
      Delete.style.backgroundColor="#ed5f5f";
      Delete.addEventListener("click",()=>{
           deletefunction(id);
      });

      
    
      div.append(Image,id,Brand,Name,Gender,Category,Discount,Price,Edit,Delete);

      return div;
   }

// delete data
function deletefunction(data){
    fetch(`https://stylio.onrender.com/products/${data}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
        },
        // body:JSON.stringify(obj),
     }).then((res)=>{
        return res.json();
     }).then((data)=>{
        console.log(data);
     }).catch((err)=>{
        console.log(err);
     })
//   alert
     Swal.fire(
        'Product Deleted',
        'You clicked the button!',
        'success'
      );
//   page is refresh
    setTimeout(()=>{
        location.reload();

    },3000)

}

//    update product in 
   let detarils=document.querySelector("form");
   

   detarils.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let obj={
        title:detarils.name.value,
        brand:detarils.brand.value,
        category:detarils.category.value,
        img:detarils.Image.value,
        price:detarils.price.value,
        discount:detarils.discount.value,
        gender:detarils.gender.value,
        id:detarils.Aid.value
    }
       console.log(obj.id);

       

       fetch(`https://stylio.onrender.com/products/${obj.id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(obj),
     }).then((res)=>{
        return res.json();
     }).then((data)=>{
        console.log(data);
     }).catch((err)=>{
        console.log(err);
     })

//  alert
Swal.fire(
    'Product Details  updated',
    'You clicked the button!',
    'success'
  );


    // refresh the page
   
   setTimeout(()=>{
        location.reload();

    },3000)

   
   
   })










