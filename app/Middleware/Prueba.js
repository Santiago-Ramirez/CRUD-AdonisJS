'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Prueba {
  async handle ({ request, response }, next)
   {
     if(request.header('marca') == 'ACER' || request.header('marca') == 'acer')
     {
         await next()
     }
     else
     {
       response.send('No eres marca ACER aimsorry my friend, aqui pura marca buena')
     }
  }

}

module.exports = Prueba
