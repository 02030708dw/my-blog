<template>
  <nav class="menu-container">
    <router-link
      v-for="item in items"
      :exact="item.exact"
      :to="{name:item.name}"
      :key="item.name"
      active-class="active"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        { name: "Home", icon: "home", title: "首页", exact: true },
        {
          name: "Blog",
          icon: "blog",
          title: "文章",
          exact: false,
        },
        {
          name: "About",
          icon: "about",
          title: "关于我",
          exact: true,
        },
        {
          name: "Project",
          icon: "code",
          title: "项目&效果",
          exact: true,
        },
        {
          name: "Message",
          icon: "chat",
          title: "留言板",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;

  a {
    &.active {
      background-color: darken(@words, 3%);
    }

    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;

    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>
