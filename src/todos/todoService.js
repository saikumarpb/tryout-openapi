"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            title: 'test',
            description: 'mock desc',
            id: todoId,
            done: false,
        };
    }
    create({ title, description }) {
        return {
            title,
            description,
            id: Math.ceil(Math.random() * 1000).toString(),
            done: false
        };
    }
}
exports.TodoService = TodoService;
