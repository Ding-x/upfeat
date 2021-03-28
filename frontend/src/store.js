import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8088";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: []
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
          console.log(err);
        });
    },
    deleteBook({ commit }, id) {
      axios
        .delete("/api/books/" + id)
        .then(commit("DELETE_BOOK", id))
        .catch(err => {
          console.log(err);
        });
    },
    markSold({ commit }, payload) {
      axios
        .put("/api/books/" + payload.id, { sold: payload.isSold })
        .then(commit("MARK_SOLD", payload))
        .catch(err => {
          console.log(err);
        });
    }
  },
  getters: {
    books: state => state.books
  }
});
