<template>
  <div class="banner">
    <div class="header"></div>
     <button class="btn" v-on:click="show = !show">
        Toggle
    </button>
    <!-- <div class="banner-box">
        <div class="img">
            <transition name="fade">
                <img v-show="show" src="@/images/mac.png" alt="">
            </transition>
            <transition name="fade">
                <img v-show="!show" src="@/images/Surface_w.png" alt="">
            </transition>
        </div>
    </div> -->
    <img class="anim_fade_image" v-show="show" src="@/images/mac.png" alt="">
    <img class="anim_fade_image" v-show="!show" src="@/images/Surface_w.png" alt="">
  </div>
</template>

<script>
// typical import

// or get other plugins:
export default {
  name: 'banner',
  data() {
    return {
        show: true
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.btn {
    position: fixed;
    top: 0;
    left: 0;
}
.banner {
    width: 100%;
    height: 80vh;
    .header {
        height: 30px;
        background: red;
        width: 100%;
    }
    .banner-box {
        display: flex;
        justify-content: center;
        align-items: center;
        .img {
            max-width: 1211px;
            max-height: 700px;
            min-width: 600px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
