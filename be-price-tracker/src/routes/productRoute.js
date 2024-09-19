const express = require('express');
const router = express.Router();
const { product: db } = require('../prismaClient');
const ApiResponse = require('../responses/ApiResponse');
const { format } = require('@formkit/tempo');
const NotFoundError = require('../errors/NotFoundError');

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retorna todos los productos almacenados
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get('/', async (req, res, next) => {
  try {
    let all = await db.findMany(/*{
      include: {
        prices: {
          select: {
            price: true,
            date: true,
          },
        },
      },
    }*/);

    // let formatted = all.map((product) => ({
    //   ...product,
    //   prices: product.prices.map((price) => ({
    //     ...price,
    //     date: format(price.date, 'YYYY-MM-DD'),
    //   })),
    // }));

    res.status(200).json(new ApiResponse(all));
  } catch (error) {
    next(error);
  }
});

/**
 * @swagger
 * /products/product/{productId}:
 *   get:
 *     summary: Retorna información de un producto
 *     tags: [Products]
 *     produces:
 *        - application/json
 *     parameters:
 *        - in: path
 *          name: productId
 *          description: Identificador del producto
 *          required: true
 *     responses:
 *       200:
 *         description: Detalles de un producto
 */
router.get('/product/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;

    let product = await db.findUnique({
      where: { id: Number(productId) },
      include: {
        prices: {
          select: {
            date: true,
            price: true,
            place: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (!product) {
      const err = new NotFoundError();
      next(err);
      return;
    }

    let formatted = {
      ...product,
      prices: product.prices.map((price) => ({
        ...price,
        date: format(price.date, 'YYYY-MM-DD'),
      })),
    };

    res.status(200).json(new ApiResponse(formatted));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
