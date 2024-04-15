import { Request, Response } from "express";
import { readUsersFile } from "../utils/readFile";

export const login = (req: Request, res: Response) => {
    const { email, password } = req.body;
    const users = readUsersFile();

    if (!email) {
        return res.status(400).json({ message: 'O email é obrigatório' });
    }

    if (!password) {
        return res.status(400).json({ message: 'A senha é obrigatória' });
    }

    try {
        const user = users.find(user => user.email === email);
        
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        return res.status(200).json({
            id: user.id,
            email: user.email,
            name: user.name,
            age: user.age,
            abilities: user.abilities
        });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
}