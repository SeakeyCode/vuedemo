<template>
<div class="content">
  <div v-html="content"></div>
</div>
</template>

<script>
import marked from 'marked'
export default {
name: "marked.vue",
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    const renderer = {
      heading(text, level) {
        const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
        console.log(escapedText)
        return `
            <h${level}>
              <a name="${escapedText}" class="anchor" href="#${escapedText}">
                <span class="header-link"></span>
              </a>
              ${text}
            </h${level}>`;
      }
    };

    marked.use({ renderer })
  this.content = marked(`# 标题`)
  // console.log(this.content)
  }
}
</script>

<style scoped>
.content {
  padding: 20px;
}
</style>
