<template>
  <div class="pdf">
    <div class="tools">
      <button @click="test(0)">放大</button>
      <button @click="test(1)">缩小</button>
    </div>
    <div class="pdfBox">
      <div class="center">
        <div class="contor">
          <button icon="el-icon-plus" @click="addscale">放大</button>
          <button icon="el-icon-minus" @click="minus">缩小</button>
        </div>
        <canvas
          v-for="page in page_count"
          :id="'the-canvas' + page"
          :key="page"
        ></canvas>
      </div>
    </div>
  </div>
</template>
<script>
let PDFJS = require('pdfjs-dist');
PDFJS.workerSrc = require('pdfjs-dist/build/pdf.worker.min');
export default {
  components: {},
  data() {
    return {
      pdfUrl:
        'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf', // 这里是pdf文件地址，后台给的流文件请求地址也是可以的
      pdfDoc: null, // pdfjs 生成的对象
      pageNum: 1, //
      pageRendering: false,
      pageNumPending: null,
      scale: 1.2, // 放大倍数
      page_num: 0, // 当前页数
      page_count: 0, // 总页数
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      PDFJS.getDocument(this.pdfUrl).then((res) => {
        this.pdfDoc = res;
        this.page_count = this.pdfDoc.numPages;
        for (let i = 0; i < this.page_count; i++) {
          this.renderPage(i + 1);
        }
      });
    },
    renderPage(num) {
      this.pdfDoc.getPage(num).then((page) => {
        let canvas = document.getElementById('the-canvas' + num);
        var viewport = page.getViewport(this.scale);
        canvas.height = viewport.height;
        this.pdfWidth = canvas.width = viewport.width;
        const canvasContext = canvas.getContext('2d');
        var renderContext = {
          canvasContext,
          viewport: viewport,
        };
        page.render(renderContext);
      });
    },
    addscale() {
      if (this.scale <= 2) {
        this.scale += 0.1;
        this.renderPage(this.pageNum);
      }
    },
    minus() {
      if (this.scale >= 0.8) {
        this.scale -= 0.1;
        this.renderPage(this.pageNum);
      }
    },
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
