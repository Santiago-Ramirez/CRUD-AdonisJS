'use strict'

class Compu
{
  get rules () {
     return {
       marca: 'required|string',
       modelo: 'required|string'
     }
   }

}

module.exports = Compu
