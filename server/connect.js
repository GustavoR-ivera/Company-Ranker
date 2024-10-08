import {DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE} from "./config.js"
import mysql from 'mysql';
import nodemailer from "nodemailer";


export const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
  })

  // export const db = mysql.createConnection({
  //   host: "db-mysql-company-ranker-ingesoft2-do-user-16456416-0.c.db.ondigitalocean.com",
  //   user: "doadmin",
  //   password: "AVNS_q8dQArKuA_hj5UcO1PZ",
  //   database: "defaultdb",
  //   port: 25060
  // })


export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "companyrankerweb@gmail.com",
    pass: "ppmb fkvl sczc vogx",
  },
});



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