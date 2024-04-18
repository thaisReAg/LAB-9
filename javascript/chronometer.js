class Chronometer {
  constructor() {
    // Añadimos dos propiedades:
    this.currentTime = 0; // current time in milliseconds, ponemos this para añadir una propiedad a una clase
    this.intervalId = null;
  }

  start(callback) {
    // Dentro de la función pasada a setInterval
    this.intervalId = setInterval(() => {
      this.currentTime++; // Incrementamos el valor de currentTime en 1
      console.log('Contador: ' + this.currentTime); // Imprimimos el valor actual del contador, esta linea es opcional
      if (callback) {
        callback(); // Ejecutamos el callback si se proporciona
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return getMinutes() % 60;  // el Math.floor no se pone porque se supone que el numero ya me lo daran redondeado y no se pone this.getMinutes() porque esta llamando a la función anterior y no a una propiedad
  }

  computeTwoDigitNumber(value) {
    let valueString = value.toString();
    if (valueString.length < 2) {
      return '0' + valueString;
    } else {
      return valueString;
    }
  }

  /*OTRA OPCIÓN:
   if (value<10){
    return "0"+value; 
      } else {
        return value.toString();
      }
    */

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    this.stop();
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    return (
      this.computeTwoDigitNumber(this.getMinutes()) +
      ':' +
      this.computeTwoDigitNumber(this.getSeconds())
    ); // Esta linea de código nos dice: oye en el split quiero que me devuelvas los minutos en unidades de dos digitos y los segundos en unidades de dos digitos.
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
