<template>
  <div class="comicItem">
      <span>{{comic.title}}</span>
      <router-link :to="'/comics/'+comic.id"><div :style=" { 'background-image': 'url('+comic.thumbnail.path+'.'+comic.thumbnail.extension+')'}" class="portada"></div></router-link>
  </div>
</template>

<script>
import comicItem from './comicItem'
export default {
  name: 'Home',
  data () {
    return {
        
    }
  },
  props: ['comic']
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
.comicItem {
  display:grid;
  grid-template-rows: 75px 1fr
}
.portada {
    min-height: 600px;
    min-width: 100px;
    border-radius: 5px;
    background-size: cover
}
</style>
