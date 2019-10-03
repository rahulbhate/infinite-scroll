var cart = [];

var Item = function (name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

function addItemToCart( name, price, quantity){
    for(var i in cart ){
        if(cart[i].name === name){
            cart[i].quantity += quantity;
            return;
        }
    }
    var item = new Item(name, price, quantity);
    cart.push(item);
    saveCart();
}
function removeItemFromCart(name){
     for(var i in cart ){
         if(cart[i].name === name){
             cart[i].quantity--;
             if(cart[i].quantity  === 0){
                cart.splice(i,1);
             }
             return;
         }
     }
     saveCart();
}
function removeItemFromCartAll(name){
    for(var i in cart) {
        if(cart[i].name === name){
            cart.splice(i,1);
            break;
        }
    }
    saveCart();
}

function clearCart(){
    cart = [];
    saveCart();
}

function countCart(){
    var count = 0;
        for(var i in cart) {
            count += cart[i].quantity;
        }
    return count;
}

function totalCart(){
    var totalCost = 0;
        for (var i in cart){
            totalCost += cart[i].price;
        }
    return totalCost;
}

function listCart(){
   var cartCopy =[];
   for(var i in cart){
        var item = cart[i];
        var itemCopy = {};
            for(var p in item){
                itemCopy[p] = item[p];
            }
            cartCopy.push(itemCopy);
   }
   return cartCopy;
}

function saveCart(){
    //localStorage.setItem("shoppingCart", JSON.stringify(cart));
}
function loadCart(){
    //cart = JSON.parse(localStorage.getItem("shoppingCart"));
   // return cart;
}

// Add Items to the Cart....
addItemToCart('Apple', 1.5, 5);
addItemToCart('Banana', 1.85, 1);
addItemToCart('Pear', 1.85, 2);
addItemToCart('Pear', 1.85, 5);
addItemToCart('Oranges', 1.5, 4);

// Remove Items from the Cart...
removeItemFromCart('Pear');
removeItemFromCart('Pear');
removeItemFromCart('Pear');

addItemToCart('Pear', 1.85, 2);
addItemToCart('Pear', 1.85, 5);
removeItemFromCartAll("Oranges");


console.log(cart);
console.log(countCart());
console.log(totalCart());
//console.log(listCart());
//console.log(loadCart());