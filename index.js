// const burger  = Promise.reject("Order rejected. Sorry Burger is not available");
// const pizza = Promise.resolve("Order successful. Here is your order!");

// const order = () =>{
//   burger.catch((error) => { console.log(error); });
//   pizza.then((msg) => { console.log(msg); });
// }

// order();


// const ordering=(item)=>{
//   return new Promise ((resolve, reject)=>{
//     if(item ==="Pizza"){
//       resolve();
//     }
//     else
//     reject();
//   })
// }

// ordering("Dosa").then(()=> console.log("Order Successful"))
// .catch(()=>console.log("Order Unsuccessful"));


const placeOrder=(drink) =>{
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve(" order is placed");
    } else {
      reject(" order is rejected");
    }
  });
}
 
function processOrder(order) {
  return new Promise(function (resolve) {
    console.log(" order is processed");
    resolve(`${order}, and is served`);
  });
}


 
async function serveOrder() {
  try {
  let orderPlaced = await placeOrder("coffe");
 
  console.log(orderPlaced);
 
  let processedOrder = await processOrder(orderPlaced);
  console.log(processedOrder);
  } catch (e) {
    console.log(e)
  }
}

serveOrder();
