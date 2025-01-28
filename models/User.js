const mongoose = require('mongoose'); 

const userSchema = mongoose.Schema(
  { 
     // El nombre del usuario es obligatorio 
    name: { type: String, required: true }, 

    // El email es obligatorio y debe ser único en la colección
    email: { type: String, required: true, unique: true },

    // La contraseña es obligatoria 
    password: { type: String, required: true }, 
  }, 

  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);