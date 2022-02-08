<template>
  <div id="app">
    <Header :isLoggedIn="isLoggedIn" @logout="logout" />
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  components: { Header },
  data: () => ({
    isLoggedIn: true,
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
  },
};
</script>
<style lang="scss"></style>
