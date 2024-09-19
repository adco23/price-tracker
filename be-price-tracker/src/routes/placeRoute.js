const express = require('express');
const router = express.Router();
const { place: db } = require('../prismaClient');
const ApiError = require('../errors/ApiError');
const ApiResponse = require('../responses/ApiResponse');

/**
 * @swagger
 * /places:
 *   get:
 *     summary: Retorna todos los lugars almacenados
 *     tags: [Places]
 *     responses:
 *       200:
 *         description: Lista de lugares
 */
router.get('/', async (req, res, next) => {
  try {
    let all = await db.findMany();

    res.status(200).json(new ApiResponse(all));
  } catch (error) {
    next(new ApiError());
  }
});

module.exports = router;
