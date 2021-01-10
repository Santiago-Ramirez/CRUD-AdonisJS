'use strict'

/*
|--------------------------------------------------------------------------
| CompuSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class CompuSeeder {
  async run () {
    const comp = await Database.table('computadoras')
    const usersArray = await Factory
      .model('App/Models/Computadora')
      .createMany(100)
  }
}

module.exports = CompuSeeder
