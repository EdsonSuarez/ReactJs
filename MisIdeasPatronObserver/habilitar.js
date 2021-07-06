class Observable {
    constructor() {
      this.observers = [];
    }
  
    subcribe(notifyingClass) {
      this.observers.push(notifyingClass);
    }
  
    unsubscribe(notifyingClass) {
      this.observers = this.observers.filter((observer) => {
        observer instanceof notifyingClass !== true;
      });
    }
  
    notifyObservable(model) {
      this.observers.forEach((observer) => {
        observer.notify(model);
      });
    }
  }
  
  class NumberExample extends Observable {
    constructor() {
      super();
      this.value = 0;
    }
    increment() {
      this.value++;
      this.notifyObservable(this);
    }
  }
  
  class NumberExampleSpanish {
    notify(model) {
      console.log(`El nuevo numero es: ${model.value}`);
    }
  }
  
  class NumberExampleEnglish {
    notify(model) {
      console.log(`The new number is: ${model.value}`);
    }
  }
  
  let numberExample = new NumberExample();
  
  numberExample.subcribe(new NumberExampleSpanish());
  numberExample.subcribe(new NumberExampleEnglish());
  
  numberExample.increment();
  numberExample.increment();