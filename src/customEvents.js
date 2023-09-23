const pizzaEvent = new CustomEvent('pizzaDelivery', {
  detail: {
    name: 'Supreme',
  },
})

window.addEventListener('pizzaDelivery', console.log)

window.dispatchEvent(pizzaEvent)

class PizzaStore extends EventTarget {
  constructor() {
    super()
  }
  addPizza(flavor) {
    // Вызываем событие прямо на классе
    this.dispatchEvent(
      new CustomEvent('pizzaAdded', {
        detail: {
          pizza: flavor,
        },
      }),
    )
  }
}

const Pizzas = new PizzaStore()

const handleAddPizza = (e) => {
  console.log('Added pizza:', e.detail.pizza)
}

/* Можно повесить addEventListener не только на DOM объект, но и на класс */
Pizzas.addEventListener('pizzaAdded', handleAddPizza)
Pizzas.addPizza('Supreme') // Added pizza: Supreme