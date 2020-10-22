<template>
  <div class="home">
    <div
        class="editor"
        @dragstart.prevent
        contenteditable="true"
        @input="handleInput"
      >
        <div class="editor-node" :data-line-number="index + 1" v-for="(item, index) in list" :key="index">
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
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      list: [
        {
            type: 'title',
            typeStr: '#',
            content: '标题'
        },
        {
            type: 'order',
            typeStr: '1.',
            content: '1'
        },
        {
            type: 'order',
            typeStr: '2.',
            content: '2'
        },
        {
            type: 'order',
            typeStr: '3.',
            content: '3'
        },
        {
            type: 'hr',
            typeStr: 'hr',
            content: '&nbsp;'
        },
        {
            type: 'unorder',
            typeStr: '2022',
            content: '4'
        },
        {
            type: 'unorder',
            typeStr: 'u2022',
            content: '5'
        },
        {
            type: 'unorder',
            typeStr: 'u2022',
            content: '6'
        },
        {
            type: 'text',
            typeStr: 'text',
            content: 'text1'
        },
        {
            type: 'text',
            typeStr: 'text',
            content: 'text2'
        },
      ],
    };
  },
  created() {
   
  },
  mounted() {
    
  },
  methods: {
      handleInput() {
          console.log(this.list)
      },
      handleToggle (item) {
          console.log(item)
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
    .editor {
        line-height: 1.7;
        width: 600px;
        height: 600px;
        border: 1px solid red;
        outline: none;
        padding: 10px;
        overflow-y: auto;
        font-size: 18px;
        border-radius: 4px;
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

</style>
