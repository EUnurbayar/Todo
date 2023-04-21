import todoModel from "../models/todoModel.js";

export async function addTodo(req, res, next){
    try{
        const new_todo = req.body;
        const result = await todoModel.create(new_todo);
        res.json({success: true, data: result});
    }catch(error){
        next(error)
    }
}

export async function getTodos(req, res, next){
    try{
        const result = await todoModel.find();
        res.json({success: true, data: result});
    }catch(error){
        next(error)
    }
}

export async function getTodoById(req, res, next){
    try{
        const {todo_id} = req.params;
        const result = await todoModel.findOne(
            {_id: todo_id}
        );
        res.json({success: true, data: result});
    }catch(error){
        next(error)
    }
}


export async function updateTodoById(req, res, next){
    try{
        const {todo_id} = req.params;
        const {title, description, completed} = req.body;
        const result = await todoModel.updateOne(
            {_id: todo_id},
            {$set: { title, description, completed }}
        );
        res.json({success: true, data: result})
    }catch(error){
        next(error)
    }
}

export async function deleteTodoById(req, res, next){
    try{
        const {todo_id} = req.params;
        const result = await todoModel.deleteOne(
            {_id: todo_id},
        );
        res.json({success: true, data: result})
    }catch(error){
        next(error)
    }
}