     //Funcion de pilas y sus metodos
  function Stack() {
      var elements = [];

      this.add = add;
      this.pop = pop;
      this.getTopElement = getTopElement;
      this.hasElements = hasElements;
      this.removeAll = removeAll;
      this.size = size;

      function add(element) {
          elements.push(element);
      }

      function pop() {
          return elements.pop();
      }

      function getTopElement() {
          return elements[elements.length - 1];
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
  }

    //Creamos nuestro objeto pila con los nombres
  	var nombre= new Stack();
    //Agregamos elementos a la pila
  	  nombre.add('nely');
      nombre.add('diana');
      nombre.add('silvia');
      nombre.add('Susana');
      nombre.add('Pedro');
      //Creamos nuestro objeto pilas con los apellidos
      var apellido= new Stack();
      //Agregamos elementos a la pila
      apellido.add('Flores');
      apellido.add('Rojas');
      apellido.add('Quintanar');
      apellido.add('Perez');
      apellido.add('Lopez');

  	var nombres=[];


  	var concatenar="";
  	for (i=0;i<5;i++){
  	concatenar= nombre.pop()+apellido.pop();

  		nombres.push(concatenar);


	}
	console.log( "Pilas Ejercicio numero 1 "+ nombres);
