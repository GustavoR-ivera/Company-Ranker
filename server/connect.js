import mysql from 'mysql';

export const db = mysql.createConnection({
    host:"db-mysql-company-ranker-ingesoft2-do-user-16456416-0.c.db.ondigitalocean.com",
    user:"javier-cr",
    password:"AVNS_LCYwQXx1PWKGo45BTq5",
    database:"defaultdb"
  })