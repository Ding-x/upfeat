<template>
  <b-modal v-model="addBookModalState" hide-footer>
    <template v-slot:modal-title class="title text-center">
      Add a new book
    </template>
    <div class="d-block">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-1" label="Book Title:" label-for="title">
          <b-form-input
            id="title"
            v-model="title"
            required
            placeholder="Enter book Title"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Author:" label-for="author">
          <b-form-input
            id="author"
            v-model="author"
            required
            placeholder="Enter author"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Price:" label-for="price">
          <b-form-input
            id="price"
            v-model="price"
            required
            type="number"
            placeholder="Enter price"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Qty:" label-for="qty">
          <b-form-input
            id="qty"
            v-model="qty"
            required
            type="number"
            placeholder="Enter qty"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Version:" label-for="version">
          <b-form-input
            id="version"
            v-model="version"
            required
            placeholder="Enter version"
            type="number"
            max="2021"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-6"
          label="Description:"
          label-for="description"
        >
          <b-form-textarea
            id="description"
            v-model="description"
            placeholder="Enter description"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <div>
          <b-button type="submit" variant="primary" class="mr-3">Add</b-button>
          <b-button type="reset" variant="danger">Cancel</b-button>
        </div>
      </b-form>
    </div>
    <alert-modal
      v-bind:isAlertModalVisible="isAlertModalVisible"
      v-bind:message="message"
      @onConfirm="addBook"
      @toggleAlertModal="toggleAlertModal"
    />
  </b-modal>
</template>

<script>
import AlertModal from "@/components/AlertModal.vue";

export default {
  name: "AddNewBookModal",
  components: {
    AlertModal
  },
  props: {
    isAddBookModalVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: "",
      author: "",
      price: 10,
      qty: 1,
      version: "2021",
      description: "",
      isAlertModalVisible: false,
      message: "Are you sure to add a new book?"
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.toggleAlertModal();
    },
    onReset(evt) {
      evt.preventDefault();
      this.clearForm();
    },
    clearForm() {
      this.title = "";
      this.author = "";
      this.price = 10;
      this.quantity = 1;
      this.version = "2021";
      this.description = "";
      this.$emit("toggleAddBookModal");
    },
    addBook() {
      this.$store.dispatch("addBook", {
        title: this.title,
        author: this.author,
        price: Number(this.price),
        quantity: Number(this.qty),
        version: this.version,
        description: this.description,
        sold: 0
      });
      this.clearForm();
    },
    toggleAlertModal() {
      this.isAlertModalVisible = !this.isAlertModalVisible;
    }
  },
  computed: {
    addBookModalState: {
      get: function() {
        return this.isAddBookModalVisible;
      },
      set: function() {
        this.$emit("toggleAddBookModal");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
