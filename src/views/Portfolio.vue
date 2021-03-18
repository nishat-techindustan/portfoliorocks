<template>
  <section class="home-section">
    <div class="section-heading">
      <h1>My Portfolio</h1>
    </div>
    <article class="section-heading">
      <p style="margin: 2rem 0;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
        Ipsum veniam atque quas eligendi officiis nemo at praesentium molestiae,<br> 
        veritatis doloremque delectus nostrum provident temporibus<br> 
        aliquid autem ipsam ducimus magnam porro.
      </p>
    </article>
    <article class="image-grids">
      <div class="image-section-card" v-for="video in getAllVideos" :key="video.id">
        <div>
          <video width="400px" height="224px" controls>
          <source :src="video.videos.large.url" type="video/mp4">
          Your browser does not support the video tag.
          </video>
        </div>
        <div class="user-info-block flex-center">
          <div style="padding-right: 10px;">{{video.user}}</div>
          <img :src="video.userImageURL" :alt="video.type"/>
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
    ...mapActions(['getVideos'])
  },
  computed: {
    getAllVideos() {
      return this.$store.state.videos
    }
  },
  async created () {
    await this.getVideos()
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
    height: 284px
    margin: 20px
    .user-info-block
      img
        height: 50px
        width: 50px
        border-radius: 50%
</style>
