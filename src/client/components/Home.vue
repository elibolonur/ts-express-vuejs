<template>
  <div class="home-container">
    <p>{{msg}}</p>
    <br />

    <button @click="testFunction">Click me to test</button>
    <p class="t">change me</p>
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Home extends Vue {
  msg: string = "Boilerplate for Express + Vue.JS with Typescript";
  constructor() {
    super();
    console.log("constructor executed");
  }

  created() {
    console.log("created hook");
  }

  mounted() {
    console.log("mounted hook");
  }

  testFunction() {
    alert("executed function");
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  background-color: $secondary;
}
</style>
