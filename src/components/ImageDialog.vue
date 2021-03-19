<template>
    <div class="backdrop" @click="showModal(false)">
        <article class="image-dialog">
            <div 
            @click="showModal(false)">
                <div>
                    <img
                    class="photo" 
                        :src="singleImageData.largeImageURL" :alt="singleImageData.type"/>
                </div>
                <div class="flex-center">
                    <div class="tag" style="padding-right: 10px;">
                        {{ singleImageData.user }}
                    </div>
                    <div>
                        <img class="user" :src="singleImageData.userImageURL" :alt="singleImageData.user">
                    </div>
                </div>
                <div class="flex-center">
                    <div>Tags:</div>
                    <div class="flex-center" v-for="(tag, index) in getTags" :key="index">
                        <p class="tag">{{ `#${tag}` }}</p>
                    </div>
                </div>
                <div style="margin-top: 12px;" class="flex-center">
                    <div>
                        <span>Likes:</span><span class="tag">{{ singleImageData.likes }}</span>
                    </div>
                    <div>
                        <span>Views:</span><span class="tag">{{ singleImageData.views }}</span>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'ImageDialog',
  computed: {
    ...mapState(['singleImageData']),
    getTags() {
      return this.singleImageData.tags.split(',')
    }
  },
  methods: {
    ...mapMutations(['showModal'])
  }
}
</script>
<style lang="sass" scoped>
.backdrop
    height: 100%
    position: fixed
    background: #00000073
    width: 100%
    top: 0%
    left: 0%
    z-index: 11
.image-dialog
    height: 670px
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    background: #fff
    
.photo
    width: 800px
    height: 530px

.user
    height: 50px
    width: 50px
    border-radius: 50%
.tag
    background: #435982fc
    color: white
    padding: 5px
    margin-right: 5px
    border-radius: 10px
</style>
