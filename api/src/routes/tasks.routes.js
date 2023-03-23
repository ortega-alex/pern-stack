const { Router } = require('express');
const { getAllTasks, getTaskById, createTask, deleteTask, updateTask } = require('../controllers/tasks.controller');
const router = Router();

router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks', createTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', updateTask);

module.exports = router;
