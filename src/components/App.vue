<template>
    <nav-bar></nav-bar>
    <div class="main-content">
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from './Navbar.vue'

    export default{
        components: {
            'nav-bar': Navbar
        }
    }
</script>
