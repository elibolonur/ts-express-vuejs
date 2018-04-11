<template>
  <div id="app">
    <img src="~assets/logo.png">
    <h1>{{msg}}</h1>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class App extends Vue {
  msg: string;

  constructor() {
    super();
    this.msg = "Hello world!";
  }
}
</script>

<style lang="scss">
</style>
