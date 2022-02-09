<template>
  <div class="header">
    <div class="header__content _container">
      <el-button
        class="burger-menu"
        type="info"
        icon="el-icon-menu"
        circle
        @click="drawer = true"
      ></el-button>

      <el-drawer
        :visible.sync="drawer"
        direction="ttb"
        :before-close="handleClose"
        size="100%"
      >
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo aside-bar"
          :collapse="isCollapse"
        >
          <template v-for="(menuItem, index) in sidebarMenu">
            <el-submenu
              v-if="menuItem.type === 'submenu'"
              :key="index"
              :index="menuItem && menuItem.index"
            >
              <template slot="title">
                <i :class="menuItem.icon"></i>
                <span slot="title">{{ menuItem.title }}</span>
              </template>
              <el-menu-item-group
                v-for="(submenuItem, index1) in menuItem.items"
                :key="index1"
              >
                <span slot="title">{{ submenuItem.title }}</span>
                <router-link
                  v-for="navLink in submenuItem.links"
                  :key="navLink.index"
                  :to="navLink.url"
                >
                  <el-menu-item
                    :index="navLink.index"
                    @click="openTab(navLink.index)"
                  >
                    <i :class="navLink.icon"></i>
                    {{ navLink.title }}</el-menu-item
                  >
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item
              v-if="menuItem.type === 'menu-item'"
              :key="index"
              :index="menuItem && menuItem.index"
            >
              <i :class="menuItem.icon"></i>
              <span slot="title">{{ menuItem.title }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-drawer>
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
.burger-menu {
  margin-right: 10px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
}
</style>
