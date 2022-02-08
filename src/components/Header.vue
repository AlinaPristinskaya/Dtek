<template>
  <div class="header">
    <div class="header__content _container">
      <div class="header__logo">
        <img src="@/assets/img/logo.svg" />
      </div>
      <div class="header__control">
        <a class="header__user user" href="/">
          <i class="el-icon-user-solid"></i>
          <span class="user__name"> </span>{{ userName }}</a
        >
        <span v-if="isLoggedIn">
          |
          <a @click="logout"><i class="el-icon-caret-right"></i>Вихід</a></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    isLoggedIn: {
      type: Boolean,
      default: () => false,
    },
  },
  data: () => ({
    userName: "ИП Баскаков Павел Владимирович",
    url: "@/assets/img/logo.svg",
  }),
  methods: {
    logout() {
      this.$emit("logout");
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/_variables";
.header {
  display: flex;
  max-height: 100px;
  background-color: $--color-text;
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    img {
      max-width: 100%;
      object-fit: fill;
      max-height: 60px;
    }
  }
  &__control {
  }
  &__user {
  }
}
._container {
}

.user {
  &__name {
  }
}
</style>
