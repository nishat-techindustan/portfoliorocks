<template>
    <ul class="navbar">
        <li><router-link class="navlink" to="/" exact>{{ $t('nav.home') }}</router-link></li>
        <li><router-link class="navlink" to="/about" exact>{{ $t('nav.about') }}</router-link></li>
        <li><router-link class="navlink" to="/portfolio" exact>{{ $t('nav.portfolio') }} </router-link></li>
        <li><router-link  class="navlink" to="/contact" exact>{{ $t('nav.contact') }}</router-link></li>
        <li class="flex-center">
            <input type="radio" id="one" value="en" v-model="lang">
            <label class="label" for="one">English</label>
            <br>
            <input type="radio" id="two" value="ja" v-model="lang">
            <label class="label" for="two">日本</label>
            <br>
        </li>
    </ul>
</template>
<script>
export default {
  name: 'AppBar',
  data() {
      return {
          lang: ''
      }
  },
  beforeUpdate() {
      this.$i18n.locale = this.lang
  }
}
</script>
<style lang="sass" scoped>
.label
    font-size: 1rem
    margin: 12px
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
