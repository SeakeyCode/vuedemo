<template>
  <div class="editor">
    <div ref="list" class="infinite-list-container" @scroll="scrollEvent($event)">
    <div :style="{ height: listData.length * itemSize + 'px' }">
      <div :style="{top: `${startOffset}px`, position: 'relative'}">
        <div contenteditable >
          <p
            class="infinite-list-item"
            v-for="(item, index) in visibleData"
            :key="index"
            :style="{ lineHeight: itemSize + 'px' }"
          >
            {{ item.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'editing-虚拟列表',
  data() {
    return {
      screenHeight: 500,
      startOffset: 0,
      start: 0,
      end: 0,
      itemSize: 30,
      visibleCount: Math.ceil(500 / 30),
      listData: []
    }
  },
  computed: {
    visibleData() {
      return this.listData.slice(this.start, this.end)
    },
  },
  mounted() {
    for (let i = 0; i < 200; i++) {
      this.listData.push({
        id: uuidv4(),
        value: `${i}为了拥护单一责任和开放/封闭的原则`,
        selectNode: false,
      })
    }
    this.end = this.start + this.visibleCount
  },
  methods: {
    scrollEvent() {
      let scrollTop = this.$refs.list.scrollTop
      this.start = Math.floor(scrollTop / this.itemSize)
      this.end = this.start + this.visibleCount
      this.startOffset = scrollTop - (scrollTop % this.itemSize)
    }
  },
}
</script>

<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .infinite-list-container {
    border: 1px solid red;
    height: 500px;
    width: 500px;
    overflow-y: auto;
    .infinite-list-item {
      color: #555;
      box-sizing: border-box;
    }
  }
}
</style>
