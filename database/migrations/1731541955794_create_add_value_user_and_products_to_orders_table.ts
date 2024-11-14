import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AddValueToOrders extends BaseSchema {
  protected tableName = 'orders'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('value').notNullable()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('value')
    })
  }
}
