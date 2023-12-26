<template>
  <Layout>
    <div class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlogId } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import "highlight.js/styles/github.css";
export default {
  mixins: [fetchData(null)],
  components: { Layout, BlogDetail, BlogTOC },
  methods: {
    async fetchData() {
      return await getBlogId(this.$route.params.id);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/markdown.css";
.main-container {
  overflow-y: scroll;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container{
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
