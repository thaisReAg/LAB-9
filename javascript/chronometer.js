class Chronometer {
  constructor() {
    // Añadimos dos propiedades:
    this.currentTime = 0;  // current time in milliseconds, ponemos this para añadir una propiedad a una clase
    this.intervalId = null;  
  }

  start(callback) {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        // Código para ejecutar en cada intervalo
      }, 1000);
    }
  }

  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
