<template>
  <section class="home-section">
    <div class="section-heading">
      <h1>Travel & Nature Photographer</h1>
    </div>
    <article class="section-heading">
      <p style="margin: 2rem 0;">
        I sat high in the mountains and thought of all those ants that surrounded me.
        Remember my friends, we must not allow the bees to disappear.
      </p>
    </article>
    <article class="image-grids">
      <div class="image-section-card" v-for="image in getAllImages" :key="image.id">
        <div>
          <img height="300px" width="400px" :src="image.largeImageURL" :alt="image.type"/>
        </div>
        <div class="user-info-block flex-center">
          <div style="padding-right: 10px;">{{image.user}}</div>
          <img :src="image.userImageURL" :alt="image.type"/>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  methods: {
    ...mapActions(['getImages'])
  },
  computed: {
    getAllImages() {
      return this.$store.state.images
    }
  },
  async created () {
    await this.getImages()
  }
}
</script>
<style lang="sass" scoped>
.home-section
  margin: 2rem
  background: #fff
  height: 100%
  width: 100%
.section-heading
  text-align: center
  padding-top: 1.2rem
.image-grids
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-gap: 5px
.image-section-card
    background: #d2d1d0
    width: 400px
    height: 360px
    box-shadow: 2px 1px 3px #c3c2c2
    margin: 20px
    &:hover
      filter: brightness(0.4)
      transform: scale(1.03)
      overflow: hidden
    .user-info-block
      img
        height: 50px
        width: 50px
        border-radius: 50%
</style>
