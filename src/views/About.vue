<template>
  <div>
    <section>
      <div class="flex-center about-section">
        <div class="about-block left-block">
          <img src="../assets/v.jpeg" alt="v for vendetta" srcset="">
        </div>
        <div class="about-block">
          <div style="margin: 2rem;">
            <h1>{{ $t('self.intro') }}</h1>
            <p>
              {{ $t('self.about') }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <app-footer>
    </app-footer>
  </div>
</template>
<style lang="sass" scoped>
  .about-section
    margin-top: 5%
  .about-block
    height: 70vh
    width: 30vw
  .left-block
    background: #eee
    img
      height: 70vh
      width: 30vw
</style>
<script>
import Footer from '../components/Footer'

export default {
  name: 'About',
  components: {
    AppFooter: Footer
  }
}
</script>
