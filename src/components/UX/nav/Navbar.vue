<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/vue">Vue</router-link>
        <router-link to="/inertia">Inertia</router-link>
        <router-link to="/tailwind">Tailwind</router-link>
        <router-link to="/axios">Axios</router-link>
        <router-link to="/laravel">Laravel</router-link>
        <router-link to="/mysql">MySql</router-link>
    </nav>
</template>

<script>
export default {}
</script>

<style scoped>
a {
    @apply px-3 py-2 text-gray-300 font-semibold border-2 border-gray-300 border-solid rounded;
}
a:hover {
    @apply text-gray-400 border-green-300;
}
</style>