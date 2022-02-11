<template>
  <el-table
    :data="tableData"
    v-loading.fullscreen.lock="loading"
    style="width: 100%"
    @cell-click="clickCell"
  >
    <el-table-column prop="trip" label="Рейс №"> </el-table-column>
    <el-table-column prop="dataDrip" label="Дата рейсу"></el-table-column>
    <el-table-column prop="order" label="Номера заявок"> </el-table-column>
    <el-table-column prop="dataCreate" label="Дата створення">
    </el-table-column>
    <el-table-column prop="status" label="Статус"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "Table",
  props: {
    loading: {
      type: Boolean,
      default: () => false,
    },
  },
  data: () => ({
    tableData: [
      {
        id: 1,
        trip: "48",
        dataDrip: "2021-05-03",
        dataCreate: "2021-03-03",
        order: "77",
        status: "Відміна",
      },
      {
        id: 2,
        trip: "48",
        dataDrip: "2021-05-03",
        dataCreate: "2021-03-03",
        order: "77",
        status: "Відміна",
      },
      {
        id: 3,
        trip: "48",
        dataDrip: "2021-05-03",
        dataCreate: "2021-03-03",
        order: "77",
        status: "Відміна",
      },
      {
        id: 4,
        trip: "48",
        dataDrip: "2021-05-03",
        dataCreate: "2021-03-03",
        order: "77",
        status: "Відміна",
      },
      {
        id: 5,
        trip: "48",
        dataDrip: "2021-05-03",
        dataCreate: "2021-03-03",
        order: "77",
        status: "Відміна",
      },
      {
        id: 6,
        trip: "48",
        dataDrip: "2021-05-03",
        dataCreate: "2021-03-03",
        order: "77",
        status: "Відміна",
      },
    ],
  }),
  methods: {
    /****/
    clickCell(row) {
      console.log("row", row);
      this.$emit("clickCell", row);
    },
  },
};
</script>

<style scoped></style>
