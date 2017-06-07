const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos_controller');

router.get('/', todosController.getAll);
router.post('/', todosController.createTodo);
router.put('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);
router.delete('/', todosController.deleteTodos);

module.exports = router;
