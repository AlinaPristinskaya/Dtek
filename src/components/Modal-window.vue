<template>
  <el-dialog
    :title="$t('editing')"
    :visible.sync="visible"
    width="70%"
    center
    @close="closeModalWindow"
    @open="openModal"
    class="modal"
  >
    <el-form
      width="30%"
      ref="form"
      class="modal__form"
      :model="form"
      label-width="120px"
      @submit.native.prevent="submit"
    >
      <template v-for="(item, index) in dataModal">
        <el-form-item
          style="max-width: 350px"
          v-if="!item.id"
          :key="item.id"
          :label="$t(`${index}`)"
        >
          <el-input v-if="!item.id" :value="item"></el-input>
        </el-form-item>
      </template>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeModalWindow">{{ $t("cancel") }}</el-button>
      <el-button type="primary" @click="submit">{{ $t("send") }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "ModalWindow",
  props: {
    dataModal: {
      type: Object,
      default: () => {},
    },
    multipleSelection: {
      type: Array,
      default: () => [],
    },
    comment: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    form: {
      comment: "",
    },
    visible: true,
  }),
  mounted() {
    console.log("dataModal", this.dataModal);
  },
  methods: {
    openModal() {
      this.form.comment = this.comment;
    },
    submit(valueForm) {
      valueForm = this.form;
      this.$emit("submitForm", { valueForm });
    },
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
