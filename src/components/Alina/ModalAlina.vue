<template>
  <el-dialog :visible.sync="visible" width="70%" center>
    <Purchaser />
  </el-dialog>
</template>

<script>
import Purchaser from "./Purchaser.vue";
export default {
  name: "ModalAlina",
  components: {
    Purchaser,
  },

  data: () => ({
    visible: true,
  }),
  mounted() {
    console.log("dataModal", this.dataModal);
  },
  methods: {
    /*  openModal() {
      this.form.comment = this.comment;
    },
    submit(valueForm) {
      valueForm = this.form;
      this.$emit("submitForm", { valueForm });
    }, */
    closeModalWindow(val) {
      this.$emit("closeModalWindow", val);
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  &__form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
  }
}
</style>
