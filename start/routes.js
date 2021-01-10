'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Ramirez = use('Route')

Ramirez.get('/', () => {
  return { greeting: 'Porque me manda a esta ruta' }
})

Ramirez.post('computadoras/ubaldo', 'ComputadoraController.insertarDatoFormaDos');
Ramirez.get('computadoras/datos', 'ComputadoraController.getDatos');
Ramirez.put('computadoras/:id', 'ComputadoraController.updatualizarDato');
Ramirez.delete('computadoras/borrar/:id', 'ComputadoraController.borrarDato');
Ramirez.get('computadoras/datosMiddleware', 'ComputadoraController.getDatos').middleware(['probando']);
/*Ramirez.post('computadoras/ubaldoValidator', 'ComputadoraController.insertarDato').validator('Compu');*/
