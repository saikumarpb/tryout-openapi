import { type } from 'os';
import { Todo } from './todos';

export type TodoCreationParams = Pick<Todo, 'title' | 'description'>;

export class TodoService {
    /**
     * sfgsfgsf
     * @param todoId msfgvhlsfk
     * @returns sfgsfg
     */
    public get(todoId: string): Todo {
        return {
            title: 'test',
            description: 'mock desc',
            id: todoId,
            done: false,
        };
    }

    public create({ title, description }: TodoCreationParams): Todo {
        return {
            title,
            description,
            id: Math.ceil(Math.random() * 1000).toString(),
            done: false
        };
    }
}
