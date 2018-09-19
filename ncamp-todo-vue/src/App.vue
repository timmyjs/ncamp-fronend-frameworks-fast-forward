<template>
  <div id="app">

    <template v-if="!usernameEntered">
      <UserInput
        :username="username"
        @updateUsername="username = $event.target.value"
        @saveUsername="usernameEntered = true"
      />
    </template>

    <template v-else>
      <UserOutput
        :username="username"
      />
      <TodoList
        :todos="todos"
        @storeTodo="todo = $event.target.value"
        @addTodo="todos.push(todo)"
        @removeTodo="todos.splice(todos.indexOf($event), 1);"
      />
    </template>

  </div>
</template>

<script>
import UserInput from './components/UserInput.vue';
import UserOutput from './components/UserOutput.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'app',

  components: {
    UserInput,
    UserOutput,
    TodoList
  },

  data() {
    return {
      username: 'Thomas',

      usernameEntered: false,

      todo: '',

      todos: ['Do good things', 'Talk about it'],
    }
  },
}
</script>

<style>
#app {
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 2px 2px 2px gray;
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 60px auto;
  padding-bottom: 10px;
  text-align: center;
  width: 400px;
}
</style>
