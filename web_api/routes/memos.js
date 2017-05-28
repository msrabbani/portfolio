const router = require('express').Router();
const memos_controller = require('../controllers/memos_controller');
const helpers = require('../helpers/util');

router.get('/', helpers.admin, memos_controller.getAll);
router.get('/:id', helpers.auth, memos_controller.getSingle);
router.post('/', helpers.auth, memos_controller.createMemo);
router.put('/:id', helpers.auth, memos_controller.updateMemo);
router.delete('/:id', helpers.auth, memos_controller.deleteMemo);

module.exports = router;
