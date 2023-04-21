import { Router } from 'express';
import{ addTodo, deleteTodoById, getTodoById, getTodos, updateTodoById }from '../controllers/todosController.js'
const router = Router();


router.post('',addTodo);
router.get('/', getTodos);
router.get('/:todo_id', getTodoById);
router.patch('/:todo_id', updateTodoById);
router.delete('/:todo_id',deleteTodoById );


export default router;