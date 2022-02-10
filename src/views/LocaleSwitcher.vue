<template>
  <div>
    <div v-if="btn">
      <el-tooltip
        class="item"
        effect="dark"
        content="Мова"
        placement="right-start"
      >
        <a href="#" @click="switchLocalebtn">
          <img src="../assets/img/uk.png" alt="" width="40" height="30" /> </a
      ></el-tooltip>
    </div>
    <div v-if="!btn">
      <el-tooltip
        class="item"
        effect="dark"
        content="Язык"
        placement="right-start"
      >
        <a href="#" @click="switchLocalebtn">
          <img src="../assets/img/ru.png" alt="" width="40" height="30" /> </a
      ></el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",

  data() {
    return {
      btn: true,
      value: "ua",
      locales: process.env.VUE_APP_I18N_SUPPORTED.split(","),
      langs: [
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
    this.value === "ua" ? (this.btn = true) : (this.btn = false);
    this.switchLocale(this.value);
  },

  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        localStorage.setItem("localeLang", `${locale}`);
      }
    },
    switchLocalebtn() {
      this.btn = !this.btn;
      const lang = this.langs.find((item) => item.value !== this.$i18n.locale);
      this.switchLocale(lang.value);
    },
    select() {
      this.value = localStorage.getItem("localeLang") || `ua`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
