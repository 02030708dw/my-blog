export default function (refval) {
  return {
    mounted() {
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
      this.$refs[refval].addEventListener("scroll", this.handleMainScroll);
    },

    beforeDestroy() {
      this.$bus.$emit("mainScroll");
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
      this.$refs[refval].removeEventListener("scroll", this.handleMainScroll);
    },
    methods: {
      handleSetMainScroll(scrollTop) {
        this.$refs[refval].scrollTop = scrollTop;
      },
      handleMainScroll() {
        // 处理滚动事件
        this.$bus.$emit("mainScroll", this.$refs[refval]);
      },
    },
  };
}
