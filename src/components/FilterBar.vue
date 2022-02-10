<template>
  <ul class="filter-bar">
    <li>
      <el-button class="text-btn desctop" round type="primary">
        {{ textBtn }}</el-button
      >
      <el-button
        circle
        type="primary"
        icon="el-icon-plus"
        class="mobile"
      ></el-button>
    </li>
    <li>
      <el-checkbox class="text-btn" v-model="checked">
        {{ textCheck }}</el-checkbox
      >
    </li>
    <li>
      <el-input placeholder="пошук" v-model="search" class="desctop">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button
        circle
        type="primary"
        icon="el-icon-search"
        class="mobile"
      ></el-button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FilterBar",

  props: {
    textBtn: {
      type: String,
      default: () => "",
    },
    textCheck: {
      type: String,
      default: () => "",
    },
  },
  data: () => ({
    checked: false,
    search: "",
  }),
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/_variables";
.filter-bar {
  padding: 5px;
  border-bottom: 2px solid $--color-grey;
  display: flex;
  justify-content: space-between;
  li {
    margin-right: 10px;
    display: flex;
    align-items: center;
    &:last-child {
      margin-right: 0;
    }
  }
}

.is-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 0px;
  width: 40px;
  height: 40px;
  position: relative;
}
.desctop {
  @media screen and(max-width:768px) {
    display: none;
  }
}
.mobile {
  @media screen and(min-width:768px) {
    display: none;
  }
}
</style>
