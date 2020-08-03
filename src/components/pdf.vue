<template>
  <div class="pdf">
    <div class="tools">
      <button @click="test(0)">放大</button>
      <button @click="test(1)">缩小</button>
    </div>
    <div class="pdfBox">
      <pdf :src="src" class="myPdf"></pdf>
      <!-- <pdf
        v-for="i in numPages"
        :key="i"
        :src="src"
        :page="i"
        class="myPdf"
      ></pdf> -->
    </div>
  </div>
</template>
<script>
import pdf from 'vue-pdf';
var loadingTask = pdf.createLoadingTask(
  'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'
);
export default {
  components: {
    pdf,
  },
  data() {
    return {
      src: loadingTask,
      numPages: undefined,
      scale: 1,
    };
  },
  mounted() {
    this.src.promise.then((pdf) => {
      this.numPages = pdf.numPages;
      console.dir(document.querySelector('.pdfBox'));
    });
  },
  methods: {
    test(num) {
      const ele = document.querySelector('.pdfBox');
      const box = ele.getBoundingClientRect();
      console.log(box);
      // this.height = box.height * this.scale
      // const x = box.left + box.width / 2;
      // const y = box.top + box.height / 2;
      if (num === 0) {
        this.scale += 0.1;
      } else if (num === 1) {
        this.scale -= 0.1;
      }
      console.log(box.height * this.scale, box.height);
      document.querySelector('.pdfBox').style.transform = `scale(${
        this.scale
      }) translateY(${box.height * this.scale - box.height}px)`;
    },
  },
};
</script>
<style lang="scss" scoped>
.pdf {
  display: flex;
  justify-content: center;
  // align-items: center;
  position: relative;
  width: 100%;
  .pdfBox {
    width: 600px;
    transition: all 0.3s ease-in-out;
    border: 1px solid red;
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
