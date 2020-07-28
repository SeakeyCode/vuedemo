<template>
  <div class="home">
    <div class="aside">
      <router-link
        tag="div"
        :to="item.name.split('-')[0]"
        class="item"
        v-for="(item, index) in tabList"
        :key="index"
      >
        {{ item.name.split('-')[1] }}
      </router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      tabList: [],
    }
  },
  created() {
    // axios.defaults.withCredentials = true
    // axios.get('http://localhost:3000', {
    //   headers: {
    //     'X-Token': '1111111111111111'
    //   }
    // }).then(res => {
    //   console.log(res.data)
    // })
  },
  mounted() {
    const req = require.context('./', false, /\.vue$/)
    const requireAll = (v) => v.keys().map(v)
    this.tabList = requireAll(req)
      .map((item) => item.default)
      .filter((v) => v.name !== 'home')
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 100vh;
  .aside {
    background-color: #304156;
    color: #ffffff;
    .item {
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      cursor: pointer;
      &:hover {
        background-color: #263445 !important;
      }
    }
  }
  .content {
    padding: 20px;
  }
}
</style>
