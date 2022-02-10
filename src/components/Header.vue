<template>
  <div class="header">
    <div class="header__content _container">
      <BurgerButton @toggleMenu="toggleMenu" />

      <el-drawer
        :visible.sync="drawer"
        direction="ttb"
        :before-close="handleClose"
        size="100%"
        :show-close="false"
      >
        <MenuList :sidebarMenu="sidebarMenu" />
      </el-drawer>
      <div class="header__logo">
        <img src="../assets/img/logo.svg" width="98" height="33" alt="ДТЭК" />
      </div>

      <div>
        <el-dropdown class="dropdown-menu">
          <i class="el-icon-setting"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <!-- Повторяющийся элемент -->
              <a href="#" class="svga">
                <svg class="header__icon">
                  <use
                    href="../assets/img/symbol-defs.svg#icon-user"
                  ></use></svg
                ><span class="user">{{ userName }}</span></a
              ></el-dropdown-item
            >
            <el-dropdown-item
              ><el-tooltip
                class="item"
                effect="dark"
                content="Выход"
                placement="right-start"
              >
                <a href="#" class="svga"
                  ><svg @click="logout" class="header__icon">
                    <use
                      href="~@/assets/img/symbol-defs.svg#icon-exit"
                    ></use></svg></a></el-tooltip
            ></el-dropdown-item>
            <el-dropdown-item>
              <a href="#" class="svga"><locale-switcher /></a
            ></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div class="menu-container">
          <div class="header__user">
            <a href="#" class="svga">
              <svg class="header__icon">
                <use href="../assets/img/symbol-defs.svg#icon-user"></use></svg
              ><span class="user">{{ userName }}</span></a
            >
          </div>

          <div class="header__user">
            <el-tooltip
              class="item"
              effect="dark"
              content="Выход"
              placement="right-start"
            >
              <a href="#" class="svga"
                ><svg @click="logout" class="header__icon">
                  <use
                    href="~@/assets/img/symbol-defs.svg#icon-exit"
                  ></use></svg></a
            ></el-tooltip>
          </div>

          <div class="header__user">
            <a href="#" class="svga"><locale-switcher /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "../views/LocaleSwitcher.vue";
import BurgerButton from "./Burger-button";
import MenuList from "./Menu-list";

export default {
  name: "Header",
  components: {
    LocaleSwitcher,
    BurgerButton,
    MenuList,
  },

  props: {
    isLoggedIn: {
      type: Boolean,
      default: () => false,
    },
    sidebarMenu: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    userName: "ИП Баскаков Павел Владимирович",
    url: "@/assets/img/logo.svg",
    drawer: false,
  }),
  methods: {
    toggleMenu() {
      this.drawer = !this.drawer;
    },
    logout() {
      this.$emit("logout");
    },
    handleClose(done) {
      done();
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/_variables";
.header {
  display: flex;
  align-items: center;
  height: 100px;
  border-bottom: $--color-grey 2px solid;
  background-color: $--color-row;
  position: relative;

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

    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
    }
  }
  &__user {
    display: flex;
    align-items: center;
    color: $--color-black;
    font-weight: 500;
    font-size: 18px;
    @media screen and (max-width: 767px) {
      display: block;
      height: 30px;
    }
  }
  &__content {
    font-size: 12px;
    text-transform: uppercase;
    height: 86px;
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
.user {
  @media (max-width: 767px) {
    display: none;
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
.menu-container {
  @media screen and (max-width: 768px) {
    display: none;
    position: fixed;
    top: 100px;
    right: 10px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #eeeeee;
    border: solid 1px #e6e6e6;
    z-index: 99;
    transform: translateX(-50%);
    transform: translateY(100%);
    :not(:last-child) {
      margin-bottom: 5px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    padding: 0px;
    align-items: center;
    :not(:last-child) {
      margin-right: 30px;
    }
  }
}

.dropdown-menu {
  display: none;
  @media screen and(max-width:767px) {
    display: block;
  }
}
</style>
