<template>
  <div class="markdown">
    <div id="edit-div" contenteditable="true"></div>
  </div>
</template>

<script>
export default {
  name: 'markdown',
  data () {
      return {

      }
  },
  mounted () {
      this.init()
  },
  methods: {
    init () {
        // http://www.chinaw3c.org/
        // https://w3c.github.io/editing/#specifications
        // https://w3c.github.io/selection-api/#widl-Selection-addRange-void-Range-range
        // https://developer.mozilla.org/zh-CN/docs/Web/API/Selection
        // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getSelection
        const selection = window.getSelection()
        console.log(selection)
    } 
  }
}
</script>

<style lang="scss" scoped>
.markdown {
    #edit-div {
        width: 620px;
        height: 310px;
        margin: 50px;
        border: 1px solid DarkOrchid;
        outline: none;
        padding: 10px;
    }
}
</style>