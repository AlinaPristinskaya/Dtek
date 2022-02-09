<template>
  <div id="app">
    <Header
      :isLoggedIn="isLoggedIn"
      :sidebar-menu="AsideBarMenu.sidebarMenu"
      @logout="logout"
    />
    <el-container style="height: 100%; width: 100%">
      <Asidebar
        v-if="this.$route.name !== 'login'"
        :sidebar-menu="AsideBarMenu.sidebarMenu"
        @openTab="openTab"
        router
      />
      <router-view />
    </el-container>
  </div>
</template>
<script>
import Header from "./components/Header";
import Asidebar from "./components/Aside-bar";
import AsideBarMenu from "./modules/AsideBarMenu";
export default {
  components: {
    Header,
    Asidebar,
  },
  data: () => ({
    AsideBarMenu: AsideBarMenu || {},
    isLoggedIn: true,
    openedMenuTabs: [],
    activeTab: "1-1",
  }),

  computed: {
    // isLoggedIn() {
    //   return this.$store.getters.isLoggedIn;
    // },
  },
  created() {
    //Перехватчик запросов
    //проверка на устаревший токен и ответ с сервера.
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.status === 401) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    openTab(index) {
      this.openedMenuTabs.push(index);
      this.activeTab = index;
    },
  },
};
</script>
<style lang="scss">
#app {
  height: calc(100vh - 100px);
  background: white;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: black;
}
</style>
