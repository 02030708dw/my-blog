<template>
  <div
    v-loading="isLoading"
    class="home-container"
    ref="container"
    @wheel="handRoll"
  >
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionend"
    >
      <li v-for="i in data" :key="i.id">
        <Carouselitem :carousel="i" />
      </li>
    </ul>
    <div @click="switchTo(index - 1)" v-show="index >= 1" class="icon icon-up">
      <Icon type="arrowUp" />
    </div>
    <div
      @click="switchTo(index + 1)"
      v-show="index < data.length - 1"
      class="icon icon-down"
    >
      <Icon type="arrowDown" class="" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{ active: i === index }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import Carouselitem from "./Carouselitem";
import Icon from "@/components/Icon";
import { getBanners } from "@/api/banner";
import fetchData from '@/mixins/fetchData';
export default {
  mixins: [fetchData([])],
  components: {
    Carouselitem,
    Icon,
  },
  data() {
    return {
      index: 0, //当前显示的是第几张轮播图
      containerHeight: 0, //整个容器的高度
      switching: false, // 是否正在切换中
    };
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    //监听浏览器视口变化的重新渲染页面内容
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    //移除原来的监听事件
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handRoll(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY > 5 && this.index < this.data.length - 1) {
        // 向下滚动
        this.switching = true;
        this.index++;
      } else if (e.deltaY < -5 && this.index > 0) {
        // 向上滚动
        this.switching = true;
        this.index--;
      }
    },
    handleTransitionend() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    async fetchData() {
      return await getBanners();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 500ms;
    li {
      width: 100%;
      height: 100%;
    }
  }

  .icon {
    .self-center();
    @gap: 25px;
    font-size: 30px;
    color: @gray;
    cursor: pointer;
    transform: translateX(-50%);

    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }

    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }

    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }

    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }

  .indicator {
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 10px;

    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;

      &.active {
        background: #fff;
      }
    }
  }
}
</style>
