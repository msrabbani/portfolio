const router = require('express').Router();
const memos_controller = require('../controllers/memos_controller');

router.get('/', memos_controller.getAll);
router.get('/:id', memos_controller.getSingle);
router.post('/', memos_controller.createMemo);
router.put('/:id', memos_controller.updateMemo);
router.delete('/:id', memos_controller.deleteMemo);

module.exports = router;
