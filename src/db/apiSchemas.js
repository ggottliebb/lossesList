
import { AuthSchema, TodoSchema } from "./models";


export const fetchTodosResponseSchema = [TodoSchema];
export const updateTodoResponseSchema = TodoSchema;
export const addTodoResponseSchema = TodoSchema;
export const deleteTodoResponseSchema = TodoSchema;
export const authUserResponseSchema = AuthSchema;

