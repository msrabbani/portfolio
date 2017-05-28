const router = require('express').Router();
const memos_controller = require('../controllers/memos_controller');

router.get('/', memos_controller.getAll);

module.exports = router;
