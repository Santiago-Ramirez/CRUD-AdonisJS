'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComputadoraSchema extends Schema
{
  up () {
    this.create('computadoras', (table) => {
      table.increments()
      table.string('modelo',30).notNullable()
      table.string('marca',30).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('computadoras')
  }
}

module.exports = ComputadoraSchema
