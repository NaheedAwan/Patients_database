const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'sqluser',
    host: 'localhost',
    password:'password',
    database: 'patientportal'
})




module.exports = db