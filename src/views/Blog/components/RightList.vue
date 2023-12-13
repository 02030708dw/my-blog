<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }">
        {{ item.name }}
      </span>
      <span
        v-if="item.aside"
        class="aside"
        @click="handleClick(item)"
        :class="{ active: item.isSelect }"
        >{{ item.aside }}</span
      >
      <!-- 显示当前组件 -->
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    //[{name:xxx, isSelect:true, children:[{name:yyy}]}]
    list: {
      type: Array,
      //默认值是数组或者对象需要写成一个函数
      default: () => [],
    },
  },
  methods: {
    handleClick(e) {
      if (!e.isSelect) {
        this.$emit("select", e);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    line-height: 40px;
    min-height: 40px;
    font-size: 14px;
    cursor: pointer;
    .active {
      color: @warn;
    }
  }
  .aside {
    font-size: 12px;
    margin-left: 1rem;
    color: @gray;
  }
}
</style>
