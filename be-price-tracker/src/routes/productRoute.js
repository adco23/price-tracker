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
    let all = await db.findMany();

    res.status(200).json(new ApiResponse({ data: all }));
  } catch (error) {
    next(error);
  }
});


router.post('/', async (req, res, next) => {
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

    const product = await db.findUnique({
      where: { id: Number(productId) },
      include: {
        prices: {
          select: {
            date: true,
            value: true,
            store: {
              select: {
                name: true,
              },
            },
            packaging: {
              select: {
                quantity: true,
                unit: {
                  select: {
                    symbol: true,
                  }
                }
              },
            },
            brand: {
              select: {
                name: true,
              }
            }
          },
        },
      },
    });

    if (!product) {
      const err = new NotFoundError();
      next(err);
      return;
    }

    const transformed = {
      ...product,
      prices: product.prices.map((price) => ({
        ...price,
        date: format(price.date, 'YYYY-MM-DD'),
        store: price?.store?.name,
        brand: price?.brand?.name,
        packaging: {
          ...price?.packaging,
          unit: price?.packaging?.unit?.symbol
        }
      })),
    };

    res.status(200).json(new ApiResponse({ data: transformed }));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
