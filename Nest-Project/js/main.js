
var addButtons = document.querySelectorAll(".add-prod-basket");
for(let btn of addButtons){
  btn.parentElement.addEventListener("click",function(e){
    e.preventDefault();
    if(JSON.parse(localStorage.getItem("basket"))===null){
      localStorage.setItem("basket",JSON.stringify([]))
    }
    let basket = JSON.parse(localStorage.getItem("basket"));
    let prodImage = this.parentElement.parentElement.previousElementSibling.querySelector(".first").getAttribute("src");;
    let prodName = this.parentElement.previousElementSibling.querySelector(".name").innerText;
    let prodId = this.parentElement.parentElement.parentElement.getAttribute("data-id");
    let proPrice = Number(this.previousElementSibling.querySelector(".price-value").innerText);
    let exist = basket.find(n =>n.id==prodId);

    if(exist===undefined){
      basket.push({
        id: prodId,
        name: prodName,
        image: prodImage,
        price: proPrice,
        count: 1
      })
    }
    else{
      exist.count+=1;
    }
    localStorage.setItem("basket",JSON.stringify(basket));
  })
}


// Cart button
let cartBasket = JSON.parse(localStorage.getItem("basket"))
let myCartul = document.querySelector(".cart-shopping-basket");
var totalPriceCount = 0;

for(let item of cartBasket){
let li = document.createElement("li");

let divImg = document.createElement("div");
divImg.setAttribute("class","shopping-cart-img");
divImg.innerHTML = 
`
<a href="" class="link">
  <img alt="Nest" src="${item.image}">
</a>
`;

let divTitle = document.createElement("div");
divTitle.setAttribute("class","shopping-cart-title");
divTitle.innerHTML = 
`
<h4><a href="">Daisy Casual Bag</a></h4>
<h4><span>${item.count} × </span>$${item.price}</h4>
`;
let divDel = document.createElement("div");
divDel.setAttribute("class","shopping-cart-delete")
divDel.innerHTML = 
`
<a href="#"><i class="fa-solid fa-xmark"></i></a>
`;
totalPriceCount += Math.round(item.price*item.count);
li.append(divImg,divTitle,divDel);
myCartul.append(li);
}
let totalPric = document.createElement("div");
totalPric.setAttribute("class","total-cart-price");
totalPric.innerHTML = 
`
<span>Total</span>
<span>$${totalPriceCount}</span>
`
let btndiv = document.createElement("div");
btndiv.setAttribute("class","btns");
let viewBtn = document.createElement("button");
viewBtn.innerText = "View cart"
let checkBtn = document.createElement("button");
checkBtn.innerText = "Checkout"
btndiv.append(viewBtn,checkBtn);
myCartul.append(totalPric,btndiv)
document.querySelector(".cart-item-count").innerText = cartBasket.length;

// Input count
if(JSON.parse(localStorage.getItem("basket")).length != 0){
  var myInp = document.querySelector(".inp-num .inp-value");
  var increaseBtn = document.querySelector(".inp-num .up");
  var decreaseBtn = document.querySelector(".inp-num .down");
  var count = 1;
  increaseBtn.addEventListener("click",function(e){
    e.preventDefault()
    count+=1;
    myInp.innerText = count;
  })
  decreaseBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(count != 0){
      count-=1;
      myInp.innerText = count;
    }
  })
  console.log("nese vr")
} 


function Open() {
  document.getElementById("side").style.display = "block";
  document.getElementById("overlay").style.display = "block"
}
function Exit() {
  document.getElementById("side").style.display = "none";
  document.getElementById("overlay").style.display = "none"
}