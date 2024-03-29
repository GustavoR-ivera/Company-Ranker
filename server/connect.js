import mysql from 'mysql';

export const db = mysql.createConnection({
    host:"http://us-cluster-east-01.k8s.cleardb.net",
    user:"b4afbe7c267657",
    password:"d278a37b",
    database:"heroku_f1a0fd996d0a269"
  })