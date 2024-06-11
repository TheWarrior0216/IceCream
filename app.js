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
const everything = {toppings, Vessels, iceCream}

function addToScoop(TypeName, IceCreamname){
  const Items = everything[TypeName]
    for(let i = 0; i < Items.length; i++){
        const someFlavor = Items[i]
          if(IceCreamname == someFlavor.name){
        console.log('you did it!')
      }
    }
  }

function Pricing(TypeName){
  const Items = everything[TypeName]
  let total = 0
  for(let i = 0; i < Items.length; i++){
    const money = Items[i]
    console.log('Nice')
    total += Items.price * Items.quantity
}}