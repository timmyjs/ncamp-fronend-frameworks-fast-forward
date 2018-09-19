<template>
    <div>
        <p>Input your name:</p>
        <input :value="username" @input="$emit('updateUsername', $event)" />
        <button @click="$emit('saveUsername', $event)">Save name</button>
    </div>
</template>

<script>
export default {
    name: 'UserInput',
    
    props: {
        username: String
    }   
}
</script>
