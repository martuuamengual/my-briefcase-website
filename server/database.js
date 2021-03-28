const better_sqlite = require('better-sqlite3')

class Database {

    get DB_SOURCE() {
        return 'db.sqlite'
    }

    run(query, ...values) {
        return new Promise(async (resolve, rejt) => {
            try {
                const stmt = await this.database.prepare(query)
                const data = await stmt.run(...values)
                resolve(data)
            } catch(e) {
                rejt(e)
            }
        });
    }

    get(query, ...values) {
        return new Promise(async (resolve, rejt) => {
            try {
                const stmt = await this.database.prepare(query)
                const data = await stmt.get(...values)
                resolve(data)
            } catch(e) {
                rejt(e)
            }
        });
    }

    async initialize(callback) {
        const db = await new better_sqlite(this.DB_SOURCE)
        this.database = db
        
        await this.run(`CREATE TABLE Contact (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ip text UNIQUE
            )`).catch((err) => {})
        
        await this.run(`CREATE TABLE Calification (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ip text UNIQUE
            )`).catch((err) => {})

        console.log('Connected to the SQLite database.')
        
        callback?.bind(this)()
        
        return this.database
    }
}

// exporting singleton pattern without creating a singleton class
module.exports = new Database()