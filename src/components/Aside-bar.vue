<template>
  <MenuList
    :isCollapse="isCollapse"
    :sidebarMenu="sidebarMenu"
    @asideToggle="asideToggle"
    :asideBar="true"
  />
</template>

<script>
import MenuList from "./Menu-list";
export default {
  name: "Aside-bar",
  components: { MenuList },

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
  display: block;
  @media (max-width: 768px) {
    display: none;
  }

  .btn-side-bar {
    display: flex;
    flex-direction: column;
    margin: 10px auto;
  }
}
</style>
