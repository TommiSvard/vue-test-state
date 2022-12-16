<template>
  <div style="display: flex; width: 100%; justify-content: center;">
    <h2>Todo-list</h2>
    <v-icon name="hi-plus" fill="blue" @click="toggleInput()" />
  </div>
  <div v-if="showInput">
    <input type="text" name="todo-input" id="todo-input" v-model="newTodo">
    <button @click="addTodo(newTodo)">Add</button>
  </div>
  <div v-for="todo in $store.state.todos" :key="todo.id">
    <div>
      <input type="checkbox" id="todo-item" v-model="todo.done" @change="updateTodo(todo)" />
      <label for="todo-item">{{ todo.title }}</label>
      <v-icon name="bi-trash2" fill="red" style="margin: 0px 10px;" @click="deleteTodo(todo)" />
    </div>
  </div>
</template>
<script lang="ts">
import { Todo } from '@/models/todo.model';
import { useStore } from 'vuex';
import { defineComponent } from "vue";

export default defineComponent({
  data() {

    return {
      showInput: false,
      newTodo: ''
    }
  },
  methods: {
    toggleInput() {
      this.showInput = !this.showInput;
    },
  },
  setup() {
    const store = useStore()

    return {
      addTodo: (payload: string) => {
        let maxId: number = Math.max(...store.state.todos.map((el: Todo) => el.id));
        let newTodo: Todo = {
          id: maxId + 1,
          title: payload,
          done: false,
          timestamp: new Date()
        }

        store.dispatch('addTodo', newTodo);
      },
      updateTodo: (payload: Todo) => store.dispatch('updateTodo', payload),
      deleteTodo: (payload: Todo) => {
        let confirmDelete = confirm("Sure you want to delete todo ?");
        if (confirmDelete) {
          store.dispatch('deleteTodo', payload)
        }
      }
    }
  }
});
</script>