import axios from "axios";
export default {
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
  },

  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, payload) {
      state.status = "success";
      state.token = payload.token;
      state.user = payload.user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost:3000/login",
          data: user,
          method: "POST",
        })
          .then((resp) => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            //если заголовка не будет, удалить его.
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", { token: token, user: user });
            resolve(resp);
          })
          .catch((err) => {
            //обработка ошибки
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    //выход
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("logout");
        localStorage.removeItem("token");
        //по необходимости.
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
};
