<template>
  <div class="pager-container" v-if="pageNumber">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }">首页</a>
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
      >上一页</a
    >
    <a
      @click="handleClick(n)"
      :class="{ active: n === current }"
      v-for="(n, i) in numbers"
      :key="i"
      >{{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
      >下一页</a
    >
    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >尾页</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visbleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      let min = this.current - Math.floor(this.visbleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visbleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPage) {
      if(newPage < 1){
        newPage = 1;
      }
      if(newPage > this.pageNumber){
        newPage = this.pageNumber;
      }
      if(newPage === this.current){
        return
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px auto;

  a {
    color: @primary;
    margin: 0 6px;

    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }

    &.active {
      color: @words;
      cursor: text;
      font-weight: bold;
    }
  }
}
</style>
