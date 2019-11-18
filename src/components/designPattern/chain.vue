<template>
  <div class="hello">
    <div id="example1" class="list-group col">
      <div draggable 
      @dragstart="dragStart($event, index)" 
      @dragover="allowDrop" 
      @drop="drop($event, index)" 
      :class="`list-group-item list-group-item-${index}`" 
      v-for="(item, index) in list" :key="index">{{item}}</div>
    </div>
    <div class="list-item">456465456465</div>
  </div>
</template>

<script>
export default {
  name: 'transition-example-2',
  data() {
    return {
      list: [1,2,3,4,5],
      startIndex: ''
    };
  },
  methods: {
    allowDrop(e){
      e.preventDefault();
    },
    dragStart (e, index) {
     this.startIndex = index
    },
    drop (e, index) {
      this.allowDrop(e);
      let eleClass = document.querySelector(`.list-group-item-${this.startIndex}`)
      let targetEleClass = document.querySelector(`.list-group-item-${index}`)
      let targetEleClassItem = document.querySelector('.list-item')
      eleClass.style.height = 0  + 'px'
      window.requestAnimationFrame(() => {
        targetEleClassItem.style.height = 44  + 'px'
        targetEleClass.before(targetEleClassItem)
      })
      console.log(index)
      console.dir(eleClass)
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
  .list-item {
    height: 0;
    position: relative;
    /* display: block; */
    margin-bottom: -1px;
    background-color: #fff;
    overflow: hidden;
    border: 1px solid rgba(0,0,0,.125);
    transition: height 1s ease-out;
  }
  .list-group {
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
    height: 44px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    transition: height 1s ease-out;
  }
</style>
