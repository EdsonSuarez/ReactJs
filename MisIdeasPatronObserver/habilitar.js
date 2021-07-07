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
  
  class Habilitar extends Observable {
    constructor() {
      super();
      this.value = false;
    }
    cambiar() {
      this.value = !this.value;
      this.notifyObservable(this);
    }
  }
  
  class mostrarResultado {
    notify(model) {
      if (model.value) {
        console.log(`Mostrar resultado: ${model.value}`);
      } else {
        console.log(`Ocultar resultado: ${model.value}`);
      }
      
    }
  }
  
  class mostrarBoton {
    notify(model) {
      if (model.value) {
        console.log(`Mostrar Boton: ${model.value}`);
      } else {
        console.log(`Ocultar Boton: ${model.value}`);
      }
    }
  }
  
  let habilitar = new Habilitar();
  
  habilitar.subcribe(new mostrarResultado());
  habilitar.subcribe(new mostrarBoton());
  
  habilitar.cambiar();
  habilitar.cambiar();
  habilitar.cambiar();
  habilitar.cambiar();