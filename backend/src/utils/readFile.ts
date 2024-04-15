import { readFileSync } from "fs";
import { User } from "../types/User";

export const readUsersFile = (): User[] => {
    try {
      const data = readFileSync('./src/users.json', 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error('Erro ao ler o arquivo JSON:', err);
      return [];
    }
};