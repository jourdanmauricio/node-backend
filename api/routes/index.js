const express = require('express');

const authRouter = require('./auth.router');
const usersRouter = require('./users.router');
const profileRouter = require('./profile.router');
const customersRouter = require('./customers.router');
const categoriesRouter = require('./categories.router');
const productsRouter = require('./products.router');
const ordersRouter = require('./orders.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);

  router.use('/auth', authRouter);
  router.use('/users', usersRouter);
  router.use('/profile', profileRouter);
  router.use('/customers', customersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/products', productsRouter);
  router.use('/orders', ordersRouter);
}

module.exports = routerApi;
