<template>
  <div class="hello">
    <div>home</div>  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
    }
  },
  created() {
    axios.defaults.withCredentials = true
    axios.get('http://localhost:3000', {
      headers: {
        'X-Token': '1111111111111111'
      }
    }).then(res => { 
      console.log(res.data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
