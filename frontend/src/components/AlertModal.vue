<template>
  <b-modal v-model="isAlertModalVisible" hide-footer>
    <template v-slot:modal-title class="title text-center">
      Notice
    </template>
    <div class="d-block">
      <b-form @submit="onSubmit" @reset="onReset">
        <p>{{ message }}</p>
        <b-button type="submit" variant="primary" class="mr-3">OK</b-button>
        <b-button type="reset" variant="danger">Cancel</b-button>
      </b-form>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "AlertModal",
  props: {
    isAlertModalVisible: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ""
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$emit("onConfirm");
      this.$emit("toggleAlertModal");
    },
    onReset(evt) {
      evt.preventDefault();
      this.$emit("toggleAlertModal");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
