var sqlite3 = require('sqlite3').verbose()

class Database {

    #database

    get #DB_SOURCE() {
        return 'db.sqlite'
    }

    async #createDb() {
        return await new Promise((resolve, reject) => {
            const db = new sqlite3.Database(this.#DB_SOURCE, async (err) => {
                if (err) {
                  // Cannot open database
                  console.error(err.message)
                  throw err
                } else {
                    console.log('Connected to the SQLite database.')
                    await db.run(`CREATE TABLE Contact (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        ip text UNIQUE
                        )`, (err) => {});
                    await db.run(`CREATE TABLE Calification (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        ip text UNIQUE
                        )`, (err) => {});
                    resolve(db)
                }
            });
        })
    }

    async initialize(callback) {
        const db = await this.#createDb()
        this.#database = db

        callback?.bind(this)()
    }

    get() {
        return this.#database
    }
}

// exporting singleton pattern without creating a singleton class
module.exports = new Database()