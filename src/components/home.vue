<template>
  <div class="hello">
    <div>home</div>
    <div id="login_container"></div>
  </div>
</template>

<script>
 import History from 'immutable-undo'
export default {
  name: 'home',
  data() {
    return {
    }
  },
  mounted () {
    var history = History.create();
    var test = history.push({name: 11111})
    test.undo()
    console.log(test.toJS())
    // window.onpopstate = function(event) {
    //   console.log('location: ' + document.location + ', state: ' + JSON.stringify(event.state));
    // }
    // // https://service-dev.9guan.vip/api/socialite/weixin/callback
    // // https://passport.yhd.com/?code=043Li2yF0qsR1f2jqswF0MQmyF0Li2yS&state=3d6be0a4035d839573b04816624a415e
    // new window.WxLogin({
    //   self_redirect: false,
    //   id:'login_container', 
    //   appid: 'wxdc397746dac39700', 
    //   scope: 'snsapi_login', 
    //   redirect_uri: 'https%3A%2F%2Fservice-dev.9guan.vip%2F',
    //   state: '3d6be0a4035d839573b04816624a415e',
    //   style: '',
    //   href: ''
    // })
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
