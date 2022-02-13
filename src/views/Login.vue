<template>
  <div class="login">
    <el-form
      ref="form"
      class="login__form"
      :model="form"
      :rules="rules"
      @submit.native.prevent="submitLogin"
    >
      <h1>
        <p>{{ $t("main.login") }}</p>
      </h1>
      <el-form-item :label="логін" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="пароль" prop="password">
        <el-input v-model="form.password" show-password />
      </el-form-item>

      <div class="login__footer">
        <el-button type="primary" native-type="submit" :loading="loading">
          <p>{{ $t("main.loginBtn") }}</p>
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loading: false,
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "Введіть І`мя", trigger: "blur" },
        ],
        password: [
          {
            required: true,
            message: "Введіть пароль",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitLogin() {
      this.loading = true;
      let username = this.form.username;
      let password = this.form.password;
      this.$store
        .dispatch("LogIn", { username, password })

        .then(() => this.$router.push("/"))
        .catch((err) => {
          this.$message({
            message: this.$t("connection error"),
            type: "error",
          });
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 4rem;

  h1 {
    text-align: center;
  }

  &__form {
    border-radius: 10px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.75);
    max-width: 400px;
    padding: 1rem;
    height: max-content;
  }

  &__footer {
    text-align: right;
    margin-top: 2rem;
  }
}
</style>
