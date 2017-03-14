   //Funcion de colas y sus metodos
  function Queue() {
      var elements = [];

      this.add = add;
      this.remove = remove;
      this.getFrontElement = getFrontElement;
      this.hasElements = hasElements;
      this.removeAll = removeAll;
      this.size = size;
      this.toString = toString;

      function add(element) {
          elements.push(element);
      }

      function remove() {
          return elements.shift();
      }

      function getFrontElement() {
          return elements[0];
      }

      function hasElements() {
          return elements.length > 0;
      }

      function removeAll() {
          elements = [];
      }

      function size() {
          return elements.length;
      }

      function toString() {
          console.log(elements.toString());
      }
  }

  //Creamos nuestro objeto cola con los nombres
  var nombre = new Queue();
  //Agregamos elementos a la cola
  nombre.add('Carlos');
  nombre.add('Cristina');
  nombre.add('Mario');
  nombre.add('Luis');
  nombre.add('Carmen');

  //Creamos nuestro objeto cola con los apellidos
  var apellido = new Queue();
  //Agregamos elementos a la cola
  apellido.add('Flores');
  apellido.add('Rojas');
  apellido.add('Lopez');
  apellido.add('Hernandez');
  apellido.add('Ruiz');

  var nombres=[];


  var concatenar="";
  for (i=0;i<5;i++){
    //concatenamos cada nombre y apellido y en cada vuelta se saca un elemento de la cola
  concatenar= nombre.remove()+apellido.remove();
    //Agregamos los nombres y apellidos al arreglo nombres.
  nombres.push(concatenar);


  }
  console.log("Colas Ejercicio numero 2 "+ nombres);
