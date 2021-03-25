<template>
  <div class="home">
      <div ref="list" class="editor-container" @scroll="scrollEvent()">
        <div :style="{ height: list.length * itemSize + 'px' }">
            <div :style="{top: `${startOffset}px`, position: 'relative'}">
                <div
                    class="editor"
                    @dragstart.prevent
                    contenteditable="true"
                    @input="handleInput"
                >
                    <div class="editor-node" :style="{ lineHeight: itemSize + 'px' }" :data-line-number="item.index" v-for="(item, index) in visibleData" :key="index">
                        <h1 class="title" v-if="item.type === 'title'">
                            <div class="title-str" :data-title-typeStr="item.typeStr">
                                <span>{{item.content}}</span>
                            </div>
                        </h1>
                        <div class="text" v-if="item.type === 'text'">
                            <span>{{item.content}}</span>
                        </div>
                        <p class="hr" v-if="item.type === 'hr'">
                            <span class="hr-con">
                                <hr>
                            </span>
                        </p>
                        <ol class="order" v-if="item.type === 'order'">
                        <li :data-typeStr="item.typeStr">
                            <span>{{item.content}}</span>
                            </li> 
                        </ol>
                        <ul class="unorder" v-if="item.type === 'unorder'">
                            <li @click="handleToggle(item)" :data-unorder-str="item.typeStr">
                                <span>{{item.content}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      screenHeight: 600,
      startOffset: 0,
      start: 0,
      end: 0,
      itemSize: 30,
      visibleCount: Math.ceil(600 / 30),
      list: [
        {  type: 'title', typeStr: '#', content: '标题' },
        {  type: 'order', typeStr: '1.', content: '1' },
        {  type: 'order', typeStr: '2.',  content: '2' },
        {  type: 'order', typeStr: '3.', content: '3' },
        {  type: 'hr', typeStr: 'hr', content: '&nbsp;' },
        {  type: 'unorder', typeStr: '\u2022', content: '4' },
        {  type: 'unorder', typeStr: '\u2022',  content: '5' },
        {  type: 'unorder',  typeStr: '\u2022', content: '6' },
        {  type: 'text',  typeStr: 'text',  content: 'text1' },
        {  type: 'text',  typeStr: 'text',  content: 'text2'  },
        {  type: 'title', typeStr: '#', content: '标题' },
        {  type: 'order', typeStr: '1.', content: '1' },
        {  type: 'order', typeStr: '2.',  content: '2' },
        {  type: 'order', typeStr: '3.', content: '3' },
        {  type: 'hr', typeStr: 'hr', content: '&nbsp;' },
        {  type: 'unorder', typeStr: '\u2022', content: '4' },
        {  type: 'unorder', typeStr: '\u2022',  content: '5' },
        {  type: 'unorder',  typeStr: '\u2022', content: '6' },
        {  type: 'text',  typeStr: 'text',  content: 'text1' },
        {  type: 'text',  typeStr: 'text',  content: 'text2'  },
        {  type: 'title', typeStr: '#', content: '标题' },
        {  type: 'order', typeStr: '1.', content: '1' },
        {  type: 'order', typeStr: '2.',  content: '2' },
        {  type: 'order', typeStr: '3.', content: '3' },
        {  type: 'hr', typeStr: 'hr', content: '&nbsp;' },
        {  type: 'unorder', typeStr: '\u2022', content: '4' },
        {  type: 'unorder', typeStr: '\u2022',  content: '5' },
        {  type: 'unorder',  typeStr: '\u2022', content: '6' },
        {  type: 'text',  typeStr: 'text',  content: 'text1' },
        {  type: 'text',  typeStr: 'text',  content: 'text2'  }
      ],
    };
  },
  computed: {
    visibleData() {
        return this.list.slice(this.start, this.end)
    },
  },
  mounted() {
    document.addEventListener('selectionchange', this.handleSelectionChange)
    this.list.forEach((item, index) => item.index = index + 1)
    this.end = this.start + this.visibleCount
  },
  methods: {
       scrollEvent() {
        let scrollTop = this.$refs.list.scrollTop
        this.start = Math.floor(scrollTop / this.itemSize)
        this.end = this.start + this.visibleCount
        this.startOffset = scrollTop - (scrollTop % this.itemSize)
        },
      handleInput(e) {
          console.log(e)
      },
      handleToggle (item) {
          console.log(item)
      },
      handleSelectionChange() {
        const selection = window.getSelection().getRangeAt(0)
        console.log(selection)
      }
  },
};
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .editor-container {
        overflow-y: auto;
        width: 600px;
        height: 600px;
        border: 1px solid red;
        border-radius: 4px;
        .editor {
            line-height: 1.7;
            outline: none;
            padding: 10px;
            overflow-y: auto;
            font-size: 18px;
            .editor-node {
                padding-right: 25px;
                position: relative;
                &::after{
                    content: attr(data-line-number);
                    position: absolute;
                    right: 0;
                    top: 10px;
                    padding-left: 6px;
                    line-height: 1.2;
                    font-size: 12px;
                    color: #c6c9ce;
                    box-sizing: border-box;
        }
                ol {
                    list-style-type: none;
                    li {
                        padding-left: 26px;
                        &::before{
                            content: attr(data-typeStr);
                            padding-left: 6px;
                            line-height: 1.2;
                            color: red;
                            padding-right: 4px;
                            min-width: 26px;
                            margin-left: -23px;
                            box-sizing: border-box;
                        }
                    }
                }
                ul {
                    list-style-type: none;
                    li {
                        padding-left: 26px;
                        pointer-events: none;
                        &::before{
                            content: attr(data-unorder-str);
                            cursor: pointer;
                            pointer-events: auto; 
                            padding-left: 6px;
                            line-height: 1.2;
                            padding-right: 4px;
                            min-width: 26px;
                            margin-left: -23px;
                            box-sizing: border-box;
                        }
                    }
                }
                .text {
                    padding-left: 10px;
                }
                .hr {
                    display: flex;
                    .hr-con {
                        flex: 1;
                    }
                    span {
                        margin: 0px 2px;
                        box-sizing: border-box;
                        hr {
                            display: inline-block;
                            vertical-align: middle;
                            width: calc(100% - 4px);
                            color: #999;
                            margin-top: 0px;
                            margin-bottom: 0px;
                            border: none;
                            border-top: 1px solid;
                        }
                    }
                }
                .title {
                    font-size: 18px;
                    .title-str {
                        &::before{
                            content: attr(data-title-typeStr);
                            padding-left: 6px;
                            line-height: 1.2;
                            color: #c6c9ce;
                            padding-right: 4px;
                            min-width: 26px;
                            margin-left: 0px;
                            box-sizing: border-box;
                        }
                    }
                }
            }
        }
    }
    
}

</style>
