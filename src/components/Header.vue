<template>
  <div class="header">
    <div class="header__content _container">
      <div class="header__logo">
        <img src="../assets/img/logo.svg" width="98" height="33" alt="ДТЭК" />
      </div>

      <div class="header__control">
        <div class="header__user">
          <a href="#" class="svga">
            <svg class="header__icon">
              <use href="../assets/img/symbol-defs.svg#icon-user"></use></svg
          ></a>

          <p class="user">{{ userName }}</p>
        </div>
        <div class="header__exit">
          <a href="#" class="svga"
            ><svg class="header__icon">
              <use href="../assets/img/symbol-defs.svg#icon-exit"></use></svg
          ></a>

          <p @click="logout" class="exit">Вихід</p>
        </div>
        <div class="header__lang">
          <ul class="lang">
            <li class="lang__activ"><span>UA</span></li>
          </ul>
        </div>
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
  height: 100px;
  border-bottom: $--color-grey 1px solid;
  background-color: #e2e1e1;

  &__logo {
    padding-right: 10px;
    img {
      max-width: 100%;
      object-fit: fill;
      max-height: 60px;
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__control {
    display: flex;
    align-items: center;
    :not(:last-child) {
      margin-right: 30px;
    }
    @media (max-width: 768px) {
      :not(:last-child) {
        margin-right: 10px;
        font-size: 12px;
      }
    }
  }
  &__exit {
    display: flex;
    align-items: center;
    color: $--color-black;
    font-weight: 500;
    font-size: 18px;
  }
  &__user {
    display: flex;
    align-items: center;
    color: $--color-black;
    font-weight: 500;
    font-size: 18px;
  }
  &__content {
    font-size: 12px;
    text-transform: uppercase;
    height: 86px;
    position: relative;
  }
  &__lang {
    display: flex;
    justify-content: center;
    color: $--color-black;
    font-weight: 500;
    font-size: 18px;
    outline: none;
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
    :hover,
    :focus {
      background-color: $--color-accent;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  &__icon {
    width: 30px;
    height: 30px;
    fill: $--color-grey;
    @media (max-width: 570px) {
      width: 20px;
      height: 20px;
    }
  }
}
.svga {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  outline: none;
  transition-property: color, border;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;
  &:hover,
  &:focus {
    color: $--color-accent;
    .header__icon {
      fill: $--color-accent;
      stroke: $--color-black;
      stroke-width: 1px;
    }
  }
}
</style>
