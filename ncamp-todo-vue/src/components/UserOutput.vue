<template>
    <p>Hello, {{ username }}</p>
</template>

<script>
export default {
    name: 'UserOutput',
    
    props: {
        username: String
    }   
}
</script>
