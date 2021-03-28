const Database = require('../database')


class Utils {

    static dropTable = async (tableName) => {
        await Database.run(`DROP TABLE ${tableName}`)
    }

    static deleteRowsTable = async (tableName) => {
        await Database.run(`DELETE FROM ${tableName}`)
    }
}

module.exports = Utils