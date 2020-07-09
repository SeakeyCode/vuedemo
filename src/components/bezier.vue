<template>
  <div class="bezier">
    <div class="content">
        <div class="root-name">{{root.name}}</div>
        <div class="sub" :style="{top: item.top + 'px', left: item.left + 'px'}" v-for="(item, index) in root.children" :key="index">{{item.name}}</div>
    </div>
    <!-- transform="matrix(1 0 0 1 10 10)" -->
    <!-- <svg id="svg">
        <path d="M200 0 C100 0 0 100 0 200" stroke="#000000" fill="none" style="stroke-width: 2px;"></path>
        <path d="M0 100 C200 100 0 100 200 100" stroke="#000000" fill="none" style="stroke-width: 2px;"></path>
    </svg> -->
  </div>
</template>

<script>
export default {
  name: 'bezier',
  data() {
    return {
        root: {
            name: '根节点',
            children: [
                {
                    name: '子节点1',
                    children: []
                },
                {
                    name: '子节点2',
                    children: []
                },
                {
                    name: '子节点3',
                    children: []
                },
                {
                    name: '子节点4',
                    children: []
                }
            ]
        }
    }
  },
  mounted () {
    const root = document.querySelector('.root-name')
    console.log(root.offsetWidth, root.offsetHeight)
    console.log(root.offsetLeft, root.offsetTop)
    this.root.children.forEach((item, index) => {
        let left = root.offsetLeft + root.offsetWidth + 100
        this.$set(item, 'top', (index + 3)*100)
        this.$set(item, 'left', left)
    })
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.bezier {
    width: 100%;
    height: 100vh;
    background: rgb(248, 248, 248);
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100vw;
        height: 100vh;
    }
    .root-name {
        text-align: left;
        background-color: rgb(80, 194, 139);
        color: rgb(255, 255, 255);
        font-size: 26px;
        border-radius: 5px;
        padding: 14px 15px 13px;
        display: inline-block;
    }
    svg {
            position: absolute;
        }
    .sub {
        text-align: left;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(137, 137, 137);
        border-radius: 5px;
        color: rgb(68, 68, 68);
        font-size: 17px;
        padding: 8px 12px;
        font-family: 微软雅黑;
        font-style: normal;
        font-weight: normal;
        position: absolute;
    }
}
</style>
