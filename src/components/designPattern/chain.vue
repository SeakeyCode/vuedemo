<template>
  <div class="hello">
    <div id="example1" class="list-group col">
      <div draggable 
      @dragstart="dragStart($event, item, index)" 
      @dragover="allowDrop" 
      @drop="drop($event, index)" 
      class="list-group-item" 
      :class="{'list-group-item1': index === endIndex}"
      v-for="(item, index) in list" :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'transition-example-2',
  data() {
    return {
      list: [
        '1FLIP是一种记忆设备和技术，最早是由@Paul Lewis提出的，FLIP是First、Last、Invert和Play四个单词首字母的缩写。这里简单的陈述一下',
        '2FLIP是一种记忆设备和技术，最早是由@Paul Lewis提出的，FLIP是First、Last、Invert和Play四个单词首字母的缩写。这里简单的陈述一下',
        '3FLIP是一种记忆设备和技术，最早是由@Paul Lewis提出的，FLIP是First、Last、Invert和Play四个单词首字母的缩写。这里简单的陈述一下',
        '4FLIP是一种记忆设备和技术，最早是由@Paul Lewis提出的，FLIP是First、Last、Invert和Play四个单词首字母的缩写。这里简单的陈述一下'
      ],
      startIndex: '',
      startItem: '',
      endIndex: ''
    };
  },
  methods: {
    allowDrop(e){
      e.preventDefault();
    },
    dragStart (e, item, index) {
     this.startIndex = index
     this.startItem = item
      this.endIndex = null

    },
    drop (e, index) {
      this.allowDrop(e);
      this.endIndex = index
      let allList = this.list
      allList.splice(this.startIndex, 1)
      allList.splice(index, 0, this.startItem)
      this.list = allList
    }
  },
  mounted() {
    // var el = document.getElementById('items');

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .blue-background-class {
    background-color: #C8EBFB;
  }
  .list-group-item1{
    color: #fff;
    background-color: green !important;
    transform: height 0.3s;
    animation: mymove 0.3s;
  }
  @keyframes mymove {
    from {height: 0;}
    to {height: 122px}
  }

  .list-item {
    position: relative;
    /* display: block; */
    margin-bottom: -1px;
    background-color: #fff;
    overflow: hidden;
    border: 1px solid rgba(0,0,0,.125);
  }
  .list-group {
    justify-content: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
}
  .list-group-item{
    position: relative;
    display: block;
    height: 122px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 6px;
    width: 245px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid red;
    transition: height 1s ease-out;
    margin-bottom: 10px
  }
</style>
