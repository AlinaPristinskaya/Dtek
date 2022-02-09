<template>
  <el-table
    :data="tableData"
    v-loading.fullscreen.lock="loading"
    style="width: 100%"
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
        trip: "48",
        dataDrip: "2021-05-03",
        dataCreate: "2021-03-03",
        order: "77",
        status: "Відміна",
      },
      {
        trip: "48",
        dataDrip: "2021-05-03",
        dataCreate: "2021-03-03",
        order: "77",
        status: "Відміна",
      },
      {
        trip: "48",
        dataDrip: "2021-05-03",
        dataCreate: "2021-03-03",
        order: "77",
        status: "Відміна",
      },
      {
        trip: "48",
        dataDrip: "2021-05-03",
        dataCreate: "2021-03-03",
        order: "77",
        status: "Відміна",
      },
      {
        trip: "48",
        dataDrip: "2021-05-03",
        dataCreate: "2021-03-03",
        order: "77",
        status: "Відміна",
      },
      {
        trip: "48",
        dataDrip: "2021-05-03",
        dataCreate: "2021-03-03",
        order: "77",
        status: "Відміна",
      },
    ],
  }),
};
</script>

<style scoped></style>
