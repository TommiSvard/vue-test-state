import { Todo } from '@/models/todo.model';
import { createStore } from 'vuex'

const ADD_TODO = 'Add Todo';
const UPDATE_TODO = 'Update Todo';
const DELETE_TODO = 'Delete Todo';

const todosList: Todo[] = [
  { id: 1, title: 'My Todo', done: false },
  { id: 2, title: 'Other Todo', done: false },
  { id: 3, title: 'Third Todo', done: true }
];
export default createStore({
  state: {
    todos: todosList
  },
  getters: {
    todos(state) {
      return state.todos
    }
  },
  mutations: {
    [ADD_TODO] (state, todo: Todo) {
      console.log(`Added ${todo.title} to list`);
      const todosCopy = [...state.todos, todo];
      state.todos = todosCopy;
    },
    [UPDATE_TODO] (state, todo: Todo) {
      console.log(`Update ${todo.title}`);
      const todosCopy = [...state.todos];
      let currentTodo = todosCopy.find(t => t.id === todo.id);
      currentTodo = todo;
    },
    [DELETE_TODO] (state, todo: Todo) {
      console.log(`Deleted ${todo.title} from list`);
      const todosCopy = [...state.todos];
      const currentTodoIdx = todosCopy.findIndex(t => t.id === todo.id);
      todosCopy.splice(currentTodoIdx, 1);
      state.todos = todosCopy;
    }
  },
  actions: {
    addTodo({ commit }, todo: Todo) {
      commit(ADD_TODO, todo)
    },
    updateTodo({ commit }, todo: Todo) {
      commit(UPDATE_TODO, todo)
    },
    deleteTodo({ commit }, todo: Todo) {
      commit(DELETE_TODO, todo)
    }
  },
  modules: {
  }
})
