//Clase Observadores, se agrega, se elimina y se notifica los cambios a
//cada uno de los observadores.
class Observable {
  constructor() {
    //Array de observadores, inicia vacio.
    this.observers = [];
  }
  //Agregar un observador
  subcribe(notifyingClass) {
    this.observers.push(notifyingClass);
  }
  //Eliminar un observador
  unsubscribe(notifyingClass) {
    this.observers = this.observers.filter((observer) => {
      observer instanceof notifyingClass !== true;
    });
  }
  //Notificar cambios a todos los observadores
  notifyObservable(model) {
    this.observers.forEach((observer) => {
      observer.notify(model);
    });
  }
}

// Clase observada, es un contador (hija de Observable)
class NumberExample extends Observable {
  constructor() {
    super();
    this.value = 0;
  }
  //Incrementar el valor del contador y notificar a los observadores el nuevo valor
  increment() {
    this.value++;
    this.notifyObservable(this);
  }
}

// Clase observadora, al sumar el contador, imprime el nuevo valor en espanol
class NumberExampleSpanish {
  notify(model) {
    console.log(`El nuevo numero es: ${model.value}`); // imprimir el nuevo valor
  }
}

// Clase observadora, al sumar el contador, imprime el nuevo valor en ingles
class NumberExampleEnglish {
  notify(model) {
    console.log(`The new number is: ${model.value}`); // imprimir el nuevo valor
  }
}

// Crear instancia de la clase observada
let numberExample = new NumberExample();

// Agregar las clases observadoras, para que puedan observar el objeto observado.
numberExample.subcribe(new NumberExampleSpanish());
numberExample.subcribe(new NumberExampleEnglish());

// Incrementar el contador
numberExample.increment();
numberExample.increment();
