const express = require('express');
const NotFoundError = require('../errors/NotFoundError');
const router = express.Router();

const priceRouter = require('./priceRoute');
const productRouter = require('./productRoute');
const placesRouter = require('./placeRoute');
const brandRouter = require('./brandRoute');
const unitRouter = require('./unitRoute');

/**
 * @swagger
 * /test:
 *   get:
 *     summary: de prueba
 *     tags: [Recursos]
 *     responses:
 *       200:
 *         description: OK
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *       500:
 *         description: Server error
 */
router.get('/test', (req, res, next) => {
  next(new NotFoundError());
});

router.use('/prices', priceRouter);
router.use('/products', productRouter);
router.use('/places', placesRouter);
router.use('/brands', brandRouter);
router.use('/units', unitRouter);

module.exports = router;
