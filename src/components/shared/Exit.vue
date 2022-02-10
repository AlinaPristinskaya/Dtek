<template>
  <a href="#" class="svga"
    ><svg @click="logout" class="header__icon">
      <use href="../../assets/img/symbol-defs.svg#icon-exit"></use></svg
  ></a>
</template>

<script>
export default {
  name: "Exit",

  methods: {
    logout() {
      this.$emit("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables";
.header {
  display: flex;
  align-items: center;
  height: 100px;
  border-bottom: $--color-grey 2px solid;
  background-color: $--color-row;
  &__exit {
    display: flex;
    align-items: center;
    color: $--color-black;
    font-weight: 500;
    font-size: 18px;
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
    color: $--color-primary;
    .header__icon {
      fill: $--color-primary;
      stroke-width: 1px;
    }
  }
}
</style>
