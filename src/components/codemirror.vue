<template>
  <div class="codemirror">
    <textarea id="code" name="code"></textarea>
  </div>
</template>

<script>
import CodeMirror from 'codemirror'
export default {
  name: 'codemirror',
  data() {
    return {
    }
  },
  mounted() {
    console.log(CodeMirror)
    CodeMirror.fromTextArea(document.getElementById("code"), {
      mode: "application/xml",
      styleActiveLine: true,
      lineNumbers: true,
      lineWrapping: true
    })
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>

</style>
