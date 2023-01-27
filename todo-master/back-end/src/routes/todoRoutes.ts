import { Request, Response } from 'express';
import { Router } from "express";
import Todo from "../models/Todo";

import checkToken from "../utils/checkToken";


interface TodoType { 
    _id?: string;
    text: string;
    checked: boolean;
    user?: string;
};


const router = Router();

router.get('/', checkToken, async(req: Request, res: Response) => {
    const { userid: userId } = req.headers;
    if (!userId) {
        res.status(422).json({ message: 'user id is required on header' });
        return;
    }

    try {
        const todos: TodoType[] = await Todo.find({ user: userId });
        res.status(200).json(todos);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/:id', checkToken, async(req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const todo = await Todo.findOne({ _id: id });
        todo ? res.status(200).json(todo) : res.status(422).json({ message: 'todo not found' });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
})


router.post('/', checkToken, async(req: Request, res: Response) => {
    const { userid: userId } = req.headers;
    if (!userId) {
        res.status(422).json({ message: 'user id is required on header' });
        return;
    }

    const { text } = req.body;
    if (!text) {
        res.status(422).json({ message: 'empty input' })
        return;
    } 

    const todo: TodoType = { text, checked: false, user: userId.toString() };
    try {
        await Todo.create(todo);
        res.status(201).json({ message: "todo created successfully" });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
})


router.put('/:id', checkToken, async(req: Request, res: Response) => {
    const id: string = req.params.id;
    const { text, checked } = req.body;
    console.log(text)
    console.log(checked)
    if (!text && !checked) {
        res.status(422).json({ message: 'empty input' });
        return;
    }
    const todo: TodoType = { text, checked }
    try {
        const updatedTodo = await Todo.updateOne({ _id: id }, todo);
        res.status(200).json(updatedTodo);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});


router.delete('/:id', checkToken, async(req: Request, res: Response) => {
    const id: string = req.params.id;
    const todo = await Todo.findOne({ _id: id });
    if (!todo) {
        res.status(422).json({ message: 'todo not found' });
    }
    try {
        await Todo.deleteOne({ _id: id });
        res.status(200).json({ message: 'todo removed successfully' });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});


export default router;