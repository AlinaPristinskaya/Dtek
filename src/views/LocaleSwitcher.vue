<template>
  <div>
    <el-select v-model="value" @change="switchLocale">
      <el-option
        v-for="item in formatedItems"
        :key="item.value"
        :value="item.value"
        :class="item.class"
        ><span :class="item.class"></span>
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",

  data() {
    return {
      value: {},
      locales: process.env.VUE_APP_I18N_SUPPORTED.split(","),
      lans: [
        {
          value: "ua",
          class: "spanFlagUk",
        },
        {
          value: "ru",
          class: "spanFlagRu",
        },
      ],
    };
  },
  mounted() {
    this.select();
    console.log(this.value);
    this.switchLocale(this.value);
  },
  computed: {
    formatedItems() {
      return this.locales.map((item) => {
        return item === this.lans[0].value ? this.lans[0] : this.lans[1];
      });
    },
  },
  methods: {
    switchLocale(locale) {
      console.log(locale);
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        localStorage.setItem("localeLang", `${locale}`);
      }
    },
    select() {
      this.value = localStorage.getItem("localeLang") || `ua`;
    },
  },
};
</script>

<style scoped lang="scss">
.spanFlagUk {
  display: block;
  content: "Ru";
  height: 42px;
  width: 100%;
  background-image: url(../assets/img/uk.png);
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  padding: 0px;
}
.spanFlagRu {
  display: block;
  content: "Ru";
  height: 42px;
  width: 100%;

  background-image: url(../assets/img/ru.png);
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  padding: 0px;
}
.select {
  display: flex;
  justify-content: space-between;
}
</style>
