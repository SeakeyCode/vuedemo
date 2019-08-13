<template>
  <div class="hello">
    <div id="minder-container"></div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      importData: [
        {
          data: { text: "新闻1", id: 2, priority1: 1 },
          children: [
            {
              data: { text: "新闻2", id: 3, priority1: 1 },
              children: [
                { data: { text: "新闻3", id: 4, priority1: 1 } },
                { data: { text: "网页4", id: 5, priority1: 1 } },
                { data: { text: "贴吧5", id: 6, priority1: 2 } },
                { data: { text: "知道6", id: 7, priority1: 3 } },
                { data: { text: "音乐7", id: 8, priority1: 4 } }
              ]
            },
            { data: { text: "网页8", id: 9, priority1: 1 } },
            { data: { text: "贴吧9", id: 10, priority1: 2 } },
            { data: { text: "知道11", id: 11, priority1: 3 } },
            { data: { text: "音乐12", id: 12, priority1: 4 } }
          ]
        },
        {
          data: { text: "新闻1", id: 2, priority1: 1 },
          children: [
            { data: { text: "贴吧9", id: 10, priority1: 2 } },
            { data: { text: "知道11", id: 11, priority1: 3 } },
            { data: { text: "音乐12", id: 12, priority1: 4 } }
          ]
        },
        {
          data: { text: "新闻1", id: 2, priority1: 1 },
          children: [
            {
              data: { text: "新闻2", id: 3, priority1: 1 },
              children: [
                { data: { text: "新闻3", id: 4, priority1: 1 } },
                { data: { text: "网页4", id: 5, priority1: 1 } },
                { data: { text: "贴吧5", id: 6, priority1: 2 } },
                { data: { text: "知道6", id: 7, priority1: 3 } },
                { data: { text: "音乐7", id: 8, priority1: 4 } }
              ]
            },
            { data: { text: "网页8", id: 9, priority1: 1 } },
            { data: { text: "贴吧9", id: 10, priority1: 2 } },
            { data: { text: "知道11", id: 11, priority1: 3 } },
            { data: { text: "音乐12", id: 12, priority1: 4 } }
          ]
        }
      ]
    };
  },
  mounted() {
    const getId = document.getElementById(`minder-container`);
    this._paper = new kity.Paper(getId)
    this._paper.setWidth(1000).setHeight(500);
    this._paper.shapeNode.setAttribute('transform', 'translate(0.5, 0.5)');
    this._rc = new kity.Group().setId('minder');
    // this.importNode(this._paper, this.importData)
    this._paper.addShape(this._rc);
    console.log(this._paper)
  },
  methods: {
    //  importNode(node, json) {
    //     var childrenTreeData = json.children || [];
    //     for (var i = 0; i < childrenTreeData.length; i++) {
    //         var childNode = this.createNode(null, node);
    //         this.importNode(childNode, childrenTreeData[i]);
    //     }
    //     return node;
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
