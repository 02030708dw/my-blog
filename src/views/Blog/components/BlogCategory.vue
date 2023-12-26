<template>
  <div class="blog-category-container" v-loading="isLoading">
    <!-- 博客分类 -->
    <h2 class="blog-category">文章分类</h2>
    <RightList :list="list" @select="handleClick" />
  </div>
</template>

<script>
import RightList from "./RightList";
import fetchData from "@/mixins/fetchData";
import { getBlogType } from "@/api/blog";
export default {
  mixins: [fetchData([])],
  components: { RightList },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticleCount = this.data.reduce(
        (acc, cur) => acc + cur.articleCount,
        0
      );
      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];

      return result.map((it) => ({
        ...it,
        isSelect: it.id === this.categoryId,
        aside: `${it.articleCount}篇`,
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getBlogType();
    },
    handleClick(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id === -1) {
        //当前没有分类
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          params: { categoryId: item.id },
          query,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1rem;
    margin: 0;
  }
}
</style>
