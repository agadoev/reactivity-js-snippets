/* Proxy позволяет обеспечить реактивность при установке/получении значений свойств объекта */

const handler = {
  get(target, property) {
    console.log(`Getting property ${property}`)
    return target[property]
  },
  set(target, property, value) {
    console.log(`Setting property ${property} to value ${value}`)
    target[property] = value
    return true // Индикатор успешной установки значения свойства
  },
}

const pizza = {
  name: 'Margherita',
  toppings: ['mozzarella', 'tomato sauce'],
}

const proxiedPizza = new Proxy(pizza, handler)

console.log(proxiedPizza.name) // 'Getting property name' и 'Margherita'
proxiedPizza.name = 'Pepperoni' // Setting property name to value Pepperoni