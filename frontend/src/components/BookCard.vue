<template>
  <div>
    <b-card
      no-body
      style="max-width: 20rem;"
      :img-src="imageUrl"
      img-alt="Image"
      img-top
    >
      <b-card-body style="min-height: 10rem;">
        <b-card-title> {{ this.book && this.book.title }} </b-card-title>
        <b-card-sub-title class="mb-2">
          {{ this.book && this.book.author }}</b-card-sub-title
        >
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item>
          Price: ${{ this.book && this.book.price }}</b-list-group-item
        >
        <b-list-group-item>
          Qty: {{ this.book && this.book.quantity }}</b-list-group-item
        >
      </b-list-group>

      <b-card-body>
        <b-form-checkbox
          :checked="this.book.sold === 1 ? true : false"
          @change="markSold"
          >Sold</b-form-checkbox
        >
      </b-card-body>

      <b-card-footer>
        <b-button
          variant="outline-danger"
          class="mr-3"
          @click="toggleAlertModal"
          >Delete</b-button
        >
        <b-button variant="outline-primary" @click="toBookDetail"
          >Detail</b-button
        >
      </b-card-footer>
    </b-card>
    <alert-modal
      v-bind:isAlertModalVisible="isAlertModalVisible"
      v-bind:message="message"
      @onConfirm="deleteABook"
      @toggleAlertModal="toggleAlertModal"
    />
    <b-alert :show="isSoldAlertVisible" dismissible>
      The book is {{ this.book && this.book.sold === 1 ? "" : "not" }} sold
    </b-alert>
  </div>
</template>

<script>
import AlertModal from "@/components/AlertModal.vue";
import { IMAGE_URL } from "@/assets/constant.js";

export default {
  name: "BookCard",
  components: {
    AlertModal
  },
  props: {
    book: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      imageUrl: IMAGE_URL,
      isAlertModalVisible: false,
      isSoldAlertVisible: false,
      message: "Are you sure to delete the book?"
    };
  },
  methods: {
    toBookDetail() {
      this.$router.push("/book/" + this.book.id);
    },
    deleteABook() {
      this.$store.dispatch("deleteBook", this.book.id);
      this.toggleAlertModal();
    },
    markSold() {
      this.$store.dispatch("markSold", {
        id: this.book.id,
        isSold: this.book.sold && this.book.sold === 1 ? 0 : 1
      });
      this.isSoldAlertVisible = !this.isSoldAlertVisible;
    },
    toggleAlertModal() {
      this.isAlertModalVisible = !this.isAlertModalVisible;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
