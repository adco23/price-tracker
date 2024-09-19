const express = require('express');
const router = express.Router();
const { price: db } = require('../prismaClient');
const ApiError = require('../errors/ApiError');
const ApiResponse = require('../responses/ApiResponse');
const { format } = require('@formkit/tempo');

/**
 * @swagger
 * /prices:
 *   get:
 *     summary: Retorna todos los precios almacenados
 *     tags: [Prices]
 *     responses:
 *       200:
 *         description: Lista de precios
 */
router.get('/', async (req, res, next) => {
  try {
    let all = await db.findMany();
    let formated = all.map((p) => ({
      ...p,
      date: format(p.date, 'YYYY-MM-DD'),
    }));

    res.status(200).json(new ApiResponse(formated));
  } catch (error) {
    next(new ApiError());
  }
});

module.exports = router;
