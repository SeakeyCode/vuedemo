<template>
  <div class="bezier">
    <div class="root" transform="matrix(1 0 0 1 10 10)">
        <div>1111111</div>
        <div class="sub">2222222</div>
    </div>
    <svg id="svg" width="500" height="100">
        <path transform="matrix(1 0 0 1 10 10)" d="M0 0 C90 40 130 40 180 0" stroke="#000000" fill="none" style="stroke-width: 2px;"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'bezier',
  data() {
    return {
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.bezier {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .root {
        text-align: left;
        background-color: rgb(80, 194, 139);
        color: rgb(255, 255, 255);
        font-size: 26px;
        border-radius: 5px;
        padding: 14px 15px 13px;
        font-family: 微软雅黑;
        font-style: normal;
        font-weight: normal;
        position: relative;
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
            top: 12px;
            right: -160px;
        }
    }
}
</style>
