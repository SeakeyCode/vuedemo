<template>
  <div class="textcom">
    <div class="clusterize">
      <table>
        <thead>
          <tr>
            <th>Headers</th>
          </tr>
        </thead>
      </table>
      <div id="scrollArea" class="clusterize-scroll">
        <table>
          <tbody id="contentArea" class="clusterize-content">
            <tr class="clusterize-no-data">
              <td>Loading data…</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Clusterize from 'clusterize.js'
export default {
  name: 'textcom-测试',
  data() {
    return {}
  },
  mounted() {
    var clusterize = new Clusterize({
      scrollId: 'scrollArea',
      contentId: 'contentArea',
    })
    console.log(clusterize)
  },
  props: {
    data: {
      type: String,
      default: '',
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.textcom {
  padding-left: 20px;
  width: 100%;
}
</style>
