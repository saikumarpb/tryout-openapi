import { Controller, Get, Path, Route } from 'tsoa';
import { TodoService } from './todoService';
import { Todo } from './todos';

@Route('todo')
export class TodoController extends Controller {
    @Get('{todoId}')
    public async getTodo(@Path() todoId: string): Promise<Todo> {
        let todoService = new TodoService();
        return todoService.get(todoId);
    }
}
