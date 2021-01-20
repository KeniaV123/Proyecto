
const Arbol = require('./arbol');

var arbol = new Arbol();
var expresion = [5, '*', 4, '/', 2, '*', 3, '+', 2, '/', 3, '*', 2, '*', 6];
  
for (var i = 0; i < expresion.length; i++) {
    arbol.agregarRecorrido(expresion[i]);
}

console.log();
console.log('Preorder: ');
arbol.preorder();
console.log();
console.log('Postorder: ');
arbol.postorder();
console.log();