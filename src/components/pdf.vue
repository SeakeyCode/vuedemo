<template>
  <div class="pdf">
    <div class="tools">
      <button @click="test(0)">放大</button>
      <button @click="test(1)">缩小</button>
    </div>
    <div class="demo-image__lazy">
      <el-image v-for="url in content" :key="url" :src="url" lazy></el-image>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  components: {},
  data() {
    return {
      scale: 1,
      content: '',
      testUrl:
        '/pdf/onlinePreview?url=http%3A%2F%2F47.101.203.116%3A8100%2Fwaterfall%2F497e15a8-4b6c-4b0c-aefe-355b3b121c4f.pdf%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3Dminioadmin%252F20200804%252Fus-east-1%252Fs3%252Faws4_request%26X-Amz-Date%3D20200804T085031Z%26X-Amz-Expires%3D604800%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3Db0f521e764b5879e38c682f97646dc89398982416e70d10c4c2e31e0b0033232',
    };
  },
  mounted() {
    axios.get(this.testUrl).then((res) => {
      this.content = res.data.match(/(?<=data-src=").*?(.jpg)/g);
      console.log(this.content);
    });
  },
  methods: {
    test() {
      // const ele = document.querySelector('#images');
      // const box = ele.getBoundingClientRect();
      // // const x1 = box.left + box.width / 2;
      // const y1 = box.top;
      // if (num === 0) {
      //   this.scale += 0.1;
      // } else if (num === 1) {
      //   this.scale -= 0.1;
      // }
      // ele.style.transform = `scale(${this.scale}) translateY(${y1 *
      //   this.scale *
      //   0.1}px)`;
    },
  },
};
</script>
<style lang="scss" scoped>
.pdf {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  #images {
    width: 600px;
    border: 1px solid red;
    img {
      width: 100%;
    }
  }
  .tools {
    position: fixed;
    right: 0px;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    button {
      margin-bottom: 10px;
    }
  }
}
</style>
