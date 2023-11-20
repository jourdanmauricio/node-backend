const express = require('express');

const validatorHandler = require('../middlewares/validator.handler');
const {
  getProductSchema,
  createProductSchema,
  updateProductSchema,
} = require('../schemas/product.schema');

const ProductService = require('./../services/product.service');
const service = new ProductService();

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const product = await service.create(body);
    res.status(201).json({ message: 'Created', data: product });
  },
);

router.put(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
      const product = await service.update(id, body);
      res.json({ message: 'Update', data: product });
    } catch (error) {
      res.status(404).json({ message: error });
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
