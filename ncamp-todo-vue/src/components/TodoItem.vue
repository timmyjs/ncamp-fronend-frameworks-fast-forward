<template>
    <li @click="$emit('removeItem')">
        <p>{{ todo }}</p>
    </li>
</template>

<script>
export default {
    name: 'TodoItem',
    
    props: {
        todo: String
    }   
}
</script>

<style scoped>
    li {
        cursor: pointer;
        text-align: left;
    }
</style>
