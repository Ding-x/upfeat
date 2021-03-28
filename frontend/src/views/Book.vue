<template>
  <div>
    <BookDetail
      v-bind:book="this.books.filter(b => b.id == this.$route.params.id)[0]"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BookDetail from "@/components/BookDetail.vue";

export default {
  name: "book",
  components: {
    BookDetail
  },
  computed: {
    ...mapGetters({
      books: "books"
    })
  }
};
</script>
