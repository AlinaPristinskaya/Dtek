<template>
  <div>
    <Ttn />
    <hr />
    <Warehouse />
    <hr />
    <Accouting />
    <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
    <el-button @click="resetForm('ruleForm')">Reset</el-button>
  </div>
</template>

<script>
import Accouting from "./Accouting.vue";
import Ttn from "./Ttn.vue";
import Warehouse from "./Warehouse.vue";
export default {
  name: "Purchaser",
  components: {
    Accouting,
    Ttn,
    Warehouse,
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped></style>
