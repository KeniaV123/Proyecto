
require('./expresion_Alg');

const x = require('mathjs-expression-parser');

const expresion = '5 * 4 / 2 * 3 + 2 / 3 * 2 * 6';

console.log('resultados: \r');
console.log(x.eval(expresion, {}));
console.log();