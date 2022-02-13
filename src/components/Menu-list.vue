<template>
  <div class="aside-bar">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <el-button
        v-if="asideBar"
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
              <el-menu-item @click="itemClick" :index="navLink.index">
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
  </div>
</template>

<script>
export default {
  name: "Menu-list",
  props: {
    isCollapse: {
      type: Boolean,
      default: () => false,
    },
    asideBar: {
      type: Boolean,
      default: () => false,
    },

    sidebarMenu: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    asideToggle() {
      this.$emit("asideToggle");
    },
    itemClick() {
      this.$emit("item-click");
      console.log("111");
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/_variables";
.btn-side-bar {
  display: flex;
  flex-direction: column;
  margin: 10px auto;
}
</style>
