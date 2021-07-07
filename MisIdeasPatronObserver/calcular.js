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

class Calculadora extends Observable {
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

let calculadora = new Calculadora();

calculadora.subcribe(new par());
calculadora.subcribe(new primo());

calculadora.dividir(100,20);
calculadora.multiplicar(2,10);
calculadora.sumar(2,1);
calculadora.restar(8,1);
