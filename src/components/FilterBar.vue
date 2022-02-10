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
        v-show="focused"
        @focus="focused"
        @blur="focusedOff"
        placeholder="пошук"
        v-model="search"
      >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button
        @click="searchBtn"
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
    focused: true,
    width: 0,
  }),
  mounted() {
    this.updateWidth();
    this.width > 768 ? (this.focused = true) : (this.focused = false);
  },

  methods: {
    searchBtn() {
      console.log(18);
      this.focused = true;
    },
    updateWidth() {
      this.width = window.innerWidth;
      console.log(this.width);
    },
    focusedOff() {
      if (this.width < 768) this.focused = false;
    },
  },
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

.search {
  display: flex;
  align-items: center;
  justify-content: center;

  &-form {
    background: none;
    border: none;
    transition: width 0.9s;
    font: 0.9rem/1 "Open Sans", sans-serif;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;

    &::placeholder {
      color: red;
    }

    &:focus {
      border: none;
      outline: none;
      width: 10rem;
      background: white;

      &::placeholder {
        color: var(--main-dark);
      }
    }
  }
}
</style>
