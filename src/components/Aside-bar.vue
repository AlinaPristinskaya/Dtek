<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo aside-bar"
    :collapse="isCollapse"
  >
    <el-button
      v-model="isCollapse"
      class="btn-side-bar"
      type="info"
      icon="el-icon-menu"
      circle
      @click.stop="asideToggle"
    ></el-button>
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
</template>

<script>
export default {
  name: "Aside-bar",
  props: {
    sidebarMenu: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    isCollapse: false,
  }),
  methods: {
    asideToggle() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/_variables";
.aside-bar {
  background-color: $--color-coll;
  max-width: 245px;
  height: 100%;

  .btn-side-bar {
    display: flex;
    flex-direction: column;
    margin: 10px auto;
  }
}
</style>
