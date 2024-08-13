import { User } from '../models/User';

let users: User[] = []; 

export class UserController {
    // Create a new user
    static createUser(user: User): User {
        users.push(user);
        return user;
    }

    // Get all users
    static getAllUsers(): User[] {
        return users;
    }

    // Get a user by ID
    static getUserById(id: string): User | undefined {
        return users.find(user => user.id === id);
    }

    // Update a user by ID
    static updateUser(id: string, updatedUser: Partial<User>): User | undefined {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users[index] = { ...users[index], ...updatedUser };
            return users[index];
        }
        return undefined;
    }

    // Delete a user by ID
    static deleteUser(id: string): boolean {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users.splice(index, 1);
            return true;
        }
        return false;
    }
}
