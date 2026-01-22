const express = require('express');
const router = express.Router();
const { unit: db } = require('../prismaClient');
const ApiError = require('../errors/ApiError');
const ApiResponse = require('../responses/ApiResponse');
const BadRequestError = require('../errors/BadRequestError');

/**
 * @swagger
 * /units:
 *   get:
 *     summary: Retorna todos las unidades almacenadas
 *     tags: [Units]
 *     responses:
 *       200:
 *         description: Lista de unidades
 */
router.get('/', async (req, res, next) => {
  try {
    let all = await db.findMany();

    if (!all.length) return res.status(200).json(new ApiResponse({ message: 'No se encontraron unidades' }));

    res.status(200).json(new ApiResponse({ data: all }));
  } catch (error) {
    next(new ApiError());
  }
});

/**
 * @swagger
 * /units:
 *   post:
 *     summary: Agrega una nueva unidad
 *     tags: [Units]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          required:
 *            - title
 *            - symbol
 *          properties:
 *            title:
 *              type: string
 *            symbol:
 *              type: string
 *     responses:
 *       201:
 *         description: Devuelve la unidad agregada
 *       400:
 *         description: Bad Request
 */
router.post('/', async(req, res, next) => {
  const { title, symbol } = req.body;
  try {

    const exists = await db.findUnique({
      where: { title }
    });

    if (exists) return next(new BadRequestError( 'La unidad ya existe' ));

    const createdBrand = await db.create({
      data: {
        title: title.trim().toLowerCase(),
        symbol: symbol.trim()
      }
    });

    res.status(201).json(new ApiResponse({ message: 'La unidad fue agregada', data: createdBrand }));
  } catch (error) {
    console.error(error.message);
    switch (error.code) {
      case 'P2002':
        next(new BadRequestError( 'La unidad ya existe' ));
        break;
      default:
        next(new ApiError());
        break;
    }
  }
});

module.exports = router;
