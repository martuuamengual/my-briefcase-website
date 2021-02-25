var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE Contact (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ip text UNIQUE
            )`, (err) => {
                if(!err) {
                    //db.run('insert into Contact (ip) values (?)', ['182.164.21.123'])
                    //db.run('insert into Contact (ip) values (?)', ['::1'])
                }
            });
        db.run(`CREATE TABLE Calification (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ip text UNIQUE
            )`, (err) => {});
    }
});


module.exports = db