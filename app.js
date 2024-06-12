const toppings = [{
  name: 'Sprinkles',
  quantity: 0,
  price: .25
},
{
  name: 'Chocolate Chips',
  price: .25,
  quantity: 0
},
{
  name: 'Gummy Worms',
  price: .5,
  quantity: 0
}]

const Vessels = [{
  name: 'Waffle Cone',
  price: 3.00,
  quantity: 0
},
{
  name: 'Waffle Bowl',
  price: 4.00,
  quantity: 0
},
{
  name: 'Dipped Cone',
  price: 5.00,
  quantity: 0
}]

const iceCream = [{
  name: 'Chocolate',
  price: 1.25,
  quantity: 0
},
{
  name: 'Vanilla',
  price: 1,
  quantity: 0
},
{
  name: 'Strawberry',
  price: 1.25,
  quantity: 0
}]
const everything = { toppings, Vessels, iceCream }

function addToScoop(TypeName, IceCreamname) {
  const Items = everything[TypeName]
  for (let i = 0; i < Items.length; i++) {
    const someFlavor = Items[i]
    if (IceCreamname == someFlavor.name) {
      someFlavor.quantity += 1
      getPricing(TypeName)
      drawOrder()
    }
  }
}

function getPricing(TypeName) {
  const Items = everything[TypeName]
  let total = 0
  for (let i = 0; i < Items.length; i++) {
    const money = Items[i]
    total += money.price * money.quantity
  }
  console.log(total)
  return total
}

function drawOrder() {
  let html = " "
  let totalPrice = 0
  for (let key in everything) {
    const Items = everything[key]
    totalPrice += getPricing(key)

    for (let i = 0; i < Items.length; i++) {
      const item = Items[i]
      if (item.quantity > 0) {
        const mtotal = item.price * item.quantity
        html += `
        <div class ="d-flex flex-row border"> 
        <div class="col-2">
        <p>${item.name}</p>
        </div>
        <div class="col-4">
        <p>${item.price}</p>
        </div>
        <div class="col-3">
        <p>${item.quantity}</p>
        </div>
        <div class="col-3">
        <p>$${mtotal}</p>
        </div>
        </div>`
        
      }
      }
      
  }

  const OrderlistEle = document.getElementById('order-list')
  const totalElm = document.getElementById('order-total')
  // @ts-ignore
  OrderlistEle.innerHTML = html
  
  // @ts-ignore
  totalElm.innerHTML = `$${totalPrice}`
  
}
