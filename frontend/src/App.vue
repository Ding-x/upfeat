<template>
  <div id="app">
    <b-alert
      :show="this.isErrorAlertVisible"
      dismissible
      @dismissed="hideErrorAlert"
      class="alert"
    >
      {{ this.errorMessage }}
    </b-alert>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store.dispatch("getBooks");
  },
  methods: {
    hideErrorAlert() {
      this.$store.dispatch("hideErrorAlert");
    }
  },
  computed: {
    ...mapGetters({
      isErrorAlertVisible: "isErrorAlertVisible",
      errorMessage: "errorMessage"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.alert {
  position: fixed;
  top: 50px;
  width: 100%;
}
</style>
