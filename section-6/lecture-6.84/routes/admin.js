const path = require('path');

const express = require('express');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/admin/add-product', (req, res, next) => {
  res.render('add-product', {docTitle: 'Add Product'});
});

// /admin/add-product => POST
router.post('/admin/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;