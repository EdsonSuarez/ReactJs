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
  dividir(numero1, numero2) {
    this.value = numero1/numero2;
    this.notifyObservable(this);
  }

  multiplicar(numero1, numero2) {
    this.value = numero1*numero2;
    this.notifyObservable(this);
  }

  sumar(numero1, numero2) {
    this.value = numero1+numero2;
    this.notifyObservable(this);
  }
  
  restar(numero1, numero2) {
    this.value = numero1-numero2;
    this.notifyObservable(this);
  }
}

class par {
    notify(model) {
      if(model.value % 2 == 0) {
          console.log(`el resultado ${model.value} es par`);
        }
        else {
          console.log(`el resultado ${model.value} es impar`);
        }
    }
  }

class primo {
  notify(model) {
    let primo = true;
    for (var i = 2; i < model.value; i++) {
        if (model.value % i === 0) {
            primo = false;
        }
      }
      if (primo) { 
          console.log(`el resultado ${model.value} es primo`);
    } else {
        console.log(`el resultado ${model.value} no es primo`);
    }
    }
  }

let numberExample = new NumberExample();

numberExample.subcribe(new par());
numberExample.subcribe(new primo());

numberExample.dividir(100,20);
numberExample.multiplicar(2,10);
numberExample.sumar(2,1);
numberExample.restar(8,1);
