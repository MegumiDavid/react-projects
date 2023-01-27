import { Router } from 'express';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

import checkToken from '../utils/checkToken'


interface UserType {
    _id: string;
    email: string;
    password: string;
};

const router = Router();

router.get('/', async(req: Request, res: Response) => {
    try {
        const users: UserType[] = await User.find();
        res.status(200).json(users);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
})

router.get('/:id', checkToken, async(req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const user = await User.findById({ _id: id });
        user ? res.status(200).json(user) : res.status(422).json({ message: 'user not found' });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
})

// sign in
router.post('/signin', async(req: Request, res: Response) => {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
        res.status(422).json({ message: 'empty input' });
        return;
    }
    if (password !== confirmPassword) {
        res.status(422).json({ message: 'password is not matching' });
        return;
    }
    if (password.length < 6) {
        res.status(422).json({ message: 'password should have at least 6 characters' });
        return;
    }
    if (!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
        res.status(422).json({ message: `${email} is not an email` });
        return;
    }
    const userExist: any = await User.findOne({ email: email });
    if (userExist) {
        res.status(422).json({ message: 'user already exists' });
        return;
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
        email: email,
        password: passwordHash,
    })

    try {
        await user.save();
        const secreat: any = process.env.SECREAT;
        const token = jwt.sign(
            {
                id: user?._id,
            }, 
            secreat
        );
        res.status(201).json({ message: 'user created successfully', token, userId: user._id })
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
})

// log in
router.post('/login', async(req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {  
        res.status(422).json({ message: 'empty input' });
        return;
    }

    const user: any = await User.findOne({ email: email });
    if (!user) {
        res.status(404).json({ message: 'email not found' });
        return;
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
        res.status(422).json({ message: 'password incorrect' });
        return;
    }

    try {
        const secreat: any = process.env.SECREAT;
        const token = jwt.sign(
            {
                id: user?._id,
            }, 
            secreat
        );
        res.status(200).json({ 
            message: 'authentication successful', 
            token: token,
            userId: user._id 
        });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
})


export default router;