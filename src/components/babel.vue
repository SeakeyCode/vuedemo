<template>
  <div class="home">
   <textarea class="input" type="text" v-model="value"></textarea>
  </div>
</template>

<script>
import babel from '../babel/babel'
export default {
  name: 'home',
  data() {
    return {
      value: 'aaaaaa',
    };
  },
  created() {
    console.log(babel)
  },
  mounted() {
    console.log(this.babel.tokenizer('let a = 1'))
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.input {
    width: 500px;
    height: 250px;
    border: 1px solid red;
    outline: none;
}
</style>
