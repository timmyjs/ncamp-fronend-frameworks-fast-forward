<template>
    <div>
        <input @input="$emit('storeTodo', $event)" />
        <button @click="$emit('addTodo')">
            Add Todo
        </button>
        <ul>
            <TodoItem
                v-for="(todo, i) in todos"
                :todo="todo"
                :index="i"
                :key="i"
                @removeItem="$emit('removeTodo', todo)"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    name: 'TodoList',
    
    components: {
        TodoItem
    },

    props: {
        todos: Array
    },
}
</script>
