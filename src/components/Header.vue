<template>
  <div class="header">
    <div class="header__content _container">
      <div class="header__logo">
        <img src="../assets/img/logo.svg" width="98" height="33" alt="ДТЭК" />
      </div>

      <div>
        <button
          type="button"
          class="menu-button"
          data-menu-button
          aria-expanded="false"
          aria-controls="menu-container"
        >
          <svg
            width="20"
            height="20"
            aria-label="Переключатель мобильного меню"
          >
            <use
              class="icon-cross"
              href="../assets/img/spritecrossmenu.svg#settings"
            ></use>
            <use
              class="icon-menu"
              href="../assets/img/spritecrossmenu.svg#settings"
            ></use>
          </svg>
        </button>

        <div class="menu-container" id="menu-container" data-menu>
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
              effect="light"
              content="Выход"
              placement="right-start"
            >
              <a href="#" class="svga"
                ><svg @click="logout" class="header__icon">
                  <use
                    href="../assets/img/symbol-defs.svg#icon-exit"
                  ></use></svg></a
            ></el-tooltip>
          </div>

          <div class="header__user">
            <a href="#" class="svga"
              ><ul class="lang">
                <li><span>UA</span></li>
              </ul></a
            >
          </div>
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
  },
  data: () => ({
    userName: "ИП Баскаков Павел Владимирович",
    url: "@/assets/img/logo.svg",
  }),
  mounted() {
    this.menuView();
  },
  methods: {
    logout() {
      this.$emit("logout");
    },
    menuView() {
      (() => {
        const menuBtnRef = document.querySelector("[data-menu-button]");
        const mobileMenuRef = document.querySelector("[data-menu]");

        menuBtnRef.addEventListener("click", () => {
          const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

          menuBtnRef.classList.toggle("is-open");
          menuBtnRef.setAttribute("aria-expanded", !expanded);

          mobileMenuRef.classList.toggle("is-open");
        });
      })();
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

    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;

      & .menu-button {
        display: none;
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
    @media screen and (max-width: 767px) {
      display: block;
      height: 30px;
    }
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
  @media screen and (max-width: 767px) {
    display: none;
    position: fixed;
    top: 100px;
    right: 10px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: $--color-white;
    border: 1px solid $--color-grey;
    z-index: 99;
    transform: translateX(-50%);
    transform: translateY(100%);
    :not(:last-child) {
      margin-bottom: 5px;
    }
    &.is-open {
      display: block;
      transform: translateY(0);
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

.menu-button {
  display: inline-flex;
  padding: 0px;
  margin: 0px;
  border: none;
  background-color: transparent;
  fill: $--color-grey;
  z-index: 100;

  &:hover,
  &:focus {
    fill: $--color-primary;
  }
}
.menu-button.is-open .icon-cross {
  display: block;
}
.menu-button .icon-menu {
  display: block;
}
.menu-button.is-open .icon-menu {
  display: none;
}
.menu-button .icon-cross {
  display: none;
}
</style>
