// const uuidv4 = require('uuid/v4');
// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.
let counter = 0

const fakeDatabase = {
  todos: [
    {
      id: counter++,
      text: [
        "11.11.11",
        "12.12.12",
        "1111111",
        "222222",
        "test",
        "+79033090000",
        "1",
        "1",
        "1",
        "test",
        "1",
        "221111",
        "1111",
        "1",
        "1",
        "15.12.12",
        "test",
        "111",
        "test",
        "test",
        "11.11.11",
        "test",
        "1",
        "test",
        "test",
        "test"],
      completed: false
    },
    {
      id: counter++,
      text: [
        "11.11.11",
        "12.12.12",
        "22222",
        "33333",
        "test",
        "+79033090000",
        "1",
        "1",
        "1",
        "test",
        "1",
        "1111",
        "1111",
        "1",
        "1",
        "15.12.12",
        "test",
        "111",
        "test",
        "test",
        "11.11.11",
        "test",
        "1",
        "test",
        "test",
        "test"],

      completed: false
    },
    {
      id: counter++,
      text: [
        "11.11.11",
        "12.12.12",
        "33333",
        "444444",
        "test",
        "+79033090000",
        "1",
        "1",
        "1",
        "test",
        "1",
        "1111",
        "1111",
        "1",
        "1",
        "15.12.12",
        "test",
        "111",
        "test",
        "test",
        "11.11.11",
        "test",
        "1",
        "test",
        "test",
        "test"],
      completed: true
    },
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const fetchTodos = filter =>
  delay(1000).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed);
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

const fetchTodo = id =>
  delay(500).then(() => {
    return fakeDatabase.todos.find(t => t.id === id);
  });

const addTodo = text =>
  delay(200).then(() => {
    let mas = [];
    for (let key in text) {
      mas.push(text[key])
    }
    const todo = {
      id: counter++,
      text: mas,
      completed: false
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });

const updateTodo = (id, { text, completed }) =>
  delay(200).then(() => {
    // console.log(fakeDatabase.todos)
    // console.log(1)
    // console.log(text)
    // console.log(completed)
    // let mas = [];
    // for (let key in text) {
    //   mas.push(text[key])
    // }
    const todo = fakeDatabase.todos.find(t => t.id === id);
    // console.log(123)
    // console.log(todo)
    // console.log(mas)
    todo.text = text === undefined ? todo.text : text;
    todo.completed = completed === undefined ? todo.completed : completed;
    return todo;
  });

const deleteTodo = (id) =>
  delay(200).then(() => {
    let deletedTodo = fakeDatabase.todos.find(t => t.id === id);
    fakeDatabase.todos = fakeDatabase.todos.filter(t => t.id !== id);
    return deletedTodo;
  });

export default {
  fetchTodos,
  fetchTodo,
  addTodo,
  updateTodo,
  deleteTodo
}
