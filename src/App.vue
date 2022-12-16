<template>
  <to-do-item></to-do-item>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ToDoItem from './components/ToDoItem.vue';

@Options({
  name: 'Todo',
  components: {
    ToDoItem
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
