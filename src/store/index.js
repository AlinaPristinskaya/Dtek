import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataTable: [],
    loading: false,
  },
  mutations: {
    SET_PARAMS(state, dataTable) {
      state.dataTable = dataTable;
    },
  },
  actions: {
    async getData({ commit }) {
      await axios
        .get(`http://localhost:3000/db`)
        .then((response) => {
          const dataTable = response.data;
          commit("GET_SET_PARAMS", dataTable);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    },
  },

  modules: {
    auth,
  },
});
