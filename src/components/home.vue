<template>
  <div class="hello">
    <div id="login_container"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  mounted () {
    axios.get('http://localhost:3000/user').then(res => {
      console.log(res.data)
    })
  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
