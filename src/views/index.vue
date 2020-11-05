<template>
  <div class="root">
    <a-layout class="container">
      <a-layout-header class="header">
        <span class="logo" @click="gotoHome">
          <a-icon type="pay-circle" theme="filled" />
          WEB STUDY
        </span>
        <a-menu v-model="current" mode="horizontal" theme="dark" @select="handleMenuSelect">
          <template v-for="item in menuList">
            <a-menu-item :key="item.name">{{ item.label }}</a-menu-item>
          </template>
        </a-menu>
      </a-layout-header>
      <a-layout-content class="main">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        Good good study, Day day up©2018 Created by HLB
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      current: ["home"],
      menuList: [
        {
          name: "home",
          label: "首页"
        },
        {
          name: "markdown",
          label: "Markdown文档"
        }
      ]
    };
  },
  mounted() {
    this.current = [this.$route.path.split("/")[1]];
  },
  methods: {
    gotoHome() {
      this.$router.push({ name: "home" });
    },
    handleMenuSelect({ key }) {
      this.$router.push({ name: key });
    }
  }
};
</script>

<style lang="less" scoped>
.root {
  height: 100%;

  .container {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;

    .header {
      height: 46px;
      line-height: 46px;
      display: flex;
      flex-direction: row;
      padding: 0 20px;

      .logo {
        width: 200px;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;

        i {
          margin-right: 10px;
          color: #871df1;
        }
      }
    }

    .main {
      background: #fff;
      overflow-y: auto;
    }

    .footer {
      padding: 10px;
      text-align: center;
    }
  }
}
</style>
