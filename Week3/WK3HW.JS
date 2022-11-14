let pizzaToppings = ["cheese", "pepperoni", "peppers", "sausage"];

greetCustomer();
getPizzaOrder(pizzaToppings);
let pizza = preparePizza(['large', 'thick', pizzaToppings])
servePizza(pizza);


function greetCustomer() {
  console.log("Welcome to Paisanos, our toppings are:");
  for (let pizzaTopping of pizzaToppings ) {
    console.log(pizzaTopping);
  }
}

function getPizzaOrder(pizzaToppings) {
  console.log(`One large thick crust pizza with `)
  for (let pizzaTopping of pizzaToppings ) {
    console.log(pizzaTopping);
  }
}

function preparePizza (input) {
  console.log("...Cooking Pizza...");
  const pizza = {
    size: input[0],
    crust: input[1],
    pizzaToppings: input[2]
  }
  return pizza;
}

function servePizza(pizza) {
  let message = "Order up! Here is your "
  message += pizza.size + ', ';
  message += pizza.crust + ' crust, ';
  message += pizza.pizzaToppings.join(', ');
  message += '.'
  console.log(message)
  console.log('Enjoy!')
  return message;
}


