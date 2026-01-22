const express = require('express');
const router = express.Router();
const { brand: db } = require('../prismaClient');
const ApiError = require('../errors/ApiError');
const ApiResponse = require('../responses/ApiResponse');
const BadRequestError = require('../errors/BadRequestError');

/**
 * @swagger
 * /brands:
 *   get:
 *     summary: Retorna todos las marcas almacenadas
 *     tags: [Brands]
 *     responses:
 *       200:
 *         description: Lista de marcas
 */
router.get('/', async (req, res, next) => {
  try {
    let all = await db.findMany();

    res.status(200).json(new ApiResponse({ data: all }));
  } catch (error) {
    next(new ApiError());
  }
});

/**
 * @swagger
 * /brands:
 *   post:
 *     summary: Agrega el nombre de una marca
 *     tags: [Brands]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          required:
 *            - name
 *          properties:
 *            name:
 *              type: string
 *     responses:
 *       201:
 *         description: Devuelve marca agregada
 *       400:
 *         description: Bad Request
 */
router.post('/', async(req, res, next) => {
  const { name: brandName } = req.body;
  try {

    const exists = await db.findUnique({
      where: { name: brandName }
    });

    if (exists) return next(new BadRequestError( 'El nombre de la marca ya existe' ));

    const createdBrand = await db.create({
      data: {
        name: brandName.trim().toUpperCase()
      }
    });

    res.status(201).json(new ApiResponse({ message: 'Marca agregada', data: createdBrand }));
  } catch (error) {
    console.error(error.message);
    switch (error.code) {
      case 'P2002':
        next(new BadRequestError( 'El nombre de la marca ya existe' ));
        break;
      default:
        next(new ApiError());
        break;
    }
  }
});

module.exports = router;
