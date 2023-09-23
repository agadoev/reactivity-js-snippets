class Subject {
  constructor() {
    this.observers = []
  }
  addObserver(observer) {
    this.observers.push(observer)
  }
  removeObserver(observer) {
    this.observers = this.observers.filter((o) => o !== observer)
  }
  notify(data) {
    this.observers.forEach((observer) => {
      observer.update(data)
    })
  }
}

class Observer {
  update(data) {
    console.log(data)
  }
}

const subject = new Subject()
const observer = new Observer()

subject.addObserver(observer)
subject.notify('Hi, observer!') // Hi, observer!
subject.removeObserver(observer)
subject.notify('Are you still here?') // Ничего