<template>
  <div>
    <section>
      <div class="flex-center about-section">
          <div>
        <div class="about-block left-block">
            <div style="padding: 50px;">
          <h1>
              Contact Info:
          </h1>
          <p>
            Praesent interdum congue mauris, et fringilla lacus pel vitae.<br>
            Quisque nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet risus.<br> 
            Quisque cursus risus id. fermentum, in auctor quam consectetur.<br>
            Address 10111 Santa Monica Boulevard, LA
          </p>
          <div style="align-items: flex-start;" class="flex-col-center">
                <b>Phone</b> +44 987 065 908
                <b>Email</b>info@example.com
                <b>Fax</b> +44 987 065 909
              </div>
        </div>
        </div>
        </div>
        <div class="about-block">
          <div style="margin: 2rem;">
            <form style="align-items: inherit;" class="flex-col-center">
                <input placeholder="Your Name" class="input-block" type="text" >
                <input placeholder="Your Email" class="input-block" type="text" >
                <input placeholder="Your Title" class="input-block" type="text" >
                <textarea placeholder="Your Message" class="input-block" cols="30" rows="10"></textarea>
                <button class="submit-btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <app-footer>
    </app-footer>
  </div>
</template>
<style lang="sass" scoped>
    .submit-btn
        background: black
        padding: 15px
        color: #fff
    .input-block
        background: #eee
        margin: 10px
        outline: none
        padding: 12px
    .about-section
        margin-top: 5%
    .about-block
        height: 70vh
        width: 30vw
    .left-block
        background: #eee
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

