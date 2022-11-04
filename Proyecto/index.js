var nconfff = require ('nconf');
nconfff.env();
console.log ('Los valores de las variables de entorno del OS son: %s', 
    nconfff.get ('os'));