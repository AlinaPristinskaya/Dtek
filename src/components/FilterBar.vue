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
      <el-input
        :placeholder="this.$t('search')"
        v-model="search"
        class="inputMobile"
      >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-dropdown :hide-on-click="false"
        ><el-button
          circle
          type="primary"
          icon="el-icon-search"
          class="dropdownBtn"
        ></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            ><el-input
              ref="myInput"
              autofocus
              v-model="search"
              class="inputMobileMin"
            >
              <i
                slot="prefix"
                class="el-input__icon el-icon-search"
              ></i> </el-input
          ></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
      margin-right: 10px;
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
  @media screen and(max-width:580px) {
    display: none;
  }
}
.mobile {
  @media screen and(min-width:580px) {
    display: none;
  }
}

.inputMobile {
  @media screen and(max-width:400px) {
    display: none;
  }
}
.dropdownBtn {
  margin-left: 10px;
  :hover,
  :focus {
    color: white;
  }

  @media screen and(min-width:400px) {
    display: none;
  }
}
</style>
