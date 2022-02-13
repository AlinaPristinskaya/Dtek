<template>
  <div class="order">
    <filter-bar
      :text-btn="this.$t('addForm')"
      :text-check="this.$t('activeFlight')"
    />
    <Table :loading="loading" :table-data="dataTable" @clickCell="clickCell" />
    <transition name="el-zoom-in-center">
      <ModalWindow
        v-if="modalWindow"
        :dataModal="rowDataTable"
        @closeModalWindow="closeModalWindow"
      />
    </transition>
  </div>
</template>

<script>
import FilterBar from "../components/FilterBar";
import Table from "../components/Table";
import ModalWindow from "../components/Modal-window";

export default {
  name: "Processing-order",
  components: {
    ModalWindow,
    FilterBar,
    Table,
  },
  data: () => ({
    loading: false,
    dataTable: [],
    modalWindow: false,
    rowDataTable: null,
  }),
  created() {},
  methods: {
    clickCell(row) {
      this.modalWindow = true;
      this.rowDataTable = row;
      console.log("this.rowDataTable", this.rowDataTable);
    },
    closeModalWindow() {
      this.modalWindow = false;
      console.log(" this.modalWindow", this.modalWindow);
    },
  },
};
</script>

<style scoped lang="scss">
.order {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
</style>
