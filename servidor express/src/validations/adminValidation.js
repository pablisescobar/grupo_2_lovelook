let { check } = require("express-validator");

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("El campo nombre es obligatorio").bail()
    .isString()
    .withMessage('Debes ingresar un nombre valido')
    .isLength({ min: 5 })
    .withMessage("El nombre debe ser mayor a 5 caracteres"),

  check("description")
    .notEmpty()
    .withMessage("Debes ingresar una descripción"),

  check("season")
    .notEmpty()
    .withMessage("Selecciona una temporada"),

  check("category").notEmpty()
    .withMessage("Selecciona una categoría"),

  check("price")
    .notEmpty()
    .withMessage("Ingresa un precio").bail()
    .isNumeric()
    .withMessage("Ingresa un valor numerico"),

  check("color").notEmpty()
    .withMessage("Selecciona un color").bail(),

  check("size").notEmpty()
    .withMessage("Selecciona un talle"),

  check("amount")
    .notEmpty()
    .withMessage("Ingresa una cantidad").bail()
    .isNumeric()
    .withMessage("Ingresa un valor númerico"),
  
];
