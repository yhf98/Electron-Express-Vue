<template>
  <div class="content">
    <div v-for="(item,index) in list" :key="index">
      {{item.name}}
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[]
    }
  },
  created(){
    axios.get("/users/list").then(data=>{
      console.info("info",data.data.data)
      this.list=data.data.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
