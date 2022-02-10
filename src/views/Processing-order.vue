<template>
  <div class="order">
    <filter-bar text-btn="Добавити форму" text-check="Активні рейси" />
    <Table :loading="loading" :table-data="dataTable" />
  </div>
</template>

<script>
import FilterBar from "../components/FilterBar";
import Table from "../components/Table";

export default {
  name: "Processing-order",
  components: {
    FilterBar,
    Table,
  },
  data: () => ({
    loading: false,
    dataTable: [],
  }),
  created() {},
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
