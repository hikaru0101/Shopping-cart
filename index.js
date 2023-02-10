//Select elements
const productShop = document.querySelector("#shop");
const Total = document.querySelector("#total");
const reset = document.getElementById("reset");
let cartAmount = document.getElementsByClassName("cartAmount")[0];//この行２行あるけど
// number = insideCart.length;
let elements = document.getElementById("cart-container");


//Render products　商品一覧
function renderProducts() {
  fetch("./products.json").then(res => res.json())
    .then(data => {
      data.forEach((product) => {
        productShop.innerHTML += `<div class="products">
        <img width="200" src="${product.imageUrl}" alt="${product.name}">
        <div class="details">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price-quantity">
                <h2>${product.price}</h2>
                <div class="buttons">
                    <i class="bi bi-dash-square-fill"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus-square-fill"></i>
                    <button onclick="addItem(${product.id})" class="add-cart">add to cart</button>
                </div>
            </div>
        </div>
      </div>`
      });
    })
}
renderProducts();

let insideCart = [];
let addCartButton = document.querySelectorAll(".add-cart");



//Add item to cart
function addItem(itemId){
  fetch("./products.json").then(res =>res.json())
    .then(data =>{
      let item = data.find(item => item.id === itemId);
      insideCart.push(item);
       //change the number of cart
   number = insideCart.length;
  console.log(number);
  let cartAmount = document.getElementsByClassName("cartAmount")[0];//getを使うときは宣言する必要がある
  cartAmount.innerHTML = number;
      renderCartItems(insideCart);

     //To check the array
     console.log(insideCart);

     


    });
}


//Render cart items　カートの中の商品の表示
function renderCartItems(arr){
  
  elements.innerHTML ="";
  let totalAmount = arr.reduce((acc, item) => acc + item.price, 0);
  arr.forEach(product =>{
    elements.innerHTML +=
      `
        <div id="cartItem">
          <img src=${product.imageUrl}>
          <div class="shousai">
            <h6 id="name">${product.name}</h6>
            <p id="price">$${product.price}</p>
          </div>
          <i onclick="deleteHTML()"class="bi bi-trash3"></i>
        </div>
      `
  });
  elements.innerHTML += `<h6 id="total">Total: $${totalAmount}</h6>
                         <div class="Okaikei">
                           <button onclick="resetitems()" id="reset">reset</button>
                           <button id="checkout">check out</button>
                         </div>`;
  
                         
}
function deleteArrayElement(arr){

}


// function deleteHTML(){
//  elements.innerHTML ="";
// }

function resetitems(){
  elements.innerHTML = "";
  cartAmount.innerHTML = 0;
  insideCart.length= 0;
}



//あとは個々に消すデリーとボタンと、重複しないように表示、カートの中身を隠す（できれば）


//チャット




