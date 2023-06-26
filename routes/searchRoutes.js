const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');
router.get('/pesquisa', searchController.search);

module.exports = router;