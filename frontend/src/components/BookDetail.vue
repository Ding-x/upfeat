<template>
  <div>
    <b-container class="bv-example-row">
      <b-row align-h="center">
        <h1 class="mt-5 mb-5">Book Detail</h1>
      </b-row>
      <b-row align-h="start">
        <b-button class="mr-3 mb-3" variant="primary" @click="toHome"
          >Back</b-button
        >
      </b-row>
      <b-row>
        <b-card>
          <b-media no-body>
            <b-media-aside>
              <b-img
                blank-color="#ccc"
                :src="imageUrl"
                width="256"
                height="256"
                alt=""
              ></b-img>
            </b-media-aside>

            <b-media-body class="ml-3">
              <h2>{{ this.book && this.book.title }}</h2>
              <h4 class="mt-3">{{ this.book && this.book.author }}</h4>
              <h6 class="mt-3">Price: ${{ this.book && this.book.price }}</h6>
              <h6 class="mt-3">Qty: {{ this.book && this.book.quantity }}</h6>
              <h6 class="mt-3">
                Version: {{ this.book && this.book.version }}
              </h6>
              <p class="mt-3">
                {{ this.book && this.book.description }}
              </p>
            </b-media-body>
          </b-media>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { IMAGE_URL } from "@/constant.js";

export default {
  name: "BookDetail",
  props: {
    book: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      imageUrl: IMAGE_URL
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
