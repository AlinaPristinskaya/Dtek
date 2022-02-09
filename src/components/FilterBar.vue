<template>
  <ul class="filter-bar">
    <li>
      <el-button class="text-btn" round type="primary">
        {{ textBtn }}
      </el-button>
    </li>
    <li>
      <el-checkbox class="text-btn" v-model="checked">
        {{ textCheck }}</el-checkbox
      >
    </li>
    <li>
      <el-input placeholder="пошук" v-model="search">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
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
  li {
    margin-right: 10px;
    display: flex;
    align-items: center;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
