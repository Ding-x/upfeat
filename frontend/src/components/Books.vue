<template>
  <div>
    <h1 class="title mb-3 text-center">
      USED BOOK DASHBOARD
    </h1>
    <b-container class="bv-example-row">
      <b-row align-h="end">
        <b-button
          class="mr-3 mb-3"
          variant="primary"
          @click="toggleAddBookModal"
          >Add</b-button
        >
      </b-row>
      <b-row cols="1" cols-sm="2" cols-md="4">
        <b-col class="mb-3" v-for="(book, index) in books" :key="index"
          ><BookCard v-bind:book="book"
        /></b-col>
      </b-row>
    </b-container>
    <add-new-book-modal
      v-bind:isAddBookModalVisible="isAddBookModalVisible"
      @toggleAddBookModal="toggleAddBookModal"
    />
  </div>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import AddNewBookModal from "@/components/AddNewBookModal.vue";

export default {
  name: "UpStart",
  components: {
    BookCard,
    AddNewBookModal
  },
  props: {
    books: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isAddBookModalVisible: false
    };
  },
  methods: {
    toggleAddBookModal() {
      this.isAddBookModalVisible = !this.isAddBookModalVisible;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
  color: rgba(207, 7, 7, 0.733);
}
</style>
