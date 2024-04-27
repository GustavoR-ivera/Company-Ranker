import mysql from 'mysql';

export const db = mysql.createConnection({
    host:"db-mysql-company-ranker-ingesoft2-do-user-16456416-0.c.db.ondigitalocean.com",
    user:"doadmin",
    password:"AVNS_xlUoFhIl5QvNA3197Mb",
    database:"defaultdb",
    port: 25060
  })


  db.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
  
    db.query('SELECT 1', (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
      } else {
        console.log('Database connection successfully tested');
      }
    });
  });