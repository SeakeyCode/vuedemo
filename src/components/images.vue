<template>
  <div class="images">
    <div>images</div>
    <div class="images-box">
        <Picview :imgdata="imgdata1" width="100px;" />
    </div>
  </div>
</template>

<script>
import Picview from './Picview';
export default {
  name: 'images',
  data() {
    return {
        imgdata1: 'https://www.gravatar.com/avatar/40206d98ff6e85da457c341e4a4ea437'
    }
  },
   components:{
     Picview
  },
  methods: {},
}
</script>

<style scoped>
.images-box {
    width: 600px;
    height: 600px;
    overflow: hidden;
    border: 1px solid red;
    position: relative;
}
</style>
