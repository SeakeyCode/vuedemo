<template>
    <div ref="list" class="infinite-list-container" @scroll="scrollEvent($event)">
        <div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }"></div>
        <div class="infinite-list" :style="{ transform: getTransform }">
        <div class="input-box" @mouseup="onmouseup" contenteditable>
            <div ref="items"
                class="infinite-list-item"
                :class="`item-${item.id}`"
                v-for="(item, index) in visibleData"
                :key="index"
                :data-id="item.id"
                :style="{ lineHeight: itemSize + 'px' }">
                {{ item.value }}
            </div>
        </div>
        </div>
    </div>
  
</template>
<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'editing',
  data() {
    return {
      content: [],
      screenHeight:0,
      startOffset:0,
      start: 0,
      end: null,
      itemSize: 26,
      listData: [],
      startContainer: null,
      startOffsets: null,
      endContainer: null,
      endOffset: null
    }
  },
  computed:{
    listHeight(){
      return this.listData.length * this.itemSize;
    },
    visibleCount(){
      return Math.ceil(this.screenHeight / this.itemSize)
    },
    getTransform(){
      return `translate3d(0,${this.startOffset}px,0)`;
    },
    visibleData(){
      return this.listData.slice(this.start, Math.min(this.end,this.listData.length))
    }
  },
  mounted () {
    // eslint-disable-next-line no-irregular-whitespace
    for(let i = 0; i < 200; i++) {
        this.listData.push({ id: uuidv4(), value: `${i}为了拥护单一责任和开放/封闭的原则`, selectNode: false })
    }
    this.screenHeight = parseInt(this.$el.scrollHeight);
    this.start = 0;
    this.end = this.start + this.visibleCount;
  },
  methods: {
    onmouseup () {
        const range = window.getSelection().getRangeAt(0)
        this.startContainer = range.startContainer
        this.startOffset = range.startOffset
        this.endContainer = range.endContainer
        this.endOffset = range.endOffset
    },
    scrollEvent() {
      let scrollTop = this.$refs.list.scrollTop;
      this.start = Math.floor(scrollTop / this.itemSize);
      this.end = this.start + this.visibleCount;
      this.startOffset = scrollTop - (scrollTop % this.itemSize);
      if(!this.startContainer) return
      this.$nextTick(() => {
        this.setSelcteRange(this.startContainer, this.endContainer, this.startOffsets, this.endOffset)
      })
      // console.dir(document.querySelector('.input-box').setSelectionRange(0, 100))
      // const o = document.querySelector('#t')
      // o.setSelectionRange(0, 10)
      // o.focus()
    },
    setSelcteRange (statrNode, endNode, startPos, endPos) {
      console.log(statrNode, endNode)
      let selection = window.getSelection()
      let range = document.createRange()
      range.setStart(statrNode, startPos)
      range.setEnd(endNode, endPos)
      selection.removeAllRanges()
      selection.addRange(range)
    }
  }
}
</script>

<style scoped>
.infinite-list-container {
  height: 100vh;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.input-box {
    padding: 20px;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: left;
}

.infinite-list-item {
  color: #555;
  box-sizing: border-box;
}
</style>
