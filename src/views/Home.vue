<template>
  <div class="home">
    <AsideBar />
  </div>
</template>

<script>
// @ is an alias to /src
import AsideBar from "../components/Aside-bar";
import AsideBarMenu from "../modules/AsideBarMenu";
export default {
  name: "Home",
  components: {
    AsideBar,
  },
  data: () => ({
    AsideBarMenu: AsideBarMenu || {},
  }),
};
</script>
<style scoped lang="scss">
.home {
  height: 100%;
}
</style>
