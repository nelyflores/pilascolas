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

  var nombre = new Queue();
  nombre.add("Prueba");
  var numeroUsuarios= prompt("Cuantos usuarios quiere ingresar");
  numeroUsuarios=parseInt(numeroUsuarios);
  for (var i=0; i<numeroUsuarios;i++){
  var nombreUsuario=prompt("Escribe el nombre del usuario"+ (i+1));



    nombre.add(nombreUsuario);


  }
  console.log(nombre);
