const pubSub = {
  events: {},
  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(callback)
  },
  publish(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => {
        callback(data)
      })
    }
  },
  // Прим. пер.: автор почему-то считает, что у PubSub не должно быть этого метода
  unsubscribe(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((cb) => cb !== callback)
    }
  }
}

const handleUpdate = console.log

pubSub.subscribe('update', handleUpdate)
pubSub.publish('update', 'Some update') // Some update
pubSub.unsubscribe('update', handleUpdate)
pubSub.publish('update', 'Some update') // Ничего