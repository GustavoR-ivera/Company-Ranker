
import { db } from "../connect.js";

export const getUser = (req,res)=>{
    const userId = req.params.userId;
    const q = "SELECT idUser, Name FROM User WHERE idUser = ?";
    db.query(q, [userId], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al obtener usuario");
        } else {
            res.status(200).json(result);
        }
    });
}
/*const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/user');

// Generar token de autenticación
function generateToken(user) {
  return jwt.sign(user.toJSON(), 'ecret_key', { expiresIn: '1h' });
}

// Autenticar usuario
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email, password }, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = generateToken(user);
    res.json({ token });
  });
});

// Obtener perfil de usuario
router.get('/user_profile', authenticate, (req, res) => {
  const userId = req.user.id;
  User.findById(userId, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = generateToken(user);
    res.json({ token, user });
  });
});

// Autenticar usuario
function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const user = jwt.verify(token, 'ecret_key');
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

module.exports = router;
*/