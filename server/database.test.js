const Database = require('./database')
const Utils = require('./test.utils/Utils')

describe('server', () => {

    test('testing source db', () => {
        expect(Database.DB_SOURCE).toBe('db.sqlite')
    })

    test('testing if database is created', async () => {
        const db = await Database.initialize()
        expect(db).not.toBeUndefined()
        expect(db).not.toBeNull()
        expect(db).not.toBeNaN()
    })

    test('testing RUN command', async () => {
        await Database.run(`CREATE VIEW [test_run_command] AS SELECT example FROM example`)
        await Database.run(`DROP VIEW test_run_command`)
    })

    test('testing GET command', async () => {
        const data = await Database.get(`SELECT * FROM sqlite_master`)
        expect(data).not.toBeUndefined()
    })

    test('testing if tables was created', async () => {
        const contactTable = await Database.get(`SELECT name FROM sqlite_master WHERE type='table' AND name='Contact'`)
        expect(contactTable).not.toBeUndefined()

        const calificationTable = await Database.get(`SELECT name FROM sqlite_master WHERE type='table' AND name='Calification'`)
        expect(calificationTable).not.toBeUndefined()
    })

    test('erease all', async () => {
        await Utils.deleteRowsTable('Contact')
        await Utils.deleteRowsTable('Calification')
    })
})