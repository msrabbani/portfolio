const router = require('express').Router();
const users_controller = require('../controllers/users_controller');
const helpers = require('../helpers/util');

router.get('/', helpers.auth, users_controller.getUsers);
router.get('/:id', helpers.auth, users_controller.getSingle);
router.post('/', helpers.auth, users_controller.createUser);
router.put('/:id', helpers.auth, users_controller.updateUser);
router.delete('/:id', helpers.admin, users_controller.deleteUser);
router.post('/login', users_controller.login);

module.exports = router;
