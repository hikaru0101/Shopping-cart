//Select elements
const productShop = document.querySelector("#shop");
const Total = document.querySelector("#total");
const reset = document.getElementById("reset");
let cartAmount = document.getElementsByClassName("cartAmount")[0];//この行２行あるけど
// number = insideCart.length;
let elements = document.getElementById("cart-container");
let numberOfUnit = 1;


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
                <h2>$${product.price}</h2>
                <div class="buttons">
                    
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




//Add item to cart  addボタンとつながってる
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
  // cartAmount.innerHTML = insideCart.length;
      renderCartItems(insideCart);

     //To check the array
     console.log(insideCart);
    });

}



//Render cart items　カートの中の商品の表示　オブジェクトごと配列に入るから画像とかのプロパティにアクセスできる 動画のaddToCartを参考にした
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
          <i onclick="deleteHTML(${product.id})"class="bi bi-trash3"></i>
        </div>
      `
  });
  elements.innerHTML += `
                        <div class="bgc">
                        <h6 id="total">  Total: $${totalAmount}</h6>
                        <h6 id="total-quantity">  Item Amount:${insideCart.length}</h6>
                         <div class="Okaikei">
                           <button onclick="resetitems()" id="reset">reset</button>
                           <button id="checkout">check out</button>
                         </div>
                         </div>`;
  
                        //  zeroState();                     
}


// 保存用
// function renderCartItems(arr){
  
//   elements.innerHTML ="";
//   let totalAmount = arr.reduce((acc, item) => acc + item.price, 0);



//   arr.forEach(product =>{
//     elements.innerHTML +=
//       `
//         <div id="cartItem">
//           <img src=${product.imageUrl}>
//           <div class="shousai">
//             <h6 id="name">${product.name}</h6>
//             <p id="price">$${product.price}</p>
//           </div>
//           <i onclick="deleteHTML(${product.id})"class="bi bi-trash3"></i>
//         </div>
//       `
//   });
//   elements.innerHTML += `<h6 id="total">Total: $${totalAmount}</h6>
//                         <h6 id="total-quantity">Item Amount:${insideCart.length}</h6>
//                          <div class="Okaikei">
//                            <button onclick="resetitems()" id="reset">reset</button>
//                            <button id="checkout">check out</button>
//                          </div>`;
  
//                         //  zeroState();                     
// }
function resetitems(){
  elements.innerHTML = "";
  cartAmount.innerHTML = 0;
  insideCart.length= 0;
  
}

function deleteHTML(itemId){
  let deletedArray = insideCart.filter(item => item.id !== itemId);
  insideCart = deletedArray;
  renderCartItems(insideCart);
  console.log(insideCart);
  cartAmount.innerHTML= insideCart.length
  function zeroState(){
    if(insideCart.length==0){
      elements.innerHTML="";
    }
    
  }
  zeroState();
  
}




  




//ゼロのときはカートの中身を空にする、重複しないように表示、カートの中身を隠す（できれば）




