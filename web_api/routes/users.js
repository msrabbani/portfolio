const router = require('express').Router();
const users_controller = require('../controllers/users_controller');

router.get('/', users_controller.getUsers);
router.get('/:id', users_controller.getSingle);
router.post('/', users_controller.createUser);
router.put('/:id', users_controller.updateUsers);
router.delete('/:id', users_controller.deleteUsers);

module.exports = router;
