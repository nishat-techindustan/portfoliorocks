<template>
    <ul class="navbar">
        <li><router-link class="navlink" to="/" exact>Home</router-link></li>
        <li><router-link class="navlink" to="/about" exact>About</router-link></li>
        <li><router-link class="navlink" to="/portfolio" exact>Portfolio </router-link></li>
        <li><router-link  class="navlink" to="/contact" exact>Contact </router-link></li>
    </ul>
</template>
<script>
export default {
  name: 'AppBar'
}
</script>
<style lang="sass" scoped>
.navbar
    list-style-type: none
    display: flex
    align-items: center
    justify-content: flex-end
    background: #fff
    margin-top: 2rem
    li
        padding: 12px
        font-size: 1.5rem
        margin-right: 10px
        .navlink
            text-decoration: none
            color: black
            font-family: monospace
            padding: 12px
            &:hover
                background-color: #00796b2e
                color: #00796b
                cursor: pointer
        .router-link-active
            background-color: #00796b2e
            color: #00796b
            cursor: pointer
</style>
