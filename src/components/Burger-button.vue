<template>
  <div class="box">
    <div ref="btn" class="btn not-active" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BurgerButton",
  methods: {
    toggleMenu() {
      this.$refs.btn.classList.toggle("active");
      this.$refs.btn.classList.toggle("not-active");
      this.$emit("toggleMenu");
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/_variables";
.box {
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin-top: 17px;
  }
}

.btn {
  width: 50px;
  cursor: pointer;
  position: relative;
  z-index: 9999999;
}

span {
  display: block;
  width: 100%;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  height: 6px;
  background: $--color-burger;
  transition: all 0.3s;
  position: relative;
}

span + span {
  margin-top: 10px;
}

.active span:nth-child(1) {
  animation: ease 0.7s top forwards;
}

.not-active span:nth-child(1) {
  animation: ease 0.7s top-2 forwards;
}

.active span:nth-child(2) {
  animation: ease 0.7s scaled forwards;
}

.not-active span:nth-child(2) {
  animation: ease 0.7s scaled-2 forwards;
}

.active span:nth-child(3) {
  animation: ease 0.7s bottom forwards;
}

.not-active span:nth-child(3) {
  animation: ease 0.7s bottom-2 forwards;
}

@keyframes top {
  0% {
    top: 0;
    transform: rotate(0);
  }
  50% {
    top: 22px;
    transform: rotate(0);
  }
  100% {
    top: 11px;
    transform: rotate(45deg);
  }
}

@keyframes top-2 {
  0% {
    top: 22px;
    transform: rotate(45deg);
  }
  50% {
    top: 22px;
    transform: rotate(0deg);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
  }
}

@keyframes bottom {
  0% {
    bottom: 0;
    transform: rotate(0);
  }
  50% {
    bottom: 22px;
    transform: rotate(0);
  }
  100% {
    bottom: 22px;
    transform: rotate(135deg);
  }
}

@keyframes bottom-2 {
  0% {
    bottom: 22px;
    transform: rotate(135deg);
  }
  50% {
    bottom: 22px;
    transform: rotate(0);
  }
  100% {
    bottom: 0;
    transform: rotate(0);
  }
}

@keyframes scaled {
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes scaled-2 {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
