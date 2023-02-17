import Vue from "vue";
import Vuex from "vuex";
import router from "@/router/index";
import axios from "axios";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    users: [],
    hasPermission: false,
    serverURL: process.env.VUE_APP_SERVER_URL,
    isAuthError: false,
    err: "",
  },
  mutations: {
    authenticateUser(state, userEntry) {
      if (
        state.users[0].login === userEntry.login &&
        state.users[0].password === userEntry.password
      ) {
        state.hasPermission = true;
        state.isAuthError = false;
        router.push({ name: "MainPage" });
        return;
      }
      state.isAuthError = true;
    },
  },
  actions: {
    async requestPermission({ commit, state }, userAuth) {
      await axios
        .get(state.serverURL + "/api/user")
        .then((response) => {
          const user = response.data;
          state.users.push(user);
          commit("authenticateUser", userAuth);
        })
        .catch((err) => {
          state.err = err;
          state.isAuthError = true;
        });
    },
  },
});

export default store;
