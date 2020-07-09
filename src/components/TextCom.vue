<template>
  <div class="textcom">
    <div id="scrollArea" class="clusterize-scroll">
      <div id="contentArea" class="clusterize-content">
        <div>First row</div>
        <div>Second row</div>
        <div>…</div>
      </div>
    </div> 
  </div>
</template>

<script>
import Clusterize from 'clusterize.js'
export default {
  name: 'home',
  data() {
    return {
    }
  },
  mounted () {
    var clusterize = new Clusterize({
      scrollId: 'scrollArea',
      contentId: 'contentArea'
    })
    console.log(clusterize)
  },
  props:{
    data: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.textcom {
  padding-left: 20px;
  width: 100%;
}
</style>
