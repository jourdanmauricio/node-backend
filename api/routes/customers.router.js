const express = require('express');

const validatorHandler = require('../middlewares/validator.handler');
const {
  getCustomerSchema,
  createCustomerSchema,
  updateCustomerSchema,
} = require('../schemas/customer.schema');

const CustomerService = require('./../services/customer.service');
const service = new CustomerService();

const router = express.Router();

router.get('/', async (req, res) => {
  const customers = await service.find();
  res.json(customers);
});

router.get(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await service.findOne(id);
      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const customer = await service.create(body);
    res.status(201).json({ message: 'Created', data: customer });
  },
);

router.put(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    try {
      const customer = await service.update(id, body);
      res.json({ message: 'Update', data: customer });
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getCustomerSchema, 'params'),
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
