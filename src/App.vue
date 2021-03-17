<template>
  <div>
   <app-bar>
   </app-bar>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import AppBar from './components/AppBar'

export default {
  name: 'App',
  components: {
    AppBar
  },
  data: () => ({
    //
  })
}
</script>
<style lang="sass">
*
  font-family: monospace

.flex-center
  display: flex
  align-items: center
  justify-content: center
.flex-col-center
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
</style>
