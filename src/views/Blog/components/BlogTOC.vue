<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toc" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "./RightList";
export default {
  components: { RightList },
  props: {
    toc: {
      type: Array,
    },
  },
  methods:{
    handleSelect(item){
      console.log(item);
      location.hash = item.anchor;
    }
  }
};
</script>

<style lang="less" scoped>
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1rem;
    margin: 0;
  }
}
</style>
