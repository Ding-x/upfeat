<template>
  <div class="text-center">
    <img alt="Vue logo" src="../assets/logo.webp" />
    <books v-bind:books="this.books" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Books from "@/components/Books.vue";

export default {
  name: "home",
  components: {
    Books
  },
  computed: {
    ...mapGetters({
      books: "books"
    })
  }
};
</script>
