<template>
  <div>
    <el-tooltip
      class="item"
      effect="dark"
      :content="this.$t('language')"
      placement="right-start"
    >
      <a href="#" @click.prevent="switchLocalebtn">
        <img
          v-if="btn"
          src="@/assets/img/uk.png"
          alt=""
          width="40"
          height="30"
        />
        <img
          v-if="!btn"
          src="@/assets/img/ru.png"
          alt=""
          width="40"
          height="30"
        /> </a
    ></el-tooltip>
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
        },
        {
          value: "ru",
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
      const lang = this.langs.find((item) => item.value !== this.$i18n.locale);

      this.$confirm(
        `${this.$t("Do you want to change the language to")} ${lang.value}?`,
        this.$t("Warning"),
        {
          confirmButtonText: "OK",
          cancelButtonText: this.$t("cancel"),
          type: "warning",
        }
      )
        .then(() => {
          this.$i18n.locale = lang.value;
          localStorage.setItem("localeLang", `${lang.value}`);
          this.btn = !this.btn;
        })
        .catch(() => {
          this.value = this.$i18n.locale;
        });
    },
    select() {
      this.value = localStorage.getItem("localeLang") || `ua`;
    },
  },
};
</script>

<style scoped lang="scss"></style>
