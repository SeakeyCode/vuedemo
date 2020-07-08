<template>
    <div ref="list" class="infinite-list-container" @scroll="scrollEvent($event)">
        <div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }"></div>
        <div class="infinite-list" :style="{ transform: getTransform }">
        <!-- <div
            class="view-overlays"
            v-for="(item, index) in visibleData"
            :key="index"
        >
            &nbsp;
        </div> -->
        <div class="input-box" @mouseup="onmouseup" contenteditable>
            <div ref="items"
                class="infinite-list-item"
                :class="`item-${item.id}`"
                v-for="(item, index) in visibleData"
                :key="index"
                :data-id="item.id"
                :style="{ height: itemSize + 'px',lineHeight: itemSize + 'px' }">
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
      itemSize: 40,
      listData: [],
      startNode: {},
      endNode: {}
    }
  },
  computed:{
    //列表总高度
    listHeight(){
      return this.listData.length * this.itemSize;
    },
    //可显示的列表项数
    visibleCount(){
      return Math.ceil(this.screenHeight / this.itemSize)
    },
    //偏移量对应的style
    getTransform(){
      return `translate3d(0,${this.startOffset}px,0)`;
    },
    //获取真实显示列表数据
    visibleData(){
      return this.listData.slice(this.start, Math.min(this.end,this.listData.length))
    }
  },
  mounted () {
    // eslint-disable-next-line no-irregular-whitespace
    for(let i = 0; i < 200; i++) {
        this.listData.push({ id: uuidv4(), value: `${i}为了拥护单一责任和开放/封闭的原则，我们尝试使标记的扩展相对轻松。`, selectNode: false })
    }
    this.screenHeight = parseInt(this.$el.scrollHeight);
    this.start = 0;
    this.end = this.start + this.visibleCount;
  },
  methods: {
    onmouseup () {
        const range = window.getSelection().getRangeAt(0)
        this.startNode = {
            node: range.startContainer,
            offset: range.startOffset,
            id: range.startContainer.parentNode.dataset.id
        };
        this.endNode = {
            node: range.endContainer,
            offset: range.endOffset,
            id: range.endContainer.parentNode.dataset.id
        };
        console.log(this.startNode, this.endNode)
    },
    scrollEvent() {
      //当前滚动位置
      let scrollTop = this.$refs.list.scrollTop;
      //此时的开始索引
      this.start = Math.floor(scrollTop / this.itemSize);
      //此时的结束索引
      this.end = this.start + this.visibleCount;
      //此时的偏移量
      this.startOffset = scrollTop - (scrollTop % this.itemSize);
      this.$nextTick(() => {
        this.startNode.node = document.querySelector(`.item-${this.startNode.id}`)
        this.endNode.node = document.querySelector(`.item-${this.endNode.id}`)
        console.log(this.startNode.node, this.startNode.node)
        this.setSelcteRange(this.startNode.node, this.endNode.node, this.startNode.offset, this.endNode.offset)
      })
    },
    setSelcteRange (statrNode, endNode, startPos, endPos) {
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
