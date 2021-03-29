import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { BASE_URL } from "@/assets/constant.js";

axios.defaults.baseURL = BASE_URL;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    isErrorAlertVisible: true,
    errorMessage: ""
  },
  mutations: {
    GET_BOOKS(state, payload) {
      state.books = payload;
    },
    ADD_BOOK(state, payload) {
      state.books.push(payload);
    },
    DELETE_BOOK(state, id) {
      state.books = state.books.filter(b => b.id !== id);
    },
    MARK_SOLD(state, payload) {
      state.books.map(b => {
        if (b.id === payload.id) {
          b.sold = payload.isSold;
        }
        return b;
      });
    },
    SHOW_ERROR_ALERT(state, errorMessage) {
      state.isErrorAlertVisible = true;
      state.errorMessage = errorMessage;
    },
    HIDE_ERROR_ALERT(state) {
      state.isErrorAlertVisible = false;
      state.errorMessage = "";
    }
  },
  actions: {
    getBooks({ commit }) {
      axios
        .get("/api/books")
        .then(response => {
          commit("GET_BOOKS", response.data.data);
        })
        .catch(err => {
          this.dispatch("showErrorAlert", "Fail to fetch books.");
          console.log(err);
        });
    },
    addBook({ commit }, payload) {
      axios
        .post("/api/books", payload)
        .then(response => {
          commit("ADD_BOOK", response.data.data);
        })
        .catch(err => {
          this.dispatch("showErrorAlert", "Fail to add a new book.");
          console.log(err);
        });
    },
    deleteBook({ commit }, id) {
      axios
        .delete("/api/books/" + id)
        .then(commit("DELETE_BOOK", id))
        .catch(err => {
          this.dispatch("showErrorAlert", "Fail to delete the book.");
          console.log(err);
        });
    },
    markSold({ commit }, payload) {
      axios
        .put("/api/books/" + payload.id, { sold: payload.isSold })
        .then(commit("MARK_SOLD", payload))
        .catch(err => {
          this.dispatch("showErrorAlert", "Fail to mark the book as sold.");
          console.log(err);
        });
    },
    showErrorAlert({ commit }, errorMessage) {
      commit("SHOW_ERROR_ALERT", errorMessage);
    },
    hideErrorAlert({ commit }) {
      commit("HIDE_ERROR_ALERT");
    }
  },
  getters: {
    books: state => state.books,
    isErrorAlertVisible: state => state.isErrorAlertVisible,
    errorMessage: state => state.errorMessage
  }
});
